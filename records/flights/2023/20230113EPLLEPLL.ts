import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230113EPLLEPLL",
    callsign: "BNI6V",
    name: "IR2/15",
    description: "Cross Country IFR flight to Katowice. 1xRNP26 EPKT, 1xVOR25 EPLL. Instrument Time 02:15",
  },
  pilotLog: {
    departure: new Date(2023, 0, 13, 11, 8).getTime(),
    arrival: new Date(2023, 0, 13, 13, 26).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 138,
    picTime: 0,
    dualTime: 138,
    ifrTime: 138,
    landings: {
      day: 1,
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
      registration: "SP-RVR",
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
      "latitude": 51.721252,
      "longitude": 19.394062,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673608645,
      "ems": null
    },
    {
      "latitude": 51.720703,
      "longitude": 19.391315,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608650,
      "ems": null
    },
    {
      "latitude": 51.720062,
      "longitude": 19.388197,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673608657,
      "ems": null
    },
    {
      "latitude": 51.719349,
      "longitude": 19.384613,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 253,
      "squawk": "2641",
      "timestamp": 1673608664,
      "ems": null
    },
    {
      "latitude": 51.718872,
      "longitude": 19.38159,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673608670,
      "ems": null
    },
    {
      "latitude": 51.718327,
      "longitude": 19.378586,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673608676,
      "ems": null
    },
    {
      "latitude": 51.717674,
      "longitude": 19.375229,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673608682,
      "ems": null
    },
    {
      "latitude": 51.717068,
      "longitude": 19.372025,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608688,
      "ems": null
    },
    {
      "latitude": 51.716354,
      "longitude": 19.36912,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673608694,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.367783,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673608697,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 19.366224,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673608700,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.363251,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673608706,
      "ems": null
    },
    {
      "latitude": 51.714508,
      "longitude": 19.361954,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673608709,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.358902,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673608715,
      "ems": null
    },
    {
      "latitude": 51.712967,
      "longitude": 19.355312,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673608724,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.352863,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 243,
      "squawk": "2641",
      "timestamp": 1673608729,
      "ems": null
    },
    {
      "latitude": 51.71196,
      "longitude": 19.351971,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 242,
      "squawk": "2641",
      "timestamp": 1673608731,
      "ems": null
    },
    {
      "latitude": 51.710922,
      "longitude": 19.347763,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673608741,
      "ems": null
    },
    {
      "latitude": 51.710358,
      "longitude": 19.344994,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608747,
      "ems": null
    },
    {
      "latitude": 51.709713,
      "longitude": 19.342346,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673608753,
      "ems": null
    },
    {
      "latitude": 51.709076,
      "longitude": 19.339798,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673608759,
      "ems": null
    },
    {
      "latitude": 51.708969,
      "longitude": 19.339294,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673608761,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 19.335556,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608769,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 19.332003,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673608777,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.329376,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673608783,
      "ems": null
    },
    {
      "latitude": 51.70665,
      "longitude": 19.328663,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673608785,
      "ems": null
    },
    {
      "latitude": 51.705757,
      "longitude": 19.324493,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673608793,
      "ems": null
    },
    {
      "latitude": 51.705196,
      "longitude": 19.322052,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608798,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.318048,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673608806,
      "ems": null
    },
    {
      "latitude": 51.703308,
      "longitude": 19.313372,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673608815,
      "ems": null
    },
    {
      "latitude": 51.702591,
      "longitude": 19.310226,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608821,
      "ems": null
    },
    {
      "latitude": 51.701843,
      "longitude": 19.306913,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673608827,
      "ems": null
    },
    {
      "latitude": 51.701054,
      "longitude": 19.303131,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608833,
      "ems": null
    },
    {
      "latitude": 51.70031,
      "longitude": 19.299698,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608839,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.296265,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608845,
      "ems": null
    },
    {
      "latitude": 51.698772,
      "longitude": 19.292831,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "squawk": "2641",
      "timestamp": 1673608851,
      "ems": null
    },
    {
      "latitude": 51.697983,
      "longitude": 19.289246,
      "altitude": {
        "feet": 3750,
        "meters": 1143
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608857,
      "ems": null
    },
    {
      "latitude": 51.697189,
      "longitude": 19.285736,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673608863,
      "ems": null
    },
    {
      "latitude": 51.696541,
      "longitude": 19.282074,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 258,
      "squawk": "2641",
      "timestamp": 1673608869,
      "ems": null
    },
    {
      "latitude": 51.696445,
      "longitude": 19.280014,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 269,
      "squawk": "2641",
      "timestamp": 1673608872,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.278111,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 278,
      "squawk": "2641",
      "timestamp": 1673608875,
      "ems": null
    },
    {
      "latitude": 51.696819,
      "longitude": 19.276581,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 287,
      "squawk": "2641",
      "timestamp": 1673608878,
      "ems": null
    },
    {
      "latitude": 51.697285,
      "longitude": 19.27475,
      "altitude": {
        "feet": 4075,
        "meters": 1242
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 294,
      "squawk": "2641",
      "timestamp": 1673608881,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.273071,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 303,
      "squawk": "2641",
      "timestamp": 1673608884,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.271578,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 309,
      "squawk": "2641",
      "timestamp": 1673608887,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.270096,
      "altitude": {
        "feet": 4175,
        "meters": 1273
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
      "heading": 315,
      "squawk": "2641",
      "timestamp": 1673608890,
      "ems": null
    },
    {
      "latitude": 51.70047,
      "longitude": 19.268831,
      "altitude": {
        "feet": 4225,
        "meters": 1288
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 322,
      "squawk": "2641",
      "timestamp": 1673608893,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 19.267502,
      "altitude": {
        "feet": 4250,
        "meters": 1295
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
      "heading": 326,
      "squawk": "2641",
      "timestamp": 1673608896,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.26651,
      "altitude": {
        "feet": 4275,
        "meters": 1303
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
      "heading": 330,
      "squawk": "2641",
      "timestamp": 1673608899,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.265442,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 334,
      "squawk": "2641",
      "timestamp": 1673608902,
      "ems": null
    },
    {
      "latitude": 51.705292,
      "longitude": 19.264526,
      "altitude": {
        "feet": 4350,
        "meters": 1326
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
      "heading": 337,
      "squawk": "2641",
      "timestamp": 1673608905,
      "ems": null
    },
    {
      "latitude": 51.706596,
      "longitude": 19.263763,
      "altitude": {
        "feet": 4375,
        "meters": 1334
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
      "heading": 338,
      "squawk": "2641",
      "timestamp": 1673608908,
      "ems": null
    },
    {
      "latitude": 51.70784,
      "longitude": 19.262968,
      "altitude": {
        "feet": 4425,
        "meters": 1349
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608911,
      "ems": null
    },
    {
      "latitude": 51.70911,
      "longitude": 19.262238,
      "altitude": {
        "feet": 4450,
        "meters": 1356
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673608914,
      "ems": null
    },
    {
      "latitude": 51.710644,
      "longitude": 19.261398,
      "altitude": {
        "feet": 4475,
        "meters": 1364
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608917,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.26074,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608920,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.259998,
      "altitude": {
        "feet": 4525,
        "meters": 1379
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608923,
      "ems": null
    },
    {
      "latitude": 51.714603,
      "longitude": 19.259186,
      "altitude": {
        "feet": 4575,
        "meters": 1394
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608926,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.25844,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608929,
      "ems": null
    },
    {
      "latitude": 51.717209,
      "longitude": 19.25766,
      "altitude": {
        "feet": 4650,
        "meters": 1417
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608932,
      "ems": null
    },
    {
      "latitude": 51.720016,
      "longitude": 19.256063,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608938,
      "ems": null
    },
    {
      "latitude": 51.722672,
      "longitude": 19.25458,
      "altitude": {
        "feet": 4775,
        "meters": 1455
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608944,
      "ems": null
    },
    {
      "latitude": 51.725403,
      "longitude": 19.253006,
      "altitude": {
        "feet": 4850,
        "meters": 1478
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673608950,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.251535,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673608956,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 19.2502,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "2641",
      "timestamp": 1673608962,
      "ems": null
    },
    {
      "latitude": 51.732525,
      "longitude": 19.249802,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673608965,
      "ems": null
    },
    {
      "latitude": 51.733978,
      "longitude": 19.249754,
      "altitude": {
        "feet": 5050,
        "meters": 1539
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 2,
      "squawk": "2641",
      "timestamp": 1673608968,
      "ems": null
    },
    {
      "latitude": 51.735626,
      "longitude": 19.250126,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 9,
      "squawk": "2641",
      "timestamp": 1673608971,
      "ems": null
    },
    {
      "latitude": 51.737137,
      "longitude": 19.250793,
      "altitude": {
        "feet": 5125,
        "meters": 1562
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 17,
      "squawk": "2641",
      "timestamp": 1673608974,
      "ems": null
    },
    {
      "latitude": 51.738342,
      "longitude": 19.251633,
      "altitude": {
        "feet": 5175,
        "meters": 1577
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 24,
      "squawk": "2641",
      "timestamp": 1673608977,
      "ems": null
    },
    {
      "latitude": 51.739227,
      "longitude": 19.252319,
      "altitude": {
        "feet": 5200,
        "meters": 1585
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
      "heading": 29,
      "squawk": "2641",
      "timestamp": 1673608979,
      "ems": null
    },
    {
      "latitude": 51.74123,
      "longitude": 19.254837,
      "altitude": {
        "feet": 5225,
        "meters": 1593
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 41,
      "squawk": "2641",
      "timestamp": 1673608983,
      "ems": null
    },
    {
      "latitude": 51.74231,
      "longitude": 19.256733,
      "altitude": {
        "feet": 5275,
        "meters": 1608
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 50,
      "squawk": "2641",
      "timestamp": 1673608986,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 19.259033,
      "altitude": {
        "feet": 5300,
        "meters": 1615
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 57,
      "squawk": "2641",
      "timestamp": 1673608989,
      "ems": null
    },
    {
      "latitude": 51.743931,
      "longitude": 19.261475,
      "altitude": {
        "feet": 5350,
        "meters": 1631
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 67,
      "squawk": "2641",
      "timestamp": 1673608992,
      "ems": null
    },
    {
      "latitude": 51.744415,
      "longitude": 19.264154,
      "altitude": {
        "feet": 5375,
        "meters": 1638
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 75,
      "squawk": "2641",
      "timestamp": 1673608995,
      "ems": null
    },
    {
      "latitude": 51.744781,
      "longitude": 19.266605,
      "altitude": {
        "feet": 5425,
        "meters": 1654
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673608998,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.269257,
      "altitude": {
        "feet": 5450,
        "meters": 1661
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 79,
      "squawk": "2641",
      "timestamp": 1673609001,
      "ems": null
    },
    {
      "latitude": 51.745377,
      "longitude": 19.272099,
      "altitude": {
        "feet": 5500,
        "meters": 1676
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673609005,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.274771,
      "altitude": {
        "feet": 5500,
        "meters": 1676
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673609008,
      "ems": null
    },
    {
      "latitude": 51.745834,
      "longitude": 19.277145,
      "altitude": {
        "feet": 5525,
        "meters": 1684
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673609010,
      "ems": null
    },
    {
      "latitude": 51.746117,
      "longitude": 19.280014,
      "altitude": {
        "feet": 5550,
        "meters": 1692
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673609013,
      "ems": null
    },
    {
      "latitude": 51.746384,
      "longitude": 19.282862,
      "altitude": {
        "feet": 5575,
        "meters": 1699
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673609016,
      "ems": null
    },
    {
      "latitude": 51.746658,
      "longitude": 19.285385,
      "altitude": {
        "feet": 5625,
        "meters": 1715
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673609019,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 19.288132,
      "altitude": {
        "feet": 5650,
        "meters": 1722
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 79,
      "squawk": "2641",
      "timestamp": 1673609022,
      "ems": null
    },
    {
      "latitude": 51.748306,
      "longitude": 19.299639,
      "altitude": {
        "feet": 5775,
        "meters": 1760
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609035,
      "ems": null
    },
    {
      "latitude": 51.749657,
      "longitude": 19.310532,
      "altitude": {
        "feet": 5875,
        "meters": 1791
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 79,
      "squawk": "2641",
      "timestamp": 1673609047,
      "ems": null
    },
    {
      "latitude": 51.751099,
      "longitude": 19.321463,
      "altitude": {
        "feet": 6025,
        "meters": 1836
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609059,
      "ems": null
    },
    {
      "latitude": 51.75259,
      "longitude": 19.332733,
      "altitude": {
        "feet": 6150,
        "meters": 1875
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 77,
      "squawk": "2641",
      "timestamp": 1673609071,
      "ems": null
    },
    {
      "latitude": 51.754032,
      "longitude": 19.343491,
      "altitude": {
        "feet": 6275,
        "meters": 1913
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "2641",
      "timestamp": 1673609083,
      "ems": null
    },
    {
      "latitude": 51.75552,
      "longitude": 19.354706,
      "altitude": {
        "feet": 6375,
        "meters": 1943
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609095,
      "ems": null
    },
    {
      "latitude": 51.756958,
      "longitude": 19.366001,
      "altitude": {
        "feet": 6500,
        "meters": 1981
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609107,
      "ems": null
    },
    {
      "latitude": 51.758316,
      "longitude": 19.376602,
      "altitude": {
        "feet": 6600,
        "meters": 2012
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609119,
      "ems": null
    },
    {
      "latitude": 51.759796,
      "longitude": 19.387676,
      "altitude": {
        "feet": 6725,
        "meters": 2050
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
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609131,
      "ems": null
    },
    {
      "latitude": 51.761261,
      "longitude": 19.399109,
      "altitude": {
        "feet": 6850,
        "meters": 2088
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609143,
      "ems": null
    },
    {
      "latitude": 51.762737,
      "longitude": 19.410095,
      "altitude": {
        "feet": 6975,
        "meters": 2126
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609155,
      "ems": null
    },
    {
      "latitude": 51.764088,
      "longitude": 19.420853,
      "altitude": {
        "feet": 7100,
        "meters": 2164
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609167,
      "ems": null
    },
    {
      "latitude": 51.765484,
      "longitude": 19.432068,
      "altitude": {
        "feet": 7225,
        "meters": 2202
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609179,
      "ems": null
    },
    {
      "latitude": 51.766846,
      "longitude": 19.442608,
      "altitude": {
        "feet": 7325,
        "meters": 2233
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609191,
      "ems": null
    },
    {
      "latitude": 51.768276,
      "longitude": 19.453888,
      "altitude": {
        "feet": 7425,
        "meters": 2263
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609203,
      "ems": null
    },
    {
      "latitude": 51.76973,
      "longitude": 19.46525,
      "altitude": {
        "feet": 7525,
        "meters": 2294
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609215,
      "ems": null
    },
    {
      "latitude": 51.771023,
      "longitude": 19.476395,
      "altitude": {
        "feet": 7625,
        "meters": 2324
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 79,
      "squawk": "2641",
      "timestamp": 1673609227,
      "ems": null
    },
    {
      "latitude": 51.772373,
      "longitude": 19.487686,
      "altitude": {
        "feet": 7750,
        "meters": 2362
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 79,
      "squawk": "2641",
      "timestamp": 1673609239,
      "ems": null
    },
    {
      "latitude": 51.773678,
      "longitude": 19.497833,
      "altitude": {
        "feet": 7850,
        "meters": 2393
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609250,
      "ems": null
    },
    {
      "latitude": 51.775223,
      "longitude": 19.509121,
      "altitude": {
        "feet": 7950,
        "meters": 2423
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "2641",
      "timestamp": 1673609263,
      "ems": null
    },
    {
      "latitude": 51.776657,
      "longitude": 19.52034,
      "altitude": {
        "feet": 8050,
        "meters": 2454
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673609275,
      "ems": null
    },
    {
      "latitude": 51.777775,
      "longitude": 19.531403,
      "altitude": {
        "feet": 8175,
        "meters": 2492
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 87,
      "squawk": "2641",
      "timestamp": 1673609287,
      "ems": null
    },
    {
      "latitude": 51.777775,
      "longitude": 19.534378,
      "altitude": {
        "feet": 8200,
        "meters": 2499
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 93,
      "squawk": "2641",
      "timestamp": 1673609290,
      "ems": null
    },
    {
      "latitude": 51.777542,
      "longitude": 19.537201,
      "altitude": {
        "feet": 8250,
        "meters": 2515
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 100,
      "squawk": "2641",
      "timestamp": 1673609293,
      "ems": null
    },
    {
      "latitude": 51.777191,
      "longitude": 19.539557,
      "altitude": {
        "feet": 8275,
        "meters": 2522
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 104,
      "squawk": "2641",
      "timestamp": 1673609296,
      "ems": null
    },
    {
      "latitude": 51.776642,
      "longitude": 19.54208,
      "altitude": {
        "feet": 8300,
        "meters": 2530
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 112,
      "squawk": "2641",
      "timestamp": 1673609299,
      "ems": null
    },
    {
      "latitude": 51.775959,
      "longitude": 19.54422,
      "altitude": {
        "feet": 8350,
        "meters": 2545
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 119,
      "squawk": "2641",
      "timestamp": 1673609302,
      "ems": null
    },
    {
      "latitude": 51.77512,
      "longitude": 19.546204,
      "altitude": {
        "feet": 8350,
        "meters": 2545
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
      "heading": 126,
      "squawk": "2641",
      "timestamp": 1673609305,
      "ems": null
    },
    {
      "latitude": 51.77417,
      "longitude": 19.547871,
      "altitude": {
        "feet": 8375,
        "meters": 2553
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
      "heading": 137,
      "squawk": "2641",
      "timestamp": 1673609308,
      "ems": null
    },
    {
      "latitude": 51.77293,
      "longitude": 19.549332,
      "altitude": {
        "feet": 8425,
        "meters": 2568
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
      "heading": 145,
      "squawk": "2641",
      "timestamp": 1673609311,
      "ems": null
    },
    {
      "latitude": 51.771954,
      "longitude": 19.550247,
      "altitude": {
        "feet": 8450,
        "meters": 2576
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
      "heading": 151,
      "squawk": "2641",
      "timestamp": 1673609314,
      "ems": null
    },
    {
      "latitude": 51.770882,
      "longitude": 19.551163,
      "altitude": {
        "feet": 8500,
        "meters": 2591
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 154,
      "squawk": "2641",
      "timestamp": 1673609317,
      "ems": null
    },
    {
      "latitude": 51.769592,
      "longitude": 19.552101,
      "altitude": {
        "feet": 8525,
        "meters": 2598
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
      "heading": 154,
      "squawk": "2641",
      "timestamp": 1673609321,
      "ems": null
    },
    {
      "latitude": 51.768631,
      "longitude": 19.552843,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 154,
      "squawk": "2641",
      "timestamp": 1673609323,
      "ems": null
    },
    {
      "latitude": 51.767303,
      "longitude": 19.553883,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 153,
      "squawk": "2641",
      "timestamp": 1673609327,
      "ems": null
    },
    {
      "latitude": 51.766296,
      "longitude": 19.554773,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 151,
      "squawk": "2641",
      "timestamp": 1673609330,
      "ems": null
    },
    {
      "latitude": 51.764923,
      "longitude": 19.555962,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 151,
      "squawk": "2641",
      "timestamp": 1673609333,
      "ems": null
    },
    {
      "latitude": 51.76376,
      "longitude": 19.556961,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 149,
      "squawk": "2641",
      "timestamp": 1673609336,
      "ems": null
    },
    {
      "latitude": 51.76236,
      "longitude": 19.558336,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 149,
      "squawk": "2641",
      "timestamp": 1673609339,
      "ems": null
    },
    {
      "latitude": 51.75705,
      "longitude": 19.563755,
      "altitude": {
        "feet": 8575,
        "meters": 2614
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "2641",
      "timestamp": 1673609351,
      "ems": null
    },
    {
      "latitude": 51.751831,
      "longitude": 19.569323,
      "altitude": {
        "feet": 8600,
        "meters": 2621
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
      "heading": 146,
      "squawk": "2641",
      "timestamp": 1673609362,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 19.5755,
      "altitude": {
        "feet": 8675,
        "meters": 2644
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 145,
      "squawk": "2641",
      "timestamp": 1673609375,
      "ems": null
    },
    {
      "latitude": 51.740578,
      "longitude": 19.581451,
      "altitude": {
        "feet": 8750,
        "meters": 2667
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609388,
      "ems": null
    },
    {
      "latitude": 51.735306,
      "longitude": 19.58699,
      "altitude": {
        "feet": 8825,
        "meters": 2690
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609399,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.592186,
      "altitude": {
        "feet": 8900,
        "meters": 2713
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609411,
      "ems": null
    },
    {
      "latitude": 51.72496,
      "longitude": 19.597456,
      "altitude": {
        "feet": 8950,
        "meters": 2728
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609423,
      "ems": null
    },
    {
      "latitude": 51.719395,
      "longitude": 19.603348,
      "altitude": {
        "feet": 9050,
        "meters": 2758
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "2641",
      "timestamp": 1673609436,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.60874,
      "altitude": {
        "feet": 9125,
        "meters": 2781
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609448,
      "ems": null
    },
    {
      "latitude": 51.708481,
      "longitude": 19.614307,
      "altitude": {
        "feet": 9175,
        "meters": 2797
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609460,
      "ems": null
    },
    {
      "latitude": 51.703262,
      "longitude": 19.619726,
      "altitude": {
        "feet": 9275,
        "meters": 2827
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
      "heading": 146,
      "squawk": "2641",
      "timestamp": 1673609471,
      "ems": null
    },
    {
      "latitude": 51.697266,
      "longitude": 19.625813,
      "altitude": {
        "feet": 9375,
        "meters": 2858
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609485,
      "ems": null
    },
    {
      "latitude": 51.691818,
      "longitude": 19.631454,
      "altitude": {
        "feet": 9450,
        "meters": 2880
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609497,
      "ems": null
    },
    {
      "latitude": 51.6866,
      "longitude": 19.636724,
      "altitude": {
        "feet": 9550,
        "meters": 2911
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609509,
      "ems": null
    },
    {
      "latitude": 51.681736,
      "longitude": 19.641724,
      "altitude": {
        "feet": 9625,
        "meters": 2934
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609520,
      "ems": null
    },
    {
      "latitude": 51.67643,
      "longitude": 19.647141,
      "altitude": {
        "feet": 9725,
        "meters": 2964
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609532,
      "ems": null
    },
    {
      "latitude": 51.671074,
      "longitude": 19.652481,
      "altitude": {
        "feet": 9800,
        "meters": 2987
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609544,
      "ems": null
    },
    {
      "latitude": 51.665955,
      "longitude": 19.657669,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609556,
      "ems": null
    },
    {
      "latitude": 51.660694,
      "longitude": 19.662933,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609568,
      "ems": null
    },
    {
      "latitude": 51.655434,
      "longitude": 19.668045,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609580,
      "ems": null
    },
    {
      "latitude": 51.649521,
      "longitude": 19.673767,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609592,
      "ems": null
    },
    {
      "latitude": 51.643608,
      "longitude": 19.679718,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609604,
      "ems": null
    },
    {
      "latitude": 51.63765,
      "longitude": 19.685822,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609616,
      "ems": null
    },
    {
      "latitude": 51.631691,
      "longitude": 19.692078,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609628,
      "ems": null
    },
    {
      "latitude": 51.625454,
      "longitude": 19.698486,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609640,
      "ems": null
    },
    {
      "latitude": 51.619495,
      "longitude": 19.704514,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609652,
      "ems": null
    },
    {
      "latitude": 51.613266,
      "longitude": 19.71081,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609664,
      "ems": null
    },
    {
      "latitude": 51.607315,
      "longitude": 19.716896,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609676,
      "ems": null
    },
    {
      "latitude": 51.601089,
      "longitude": 19.723206,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609688,
      "ems": null
    },
    {
      "latitude": 51.595001,
      "longitude": 19.729515,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609700,
      "ems": null
    },
    {
      "latitude": 51.588818,
      "longitude": 19.735565,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609712,
      "ems": null
    },
    {
      "latitude": 51.582642,
      "longitude": 19.741615,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609724,
      "ems": null
    },
    {
      "latitude": 51.576389,
      "longitude": 19.747925,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609736,
      "ems": null
    },
    {
      "latitude": 51.570148,
      "longitude": 19.754257,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609749,
      "ems": null
    },
    {
      "latitude": 51.56382,
      "longitude": 19.760666,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609761,
      "ems": null
    },
    {
      "latitude": 51.557648,
      "longitude": 19.767002,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609772,
      "ems": null
    },
    {
      "latitude": 51.551285,
      "longitude": 19.77346,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609785,
      "ems": null
    },
    {
      "latitude": 51.544827,
      "longitude": 19.779892,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "2641",
      "timestamp": 1673609797,
      "ems": null
    },
    {
      "latitude": 51.538589,
      "longitude": 19.786148,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609809,
      "ems": null
    },
    {
      "latitude": 51.53207,
      "longitude": 19.792786,
      "altitude": {
        "feet": 9925,
        "meters": 3025
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609821,
      "ems": null
    },
    {
      "latitude": 51.525925,
      "longitude": 19.798922,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "2641",
      "timestamp": 1673609833,
      "ems": null
    },
    {
      "latitude": 51.520477,
      "longitude": 19.803822,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 158,
      "squawk": "2641",
      "timestamp": 1673609845,
      "ems": null
    },
    {
      "latitude": 51.518059,
      "longitude": 19.805222,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609848,
      "ems": null
    },
    {
      "latitude": 51.516197,
      "longitude": 19.806137,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "2641",
      "timestamp": 1673609851,
      "ems": null
    },
    {
      "latitude": 51.514751,
      "longitude": 19.806747,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "2641",
      "timestamp": 1673609853,
      "ems": null
    },
    {
      "latitude": 51.513016,
      "longitude": 19.807533,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 164,
      "squawk": "2641",
      "timestamp": 1673609857,
      "ems": null
    },
    {
      "latitude": 51.510681,
      "longitude": 19.808647,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 163,
      "squawk": "2641",
      "timestamp": 1673609861,
      "ems": null
    },
    {
      "latitude": 51.508987,
      "longitude": 19.809464,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 163,
      "squawk": "2641",
      "timestamp": 1673609864,
      "ems": null
    },
    {
      "latitude": 51.50721,
      "longitude": 19.810333,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673609867,
      "ems": null
    },
    {
      "latitude": 51.500519,
      "longitude": 19.813768,
      "altitude": {
        "feet": 9925,
        "meters": 3025
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609879,
      "ems": null
    },
    {
      "latitude": 51.493973,
      "longitude": 19.817257,
      "altitude": {
        "feet": 9925,
        "meters": 3025
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609891,
      "ems": null
    },
    {
      "latitude": 51.487244,
      "longitude": 19.820894,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609903,
      "ems": null
    },
    {
      "latitude": 51.480442,
      "longitude": 19.824448,
      "altitude": {
        "feet": 9900,
        "meters": 3018
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673609914,
      "ems": null
    },
    {
      "latitude": 51.473694,
      "longitude": 19.827957,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673609927,
      "ems": null
    },
    {
      "latitude": 51.466873,
      "longitude": 19.831511,
      "altitude": {
        "feet": 9900,
        "meters": 3018
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609938,
      "ems": null
    },
    {
      "latitude": 51.460144,
      "longitude": 19.835148,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609950,
      "ems": null
    },
    {
      "latitude": 51.453186,
      "longitude": 19.838711,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673609963,
      "ems": null
    },
    {
      "latitude": 51.446594,
      "longitude": 19.842125,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609975,
      "ems": null
    },
    {
      "latitude": 51.439896,
      "longitude": 19.845734,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673609987,
      "ems": null
    },
    {
      "latitude": 51.433411,
      "longitude": 19.849102,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673609999,
      "ems": null
    },
    {
      "latitude": 51.426628,
      "longitude": 19.8526,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610011,
      "ems": null
    },
    {
      "latitude": 51.419971,
      "longitude": 19.85611,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610024,
      "ems": null
    },
    {
      "latitude": 51.413589,
      "longitude": 19.859421,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610035,
      "ems": null
    },
    {
      "latitude": 51.406403,
      "longitude": 19.863207,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610049,
      "ems": null
    },
    {
      "latitude": 51.400085,
      "longitude": 19.866474,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610061,
      "ems": null
    },
    {
      "latitude": 51.393436,
      "longitude": 19.869919,
      "altitude": {
        "feet": 10050,
        "meters": 3063
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610073,
      "ems": null
    },
    {
      "latitude": 51.386826,
      "longitude": 19.873352,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610085,
      "ems": null
    },
    {
      "latitude": 51.379944,
      "longitude": 19.87694,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610098,
      "ems": null
    },
    {
      "latitude": 51.37328,
      "longitude": 19.880295,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610110,
      "ems": null
    },
    {
      "latitude": 51.366951,
      "longitude": 19.883652,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610122,
      "ems": null
    },
    {
      "latitude": 51.360153,
      "longitude": 19.887314,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610134,
      "ems": null
    },
    {
      "latitude": 51.353542,
      "longitude": 19.890594,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610146,
      "ems": null
    },
    {
      "latitude": 51.346802,
      "longitude": 19.894087,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610158,
      "ems": null
    },
    {
      "latitude": 51.340256,
      "longitude": 19.897577,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610170,
      "ems": null
    },
    {
      "latitude": 51.333435,
      "longitude": 19.90114,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610183,
      "ems": null
    },
    {
      "latitude": 51.326916,
      "longitude": 19.904556,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610194,
      "ems": null
    },
    {
      "latitude": 51.319931,
      "longitude": 19.908192,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610207,
      "ems": null
    },
    {
      "latitude": 51.31311,
      "longitude": 19.911829,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610220,
      "ems": null
    },
    {
      "latitude": 51.306427,
      "longitude": 19.915318,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610232,
      "ems": null
    },
    {
      "latitude": 51.299881,
      "longitude": 19.918732,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610244,
      "ems": null
    },
    {
      "latitude": 51.293106,
      "longitude": 19.922369,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610255,
      "ems": null
    },
    {
      "latitude": 51.286377,
      "longitude": 19.925859,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610268,
      "ems": null
    },
    {
      "latitude": 51.279758,
      "longitude": 19.929123,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610280,
      "ems": null
    },
    {
      "latitude": 51.272873,
      "longitude": 19.932613,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610292,
      "ems": null
    },
    {
      "latitude": 51.265976,
      "longitude": 19.936218,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610304,
      "ems": null
    },
    {
      "latitude": 51.259186,
      "longitude": 19.939814,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610316,
      "ems": null
    },
    {
      "latitude": 51.252594,
      "longitude": 19.943304,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610328,
      "ems": null
    },
    {
      "latitude": 51.245682,
      "longitude": 19.946867,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610340,
      "ems": null
    },
    {
      "latitude": 51.23893,
      "longitude": 19.950333,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610352,
      "ems": null
    },
    {
      "latitude": 51.232182,
      "longitude": 19.953766,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610364,
      "ems": null
    },
    {
      "latitude": 51.22554,
      "longitude": 19.957184,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610376,
      "ems": null
    },
    {
      "latitude": 51.218719,
      "longitude": 19.960749,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610388,
      "ems": null
    },
    {
      "latitude": 51.212036,
      "longitude": 19.964237,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610400,
      "ems": null
    },
    {
      "latitude": 51.205318,
      "longitude": 19.967728,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610412,
      "ems": null
    },
    {
      "latitude": 51.198532,
      "longitude": 19.971289,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610425,
      "ems": null
    },
    {
      "latitude": 51.192078,
      "longitude": 19.974628,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610437,
      "ems": null
    },
    {
      "latitude": 51.18576,
      "longitude": 19.977896,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610449,
      "ems": null
    },
    {
      "latitude": 51.179157,
      "longitude": 19.981232,
      "altitude": {
        "feet": 10050,
        "meters": 3063
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610461,
      "ems": null
    },
    {
      "latitude": 51.172642,
      "longitude": 19.984589,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610473,
      "ems": null
    },
    {
      "latitude": 51.166031,
      "longitude": 19.988022,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610485,
      "ems": null
    },
    {
      "latitude": 51.159531,
      "longitude": 19.991331,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610497,
      "ems": null
    },
    {
      "latitude": 51.152939,
      "longitude": 19.994671,
      "altitude": {
        "feet": 10050,
        "meters": 3063
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610509,
      "ems": null
    },
    {
      "latitude": 51.146244,
      "longitude": 19.998169,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610521,
      "ems": null
    },
    {
      "latitude": 51.139683,
      "longitude": 20.001602,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610533,
      "ems": null
    },
    {
      "latitude": 51.133072,
      "longitude": 20.00499,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610545,
      "ems": null
    },
    {
      "latitude": 51.126572,
      "longitude": 20.008404,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610557,
      "ems": null
    },
    {
      "latitude": 51.119751,
      "longitude": 20.011894,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610569,
      "ems": null
    },
    {
      "latitude": 51.113113,
      "longitude": 20.015308,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610581,
      "ems": null
    },
    {
      "latitude": 51.106537,
      "longitude": 20.018692,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610593,
      "ems": null
    },
    {
      "latitude": 51.099693,
      "longitude": 20.022278,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610606,
      "ems": null
    },
    {
      "latitude": 51.093037,
      "longitude": 20.025635,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610618,
      "ems": null
    },
    {
      "latitude": 51.08638,
      "longitude": 20.028967,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610630,
      "ems": null
    },
    {
      "latitude": 51.079815,
      "longitude": 20.032272,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610642,
      "ems": null
    },
    {
      "latitude": 51.072971,
      "longitude": 20.035706,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610654,
      "ems": null
    },
    {
      "latitude": 51.066456,
      "longitude": 20.039063,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610666,
      "ems": null
    },
    {
      "latitude": 51.059845,
      "longitude": 20.042496,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610678,
      "ems": null
    },
    {
      "latitude": 51.053192,
      "longitude": 20.045965,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610690,
      "ems": null
    },
    {
      "latitude": 51.046436,
      "longitude": 20.049286,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610702,
      "ems": null
    },
    {
      "latitude": 51.039734,
      "longitude": 20.052572,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610714,
      "ems": null
    },
    {
      "latitude": 51.033142,
      "longitude": 20.055914,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610726,
      "ems": null
    },
    {
      "latitude": 51.02655,
      "longitude": 20.059328,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610738,
      "ems": null
    },
    {
      "latitude": 51.019821,
      "longitude": 20.062891,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610750,
      "ems": null
    },
    {
      "latitude": 51.01329,
      "longitude": 20.066147,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610762,
      "ems": null
    },
    {
      "latitude": 51.006592,
      "longitude": 20.069572,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610774,
      "ems": null
    },
    {
      "latitude": 50.999954,
      "longitude": 20.072987,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610787,
      "ems": null
    },
    {
      "latitude": 50.993317,
      "longitude": 20.076475,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610798,
      "ems": null
    },
    {
      "latitude": 50.986664,
      "longitude": 20.07988,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610810,
      "ems": null
    },
    {
      "latitude": 50.979767,
      "longitude": 20.083305,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610823,
      "ems": null
    },
    {
      "latitude": 50.973118,
      "longitude": 20.08667,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610834,
      "ems": null
    },
    {
      "latitude": 50.966309,
      "longitude": 20.090134,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610847,
      "ems": null
    },
    {
      "latitude": 50.959946,
      "longitude": 20.093327,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610858,
      "ems": null
    },
    {
      "latitude": 50.953705,
      "longitude": 20.096588,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610870,
      "ems": null
    },
    {
      "latitude": 50.947281,
      "longitude": 20.099945,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 161,
      "squawk": "2641",
      "timestamp": 1673610882,
      "ems": null
    },
    {
      "latitude": 50.940903,
      "longitude": 20.103125,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610895,
      "ems": null
    },
    {
      "latitude": 50.934906,
      "longitude": 20.106169,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610906,
      "ems": null
    },
    {
      "latitude": 50.928406,
      "longitude": 20.109434,
      "altitude": {
        "feet": 10075,
        "meters": 3071
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610919,
      "ems": null
    },
    {
      "latitude": 50.921722,
      "longitude": 20.112848,
      "altitude": {
        "feet": 10075,
        "meters": 3071
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 162,
      "squawk": "2641",
      "timestamp": 1673610931,
      "ems": null
    },
    {
      "latitude": 50.915222,
      "longitude": 20.11552,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 174,
      "squawk": "2641",
      "timestamp": 1673610943,
      "ems": null
    },
    {
      "latitude": 50.913391,
      "longitude": 20.115509,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 181,
      "squawk": "2641",
      "timestamp": 1673610946,
      "ems": null
    },
    {
      "latitude": 50.91188,
      "longitude": 20.115225,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 190,
      "squawk": "2641",
      "timestamp": 1673610949,
      "ems": null
    },
    {
      "latitude": 50.910324,
      "longitude": 20.114557,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 196,
      "squawk": "2641",
      "timestamp": 1673610952,
      "ems": null
    },
    {
      "latitude": 50.908905,
      "longitude": 20.113739,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 200,
      "squawk": "2641",
      "timestamp": 1673610955,
      "ems": null
    },
    {
      "latitude": 50.907524,
      "longitude": 20.112839,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 201,
      "squawk": "2641",
      "timestamp": 1673610958,
      "ems": null
    },
    {
      "latitude": 50.90625,
      "longitude": 20.112032,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 201,
      "squawk": "2641",
      "timestamp": 1673610961,
      "ems": null
    },
    {
      "latitude": 50.904739,
      "longitude": 20.111141,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 201,
      "squawk": "2641",
      "timestamp": 1673610964,
      "ems": null
    },
    {
      "latitude": 50.903275,
      "longitude": 20.11025,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 200,
      "squawk": "2641",
      "timestamp": 1673610967,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.109285,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 199,
      "squawk": "2641",
      "timestamp": 1673610970,
      "ems": null
    },
    {
      "latitude": 50.900078,
      "longitude": 20.10849,
      "altitude": {
        "feet": 10075,
        "meters": 3071
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
      "heading": 199,
      "squawk": "2641",
      "timestamp": 1673610974,
      "ems": null
    },
    {
      "latitude": 50.894119,
      "longitude": 20.105362,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673610985,
      "ems": null
    },
    {
      "latitude": 50.888626,
      "longitude": 20.102615,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673610997,
      "ems": null
    },
    {
      "latitude": 50.881828,
      "longitude": 20.099335,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 196,
      "squawk": "2641",
      "timestamp": 1673611010,
      "ems": null
    },
    {
      "latitude": 50.875637,
      "longitude": 20.096359,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611022,
      "ems": null
    },
    {
      "latitude": 50.869587,
      "longitude": 20.093231,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611034,
      "ems": null
    },
    {
      "latitude": 50.863358,
      "longitude": 20.090134,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611046,
      "ems": null
    },
    {
      "latitude": 50.857178,
      "longitude": 20.087091,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611058,
      "ems": null
    },
    {
      "latitude": 50.851151,
      "longitude": 20.084,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 198,
      "squawk": "2641",
      "timestamp": 1673611070,
      "ems": null
    },
    {
      "latitude": 50.845192,
      "longitude": 20.080948,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611082,
      "ems": null
    },
    {
      "latitude": 50.838955,
      "longitude": 20.07782,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 198,
      "squawk": "2641",
      "timestamp": 1673611095,
      "ems": null
    },
    {
      "latitude": 50.832764,
      "longitude": 20.074692,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611107,
      "ems": null
    },
    {
      "latitude": 50.826477,
      "longitude": 20.071487,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611119,
      "ems": null
    },
    {
      "latitude": 50.820328,
      "longitude": 20.068384,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 198,
      "squawk": "2641",
      "timestamp": 1673611131,
      "ems": null
    },
    {
      "latitude": 50.81424,
      "longitude": 20.065266,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 197,
      "squawk": "2641",
      "timestamp": 1673611143,
      "ems": null
    },
    {
      "latitude": 50.807438,
      "longitude": 20.061188,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 209,
      "squawk": "2641",
      "timestamp": 1673611156,
      "ems": null
    },
    {
      "latitude": 50.806412,
      "longitude": 20.06007,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 215,
      "squawk": "2641",
      "timestamp": 1673611158,
      "ems": null
    },
    {
      "latitude": 50.805809,
      "longitude": 20.05928,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 216,
      "squawk": "2641",
      "timestamp": 1673611160,
      "ems": null
    },
    {
      "latitude": 50.804832,
      "longitude": 20.057755,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 223,
      "squawk": "2641",
      "timestamp": 1673611162,
      "ems": null
    },
    {
      "latitude": 50.803574,
      "longitude": 20.054779,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 241,
      "squawk": "2641",
      "timestamp": 1673611167,
      "ems": null
    },
    {
      "latitude": 50.802933,
      "longitude": 20.052721,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673611170,
      "ems": null
    },
    {
      "latitude": 50.80241,
      "longitude": 20.050583,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673611173,
      "ems": null
    },
    {
      "latitude": 50.801788,
      "longitude": 20.048416,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673611176,
      "ems": null
    },
    {
      "latitude": 50.801201,
      "longitude": 20.04631,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 244,
      "squawk": "2641",
      "timestamp": 1673611179,
      "ems": null
    },
    {
      "latitude": 50.800503,
      "longitude": 20.044174,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 242,
      "squawk": "2641",
      "timestamp": 1673611182,
      "ems": null
    },
    {
      "latitude": 50.79982,
      "longitude": 20.042181,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 240,
      "squawk": "2641",
      "timestamp": 1673611185,
      "ems": null
    },
    {
      "latitude": 50.798996,
      "longitude": 20.039953,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611188,
      "ems": null
    },
    {
      "latitude": 50.798172,
      "longitude": 20.037949,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 237,
      "squawk": "2641",
      "timestamp": 1673611191,
      "ems": null
    },
    {
      "latitude": 50.795883,
      "longitude": 20.032307,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 236,
      "squawk": "2641",
      "timestamp": 1673611200,
      "ems": null
    },
    {
      "latitude": 50.794922,
      "longitude": 20.030006,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 236,
      "squawk": "2641",
      "timestamp": 1673611203,
      "ems": null
    },
    {
      "latitude": 50.791798,
      "longitude": 20.022125,
      "altitude": {
        "feet": 9925,
        "meters": 3025
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611215,
      "ems": null
    },
    {
      "latitude": 50.78833,
      "longitude": 20.013155,
      "altitude": {
        "feet": 9900,
        "meters": 3018
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611227,
      "ems": null
    },
    {
      "latitude": 50.785126,
      "longitude": 20.005064,
      "altitude": {
        "feet": 9950,
        "meters": 3033
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611239,
      "ems": null
    },
    {
      "latitude": 50.782162,
      "longitude": 19.997253,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 239,
      "squawk": "2641",
      "timestamp": 1673611251,
      "ems": null
    },
    {
      "latitude": 50.779087,
      "longitude": 19.98909,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 239,
      "squawk": "2641",
      "timestamp": 1673611263,
      "ems": null
    },
    {
      "latitude": 50.776154,
      "longitude": 19.981236,
      "altitude": {
        "feet": 10025,
        "meters": 3056
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
      "heading": 239,
      "squawk": "2641",
      "timestamp": 1673611275,
      "ems": null
    },
    {
      "latitude": 50.773087,
      "longitude": 19.973368,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611287,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 19.965668,
      "altitude": {
        "feet": 10100,
        "meters": 3078
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
      "heading": 239,
      "squawk": "2641",
      "timestamp": 1673611299,
      "ems": null
    },
    {
      "latitude": 50.767319,
      "longitude": 19.958075,
      "altitude": {
        "feet": 10125,
        "meters": 3086
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611311,
      "ems": null
    },
    {
      "latitude": 50.764469,
      "longitude": 19.950562,
      "altitude": {
        "feet": 10150,
        "meters": 3094
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673611323,
      "ems": null
    },
    {
      "latitude": 50.761597,
      "longitude": 19.943451,
      "altitude": {
        "feet": 10175,
        "meters": 3101
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
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673611335,
      "ems": null
    },
    {
      "latitude": 50.757675,
      "longitude": 19.935913,
      "altitude": {
        "feet": 10125,
        "meters": 3086
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611348,
      "ems": null
    },
    {
      "latitude": 50.75386,
      "longitude": 19.928383,
      "altitude": {
        "feet": 10050,
        "meters": 3063
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611360,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 19.920588,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611372,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 19.913254,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611382,
      "ems": null
    },
    {
      "latitude": 50.741894,
      "longitude": 19.905167,
      "altitude": {
        "feet": 9875,
        "meters": 3010
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611395,
      "ems": null
    },
    {
      "latitude": 50.738121,
      "longitude": 19.897842,
      "altitude": {
        "feet": 9800,
        "meters": 2987
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611406,
      "ems": null
    },
    {
      "latitude": 50.733746,
      "longitude": 19.889145,
      "altitude": {
        "feet": 9750,
        "meters": 2972
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611418,
      "ems": null
    },
    {
      "latitude": 50.729462,
      "longitude": 19.880829,
      "altitude": {
        "feet": 9675,
        "meters": 2949
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611430,
      "ems": null
    },
    {
      "latitude": 50.72525,
      "longitude": 19.872412,
      "altitude": {
        "feet": 9600,
        "meters": 2926
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611443,
      "ems": null
    },
    {
      "latitude": 50.720943,
      "longitude": 19.863968,
      "altitude": {
        "feet": 9500,
        "meters": 2896
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611454,
      "ems": null
    },
    {
      "latitude": 50.717033,
      "longitude": 19.856415,
      "altitude": {
        "feet": 9425,
        "meters": 2873
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611466,
      "ems": null
    },
    {
      "latitude": 50.712387,
      "longitude": 19.847395,
      "altitude": {
        "feet": 9350,
        "meters": 2850
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611479,
      "ems": null
    },
    {
      "latitude": 50.70842,
      "longitude": 19.839478,
      "altitude": {
        "feet": 9300,
        "meters": 2835
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611491,
      "ems": null
    },
    {
      "latitude": 50.704277,
      "longitude": 19.831238,
      "altitude": {
        "feet": 9200,
        "meters": 2804
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611503,
      "ems": null
    },
    {
      "latitude": 50.700302,
      "longitude": 19.823345,
      "altitude": {
        "feet": 9125,
        "meters": 2781
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611515,
      "ems": null
    },
    {
      "latitude": 50.696133,
      "longitude": 19.815063,
      "altitude": {
        "feet": 9025,
        "meters": 2751
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611527,
      "ems": null
    },
    {
      "latitude": 50.692108,
      "longitude": 19.807087,
      "altitude": {
        "feet": 8950,
        "meters": 2728
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611539,
      "ems": null
    },
    {
      "latitude": 50.688126,
      "longitude": 19.799118,
      "altitude": {
        "feet": 8900,
        "meters": 2713
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611550,
      "ems": null
    },
    {
      "latitude": 50.684074,
      "longitude": 19.791107,
      "altitude": {
        "feet": 8850,
        "meters": 2697
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611563,
      "ems": null
    },
    {
      "latitude": 50.679932,
      "longitude": 19.782888,
      "altitude": {
        "feet": 8750,
        "meters": 2667
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611575,
      "ems": null
    },
    {
      "latitude": 50.675812,
      "longitude": 19.774723,
      "altitude": {
        "feet": 8650,
        "meters": 2637
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611587,
      "ems": null
    },
    {
      "latitude": 50.671829,
      "longitude": 19.766853,
      "altitude": {
        "feet": 8550,
        "meters": 2606
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611599,
      "ems": null
    },
    {
      "latitude": 50.667782,
      "longitude": 19.758837,
      "altitude": {
        "feet": 8475,
        "meters": 2583
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611611,
      "ems": null
    },
    {
      "latitude": 50.663731,
      "longitude": 19.750969,
      "altitude": {
        "feet": 8425,
        "meters": 2568
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611623,
      "ems": null
    },
    {
      "latitude": 50.659729,
      "longitude": 19.743025,
      "altitude": {
        "feet": 8375,
        "meters": 2553
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611635,
      "ems": null
    },
    {
      "latitude": 50.655304,
      "longitude": 19.734415,
      "altitude": {
        "feet": 8275,
        "meters": 2522
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611648,
      "ems": null
    },
    {
      "latitude": 50.651257,
      "longitude": 19.726398,
      "altitude": {
        "feet": 8200,
        "meters": 2499
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611660,
      "ems": null
    },
    {
      "latitude": 50.647293,
      "longitude": 19.718653,
      "altitude": {
        "feet": 8100,
        "meters": 2469
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611672,
      "ems": null
    },
    {
      "latitude": 50.643402,
      "longitude": 19.710918,
      "altitude": {
        "feet": 8000,
        "meters": 2438
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611684,
      "ems": null
    },
    {
      "latitude": 50.639557,
      "longitude": 19.703329,
      "altitude": {
        "feet": 7925,
        "meters": 2416
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611696,
      "ems": null
    },
    {
      "latitude": 50.635666,
      "longitude": 19.695595,
      "altitude": {
        "feet": 7850,
        "meters": 2393
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611708,
      "ems": null
    },
    {
      "latitude": 50.631844,
      "longitude": 19.687649,
      "altitude": {
        "feet": 7725,
        "meters": 2355
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673611720,
      "ems": null
    },
    {
      "latitude": 50.628025,
      "longitude": 19.679632,
      "altitude": {
        "feet": 7600,
        "meters": 2316
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611732,
      "ems": null
    },
    {
      "latitude": 50.624023,
      "longitude": 19.671392,
      "altitude": {
        "feet": 7525,
        "meters": 2294
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611745,
      "ems": null
    },
    {
      "latitude": 50.620205,
      "longitude": 19.663746,
      "altitude": {
        "feet": 7450,
        "meters": 2271
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611757,
      "ems": null
    },
    {
      "latitude": 50.617126,
      "longitude": 19.657578,
      "altitude": {
        "feet": 7375,
        "meters": 2248
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611767,
      "ems": null
    },
    {
      "latitude": 50.612366,
      "longitude": 19.648397,
      "altitude": {
        "feet": 7275,
        "meters": 2217
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611780,
      "ems": null
    },
    {
      "latitude": 50.608383,
      "longitude": 19.640953,
      "altitude": {
        "feet": 7175,
        "meters": 2187
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673611793,
      "ems": null
    },
    {
      "latitude": 50.604145,
      "longitude": 19.633385,
      "altitude": {
        "feet": 7050,
        "meters": 2149
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673611805,
      "ems": null
    },
    {
      "latitude": 50.600418,
      "longitude": 19.626207,
      "altitude": {
        "feet": 6975,
        "meters": 2126
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611817,
      "ems": null
    },
    {
      "latitude": 50.596928,
      "longitude": 19.619059,
      "altitude": {
        "feet": 6875,
        "meters": 2096
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
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673611829,
      "ems": null
    },
    {
      "latitude": 50.593346,
      "longitude": 19.611561,
      "altitude": {
        "feet": 6800,
        "meters": 2073
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611841,
      "ems": null
    },
    {
      "latitude": 50.589935,
      "longitude": 19.604597,
      "altitude": {
        "feet": 6725,
        "meters": 2050
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611853,
      "ems": null
    },
    {
      "latitude": 50.586273,
      "longitude": 19.597296,
      "altitude": {
        "feet": 6625,
        "meters": 2019
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611865,
      "ems": null
    },
    {
      "latitude": 50.582638,
      "longitude": 19.590256,
      "altitude": {
        "feet": 6575,
        "meters": 2004
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611877,
      "ems": null
    },
    {
      "latitude": 50.579132,
      "longitude": 19.58349,
      "altitude": {
        "feet": 6500,
        "meters": 1981
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611889,
      "ems": null
    },
    {
      "latitude": 50.575653,
      "longitude": 19.576408,
      "altitude": {
        "feet": 6375,
        "meters": 1943
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611901,
      "ems": null
    },
    {
      "latitude": 50.572083,
      "longitude": 19.569469,
      "altitude": {
        "feet": 6250,
        "meters": 1905
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611913,
      "ems": null
    },
    {
      "latitude": 50.568253,
      "longitude": 19.56175,
      "altitude": {
        "feet": 6100,
        "meters": 1859
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611926,
      "ems": null
    },
    {
      "latitude": 50.564758,
      "longitude": 19.554724,
      "altitude": {
        "feet": 5975,
        "meters": 1821
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611937,
      "ems": null
    },
    {
      "latitude": 50.561096,
      "longitude": 19.547569,
      "altitude": {
        "feet": 5825,
        "meters": 1775
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611950,
      "ems": null
    },
    {
      "latitude": 50.557434,
      "longitude": 19.540485,
      "altitude": {
        "feet": 5750,
        "meters": 1753
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611961,
      "ems": null
    },
    {
      "latitude": 50.553864,
      "longitude": 19.533331,
      "altitude": {
        "feet": 5650,
        "meters": 1722
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673611973,
      "ems": null
    },
    {
      "latitude": 50.55019,
      "longitude": 19.526194,
      "altitude": {
        "feet": 5550,
        "meters": 1692
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673611986,
      "ems": null
    },
    {
      "latitude": 50.546402,
      "longitude": 19.519018,
      "altitude": {
        "feet": 5450,
        "meters": 1661
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673611998,
      "ems": null
    },
    {
      "latitude": 50.542789,
      "longitude": 19.512091,
      "altitude": {
        "feet": 5375,
        "meters": 1638
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612010,
      "ems": null
    },
    {
      "latitude": 50.539124,
      "longitude": 19.504925,
      "altitude": {
        "feet": 5300,
        "meters": 1615
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673612022,
      "ems": null
    },
    {
      "latitude": 50.535553,
      "longitude": 19.498131,
      "altitude": {
        "feet": 5225,
        "meters": 1593
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612034,
      "ems": null
    },
    {
      "latitude": 50.531799,
      "longitude": 19.490829,
      "altitude": {
        "feet": 5100,
        "meters": 1554
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673612046,
      "ems": null
    },
    {
      "latitude": 50.528275,
      "longitude": 19.483603,
      "altitude": {
        "feet": 5000,
        "meters": 1524
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673612058,
      "ems": null
    },
    {
      "latitude": 50.524632,
      "longitude": 19.47646,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612070,
      "ems": null
    },
    {
      "latitude": 50.522678,
      "longitude": 19.47282,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612076,
      "ems": null
    },
    {
      "latitude": 50.52063,
      "longitude": 19.468857,
      "altitude": {
        "feet": 4750,
        "meters": 1448
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612082,
      "ems": null
    },
    {
      "latitude": 50.518799,
      "longitude": 19.465387,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612088,
      "ems": null
    },
    {
      "latitude": 50.516785,
      "longitude": 19.461702,
      "altitude": {
        "feet": 4675,
        "meters": 1425
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612094,
      "ems": null
    },
    {
      "latitude": 50.514904,
      "longitude": 19.458271,
      "altitude": {
        "feet": 4625,
        "meters": 1410
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612099,
      "ems": null
    },
    {
      "latitude": 50.512714,
      "longitude": 19.454115,
      "altitude": {
        "feet": 4550,
        "meters": 1387
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612106,
      "ems": null
    },
    {
      "latitude": 50.510742,
      "longitude": 19.450354,
      "altitude": {
        "feet": 4500,
        "meters": 1372
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612112,
      "ems": null
    },
    {
      "latitude": 50.508713,
      "longitude": 19.446468,
      "altitude": {
        "feet": 4475,
        "meters": 1364
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673612118,
      "ems": null
    },
    {
      "latitude": 50.50676,
      "longitude": 19.442476,
      "altitude": {
        "feet": 4425,
        "meters": 1349
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
      "heading": 232,
      "squawk": "2641",
      "timestamp": 1673612124,
      "ems": null
    },
    {
      "latitude": 50.504883,
      "longitude": 19.438574,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673612130,
      "ems": null
    },
    {
      "latitude": 50.502987,
      "longitude": 19.434591,
      "altitude": {
        "feet": 4350,
        "meters": 1326
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673612136,
      "ems": null
    },
    {
      "latitude": 50.501038,
      "longitude": 19.430405,
      "altitude": {
        "feet": 4275,
        "meters": 1303
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673612142,
      "ems": null
    },
    {
      "latitude": 50.499264,
      "longitude": 19.4265,
      "altitude": {
        "feet": 4225,
        "meters": 1288
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
      "heading": 234,
      "squawk": "2641",
      "timestamp": 1673612148,
      "ems": null
    },
    {
      "latitude": 50.497215,
      "longitude": 19.42264,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 228,
      "squawk": "2641",
      "timestamp": 1673612154,
      "ems": null
    },
    {
      "latitude": 50.495087,
      "longitude": 19.418913,
      "altitude": {
        "feet": 4175,
        "meters": 1273
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
      "heading": 228,
      "squawk": "2641",
      "timestamp": 1673612160,
      "ems": null
    },
    {
      "latitude": 50.494095,
      "longitude": 19.417147,
      "altitude": {
        "feet": 4175,
        "meters": 1273
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
      "heading": 228,
      "squawk": "2641",
      "timestamp": 1673612163,
      "ems": null
    },
    {
      "latitude": 50.49321,
      "longitude": 19.415514,
      "altitude": {
        "feet": 4175,
        "meters": 1273
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
      "heading": 228,
      "squawk": "2641",
      "timestamp": 1673612166,
      "ems": null
    },
    {
      "latitude": 50.492046,
      "longitude": 19.413435,
      "altitude": {
        "feet": 4150,
        "meters": 1265
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
      "heading": 228,
      "squawk": "2641",
      "timestamp": 1673612169,
      "ems": null
    },
    {
      "latitude": 50.491024,
      "longitude": 19.411654,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612172,
      "ems": null
    },
    {
      "latitude": 50.489868,
      "longitude": 19.40959,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612175,
      "ems": null
    },
    {
      "latitude": 50.487946,
      "longitude": 19.405975,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612181,
      "ems": null
    },
    {
      "latitude": 50.486023,
      "longitude": 19.402288,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673612187,
      "ems": null
    },
    {
      "latitude": 50.484413,
      "longitude": 19.399035,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673612192,
      "ems": null
    },
    {
      "latitude": 50.482315,
      "longitude": 19.395134,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 229,
      "squawk": "2641",
      "timestamp": 1673612199,
      "ems": null
    },
    {
      "latitude": 50.480503,
      "longitude": 19.391685,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 230,
      "squawk": "2641",
      "timestamp": 1673612205,
      "ems": null
    },
    {
      "latitude": 50.478592,
      "longitude": 19.388048,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 231,
      "squawk": "2641",
      "timestamp": 1673612211,
      "ems": null
    },
    {
      "latitude": 50.477737,
      "longitude": 19.386171,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 236,
      "squawk": "2641",
      "timestamp": 1673612214,
      "ems": null
    },
    {
      "latitude": 50.477104,
      "longitude": 19.384188,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 245,
      "squawk": "2641",
      "timestamp": 1673612217,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.382481,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 256,
      "squawk": "2641",
      "timestamp": 1673612220,
      "ems": null
    },
    {
      "latitude": 50.476593,
      "longitude": 19.379734,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612223,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 19.377508,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 274,
      "squawk": "2641",
      "timestamp": 1673612226,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.375113,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612229,
      "ems": null
    },
    {
      "latitude": 50.476871,
      "longitude": 19.372683,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612232,
      "ems": null
    },
    {
      "latitude": 50.476959,
      "longitude": 19.37056,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612235,
      "ems": null
    },
    {
      "latitude": 50.477051,
      "longitude": 19.368174,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "2641",
      "timestamp": 1673612238,
      "ems": null
    },
    {
      "latitude": 50.47715,
      "longitude": 19.365852,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "2641",
      "timestamp": 1673612241,
      "ems": null
    },
    {
      "latitude": 50.47728,
      "longitude": 19.363043,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612244,
      "ems": null
    },
    {
      "latitude": 50.477371,
      "longitude": 19.360802,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612247,
      "ems": null
    },
    {
      "latitude": 50.477428,
      "longitude": 19.358282,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612250,
      "ems": null
    },
    {
      "latitude": 50.477428,
      "longitude": 19.353456,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612256,
      "ems": null
    },
    {
      "latitude": 50.477325,
      "longitude": 19.351116,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612259,
      "ems": null
    },
    {
      "latitude": 50.47715,
      "longitude": 19.348333,
      "altitude": {
        "feet": 3775,
        "meters": 1151
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612262,
      "ems": null
    },
    {
      "latitude": 50.477005,
      "longitude": 19.345768,
      "altitude": {
        "feet": 3750,
        "meters": 1143
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
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612265,
      "ems": null
    },
    {
      "latitude": 50.476826,
      "longitude": 19.343361,
      "altitude": {
        "feet": 3725,
        "meters": 1135
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
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612268,
      "ems": null
    },
    {
      "latitude": 50.476639,
      "longitude": 19.34078,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 262,
      "squawk": "2641",
      "timestamp": 1673612271,
      "ems": null
    },
    {
      "latitude": 50.47641,
      "longitude": 19.338324,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 262,
      "squawk": "2641",
      "timestamp": 1673612274,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 19.335938,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612277,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.333563,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612280,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.331038,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612284,
      "ems": null
    },
    {
      "latitude": 50.475613,
      "longitude": 19.325842,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612289,
      "ems": null
    },
    {
      "latitude": 50.475403,
      "longitude": 19.321192,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612295,
      "ems": null
    },
    {
      "latitude": 50.47522,
      "longitude": 19.315628,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612301,
      "ems": null
    },
    {
      "latitude": 50.475193,
      "longitude": 19.313223,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612304,
      "ems": null
    },
    {
      "latitude": 50.475243,
      "longitude": 19.310476,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612308,
      "ems": null
    },
    {
      "latitude": 50.475288,
      "longitude": 19.308174,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612310,
      "ems": null
    },
    {
      "latitude": 50.475334,
      "longitude": 19.305576,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612313,
      "ems": null
    },
    {
      "latitude": 50.475403,
      "longitude": 19.303123,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612316,
      "ems": null
    },
    {
      "latitude": 50.475449,
      "longitude": 19.300449,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612319,
      "ems": null
    },
    {
      "latitude": 50.475494,
      "longitude": 19.297918,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612322,
      "ems": null
    },
    {
      "latitude": 50.475521,
      "longitude": 19.295927,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612325,
      "ems": null
    },
    {
      "latitude": 50.475613,
      "longitude": 19.292883,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612328,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.287727,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612334,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.282713,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612340,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 19.277899,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 274,
      "squawk": "2641",
      "timestamp": 1673612346,
      "ems": null
    },
    {
      "latitude": 50.476547,
      "longitude": 19.273561,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "2641",
      "timestamp": 1673612352,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 19.271801,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "squawk": "2641",
      "timestamp": 1673612355,
      "ems": null
    },
    {
      "latitude": 50.476822,
      "longitude": 19.267851,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612361,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.266045,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612365,
      "ems": null
    },
    {
      "latitude": 50.47673,
      "longitude": 19.264378,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612368,
      "ems": null
    },
    {
      "latitude": 50.476639,
      "longitude": 19.262745,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612371,
      "ems": null
    },
    {
      "latitude": 50.476543,
      "longitude": 19.261187,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612373,
      "ems": null
    },
    {
      "latitude": 50.476498,
      "longitude": 19.25948,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612377,
      "ems": null
    },
    {
      "latitude": 50.476406,
      "longitude": 19.257845,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612380,
      "ems": null
    },
    {
      "latitude": 50.476318,
      "longitude": 19.256287,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612383,
      "ems": null
    },
    {
      "latitude": 50.476311,
      "longitude": 19.255024,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612385,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 19.253395,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612388,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 19.250648,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "2641",
      "timestamp": 1673612394,
      "ems": null
    },
    {
      "latitude": 50.476135,
      "longitude": 19.247974,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612400,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.245152,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612407,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.242851,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612412,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.239733,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612419,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.236988,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612424,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.233881,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612431,
      "ems": null
    },
    {
      "latitude": 50.47554,
      "longitude": 19.230772,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612437,
      "ems": null
    },
    {
      "latitude": 50.47543,
      "longitude": 19.227781,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612443,
      "ems": null
    },
    {
      "latitude": 50.47538,
      "longitude": 19.22459,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612449,
      "ems": null
    },
    {
      "latitude": 50.47543,
      "longitude": 19.22303,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612452,
      "ems": null
    },
    {
      "latitude": 50.475475,
      "longitude": 19.221472,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612455,
      "ems": null
    },
    {
      "latitude": 50.47554,
      "longitude": 19.219931,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612458,
      "ems": null
    },
    {
      "latitude": 50.475586,
      "longitude": 19.218485,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612460,
      "ems": null
    },
    {
      "latitude": 50.475613,
      "longitude": 19.216572,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612464,
      "ems": null
    },
    {
      "latitude": 50.475613,
      "longitude": 19.215014,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612467,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.213642,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612469,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.210173,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612476,
      "ems": null
    },
    {
      "latitude": 50.475662,
      "longitude": 19.206848,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612482,
      "ems": null
    },
    {
      "latitude": 50.475723,
      "longitude": 19.203451,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612488,
      "ems": null
    },
    {
      "latitude": 50.4758,
      "longitude": 19.200092,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612494,
      "ems": null
    },
    {
      "latitude": 50.475845,
      "longitude": 19.196678,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612500,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 19.193766,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612505,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.189863,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612512,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.186249,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612518,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.182945,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612524,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.180422,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612528,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 19.175623,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612537,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.17107,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 273,
      "squawk": "2641",
      "timestamp": 1673612545,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.166096,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612554,
      "ems": null
    },
    {
      "latitude": 50.475754,
      "longitude": 19.161345,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 269,
      "squawk": "2641",
      "timestamp": 1673612562,
      "ems": null
    },
    {
      "latitude": 50.4758,
      "longitude": 19.156593,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612570,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.151844,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612578,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.14776,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612586,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 19.143026,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612594,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.138329,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612602,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.134209,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612610,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.129795,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612617,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.127123,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612622,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.123486,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612628,
      "ems": null
    },
    {
      "latitude": 50.475845,
      "longitude": 19.117474,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612638,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.11339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612645,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.109922,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612651,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.106743,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612656,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.103666,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612662,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.090452,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612684,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.085257,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612694,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.080803,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612700,
      "ems": null
    },
    {
      "latitude": 50.476089,
      "longitude": 19.075808,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612710,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.072933,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612715,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 19.066339,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612725,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 19.063158,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612732,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 19.059761,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612738,
      "ems": null
    },
    {
      "latitude": 50.476311,
      "longitude": 19.056305,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612744,
      "ems": null
    },
    {
      "latitude": 50.476406,
      "longitude": 19.052891,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612749,
      "ems": null
    },
    {
      "latitude": 50.47641,
      "longitude": 19.048775,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612755,
      "ems": null
    },
    {
      "latitude": 50.476318,
      "longitude": 19.046463,
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
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612759,
      "ems": null
    },
    {
      "latitude": 50.476219,
      "longitude": 19.041979,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612765,
      "ems": null
    },
    {
      "latitude": 50.476135,
      "longitude": 19.039017,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612769,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.033813,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612776,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.031717,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612779,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.031284,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612780,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.029404,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612783,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.025213,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 268,
      "squawk": "2641",
      "timestamp": 1673612789,
      "ems": null
    },
    {
      "latitude": 50.475769,
      "longitude": 19.020876,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612795,
      "ems": null
    },
    {
      "latitude": 50.475769,
      "longitude": 19.017044,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612800,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.011768,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612808,
      "ems": null
    },
    {
      "latitude": 50.475567,
      "longitude": 19.007906,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 269,
      "squawk": "2641",
      "timestamp": 1673612814,
      "ems": null
    },
    {
      "latitude": 50.475567,
      "longitude": 19.00412,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612820,
      "ems": null
    },
    {
      "latitude": 50.475754,
      "longitude": 19.001078,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 278,
      "squawk": "2641",
      "timestamp": 1673612826,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 18.999296,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 277,
      "squawk": "2641",
      "timestamp": 1673612829,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 18.997885,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 277,
      "squawk": "2641",
      "timestamp": 1673612831,
      "ems": null
    },
    {
      "latitude": 50.476219,
      "longitude": 18.995808,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 278,
      "squawk": "2641",
      "timestamp": 1673612835,
      "ems": null
    },
    {
      "latitude": 50.476318,
      "longitude": 18.994711,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 279,
      "squawk": "2641",
      "timestamp": 1673612837,
      "ems": null
    },
    {
      "latitude": 50.476498,
      "longitude": 18.993061,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 280,
      "squawk": "2641",
      "timestamp": 1673612840,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 18.991674,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 279,
      "squawk": "2641",
      "timestamp": 1673612843,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 18.990446,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 278,
      "squawk": "2641",
      "timestamp": 1673612845,
      "ems": null
    },
    {
      "latitude": 50.476917,
      "longitude": 18.989052,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 278,
      "squawk": "2641",
      "timestamp": 1673612849,
      "ems": null
    },
    {
      "latitude": 50.477051,
      "longitude": 18.987482,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 279,
      "squawk": "2641",
      "timestamp": 1673612852,
      "ems": null
    },
    {
      "latitude": 50.477417,
      "longitude": 18.984592,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 280,
      "squawk": "2641",
      "timestamp": 1673612858,
      "ems": null
    },
    {
      "latitude": 50.477737,
      "longitude": 18.981411,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 276,
      "squawk": "2641",
      "timestamp": 1673612864,
      "ems": null
    },
    {
      "latitude": 50.477875,
      "longitude": 18.978521,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 275,
      "squawk": "2641",
      "timestamp": 1673612870,
      "ems": null
    },
    {
      "latitude": 50.478058,
      "longitude": 18.975775,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 275,
      "squawk": "2641",
      "timestamp": 1673612875,
      "ems": null
    },
    {
      "latitude": 50.478058,
      "longitude": 18.975122,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612878,
      "ems": null
    },
    {
      "latitude": 50.478104,
      "longitude": 18.973389,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612882,
      "ems": null
    },
    {
      "latitude": 50.478195,
      "longitude": 18.971437,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612885,
      "ems": null
    },
    {
      "latitude": 50.478195,
      "longitude": 18.969919,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 272,
      "squawk": "2641",
      "timestamp": 1673612888,
      "ems": null
    },
    {
      "latitude": 50.478195,
      "longitude": 18.969269,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612891,
      "ems": null
    },
    {
      "latitude": 50.478241,
      "longitude": 18.966089,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612897,
      "ems": null
    },
    {
      "latitude": 50.478241,
      "longitude": 18.965439,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612900,
      "ems": null
    },
    {
      "latitude": 50.478241,
      "longitude": 18.96298,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612903,
      "ems": null
    },
    {
      "latitude": 50.478268,
      "longitude": 18.960546,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 269,
      "squawk": "2641",
      "timestamp": 1673612909,
      "ems": null
    },
    {
      "latitude": 50.478287,
      "longitude": 18.957922,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673612915,
      "ems": null
    },
    {
      "latitude": 50.478313,
      "longitude": 18.9555,
      "altitude": {
        "feet": 4225,
        "meters": 1288
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612921,
      "ems": null
    },
    {
      "latitude": 50.478333,
      "longitude": 18.952789,
      "altitude": {
        "feet": 4275,
        "meters": 1303
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673612927,
      "ems": null
    },
    {
      "latitude": 50.478268,
      "longitude": 18.950079,
      "altitude": {
        "feet": 4350,
        "meters": 1326
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612933,
      "ems": null
    },
    {
      "latitude": 50.478195,
      "longitude": 18.947441,
      "altitude": {
        "feet": 4400,
        "meters": 1341
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673612939,
      "ems": null
    },
    {
      "latitude": 50.478104,
      "longitude": 18.94614,
      "altitude": {
        "feet": 4450,
        "meters": 1356
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612942,
      "ems": null
    },
    {
      "latitude": 50.478058,
      "longitude": 18.944695,
      "altitude": {
        "feet": 4475,
        "meters": 1364
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612945,
      "ems": null
    },
    {
      "latitude": 50.477989,
      "longitude": 18.943325,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673612948,
      "ems": null
    },
    {
      "latitude": 50.477894,
      "longitude": 18.941914,
      "altitude": {
        "feet": 4525,
        "meters": 1379
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
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612951,
      "ems": null
    },
    {
      "latitude": 50.477829,
      "longitude": 18.94043,
      "altitude": {
        "feet": 4550,
        "meters": 1387
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
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612954,
      "ems": null
    },
    {
      "latitude": 50.477707,
      "longitude": 18.938946,
      "altitude": {
        "feet": 4600,
        "meters": 1402
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612957,
      "ems": null
    },
    {
      "latitude": 50.477615,
      "longitude": 18.937609,
      "altitude": {
        "feet": 4625,
        "meters": 1410
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
      "heading": 263,
      "squawk": "2641",
      "timestamp": 1673612960,
      "ems": null
    },
    {
      "latitude": 50.477428,
      "longitude": 18.93449,
      "altitude": {
        "feet": 4675,
        "meters": 1425
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612966,
      "ems": null
    },
    {
      "latitude": 50.477291,
      "longitude": 18.931967,
      "altitude": {
        "feet": 4750,
        "meters": 1448
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612972,
      "ems": null
    },
    {
      "latitude": 50.477051,
      "longitude": 18.928576,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 264,
      "squawk": "2641",
      "timestamp": 1673612978,
      "ems": null
    },
    {
      "latitude": 50.476871,
      "longitude": 18.925287,
      "altitude": {
        "feet": 4875,
        "meters": 1486
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612984,
      "ems": null
    },
    {
      "latitude": 50.47673,
      "longitude": 18.922613,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612990,
      "ems": null
    },
    {
      "latitude": 50.476543,
      "longitude": 18.918755,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 265,
      "squawk": "2641",
      "timestamp": 1673612996,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 18.912241,
      "altitude": {
        "feet": 5125,
        "meters": 1562
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
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673613008,
      "ems": null
    },
    {
      "latitude": 50.476406,
      "longitude": 18.905466,
      "altitude": {
        "feet": 5250,
        "meters": 1600
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
      "heading": 284,
      "squawk": "2641",
      "timestamp": 1673613020,
      "ems": null
    },
    {
      "latitude": 50.476868,
      "longitude": 18.903711,
      "altitude": {
        "feet": 5275,
        "meters": 1608
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
      "heading": 297,
      "squawk": "2641",
      "timestamp": 1673613023,
      "ems": null
    },
    {
      "latitude": 50.477554,
      "longitude": 18.902122,
      "altitude": {
        "feet": 5350,
        "meters": 1631
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
      "heading": 308,
      "squawk": "2641",
      "timestamp": 1673613026,
      "ems": null
    },
    {
      "latitude": 50.478607,
      "longitude": 18.900532,
      "altitude": {
        "feet": 5400,
        "meters": 1646
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 321,
      "squawk": "2641",
      "timestamp": 1673613030,
      "ems": null
    },
    {
      "latitude": 50.479706,
      "longitude": 18.899448,
      "altitude": {
        "feet": 5425,
        "meters": 1654
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
      "heading": 327,
      "squawk": "2641",
      "timestamp": 1673613033,
      "ems": null
    },
    {
      "latitude": 50.481014,
      "longitude": 18.898489,
      "altitude": {
        "feet": 5450,
        "meters": 1661
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
      "heading": 332,
      "squawk": "2641",
      "timestamp": 1673613036,
      "ems": null
    },
    {
      "latitude": 50.482132,
      "longitude": 18.898043,
      "altitude": {
        "feet": 5475,
        "meters": 1669
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
      "heading": 347,
      "squawk": "2641",
      "timestamp": 1673613039,
      "ems": null
    },
    {
      "latitude": 50.48378,
      "longitude": 18.89764,
      "altitude": {
        "feet": 5525,
        "meters": 1684
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613042,
      "ems": null
    },
    {
      "latitude": 50.485481,
      "longitude": 18.897449,
      "altitude": {
        "feet": 5575,
        "meters": 1699
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
      "heading": 356,
      "squawk": "2641",
      "timestamp": 1673613045,
      "ems": null
    },
    {
      "latitude": 50.486984,
      "longitude": 18.89728,
      "altitude": {
        "feet": 5600,
        "meters": 1707
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673613048,
      "ems": null
    },
    {
      "latitude": 50.488556,
      "longitude": 18.897003,
      "altitude": {
        "feet": 5625,
        "meters": 1715
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
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613051,
      "ems": null
    },
    {
      "latitude": 50.489952,
      "longitude": 18.896708,
      "altitude": {
        "feet": 5625,
        "meters": 1715
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "2641",
      "timestamp": 1673613054,
      "ems": null
    },
    {
      "latitude": 50.491627,
      "longitude": 18.89641,
      "altitude": {
        "feet": 5675,
        "meters": 1730
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
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613057,
      "ems": null
    },
    {
      "latitude": 50.493347,
      "longitude": 18.896124,
      "altitude": {
        "feet": 5700,
        "meters": 1737
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613060,
      "ems": null
    },
    {
      "latitude": 50.49472,
      "longitude": 18.895906,
      "altitude": {
        "feet": 5750,
        "meters": 1753
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613063,
      "ems": null
    },
    {
      "latitude": 50.495819,
      "longitude": 18.895689,
      "altitude": {
        "feet": 5750,
        "meters": 1753
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673613066,
      "ems": null
    },
    {
      "latitude": 50.503189,
      "longitude": 18.895689,
      "altitude": {
        "feet": 5875,
        "meters": 1791
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 9,
      "squawk": "2641",
      "timestamp": 1673613078,
      "ems": null
    },
    {
      "latitude": 50.504883,
      "longitude": 18.896267,
      "altitude": {
        "feet": 5925,
        "meters": 1806
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 14,
      "squawk": "2641",
      "timestamp": 1673613081,
      "ems": null
    },
    {
      "latitude": 50.506577,
      "longitude": 18.897062,
      "altitude": {
        "feet": 5950,
        "meters": 1814
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 17,
      "squawk": "2641",
      "timestamp": 1673613084,
      "ems": null
    },
    {
      "latitude": 50.508041,
      "longitude": 18.897858,
      "altitude": {
        "feet": 6000,
        "meters": 1829
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 20,
      "squawk": "2641",
      "timestamp": 1673613087,
      "ems": null
    },
    {
      "latitude": 50.509918,
      "longitude": 18.899086,
      "altitude": {
        "feet": 6025,
        "meters": 1836
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613090,
      "ems": null
    },
    {
      "latitude": 50.511646,
      "longitude": 18.90027,
      "altitude": {
        "feet": 6050,
        "meters": 1844
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 24,
      "squawk": "2641",
      "timestamp": 1673613093,
      "ems": null
    },
    {
      "latitude": 50.512947,
      "longitude": 18.901236,
      "altitude": {
        "feet": 6075,
        "meters": 1852
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 25,
      "squawk": "2641",
      "timestamp": 1673613096,
      "ems": null
    },
    {
      "latitude": 50.514771,
      "longitude": 18.902628,
      "altitude": {
        "feet": 6100,
        "meters": 1859
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 26,
      "squawk": "2641",
      "timestamp": 1673613099,
      "ems": null
    },
    {
      "latitude": 50.516464,
      "longitude": 18.904074,
      "altitude": {
        "feet": 6125,
        "meters": 1867
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 27,
      "squawk": "2641",
      "timestamp": 1673613102,
      "ems": null
    },
    {
      "latitude": 50.518112,
      "longitude": 18.905375,
      "altitude": {
        "feet": 6150,
        "meters": 1875
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 27,
      "squawk": "2641",
      "timestamp": 1673613105,
      "ems": null
    },
    {
      "latitude": 50.519791,
      "longitude": 18.906654,
      "altitude": {
        "feet": 6200,
        "meters": 1890
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 26,
      "squawk": "2641",
      "timestamp": 1673613108,
      "ems": null
    },
    {
      "latitude": 50.52142,
      "longitude": 18.90799,
      "altitude": {
        "feet": 6225,
        "meters": 1897
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 26,
      "squawk": "2641",
      "timestamp": 1673613111,
      "ems": null
    },
    {
      "latitude": 50.527863,
      "longitude": 18.912891,
      "altitude": {
        "feet": 6325,
        "meters": 1928
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 25,
      "squawk": "2641",
      "timestamp": 1673613123,
      "ems": null
    },
    {
      "latitude": 50.534271,
      "longitude": 18.917641,
      "altitude": {
        "feet": 6425,
        "meters": 1958
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 24,
      "squawk": "2641",
      "timestamp": 1673613135,
      "ems": null
    },
    {
      "latitude": 50.540646,
      "longitude": 18.922243,
      "altitude": {
        "feet": 6550,
        "meters": 1996
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 24,
      "squawk": "2641",
      "timestamp": 1673613147,
      "ems": null
    },
    {
      "latitude": 50.546265,
      "longitude": 18.926264,
      "altitude": {
        "feet": 6675,
        "meters": 2035
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 24,
      "squawk": "2641",
      "timestamp": 1673613158,
      "ems": null
    },
    {
      "latitude": 50.552994,
      "longitude": 18.930962,
      "altitude": {
        "feet": 6800,
        "meters": 2073
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613171,
      "ems": null
    },
    {
      "latitude": 50.558441,
      "longitude": 18.934576,
      "altitude": {
        "feet": 6925,
        "meters": 2111
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613181,
      "ems": null
    },
    {
      "latitude": 50.564804,
      "longitude": 18.938623,
      "altitude": {
        "feet": 7050,
        "meters": 2149
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613193,
      "ems": null
    },
    {
      "latitude": 50.571533,
      "longitude": 18.942816,
      "altitude": {
        "feet": 7175,
        "meters": 2187
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
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613206,
      "ems": null
    },
    {
      "latitude": 50.578262,
      "longitude": 18.946863,
      "altitude": {
        "feet": 7300,
        "meters": 2225
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 20,
      "squawk": "2641",
      "timestamp": 1673613218,
      "ems": null
    },
    {
      "latitude": 50.584686,
      "longitude": 18.950525,
      "altitude": {
        "feet": 7425,
        "meters": 2263
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
      "heading": 20,
      "squawk": "2641",
      "timestamp": 1673613230,
      "ems": null
    },
    {
      "latitude": 50.591667,
      "longitude": 18.954681,
      "altitude": {
        "feet": 7550,
        "meters": 2301
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613243,
      "ems": null
    },
    {
      "latitude": 50.598038,
      "longitude": 18.9585,
      "altitude": {
        "feet": 7675,
        "meters": 2339
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
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613254,
      "ems": null
    },
    {
      "latitude": 50.604565,
      "longitude": 18.962551,
      "altitude": {
        "feet": 7825,
        "meters": 2385
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613267,
      "ems": null
    },
    {
      "latitude": 50.611267,
      "longitude": 18.966707,
      "altitude": {
        "feet": 7950,
        "meters": 2423
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613279,
      "ems": null
    },
    {
      "latitude": 50.617722,
      "longitude": 18.97086,
      "altitude": {
        "feet": 8050,
        "meters": 2454
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613292,
      "ems": null
    },
    {
      "latitude": 50.624222,
      "longitude": 18.974979,
      "altitude": {
        "feet": 8200,
        "meters": 2499
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613304,
      "ems": null
    },
    {
      "latitude": 50.630215,
      "longitude": 18.978956,
      "altitude": {
        "feet": 8325,
        "meters": 2537
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613316,
      "ems": null
    },
    {
      "latitude": 50.636765,
      "longitude": 18.983362,
      "altitude": {
        "feet": 8450,
        "meters": 2576
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613328,
      "ems": null
    },
    {
      "latitude": 50.642944,
      "longitude": 18.987627,
      "altitude": {
        "feet": 8575,
        "meters": 2614
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613340,
      "ems": null
    },
    {
      "latitude": 50.649033,
      "longitude": 18.991674,
      "altitude": {
        "feet": 8675,
        "meters": 2644
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613353,
      "ems": null
    },
    {
      "latitude": 50.655121,
      "longitude": 18.995651,
      "altitude": {
        "feet": 8750,
        "meters": 2667
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613365,
      "ems": null
    },
    {
      "latitude": 50.661118,
      "longitude": 18.999409,
      "altitude": {
        "feet": 8850,
        "meters": 2697
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613377,
      "ems": null
    },
    {
      "latitude": 50.666382,
      "longitude": 19.002806,
      "altitude": {
        "feet": 8925,
        "meters": 2720
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613388,
      "ems": null
    },
    {
      "latitude": 50.672531,
      "longitude": 19.006653,
      "altitude": {
        "feet": 9025,
        "meters": 2751
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
      "heading": 21,
      "squawk": "2641",
      "timestamp": 1673613400,
      "ems": null
    },
    {
      "latitude": 50.678329,
      "longitude": 19.010283,
      "altitude": {
        "feet": 9100,
        "meters": 2774
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613412,
      "ems": null
    },
    {
      "latitude": 50.683842,
      "longitude": 19.013901,
      "altitude": {
        "feet": 9200,
        "meters": 2804
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613423,
      "ems": null
    },
    {
      "latitude": 50.690094,
      "longitude": 19.018002,
      "altitude": {
        "feet": 9300,
        "meters": 2835
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613436,
      "ems": null
    },
    {
      "latitude": 50.696274,
      "longitude": 19.022085,
      "altitude": {
        "feet": 9375,
        "meters": 2858
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613448,
      "ems": null
    },
    {
      "latitude": 50.702408,
      "longitude": 19.026167,
      "altitude": {
        "feet": 9425,
        "meters": 2873
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 23,
      "squawk": "2641",
      "timestamp": 1673613460,
      "ems": null
    },
    {
      "latitude": 50.708908,
      "longitude": 19.030474,
      "altitude": {
        "feet": 9475,
        "meters": 2888
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
      "heading": 22,
      "squawk": "2641",
      "timestamp": 1673613472,
      "ems": null
    },
    {
      "latitude": 50.715218,
      "longitude": 19.034805,
      "altitude": {
        "feet": 9525,
        "meters": 2903
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
      "heading": 27,
      "squawk": "2641",
      "timestamp": 1673613484,
      "ems": null
    },
    {
      "latitude": 50.716755,
      "longitude": 19.036407,
      "altitude": {
        "feet": 9525,
        "meters": 2903
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 34,
      "squawk": "2641",
      "timestamp": 1673613487,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 19.038342,
      "altitude": {
        "feet": 9550,
        "meters": 2911
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 41,
      "squawk": "2641",
      "timestamp": 1673613490,
      "ems": null
    },
    {
      "latitude": 50.719574,
      "longitude": 19.040495,
      "altitude": {
        "feet": 9600,
        "meters": 2926
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 49,
      "squawk": "2641",
      "timestamp": 1673613493,
      "ems": null
    },
    {
      "latitude": 50.720711,
      "longitude": 19.042892,
      "altitude": {
        "feet": 9625,
        "meters": 2934
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 54,
      "squawk": "2641",
      "timestamp": 1673613496,
      "ems": null
    },
    {
      "latitude": 50.721771,
      "longitude": 19.045765,
      "altitude": {
        "feet": 9625,
        "meters": 2934
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 61,
      "squawk": "2641",
      "timestamp": 1673613499,
      "ems": null
    },
    {
      "latitude": 50.722595,
      "longitude": 19.048512,
      "altitude": {
        "feet": 9650,
        "meters": 2941
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "2641",
      "timestamp": 1673613502,
      "ems": null
    },
    {
      "latitude": 50.723225,
      "longitude": 19.050827,
      "altitude": {
        "feet": 9650,
        "meters": 2941
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "2641",
      "timestamp": 1673613505,
      "ems": null
    },
    {
      "latitude": 50.723831,
      "longitude": 19.053345,
      "altitude": {
        "feet": 9675,
        "meters": 2949
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 69,
      "squawk": "2641",
      "timestamp": 1673613507,
      "ems": null
    },
    {
      "latitude": 50.724434,
      "longitude": 19.056244,
      "altitude": {
        "feet": 9700,
        "meters": 2957
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 72,
      "squawk": "2641",
      "timestamp": 1673613511,
      "ems": null
    },
    {
      "latitude": 50.725113,
      "longitude": 19.059647,
      "altitude": {
        "feet": 9700,
        "meters": 2957
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 73,
      "squawk": "2641",
      "timestamp": 1673613514,
      "ems": null
    },
    {
      "latitude": 50.725616,
      "longitude": 19.062689,
      "altitude": {
        "feet": 9700,
        "meters": 2957
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "2641",
      "timestamp": 1673613517,
      "ems": null
    },
    {
      "latitude": 50.726028,
      "longitude": 19.065584,
      "altitude": {
        "feet": 9700,
        "meters": 2957
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "2641",
      "timestamp": 1673613520,
      "ems": null
    },
    {
      "latitude": 50.726532,
      "longitude": 19.068909,
      "altitude": {
        "feet": 9725,
        "meters": 2964
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
      "heading": 77,
      "squawk": "2641",
      "timestamp": 1673613523,
      "ems": null
    },
    {
      "latitude": 50.726765,
      "longitude": 19.070587,
      "altitude": {
        "feet": 9750,
        "meters": 2972
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 77,
      "squawk": "2641",
      "timestamp": 1673613526,
      "ems": null
    },
    {
      "latitude": 50.727322,
      "longitude": 19.07486,
      "altitude": {
        "feet": 9775,
        "meters": 2979
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673613529,
      "ems": null
    },
    {
      "latitude": 50.727695,
      "longitude": 19.077759,
      "altitude": {
        "feet": 9775,
        "meters": 2979
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 78,
      "squawk": "2641",
      "timestamp": 1673613532,
      "ems": null
    },
    {
      "latitude": 50.728065,
      "longitude": 19.081345,
      "altitude": {
        "feet": 9775,
        "meters": 2979
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673613535,
      "ems": null
    },
    {
      "latitude": 50.728363,
      "longitude": 19.084661,
      "altitude": {
        "feet": 9775,
        "meters": 2979
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613538,
      "ems": null
    },
    {
      "latitude": 50.72858,
      "longitude": 19.087677,
      "altitude": {
        "feet": 9800,
        "meters": 2987
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 84,
      "squawk": "2641",
      "timestamp": 1673613541,
      "ems": null
    },
    {
      "latitude": 50.728729,
      "longitude": 19.090973,
      "altitude": {
        "feet": 9825,
        "meters": 2995
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 85,
      "squawk": "2641",
      "timestamp": 1673613544,
      "ems": null
    },
    {
      "latitude": 50.728867,
      "longitude": 19.09409,
      "altitude": {
        "feet": 9850,
        "meters": 3002
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 87,
      "squawk": "2641",
      "timestamp": 1673613547,
      "ems": null
    },
    {
      "latitude": 50.728958,
      "longitude": 19.097059,
      "altitude": {
        "feet": 9850,
        "meters": 3002
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
      "heading": 87,
      "squawk": "2641",
      "timestamp": 1673613550,
      "ems": null
    },
    {
      "latitude": 50.72937,
      "longitude": 19.10965,
      "altitude": {
        "feet": 9925,
        "meters": 3025
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 86,
      "squawk": "2641",
      "timestamp": 1673613562,
      "ems": null
    },
    {
      "latitude": 50.729828,
      "longitude": 19.122744,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 86,
      "squawk": "2641",
      "timestamp": 1673613574,
      "ems": null
    },
    {
      "latitude": 50.730286,
      "longitude": 19.135437,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 86,
      "squawk": "2641",
      "timestamp": 1673613586,
      "ems": null
    },
    {
      "latitude": 50.730953,
      "longitude": 19.148254,
      "altitude": {
        "feet": 10100,
        "meters": 3078
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "2641",
      "timestamp": 1673613599,
      "ems": null
    },
    {
      "latitude": 50.731651,
      "longitude": 19.159775,
      "altitude": {
        "feet": 10200,
        "meters": 3109
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 84,
      "squawk": "2641",
      "timestamp": 1673613610,
      "ems": null
    },
    {
      "latitude": 50.732441,
      "longitude": 19.171524,
      "altitude": {
        "feet": 10275,
        "meters": 3132
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 83,
      "squawk": "2641",
      "timestamp": 1673613622,
      "ems": null
    },
    {
      "latitude": 50.733215,
      "longitude": 19.18302,
      "altitude": {
        "feet": 10350,
        "meters": 3155
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 83,
      "squawk": "2641",
      "timestamp": 1673613635,
      "ems": null
    },
    {
      "latitude": 50.734039,
      "longitude": 19.194599,
      "altitude": {
        "feet": 10450,
        "meters": 3185
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
      "heading": 83,
      "squawk": "2641",
      "timestamp": 1673613647,
      "ems": null
    },
    {
      "latitude": 50.734863,
      "longitude": 19.205017,
      "altitude": {
        "feet": 10550,
        "meters": 3216
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 83,
      "squawk": "2641",
      "timestamp": 1673613658,
      "ems": null
    },
    {
      "latitude": 50.735748,
      "longitude": 19.216309,
      "altitude": {
        "feet": 10625,
        "meters": 3239
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613670,
      "ems": null
    },
    {
      "latitude": 50.736633,
      "longitude": 19.227524,
      "altitude": {
        "feet": 10725,
        "meters": 3269
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613682,
      "ems": null
    },
    {
      "latitude": 50.737564,
      "longitude": 19.238842,
      "altitude": {
        "feet": 10850,
        "meters": 3307
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613695,
      "ems": null
    },
    {
      "latitude": 50.73848,
      "longitude": 19.249828,
      "altitude": {
        "feet": 10900,
        "meters": 3322
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613707,
      "ems": null
    },
    {
      "latitude": 50.739426,
      "longitude": 19.261246,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613719,
      "ems": null
    },
    {
      "latitude": 50.740448,
      "longitude": 19.273453,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613731,
      "ems": null
    },
    {
      "latitude": 50.741364,
      "longitude": 19.284346,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613742,
      "ems": null
    },
    {
      "latitude": 50.742508,
      "longitude": 19.297634,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613755,
      "ems": null
    },
    {
      "latitude": 50.743523,
      "longitude": 19.311066,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "2641",
      "timestamp": 1673613768,
      "ems": null
    },
    {
      "latitude": 50.744247,
      "longitude": 19.323542,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 83,
      "squawk": "2641",
      "timestamp": 1673613780,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 19.336472,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673613792,
      "ems": null
    },
    {
      "latitude": 50.746967,
      "longitude": 19.349518,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "2641",
      "timestamp": 1673613804,
      "ems": null
    },
    {
      "latitude": 50.74823,
      "longitude": 19.362141,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613816,
      "ems": null
    },
    {
      "latitude": 50.74942,
      "longitude": 19.374908,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613828,
      "ems": null
    },
    {
      "latitude": 50.750736,
      "longitude": 19.38858,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613840,
      "ems": null
    },
    {
      "latitude": 50.752041,
      "longitude": 19.402008,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613852,
      "ems": null
    },
    {
      "latitude": 50.753174,
      "longitude": 19.414995,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613864,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 19.424973,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "2641",
      "timestamp": 1673613874,
      "ems": null
    },
    {
      "latitude": 50.75528,
      "longitude": 19.439268,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613886,
      "ems": null
    },
    {
      "latitude": 50.756325,
      "longitude": 19.451828,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613898,
      "ems": null
    },
    {
      "latitude": 50.757393,
      "longitude": 19.464188,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613910,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 19.478241,
      "altitude": {
        "feet": 10925,
        "meters": 3330
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613923,
      "ems": null
    },
    {
      "latitude": 50.759766,
      "longitude": 19.491379,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613934,
      "ems": null
    },
    {
      "latitude": 50.76091,
      "longitude": 19.50526,
      "altitude": {
        "feet": 10900,
        "meters": 3322
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613947,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 19.517975,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613959,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 19.530487,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613970,
      "ems": null
    },
    {
      "latitude": 50.76416,
      "longitude": 19.544306,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613983,
      "ems": null
    },
    {
      "latitude": 50.765213,
      "longitude": 19.557222,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673613995,
      "ems": null
    },
    {
      "latitude": 50.766331,
      "longitude": 19.57016,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673614007,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 19.583055,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673614019,
      "ems": null
    },
    {
      "latitude": 50.768463,
      "longitude": 19.596195,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673614031,
      "ems": null
    },
    {
      "latitude": 50.769547,
      "longitude": 19.609299,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "2641",
      "timestamp": 1673614043,
      "ems": null
    },
    {
      "latitude": 50.771118,
      "longitude": 19.622622,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "2641",
      "timestamp": 1673614055,
      "ems": null
    },
    {
      "latitude": 50.771851,
      "longitude": 19.625666,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 68,
      "squawk": "2641",
      "timestamp": 1673614058,
      "ems": null
    },
    {
      "latitude": 50.772758,
      "longitude": 19.628525,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 62,
      "squawk": "2641",
      "timestamp": 1673614061,
      "ems": null
    },
    {
      "latitude": 50.773636,
      "longitude": 19.630861,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 56,
      "squawk": "2641",
      "timestamp": 1673614064,
      "ems": null
    },
    {
      "latitude": 50.775101,
      "longitude": 19.633682,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 46,
      "squawk": "2641",
      "timestamp": 1673614067,
      "ems": null
    },
    {
      "latitude": 50.776749,
      "longitude": 19.635983,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "2641",
      "timestamp": 1673614070,
      "ems": null
    },
    {
      "latitude": 50.778076,
      "longitude": 19.637394,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 31,
      "squawk": "2641",
      "timestamp": 1673614073,
      "ems": null
    },
    {
      "latitude": 50.780136,
      "longitude": 19.639175,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 27,
      "squawk": "2641",
      "timestamp": 1673614076,
      "ems": null
    },
    {
      "latitude": 50.781231,
      "longitude": 19.640045,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "2641",
      "timestamp": 1673614078,
      "ems": null
    },
    {
      "latitude": 50.783558,
      "longitude": 19.641953,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 27,
      "squawk": "2641",
      "timestamp": 1673614082,
      "ems": null
    },
    {
      "latitude": 50.785324,
      "longitude": 19.643402,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 29,
      "squawk": "2641",
      "timestamp": 1673614085,
      "ems": null
    },
    {
      "latitude": 50.786865,
      "longitude": 19.644892,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 31,
      "squawk": "2641",
      "timestamp": 1673614088,
      "ems": null
    },
    {
      "latitude": 50.787964,
      "longitude": 19.646004,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "2641",
      "timestamp": 1673614091,
      "ems": null
    },
    {
      "latitude": 50.790306,
      "longitude": 19.648514,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "2641",
      "timestamp": 1673614094,
      "ems": null
    },
    {
      "latitude": 50.791992,
      "longitude": 19.650457,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614097,
      "ems": null
    },
    {
      "latitude": 50.796684,
      "longitude": 19.656372,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 39,
      "squawk": "2641",
      "timestamp": 1673614106,
      "ems": null
    },
    {
      "latitude": 50.798309,
      "longitude": 19.658476,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "2641",
      "timestamp": 1673614109,
      "ems": null
    },
    {
      "latitude": 50.79982,
      "longitude": 19.66048,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 39,
      "squawk": "2641",
      "timestamp": 1673614112,
      "ems": null
    },
    {
      "latitude": 50.801285,
      "longitude": 19.662409,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 39,
      "squawk": "2641",
      "timestamp": 1673614115,
      "ems": null
    },
    {
      "latitude": 50.807556,
      "longitude": 19.670279,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "2641",
      "timestamp": 1673614127,
      "ems": null
    },
    {
      "latitude": 50.814194,
      "longitude": 19.678221,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614139,
      "ems": null
    },
    {
      "latitude": 50.820602,
      "longitude": 19.685793,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614151,
      "ems": null
    },
    {
      "latitude": 50.827011,
      "longitude": 19.693216,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614163,
      "ems": null
    },
    {
      "latitude": 50.83342,
      "longitude": 19.70064,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614175,
      "ems": null
    },
    {
      "latitude": 50.83979,
      "longitude": 19.708023,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 35,
      "squawk": "2641",
      "timestamp": 1673614187,
      "ems": null
    },
    {
      "latitude": 50.845322,
      "longitude": 19.714298,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 35,
      "squawk": "2641",
      "timestamp": 1673614198,
      "ems": null
    },
    {
      "latitude": 50.851429,
      "longitude": 19.721451,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "2641",
      "timestamp": 1673614210,
      "ems": null
    },
    {
      "latitude": 50.858231,
      "longitude": 19.729441,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614222,
      "ems": null
    },
    {
      "latitude": 50.864792,
      "longitude": 19.737167,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614234,
      "ems": null
    },
    {
      "latitude": 50.871075,
      "longitude": 19.744492,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614246,
      "ems": null
    },
    {
      "latitude": 50.877274,
      "longitude": 19.751711,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614257,
      "ems": null
    },
    {
      "latitude": 50.883682,
      "longitude": 19.759209,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614270,
      "ems": null
    },
    {
      "latitude": 50.889603,
      "longitude": 19.766083,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614281,
      "ems": null
    },
    {
      "latitude": 50.895935,
      "longitude": 19.773483,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614293,
      "ems": null
    },
    {
      "latitude": 50.902264,
      "longitude": 19.780731,
      "altitude": {
        "feet": 11075,
        "meters": 3376
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614305,
      "ems": null
    },
    {
      "latitude": 50.908722,
      "longitude": 19.788382,
      "altitude": {
        "feet": 11075,
        "meters": 3376
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614317,
      "ems": null
    },
    {
      "latitude": 50.915066,
      "longitude": 19.795837,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614329,
      "ems": null
    },
    {
      "latitude": 50.921494,
      "longitude": 19.803375,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614341,
      "ems": null
    },
    {
      "latitude": 50.927856,
      "longitude": 19.810799,
      "altitude": {
        "feet": 11050,
        "meters": 3368
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614353,
      "ems": null
    },
    {
      "latitude": 50.933395,
      "longitude": 19.817257,
      "altitude": {
        "feet": 11075,
        "meters": 3376
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 35,
      "squawk": "2641",
      "timestamp": 1673614363,
      "ems": null
    },
    {
      "latitude": 50.939926,
      "longitude": 19.824753,
      "altitude": {
        "feet": 11050,
        "meters": 3368
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614375,
      "ems": null
    },
    {
      "latitude": 50.946396,
      "longitude": 19.832401,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614387,
      "ems": null
    },
    {
      "latitude": 50.953007,
      "longitude": 19.840164,
      "altitude": {
        "feet": 11050,
        "meters": 3368
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
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614399,
      "ems": null
    },
    {
      "latitude": 50.959476,
      "longitude": 19.847794,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614411,
      "ems": null
    },
    {
      "latitude": 50.966171,
      "longitude": 19.855635,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614423,
      "ems": null
    },
    {
      "latitude": 50.971626,
      "longitude": 19.862061,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614434,
      "ems": null
    },
    {
      "latitude": 50.97847,
      "longitude": 19.869995,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614446,
      "ems": null
    },
    {
      "latitude": 50.985489,
      "longitude": 19.878202,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614459,
      "ems": null
    },
    {
      "latitude": 50.99202,
      "longitude": 19.885864,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614471,
      "ems": null
    },
    {
      "latitude": 50.997883,
      "longitude": 19.892807,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "2641",
      "timestamp": 1673614483,
      "ems": null
    },
    {
      "latitude": 51.004486,
      "longitude": 19.899952,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "2641",
      "timestamp": 1673614494,
      "ems": null
    },
    {
      "latitude": 51.006271,
      "longitude": 19.90114,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 20,
      "squawk": "2641",
      "timestamp": 1673614497,
      "ems": null
    },
    {
      "latitude": 51.007828,
      "longitude": 19.901808,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 11,
      "squawk": "2641",
      "timestamp": 1673614500,
      "ems": null
    },
    {
      "latitude": 51.009888,
      "longitude": 19.902252,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 3,
      "squawk": "2641",
      "timestamp": 1673614503,
      "ems": null
    },
    {
      "latitude": 51.011673,
      "longitude": 19.902252,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 3,
      "squawk": "2641",
      "timestamp": 1673614506,
      "ems": null
    },
    {
      "latitude": 51.013412,
      "longitude": 19.902252,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614509,
      "ems": null
    },
    {
      "latitude": 51.015015,
      "longitude": 19.902105,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 356,
      "squawk": "2641",
      "timestamp": 1673614512,
      "ems": null
    },
    {
      "latitude": 51.016739,
      "longitude": 19.901886,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614514,
      "ems": null
    },
    {
      "latitude": 51.0186,
      "longitude": 19.901657,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614518,
      "ems": null
    },
    {
      "latitude": 51.020134,
      "longitude": 19.901505,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614520,
      "ems": null
    },
    {
      "latitude": 51.022324,
      "longitude": 19.901199,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614524,
      "ems": null
    },
    {
      "latitude": 51.023987,
      "longitude": 19.900991,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614527,
      "ems": null
    },
    {
      "latitude": 51.025772,
      "longitude": 19.900843,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673614530,
      "ems": null
    },
    {
      "latitude": 51.033005,
      "longitude": 19.900175,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 357,
      "squawk": "2641",
      "timestamp": 1673614542,
      "ems": null
    },
    {
      "latitude": 51.039967,
      "longitude": 19.899673,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 357,
      "squawk": "2641",
      "timestamp": 1673614554,
      "ems": null
    },
    {
      "latitude": 51.04747,
      "longitude": 19.899136,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 357,
      "squawk": "2641",
      "timestamp": 1673614566,
      "ems": null
    },
    {
      "latitude": 51.054722,
      "longitude": 19.898758,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614578,
      "ems": null
    },
    {
      "latitude": 51.062172,
      "longitude": 19.898453,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614591,
      "ems": null
    },
    {
      "latitude": 51.069248,
      "longitude": 19.898071,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614603,
      "ems": null
    },
    {
      "latitude": 51.076401,
      "longitude": 19.89765,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614615,
      "ems": null
    },
    {
      "latitude": 51.08382,
      "longitude": 19.897385,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614627,
      "ems": null
    },
    {
      "latitude": 51.090988,
      "longitude": 19.897003,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 357,
      "squawk": "2641",
      "timestamp": 1673614639,
      "ems": null
    },
    {
      "latitude": 51.098202,
      "longitude": 19.896774,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614651,
      "ems": null
    },
    {
      "latitude": 51.104507,
      "longitude": 19.896463,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614662,
      "ems": null
    },
    {
      "latitude": 51.112793,
      "longitude": 19.896166,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614675,
      "ems": null
    },
    {
      "latitude": 51.119385,
      "longitude": 19.895868,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614686,
      "ems": null
    },
    {
      "latitude": 51.127392,
      "longitude": 19.89563,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614698,
      "ems": null
    },
    {
      "latitude": 51.134933,
      "longitude": 19.895401,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614711,
      "ems": null
    },
    {
      "latitude": 51.142612,
      "longitude": 19.895096,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614723,
      "ems": null
    },
    {
      "latitude": 51.150101,
      "longitude": 19.894756,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614735,
      "ems": null
    },
    {
      "latitude": 51.156509,
      "longitude": 19.894608,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614746,
      "ems": null
    },
    {
      "latitude": 51.164028,
      "longitude": 19.894409,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614758,
      "ems": null
    },
    {
      "latitude": 51.171295,
      "longitude": 19.894087,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614769,
      "ems": null
    },
    {
      "latitude": 51.178413,
      "longitude": 19.893723,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614782,
      "ems": null
    },
    {
      "latitude": 51.185852,
      "longitude": 19.893494,
      "altitude": {
        "feet": 11075,
        "meters": 3376
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
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614794,
      "ems": null
    },
    {
      "latitude": 51.19313,
      "longitude": 19.893196,
      "altitude": {
        "feet": 11100,
        "meters": 3383
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614806,
      "ems": null
    },
    {
      "latitude": 51.201279,
      "longitude": 19.892975,
      "altitude": {
        "feet": 11125,
        "meters": 3391
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614819,
      "ems": null
    },
    {
      "latitude": 51.208603,
      "longitude": 19.892677,
      "altitude": {
        "feet": 11100,
        "meters": 3383
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614831,
      "ems": null
    },
    {
      "latitude": 51.216156,
      "longitude": 19.89238,
      "altitude": {
        "feet": 11075,
        "meters": 3376
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614843,
      "ems": null
    },
    {
      "latitude": 51.223663,
      "longitude": 19.892197,
      "altitude": {
        "feet": 11075,
        "meters": 3376
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614855,
      "ems": null
    },
    {
      "latitude": 51.231308,
      "longitude": 19.891935,
      "altitude": {
        "feet": 11050,
        "meters": 3368
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614868,
      "ems": null
    },
    {
      "latitude": 51.238605,
      "longitude": 19.891663,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614879,
      "ems": null
    },
    {
      "latitude": 51.246284,
      "longitude": 19.891281,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614891,
      "ems": null
    },
    {
      "latitude": 51.253601,
      "longitude": 19.891045,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614903,
      "ems": null
    },
    {
      "latitude": 51.261509,
      "longitude": 19.890823,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614915,
      "ems": null
    },
    {
      "latitude": 51.268845,
      "longitude": 19.89045,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 357,
      "squawk": "2641",
      "timestamp": 1673614927,
      "ems": null
    },
    {
      "latitude": 51.276901,
      "longitude": 19.890154,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673614939,
      "ems": null
    },
    {
      "latitude": 51.284592,
      "longitude": 19.889931,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614951,
      "ems": null
    },
    {
      "latitude": 51.292278,
      "longitude": 19.889679,
      "altitude": {
        "feet": 10925,
        "meters": 3330
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614963,
      "ems": null
    },
    {
      "latitude": 51.299698,
      "longitude": 19.88941,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614975,
      "ems": null
    },
    {
      "latitude": 51.306942,
      "longitude": 19.889145,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673614987,
      "ems": null
    },
    {
      "latitude": 51.314392,
      "longitude": 19.888992,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673615000,
      "ems": null
    },
    {
      "latitude": 51.32114,
      "longitude": 19.888763,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673615011,
      "ems": null
    },
    {
      "latitude": 51.328636,
      "longitude": 19.888535,
      "altitude": {
        "feet": 11025,
        "meters": 3360
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 359,
      "squawk": "2641",
      "timestamp": 1673615024,
      "ems": null
    },
    {
      "latitude": 51.335495,
      "longitude": 19.888298,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673615036,
      "ems": null
    },
    {
      "latitude": 51.34259,
      "longitude": 19.888075,
      "altitude": {
        "feet": 11050,
        "meters": 3368
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673615048,
      "ems": null
    },
    {
      "latitude": 51.349258,
      "longitude": 19.887772,
      "altitude": {
        "feet": 11075,
        "meters": 3376
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673615059,
      "ems": null
    },
    {
      "latitude": 51.35643,
      "longitude": 19.887466,
      "altitude": {
        "feet": 11075,
        "meters": 3376
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
      "heading": 358,
      "squawk": "2641",
      "timestamp": 1673615071,
      "ems": null
    },
    {
      "latitude": 51.361504,
      "longitude": 19.886398,
      "altitude": {
        "feet": 11100,
        "meters": 3383
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
      "heading": 345,
      "squawk": "2641",
      "timestamp": 1673615080,
      "ems": null
    },
    {
      "latitude": 51.363224,
      "longitude": 19.885559,
      "altitude": {
        "feet": 11075,
        "meters": 3376
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615083,
      "ems": null
    },
    {
      "latitude": 51.364838,
      "longitude": 19.884661,
      "altitude": {
        "feet": 11100,
        "meters": 3383
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673615086,
      "ems": null
    },
    {
      "latitude": 51.366394,
      "longitude": 19.88377,
      "altitude": {
        "feet": 11125,
        "meters": 3391
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 339,
      "squawk": "2641",
      "timestamp": 1673615089,
      "ems": null
    },
    {
      "latitude": 51.368019,
      "longitude": 19.882813,
      "altitude": {
        "feet": 11125,
        "meters": 3391
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "2641",
      "timestamp": 1673615092,
      "ems": null
    },
    {
      "latitude": 51.368774,
      "longitude": 19.882359,
      "altitude": {
        "feet": 11125,
        "meters": 3391
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
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673615095,
      "ems": null
    },
    {
      "latitude": 51.370605,
      "longitude": 19.881319,
      "altitude": {
        "feet": 11125,
        "meters": 3391
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615098,
      "ems": null
    },
    {
      "latitude": 51.37249,
      "longitude": 19.880371,
      "altitude": {
        "feet": 11125,
        "meters": 3391
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615101,
      "ems": null
    },
    {
      "latitude": 51.374306,
      "longitude": 19.879379,
      "altitude": {
        "feet": 11125,
        "meters": 3391
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615104,
      "ems": null
    },
    {
      "latitude": 51.381149,
      "longitude": 19.875793,
      "altitude": {
        "feet": 11075,
        "meters": 3376
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615116,
      "ems": null
    },
    {
      "latitude": 51.388046,
      "longitude": 19.872114,
      "altitude": {
        "feet": 11000,
        "meters": 3353
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615128,
      "ems": null
    },
    {
      "latitude": 51.394867,
      "longitude": 19.868551,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615140,
      "ems": null
    },
    {
      "latitude": 51.401817,
      "longitude": 19.864883,
      "altitude": {
        "feet": 11025,
        "meters": 3360
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615153,
      "ems": null
    },
    {
      "latitude": 51.408661,
      "longitude": 19.861374,
      "altitude": {
        "feet": 11000,
        "meters": 3353
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615165,
      "ems": null
    },
    {
      "latitude": 51.415283,
      "longitude": 19.857862,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615177,
      "ems": null
    },
    {
      "latitude": 51.422607,
      "longitude": 19.854076,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615189,
      "ems": null
    },
    {
      "latitude": 51.42947,
      "longitude": 19.850464,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615201,
      "ems": null
    },
    {
      "latitude": 51.43634,
      "longitude": 19.846876,
      "altitude": {
        "feet": 10975,
        "meters": 3345
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615213,
      "ems": null
    },
    {
      "latitude": 51.443207,
      "longitude": 19.843313,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615225,
      "ems": null
    },
    {
      "latitude": 51.449905,
      "longitude": 19.839859,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615237,
      "ems": null
    },
    {
      "latitude": 51.456436,
      "longitude": 19.836557,
      "altitude": {
        "feet": 10950,
        "meters": 3338
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615249,
      "ems": null
    },
    {
      "latitude": 51.463173,
      "longitude": 19.832993,
      "altitude": {
        "feet": 10925,
        "meters": 3330
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615261,
      "ems": null
    },
    {
      "latitude": 51.469738,
      "longitude": 19.829559,
      "altitude": {
        "feet": 10925,
        "meters": 3330
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615273,
      "ems": null
    },
    {
      "latitude": 51.476349,
      "longitude": 19.825974,
      "altitude": {
        "feet": 10925,
        "meters": 3330
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615285,
      "ems": null
    },
    {
      "latitude": 51.482712,
      "longitude": 19.822676,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615297,
      "ems": null
    },
    {
      "latitude": 51.489941,
      "longitude": 19.819031,
      "altitude": {
        "feet": 10925,
        "meters": 3330
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615310,
      "ems": null
    },
    {
      "latitude": 51.49641,
      "longitude": 19.815521,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615322,
      "ems": null
    },
    {
      "latitude": 51.503067,
      "longitude": 19.812012,
      "altitude": {
        "feet": 10950,
        "meters": 3338
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
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615334,
      "ems": null
    },
    {
      "latitude": 51.509445,
      "longitude": 19.808722,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615346,
      "ems": null
    },
    {
      "latitude": 51.516312,
      "longitude": 19.805157,
      "altitude": {
        "feet": 10975,
        "meters": 3345
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "2641",
      "timestamp": 1673615358,
      "ems": null
    },
    {
      "latitude": 51.523132,
      "longitude": 19.801865,
      "altitude": {
        "feet": 10875,
        "meters": 3315
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
      "heading": 346,
      "squawk": "2641",
      "timestamp": 1673615370,
      "ems": null
    },
    {
      "latitude": 51.526997,
      "longitude": 19.801025,
      "altitude": {
        "feet": 10850,
        "meters": 3307
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615376,
      "ems": null
    },
    {
      "latitude": 51.528854,
      "longitude": 19.800703,
      "altitude": {
        "feet": 10850,
        "meters": 3307
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615379,
      "ems": null
    },
    {
      "latitude": 51.530907,
      "longitude": 19.800491,
      "altitude": {
        "feet": 10800,
        "meters": 3292
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615382,
      "ems": null
    },
    {
      "latitude": 51.532955,
      "longitude": 19.800186,
      "altitude": {
        "feet": 10750,
        "meters": 3277
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615385,
      "ems": null
    },
    {
      "latitude": 51.534584,
      "longitude": 19.800034,
      "altitude": {
        "feet": 10725,
        "meters": 3269
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615388,
      "ems": null
    },
    {
      "latitude": 51.536774,
      "longitude": 19.799738,
      "altitude": {
        "feet": 10725,
        "meters": 3269
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
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615391,
      "ems": null
    },
    {
      "latitude": 51.538879,
      "longitude": 19.799442,
      "altitude": {
        "feet": 10725,
        "meters": 3269
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "2641",
      "timestamp": 1673615394,
      "ems": null
    },
    {
      "latitude": 51.540482,
      "longitude": 19.799219,
      "altitude": {
        "feet": 10650,
        "meters": 3246
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615397,
      "ems": null
    },
    {
      "latitude": 51.549088,
      "longitude": 19.797735,
      "altitude": {
        "feet": 10575,
        "meters": 3223
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615409,
      "ems": null
    },
    {
      "latitude": 51.557255,
      "longitude": 19.796295,
      "altitude": {
        "feet": 10475,
        "meters": 3193
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615421,
      "ems": null
    },
    {
      "latitude": 51.564938,
      "longitude": 19.795151,
      "altitude": {
        "feet": 10350,
        "meters": 3155
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615433,
      "ems": null
    },
    {
      "latitude": 51.572895,
      "longitude": 19.793854,
      "altitude": {
        "feet": 10200,
        "meters": 3109
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
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615445,
      "ems": null
    },
    {
      "latitude": 51.581184,
      "longitude": 19.792404,
      "altitude": {
        "feet": 10075,
        "meters": 3071
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615457,
      "ems": null
    },
    {
      "latitude": 51.589191,
      "longitude": 19.791107,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615469,
      "ems": null
    },
    {
      "latitude": 51.597431,
      "longitude": 19.789658,
      "altitude": {
        "feet": 9800,
        "meters": 2987
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
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615482,
      "ems": null
    },
    {
      "latitude": 51.60498,
      "longitude": 19.788456,
      "altitude": {
        "feet": 9575,
        "meters": 2918
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615494,
      "ems": null
    },
    {
      "latitude": 51.614792,
      "longitude": 19.786911,
      "altitude": {
        "feet": 9350,
        "meters": 2850
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615506,
      "ems": null
    },
    {
      "latitude": 51.623264,
      "longitude": 19.785538,
      "altitude": {
        "feet": 9150,
        "meters": 2789
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615518,
      "ems": null
    },
    {
      "latitude": 51.631989,
      "longitude": 19.784077,
      "altitude": {
        "feet": 8975,
        "meters": 2736
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615530,
      "ems": null
    },
    {
      "latitude": 51.640823,
      "longitude": 19.782591,
      "altitude": {
        "feet": 8825,
        "meters": 2690
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615542,
      "ems": null
    },
    {
      "latitude": 51.649841,
      "longitude": 19.781181,
      "altitude": {
        "feet": 8650,
        "meters": 2637
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
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615554,
      "ems": null
    },
    {
      "latitude": 51.658226,
      "longitude": 19.779816,
      "altitude": {
        "feet": 8425,
        "meters": 2568
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615566,
      "ems": null
    },
    {
      "latitude": 51.667446,
      "longitude": 19.77829,
      "altitude": {
        "feet": 8200,
        "meters": 2499
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615578,
      "ems": null
    },
    {
      "latitude": 51.676151,
      "longitude": 19.776917,
      "altitude": {
        "feet": 8050,
        "meters": 2454
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615590,
      "ems": null
    },
    {
      "latitude": 51.684669,
      "longitude": 19.775391,
      "altitude": {
        "feet": 7850,
        "meters": 2393
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615602,
      "ems": null
    },
    {
      "latitude": 51.693607,
      "longitude": 19.773865,
      "altitude": {
        "feet": 7650,
        "meters": 2332
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 354,
      "squawk": "2641",
      "timestamp": 1673615614,
      "ems": null
    },
    {
      "latitude": 51.702301,
      "longitude": 19.772718,
      "altitude": {
        "feet": 7450,
        "meters": 2271
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 356,
      "squawk": "2641",
      "timestamp": 1673615626,
      "ems": null
    },
    {
      "latitude": 51.711044,
      "longitude": 19.771902,
      "altitude": {
        "feet": 7250,
        "meters": 2210
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 356,
      "squawk": "2641",
      "timestamp": 1673615638,
      "ems": null
    },
    {
      "latitude": 51.720062,
      "longitude": 19.770639,
      "altitude": {
        "feet": 7050,
        "meters": 2149
      },
      "speed": {
        "kmh": 292.6,
        "kts": 158,
        "mph": 181.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615650,
      "ems": null
    },
    {
      "latitude": 51.728531,
      "longitude": 19.76923,
      "altitude": {
        "feet": 6850,
        "meters": 2088
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 353,
      "squawk": "2641",
      "timestamp": 1673615663,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.766779,
      "altitude": {
        "feet": 6600,
        "meters": 2012
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 347,
      "squawk": "2641",
      "timestamp": 1673615675,
      "ems": null
    },
    {
      "latitude": 51.741211,
      "longitude": 19.764923,
      "altitude": {
        "feet": 6475,
        "meters": 1974
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 341,
      "squawk": "2641",
      "timestamp": 1673615681,
      "ems": null
    },
    {
      "latitude": 51.743134,
      "longitude": 19.763811,
      "altitude": {
        "feet": 6425,
        "meters": 1958
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673615684,
      "ems": null
    },
    {
      "latitude": 51.746162,
      "longitude": 19.762039,
      "altitude": {
        "feet": 6325,
        "meters": 1928
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 340,
      "squawk": "2641",
      "timestamp": 1673615688,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 19.760544,
      "altitude": {
        "feet": 6275,
        "meters": 1913
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 339,
      "squawk": "2641",
      "timestamp": 1673615692,
      "ems": null
    },
    {
      "latitude": 51.750492,
      "longitude": 19.759445,
      "altitude": {
        "feet": 6225,
        "meters": 1897
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 338,
      "squawk": "2641",
      "timestamp": 1673615695,
      "ems": null
    },
    {
      "latitude": 51.752354,
      "longitude": 19.758224,
      "altitude": {
        "feet": 6175,
        "meters": 1882
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 338,
      "squawk": "2641",
      "timestamp": 1673615698,
      "ems": null
    },
    {
      "latitude": 51.759888,
      "longitude": 19.753567,
      "altitude": {
        "feet": 5950,
        "meters": 1814
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 339,
      "squawk": "2641",
      "timestamp": 1673615709,
      "ems": null
    },
    {
      "latitude": 51.767532,
      "longitude": 19.748993,
      "altitude": {
        "feet": 5700,
        "meters": 1737
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 338,
      "squawk": "2641",
      "timestamp": 1673615722,
      "ems": null
    },
    {
      "latitude": 51.775543,
      "longitude": 19.743769,
      "altitude": {
        "feet": 5450,
        "meters": 1661
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 337,
      "squawk": "2641",
      "timestamp": 1673615735,
      "ems": null
    },
    {
      "latitude": 51.782383,
      "longitude": 19.738998,
      "altitude": {
        "feet": 5225,
        "meters": 1593
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
      "heading": 337,
      "squawk": "2641",
      "timestamp": 1673615745,
      "ems": null
    },
    {
      "latitude": 51.789825,
      "longitude": 19.734043,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 337,
      "squawk": "2641",
      "timestamp": 1673615758,
      "ems": null
    },
    {
      "latitude": 51.793137,
      "longitude": 19.731369,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 328,
      "squawk": "2641",
      "timestamp": 1673615763,
      "ems": null
    },
    {
      "latitude": 51.794586,
      "longitude": 19.729589,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 321,
      "squawk": "2641",
      "timestamp": 1673615766,
      "ems": null
    },
    {
      "latitude": 51.794998,
      "longitude": 19.728922,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 317,
      "squawk": "2641",
      "timestamp": 1673615767,
      "ems": null
    },
    {
      "latitude": 51.796627,
      "longitude": 19.725647,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 301,
      "squawk": "2641",
      "timestamp": 1673615772,
      "ems": null
    },
    {
      "latitude": 51.797466,
      "longitude": 19.722519,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 290,
      "squawk": "2641",
      "timestamp": 1673615776,
      "ems": null
    },
    {
      "latitude": 51.797928,
      "longitude": 19.719791,
      "altitude": {
        "feet": 4725,
        "meters": 1440
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 282,
      "squawk": "2641",
      "timestamp": 1673615779,
      "ems": null
    },
    {
      "latitude": 51.798115,
      "longitude": 19.717178,
      "altitude": {
        "feet": 4650,
        "meters": 1417
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 275,
      "squawk": "2641",
      "timestamp": 1673615782,
      "ems": null
    },
    {
      "latitude": 51.798111,
      "longitude": 19.714075,
      "altitude": {
        "feet": 4550,
        "meters": 1387
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 267,
      "squawk": "2641",
      "timestamp": 1673615785,
      "ems": null
    },
    {
      "latitude": 51.797977,
      "longitude": 19.712143,
      "altitude": {
        "feet": 4475,
        "meters": 1364
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 262,
      "squawk": "2641",
      "timestamp": 1673615787,
      "ems": null
    },
    {
      "latitude": 51.797607,
      "longitude": 19.709324,
      "altitude": {
        "feet": 4400,
        "meters": 1341
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673615791,
      "ems": null
    },
    {
      "latitude": 51.796951,
      "longitude": 19.706268,
      "altitude": {
        "feet": 4350,
        "meters": 1326
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673615794,
      "ems": null
    },
    {
      "latitude": 51.796371,
      "longitude": 19.704128,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 245,
      "squawk": "2641",
      "timestamp": 1673615796,
      "ems": null
    },
    {
      "latitude": 51.795547,
      "longitude": 19.701605,
      "altitude": {
        "feet": 4275,
        "meters": 1303
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 243,
      "squawk": "2641",
      "timestamp": 1673615799,
      "ems": null
    },
    {
      "latitude": 51.794769,
      "longitude": 19.69908,
      "altitude": {
        "feet": 4250,
        "meters": 1295
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 242,
      "squawk": "2641",
      "timestamp": 1673615802,
      "ems": null
    },
    {
      "latitude": 51.7939,
      "longitude": 19.696482,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 241,
      "squawk": "2641",
      "timestamp": 1673615806,
      "ems": null
    },
    {
      "latitude": 51.793396,
      "longitude": 19.694923,
      "altitude": {
        "feet": 4175,
        "meters": 1273
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 243,
      "squawk": "2641",
      "timestamp": 1673615808,
      "ems": null
    },
    {
      "latitude": 51.792664,
      "longitude": 19.692177,
      "altitude": {
        "feet": 4150,
        "meters": 1265
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673615811,
      "ems": null
    },
    {
      "latitude": 51.792206,
      "longitude": 19.690552,
      "altitude": {
        "feet": 4125,
        "meters": 1257
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673615814,
      "ems": null
    },
    {
      "latitude": 51.791412,
      "longitude": 19.687576,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673615818,
      "ems": null
    },
    {
      "latitude": 51.79076,
      "longitude": 19.685059,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673615821,
      "ems": null
    },
    {
      "latitude": 51.789825,
      "longitude": 19.681265,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615827,
      "ems": null
    },
    {
      "latitude": 51.789364,
      "longitude": 19.67926,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673615830,
      "ems": null
    },
    {
      "latitude": 51.788956,
      "longitude": 19.676662,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 256,
      "squawk": "2641",
      "timestamp": 1673615832,
      "ems": null
    },
    {
      "latitude": 51.788574,
      "longitude": 19.673767,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 257,
      "squawk": "2641",
      "timestamp": 1673615836,
      "ems": null
    },
    {
      "latitude": 51.788269,
      "longitude": 19.671539,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 257,
      "squawk": "2641",
      "timestamp": 1673615839,
      "ems": null
    },
    {
      "latitude": 51.787922,
      "longitude": 19.669342,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 256,
      "squawk": "2641",
      "timestamp": 1673615842,
      "ems": null
    },
    {
      "latitude": 51.787491,
      "longitude": 19.666716,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 255,
      "squawk": "2641",
      "timestamp": 1673615845,
      "ems": null
    },
    {
      "latitude": 51.787128,
      "longitude": 19.664459,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 255,
      "squawk": "2641",
      "timestamp": 1673615848,
      "ems": null
    },
    {
      "latitude": 51.786713,
      "longitude": 19.662113,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673615851,
      "ems": null
    },
    {
      "latitude": 51.786346,
      "longitude": 19.659811,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 254,
      "squawk": "2641",
      "timestamp": 1673615854,
      "ems": null
    },
    {
      "latitude": 51.785641,
      "longitude": 19.655304,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 255,
      "squawk": "2641",
      "timestamp": 1673615860,
      "ems": null
    },
    {
      "latitude": 51.784943,
      "longitude": 19.651184,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 255,
      "squawk": "2641",
      "timestamp": 1673615865,
      "ems": null
    },
    {
      "latitude": 51.78447,
      "longitude": 19.648973,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673615868,
      "ems": null
    },
    {
      "latitude": 51.783646,
      "longitude": 19.646376,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 241,
      "squawk": "2641",
      "timestamp": 1673615872,
      "ems": null
    },
    {
      "latitude": 51.783173,
      "longitude": 19.645004,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 240,
      "squawk": "2641",
      "timestamp": 1673615874,
      "ems": null
    },
    {
      "latitude": 51.78215,
      "longitude": 19.642334,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 236,
      "squawk": "2641",
      "timestamp": 1673615878,
      "ems": null
    },
    {
      "latitude": 51.781357,
      "longitude": 19.640503,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 234,
      "squawk": "2641",
      "timestamp": 1673615881,
      "ems": null
    },
    {
      "latitude": 51.779961,
      "longitude": 19.637299,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 235,
      "squawk": "2641",
      "timestamp": 1673615886,
      "ems": null
    },
    {
      "latitude": 51.779217,
      "longitude": 19.635696,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 234,
      "squawk": "2641",
      "timestamp": 1673615889,
      "ems": null
    },
    {
      "latitude": 51.778423,
      "longitude": 19.633942,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 233,
      "squawk": "2641",
      "timestamp": 1673615892,
      "ems": null
    },
    {
      "latitude": 51.777725,
      "longitude": 19.632187,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 234,
      "squawk": "2641",
      "timestamp": 1673615895,
      "ems": null
    },
    {
      "latitude": 51.777122,
      "longitude": 19.630508,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 240,
      "squawk": "2641",
      "timestamp": 1673615898,
      "ems": null
    },
    {
      "latitude": 51.775864,
      "longitude": 19.626926,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673615904,
      "ems": null
    },
    {
      "latitude": 51.774399,
      "longitude": 19.623363,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 237,
      "squawk": "2641",
      "timestamp": 1673615911,
      "ems": null
    },
    {
      "latitude": 51.77298,
      "longitude": 19.619652,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 238,
      "squawk": "2641",
      "timestamp": 1673615917,
      "ems": null
    },
    {
      "latitude": 51.772327,
      "longitude": 19.617844,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 240,
      "squawk": "2641",
      "timestamp": 1673615920,
      "ems": null
    },
    {
      "latitude": 51.771767,
      "longitude": 19.616013,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 244,
      "squawk": "2641",
      "timestamp": 1673615923,
      "ems": null
    },
    {
      "latitude": 51.771442,
      "longitude": 19.614792,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673615926,
      "ems": null
    },
    {
      "latitude": 51.770882,
      "longitude": 19.61235,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673615929,
      "ems": null
    },
    {
      "latitude": 51.770699,
      "longitude": 19.610825,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 261,
      "squawk": "2641",
      "timestamp": 1673615932,
      "ems": null
    },
    {
      "latitude": 51.770603,
      "longitude": 19.608459,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 270,
      "squawk": "2641",
      "timestamp": 1673615935,
      "ems": null
    },
    {
      "latitude": 51.770645,
      "longitude": 19.606216,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 271,
      "squawk": "2641",
      "timestamp": 1673615938,
      "ems": null
    },
    {
      "latitude": 51.770599,
      "longitude": 19.604435,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 266,
      "squawk": "2641",
      "timestamp": 1673615941,
      "ems": null
    },
    {
      "latitude": 51.770462,
      "longitude": 19.603098,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 259,
      "squawk": "2641",
      "timestamp": 1673615943,
      "ems": null
    },
    {
      "latitude": 51.769394,
      "longitude": 19.598846,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673615950,
      "ems": null
    },
    {
      "latitude": 51.768448,
      "longitude": 19.595081,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673615956,
      "ems": null
    },
    {
      "latitude": 51.768044,
      "longitude": 19.593277,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673615959,
      "ems": null
    },
    {
      "latitude": 51.76767,
      "longitude": 19.591518,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673615962,
      "ems": null
    },
    {
      "latitude": 51.767345,
      "longitude": 19.58992,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "2641",
      "timestamp": 1673615965,
      "ems": null
    },
    {
      "latitude": 51.767067,
      "longitude": 19.588242,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "2641",
      "timestamp": 1673615968,
      "ems": null
    },
    {
      "latitude": 51.766739,
      "longitude": 19.586792,
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673615971,
      "ems": null
    },
    {
      "latitude": 51.766434,
      "longitude": 19.585209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673615974,
      "ems": null
    },
    {
      "latitude": 51.765717,
      "longitude": 19.581985,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615980,
      "ems": null
    },
    {
      "latitude": 51.764877,
      "longitude": 19.578705,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615987,
      "ems": null
    },
    {
      "latitude": 51.764099,
      "longitude": 19.575558,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615993,
      "ems": null
    },
    {
      "latitude": 51.76376,
      "longitude": 19.57428,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615995,
      "ems": null
    },
    {
      "latitude": 51.763321,
      "longitude": 19.572515,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673615999,
      "ems": null
    },
    {
      "latitude": 51.762596,
      "longitude": 19.569397,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616004,
      "ems": null
    },
    {
      "latitude": 51.76181,
      "longitude": 19.566057,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616011,
      "ems": null
    },
    {
      "latitude": 51.761063,
      "longitude": 19.562912,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616017,
      "ems": null
    },
    {
      "latitude": 51.7603,
      "longitude": 19.55982,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673616023,
      "ems": null
    },
    {
      "latitude": 51.75943,
      "longitude": 19.556406,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616029,
      "ems": null
    },
    {
      "latitude": 51.758606,
      "longitude": 19.553289,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616035,
      "ems": null
    },
    {
      "latitude": 51.757828,
      "longitude": 19.550245,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616041,
      "ems": null
    },
    {
      "latitude": 51.757011,
      "longitude": 19.547195,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616047,
      "ems": null
    },
    {
      "latitude": 51.756126,
      "longitude": 19.543991,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616053,
      "ems": null
    },
    {
      "latitude": 51.755287,
      "longitude": 19.541016,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 245,
      "squawk": "2641",
      "timestamp": 1673616059,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.538071,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 245,
      "squawk": "2641",
      "timestamp": 1673616065,
      "ems": null
    },
    {
      "latitude": 51.753704,
      "longitude": 19.535065,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616071,
      "ems": null
    },
    {
      "latitude": 51.753193,
      "longitude": 19.533081,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616075,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.52919,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673616084,
      "ems": null
    },
    {
      "latitude": 51.751751,
      "longitude": 19.527054,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616088,
      "ems": null
    },
    {
      "latitude": 51.751377,
      "longitude": 19.525375,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616092,
      "ems": null
    },
    {
      "latitude": 51.750595,
      "longitude": 19.522038,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616099,
      "ems": null
    },
    {
      "latitude": 51.749981,
      "longitude": 19.519272,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616105,
      "ems": null
    },
    {
      "latitude": 51.749405,
      "longitude": 19.516766,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616111,
      "ems": null
    },
    {
      "latitude": 51.748772,
      "longitude": 19.51416,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616117,
      "ems": null
    },
    {
      "latitude": 51.748398,
      "longitude": 19.512939,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 243,
      "squawk": "2641",
      "timestamp": 1673616120,
      "ems": null
    },
    {
      "latitude": 51.748028,
      "longitude": 19.511719,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 244,
      "squawk": "2641",
      "timestamp": 1673616123,
      "ems": null
    },
    {
      "latitude": 51.747608,
      "longitude": 19.510345,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 243,
      "squawk": "2641",
      "timestamp": 1673616126,
      "ems": null
    },
    {
      "latitude": 51.747234,
      "longitude": 19.509125,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "squawk": "2641",
      "timestamp": 1673616129,
      "ems": null
    },
    {
      "latitude": 51.74649,
      "longitude": 19.506378,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 247,
      "squawk": "2641",
      "timestamp": 1673616135,
      "ems": null
    },
    {
      "latitude": 51.745884,
      "longitude": 19.50386,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616141,
      "ems": null
    },
    {
      "latitude": 51.74514,
      "longitude": 19.501266,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616147,
      "ems": null
    },
    {
      "latitude": 51.74435,
      "longitude": 19.498138,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673616153,
      "ems": null
    },
    {
      "latitude": 51.743557,
      "longitude": 19.495316,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616160,
      "ems": null
    },
    {
      "latitude": 51.742813,
      "longitude": 19.492641,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 246,
      "squawk": "2641",
      "timestamp": 1673616165,
      "ems": null
    },
    {
      "latitude": 51.742081,
      "longitude": 19.489523,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616172,
      "ems": null
    },
    {
      "latitude": 51.741089,
      "longitude": 19.485168,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616181,
      "ems": null
    },
    {
      "latitude": 51.740158,
      "longitude": 19.481354,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616189,
      "ems": null
    },
    {
      "latitude": 51.739471,
      "longitude": 19.478388,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616194,
      "ems": null
    },
    {
      "latitude": 51.738785,
      "longitude": 19.475271,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616201,
      "ems": null
    },
    {
      "latitude": 51.73819,
      "longitude": 19.472078,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673616207,
      "ems": null
    },
    {
      "latitude": 51.737549,
      "longitude": 19.469257,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616213,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.465866,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616219,
      "ems": null
    },
    {
      "latitude": 51.73613,
      "longitude": 19.462873,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616225,
      "ems": null
    },
    {
      "latitude": 51.735443,
      "longitude": 19.45998,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 248,
      "squawk": "2641",
      "timestamp": 1673616231,
      "ems": null
    },
    {
      "latitude": 51.734898,
      "longitude": 19.457474,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616236,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.454041,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616243,
      "ems": null
    },
    {
      "latitude": 51.733521,
      "longitude": 19.450848,
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
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616249,
      "ems": null
    },
    {
      "latitude": 51.732834,
      "longitude": 19.447805,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616255,
      "ems": null
    },
    {
      "latitude": 51.732292,
      "longitude": 19.445267,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616260,
      "ems": null
    },
    {
      "latitude": 51.731186,
      "longitude": 19.440605,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616269,
      "ems": null
    },
    {
      "latitude": 51.730522,
      "longitude": 19.437637,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616275,
      "ems": null
    },
    {
      "latitude": 51.729767,
      "longitude": 19.433998,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616282,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.431103,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "2641",
      "timestamp": 1673616287,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.426346,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616296,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 19.422195,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616303,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.418793,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "2641",
      "timestamp": 1673616309,
      "ems": null
    },
    {
      "latitude": 51.725739,
      "longitude": 19.415737,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616315,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.413214,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2641",
      "timestamp": 1673616319,
      "ems": null
    },
    {
      "latitude": 51.724503,
      "longitude": 19.410021,
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
      "heading": 252,
      "squawk": "2641",
      "timestamp": 1673616325,
      "ems": null
    },
    {
      "latitude": 51.721375,
      "longitude": 19.408398,
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
      "heading": 177,
      "squawk": "2641",
      "timestamp": 1673616519,
      "ems": null
    },
    {
      "latitude": 51.720875,
      "longitude": 19.408463,
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
      "heading": 174,
      "squawk": "2641",
      "timestamp": 1673616526,
      "ems": null
    }
  ],
};
