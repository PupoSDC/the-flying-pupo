import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220927EPLLEPLL",
    callsign: "SPMEL",
    name: "MEP class 1",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 27, 14, 1).getTime(),
    arrival: new Date(2022, 8, 27, 15, 51).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 110,
    picTime: 0,
    dualTime: 110,
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
      registration: "SP-MEL",
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
      "latitude": 51.720337,
      "longitude": 19.390497,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "0",
      "timestamp": 1664288144,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.38942,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 251,
      "squawk": "0",
      "timestamp": 1664288145,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.382481,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 252,
      "squawk": "0",
      "timestamp": 1664288158,
      "ems": null
    },
    {
      "latitude": 51.717957,
      "longitude": 19.378546,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 253,
      "squawk": "0",
      "timestamp": 1664288164,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.374762,
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
      "heading": 253,
      "squawk": "0",
      "timestamp": 1664288170,
      "ems": null
    },
    {
      "latitude": 51.716492,
      "longitude": 19.370752,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1664288176,
      "ems": null
    },
    {
      "latitude": 51.715851,
      "longitude": 19.366817,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 255,
      "squawk": "0",
      "timestamp": 1664288182,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.36264,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1664288188,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 19.358208,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664288194,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.353943,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664288200,
      "ems": null
    },
    {
      "latitude": 51.71228,
      "longitude": 19.351749,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664288203,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 19.350264,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664288206,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 19.349077,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664288209,
      "ems": null
    },
    {
      "latitude": 51.709061,
      "longitude": 19.348068,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664288212,
      "ems": null
    },
    {
      "latitude": 51.707794,
      "longitude": 19.34737,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1664288215,
      "ems": null
    },
    {
      "latitude": 51.706455,
      "longitude": 19.347,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664288218,
      "ems": null
    },
    {
      "latitude": 51.705276,
      "longitude": 19.346924,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664288221,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.347153,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664288224,
      "ems": null
    },
    {
      "latitude": 51.702869,
      "longitude": 19.347687,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664288227,
      "ems": null
    },
    {
      "latitude": 51.701752,
      "longitude": 19.348408,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664288230,
      "ems": null
    },
    {
      "latitude": 51.700775,
      "longitude": 19.349365,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664288233,
      "ems": null
    },
    {
      "latitude": 51.699875,
      "longitude": 19.350412,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664288236,
      "ems": null
    },
    {
      "latitude": 51.698914,
      "longitude": 19.351749,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664288239,
      "ems": null
    },
    {
      "latitude": 51.69873,
      "longitude": 19.352045,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664288240,
      "ems": null
    },
    {
      "latitude": 51.697906,
      "longitude": 19.353456,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664288243,
      "ems": null
    },
    {
      "latitude": 51.697376,
      "longitude": 19.354477,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664288245,
      "ems": null
    },
    {
      "latitude": 51.696487,
      "longitude": 19.356203,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664288248,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.356766,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664288249,
      "ems": null
    },
    {
      "latitude": 51.695938,
      "longitude": 19.357538,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288251,
      "ems": null
    },
    {
      "latitude": 51.694977,
      "longitude": 19.35984,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288256,
      "ems": null
    },
    {
      "latitude": 51.69429,
      "longitude": 19.361399,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288258,
      "ems": null
    },
    {
      "latitude": 51.69397,
      "longitude": 19.362141,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288259,
      "ems": null
    },
    {
      "latitude": 51.69384,
      "longitude": 19.362411,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664288260,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.363098,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288261,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.363403,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288262,
      "ems": null
    },
    {
      "latitude": 51.693047,
      "longitude": 19.36409,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288264,
      "ems": null
    },
    {
      "latitude": 51.691772,
      "longitude": 19.366892,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288269,
      "ems": null
    },
    {
      "latitude": 51.691418,
      "longitude": 19.367676,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288270,
      "ems": null
    },
    {
      "latitude": 51.69035,
      "longitude": 19.370193,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288275,
      "ems": null
    },
    {
      "latitude": 51.689556,
      "longitude": 19.372177,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288279,
      "ems": null
    },
    {
      "latitude": 51.687973,
      "longitude": 19.376068,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288287,
      "ems": null
    },
    {
      "latitude": 51.687416,
      "longitude": 19.377518,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664288290,
      "ems": null
    },
    {
      "latitude": 51.686344,
      "longitude": 19.380264,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "timestamp": 1664288296,
      "ems": null
    },
    {
      "latitude": 51.685738,
      "longitude": 19.382019,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664288298,
      "ems": null
    },
    {
      "latitude": 51.684311,
      "longitude": 19.385895,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664288306,
      "ems": null
    },
    {
      "latitude": 51.682758,
      "longitude": 19.390182,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664288314,
      "ems": null
    },
    {
      "latitude": 51.681793,
      "longitude": 19.392948,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664288320,
      "ems": null
    },
    {
      "latitude": 51.680466,
      "longitude": 19.396809,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664288326,
      "ems": null
    },
    {
      "latitude": 51.679081,
      "longitude": 19.400635,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664288332,
      "ems": null
    },
    {
      "latitude": 51.677685,
      "longitude": 19.404373,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664288338,
      "ems": null
    },
    {
      "latitude": 51.676476,
      "longitude": 19.40773,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664288344,
      "ems": null
    },
    {
      "latitude": 51.67511,
      "longitude": 19.411728,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664288351,
      "ems": null
    },
    {
      "latitude": 51.673828,
      "longitude": 19.41544,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664288357,
      "ems": null
    },
    {
      "latitude": 51.67247,
      "longitude": 19.419098,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "timestamp": 1664288362,
      "ems": null
    },
    {
      "latitude": 51.67168,
      "longitude": 19.420929,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288365,
      "ems": null
    },
    {
      "latitude": 51.670937,
      "longitude": 19.422607,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288368,
      "ems": null
    },
    {
      "latitude": 51.670052,
      "longitude": 19.424515,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "timestamp": 1664288372,
      "ems": null
    },
    {
      "latitude": 51.66925,
      "longitude": 19.426352,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288375,
      "ems": null
    },
    {
      "latitude": 51.668468,
      "longitude": 19.428329,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288378,
      "ems": null
    },
    {
      "latitude": 51.667725,
      "longitude": 19.430084,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288380,
      "ems": null
    },
    {
      "latitude": 51.666977,
      "longitude": 19.431992,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288384,
      "ems": null
    },
    {
      "latitude": 51.665359,
      "longitude": 19.436077,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288390,
      "ems": null
    },
    {
      "latitude": 51.663906,
      "longitude": 19.43985,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "timestamp": 1664288396,
      "ems": null
    },
    {
      "latitude": 51.662979,
      "longitude": 19.442535,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664288400,
      "ems": null
    },
    {
      "latitude": 51.662338,
      "longitude": 19.444391,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664288403,
      "ems": null
    },
    {
      "latitude": 51.661812,
      "longitude": 19.445877,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "squawk": "7000",
      "timestamp": 1664288405,
      "ems": null
    },
    {
      "latitude": 51.661102,
      "longitude": 19.448101,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288409,
      "ems": null
    },
    {
      "latitude": 51.660507,
      "longitude": 19.449921,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288411,
      "ems": null
    },
    {
      "latitude": 51.660049,
      "longitude": 19.451294,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288414,
      "ems": null
    },
    {
      "latitude": 51.657902,
      "longitude": 19.457016,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "7000",
      "timestamp": 1664288423,
      "ems": null
    },
    {
      "latitude": 51.65712,
      "longitude": 19.458792,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288426,
      "ems": null
    },
    {
      "latitude": 51.656296,
      "longitude": 19.460796,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288429,
      "ems": null
    },
    {
      "latitude": 51.655563,
      "longitude": 19.462578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288432,
      "ems": null
    },
    {
      "latitude": 51.654781,
      "longitude": 19.464417,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288435,
      "ems": null
    },
    {
      "latitude": 51.654083,
      "longitude": 19.466095,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288438,
      "ems": null
    },
    {
      "latitude": 51.653339,
      "longitude": 19.467926,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "squawk": "7000",
      "timestamp": 1664288441,
      "ems": null
    },
    {
      "latitude": 51.652596,
      "longitude": 19.469681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288444,
      "ems": null
    },
    {
      "latitude": 51.651764,
      "longitude": 19.471485,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288447,
      "ems": null
    },
    {
      "latitude": 51.650162,
      "longitude": 19.475122,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288453,
      "ems": null
    },
    {
      "latitude": 51.648651,
      "longitude": 19.478611,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288459,
      "ems": null
    },
    {
      "latitude": 51.647007,
      "longitude": 19.482498,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288465,
      "ems": null
    },
    {
      "latitude": 51.645519,
      "longitude": 19.486084,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "squawk": "7000",
      "timestamp": 1664288471,
      "ems": null
    },
    {
      "latitude": 51.644165,
      "longitude": 19.489523,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288477,
      "ems": null
    },
    {
      "latitude": 51.643562,
      "longitude": 19.491196,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664288480,
      "ems": null
    },
    {
      "latitude": 51.643143,
      "longitude": 19.492722,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288482,
      "ems": null
    },
    {
      "latitude": 51.6427,
      "longitude": 19.494942,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664288486,
      "ems": null
    },
    {
      "latitude": 51.642517,
      "longitude": 19.496872,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664288489,
      "ems": null
    },
    {
      "latitude": 51.642445,
      "longitude": 19.498672,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664288491,
      "ems": null
    },
    {
      "latitude": 51.642445,
      "longitude": 19.501114,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664288495,
      "ems": null
    },
    {
      "latitude": 51.64249,
      "longitude": 19.50325,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664288498,
      "ems": null
    },
    {
      "latitude": 51.64249,
      "longitude": 19.505157,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664288501,
      "ems": null
    },
    {
      "latitude": 51.64249,
      "longitude": 19.507446,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664288504,
      "ems": null
    },
    {
      "latitude": 51.642445,
      "longitude": 19.509659,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664288507,
      "ems": null
    },
    {
      "latitude": 51.642426,
      "longitude": 19.511644,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664288510,
      "ems": null
    },
    {
      "latitude": 51.642426,
      "longitude": 19.513798,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "squawk": "7000",
      "timestamp": 1664288513,
      "ems": null
    },
    {
      "latitude": 51.642426,
      "longitude": 19.516247,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664288516,
      "ems": null
    },
    {
      "latitude": 51.64249,
      "longitude": 19.518051,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664288519,
      "ems": null
    },
    {
      "latitude": 51.64254,
      "longitude": 19.520569,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664288522,
      "ems": null
    },
    {
      "latitude": 51.642609,
      "longitude": 19.52508,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664288528,
      "ems": null
    },
    {
      "latitude": 51.642632,
      "longitude": 19.52919,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664288534,
      "ems": null
    },
    {
      "latitude": 51.642586,
      "longitude": 19.533691,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664288540,
      "ems": null
    },
    {
      "latitude": 51.642563,
      "longitude": 19.537848,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664288546,
      "ems": null
    },
    {
      "latitude": 51.642586,
      "longitude": 19.54155,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664288552,
      "ems": null
    },
    {
      "latitude": 51.642353,
      "longitude": 19.54422,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664288555,
      "ems": null
    },
    {
      "latitude": 51.641922,
      "longitude": 19.545866,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664288557,
      "ems": null
    },
    {
      "latitude": 51.641281,
      "longitude": 19.547127,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664288560,
      "ems": null
    },
    {
      "latitude": 51.639267,
      "longitude": 19.548538,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664288564,
      "ems": null
    },
    {
      "latitude": 51.637894,
      "longitude": 19.548464,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664288567,
      "ems": null
    },
    {
      "latitude": 51.636486,
      "longitude": 19.547653,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664288570,
      "ems": null
    },
    {
      "latitude": 51.635422,
      "longitude": 19.546459,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664288573,
      "ems": null
    },
    {
      "latitude": 51.634415,
      "longitude": 19.544603,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664288576,
      "ems": null
    },
    {
      "latitude": 51.633926,
      "longitude": 19.543228,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664288579,
      "ems": null
    },
    {
      "latitude": 51.633408,
      "longitude": 19.540224,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664288581,
      "ems": null
    },
    {
      "latitude": 51.633453,
      "longitude": 19.537106,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664288585,
      "ems": null
    },
    {
      "latitude": 51.634048,
      "longitude": 19.534063,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664288588,
      "ems": null
    },
    {
      "latitude": 51.634998,
      "longitude": 19.531708,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664288591,
      "ems": null
    },
    {
      "latitude": 51.636395,
      "longitude": 19.5298,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664288594,
      "ems": null
    },
    {
      "latitude": 51.638069,
      "longitude": 19.528656,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664288597,
      "ems": null
    },
    {
      "latitude": 51.639862,
      "longitude": 19.528198,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664288600,
      "ems": null
    },
    {
      "latitude": 51.64151,
      "longitude": 19.528347,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664288603,
      "ems": null
    },
    {
      "latitude": 51.643158,
      "longitude": 19.529089,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1664288606,
      "ems": null
    },
    {
      "latitude": 51.644806,
      "longitude": 19.530573,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1664288610,
      "ems": null
    },
    {
      "latitude": 51.645905,
      "longitude": 19.531984,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664288612,
      "ems": null
    },
    {
      "latitude": 51.646774,
      "longitude": 19.534073,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664288615,
      "ems": null
    },
    {
      "latitude": 51.647148,
      "longitude": 19.536362,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664288619,
      "ems": null
    },
    {
      "latitude": 51.647285,
      "longitude": 19.538727,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664288621,
      "ems": null
    },
    {
      "latitude": 51.647335,
      "longitude": 19.541092,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664288624,
      "ems": null
    },
    {
      "latitude": 51.647335,
      "longitude": 19.543457,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664288627,
      "ems": null
    },
    {
      "latitude": 51.647141,
      "longitude": 19.545792,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664288631,
      "ems": null
    },
    {
      "latitude": 51.64682,
      "longitude": 19.548241,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664288633,
      "ems": null
    },
    {
      "latitude": 51.646496,
      "longitude": 19.550171,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664288636,
      "ems": null
    },
    {
      "latitude": 51.646122,
      "longitude": 19.552307,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664288639,
      "ems": null
    },
    {
      "latitude": 51.645611,
      "longitude": 19.554367,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288642,
      "ems": null
    },
    {
      "latitude": 51.644943,
      "longitude": 19.556257,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288645,
      "ems": null
    },
    {
      "latitude": 51.644123,
      "longitude": 19.557877,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664288648,
      "ems": null
    },
    {
      "latitude": 51.643295,
      "longitude": 19.559599,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "timestamp": 1664288651,
      "ems": null
    },
    {
      "latitude": 51.6427,
      "longitude": 19.560934,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664288654,
      "ems": null
    },
    {
      "latitude": 51.641785,
      "longitude": 19.562864,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "squawk": "7000",
      "timestamp": 1664288657,
      "ems": null
    },
    {
      "latitude": 51.640957,
      "longitude": 19.564743,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "squawk": "7000",
      "timestamp": 1664288660,
      "ems": null
    },
    {
      "latitude": 51.640396,
      "longitude": 19.566803,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664288664,
      "ems": null
    },
    {
      "latitude": 51.640274,
      "longitude": 19.568655,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664288666,
      "ems": null
    },
    {
      "latitude": 51.640503,
      "longitude": 19.570436,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664288668,
      "ems": null
    },
    {
      "latitude": 51.641094,
      "longitude": 19.572601,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664288671,
      "ems": null
    },
    {
      "latitude": 51.642399,
      "longitude": 19.574814,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664288675,
      "ems": null
    },
    {
      "latitude": 51.645004,
      "longitude": 19.576645,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664288680,
      "ems": null
    },
    {
      "latitude": 51.646404,
      "longitude": 19.576797,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1664288683,
      "ems": null
    },
    {
      "latitude": 51.648468,
      "longitude": 19.576004,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664288686,
      "ems": null
    },
    {
      "latitude": 51.649849,
      "longitude": 19.574814,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664288689,
      "ems": null
    },
    {
      "latitude": 51.65094,
      "longitude": 19.573481,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664288691,
      "ems": null
    },
    {
      "latitude": 51.652222,
      "longitude": 19.570881,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664288695,
      "ems": null
    },
    {
      "latitude": 51.652779,
      "longitude": 19.568939,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664288698,
      "ems": null
    },
    {
      "latitude": 51.653046,
      "longitude": 19.564127,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664288702,
      "ems": null
    },
    {
      "latitude": 51.652546,
      "longitude": 19.561539,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664288706,
      "ems": null
    },
    {
      "latitude": 51.651802,
      "longitude": 19.559631,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664288708,
      "ems": null
    },
    {
      "latitude": 51.650826,
      "longitude": 19.558105,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664288711,
      "ems": null
    },
    {
      "latitude": 51.649429,
      "longitude": 19.557037,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664288715,
      "ems": null
    },
    {
      "latitude": 51.648357,
      "longitude": 19.556732,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664288718,
      "ems": null
    },
    {
      "latitude": 51.647141,
      "longitude": 19.557148,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664288721,
      "ems": null
    },
    {
      "latitude": 51.645985,
      "longitude": 19.558411,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664288724,
      "ems": null
    },
    {
      "latitude": 51.645145,
      "longitude": 19.559937,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288727,
      "ems": null
    },
    {
      "latitude": 51.644485,
      "longitude": 19.561306,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288729,
      "ems": null
    },
    {
      "latitude": 51.643608,
      "longitude": 19.563141,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664288733,
      "ems": null
    },
    {
      "latitude": 51.642773,
      "longitude": 19.564972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288736,
      "ems": null
    },
    {
      "latitude": 51.642059,
      "longitude": 19.566353,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664288739,
      "ems": null
    },
    {
      "latitude": 51.64035,
      "longitude": 19.568405,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664288743,
      "ems": null
    },
    {
      "latitude": 51.639,
      "longitude": 19.568558,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664288747,
      "ems": null
    },
    {
      "latitude": 51.637344,
      "longitude": 19.567318,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664288751,
      "ems": null
    },
    {
      "latitude": 51.636703,
      "longitude": 19.565834,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664288754,
      "ems": null
    },
    {
      "latitude": 51.636627,
      "longitude": 19.562225,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664288757,
      "ems": null
    },
    {
      "latitude": 51.637436,
      "longitude": 19.55982,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664288760,
      "ems": null
    },
    {
      "latitude": 51.638947,
      "longitude": 19.557892,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664288763,
      "ems": null
    },
    {
      "latitude": 51.640396,
      "longitude": 19.557419,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664288766,
      "ems": null
    },
    {
      "latitude": 51.642212,
      "longitude": 19.558334,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664288769,
      "ems": null
    },
    {
      "latitude": 51.643143,
      "longitude": 19.559708,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1664288772,
      "ems": null
    },
    {
      "latitude": 51.643562,
      "longitude": 19.561768,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664288775,
      "ems": null
    },
    {
      "latitude": 51.643433,
      "longitude": 19.563457,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664288778,
      "ems": null
    },
    {
      "latitude": 51.642838,
      "longitude": 19.565983,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664288781,
      "ems": null
    },
    {
      "latitude": 51.642445,
      "longitude": 19.567642,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664288784,
      "ems": null
    },
    {
      "latitude": 51.641792,
      "longitude": 19.569702,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664288787,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.571625,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288790,
      "ems": null
    },
    {
      "latitude": 51.640583,
      "longitude": 19.573593,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664288793,
      "ems": null
    },
    {
      "latitude": 51.640072,
      "longitude": 19.5755,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664288796,
      "ems": null
    },
    {
      "latitude": 51.639885,
      "longitude": 19.57756,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664288799,
      "ems": null
    },
    {
      "latitude": 51.639954,
      "longitude": 19.57823,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664288802,
      "ems": null
    },
    {
      "latitude": 51.642197,
      "longitude": 19.581646,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664288806,
      "ems": null
    },
    {
      "latitude": 51.644257,
      "longitude": 19.581348,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1664288810,
      "ems": null
    },
    {
      "latitude": 51.646263,
      "longitude": 19.578934,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664288814,
      "ems": null
    },
    {
      "latitude": 51.646915,
      "longitude": 19.576874,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664288817,
      "ems": null
    },
    {
      "latitude": 51.647007,
      "longitude": 19.573975,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664288820,
      "ems": null
    },
    {
      "latitude": 51.646404,
      "longitude": 19.571686,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664288823,
      "ems": null
    },
    {
      "latitude": 51.645287,
      "longitude": 19.570236,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664288826,
      "ems": null
    },
    {
      "latitude": 51.644119,
      "longitude": 19.569916,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "squawk": "7000",
      "timestamp": 1664288829,
      "ems": null
    },
    {
      "latitude": 51.642864,
      "longitude": 19.570618,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664288832,
      "ems": null
    },
    {
      "latitude": 51.641792,
      "longitude": 19.572144,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664288835,
      "ems": null
    },
    {
      "latitude": 51.640911,
      "longitude": 19.573669,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664288838,
      "ems": null
    },
    {
      "latitude": 51.639908,
      "longitude": 19.575262,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664288841,
      "ems": null
    },
    {
      "latitude": 51.639084,
      "longitude": 19.576597,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664288844,
      "ems": null
    },
    {
      "latitude": 51.638165,
      "longitude": 19.578018,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664288847,
      "ems": null
    },
    {
      "latitude": 51.63707,
      "longitude": 19.57979,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664288850,
      "ems": null
    },
    {
      "latitude": 51.636154,
      "longitude": 19.581348,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664288853,
      "ems": null
    },
    {
      "latitude": 51.63533,
      "longitude": 19.582832,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664288856,
      "ems": null
    },
    {
      "latitude": 51.634533,
      "longitude": 19.584503,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288859,
      "ems": null
    },
    {
      "latitude": 51.633739,
      "longitude": 19.586411,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288862,
      "ems": null
    },
    {
      "latitude": 51.633087,
      "longitude": 19.587936,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664288865,
      "ems": null
    },
    {
      "latitude": 51.632309,
      "longitude": 19.589886,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288868,
      "ems": null
    },
    {
      "latitude": 51.631668,
      "longitude": 19.591667,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664288871,
      "ems": null
    },
    {
      "latitude": 51.630993,
      "longitude": 19.593582,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664288874,
      "ems": null
    },
    {
      "latitude": 51.630482,
      "longitude": 19.595032,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288877,
      "ems": null
    },
    {
      "latitude": 51.630249,
      "longitude": 19.595795,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664288879,
      "ems": null
    },
    {
      "latitude": 51.629379,
      "longitude": 19.598942,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288882,
      "ems": null
    },
    {
      "latitude": 51.629196,
      "longitude": 19.599535,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288884,
      "ems": null
    },
    {
      "latitude": 51.628784,
      "longitude": 19.601019,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664288887,
      "ems": null
    },
    {
      "latitude": 51.628109,
      "longitude": 19.603424,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288889,
      "ems": null
    },
    {
      "latitude": 51.627922,
      "longitude": 19.604111,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664288891,
      "ems": null
    },
    {
      "latitude": 51.627045,
      "longitude": 19.607477,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664288895,
      "ems": null
    },
    {
      "latitude": 51.625732,
      "longitude": 19.61113,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288901,
      "ems": null
    },
    {
      "latitude": 51.624989,
      "longitude": 19.612961,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288905,
      "ems": null
    },
    {
      "latitude": 51.624252,
      "longitude": 19.614826,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "timestamp": 1664288907,
      "ems": null
    },
    {
      "latitude": 51.623501,
      "longitude": 19.616852,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288910,
      "ems": null
    },
    {
      "latitude": 51.622986,
      "longitude": 19.617996,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288913,
      "ems": null
    },
    {
      "latitude": 51.622101,
      "longitude": 19.619949,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288916,
      "ems": null
    },
    {
      "latitude": 51.620911,
      "longitude": 19.622398,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664288920,
      "ems": null
    },
    {
      "latitude": 51.620007,
      "longitude": 19.624176,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288922,
      "ems": null
    },
    {
      "latitude": 51.619171,
      "longitude": 19.625961,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288925,
      "ems": null
    },
    {
      "latitude": 51.618565,
      "longitude": 19.627228,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288927,
      "ems": null
    },
    {
      "latitude": 51.617447,
      "longitude": 19.629517,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288931,
      "ems": null
    },
    {
      "latitude": 51.615738,
      "longitude": 19.633236,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664288937,
      "ems": null
    },
    {
      "latitude": 51.614044,
      "longitude": 19.636799,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664288943,
      "ems": null
    },
    {
      "latitude": 51.612328,
      "longitude": 19.640656,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288949,
      "ems": null
    },
    {
      "latitude": 51.610565,
      "longitude": 19.64452,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664288955,
      "ems": null
    },
    {
      "latitude": 51.608917,
      "longitude": 19.648232,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664288962,
      "ems": null
    },
    {
      "latitude": 51.607204,
      "longitude": 19.652023,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664288968,
      "ems": null
    },
    {
      "latitude": 51.605621,
      "longitude": 19.655951,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288974,
      "ems": null
    },
    {
      "latitude": 51.604088,
      "longitude": 19.659805,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288980,
      "ems": null
    },
    {
      "latitude": 51.602596,
      "longitude": 19.66362,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288986,
      "ems": null
    },
    {
      "latitude": 51.601227,
      "longitude": 19.667234,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664288991,
      "ems": null
    },
    {
      "latitude": 51.599487,
      "longitude": 19.671614,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664288998,
      "ems": null
    },
    {
      "latitude": 51.598034,
      "longitude": 19.675217,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289004,
      "ems": null
    },
    {
      "latitude": 51.596741,
      "longitude": 19.678444,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289010,
      "ems": null
    },
    {
      "latitude": 51.5951,
      "longitude": 19.682388,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "squawk": "7000",
      "timestamp": 1664289015,
      "ems": null
    },
    {
      "latitude": 51.593811,
      "longitude": 19.685644,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664289021,
      "ems": null
    },
    {
      "latitude": 51.592392,
      "longitude": 19.689133,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289026,
      "ems": null
    },
    {
      "latitude": 51.590881,
      "longitude": 19.693291,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664289033,
      "ems": null
    },
    {
      "latitude": 51.58947,
      "longitude": 19.697037,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664289039,
      "ems": null
    },
    {
      "latitude": 51.587978,
      "longitude": 19.700699,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664289045,
      "ems": null
    },
    {
      "latitude": 51.586536,
      "longitude": 19.704361,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289051,
      "ems": null
    },
    {
      "latitude": 51.58514,
      "longitude": 19.707794,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289058,
      "ems": null
    },
    {
      "latitude": 51.583923,
      "longitude": 19.71081,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664289064,
      "ems": null
    },
    {
      "latitude": 51.582687,
      "longitude": 19.713482,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289070,
      "ems": null
    },
    {
      "latitude": 51.58202,
      "longitude": 19.71489,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289073,
      "ems": null
    },
    {
      "latitude": 51.580811,
      "longitude": 19.717638,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664289079,
      "ems": null
    },
    {
      "latitude": 51.57962,
      "longitude": 19.720236,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289085,
      "ems": null
    },
    {
      "latitude": 51.579227,
      "longitude": 19.721069,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289086,
      "ems": null
    },
    {
      "latitude": 51.578705,
      "longitude": 19.722092,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289089,
      "ems": null
    },
    {
      "latitude": 51.577225,
      "longitude": 19.725113,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289095,
      "ems": null
    },
    {
      "latitude": 51.576061,
      "longitude": 19.727631,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664289101,
      "ems": null
    },
    {
      "latitude": 51.574665,
      "longitude": 19.730835,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664289108,
      "ems": null
    },
    {
      "latitude": 51.573303,
      "longitude": 19.73382,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664289114,
      "ems": null
    },
    {
      "latitude": 51.571918,
      "longitude": 19.737091,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664289120,
      "ems": null
    },
    {
      "latitude": 51.571362,
      "longitude": 19.738464,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664289122,
      "ems": null
    },
    {
      "latitude": 51.56987,
      "longitude": 19.741974,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664289128,
      "ems": null
    },
    {
      "latitude": 51.568314,
      "longitude": 19.74555,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664289134,
      "ems": null
    },
    {
      "latitude": 51.567032,
      "longitude": 19.748222,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664289140,
      "ems": null
    },
    {
      "latitude": 51.566238,
      "longitude": 19.749527,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664289142,
      "ems": null
    },
    {
      "latitude": 51.565018,
      "longitude": 19.750969,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664289146,
      "ems": null
    },
    {
      "latitude": 51.564053,
      "longitude": 19.751892,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664289148,
      "ems": null
    },
    {
      "latitude": 51.562683,
      "longitude": 19.753269,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664289153,
      "ems": null
    },
    {
      "latitude": 51.561817,
      "longitude": 19.754181,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664289155,
      "ems": null
    },
    {
      "latitude": 51.561127,
      "longitude": 19.754902,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664289158,
      "ems": null
    },
    {
      "latitude": 51.560211,
      "longitude": 19.755867,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664289161,
      "ems": null
    },
    {
      "latitude": 51.558979,
      "longitude": 19.757385,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664289166,
      "ems": null
    },
    {
      "latitude": 51.55772,
      "longitude": 19.758987,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664289172,
      "ems": null
    },
    {
      "latitude": 51.557068,
      "longitude": 19.759903,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664289175,
      "ems": null
    },
    {
      "latitude": 51.556324,
      "longitude": 19.760895,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664289178,
      "ems": null
    },
    {
      "latitude": 51.555534,
      "longitude": 19.761887,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664289181,
      "ems": null
    },
    {
      "latitude": 51.553951,
      "longitude": 19.763794,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664289187,
      "ems": null
    },
    {
      "latitude": 51.552246,
      "longitude": 19.765814,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664289193,
      "ems": null
    },
    {
      "latitude": 51.551205,
      "longitude": 19.767075,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664289198,
      "ems": null
    },
    {
      "latitude": 51.549545,
      "longitude": 19.768932,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664289208,
      "ems": null
    },
    {
      "latitude": 51.548538,
      "longitude": 19.769526,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -3456,
        "ms": -17.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664289212,
      "ems": null
    },
    {
      "latitude": 51.547619,
      "longitude": 19.770279,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -3776,
        "ms": -19.2
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664289214,
      "ems": null
    },
    {
      "latitude": 51.545616,
      "longitude": 19.772644,
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
        "fpm": -2944,
        "ms": -15
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664289221,
      "ems": null
    },
    {
      "latitude": 51.543045,
      "longitude": 19.776356,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664289228,
      "ems": null
    },
    {
      "latitude": 51.540821,
      "longitude": 19.779205,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664289235,
      "ems": null
    },
    {
      "latitude": 51.539936,
      "longitude": 19.780197,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664289238,
      "ems": null
    },
    {
      "latitude": 51.538971,
      "longitude": 19.78133,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664289242,
      "ems": null
    },
    {
      "latitude": 51.538029,
      "longitude": 19.78241,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664289245,
      "ems": null
    },
    {
      "latitude": 51.53627,
      "longitude": 19.784595,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664289250,
      "ems": null
    },
    {
      "latitude": 51.534073,
      "longitude": 19.787268,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664289257,
      "ems": null
    },
    {
      "latitude": 51.533249,
      "longitude": 19.78801,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664289259,
      "ems": null
    },
    {
      "latitude": 51.532024,
      "longitude": 19.788818,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664289262,
      "ems": null
    },
    {
      "latitude": 51.530628,
      "longitude": 19.789276,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664289266,
      "ems": null
    },
    {
      "latitude": 51.529415,
      "longitude": 19.789658,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664289269,
      "ems": null
    },
    {
      "latitude": 51.528259,
      "longitude": 19.790014,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664289272,
      "ems": null
    },
    {
      "latitude": 51.527115,
      "longitude": 19.790461,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664289275,
      "ems": null
    },
    {
      "latitude": 51.526577,
      "longitude": 19.790649,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664289277,
      "ems": null
    },
    {
      "latitude": 51.525135,
      "longitude": 19.791183,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664289281,
      "ems": null
    },
    {
      "latitude": 51.524323,
      "longitude": 19.791424,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664289284,
      "ems": null
    },
    {
      "latitude": 51.523956,
      "longitude": 19.791573,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664289286,
      "ems": null
    },
    {
      "latitude": 51.523132,
      "longitude": 19.791794,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664289290,
      "ems": null
    },
    {
      "latitude": 51.522446,
      "longitude": 19.79187,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664289292,
      "ems": null
    },
    {
      "latitude": 51.521622,
      "longitude": 19.792242,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -3776,
        "ms": -19.2
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664289296,
      "ems": null
    },
    {
      "latitude": 51.520294,
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
        "fpm": -3520,
        "ms": -17.9
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664289299,
      "ems": null
    },
    {
      "latitude": 51.518646,
      "longitude": 19.794098,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664289302,
      "ems": null
    },
    {
      "latitude": 51.518188,
      "longitude": 19.794394,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664289304,
      "ems": null
    },
    {
      "latitude": 51.516243,
      "longitude": 19.795456,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664289308,
      "ems": null
    },
    {
      "latitude": 51.514664,
      "longitude": 19.796249,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664289311,
      "ems": null
    },
    {
      "latitude": 51.513474,
      "longitude": 19.796917,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664289313,
      "ems": null
    },
    {
      "latitude": 51.511917,
      "longitude": 19.797882,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664289317,
      "ems": null
    },
    {
      "latitude": 51.51075,
      "longitude": 19.798584,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664289320,
      "ems": null
    },
    {
      "latitude": 51.509586,
      "longitude": 19.799271,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664289323,
      "ems": null
    },
    {
      "latitude": 51.507118,
      "longitude": 19.800644,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664289329,
      "ems": null
    },
    {
      "latitude": 51.504745,
      "longitude": 19.802094,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664289334,
      "ems": null
    },
    {
      "latitude": 51.503441,
      "longitude": 19.803009,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664289338,
      "ems": null
    },
    {
      "latitude": 51.502304,
      "longitude": 19.803822,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664289341,
      "ems": null
    },
    {
      "latitude": 51.501301,
      "longitude": 19.804535,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664289343,
      "ems": null
    },
    {
      "latitude": 51.49818,
      "longitude": 19.805298,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664289350,
      "ems": null
    },
    {
      "latitude": 51.496994,
      "longitude": 19.803673,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664289353,
      "ems": null
    },
    {
      "latitude": 51.496784,
      "longitude": 19.800873,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664289357,
      "ems": null
    },
    {
      "latitude": 51.497623,
      "longitude": 19.798355,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664289360,
      "ems": null
    },
    {
      "latitude": 51.4991,
      "longitude": 19.796249,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664289363,
      "ems": null
    },
    {
      "latitude": 51.500603,
      "longitude": 19.794693,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664289365,
      "ems": null
    },
    {
      "latitude": 51.502415,
      "longitude": 19.793167,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664289368,
      "ems": null
    },
    {
      "latitude": 51.504139,
      "longitude": 19.791794,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664289371,
      "ems": null
    },
    {
      "latitude": 51.505737,
      "longitude": 19.790461,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664289374,
      "ems": null
    },
    {
      "latitude": 51.507629,
      "longitude": 19.788971,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664289378,
      "ems": null
    },
    {
      "latitude": 51.508793,
      "longitude": 19.788055,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664289380,
      "ems": null
    },
    {
      "latitude": 51.51059,
      "longitude": 19.786674,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664289384,
      "ems": null
    },
    {
      "latitude": 51.5121,
      "longitude": 19.785412,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664289387,
      "ems": null
    },
    {
      "latitude": 51.513611,
      "longitude": 19.784224,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664289390,
      "ems": null
    },
    {
      "latitude": 51.515079,
      "longitude": 19.78302,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664289393,
      "ems": null
    },
    {
      "latitude": 51.517868,
      "longitude": 19.780512,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664289399,
      "ems": null
    },
    {
      "latitude": 51.520527,
      "longitude": 19.778061,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664289405,
      "ems": null
    },
    {
      "latitude": 51.521759,
      "longitude": 19.7768,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664289408,
      "ems": null
    },
    {
      "latitude": 51.522903,
      "longitude": 19.775614,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664289411,
      "ems": null
    },
    {
      "latitude": 51.524437,
      "longitude": 19.773941,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664289414,
      "ems": null
    },
    {
      "latitude": 51.52565,
      "longitude": 19.77257,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664289417,
      "ems": null
    },
    {
      "latitude": 51.526932,
      "longitude": 19.771086,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664289420,
      "ems": null
    },
    {
      "latitude": 51.528069,
      "longitude": 19.769669,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664289423,
      "ems": null
    },
    {
      "latitude": 51.529137,
      "longitude": 19.768372,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664289425,
      "ems": null
    },
    {
      "latitude": 51.530548,
      "longitude": 19.766483,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664289429,
      "ems": null
    },
    {
      "latitude": 51.531696,
      "longitude": 19.764862,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664289432,
      "ems": null
    },
    {
      "latitude": 51.532837,
      "longitude": 19.763365,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664289435,
      "ems": null
    },
    {
      "latitude": 51.533936,
      "longitude": 19.761881,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664289438,
      "ems": null
    },
    {
      "latitude": 51.535446,
      "longitude": 19.759727,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664289442,
      "ems": null
    },
    {
      "latitude": 51.536499,
      "longitude": 19.758244,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664289446,
      "ems": null
    },
    {
      "latitude": 51.537422,
      "longitude": 19.756775,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "squawk": "7000",
      "timestamp": 1664289448,
      "ems": null
    },
    {
      "latitude": 51.53833,
      "longitude": 19.755348,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289451,
      "ems": null
    },
    {
      "latitude": 51.539101,
      "longitude": 19.754105,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289454,
      "ems": null
    },
    {
      "latitude": 51.540077,
      "longitude": 19.752579,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289457,
      "ems": null
    },
    {
      "latitude": 51.541241,
      "longitude": 19.750748,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289462,
      "ems": null
    },
    {
      "latitude": 51.543182,
      "longitude": 19.747776,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289467,
      "ems": null
    },
    {
      "latitude": 51.545662,
      "longitude": 19.743958,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664289477,
      "ems": null
    },
    {
      "latitude": 51.546734,
      "longitude": 19.742126,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289482,
      "ems": null
    },
    {
      "latitude": 51.550274,
      "longitude": 19.73671,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289492,
      "ems": null
    },
    {
      "latitude": 51.55125,
      "longitude": 19.735413,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664289495,
      "ems": null
    },
    {
      "latitude": 51.552414,
      "longitude": 19.733963,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664289497,
      "ems": null
    },
    {
      "latitude": 51.553436,
      "longitude": 19.732708,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664289500,
      "ems": null
    },
    {
      "latitude": 51.555626,
      "longitude": 19.729919,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664289507,
      "ems": null
    },
    {
      "latitude": 51.556557,
      "longitude": 19.728775,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664289509,
      "ems": null
    },
    {
      "latitude": 51.55772,
      "longitude": 19.727402,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664289513,
      "ems": null
    },
    {
      "latitude": 51.558472,
      "longitude": 19.726398,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664289515,
      "ems": null
    },
    {
      "latitude": 51.559662,
      "longitude": 19.724764,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289522,
      "ems": null
    },
    {
      "latitude": 51.560623,
      "longitude": 19.722982,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -2048,
        "ms": -10.4
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289524,
      "ems": null
    },
    {
      "latitude": 51.561951,
      "longitude": 19.720757,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289528,
      "ems": null
    },
    {
      "latitude": 51.563026,
      "longitude": 19.718857,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289531,
      "ems": null
    },
    {
      "latitude": 51.564056,
      "longitude": 19.717119,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664289533,
      "ems": null
    },
    {
      "latitude": 51.564972,
      "longitude": 19.715633,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289536,
      "ems": null
    },
    {
      "latitude": 51.566006,
      "longitude": 19.71405,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289540,
      "ems": null
    },
    {
      "latitude": 51.566936,
      "longitude": 19.712524,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664289542,
      "ems": null
    },
    {
      "latitude": 51.567867,
      "longitude": 19.710922,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289545,
      "ems": null
    },
    {
      "latitude": 51.569592,
      "longitude": 19.708023,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664289551,
      "ems": null
    },
    {
      "latitude": 51.571014,
      "longitude": 19.705761,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289557,
      "ems": null
    },
    {
      "latitude": 51.57206,
      "longitude": 19.704056,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289562,
      "ems": null
    },
    {
      "latitude": 51.574432,
      "longitude": 19.69986,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664289569,
      "ems": null
    },
    {
      "latitude": 51.575409,
      "longitude": 19.697876,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664289572,
      "ems": null
    },
    {
      "latitude": 51.576508,
      "longitude": 19.695591,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289576,
      "ems": null
    },
    {
      "latitude": 51.577377,
      "longitude": 19.69381,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289579,
      "ems": null
    },
    {
      "latitude": 51.578205,
      "longitude": 19.692001,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664289582,
      "ems": null
    },
    {
      "latitude": 51.579086,
      "longitude": 19.690094,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664289585,
      "ems": null
    },
    {
      "latitude": 51.579971,
      "longitude": 19.688034,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664289588,
      "ems": null
    },
    {
      "latitude": 51.580856,
      "longitude": 19.685867,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664289591,
      "ems": null
    },
    {
      "latitude": 51.58168,
      "longitude": 19.683788,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664289594,
      "ems": null
    },
    {
      "latitude": 51.582642,
      "longitude": 19.681265,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664289597,
      "ems": null
    },
    {
      "latitude": 51.583466,
      "longitude": 19.679111,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664289600,
      "ems": null
    },
    {
      "latitude": 51.584198,
      "longitude": 19.677256,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664289603,
      "ems": null
    },
    {
      "latitude": 51.585094,
      "longitude": 19.674683,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664289606,
      "ems": null
    },
    {
      "latitude": 51.585754,
      "longitude": 19.672876,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664289609,
      "ems": null
    },
    {
      "latitude": 51.586582,
      "longitude": 19.670486,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664289612,
      "ems": null
    },
    {
      "latitude": 51.587608,
      "longitude": 19.667969,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664289615,
      "ems": null
    },
    {
      "latitude": 51.588959,
      "longitude": 19.665527,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289619,
      "ems": null
    },
    {
      "latitude": 51.590355,
      "longitude": 19.663315,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289622,
      "ems": null
    },
    {
      "latitude": 51.591385,
      "longitude": 19.661667,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289624,
      "ems": null
    },
    {
      "latitude": 51.592758,
      "longitude": 19.659515,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289628,
      "ems": null
    },
    {
      "latitude": 51.593857,
      "longitude": 19.657806,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664289630,
      "ems": null
    },
    {
      "latitude": 51.595287,
      "longitude": 19.65538,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289634,
      "ems": null
    },
    {
      "latitude": 51.596405,
      "longitude": 19.653702,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289637,
      "ems": null
    },
    {
      "latitude": 51.597847,
      "longitude": 19.651337,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289640,
      "ems": null
    },
    {
      "latitude": 51.599106,
      "longitude": 19.649277,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289643,
      "ems": null
    },
    {
      "latitude": 51.601574,
      "longitude": 19.645309,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664289648,
      "ems": null
    },
    {
      "latitude": 51.604111,
      "longitude": 19.64118,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664289655,
      "ems": null
    },
    {
      "latitude": 51.606647,
      "longitude": 19.636841,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664289661,
      "ems": null
    },
    {
      "latitude": 51.608696,
      "longitude": 19.633484,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664289667,
      "ems": null
    },
    {
      "latitude": 51.611023,
      "longitude": 19.629303,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664289672,
      "ems": null
    },
    {
      "latitude": 51.612465,
      "longitude": 19.626617,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664289676,
      "ems": null
    },
    {
      "latitude": 51.614502,
      "longitude": 19.622696,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664289682,
      "ems": null
    },
    {
      "latitude": 51.615829,
      "longitude": 19.620098,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664289685,
      "ems": null
    },
    {
      "latitude": 51.616795,
      "longitude": 19.618073,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289688,
      "ems": null
    },
    {
      "latitude": 51.61768,
      "longitude": 19.616089,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664289690,
      "ems": null
    },
    {
      "latitude": 51.618889,
      "longitude": 19.613419,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664289694,
      "ems": null
    },
    {
      "latitude": 51.619904,
      "longitude": 19.611115,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664289697,
      "ems": null
    },
    {
      "latitude": 51.620865,
      "longitude": 19.609037,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664289700,
      "ems": null
    },
    {
      "latitude": 51.622662,
      "longitude": 19.605331,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664289705,
      "ems": null
    },
    {
      "latitude": 51.624756,
      "longitude": 19.600983,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664289712,
      "ems": null
    },
    {
      "latitude": 51.626572,
      "longitude": 19.597092,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289718,
      "ems": null
    },
    {
      "latitude": 51.62862,
      "longitude": 19.592896,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664289724,
      "ems": null
    },
    {
      "latitude": 51.630569,
      "longitude": 19.588995,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664289730,
      "ems": null
    },
    {
      "latitude": 51.632298,
      "longitude": 19.585724,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664289735,
      "ems": null
    },
    {
      "latitude": 51.634323,
      "longitude": 19.581867,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664289741,
      "ems": null
    },
    {
      "latitude": 51.635422,
      "longitude": 19.580086,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289745,
      "ems": null
    },
    {
      "latitude": 51.636395,
      "longitude": 19.578552,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289747,
      "ems": null
    },
    {
      "latitude": 51.637619,
      "longitude": 19.576672,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289750,
      "ems": null
    },
    {
      "latitude": 51.63858,
      "longitude": 19.575043,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664289753,
      "ems": null
    },
    {
      "latitude": 51.639633,
      "longitude": 19.573257,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664289756,
      "ems": null
    },
    {
      "latitude": 51.640678,
      "longitude": 19.571533,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664289759,
      "ems": null
    },
    {
      "latitude": 51.641842,
      "longitude": 19.569855,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664289763,
      "ems": null
    },
    {
      "latitude": 51.643845,
      "longitude": 19.566502,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664289769,
      "ems": null
    },
    {
      "latitude": 51.644806,
      "longitude": 19.56472,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664289771,
      "ems": null
    },
    {
      "latitude": 51.645584,
      "longitude": 19.563311,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664289774,
      "ems": null
    },
    {
      "latitude": 51.646637,
      "longitude": 19.561386,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664289777,
      "ems": null
    },
    {
      "latitude": 51.647614,
      "longitude": 19.559326,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664289781,
      "ems": null
    },
    {
      "latitude": 51.648499,
      "longitude": 19.557571,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289784,
      "ems": null
    },
    {
      "latitude": 51.649384,
      "longitude": 19.555664,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289787,
      "ems": null
    },
    {
      "latitude": 51.650219,
      "longitude": 19.553909,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289790,
      "ems": null
    },
    {
      "latitude": 51.651077,
      "longitude": 19.552176,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664289793,
      "ems": null
    },
    {
      "latitude": 51.651901,
      "longitude": 19.55032,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664289796,
      "ems": null
    },
    {
      "latitude": 51.652725,
      "longitude": 19.548389,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664289798,
      "ems": null
    },
    {
      "latitude": 51.653618,
      "longitude": 19.546356,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664289802,
      "ems": null
    },
    {
      "latitude": 51.654457,
      "longitude": 19.544296,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664289805,
      "ems": null
    },
    {
      "latitude": 51.655106,
      "longitude": 19.542006,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664289808,
      "ems": null
    },
    {
      "latitude": 51.655434,
      "longitude": 19.539795,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664289811,
      "ems": null
    },
    {
      "latitude": 51.655575,
      "longitude": 19.53743,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664289814,
      "ems": null
    },
    {
      "latitude": 51.655575,
      "longitude": 19.535065,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664289817,
      "ems": null
    },
    {
      "latitude": 51.65538,
      "longitude": 19.533098,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664289820,
      "ems": null
    },
    {
      "latitude": 51.654877,
      "longitude": 19.531021,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664289822,
      "ems": null
    },
    {
      "latitude": 51.653992,
      "longitude": 19.529343,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664289826,
      "ems": null
    },
    {
      "latitude": 51.652966,
      "longitude": 19.528351,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664289829,
      "ems": null
    },
    {
      "latitude": 51.65181,
      "longitude": 19.528124,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664289832,
      "ems": null
    },
    {
      "latitude": 51.650684,
      "longitude": 19.52858,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664289835,
      "ems": null
    },
    {
      "latitude": 51.649849,
      "longitude": 19.529572,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664289838,
      "ems": null
    },
    {
      "latitude": 51.649101,
      "longitude": 19.531021,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289841,
      "ems": null
    },
    {
      "latitude": 51.648685,
      "longitude": 19.531784,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664289842,
      "ems": null
    },
    {
      "latitude": 51.647705,
      "longitude": 19.533539,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664289846,
      "ems": null
    },
    {
      "latitude": 51.646957,
      "longitude": 19.534805,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "squawk": "7000",
      "timestamp": 1664289849,
      "ems": null
    },
    {
      "latitude": 51.646122,
      "longitude": 19.536209,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664289852,
      "ems": null
    },
    {
      "latitude": 51.645237,
      "longitude": 19.537582,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1664289855,
      "ems": null
    },
    {
      "latitude": 51.644493,
      "longitude": 19.538803,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664289858,
      "ems": null
    },
    {
      "latitude": 51.643845,
      "longitude": 19.539778,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664289861,
      "ems": null
    },
    {
      "latitude": 51.642864,
      "longitude": 19.541168,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664289864,
      "ems": null
    },
    {
      "latitude": 51.641144,
      "longitude": 19.543713,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664289870,
      "ems": null
    },
    {
      "latitude": 51.640411,
      "longitude": 19.545124,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289873,
      "ems": null
    },
    {
      "latitude": 51.640182,
      "longitude": 19.545643,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664289874,
      "ems": null
    },
    {
      "latitude": 51.639725,
      "longitude": 19.546831,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664289876,
      "ems": null
    },
    {
      "latitude": 51.638954,
      "longitude": 19.548798,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664289880,
      "ems": null
    },
    {
      "latitude": 51.638348,
      "longitude": 19.550476,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664289883,
      "ems": null
    },
    {
      "latitude": 51.637802,
      "longitude": 19.551878,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664289886,
      "ems": null
    },
    {
      "latitude": 51.637207,
      "longitude": 19.553364,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664289889,
      "ems": null
    },
    {
      "latitude": 51.636658,
      "longitude": 19.554625,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664289891,
      "ems": null
    },
    {
      "latitude": 51.636021,
      "longitude": 19.555893,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289894,
      "ems": null
    },
    {
      "latitude": 51.634438,
      "longitude": 19.559174,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289901,
      "ems": null
    },
    {
      "latitude": 51.633602,
      "longitude": 19.560852,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "timestamp": 1664289904,
      "ems": null
    },
    {
      "latitude": 51.632996,
      "longitude": 19.562122,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289908,
      "ems": null
    },
    {
      "latitude": 51.631805,
      "longitude": 19.564497,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664289912,
      "ems": null
    },
    {
      "latitude": 51.631413,
      "longitude": 19.565353,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289914,
      "ems": null
    },
    {
      "latitude": 51.63039,
      "longitude": 19.567413,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664289918,
      "ems": null
    },
    {
      "latitude": 51.628967,
      "longitude": 19.570213,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664289924,
      "ems": null
    },
    {
      "latitude": 51.627502,
      "longitude": 19.573034,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664289931,
      "ems": null
    },
    {
      "latitude": 51.626106,
      "longitude": 19.575577,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664289937,
      "ems": null
    },
    {
      "latitude": 51.625488,
      "longitude": 19.576597,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664289940,
      "ems": null
    },
    {
      "latitude": 51.624897,
      "longitude": 19.577637,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664289943,
      "ems": null
    },
    {
      "latitude": 51.623978,
      "longitude": 19.579344,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664289949,
      "ems": null
    },
    {
      "latitude": 51.623173,
      "longitude": 19.580917,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664289955,
      "ems": null
    },
    {
      "latitude": 51.62233,
      "longitude": 19.582314,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664289960,
      "ems": null
    },
    {
      "latitude": 51.621265,
      "longitude": 19.584122,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664289967,
      "ems": null
    },
    {
      "latitude": 51.620426,
      "longitude": 19.585495,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664289973,
      "ems": null
    },
    {
      "latitude": 51.619869,
      "longitude": 19.586334,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664289976,
      "ems": null
    },
    {
      "latitude": 51.619263,
      "longitude": 19.58736,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664289979,
      "ems": null
    },
    {
      "latitude": 51.617912,
      "longitude": 19.589844,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664289985,
      "ems": null
    },
    {
      "latitude": 51.61647,
      "longitude": 19.592133,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664289991,
      "ems": null
    },
    {
      "latitude": 51.615051,
      "longitude": 19.594488,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664289997,
      "ems": null
    },
    {
      "latitude": 51.614376,
      "longitude": 19.595718,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664290000,
      "ems": null
    },
    {
      "latitude": 51.613815,
      "longitude": 19.596788,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290003,
      "ems": null
    },
    {
      "latitude": 51.613037,
      "longitude": 19.598347,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290006,
      "ems": null
    },
    {
      "latitude": 51.61171,
      "longitude": 19.601019,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290012,
      "ems": null
    },
    {
      "latitude": 51.611115,
      "longitude": 19.602282,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290015,
      "ems": null
    },
    {
      "latitude": 51.610325,
      "longitude": 19.603806,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290018,
      "ems": null
    },
    {
      "latitude": 51.609695,
      "longitude": 19.605103,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664290021,
      "ems": null
    },
    {
      "latitude": 51.609009,
      "longitude": 19.606661,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664290024,
      "ems": null
    },
    {
      "latitude": 51.608276,
      "longitude": 19.608231,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290027,
      "ems": null
    },
    {
      "latitude": 51.60759,
      "longitude": 19.609928,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290031,
      "ems": null
    },
    {
      "latitude": 51.606228,
      "longitude": 19.613113,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290036,
      "ems": null
    },
    {
      "latitude": 51.60553,
      "longitude": 19.614868,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664290039,
      "ems": null
    },
    {
      "latitude": 51.604786,
      "longitude": 19.616776,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664290043,
      "ems": null
    },
    {
      "latitude": 51.604111,
      "longitude": 19.618538,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664290046,
      "ems": null
    },
    {
      "latitude": 51.603516,
      "longitude": 19.620319,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664290049,
      "ems": null
    },
    {
      "latitude": 51.602875,
      "longitude": 19.622116,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664290052,
      "ems": null
    },
    {
      "latitude": 51.602325,
      "longitude": 19.62381,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290055,
      "ems": null
    },
    {
      "latitude": 51.601776,
      "longitude": 19.625666,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664290057,
      "ems": null
    },
    {
      "latitude": 51.601341,
      "longitude": 19.627533,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664290061,
      "ems": null
    },
    {
      "latitude": 51.600876,
      "longitude": 19.62944,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664290064,
      "ems": null
    },
    {
      "latitude": 51.600403,
      "longitude": 19.631529,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664290067,
      "ems": null
    },
    {
      "latitude": 51.599991,
      "longitude": 19.633484,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664290069,
      "ems": null
    },
    {
      "latitude": 51.599579,
      "longitude": 19.635612,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664290072,
      "ems": null
    },
    {
      "latitude": 51.599167,
      "longitude": 19.637615,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664290076,
      "ems": null
    },
    {
      "latitude": 51.598801,
      "longitude": 19.639545,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664290078,
      "ems": null
    },
    {
      "latitude": 51.598434,
      "longitude": 19.641699,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664290082,
      "ems": null
    },
    {
      "latitude": 51.59808,
      "longitude": 19.643478,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664290084,
      "ems": null
    },
    {
      "latitude": 51.597153,
      "longitude": 19.647266,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664290090,
      "ems": null
    },
    {
      "latitude": 51.596375,
      "longitude": 19.649197,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290093,
      "ems": null
    },
    {
      "latitude": 51.595551,
      "longitude": 19.651276,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290097,
      "ems": null
    },
    {
      "latitude": 51.594818,
      "longitude": 19.652908,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290100,
      "ems": null
    },
    {
      "latitude": 51.594086,
      "longitude": 19.65469,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "timestamp": 1664290102,
      "ems": null
    },
    {
      "latitude": 51.593288,
      "longitude": 19.656525,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290106,
      "ems": null
    },
    {
      "latitude": 51.592587,
      "longitude": 19.658203,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290108,
      "ems": null
    },
    {
      "latitude": 51.592026,
      "longitude": 19.659662,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290111,
      "ems": null
    },
    {
      "latitude": 51.591423,
      "longitude": 19.661255,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664290115,
      "ems": null
    },
    {
      "latitude": 51.590607,
      "longitude": 19.663374,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664290118,
      "ems": null
    },
    {
      "latitude": 51.589516,
      "longitude": 19.666367,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664290124,
      "ems": null
    },
    {
      "latitude": 51.588867,
      "longitude": 19.668274,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664290127,
      "ems": null
    },
    {
      "latitude": 51.588364,
      "longitude": 19.669758,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290129,
      "ems": null
    },
    {
      "latitude": 51.587887,
      "longitude": 19.671478,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664290133,
      "ems": null
    },
    {
      "latitude": 51.587467,
      "longitude": 19.67308,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664290136,
      "ems": null
    },
    {
      "latitude": 51.587189,
      "longitude": 19.674149,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664290138,
      "ems": null
    },
    {
      "latitude": 51.586624,
      "longitude": 19.676365,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664290142,
      "ems": null
    },
    {
      "latitude": 51.586304,
      "longitude": 19.677923,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664290145,
      "ems": null
    },
    {
      "latitude": 51.585938,
      "longitude": 19.679558,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664290148,
      "ems": null
    },
    {
      "latitude": 51.585571,
      "longitude": 19.681414,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664290151,
      "ems": null
    },
    {
      "latitude": 51.585281,
      "longitude": 19.682922,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664290154,
      "ems": null
    },
    {
      "latitude": 51.584908,
      "longitude": 19.684601,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664290157,
      "ems": null
    },
    {
      "latitude": 51.584427,
      "longitude": 19.685942,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664290159,
      "ems": null
    },
    {
      "latitude": 51.58379,
      "longitude": 19.687424,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290163,
      "ems": null
    },
    {
      "latitude": 51.583374,
      "longitude": 19.688316,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664290165,
      "ems": null
    },
    {
      "latitude": 51.582581,
      "longitude": 19.690247,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290169,
      "ems": null
    },
    {
      "latitude": 51.582161,
      "longitude": 19.691238,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290171,
      "ems": null
    },
    {
      "latitude": 51.581554,
      "longitude": 19.692841,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664290175,
      "ems": null
    },
    {
      "latitude": 51.581131,
      "longitude": 19.694033,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664290178,
      "ems": null
    },
    {
      "latitude": 51.580673,
      "longitude": 19.695293,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664290181,
      "ems": null
    },
    {
      "latitude": 51.580254,
      "longitude": 19.696503,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664290184,
      "ems": null
    },
    {
      "latitude": 51.57988,
      "longitude": 19.697723,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664290187,
      "ems": null
    },
    {
      "latitude": 51.579391,
      "longitude": 19.699154,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290190,
      "ems": null
    },
    {
      "latitude": 51.5793,
      "longitude": 19.699377,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290193,
      "ems": null
    },
    {
      "latitude": 51.578659,
      "longitude": 19.701605,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664290196,
      "ems": null
    },
    {
      "latitude": 51.578293,
      "longitude": 19.702866,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664290199,
      "ems": null
    },
    {
      "latitude": 51.577789,
      "longitude": 19.704426,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290202,
      "ems": null
    },
    {
      "latitude": 51.576874,
      "longitude": 19.707098,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664290208,
      "ems": null
    },
    {
      "latitude": 51.575874,
      "longitude": 19.709778,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664290214,
      "ems": null
    },
    {
      "latitude": 51.574619,
      "longitude": 19.713364,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664290221,
      "ems": null
    },
    {
      "latitude": 51.573547,
      "longitude": 19.716797,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664290229,
      "ems": null
    },
    {
      "latitude": 51.572571,
      "longitude": 19.719849,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664290235,
      "ems": null
    },
    {
      "latitude": 51.571362,
      "longitude": 19.7229,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664290240,
      "ems": null
    },
    {
      "latitude": 51.570335,
      "longitude": 19.725342,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664290247,
      "ems": null
    },
    {
      "latitude": 51.568726,
      "longitude": 19.728773,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664290251,
      "ems": null
    },
    {
      "latitude": 51.567776,
      "longitude": 19.730682,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664290255,
      "ems": null
    },
    {
      "latitude": 51.567356,
      "longitude": 19.731522,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664290256,
      "ems": null
    },
    {
      "latitude": 51.566658,
      "longitude": 19.733047,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664290260,
      "ems": null
    },
    {
      "latitude": 51.566006,
      "longitude": 19.734344,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290263,
      "ems": null
    },
    {
      "latitude": 51.565308,
      "longitude": 19.735794,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664290266,
      "ems": null
    },
    {
      "latitude": 51.564007,
      "longitude": 19.738388,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290272,
      "ems": null
    },
    {
      "latitude": 51.562775,
      "longitude": 19.740725,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664290278,
      "ems": null
    },
    {
      "latitude": 51.561264,
      "longitude": 19.74362,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664290284,
      "ems": null
    },
    {
      "latitude": 51.559845,
      "longitude": 19.746218,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664290289,
      "ems": null
    },
    {
      "latitude": 51.55806,
      "longitude": 19.749855,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "timestamp": 1664290296,
      "ems": null
    },
    {
      "latitude": 51.556465,
      "longitude": 19.753647,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664290302,
      "ems": null
    },
    {
      "latitude": 51.555725,
      "longitude": 19.755423,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664290305,
      "ems": null
    },
    {
      "latitude": 51.554974,
      "longitude": 19.757309,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "squawk": "7000",
      "timestamp": 1664290308,
      "ems": null
    },
    {
      "latitude": 51.55426,
      "longitude": 19.759134,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664290311,
      "ems": null
    },
    {
      "latitude": 51.553482,
      "longitude": 19.76099,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "squawk": "7000",
      "timestamp": 1664290314,
      "ems": null
    },
    {
      "latitude": 51.552647,
      "longitude": 19.763107,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "squawk": "7000",
      "timestamp": 1664290317,
      "ems": null
    },
    {
      "latitude": 51.551056,
      "longitude": 19.766705,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664290323,
      "ems": null
    },
    {
      "latitude": 51.549576,
      "longitude": 19.769897,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290329,
      "ems": null
    },
    {
      "latitude": 51.548492,
      "longitude": 19.772125,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664290332,
      "ems": null
    },
    {
      "latitude": 51.54771,
      "longitude": 19.773636,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664290334,
      "ems": null
    },
    {
      "latitude": 51.54657,
      "longitude": 19.775539,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664290338,
      "ems": null
    },
    {
      "latitude": 51.545975,
      "longitude": 19.776281,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "squawk": "7000",
      "timestamp": 1664290340,
      "ems": null
    },
    {
      "latitude": 51.543915,
      "longitude": 19.777988,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664290344,
      "ems": null
    },
    {
      "latitude": 51.542732,
      "longitude": 19.778519,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664290347,
      "ems": null
    },
    {
      "latitude": 51.541286,
      "longitude": 19.778824,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664290350,
      "ems": null
    },
    {
      "latitude": 51.539845,
      "longitude": 19.778748,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664290353,
      "ems": null
    },
    {
      "latitude": 51.538307,
      "longitude": 19.778214,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664290356,
      "ems": null
    },
    {
      "latitude": 51.536911,
      "longitude": 19.777298,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664290359,
      "ems": null
    },
    {
      "latitude": 51.535561,
      "longitude": 19.776077,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664290362,
      "ems": null
    },
    {
      "latitude": 51.534302,
      "longitude": 19.774426,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664290365,
      "ems": null
    },
    {
      "latitude": 51.533234,
      "longitude": 19.772568,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664290368,
      "ems": null
    },
    {
      "latitude": 51.532257,
      "longitude": 19.770203,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664290371,
      "ems": null
    },
    {
      "latitude": 51.531509,
      "longitude": 19.767818,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664290374,
      "ems": null
    },
    {
      "latitude": 51.530907,
      "longitude": 19.765015,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664290377,
      "ems": null
    },
    {
      "latitude": 51.530582,
      "longitude": 19.762192,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664290380,
      "ems": null
    },
    {
      "latitude": 51.530441,
      "longitude": 19.759293,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664290383,
      "ems": null
    },
    {
      "latitude": 51.530582,
      "longitude": 19.756012,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664290387,
      "ems": null
    },
    {
      "latitude": 51.53096,
      "longitude": 19.753195,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664290390,
      "ems": null
    },
    {
      "latitude": 51.531601,
      "longitude": 19.750299,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664290393,
      "ems": null
    },
    {
      "latitude": 51.532394,
      "longitude": 19.747543,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664290396,
      "ems": null
    },
    {
      "latitude": 51.533375,
      "longitude": 19.744949,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664290399,
      "ems": null
    },
    {
      "latitude": 51.534439,
      "longitude": 19.742432,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664290402,
      "ems": null
    },
    {
      "latitude": 51.535469,
      "longitude": 19.740067,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664290405,
      "ems": null
    },
    {
      "latitude": 51.536213,
      "longitude": 19.738464,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664290407,
      "ems": null
    },
    {
      "latitude": 51.537704,
      "longitude": 19.735336,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290411,
      "ems": null
    },
    {
      "latitude": 51.53854,
      "longitude": 19.733658,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290413,
      "ems": null
    },
    {
      "latitude": 51.539936,
      "longitude": 19.730835,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290417,
      "ems": null
    },
    {
      "latitude": 51.540939,
      "longitude": 19.728699,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290419,
      "ems": null
    },
    {
      "latitude": 51.541939,
      "longitude": 19.726715,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290422,
      "ems": null
    },
    {
      "latitude": 51.543503,
      "longitude": 19.723503,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290426,
      "ems": null
    },
    {
      "latitude": 51.544685,
      "longitude": 19.721069,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290429,
      "ems": null
    },
    {
      "latitude": 51.546982,
      "longitude": 19.716375,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290435,
      "ems": null
    },
    {
      "latitude": 51.548828,
      "longitude": 19.712601,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290440,
      "ems": null
    },
    {
      "latitude": 51.550781,
      "longitude": 19.708582,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290445,
      "ems": null
    },
    {
      "latitude": 51.553757,
      "longitude": 19.702496,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290453,
      "ems": null
    },
    {
      "latitude": 51.556,
      "longitude": 19.697893,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290459,
      "ems": null
    },
    {
      "latitude": 51.558231,
      "longitude": 19.693451,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290465,
      "ems": null
    },
    {
      "latitude": 51.560562,
      "longitude": 19.688721,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290471,
      "ems": null
    },
    {
      "latitude": 51.56284,
      "longitude": 19.684143,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290477,
      "ems": null
    },
    {
      "latitude": 51.565247,
      "longitude": 19.679335,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290484,
      "ems": null
    },
    {
      "latitude": 51.567356,
      "longitude": 19.674988,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290489,
      "ems": null
    },
    {
      "latitude": 51.568985,
      "longitude": 19.671707,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290495,
      "ems": null
    },
    {
      "latitude": 51.571918,
      "longitude": 19.665833,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290502,
      "ems": null
    },
    {
      "latitude": 51.574108,
      "longitude": 19.661407,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290508,
      "ems": null
    },
    {
      "latitude": 51.576248,
      "longitude": 19.657059,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664290514,
      "ems": null
    },
    {
      "latitude": 51.578484,
      "longitude": 19.652557,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290519,
      "ems": null
    },
    {
      "latitude": 51.580486,
      "longitude": 19.648666,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290525,
      "ems": null
    },
    {
      "latitude": 51.583008,
      "longitude": 19.643555,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290532,
      "ems": null
    },
    {
      "latitude": 51.584747,
      "longitude": 19.640141,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290536,
      "ems": null
    },
    {
      "latitude": 51.588226,
      "longitude": 19.633236,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290546,
      "ems": null
    },
    {
      "latitude": 51.590332,
      "longitude": 19.62908,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290551,
      "ems": null
    },
    {
      "latitude": 51.592712,
      "longitude": 19.624477,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290557,
      "ems": null
    },
    {
      "latitude": 51.595001,
      "longitude": 19.620024,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290563,
      "ems": null
    },
    {
      "latitude": 51.597336,
      "longitude": 19.615347,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290570,
      "ems": null
    },
    {
      "latitude": 51.599625,
      "longitude": 19.610893,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290576,
      "ems": null
    },
    {
      "latitude": 51.601776,
      "longitude": 19.606661,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290581,
      "ems": null
    },
    {
      "latitude": 51.604156,
      "longitude": 19.601984,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290587,
      "ems": null
    },
    {
      "latitude": 51.606537,
      "longitude": 19.597309,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290593,
      "ems": null
    },
    {
      "latitude": 51.608826,
      "longitude": 19.592779,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290600,
      "ems": null
    },
    {
      "latitude": 51.611115,
      "longitude": 19.5884,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290605,
      "ems": null
    },
    {
      "latitude": 51.613583,
      "longitude": 19.583664,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290612,
      "ems": null
    },
    {
      "latitude": 51.615818,
      "longitude": 19.579239,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290617,
      "ems": null
    },
    {
      "latitude": 51.61821,
      "longitude": 19.574593,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664290624,
      "ems": null
    },
    {
      "latitude": 51.620518,
      "longitude": 19.57016,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664290629,
      "ems": null
    },
    {
      "latitude": 51.623016,
      "longitude": 19.565611,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664290636,
      "ems": null
    },
    {
      "latitude": 51.625362,
      "longitude": 19.561539,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664290641,
      "ems": null
    },
    {
      "latitude": 51.628052,
      "longitude": 19.556629,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664290648,
      "ems": null
    },
    {
      "latitude": 51.628994,
      "longitude": 19.554214,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664290651,
      "ems": null
    },
    {
      "latitude": 51.629791,
      "longitude": 19.551878,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664290654,
      "ems": null
    },
    {
      "latitude": 51.630615,
      "longitude": 19.549131,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664290657,
      "ems": null
    },
    {
      "latitude": 51.631165,
      "longitude": 19.546906,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664290660,
      "ems": null
    },
    {
      "latitude": 51.631989,
      "longitude": 19.543713,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290663,
      "ems": null
    },
    {
      "latitude": 51.632629,
      "longitude": 19.540966,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290666,
      "ems": null
    },
    {
      "latitude": 51.633362,
      "longitude": 19.537996,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664290669,
      "ems": null
    },
    {
      "latitude": 51.633957,
      "longitude": 19.535473,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664290672,
      "ems": null
    },
    {
      "latitude": 51.634644,
      "longitude": 19.532726,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290675,
      "ems": null
    },
    {
      "latitude": 51.635368,
      "longitude": 19.529724,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290678,
      "ems": null
    },
    {
      "latitude": 51.636066,
      "longitude": 19.526978,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664290681,
      "ems": null
    },
    {
      "latitude": 51.636673,
      "longitude": 19.524612,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664290684,
      "ems": null
    },
    {
      "latitude": 51.638069,
      "longitude": 19.519119,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664290690,
      "ems": null
    },
    {
      "latitude": 51.639496,
      "longitude": 19.513351,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290696,
      "ems": null
    },
    {
      "latitude": 51.640724,
      "longitude": 19.508438,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290702,
      "ems": null
    },
    {
      "latitude": 51.64212,
      "longitude": 19.502716,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290708,
      "ems": null
    },
    {
      "latitude": 51.643284,
      "longitude": 19.497833,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664290713,
      "ems": null
    },
    {
      "latitude": 51.6451,
      "longitude": 19.492111,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664290720,
      "ems": null
    },
    {
      "latitude": 51.646076,
      "longitude": 19.489975,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664290723,
      "ems": null
    },
    {
      "latitude": 51.647285,
      "longitude": 19.487839,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664290726,
      "ems": null
    },
    {
      "latitude": 51.648651,
      "longitude": 19.485886,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664290729,
      "ems": null
    },
    {
      "latitude": 51.650127,
      "longitude": 19.484253,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664290732,
      "ems": null
    },
    {
      "latitude": 51.651764,
      "longitude": 19.482769,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664290735,
      "ems": null
    },
    {
      "latitude": 51.653412,
      "longitude": 19.481283,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664290738,
      "ems": null
    },
    {
      "latitude": 51.655106,
      "longitude": 19.479799,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664290741,
      "ems": null
    },
    {
      "latitude": 51.656693,
      "longitude": 19.478455,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664290744,
      "ems": null
    },
    {
      "latitude": 51.658321,
      "longitude": 19.477158,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664290747,
      "ems": null
    },
    {
      "latitude": 51.660004,
      "longitude": 19.47579,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664290750,
      "ems": null
    },
    {
      "latitude": 51.661533,
      "longitude": 19.47464,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664290753,
      "ems": null
    },
    {
      "latitude": 51.663391,
      "longitude": 19.473192,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664290756,
      "ems": null
    },
    {
      "latitude": 51.66481,
      "longitude": 19.472078,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664290759,
      "ems": null
    },
    {
      "latitude": 51.666687,
      "longitude": 19.47052,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664290762,
      "ems": null
    },
    {
      "latitude": 51.669891,
      "longitude": 19.467922,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664290768,
      "ems": null
    },
    {
      "latitude": 51.673077,
      "longitude": 19.465103,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664290774,
      "ems": null
    },
    {
      "latitude": 51.674881,
      "longitude": 19.46332,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664290777,
      "ems": null
    },
    {
      "latitude": 51.676289,
      "longitude": 19.461594,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664290780,
      "ems": null
    },
    {
      "latitude": 51.677673,
      "longitude": 19.459906,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664290783,
      "ems": null
    },
    {
      "latitude": 51.679092,
      "longitude": 19.458124,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664290786,
      "ems": null
    },
    {
      "latitude": 51.680573,
      "longitude": 19.456329,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664290789,
      "ems": null
    },
    {
      "latitude": 51.682022,
      "longitude": 19.454487,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664290793,
      "ems": null
    },
    {
      "latitude": 51.683319,
      "longitude": 19.452744,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664290795,
      "ems": null
    },
    {
      "latitude": 51.684341,
      "longitude": 19.451447,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664290798,
      "ems": null
    },
    {
      "latitude": 51.68602,
      "longitude": 19.449234,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664290801,
      "ems": null
    },
    {
      "latitude": 51.686951,
      "longitude": 19.44809,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664290804,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.445801,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664290807,
      "ems": null
    },
    {
      "latitude": 51.691463,
      "longitude": 19.442215,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664290813,
      "ems": null
    },
    {
      "latitude": 51.692768,
      "longitude": 19.440308,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664290816,
      "ems": null
    },
    {
      "latitude": 51.694061,
      "longitude": 19.438303,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664290820,
      "ems": null
    },
    {
      "latitude": 51.695377,
      "longitude": 19.436264,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664290823,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.434967,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664290825,
      "ems": null
    },
    {
      "latitude": 51.697769,
      "longitude": 19.432365,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664290829,
      "ems": null
    },
    {
      "latitude": 51.698959,
      "longitude": 19.430286,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664290832,
      "ems": null
    },
    {
      "latitude": 51.700012,
      "longitude": 19.428059,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664290834,
      "ems": null
    },
    {
      "latitude": 51.700699,
      "longitude": 19.425684,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664290837,
      "ems": null
    },
    {
      "latitude": 51.701065,
      "longitude": 19.423012,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664290840,
      "ems": null
    },
    {
      "latitude": 51.701019,
      "longitude": 19.420116,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664290844,
      "ems": null
    },
    {
      "latitude": 51.700699,
      "longitude": 19.417742,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664290846,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.415216,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664290849,
      "ems": null
    },
    {
      "latitude": 51.699692,
      "longitude": 19.412395,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664290853,
      "ems": null
    },
    {
      "latitude": 51.699188,
      "longitude": 19.409872,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664290856,
      "ems": null
    },
    {
      "latitude": 51.698776,
      "longitude": 19.407646,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664290858,
      "ems": null
    },
    {
      "latitude": 51.698273,
      "longitude": 19.404751,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664290862,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.402695,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664290865,
      "ems": null
    },
    {
      "latitude": 51.697376,
      "longitude": 19.400024,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664290867,
      "ems": null
    },
    {
      "latitude": 51.696819,
      "longitude": 19.397354,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664290871,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.394684,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664290874,
      "ems": null
    },
    {
      "latitude": 51.695206,
      "longitude": 19.389904,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664290880,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.385605,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664290885,
      "ems": null
    },
    {
      "latitude": 51.693562,
      "longitude": 19.383163,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664290889,
      "ems": null
    },
    {
      "latitude": 51.693096,
      "longitude": 19.381256,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664290892,
      "ems": null
    },
    {
      "latitude": 51.692581,
      "longitude": 19.379196,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664290895,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.377136,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664290898,
      "ems": null
    },
    {
      "latitude": 51.691086,
      "longitude": 19.373201,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "7000",
      "timestamp": 1664290904,
      "ems": null
    },
    {
      "latitude": 51.690067,
      "longitude": 19.369354,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664290910,
      "ems": null
    },
    {
      "latitude": 51.689072,
      "longitude": 19.365557,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664290916,
      "ems": null
    },
    {
      "latitude": 51.688068,
      "longitude": 19.361496,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664290922,
      "ems": null
    },
    {
      "latitude": 51.687653,
      "longitude": 19.359468,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "squawk": "7000",
      "timestamp": 1664290925,
      "ems": null
    },
    {
      "latitude": 51.687424,
      "longitude": 19.357317,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664290928,
      "ems": null
    },
    {
      "latitude": 51.687508,
      "longitude": 19.355011,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664290931,
      "ems": null
    },
    {
      "latitude": 51.687881,
      "longitude": 19.352798,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664290934,
      "ems": null
    },
    {
      "latitude": 51.688534,
      "longitude": 19.350815,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664290937,
      "ems": null
    },
    {
      "latitude": 51.68951,
      "longitude": 19.34906,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664290940,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.347534,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664290943,
      "ems": null
    },
    {
      "latitude": 51.692001,
      "longitude": 19.346331,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664290946,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.345291,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1664290949,
      "ems": null
    },
    {
      "latitude": 51.694748,
      "longitude": 19.344252,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664290952,
      "ems": null
    },
    {
      "latitude": 51.69603,
      "longitude": 19.343435,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664290955,
      "ems": null
    },
    {
      "latitude": 51.69733,
      "longitude": 19.342499,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664290958,
      "ems": null
    },
    {
      "latitude": 51.69873,
      "longitude": 19.341579,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664290961,
      "ems": null
    },
    {
      "latitude": 51.70015,
      "longitude": 19.340614,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664290964,
      "ems": null
    },
    {
      "latitude": 51.701248,
      "longitude": 19.339947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664290967,
      "ems": null
    },
    {
      "latitude": 51.702682,
      "longitude": 19.339142,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664290970,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.338608,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1664290973,
      "ems": null
    },
    {
      "latitude": 51.705414,
      "longitude": 19.338312,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1664290976,
      "ems": null
    },
    {
      "latitude": 51.706604,
      "longitude": 19.338535,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664290979,
      "ems": null
    },
    {
      "latitude": 51.707703,
      "longitude": 19.339203,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664290982,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.340242,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1664290985,
      "ems": null
    },
    {
      "latitude": 51.709389,
      "longitude": 19.34166,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1664290988,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.343109,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664290991,
      "ems": null
    },
    {
      "latitude": 51.710411,
      "longitude": 19.344559,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664290994,
      "ems": null
    },
    {
      "latitude": 51.710861,
      "longitude": 19.346107,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664290997,
      "ems": null
    },
    {
      "latitude": 51.711155,
      "longitude": 19.347534,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291000,
      "ems": null
    },
    {
      "latitude": 51.711502,
      "longitude": 19.349003,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291003,
      "ems": null
    },
    {
      "latitude": 51.711777,
      "longitude": 19.350487,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664291006,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.352119,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664291009,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.353485,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664291012,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.355011,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664291015,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.356573,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664291018,
      "ems": null
    },
    {
      "latitude": 51.713013,
      "longitude": 19.358059,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291021,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.360733,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664291027,
      "ems": null
    },
    {
      "latitude": 51.714508,
      "longitude": 19.363937,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664291033,
      "ems": null
    },
    {
      "latitude": 51.715118,
      "longitude": 19.367115,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291039,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.369888,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291044,
      "ems": null
    },
    {
      "latitude": 51.720699,
      "longitude": 19.392624,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291097,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.397354,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291107,
      "ems": null
    },
    {
      "latitude": 51.722794,
      "longitude": 19.402237,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291115,
      "ems": null
    },
    {
      "latitude": 51.723404,
      "longitude": 19.404974,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291120,
      "ems": null
    },
    {
      "latitude": 51.724136,
      "longitude": 19.408165,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291127,
      "ems": null
    },
    {
      "latitude": 51.724751,
      "longitude": 19.410934,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291132,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.414673,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291138,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.417953,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291144,
      "ems": null
    },
    {
      "latitude": 51.726746,
      "longitude": 19.420191,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664291148,
      "ems": null
    },
    {
      "latitude": 51.726837,
      "longitude": 19.421528,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664291150,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.423903,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664291154,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.425312,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664291156,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.427261,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664291159,
      "ems": null
    },
    {
      "latitude": 51.725006,
      "longitude": 19.428654,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664291162,
      "ems": null
    },
    {
      "latitude": 51.723999,
      "longitude": 19.430212,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664291166,
      "ems": null
    },
    {
      "latitude": 51.723026,
      "longitude": 19.431229,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664291169,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 19.432068,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664291172,
      "ems": null
    },
    {
      "latitude": 51.720608,
      "longitude": 19.432678,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291175,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.433182,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664291178,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.433849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291181,
      "ems": null
    },
    {
      "latitude": 51.717178,
      "longitude": 19.434368,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664291183,
      "ems": null
    },
    {
      "latitude": 51.715534,
      "longitude": 19.43512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664291187,
      "ems": null
    },
    {
      "latitude": 51.71423,
      "longitude": 19.435806,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664291190,
      "ems": null
    },
    {
      "latitude": 51.712925,
      "longitude": 19.436493,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291193,
      "ems": null
    },
    {
      "latitude": 51.711502,
      "longitude": 19.436968,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664291196,
      "ems": null
    },
    {
      "latitude": 51.710178,
      "longitude": 19.437103,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664291199,
      "ems": null
    },
    {
      "latitude": 51.70871,
      "longitude": 19.43667,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664291202,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 19.43578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1664291205,
      "ems": null
    },
    {
      "latitude": 51.706081,
      "longitude": 19.434433,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664291208,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.432907,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664291211,
      "ems": null
    },
    {
      "latitude": 51.70422,
      "longitude": 19.430923,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664291214,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.428787,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664291217,
      "ems": null
    },
    {
      "latitude": 51.702915,
      "longitude": 19.426727,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664291219,
      "ems": null
    },
    {
      "latitude": 51.702805,
      "longitude": 19.426277,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664291220,
      "ems": null
    },
    {
      "latitude": 51.702637,
      "longitude": 19.425354,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291221,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.421453,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664291225,
      "ems": null
    },
    {
      "latitude": 51.701523,
      "longitude": 19.418186,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664291229,
      "ems": null
    },
    {
      "latitude": 51.701111,
      "longitude": 19.415663,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664291232,
      "ems": null
    },
    {
      "latitude": 51.700542,
      "longitude": 19.412842,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291235,
      "ems": null
    },
    {
      "latitude": 51.699936,
      "longitude": 19.410095,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291238,
      "ems": null
    },
    {
      "latitude": 51.699371,
      "longitude": 19.407795,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664291241,
      "ems": null
    },
    {
      "latitude": 51.698727,
      "longitude": 19.404984,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664291244,
      "ems": null
    },
    {
      "latitude": 51.69817,
      "longitude": 19.402618,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291247,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.397507,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291253,
      "ems": null
    },
    {
      "latitude": 51.696491,
      "longitude": 19.394836,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291256,
      "ems": null
    },
    {
      "latitude": 51.69598,
      "longitude": 19.392395,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291259,
      "ems": null
    },
    {
      "latitude": 51.694958,
      "longitude": 19.387665,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291265,
      "ems": null
    },
    {
      "latitude": 51.694027,
      "longitude": 19.383392,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291271,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 19.37912,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291277,
      "ems": null
    },
    {
      "latitude": 51.692024,
      "longitude": 19.374847,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291283,
      "ems": null
    },
    {
      "latitude": 51.691132,
      "longitude": 19.370975,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664291289,
      "ems": null
    },
    {
      "latitude": 51.690117,
      "longitude": 19.366837,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664291295,
      "ems": null
    },
    {
      "latitude": 51.68951,
      "longitude": 19.362488,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664291301,
      "ems": null
    },
    {
      "latitude": 51.689667,
      "longitude": 19.35984,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664291304,
      "ems": null
    },
    {
      "latitude": 51.690117,
      "longitude": 19.35791,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664291307,
      "ems": null
    },
    {
      "latitude": 51.690857,
      "longitude": 19.356054,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664291310,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.354347,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664291313,
      "ems": null
    },
    {
      "latitude": 51.693237,
      "longitude": 19.353308,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1664291316,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.352417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664291319,
      "ems": null
    },
    {
      "latitude": 51.695755,
      "longitude": 19.351526,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664291322,
      "ems": null
    },
    {
      "latitude": 51.697037,
      "longitude": 19.350636,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664291325,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 19.349745,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664291328,
      "ems": null
    },
    {
      "latitude": 51.699738,
      "longitude": 19.348928,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664291331,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 19.348145,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664291334,
      "ems": null
    },
    {
      "latitude": 51.702312,
      "longitude": 19.347305,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664291337,
      "ems": null
    },
    {
      "latitude": 51.703568,
      "longitude": 19.346466,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664291340,
      "ems": null
    },
    {
      "latitude": 51.704826,
      "longitude": 19.345779,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664291343,
      "ems": null
    },
    {
      "latitude": 51.705963,
      "longitude": 19.345217,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1664291346,
      "ems": null
    },
    {
      "latitude": 51.707291,
      "longitude": 19.34477,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1664291349,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.344919,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664291352,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.345587,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1664291355,
      "ems": null
    },
    {
      "latitude": 51.710739,
      "longitude": 19.346695,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1664291358,
      "ems": null
    },
    {
      "latitude": 51.711483,
      "longitude": 19.348373,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664291361,
      "ems": null
    },
    {
      "latitude": 51.711903,
      "longitude": 19.349899,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664291364,
      "ems": null
    },
    {
      "latitude": 51.71228,
      "longitude": 19.351675,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291367,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.353308,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664291370,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.355011,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664291373,
      "ems": null
    },
    {
      "latitude": 51.712971,
      "longitude": 19.356232,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664291376,
      "ems": null
    },
    {
      "latitude": 51.713242,
      "longitude": 19.358208,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664291379,
      "ems": null
    },
    {
      "latitude": 51.713577,
      "longitude": 19.359741,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291382,
      "ems": null
    },
    {
      "latitude": 51.713951,
      "longitude": 19.361496,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291385,
      "ems": null
    },
    {
      "latitude": 51.714321,
      "longitude": 19.363022,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291388,
      "ems": null
    },
    {
      "latitude": 51.714649,
      "longitude": 19.364548,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291391,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.366913,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664291396,
      "ems": null
    },
    {
      "latitude": 51.71608,
      "longitude": 19.37142,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291404,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.391611,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291450,
      "ems": null
    },
    {
      "latitude": 51.721863,
      "longitude": 19.397964,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291462,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 19.403488,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291472,
      "ems": null
    },
    {
      "latitude": 51.723957,
      "longitude": 19.407425,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664291479,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.411209,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664291485,
      "ems": null
    },
    {
      "latitude": 51.725327,
      "longitude": 19.412991,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664291488,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.41452,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664291490,
      "ems": null
    },
    {
      "latitude": 51.725876,
      "longitude": 19.416628,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664291494,
      "ems": null
    },
    {
      "latitude": 51.725773,
      "longitude": 19.418182,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664291496,
      "ems": null
    },
    {
      "latitude": 51.72551,
      "longitude": 19.420265,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664291500,
      "ems": null
    },
    {
      "latitude": 51.725075,
      "longitude": 19.421844,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664291503,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.423309,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664291506,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.424719,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664291509,
      "ems": null
    },
    {
      "latitude": 51.722656,
      "longitude": 19.425888,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664291512,
      "ems": null
    },
    {
      "latitude": 51.721664,
      "longitude": 19.426798,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664291515,
      "ems": null
    },
    {
      "latitude": 51.720612,
      "longitude": 19.427465,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664291518,
      "ems": null
    },
    {
      "latitude": 51.71933,
      "longitude": 19.428059,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664291521,
      "ems": null
    },
    {
      "latitude": 51.718369,
      "longitude": 19.428431,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664291523,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.428949,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664291527,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.42947,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "7000",
      "timestamp": 1664291530,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.429914,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664291533,
      "ems": null
    },
    {
      "latitude": 51.71283,
      "longitude": 19.430361,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664291536,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.430771,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664291539,
      "ems": null
    },
    {
      "latitude": 51.71069,
      "longitude": 19.430923,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664291542,
      "ems": null
    },
    {
      "latitude": 51.708801,
      "longitude": 19.43051,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664291545,
      "ems": null
    },
    {
      "latitude": 51.707428,
      "longitude": 19.429619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664291548,
      "ems": null
    },
    {
      "latitude": 51.706223,
      "longitude": 19.428329,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664291551,
      "ems": null
    },
    {
      "latitude": 51.705292,
      "longitude": 19.426804,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664291553,
      "ems": null
    },
    {
      "latitude": 51.704174,
      "longitude": 19.424438,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664291557,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.421898,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664291560,
      "ems": null
    },
    {
      "latitude": 51.702805,
      "longitude": 19.419598,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291563,
      "ems": null
    },
    {
      "latitude": 51.702209,
      "longitude": 19.416998,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291566,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.414623,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291569,
      "ems": null
    },
    {
      "latitude": 51.701157,
      "longitude": 19.412249,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291572,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.409561,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291575,
      "ems": null
    },
    {
      "latitude": 51.700077,
      "longitude": 19.40712,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664291578,
      "ems": null
    },
    {
      "latitude": 51.699554,
      "longitude": 19.404751,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291581,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.402237,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291584,
      "ems": null
    },
    {
      "latitude": 51.69841,
      "longitude": 19.399702,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291587,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.394804,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291593,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.390106,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291599,
      "ems": null
    },
    {
      "latitude": 51.695206,
      "longitude": 19.385748,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664291605,
      "ems": null
    },
    {
      "latitude": 51.694107,
      "longitude": 19.381367,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664291611,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.379364,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664291614,
      "ems": null
    },
    {
      "latitude": 51.692963,
      "longitude": 19.377655,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664291617,
      "ems": null
    },
    {
      "latitude": 51.692276,
      "longitude": 19.375504,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664291620,
      "ems": null
    },
    {
      "latitude": 51.691681,
      "longitude": 19.373722,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664291623,
      "ems": null
    },
    {
      "latitude": 51.69104,
      "longitude": 19.371941,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664291626,
      "ems": null
    },
    {
      "latitude": 51.690491,
      "longitude": 19.370306,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664291629,
      "ems": null
    },
    {
      "latitude": 51.68993,
      "longitude": 19.368515,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664291632,
      "ems": null
    },
    {
      "latitude": 51.689392,
      "longitude": 19.366966,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664291635,
      "ems": null
    },
    {
      "latitude": 51.688625,
      "longitude": 19.364929,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664291638,
      "ems": null
    },
    {
      "latitude": 51.687973,
      "longitude": 19.363251,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1664291641,
      "ems": null
    },
    {
      "latitude": 51.686874,
      "longitude": 19.359617,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664291647,
      "ems": null
    },
    {
      "latitude": 51.686718,
      "longitude": 19.357452,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664291650,
      "ems": null
    },
    {
      "latitude": 51.686874,
      "longitude": 19.354866,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664291654,
      "ems": null
    },
    {
      "latitude": 51.687103,
      "longitude": 19.353382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664291656,
      "ems": null
    },
    {
      "latitude": 51.687786,
      "longitude": 19.350815,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664291660,
      "ems": null
    },
    {
      "latitude": 51.68858,
      "longitude": 19.348755,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664291662,
      "ems": null
    },
    {
      "latitude": 51.689438,
      "longitude": 19.347221,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664291665,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.345551,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664291668,
      "ems": null
    },
    {
      "latitude": 51.691837,
      "longitude": 19.34433,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664291671,
      "ems": null
    },
    {
      "latitude": 51.6931,
      "longitude": 19.343063,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664291675,
      "ems": null
    },
    {
      "latitude": 51.69463,
      "longitude": 19.341965,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664291679,
      "ems": null
    },
    {
      "latitude": 51.696724,
      "longitude": 19.340744,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664291683,
      "ems": null
    },
    {
      "latitude": 51.698273,
      "longitude": 19.340168,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664291687,
      "ems": null
    },
    {
      "latitude": 51.699379,
      "longitude": 19.339828,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664291690,
      "ems": null
    },
    {
      "latitude": 51.700729,
      "longitude": 19.339523,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664291692,
      "ems": null
    },
    {
      "latitude": 51.702209,
      "longitude": 19.33913,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664291696,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.33876,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664291698,
      "ems": null
    },
    {
      "latitude": 51.704826,
      "longitude": 19.338455,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664291701,
      "ems": null
    },
    {
      "latitude": 51.706055,
      "longitude": 19.33861,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664291704,
      "ems": null
    },
    {
      "latitude": 51.70734,
      "longitude": 19.339294,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1664291708,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.340317,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1664291710,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.341736,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1664291714,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.343033,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1664291717,
      "ems": null
    },
    {
      "latitude": 51.710403,
      "longitude": 19.344696,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664291719,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 19.346313,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664291722,
      "ems": null
    },
    {
      "latitude": 51.711319,
      "longitude": 19.348038,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664291725,
      "ems": null
    },
    {
      "latitude": 51.711731,
      "longitude": 19.349745,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291729,
      "ems": null
    },
    {
      "latitude": 51.712006,
      "longitude": 19.351452,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664291732,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.352722,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664291734,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.354706,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664291738,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.356308,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664291741,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 19.357761,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664291743,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.359543,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664291747,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.361029,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664291750,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.363922,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664291755,
      "ems": null
    },
    {
      "latitude": 51.715767,
      "longitude": 19.369965,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291766,
      "ems": null
    },
    {
      "latitude": 51.716,
      "longitude": 19.371033,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291769,
      "ems": null
    },
    {
      "latitude": 51.72121,
      "longitude": 19.39537,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664291823,
      "ems": null
    },
    {
      "latitude": 51.722305,
      "longitude": 19.399851,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291831,
      "ems": null
    },
    {
      "latitude": 51.72345,
      "longitude": 19.404825,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664291840,
      "ems": null
    },
    {
      "latitude": 51.724319,
      "longitude": 19.408758,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664291848,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.412766,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664291855,
      "ems": null
    },
    {
      "latitude": 51.725914,
      "longitude": 19.416656,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664291861,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.419479,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664291866,
      "ems": null
    },
    {
      "latitude": 51.726746,
      "longitude": 19.421305,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664291870,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.423828,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664291873,
      "ems": null
    },
    {
      "latitude": 51.7267,
      "longitude": 19.424496,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664291875,
      "ems": null
    },
    {
      "latitude": 51.725727,
      "longitude": 19.427567,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664291879,
      "ems": null
    },
    {
      "latitude": 51.724983,
      "longitude": 19.42894,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664291882,
      "ems": null
    },
    {
      "latitude": 51.724007,
      "longitude": 19.430237,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664291885,
      "ems": null
    },
    {
      "latitude": 51.722992,
      "longitude": 19.431103,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664291888,
      "ems": null
    },
    {
      "latitude": 51.721619,
      "longitude": 19.432068,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664291891,
      "ems": null
    },
    {
      "latitude": 51.72052,
      "longitude": 19.432587,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291894,
      "ems": null
    },
    {
      "latitude": 51.718929,
      "longitude": 19.433289,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664291897,
      "ems": null
    },
    {
      "latitude": 51.717583,
      "longitude": 19.433899,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664291900,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 19.434591,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664291903,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.435112,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291906,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.43578,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291909,
      "ems": null
    },
    {
      "latitude": 51.712006,
      "longitude": 19.436447,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664291912,
      "ems": null
    },
    {
      "latitude": 51.710541,
      "longitude": 19.437189,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664291915,
      "ems": null
    },
    {
      "latitude": 51.709167,
      "longitude": 19.437561,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664291918,
      "ems": null
    },
    {
      "latitude": 51.707977,
      "longitude": 19.437487,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664291921,
      "ems": null
    },
    {
      "latitude": 51.706604,
      "longitude": 19.436893,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664291924,
      "ems": null
    },
    {
      "latitude": 51.705276,
      "longitude": 19.435556,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664291927,
      "ems": null
    },
    {
      "latitude": 51.704174,
      "longitude": 19.433746,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664291930,
      "ems": null
    },
    {
      "latitude": 51.703354,
      "longitude": 19.431622,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664291933,
      "ems": null
    },
    {
      "latitude": 51.702713,
      "longitude": 19.429024,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291936,
      "ems": null
    },
    {
      "latitude": 51.702255,
      "longitude": 19.4265,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664291939,
      "ems": null
    },
    {
      "latitude": 51.701893,
      "longitude": 19.42421,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664291942,
      "ems": null
    },
    {
      "latitude": 51.701431,
      "longitude": 19.421453,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664291945,
      "ems": null
    },
    {
      "latitude": 51.701054,
      "longitude": 19.419022,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664291948,
      "ems": null
    },
    {
      "latitude": 51.700607,
      "longitude": 19.416479,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664291951,
      "ems": null
    },
    {
      "latitude": 51.700287,
      "longitude": 19.414846,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664291954,
      "ems": null
    },
    {
      "latitude": 51.699986,
      "longitude": 19.413452,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664291955,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 19.40979,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664291959,
      "ems": null
    },
    {
      "latitude": 51.698635,
      "longitude": 19.406815,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664291963,
      "ems": null
    },
    {
      "latitude": 51.697403,
      "longitude": 19.400297,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664291971,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.393616,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664291979,
      "ems": null
    },
    {
      "latitude": 51.695114,
      "longitude": 19.387306,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664291987,
      "ems": null
    },
    {
      "latitude": 51.694016,
      "longitude": 19.380997,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664291995,
      "ems": null
    },
    {
      "latitude": 51.692963,
      "longitude": 19.375504,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664292003,
      "ems": null
    },
    {
      "latitude": 51.692024,
      "longitude": 19.370041,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664292011,
      "ems": null
    },
    {
      "latitude": 51.690994,
      "longitude": 19.364666,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292020,
      "ems": null
    },
    {
      "latitude": 51.68993,
      "longitude": 19.359207,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "timestamp": 1664292028,
      "ems": null
    },
    {
      "latitude": 51.688705,
      "longitude": 19.354422,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664292036,
      "ems": null
    },
    {
      "latitude": 51.688393,
      "longitude": 19.351654,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664292040,
      "ems": null
    },
    {
      "latitude": 51.688705,
      "longitude": 19.348333,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664292044,
      "ems": null
    },
    {
      "latitude": 51.68951,
      "longitude": 19.345779,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664292048,
      "ems": null
    },
    {
      "latitude": 51.691048,
      "longitude": 19.343414,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664292052,
      "ems": null
    },
    {
      "latitude": 51.692535,
      "longitude": 19.342117,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1664292056,
      "ems": null
    },
    {
      "latitude": 51.694305,
      "longitude": 19.341202,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1664292060,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.34021,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664292064,
      "ems": null
    },
    {
      "latitude": 51.697906,
      "longitude": 19.339203,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664292068,
      "ems": null
    },
    {
      "latitude": 51.700451,
      "longitude": 19.337921,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1664292073,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.337158,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664292077,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.336319,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664292082,
      "ems": null
    },
    {
      "latitude": 51.704872,
      "longitude": 19.336166,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "squawk": "7000",
      "timestamp": 1664292084,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.336853,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1664292089,
      "ems": null
    },
    {
      "latitude": 51.707794,
      "longitude": 19.337275,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "7000",
      "timestamp": 1664292091,
      "ems": null
    },
    {
      "latitude": 51.708939,
      "longitude": 19.338684,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1664292096,
      "ems": null
    },
    {
      "latitude": 51.710175,
      "longitude": 19.341877,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664292100,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 19.344028,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292104,
      "ems": null
    },
    {
      "latitude": 51.711182,
      "longitude": 19.346478,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292108,
      "ems": null
    },
    {
      "latitude": 51.711777,
      "longitude": 19.349745,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664292114,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.352417,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664292119,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.355238,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664292124,
      "ems": null
    },
    {
      "latitude": 51.713242,
      "longitude": 19.358208,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664292130,
      "ems": null
    },
    {
      "latitude": 51.714432,
      "longitude": 19.363701,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292140,
      "ems": null
    },
    {
      "latitude": 51.714752,
      "longitude": 19.365185,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292144,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.36821,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292149,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.381071,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292172,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 19.386826,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664292183,
      "ems": null
    },
    {
      "latitude": 51.720383,
      "longitude": 19.391611,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664292191,
      "ems": null
    },
    {
      "latitude": 51.721397,
      "longitude": 19.396515,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292200,
      "ems": null
    },
    {
      "latitude": 51.723076,
      "longitude": 19.404373,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292211,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 19.410763,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664292222,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 19.413376,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664292226,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.416885,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664292232,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.419785,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664292237,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.421453,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664292241,
      "ems": null
    },
    {
      "latitude": 51.723122,
      "longitude": 19.423523,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664292245,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.425583,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664292249,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.426956,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664292253,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.427168,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664292257,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.428207,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664292261,
      "ems": null
    },
    {
      "latitude": 51.716,
      "longitude": 19.428329,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664292265,
      "ems": null
    },
    {
      "latitude": 51.713333,
      "longitude": 19.428949,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664292269,
      "ems": null
    },
    {
      "latitude": 51.711063,
      "longitude": 19.429703,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664292274,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 19.430435,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664292279,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 19.43088,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664292283,
      "ems": null
    },
    {
      "latitude": 51.703171,
      "longitude": 19.428356,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664292292,
      "ems": null
    },
    {
      "latitude": 51.701843,
      "longitude": 19.425907,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664292296,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 19.423065,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664292300,
      "ems": null
    },
    {
      "latitude": 51.700104,
      "longitude": 19.419151,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292305,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.414368,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292310,
      "ems": null
    },
    {
      "latitude": 51.69841,
      "longitude": 19.411209,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292314,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.407425,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292318,
      "ems": null
    },
    {
      "latitude": 51.696854,
      "longitude": 19.40423,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292322,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.401093,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292326,
      "ems": null
    },
    {
      "latitude": 51.694584,
      "longitude": 19.393845,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292334,
      "ems": null
    },
    {
      "latitude": 51.693188,
      "longitude": 19.38736,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664292342,
      "ems": null
    },
    {
      "latitude": 51.69191,
      "longitude": 19.380997,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664292350,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.374161,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664292358,
      "ems": null
    },
    {
      "latitude": 51.689438,
      "longitude": 19.366892,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664292368,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.362793,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664292376,
      "ems": null
    },
    {
      "latitude": 51.687695,
      "longitude": 19.356842,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664292384,
      "ems": null
    },
    {
      "latitude": 51.687649,
      "longitude": 19.352722,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664292388,
      "ems": null
    },
    {
      "latitude": 51.687927,
      "longitude": 19.350189,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "timestamp": 1664292392,
      "ems": null
    },
    {
      "latitude": 51.68858,
      "longitude": 19.347153,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664292396,
      "ems": null
    },
    {
      "latitude": 51.689465,
      "longitude": 19.344635,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664292400,
      "ems": null
    },
    {
      "latitude": 51.690491,
      "longitude": 19.342693,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664292404,
      "ems": null
    },
    {
      "latitude": 51.692116,
      "longitude": 19.340668,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664292408,
      "ems": null
    },
    {
      "latitude": 51.694061,
      "longitude": 19.339724,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664292412,
      "ems": null
    },
    {
      "latitude": 51.69561,
      "longitude": 19.339294,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664292416,
      "ems": null
    },
    {
      "latitude": 51.697796,
      "longitude": 19.338684,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664292421,
      "ems": null
    },
    {
      "latitude": 51.699844,
      "longitude": 19.337997,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664292426,
      "ems": null
    },
    {
      "latitude": 51.702072,
      "longitude": 19.337347,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664292431,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.337387,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664292436,
      "ems": null
    },
    {
      "latitude": 51.705662,
      "longitude": 19.337845,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664292440,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.339142,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1664292444,
      "ems": null
    },
    {
      "latitude": 51.708878,
      "longitude": 19.341583,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1664292448,
      "ems": null
    },
    {
      "latitude": 51.709671,
      "longitude": 19.343361,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664292452,
      "ems": null
    },
    {
      "latitude": 51.710541,
      "longitude": 19.346256,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664292456,
      "ems": null
    },
    {
      "latitude": 51.711044,
      "longitude": 19.348038,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664292460,
      "ems": null
    },
    {
      "latitude": 51.711777,
      "longitude": 19.351007,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664292465,
      "ems": null
    },
    {
      "latitude": 51.712414,
      "longitude": 19.353943,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292469,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.356079,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292473,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.359024,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664292478,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.361845,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664292483,
      "ems": null
    },
    {
      "latitude": 51.714508,
      "longitude": 19.36409,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664292487,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 19.36912,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292496,
      "ems": null
    },
    {
      "latitude": 51.720566,
      "longitude": 19.392132,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292545,
      "ems": null
    },
    {
      "latitude": 51.721771,
      "longitude": 19.397583,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292554,
      "ems": null
    },
    {
      "latitude": 51.722702,
      "longitude": 19.401855,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664292562,
      "ems": null
    },
    {
      "latitude": 51.723816,
      "longitude": 19.406458,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664292571,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.410782,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664292579,
      "ems": null
    },
    {
      "latitude": 51.725693,
      "longitude": 19.416405,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664292588,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.417114,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664292592,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.420471,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664292596,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.422419,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664292600,
      "ems": null
    },
    {
      "latitude": 51.723358,
      "longitude": 19.424719,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664292604,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.426041,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664292608,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.427185,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664292612,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 19.428728,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664292617,
      "ems": null
    },
    {
      "latitude": 51.717361,
      "longitude": 19.429693,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664292621,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.430731,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664292625,
      "ems": null
    },
    {
      "latitude": 51.714043,
      "longitude": 19.43161,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664292629,
      "ems": null
    },
    {
      "latitude": 51.711575,
      "longitude": 19.432755,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664292634,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.432884,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664292638,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.432142,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664292642,
      "ems": null
    },
    {
      "latitude": 51.706284,
      "longitude": 19.430286,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664292647,
      "ems": null
    },
    {
      "latitude": 51.704773,
      "longitude": 19.427614,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664292651,
      "ems": null
    },
    {
      "latitude": 51.703754,
      "longitude": 19.424973,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664292655,
      "ems": null
    },
    {
      "latitude": 51.702778,
      "longitude": 19.421768,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664292659,
      "ems": null
    },
    {
      "latitude": 51.702171,
      "longitude": 19.419403,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664292662,
      "ems": null
    },
    {
      "latitude": 51.701981,
      "longitude": 19.418558,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664292663,
      "ems": null
    },
    {
      "latitude": 51.701065,
      "longitude": 19.414179,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292668,
      "ems": null
    },
    {
      "latitude": 51.700516,
      "longitude": 19.411579,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664292671,
      "ems": null
    },
    {
      "latitude": 51.69989,
      "longitude": 19.408264,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664292675,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.403687,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664292680,
      "ems": null
    },
    {
      "latitude": 51.697861,
      "longitude": 19.399332,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664292685,
      "ems": null
    },
    {
      "latitude": 51.696026,
      "longitude": 19.395752,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664292691,
      "ems": null
    },
    {
      "latitude": 51.694702,
      "longitude": 19.394209,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664292695,
      "ems": null
    },
    {
      "latitude": 51.692863,
      "longitude": 19.393158,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664292699,
      "ems": null
    },
    {
      "latitude": 51.690628,
      "longitude": 19.393463,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664292703,
      "ems": null
    },
    {
      "latitude": 51.689346,
      "longitude": 19.394432,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664292707,
      "ems": null
    },
    {
      "latitude": 51.688347,
      "longitude": 19.395752,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664292711,
      "ems": null
    },
    {
      "latitude": 51.687275,
      "longitude": 19.398422,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664292715,
      "ems": null
    },
    {
      "latitude": 51.686623,
      "longitude": 19.402618,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664292720,
      "ems": null
    },
    {
      "latitude": 51.686691,
      "longitude": 19.406086,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664292724,
      "ems": null
    },
    {
      "latitude": 51.687088,
      "longitude": 19.408569,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664292728,
      "ems": null
    },
    {
      "latitude": 51.687927,
      "longitude": 19.41124,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664292732,
      "ems": null
    },
    {
      "latitude": 51.690254,
      "longitude": 19.414444,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1664292737,
      "ems": null
    },
    {
      "latitude": 51.693047,
      "longitude": 19.415359,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1664292742,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.414326,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664292747,
      "ems": null
    },
    {
      "latitude": 51.697723,
      "longitude": 19.412842,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664292751,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.409637,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664292755,
      "ems": null
    },
    {
      "latitude": 51.700542,
      "longitude": 19.40567,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664292759,
      "ems": null
    },
    {
      "latitude": 51.700775,
      "longitude": 19.401779,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664292764,
      "ems": null
    },
    {
      "latitude": 51.700218,
      "longitude": 19.397354,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664292769,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.392948,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292774,
      "ems": null
    },
    {
      "latitude": 51.698593,
      "longitude": 19.389606,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664292778,
      "ems": null
    },
    {
      "latitude": 51.697952,
      "longitude": 19.38649,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292782,
      "ems": null
    },
    {
      "latitude": 51.69733,
      "longitude": 19.383392,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292786,
      "ems": null
    },
    {
      "latitude": 51.696957,
      "longitude": 19.381714,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664292790,
      "ems": null
    },
    {
      "latitude": 51.69603,
      "longitude": 19.377655,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664292795,
      "ems": null
    },
    {
      "latitude": 51.695297,
      "longitude": 19.374687,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664292799,
      "ems": null
    },
    {
      "latitude": 51.69384,
      "longitude": 19.369125,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664292808,
      "ems": null
    },
    {
      "latitude": 51.692581,
      "longitude": 19.36409,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664292816,
      "ems": null
    },
    {
      "latitude": 51.691231,
      "longitude": 19.358063,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664292824,
      "ems": null
    },
    {
      "latitude": 51.690952,
      "longitude": 19.355698,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664292828,
      "ems": null
    },
    {
      "latitude": 51.691048,
      "longitude": 19.352875,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664292832,
      "ems": null
    },
    {
      "latitude": 51.691418,
      "longitude": 19.350739,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664292836,
      "ems": null
    },
    {
      "latitude": 51.692276,
      "longitude": 19.348261,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664292840,
      "ems": null
    },
    {
      "latitude": 51.693699,
      "longitude": 19.345856,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664292844,
      "ems": null
    },
    {
      "latitude": 51.695114,
      "longitude": 19.344624,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664292848,
      "ems": null
    },
    {
      "latitude": 51.696678,
      "longitude": 19.343872,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1664292852,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.343414,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1664292857,
      "ems": null
    },
    {
      "latitude": 51.701202,
      "longitude": 19.34284,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664292862,
      "ems": null
    },
    {
      "latitude": 51.702576,
      "longitude": 19.34247,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664292866,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.341803,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664292870,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.341356,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1664292874,
      "ems": null
    },
    {
      "latitude": 51.707977,
      "longitude": 19.341803,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664292878,
      "ems": null
    },
    {
      "latitude": 51.710087,
      "longitude": 19.343796,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1664292883,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 19.347296,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292888,
      "ems": null
    },
    {
      "latitude": 51.711761,
      "longitude": 19.349976,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664292892,
      "ems": null
    },
    {
      "latitude": 51.712135,
      "longitude": 19.35257,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664292896,
      "ems": null
    },
    {
      "latitude": 51.712509,
      "longitude": 19.355312,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664292900,
      "ems": null
    },
    {
      "latitude": 51.713013,
      "longitude": 19.357761,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292904,
      "ems": null
    },
    {
      "latitude": 51.713718,
      "longitude": 19.361038,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292909,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.367981,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292919,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.369965,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292923,
      "ems": null
    },
    {
      "latitude": 51.7164,
      "longitude": 19.37298,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292928,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.394531,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292974,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.400024,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664292983,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 19.403118,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664292989,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 19.409279,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664292999,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 19.415665,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664293010,
      "ems": null
    },
    {
      "latitude": 51.725727,
      "longitude": 19.418869,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664293015,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.42071,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664293019,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.423065,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664293023,
      "ems": null
    },
    {
      "latitude": 51.724594,
      "longitude": 19.424942,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664293027,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.426804,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664293031,
      "ems": null
    },
    {
      "latitude": 51.722031,
      "longitude": 19.428802,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664293037,
      "ems": null
    },
    {
      "latitude": 51.720608,
      "longitude": 19.430008,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664293041,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.431076,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664293045,
      "ems": null
    },
    {
      "latitude": 51.717442,
      "longitude": 19.432373,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664293049,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 19.433441,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664293053,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.434443,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664293057,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.435408,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664293061,
      "ems": null
    },
    {
      "latitude": 51.710907,
      "longitude": 19.436373,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664293065,
      "ems": null
    },
    {
      "latitude": 51.709293,
      "longitude": 19.436646,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664293069,
      "ems": null
    },
    {
      "latitude": 51.707664,
      "longitude": 19.436264,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664293073,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.434814,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664293077,
      "ems": null
    },
    {
      "latitude": 51.7038,
      "longitude": 19.432449,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664293081,
      "ems": null
    },
    {
      "latitude": 51.702667,
      "longitude": 19.430063,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664293085,
      "ems": null
    },
    {
      "latitude": 51.701431,
      "longitude": 19.425907,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664293090,
      "ems": null
    },
    {
      "latitude": 51.700516,
      "longitude": 19.421379,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664293095,
      "ems": null
    },
    {
      "latitude": 51.699612,
      "longitude": 19.416656,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664293100,
      "ems": null
    },
    {
      "latitude": 51.698776,
      "longitude": 19.412174,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664293105,
      "ems": null
    },
    {
      "latitude": 51.698227,
      "longitude": 19.409204,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664293109,
      "ems": null
    },
    {
      "latitude": 51.697659,
      "longitude": 19.406052,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664293113,
      "ems": null
    },
    {
      "latitude": 51.6964,
      "longitude": 19.399719,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664293121,
      "ems": null
    },
    {
      "latitude": 51.694958,
      "longitude": 19.392319,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664293129,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.385227,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664293138,
      "ems": null
    },
    {
      "latitude": 51.692398,
      "longitude": 19.379807,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664293146,
      "ems": null
    },
    {
      "latitude": 51.691498,
      "longitude": 19.375504,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664293151,
      "ems": null
    },
    {
      "latitude": 51.690353,
      "longitude": 19.36949,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664293160,
      "ems": null
    },
    {
      "latitude": 51.689278,
      "longitude": 19.363556,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664293168,
      "ems": null
    },
    {
      "latitude": 51.688438,
      "longitude": 19.358597,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664293176,
      "ems": null
    },
    {
      "latitude": 51.687927,
      "longitude": 19.353485,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664293184,
      "ems": null
    },
    {
      "latitude": 51.688393,
      "longitude": 19.350586,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664293189,
      "ems": null
    },
    {
      "latitude": 51.689575,
      "longitude": 19.347815,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664293194,
      "ems": null
    },
    {
      "latitude": 51.69072,
      "longitude": 19.346313,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664293198,
      "ems": null
    },
    {
      "latitude": 51.692734,
      "longitude": 19.344994,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664293203,
      "ems": null
    },
    {
      "latitude": 51.694675,
      "longitude": 19.344559,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664293207,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.34433,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1664293211,
      "ems": null
    },
    {
      "latitude": 51.697952,
      "longitude": 19.344177,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1664293215,
      "ems": null
    },
    {
      "latitude": 51.700123,
      "longitude": 19.343948,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1664293220,
      "ems": null
    },
    {
      "latitude": 51.701427,
      "longitude": 19.343719,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664293224,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.34351,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1664293228,
      "ems": null
    },
    {
      "latitude": 51.705048,
      "longitude": 19.34351,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1664293232,
      "ems": null
    },
    {
      "latitude": 51.707016,
      "longitude": 19.344177,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664293236,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 19.345016,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1664293240,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.347153,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664293244,
      "ems": null
    },
    {
      "latitude": 51.71109,
      "longitude": 19.349819,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664293248,
      "ems": null
    },
    {
      "latitude": 51.712181,
      "longitude": 19.353256,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664293254,
      "ems": null
    },
    {
      "latitude": 51.713013,
      "longitude": 19.357168,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664293259,
      "ems": null
    },
    {
      "latitude": 51.713699,
      "longitude": 19.36088,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664293265,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.364471,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293270,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.367218,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293274,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.37105,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664293281,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.381664,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664293297,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.387381,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293306,
      "ems": null
    },
    {
      "latitude": 51.72139,
      "longitude": 19.395546,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293317,
      "ems": null
    },
    {
      "latitude": 51.722935,
      "longitude": 19.402618,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293327,
      "ems": null
    },
    {
      "latitude": 51.724377,
      "longitude": 19.409332,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293337,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.413986,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664293345,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.416479,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664293349,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.419098,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664293354,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.421387,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664293358,
      "ems": null
    },
    {
      "latitude": 51.72382,
      "longitude": 19.423447,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664293362,
      "ems": null
    },
    {
      "latitude": 51.722889,
      "longitude": 19.424896,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664293366,
      "ems": null
    },
    {
      "latitude": 51.721436,
      "longitude": 19.4265,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664293370,
      "ems": null
    },
    {
      "latitude": 51.720108,
      "longitude": 19.427465,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664293374,
      "ems": null
    },
    {
      "latitude": 51.718327,
      "longitude": 19.428406,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664293379,
      "ems": null
    },
    {
      "latitude": 51.717728,
      "longitude": 19.428579,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664293380,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 19.429098,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664293385,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.429024,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664293389,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.427614,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664293393,
      "ems": null
    },
    {
      "latitude": 51.710831,
      "longitude": 19.425278,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664293397,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.422937,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664293401,
      "ems": null
    },
    {
      "latitude": 51.708755,
      "longitude": 19.419003,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664293406,
      "ems": null
    },
    {
      "latitude": 51.707993,
      "longitude": 19.416046,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664293410,
      "ems": null
    },
    {
      "latitude": 51.707012,
      "longitude": 19.412231,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664293414,
      "ems": null
    },
    {
      "latitude": 51.706409,
      "longitude": 19.409637,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664293418,
      "ems": null
    },
    {
      "latitude": 51.705551,
      "longitude": 19.405642,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664293422,
      "ems": null
    },
    {
      "latitude": 51.704731,
      "longitude": 19.403229,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664293426,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.40155,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664293430,
      "ems": null
    },
    {
      "latitude": 51.700542,
      "longitude": 19.401474,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664293435,
      "ems": null
    },
    {
      "latitude": 51.699287,
      "longitude": 19.405594,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664293441,
      "ems": null
    },
    {
      "latitude": 51.700058,
      "longitude": 19.410021,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664293446,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.412537,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293450,
      "ems": null
    },
    {
      "latitude": 51.701382,
      "longitude": 19.415894,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664293454,
      "ems": null
    },
    {
      "latitude": 51.702164,
      "longitude": 19.418854,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664293458,
      "ems": null
    },
    {
      "latitude": 51.703056,
      "longitude": 19.421844,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1664293462,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.424438,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664293466,
      "ems": null
    },
    {
      "latitude": 51.704128,
      "longitude": 19.426651,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664293470,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.432587,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664293479,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.435556,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664293484,
      "ems": null
    },
    {
      "latitude": 51.707932,
      "longitude": 19.441198,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664293494,
      "ems": null
    },
    {
      "latitude": 51.708664,
      "longitude": 19.443722,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664293498,
      "ems": null
    },
    {
      "latitude": 51.709534,
      "longitude": 19.445875,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1664293502,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 19.447433,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664293506,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.4487,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664293510,
      "ems": null
    },
    {
      "latitude": 51.71423,
      "longitude": 19.448929,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1664293514,
      "ems": null
    },
    {
      "latitude": 51.716465,
      "longitude": 19.448395,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1664293518,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.447508,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664293522,
      "ems": null
    },
    {
      "latitude": 51.719955,
      "longitude": 19.446335,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664293526,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.445267,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664293530,
      "ems": null
    },
    {
      "latitude": 51.723495,
      "longitude": 19.444391,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664293534,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.443352,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664293538,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 19.442312,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664293542,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.440994,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664293546,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.437784,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664293551,
      "ems": null
    },
    {
      "latitude": 51.730476,
      "longitude": 19.434586,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664293555,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.431549,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664293559,
      "ems": null
    },
    {
      "latitude": 51.729591,
      "longitude": 19.42955,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664293563,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.427021,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664293567,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.42482,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664293571,
      "ems": null
    },
    {
      "latitude": 51.727356,
      "longitude": 19.421768,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664293575,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.419556,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664293579,
      "ems": null
    },
    {
      "latitude": 51.726196,
      "longitude": 19.416628,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664293583,
      "ems": null
    },
    {
      "latitude": 51.725494,
      "longitude": 19.413986,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664293588,
      "ems": null
    },
    {
      "latitude": 51.724937,
      "longitude": 19.411926,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664293592,
      "ems": null
    },
    {
      "latitude": 51.724098,
      "longitude": 19.408188,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "timestamp": 1664293599,
      "ems": null
    },
    {
      "latitude": 51.723312,
      "longitude": 19.404751,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664293605,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.401558,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664293612,
      "ems": null
    },
    {
      "latitude": 51.722466,
      "longitude": 19.407516,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664293753,
      "ems": null
    }
  ]
};
