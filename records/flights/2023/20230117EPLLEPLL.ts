import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230117EPLLEPLL",
    callsign: "BNI6D",
    name: "CPL3/02",
    description: "Cross Country training to EPPT Engine failures.",
  },
  pilotLog: {
    departure: new Date(2023, 0, 17, 8, 6).getTime(),
    arrival: new Date(2023, 0, 17, 9, 34).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 88,
    picTime: 0,
    dualTime: 88,
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
      registration: "SP-SID",
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
      "latitude": 51.721027,
      "longitude": 19.394073,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 252,
      "squawk": "0",
      "timestamp": 1673943261,
      "ems": null
    },
    {
      "latitude": 51.72052,
      "longitude": 19.391537,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673943265,
      "ems": null
    },
    {
      "latitude": 51.719769,
      "longitude": 19.387741,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1673943272,
      "ems": null
    },
    {
      "latitude": 51.719101,
      "longitude": 19.384485,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673943278,
      "ems": null
    },
    {
      "latitude": 51.718372,
      "longitude": 19.381256,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673943285,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.378357,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673943291,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.375381,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673943297,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.372459,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673943303,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.369415,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673943309,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.366531,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673943315,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.363098,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1673943321,
      "ems": null
    },
    {
      "latitude": 51.713718,
      "longitude": 19.35936,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673943327,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.357687,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1673943330,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.35598,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1673943333,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.354347,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673943336,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.35257,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673943339,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.350891,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673943342,
      "ems": null
    },
    {
      "latitude": 51.711994,
      "longitude": 19.347763,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "squawk": "7000",
      "timestamp": 1673943348,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.34639,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673943351,
      "ems": null
    },
    {
      "latitude": 51.711205,
      "longitude": 19.345093,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1673943354,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 19.343805,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1673943357,
      "ems": null
    },
    {
      "latitude": 51.710266,
      "longitude": 19.343138,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1673943360,
      "ems": null
    },
    {
      "latitude": 51.709526,
      "longitude": 19.341888,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1673943363,
      "ems": null
    },
    {
      "latitude": 51.708878,
      "longitude": 19.341125,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673943366,
      "ems": null
    },
    {
      "latitude": 51.708069,
      "longitude": 19.34054,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1673943369,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.34021,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1673943372,
      "ems": null
    },
    {
      "latitude": 51.706467,
      "longitude": 19.340094,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1673943376,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.340168,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1673943378,
      "ems": null
    },
    {
      "latitude": 51.70459,
      "longitude": 19.34054,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1673943382,
      "ems": null
    },
    {
      "latitude": 51.703766,
      "longitude": 19.341059,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943384,
      "ems": null
    },
    {
      "latitude": 51.70285,
      "longitude": 19.341728,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1673943388,
      "ems": null
    },
    {
      "latitude": 51.701935,
      "longitude": 19.342693,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1673943391,
      "ems": null
    },
    {
      "latitude": 51.701149,
      "longitude": 19.343719,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1673943394,
      "ems": null
    },
    {
      "latitude": 51.700333,
      "longitude": 19.344696,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1673943396,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.345703,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1673943399,
      "ems": null
    },
    {
      "latitude": 51.698639,
      "longitude": 19.346924,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1673943402,
      "ems": null
    },
    {
      "latitude": 51.697815,
      "longitude": 19.348112,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1673943405,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.349213,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1673943408,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.350561,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1673943412,
      "ems": null
    },
    {
      "latitude": 51.695377,
      "longitude": 19.351883,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1673943415,
      "ems": null
    },
    {
      "latitude": 51.694473,
      "longitude": 19.353308,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1673943418,
      "ems": null
    },
    {
      "latitude": 51.693794,
      "longitude": 19.354477,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673943421,
      "ems": null
    },
    {
      "latitude": 51.692963,
      "longitude": 19.355906,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673943424,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.357391,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1673943427,
      "ems": null
    },
    {
      "latitude": 51.69128,
      "longitude": 19.358902,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1673943430,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.360275,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1673943433,
      "ems": null
    },
    {
      "latitude": 51.689789,
      "longitude": 19.362106,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943436,
      "ems": null
    },
    {
      "latitude": 51.689072,
      "longitude": 19.363626,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943439,
      "ems": null
    },
    {
      "latitude": 51.688484,
      "longitude": 19.365005,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943441,
      "ems": null
    },
    {
      "latitude": 51.687603,
      "longitude": 19.366989,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943445,
      "ems": null
    },
    {
      "latitude": 51.68692,
      "longitude": 19.368525,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1673943448,
      "ems": null
    },
    {
      "latitude": 51.686203,
      "longitude": 19.37027,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1673943451,
      "ems": null
    },
    {
      "latitude": 51.685505,
      "longitude": 19.372025,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1673943454,
      "ems": null
    },
    {
      "latitude": 51.685272,
      "longitude": 19.372683,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1673943455,
      "ems": null
    },
    {
      "latitude": 51.684494,
      "longitude": 19.374687,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1673943458,
      "ems": null
    },
    {
      "latitude": 51.683041,
      "longitude": 19.378128,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1673943464,
      "ems": null
    },
    {
      "latitude": 51.681595,
      "longitude": 19.381638,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1673943469,
      "ems": null
    },
    {
      "latitude": 51.679047,
      "longitude": 19.387529,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1673943478,
      "ems": null
    },
    {
      "latitude": 51.677174,
      "longitude": 19.391556,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1673943484,
      "ems": null
    },
    {
      "latitude": 51.676163,
      "longitude": 19.393764,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1673943487,
      "ems": null
    },
    {
      "latitude": 51.674984,
      "longitude": 19.396133,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1673943490,
      "ems": null
    },
    {
      "latitude": 51.674057,
      "longitude": 19.397995,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1673943493,
      "ems": null
    },
    {
      "latitude": 51.672958,
      "longitude": 19.400148,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1673943496,
      "ems": null
    },
    {
      "latitude": 51.670853,
      "longitude": 19.404379,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1673943502,
      "ems": null
    },
    {
      "latitude": 51.66954,
      "longitude": 19.406738,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1673943506,
      "ems": null
    },
    {
      "latitude": 51.668427,
      "longitude": 19.408686,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673943508,
      "ems": null
    },
    {
      "latitude": 51.667328,
      "longitude": 19.410542,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1673943511,
      "ems": null
    },
    {
      "latitude": 51.666,
      "longitude": 19.412619,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1673943514,
      "ems": null
    },
    {
      "latitude": 51.664856,
      "longitude": 19.4144,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1673943517,
      "ems": null
    },
    {
      "latitude": 51.663582,
      "longitude": 19.416428,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1673943520,
      "ems": null
    },
    {
      "latitude": 51.662277,
      "longitude": 19.418106,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1673943523,
      "ems": null
    },
    {
      "latitude": 51.660919,
      "longitude": 19.420042,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1673943527,
      "ems": null
    },
    {
      "latitude": 51.659763,
      "longitude": 19.421768,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1673943530,
      "ems": null
    },
    {
      "latitude": 51.658554,
      "longitude": 19.423599,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1673943533,
      "ems": null
    },
    {
      "latitude": 51.656086,
      "longitude": 19.427414,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1673943539,
      "ems": null
    },
    {
      "latitude": 51.653946,
      "longitude": 19.431686,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1673943545,
      "ems": null
    },
    {
      "latitude": 51.65332,
      "longitude": 19.433256,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1673943547,
      "ems": null
    },
    {
      "latitude": 51.652176,
      "longitude": 19.436968,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943551,
      "ems": null
    },
    {
      "latitude": 51.651443,
      "longitude": 19.439789,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1673943554,
      "ems": null
    },
    {
      "latitude": 51.650894,
      "longitude": 19.442238,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1673943557,
      "ems": null
    },
    {
      "latitude": 51.650173,
      "longitude": 19.445496,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1673943560,
      "ems": null
    },
    {
      "latitude": 51.649567,
      "longitude": 19.448395,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1673943563,
      "ems": null
    },
    {
      "latitude": 51.648964,
      "longitude": 19.45137,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1673943566,
      "ems": null
    },
    {
      "latitude": 51.648376,
      "longitude": 19.454487,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1673943569,
      "ems": null
    },
    {
      "latitude": 51.647827,
      "longitude": 19.457529,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1673943572,
      "ems": null
    },
    {
      "latitude": 51.647324,
      "longitude": 19.460573,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1673943575,
      "ems": null
    },
    {
      "latitude": 51.647095,
      "longitude": 19.461983,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1673943577,
      "ems": null
    },
    {
      "latitude": 51.646408,
      "longitude": 19.466511,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1673943581,
      "ems": null
    },
    {
      "latitude": 51.64595,
      "longitude": 19.469332,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1673943583,
      "ems": null
    },
    {
      "latitude": 51.645473,
      "longitude": 19.472504,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1673943587,
      "ems": null
    },
    {
      "latitude": 51.644958,
      "longitude": 19.475708,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1673943590,
      "ems": null
    },
    {
      "latitude": 51.644539,
      "longitude": 19.478531,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1673943593,
      "ems": null
    },
    {
      "latitude": 51.644028,
      "longitude": 19.48204,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1673943596,
      "ems": null
    },
    {
      "latitude": 51.643143,
      "longitude": 19.488144,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1673943602,
      "ems": null
    },
    {
      "latitude": 51.642166,
      "longitude": 19.493866,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1673943608,
      "ems": null
    },
    {
      "latitude": 51.641418,
      "longitude": 19.497021,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1673943611,
      "ems": null
    },
    {
      "latitude": 51.640629,
      "longitude": 19.499512,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1673943614,
      "ems": null
    },
    {
      "latitude": 51.639465,
      "longitude": 19.502335,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943617,
      "ems": null
    },
    {
      "latitude": 51.638256,
      "longitude": 19.504471,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1673943620,
      "ems": null
    },
    {
      "latitude": 51.637234,
      "longitude": 19.505997,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1673943623,
      "ems": null
    },
    {
      "latitude": 51.635555,
      "longitude": 19.507904,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1673943626,
      "ems": null
    },
    {
      "latitude": 51.6343,
      "longitude": 19.508972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1673943629,
      "ems": null
    },
    {
      "latitude": 51.632538,
      "longitude": 19.510309,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1673943632,
      "ems": null
    },
    {
      "latitude": 51.631073,
      "longitude": 19.511421,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1673943635,
      "ems": null
    },
    {
      "latitude": 51.6297,
      "longitude": 19.512386,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943638,
      "ems": null
    },
    {
      "latitude": 51.628155,
      "longitude": 19.513397,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943641,
      "ems": null
    },
    {
      "latitude": 51.626663,
      "longitude": 19.514313,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943644,
      "ems": null
    },
    {
      "latitude": 51.625122,
      "longitude": 19.515356,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943647,
      "ems": null
    },
    {
      "latitude": 51.623932,
      "longitude": 19.516098,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943649,
      "ems": null
    },
    {
      "latitude": 51.62215,
      "longitude": 19.517288,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943653,
      "ems": null
    },
    {
      "latitude": 51.620567,
      "longitude": 19.518356,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943656,
      "ems": null
    },
    {
      "latitude": 51.619125,
      "longitude": 19.519291,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943659,
      "ems": null
    },
    {
      "latitude": 51.616104,
      "longitude": 19.521368,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943665,
      "ems": null
    },
    {
      "latitude": 51.613213,
      "longitude": 19.523315,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943671,
      "ems": null
    },
    {
      "latitude": 51.610233,
      "longitude": 19.525299,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943677,
      "ems": null
    },
    {
      "latitude": 51.607254,
      "longitude": 19.527359,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943683,
      "ems": null
    },
    {
      "latitude": 51.604156,
      "longitude": 19.529461,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943689,
      "ems": null
    },
    {
      "latitude": 51.601318,
      "longitude": 19.531391,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943695,
      "ems": null
    },
    {
      "latitude": 51.598343,
      "longitude": 19.533394,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943701,
      "ems": null
    },
    {
      "latitude": 51.595459,
      "longitude": 19.535324,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943707,
      "ems": null
    },
    {
      "latitude": 51.592121,
      "longitude": 19.537659,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943714,
      "ems": null
    },
    {
      "latitude": 51.589329,
      "longitude": 19.53949,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943719,
      "ems": null
    },
    {
      "latitude": 51.586117,
      "longitude": 19.541702,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943726,
      "ems": null
    },
    {
      "latitude": 51.583145,
      "longitude": 19.543638,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943732,
      "ems": null
    },
    {
      "latitude": 51.580299,
      "longitude": 19.545517,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943738,
      "ems": null
    },
    {
      "latitude": 51.577011,
      "longitude": 19.547647,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943744,
      "ems": null
    },
    {
      "latitude": 51.573807,
      "longitude": 19.549578,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1673943750,
      "ems": null
    },
    {
      "latitude": 51.570831,
      "longitude": 19.551434,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943756,
      "ems": null
    },
    {
      "latitude": 51.567635,
      "longitude": 19.553528,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943762,
      "ems": null
    },
    {
      "latitude": 51.564472,
      "longitude": 19.555588,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943769,
      "ems": null
    },
    {
      "latitude": 51.561539,
      "longitude": 19.557495,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673943774,
      "ems": null
    },
    {
      "latitude": 51.558334,
      "longitude": 19.559599,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943781,
      "ems": null
    },
    {
      "latitude": 51.555496,
      "longitude": 19.561455,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943786,
      "ems": null
    },
    {
      "latitude": 51.552246,
      "longitude": 19.563457,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673943793,
      "ems": null
    },
    {
      "latitude": 51.549248,
      "longitude": 19.565353,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1673943799,
      "ems": null
    },
    {
      "latitude": 51.545929,
      "longitude": 19.567318,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1673943805,
      "ems": null
    },
    {
      "latitude": 51.543102,
      "longitude": 19.569321,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1673943811,
      "ems": null
    },
    {
      "latitude": 51.541569,
      "longitude": 19.570694,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1673943814,
      "ems": null
    },
    {
      "latitude": 51.540077,
      "longitude": 19.57222,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1673943817,
      "ems": null
    },
    {
      "latitude": 51.538834,
      "longitude": 19.573627,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1673943820,
      "ems": null
    },
    {
      "latitude": 51.537369,
      "longitude": 19.575262,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1673943823,
      "ems": null
    },
    {
      "latitude": 51.535995,
      "longitude": 19.576895,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1673943826,
      "ems": null
    },
    {
      "latitude": 51.534531,
      "longitude": 19.578602,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1673943829,
      "ems": null
    },
    {
      "latitude": 51.533234,
      "longitude": 19.580231,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1673943832,
      "ems": null
    },
    {
      "latitude": 51.531979,
      "longitude": 19.581833,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1673943835,
      "ems": null
    },
    {
      "latitude": 51.530457,
      "longitude": 19.584021,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1673943838,
      "ems": null
    },
    {
      "latitude": 51.529404,
      "longitude": 19.585802,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673943841,
      "ems": null
    },
    {
      "latitude": 51.528214,
      "longitude": 19.587881,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1673943844,
      "ems": null
    },
    {
      "latitude": 51.526978,
      "longitude": 19.590405,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1673943847,
      "ems": null
    },
    {
      "latitude": 51.525879,
      "longitude": 19.592819,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1673943851,
      "ems": null
    },
    {
      "latitude": 51.524902,
      "longitude": 19.594955,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943853,
      "ems": null
    },
    {
      "latitude": 51.523911,
      "longitude": 19.597235,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673943856,
      "ems": null
    },
    {
      "latitude": 51.522812,
      "longitude": 19.599833,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1673943859,
      "ems": null
    },
    {
      "latitude": 51.521828,
      "longitude": 19.602203,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1673943862,
      "ems": null
    },
    {
      "latitude": 51.520805,
      "longitude": 19.604874,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "7000",
      "timestamp": 1673943866,
      "ems": null
    },
    {
      "latitude": 51.52002,
      "longitude": 19.607256,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1673943868,
      "ems": null
    },
    {
      "latitude": 51.51899,
      "longitude": 19.610367,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1673943872,
      "ems": null
    },
    {
      "latitude": 51.518143,
      "longitude": 19.613119,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1673943875,
      "ems": null
    },
    {
      "latitude": 51.517498,
      "longitude": 19.615402,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943878,
      "ems": null
    },
    {
      "latitude": 51.516632,
      "longitude": 19.618389,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943881,
      "ems": null
    },
    {
      "latitude": 51.5159,
      "longitude": 19.621063,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943884,
      "ems": null
    },
    {
      "latitude": 51.515125,
      "longitude": 19.623718,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943887,
      "ems": null
    },
    {
      "latitude": 51.514252,
      "longitude": 19.626926,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943890,
      "ems": null
    },
    {
      "latitude": 51.513588,
      "longitude": 19.62944,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943893,
      "ems": null
    },
    {
      "latitude": 51.512798,
      "longitude": 19.632416,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943896,
      "ems": null
    },
    {
      "latitude": 51.512054,
      "longitude": 19.63501,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943899,
      "ems": null
    },
    {
      "latitude": 51.510471,
      "longitude": 19.640961,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943905,
      "ems": null
    },
    {
      "latitude": 51.508942,
      "longitude": 19.64645,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943911,
      "ems": null
    },
    {
      "latitude": 51.507442,
      "longitude": 19.651947,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943917,
      "ems": null
    },
    {
      "latitude": 51.505768,
      "longitude": 19.657898,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943923,
      "ems": null
    },
    {
      "latitude": 51.504272,
      "longitude": 19.663374,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943929,
      "ems": null
    },
    {
      "latitude": 51.502697,
      "longitude": 19.669037,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943935,
      "ems": null
    },
    {
      "latitude": 51.501114,
      "longitude": 19.674732,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673943942,
      "ems": null
    },
    {
      "latitude": 51.499557,
      "longitude": 19.6803,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943947,
      "ems": null
    },
    {
      "latitude": 51.498093,
      "longitude": 19.685495,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943954,
      "ems": null
    },
    {
      "latitude": 51.496445,
      "longitude": 19.691435,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943959,
      "ems": null
    },
    {
      "latitude": 51.494827,
      "longitude": 19.697037,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673943966,
      "ems": null
    },
    {
      "latitude": 51.493149,
      "longitude": 19.702272,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1673943972,
      "ems": null
    },
    {
      "latitude": 51.491848,
      "longitude": 19.704971,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1673943975,
      "ems": null
    },
    {
      "latitude": 51.490639,
      "longitude": 19.706802,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1673943978,
      "ems": null
    },
    {
      "latitude": 51.489304,
      "longitude": 19.708359,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1673943981,
      "ems": null
    },
    {
      "latitude": 51.487701,
      "longitude": 19.709621,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673943984,
      "ems": null
    },
    {
      "latitude": 51.486172,
      "longitude": 19.710541,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1673943987,
      "ems": null
    },
    {
      "latitude": 51.48468,
      "longitude": 19.711105,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1673943990,
      "ems": null
    },
    {
      "latitude": 51.483078,
      "longitude": 19.711626,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673943993,
      "ems": null
    },
    {
      "latitude": 51.481514,
      "longitude": 19.712143,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673943996,
      "ems": null
    },
    {
      "latitude": 51.479977,
      "longitude": 19.712524,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673943999,
      "ems": null
    },
    {
      "latitude": 51.478397,
      "longitude": 19.712982,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673944002,
      "ems": null
    },
    {
      "latitude": 51.47686,
      "longitude": 19.71344,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673944005,
      "ems": null
    },
    {
      "latitude": 51.475185,
      "longitude": 19.713898,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673944008,
      "ems": null
    },
    {
      "latitude": 51.473694,
      "longitude": 19.714355,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944011,
      "ems": null
    },
    {
      "latitude": 51.472157,
      "longitude": 19.714813,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944014,
      "ems": null
    },
    {
      "latitude": 51.470627,
      "longitude": 19.715338,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944017,
      "ems": null
    },
    {
      "latitude": 51.467457,
      "longitude": 19.716339,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944023,
      "ems": null
    },
    {
      "latitude": 51.464264,
      "longitude": 19.717266,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944029,
      "ems": null
    },
    {
      "latitude": 51.460983,
      "longitude": 19.718323,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944036,
      "ems": null
    },
    {
      "latitude": 51.458004,
      "longitude": 19.719238,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673944041,
      "ems": null
    },
    {
      "latitude": 51.454651,
      "longitude": 19.720236,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1673944048,
      "ems": null
    },
    {
      "latitude": 51.451488,
      "longitude": 19.721146,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673944053,
      "ems": null
    },
    {
      "latitude": 51.448288,
      "longitude": 19.722092,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673944059,
      "ems": null
    },
    {
      "latitude": 51.444855,
      "longitude": 19.722982,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673944066,
      "ems": null
    },
    {
      "latitude": 51.44162,
      "longitude": 19.723892,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673944072,
      "ems": null
    },
    {
      "latitude": 51.438583,
      "longitude": 19.724689,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1673944078,
      "ems": null
    },
    {
      "latitude": 51.435471,
      "longitude": 19.725655,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944084,
      "ems": null
    },
    {
      "latitude": 51.432262,
      "longitude": 19.726715,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944090,
      "ems": null
    },
    {
      "latitude": 51.429062,
      "longitude": 19.727808,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673944096,
      "ems": null
    },
    {
      "latitude": 51.42593,
      "longitude": 19.728928,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1673944102,
      "ems": null
    },
    {
      "latitude": 51.422531,
      "longitude": 19.729843,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1673944108,
      "ems": null
    },
    {
      "latitude": 51.420868,
      "longitude": 19.729664,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1673944111,
      "ems": null
    },
    {
      "latitude": 51.419678,
      "longitude": 19.729071,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1673944114,
      "ems": null
    },
    {
      "latitude": 51.418438,
      "longitude": 19.727936,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944117,
      "ems": null
    },
    {
      "latitude": 51.41732,
      "longitude": 19.726181,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1673944120,
      "ems": null
    },
    {
      "latitude": 51.416435,
      "longitude": 19.724503,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1673944123,
      "ems": null
    },
    {
      "latitude": 51.415649,
      "longitude": 19.722908,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1673944126,
      "ems": null
    },
    {
      "latitude": 51.414665,
      "longitude": 19.721451,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1673944129,
      "ems": null
    },
    {
      "latitude": 51.413643,
      "longitude": 19.720306,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944132,
      "ems": null
    },
    {
      "latitude": 51.412571,
      "longitude": 19.719315,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944135,
      "ems": null
    },
    {
      "latitude": 51.411575,
      "longitude": 19.71838,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944138,
      "ems": null
    },
    {
      "latitude": 51.41066,
      "longitude": 19.717415,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944141,
      "ems": null
    },
    {
      "latitude": 51.409779,
      "longitude": 19.716492,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673944145,
      "ems": null
    },
    {
      "latitude": 51.408234,
      "longitude": 19.714668,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944151,
      "ems": null
    },
    {
      "latitude": 51.407589,
      "longitude": 19.713898,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1673944153,
      "ems": null
    },
    {
      "latitude": 51.406906,
      "longitude": 19.71311,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673944157,
      "ems": null
    },
    {
      "latitude": 51.406174,
      "longitude": 19.712368,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1673944160,
      "ems": null
    },
    {
      "latitude": 51.404842,
      "longitude": 19.710922,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944166,
      "ems": null
    },
    {
      "latitude": 51.403427,
      "longitude": 19.709473,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944172,
      "ems": null
    },
    {
      "latitude": 51.401863,
      "longitude": 19.708023,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944178,
      "ems": null
    },
    {
      "latitude": 51.400421,
      "longitude": 19.706497,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1673944184,
      "ems": null
    },
    {
      "latitude": 51.398838,
      "longitude": 19.704742,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673944190,
      "ems": null
    },
    {
      "latitude": 51.397209,
      "longitude": 19.703064,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944196,
      "ems": null
    },
    {
      "latitude": 51.395508,
      "longitude": 19.701307,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944202,
      "ems": null
    },
    {
      "latitude": 51.393764,
      "longitude": 19.699554,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944208,
      "ems": null
    },
    {
      "latitude": 51.392971,
      "longitude": 19.698868,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944211,
      "ems": null
    },
    {
      "latitude": 51.39204,
      "longitude": 19.698029,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944214,
      "ems": null
    },
    {
      "latitude": 51.390152,
      "longitude": 19.696112,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944221,
      "ems": null
    },
    {
      "latitude": 51.388504,
      "longitude": 19.694477,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944226,
      "ems": null
    },
    {
      "latitude": 51.379612,
      "longitude": 19.685516,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944260,
      "ems": null
    },
    {
      "latitude": 51.377838,
      "longitude": 19.683788,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944266,
      "ems": null
    },
    {
      "latitude": 51.376053,
      "longitude": 19.682007,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944272,
      "ems": null
    },
    {
      "latitude": 51.37426,
      "longitude": 19.680328,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944278,
      "ems": null
    },
    {
      "latitude": 51.372528,
      "longitude": 19.678741,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944284,
      "ems": null
    },
    {
      "latitude": 51.370605,
      "longitude": 19.677107,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1673944291,
      "ems": null
    },
    {
      "latitude": 51.369003,
      "longitude": 19.675697,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944297,
      "ems": null
    },
    {
      "latitude": 51.36731,
      "longitude": 19.674286,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1673944302,
      "ems": null
    },
    {
      "latitude": 51.366436,
      "longitude": 19.673615,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1673944305,
      "ems": null
    },
    {
      "latitude": 51.365646,
      "longitude": 19.673004,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1673944308,
      "ems": null
    },
    {
      "latitude": 51.364746,
      "longitude": 19.672579,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1673944310,
      "ems": null
    },
    {
      "latitude": 51.363224,
      "longitude": 19.672241,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1673944314,
      "ems": null
    },
    {
      "latitude": 51.362061,
      "longitude": 19.672241,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1673944317,
      "ems": null
    },
    {
      "latitude": 51.360764,
      "longitude": 19.672728,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1673944320,
      "ems": null
    },
    {
      "latitude": 51.359619,
      "longitude": 19.67347,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1673944323,
      "ems": null
    },
    {
      "latitude": 51.358704,
      "longitude": 19.674435,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1673944326,
      "ems": null
    },
    {
      "latitude": 51.357422,
      "longitude": 19.676291,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1673944330,
      "ems": null
    },
    {
      "latitude": 51.35643,
      "longitude": 19.678345,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1673944333,
      "ems": null
    },
    {
      "latitude": 51.356186,
      "longitude": 19.679037,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1673944333,
      "ems": null
    },
    {
      "latitude": 51.355545,
      "longitude": 19.681625,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1673944337,
      "ems": null
    },
    {
      "latitude": 51.355225,
      "longitude": 19.684381,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1673944339,
      "ems": null
    },
    {
      "latitude": 51.35527,
      "longitude": 19.687649,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1673944343,
      "ems": null
    },
    {
      "latitude": 51.355637,
      "longitude": 19.690628,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673944346,
      "ems": null
    },
    {
      "latitude": 51.356094,
      "longitude": 19.693365,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1673944348,
      "ems": null
    },
    {
      "latitude": 51.356735,
      "longitude": 19.696779,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1673944352,
      "ems": null
    },
    {
      "latitude": 51.357361,
      "longitude": 19.700012,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1673944355,
      "ems": null
    },
    {
      "latitude": 51.358013,
      "longitude": 19.70314,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1673944358,
      "ems": null
    },
    {
      "latitude": 51.358803,
      "longitude": 19.706268,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1673944361,
      "ems": null
    },
    {
      "latitude": 51.359848,
      "longitude": 19.709175,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1673944364,
      "ems": null
    },
    {
      "latitude": 51.361084,
      "longitude": 19.711685,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1673944367,
      "ems": null
    },
    {
      "latitude": 51.362686,
      "longitude": 19.714001,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1673944370,
      "ems": null
    },
    {
      "latitude": 51.364483,
      "longitude": 19.716187,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673944373,
      "ems": null
    },
    {
      "latitude": 51.366112,
      "longitude": 19.717865,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1673944376,
      "ems": null
    },
    {
      "latitude": 51.367859,
      "longitude": 19.719717,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1673944379,
      "ems": null
    },
    {
      "latitude": 51.369736,
      "longitude": 19.721647,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "squawk": "7000",
      "timestamp": 1673944382,
      "ems": null
    },
    {
      "latitude": 51.371338,
      "longitude": 19.72328,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1673944385,
      "ems": null
    },
    {
      "latitude": 51.373306,
      "longitude": 19.72521,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1673944388,
      "ems": null
    },
    {
      "latitude": 51.375095,
      "longitude": 19.726944,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1673944391,
      "ems": null
    },
    {
      "latitude": 51.376785,
      "longitude": 19.728624,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1673944394,
      "ems": null
    },
    {
      "latitude": 51.37854,
      "longitude": 19.730301,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1673944397,
      "ems": null
    },
    {
      "latitude": 51.38031,
      "longitude": 19.732056,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1673944400,
      "ems": null
    },
    {
      "latitude": 51.383801,
      "longitude": 19.735489,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673944406,
      "ems": null
    },
    {
      "latitude": 51.387177,
      "longitude": 19.73872,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1673944412,
      "ems": null
    },
    {
      "latitude": 51.38887,
      "longitude": 19.739759,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1673944416,
      "ems": null
    },
    {
      "latitude": 51.391064,
      "longitude": 19.740295,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673944419,
      "ems": null
    },
    {
      "latitude": 51.392578,
      "longitude": 19.740278,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673944421,
      "ems": null
    },
    {
      "latitude": 51.394363,
      "longitude": 19.739834,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1673944425,
      "ems": null
    },
    {
      "latitude": 51.395737,
      "longitude": 19.739017,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1673944428,
      "ems": null
    },
    {
      "latitude": 51.396881,
      "longitude": 19.737854,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1673944431,
      "ems": null
    },
    {
      "latitude": 51.397861,
      "longitude": 19.736557,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1673944434,
      "ems": null
    },
    {
      "latitude": 51.398621,
      "longitude": 19.73538,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673944436,
      "ems": null
    },
    {
      "latitude": 51.399582,
      "longitude": 19.73381,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1673944440,
      "ems": null
    },
    {
      "latitude": 51.400421,
      "longitude": 19.732437,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1673944443,
      "ems": null
    },
    {
      "latitude": 51.401184,
      "longitude": 19.730999,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1673944446,
      "ems": null
    },
    {
      "latitude": 51.402008,
      "longitude": 19.729292,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1673944449,
      "ems": null
    },
    {
      "latitude": 51.402649,
      "longitude": 19.727808,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1673944452,
      "ems": null
    },
    {
      "latitude": 51.403355,
      "longitude": 19.726028,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1673944455,
      "ems": null
    },
    {
      "latitude": 51.403931,
      "longitude": 19.724468,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1673944458,
      "ems": null
    },
    {
      "latitude": 51.40448,
      "longitude": 19.722908,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1673944461,
      "ems": null
    },
    {
      "latitude": 51.404984,
      "longitude": 19.721127,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1673944464,
      "ems": null
    },
    {
      "latitude": 51.405075,
      "longitude": 19.720688,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1673944467,
      "ems": null
    },
    {
      "latitude": 51.405487,
      "longitude": 19.717861,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1673944470,
      "ems": null
    },
    {
      "latitude": 51.405449,
      "longitude": 19.716263,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1673944473,
      "ems": null
    },
    {
      "latitude": 51.405212,
      "longitude": 19.714668,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673944476,
      "ems": null
    },
    {
      "latitude": 51.404892,
      "longitude": 19.713333,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673944479,
      "ems": null
    },
    {
      "latitude": 51.404377,
      "longitude": 19.711914,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1673944482,
      "ems": null
    },
    {
      "latitude": 51.403774,
      "longitude": 19.710693,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1673944485,
      "ems": null
    },
    {
      "latitude": 51.403015,
      "longitude": 19.709398,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1673944489,
      "ems": null
    },
    {
      "latitude": 51.402328,
      "longitude": 19.708405,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1673944492,
      "ems": null
    },
    {
      "latitude": 51.401443,
      "longitude": 19.70726,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944495,
      "ems": null
    },
    {
      "latitude": 51.400635,
      "longitude": 19.706429,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944498,
      "ems": null
    },
    {
      "latitude": 51.399719,
      "longitude": 19.705463,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944501,
      "ems": null
    },
    {
      "latitude": 51.39893,
      "longitude": 19.704666,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944504,
      "ems": null
    },
    {
      "latitude": 51.397953,
      "longitude": 19.703751,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944507,
      "ems": null
    },
    {
      "latitude": 51.396976,
      "longitude": 19.702835,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944510,
      "ems": null
    },
    {
      "latitude": 51.396103,
      "longitude": 19.701975,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944513,
      "ems": null
    },
    {
      "latitude": 51.395142,
      "longitude": 19.701084,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673944516,
      "ems": null
    },
    {
      "latitude": 51.39423,
      "longitude": 19.700165,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944519,
      "ems": null
    },
    {
      "latitude": 51.392395,
      "longitude": 19.698189,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944525,
      "ems": null
    },
    {
      "latitude": 51.390518,
      "longitude": 19.696407,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944531,
      "ems": null
    },
    {
      "latitude": 51.388641,
      "longitude": 19.694551,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944537,
      "ems": null
    },
    {
      "latitude": 51.386921,
      "longitude": 19.692841,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944543,
      "ems": null
    },
    {
      "latitude": 51.380867,
      "longitude": 19.686737,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944564,
      "ems": null
    },
    {
      "latitude": 51.379944,
      "longitude": 19.685719,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944568,
      "ems": null
    },
    {
      "latitude": 51.379238,
      "longitude": 19.68483,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1673944571,
      "ems": null
    },
    {
      "latitude": 51.378029,
      "longitude": 19.683456,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673944575,
      "ems": null
    },
    {
      "latitude": 51.376282,
      "longitude": 19.681414,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944582,
      "ems": null
    },
    {
      "latitude": 51.374725,
      "longitude": 19.679483,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673944589,
      "ems": null
    },
    {
      "latitude": 51.373352,
      "longitude": 19.677851,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944595,
      "ems": null
    },
    {
      "latitude": 51.371841,
      "longitude": 19.676067,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944601,
      "ems": null
    },
    {
      "latitude": 51.370674,
      "longitude": 19.674683,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944607,
      "ems": null
    },
    {
      "latitude": 51.369324,
      "longitude": 19.673004,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1673944612,
      "ems": null
    },
    {
      "latitude": 51.367508,
      "longitude": 19.670868,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944619,
      "ems": null
    },
    {
      "latitude": 51.366623,
      "longitude": 19.670181,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1673944622,
      "ems": null
    },
    {
      "latitude": 51.365692,
      "longitude": 19.669724,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1673944625,
      "ems": null
    },
    {
      "latitude": 51.364792,
      "longitude": 19.669462,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1673944628,
      "ems": null
    },
    {
      "latitude": 51.364059,
      "longitude": 19.669388,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1673944630,
      "ems": null
    },
    {
      "latitude": 51.362991,
      "longitude": 19.669495,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1673944634,
      "ems": null
    },
    {
      "latitude": 51.362293,
      "longitude": 19.669647,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1673944636,
      "ems": null
    },
    {
      "latitude": 51.361084,
      "longitude": 19.670105,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1673944640,
      "ems": null
    },
    {
      "latitude": 51.360168,
      "longitude": 19.670723,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673944643,
      "ems": null
    },
    {
      "latitude": 51.359207,
      "longitude": 19.671688,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1673944646,
      "ems": null
    },
    {
      "latitude": 51.35857,
      "longitude": 19.672546,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1673944649,
      "ems": null
    },
    {
      "latitude": 51.357731,
      "longitude": 19.673843,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673944652,
      "ems": null
    },
    {
      "latitude": 51.356918,
      "longitude": 19.675251,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673944655,
      "ems": null
    },
    {
      "latitude": 51.356232,
      "longitude": 19.676439,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1673944658,
      "ems": null
    },
    {
      "latitude": 51.355591,
      "longitude": 19.677582,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1673944661,
      "ems": null
    },
    {
      "latitude": 51.354939,
      "longitude": 19.678955,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1673944664,
      "ems": null
    },
    {
      "latitude": 51.354286,
      "longitude": 19.680939,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1673944667,
      "ems": null
    },
    {
      "latitude": 51.353897,
      "longitude": 19.682823,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1673944670,
      "ems": null
    },
    {
      "latitude": 51.353683,
      "longitude": 19.684525,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1673944673,
      "ems": null
    },
    {
      "latitude": 51.353588,
      "longitude": 19.685898,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "timestamp": 1673944675,
      "ems": null
    },
    {
      "latitude": 51.353577,
      "longitude": 19.686907,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673944676,
      "ems": null
    },
    {
      "latitude": 51.353622,
      "longitude": 19.689356,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1673944680,
      "ems": null
    },
    {
      "latitude": 51.35376,
      "longitude": 19.691509,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1673944683,
      "ems": null
    },
    {
      "latitude": 51.354053,
      "longitude": 19.693604,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673944686,
      "ems": null
    },
    {
      "latitude": 51.35463,
      "longitude": 19.695889,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673944689,
      "ems": null
    },
    {
      "latitude": 51.355404,
      "longitude": 19.697876,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1673944692,
      "ems": null
    },
    {
      "latitude": 51.356335,
      "longitude": 19.699707,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1673944695,
      "ems": null
    },
    {
      "latitude": 51.357605,
      "longitude": 19.701679,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1673944698,
      "ems": null
    },
    {
      "latitude": 51.358749,
      "longitude": 19.703014,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673944701,
      "ems": null
    },
    {
      "latitude": 51.360062,
      "longitude": 19.704514,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673944704,
      "ems": null
    },
    {
      "latitude": 51.36113,
      "longitude": 19.705734,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673944707,
      "ems": null
    },
    {
      "latitude": 51.362293,
      "longitude": 19.707108,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673944710,
      "ems": null
    },
    {
      "latitude": 51.363693,
      "longitude": 19.708731,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673944713,
      "ems": null
    },
    {
      "latitude": 51.364902,
      "longitude": 19.710159,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673944716,
      "ems": null
    },
    {
      "latitude": 51.365891,
      "longitude": 19.711403,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673944719,
      "ems": null
    },
    {
      "latitude": 51.36731,
      "longitude": 19.71311,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1673944722,
      "ems": null
    },
    {
      "latitude": 51.368683,
      "longitude": 19.714817,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1673944725,
      "ems": null
    },
    {
      "latitude": 51.369881,
      "longitude": 19.716263,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673944728,
      "ems": null
    },
    {
      "latitude": 51.372574,
      "longitude": 19.719345,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673944734,
      "ems": null
    },
    {
      "latitude": 51.375237,
      "longitude": 19.72229,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673944740,
      "ems": null
    },
    {
      "latitude": 51.37825,
      "longitude": 19.725359,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673944746,
      "ems": null
    },
    {
      "latitude": 51.380997,
      "longitude": 19.728252,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1673944752,
      "ems": null
    },
    {
      "latitude": 51.383942,
      "longitude": 19.731369,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673944758,
      "ems": null
    },
    {
      "latitude": 51.386902,
      "longitude": 19.733969,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1673944764,
      "ems": null
    },
    {
      "latitude": 51.388504,
      "longitude": 19.734785,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1673944767,
      "ems": null
    },
    {
      "latitude": 51.39032,
      "longitude": 19.735184,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1673944771,
      "ems": null
    },
    {
      "latitude": 51.391937,
      "longitude": 19.734859,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1673944774,
      "ems": null
    },
    {
      "latitude": 51.393585,
      "longitude": 19.734043,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1673944777,
      "ems": null
    },
    {
      "latitude": 51.394913,
      "longitude": 19.732782,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1673944780,
      "ems": null
    },
    {
      "latitude": 51.39595,
      "longitude": 19.731293,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1673944783,
      "ems": null
    },
    {
      "latitude": 51.396744,
      "longitude": 19.729614,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1673944786,
      "ems": null
    },
    {
      "latitude": 51.397568,
      "longitude": 19.727734,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1673944789,
      "ems": null
    },
    {
      "latitude": 51.398254,
      "longitude": 19.725803,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1673944791,
      "ems": null
    },
    {
      "latitude": 51.399033,
      "longitude": 19.723724,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1673944795,
      "ems": null
    },
    {
      "latitude": 51.399628,
      "longitude": 19.722166,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1673944798,
      "ems": null
    },
    {
      "latitude": 51.400314,
      "longitude": 19.72031,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1673944801,
      "ems": null
    },
    {
      "latitude": 51.400909,
      "longitude": 19.718454,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1673944804,
      "ems": null
    },
    {
      "latitude": 51.401276,
      "longitude": 19.71697,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1673944806,
      "ems": null
    },
    {
      "latitude": 51.401493,
      "longitude": 19.714966,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1673944810,
      "ems": null
    },
    {
      "latitude": 51.401505,
      "longitude": 19.713703,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1673944812,
      "ems": null
    },
    {
      "latitude": 51.40126,
      "longitude": 19.711304,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1673944816,
      "ems": null
    },
    {
      "latitude": 51.400864,
      "longitude": 19.709621,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673944819,
      "ems": null
    },
    {
      "latitude": 51.400269,
      "longitude": 19.708136,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1673944822,
      "ems": null
    },
    {
      "latitude": 51.399536,
      "longitude": 19.70665,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1673944825,
      "ems": null
    },
    {
      "latitude": 51.398804,
      "longitude": 19.705389,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1673944828,
      "ems": null
    },
    {
      "latitude": 51.39798,
      "longitude": 19.704277,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1673944831,
      "ems": null
    },
    {
      "latitude": 51.396973,
      "longitude": 19.703014,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673944834,
      "ems": null
    },
    {
      "latitude": 51.396011,
      "longitude": 19.701975,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944837,
      "ems": null
    },
    {
      "latitude": 51.395065,
      "longitude": 19.700928,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944840,
      "ems": null
    },
    {
      "latitude": 51.394089,
      "longitude": 19.69997,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944843,
      "ems": null
    },
    {
      "latitude": 51.393112,
      "longitude": 19.698944,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944846,
      "ems": null
    },
    {
      "latitude": 51.392227,
      "longitude": 19.698029,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944849,
      "ems": null
    },
    {
      "latitude": 51.390877,
      "longitude": 19.696732,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944853,
      "ems": null
    },
    {
      "latitude": 51.389969,
      "longitude": 19.695814,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673944856,
      "ems": null
    },
    {
      "latitude": 51.389061,
      "longitude": 19.694977,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944858,
      "ems": null
    },
    {
      "latitude": 51.387993,
      "longitude": 19.693909,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944861,
      "ems": null
    },
    {
      "latitude": 51.386314,
      "longitude": 19.692307,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673944866,
      "ems": null
    },
    {
      "latitude": 51.384033,
      "longitude": 19.689789,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673944874,
      "ems": null
    },
    {
      "latitude": 51.382313,
      "longitude": 19.687958,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673944880,
      "ems": null
    },
    {
      "latitude": 51.380634,
      "longitude": 19.686203,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1673944886,
      "ems": null
    },
    {
      "latitude": 51.379101,
      "longitude": 19.684601,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944892,
      "ems": null
    },
    {
      "latitude": 51.377377,
      "longitude": 19.682999,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944898,
      "ems": null
    },
    {
      "latitude": 51.375748,
      "longitude": 19.681473,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944904,
      "ems": null
    },
    {
      "latitude": 51.374313,
      "longitude": 19.680077,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944909,
      "ems": null
    },
    {
      "latitude": 51.372574,
      "longitude": 19.678444,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673944916,
      "ems": null
    },
    {
      "latitude": 51.370861,
      "longitude": 19.676895,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673944922,
      "ems": null
    },
    {
      "latitude": 51.369324,
      "longitude": 19.6754,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673944928,
      "ems": null
    },
    {
      "latitude": 51.367813,
      "longitude": 19.674065,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944934,
      "ems": null
    },
    {
      "latitude": 51.366253,
      "longitude": 19.672546,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1673944940,
      "ems": null
    },
    {
      "latitude": 51.364563,
      "longitude": 19.671021,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673944946,
      "ems": null
    },
    {
      "latitude": 51.362778,
      "longitude": 19.669462,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1673944952,
      "ems": null
    },
    {
      "latitude": 51.361176,
      "longitude": 19.6682,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1673944958,
      "ems": null
    },
    {
      "latitude": 51.35994,
      "longitude": 19.667755,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1673944962,
      "ems": null
    },
    {
      "latitude": 51.358978,
      "longitude": 19.667755,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1673944965,
      "ems": null
    },
    {
      "latitude": 51.358059,
      "longitude": 19.668121,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1673944968,
      "ems": null
    },
    {
      "latitude": 51.357239,
      "longitude": 19.66872,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1673944970,
      "ems": null
    },
    {
      "latitude": 51.356277,
      "longitude": 19.669683,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1673944974,
      "ems": null
    },
    {
      "latitude": 51.355125,
      "longitude": 19.671326,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1673944978,
      "ems": null
    },
    {
      "latitude": 51.354401,
      "longitude": 19.673025,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1673944981,
      "ems": null
    },
    {
      "latitude": 51.353962,
      "longitude": 19.674377,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1673944983,
      "ems": null
    },
    {
      "latitude": 51.353542,
      "longitude": 19.676437,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1673944987,
      "ems": null
    },
    {
      "latitude": 51.353355,
      "longitude": 19.678497,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1673944990,
      "ems": null
    },
    {
      "latitude": 51.353073,
      "longitude": 19.682379,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1673944995,
      "ems": null
    },
    {
      "latitude": 51.352936,
      "longitude": 19.684235,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1673944998,
      "ems": null
    },
    {
      "latitude": 51.35289,
      "longitude": 19.684906,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673944999,
      "ems": null
    },
    {
      "latitude": 51.35289,
      "longitude": 19.688614,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1673945004,
      "ems": null
    },
    {
      "latitude": 51.353077,
      "longitude": 19.690704,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1673945007,
      "ems": null
    },
    {
      "latitude": 51.353577,
      "longitude": 19.693291,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673945010,
      "ems": null
    },
    {
      "latitude": 51.354218,
      "longitude": 19.695368,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1673945014,
      "ems": null
    },
    {
      "latitude": 51.355034,
      "longitude": 19.697189,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1673945016,
      "ems": null
    },
    {
      "latitude": 51.356049,
      "longitude": 19.698858,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1673945019,
      "ems": null
    },
    {
      "latitude": 51.357376,
      "longitude": 19.700491,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1673945022,
      "ems": null
    },
    {
      "latitude": 51.358658,
      "longitude": 19.701752,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1673945025,
      "ems": null
    },
    {
      "latitude": 51.359921,
      "longitude": 19.703217,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673945029,
      "ems": null
    },
    {
      "latitude": 51.361038,
      "longitude": 19.704647,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1673945032,
      "ems": null
    },
    {
      "latitude": 51.362274,
      "longitude": 19.706207,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1673945034,
      "ems": null
    },
    {
      "latitude": 51.363556,
      "longitude": 19.707691,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673945037,
      "ems": null
    },
    {
      "latitude": 51.364761,
      "longitude": 19.709091,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673945040,
      "ems": null
    },
    {
      "latitude": 51.365936,
      "longitude": 19.710587,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1673945043,
      "ems": null
    },
    {
      "latitude": 51.367264,
      "longitude": 19.712145,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1673945047,
      "ems": null
    },
    {
      "latitude": 51.369598,
      "longitude": 19.715412,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1673945053,
      "ems": null
    },
    {
      "latitude": 51.370697,
      "longitude": 19.717119,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1673945056,
      "ems": null
    },
    {
      "latitude": 51.371201,
      "longitude": 19.718084,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1673945058,
      "ems": null
    },
    {
      "latitude": 51.372574,
      "longitude": 19.721052,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1673945062,
      "ems": null
    },
    {
      "latitude": 51.373421,
      "longitude": 19.723358,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1673945065,
      "ems": null
    },
    {
      "latitude": 51.374039,
      "longitude": 19.725433,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673945067,
      "ems": null
    },
    {
      "latitude": 51.374771,
      "longitude": 19.728031,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673945071,
      "ems": null
    },
    {
      "latitude": 51.375412,
      "longitude": 19.730331,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673945074,
      "ems": null
    },
    {
      "latitude": 51.376072,
      "longitude": 19.732895,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673945077,
      "ems": null
    },
    {
      "latitude": 51.376648,
      "longitude": 19.735529,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673945080,
      "ems": null
    },
    {
      "latitude": 51.377151,
      "longitude": 19.738276,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945083,
      "ems": null
    },
    {
      "latitude": 51.377422,
      "longitude": 19.740906,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1673945086,
      "ems": null
    },
    {
      "latitude": 51.37775,
      "longitude": 19.743576,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1673945089,
      "ems": null
    },
    {
      "latitude": 51.378216,
      "longitude": 19.746704,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945092,
      "ems": null
    },
    {
      "latitude": 51.378635,
      "longitude": 19.748993,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1673945095,
      "ems": null
    },
    {
      "latitude": 51.379238,
      "longitude": 19.751816,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673945098,
      "ems": null
    },
    {
      "latitude": 51.380493,
      "longitude": 19.756907,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673945104,
      "ems": null
    },
    {
      "latitude": 51.381866,
      "longitude": 19.762548,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673945110,
      "ems": null
    },
    {
      "latitude": 51.38245,
      "longitude": 19.765244,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673945113,
      "ems": null
    },
    {
      "latitude": 51.383102,
      "longitude": 19.76799,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673945116,
      "ems": null
    },
    {
      "latitude": 51.383789,
      "longitude": 19.770788,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673945119,
      "ems": null
    },
    {
      "latitude": 51.384361,
      "longitude": 19.773102,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673945122,
      "ems": null
    },
    {
      "latitude": 51.386078,
      "longitude": 19.779547,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1673945129,
      "ems": null
    },
    {
      "latitude": 51.387665,
      "longitude": 19.785156,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673945135,
      "ems": null
    },
    {
      "latitude": 51.388458,
      "longitude": 19.787861,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673945138,
      "ems": null
    },
    {
      "latitude": 51.389328,
      "longitude": 19.790756,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673945141,
      "ems": null
    },
    {
      "latitude": 51.390087,
      "longitude": 19.793243,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673945144,
      "ems": null
    },
    {
      "latitude": 51.391853,
      "longitude": 19.799347,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673945150,
      "ems": null
    },
    {
      "latitude": 51.393345,
      "longitude": 19.804535,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673945156,
      "ems": null
    },
    {
      "latitude": 51.394913,
      "longitude": 19.810724,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673945162,
      "ems": null
    },
    {
      "latitude": 51.395416,
      "longitude": 19.813471,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1673945165,
      "ems": null
    },
    {
      "latitude": 51.395874,
      "longitude": 19.816217,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945168,
      "ems": null
    },
    {
      "latitude": 51.39637,
      "longitude": 19.819183,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945171,
      "ems": null
    },
    {
      "latitude": 51.396881,
      "longitude": 19.822311,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945174,
      "ems": null
    },
    {
      "latitude": 51.397301,
      "longitude": 19.824982,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673945177,
      "ems": null
    },
    {
      "latitude": 51.397812,
      "longitude": 19.828262,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673945181,
      "ems": null
    },
    {
      "latitude": 51.398163,
      "longitude": 19.830694,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673945184,
      "ems": null
    },
    {
      "latitude": 51.398651,
      "longitude": 19.834137,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673945187,
      "ems": null
    },
    {
      "latitude": 51.399582,
      "longitude": 19.840343,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673945193,
      "ems": null
    },
    {
      "latitude": 51.400635,
      "longitude": 19.846209,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1673945199,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 19.849014,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673945202,
      "ems": null
    },
    {
      "latitude": 51.402004,
      "longitude": 19.851685,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673945205,
      "ems": null
    },
    {
      "latitude": 51.403072,
      "longitude": 19.85733,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673945211,
      "ems": null
    },
    {
      "latitude": 51.403793,
      "longitude": 19.863207,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1673945217,
      "ems": null
    },
    {
      "latitude": 51.404892,
      "longitude": 19.868849,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673945222,
      "ems": null
    },
    {
      "latitude": 51.405586,
      "longitude": 19.871216,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1673945225,
      "ems": null
    },
    {
      "latitude": 51.406986,
      "longitude": 19.874725,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1673945229,
      "ems": null
    },
    {
      "latitude": 51.408279,
      "longitude": 19.877163,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1673945232,
      "ems": null
    },
    {
      "latitude": 51.409744,
      "longitude": 19.879314,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1673945235,
      "ems": null
    },
    {
      "latitude": 51.411266,
      "longitude": 19.88121,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1673945238,
      "ems": null
    },
    {
      "latitude": 51.412804,
      "longitude": 19.882736,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1673945241,
      "ems": null
    },
    {
      "latitude": 51.414734,
      "longitude": 19.884289,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1673945244,
      "ems": null
    },
    {
      "latitude": 51.416435,
      "longitude": 19.885483,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1673945247,
      "ems": null
    },
    {
      "latitude": 51.418167,
      "longitude": 19.886591,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1673945250,
      "ems": null
    },
    {
      "latitude": 51.420113,
      "longitude": 19.887772,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1673945253,
      "ems": null
    },
    {
      "latitude": 51.42202,
      "longitude": 19.88884,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945256,
      "ems": null
    },
    {
      "latitude": 51.423649,
      "longitude": 19.889832,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945259,
      "ems": null
    },
    {
      "latitude": 51.425186,
      "longitude": 19.890671,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1673945262,
      "ems": null
    },
    {
      "latitude": 51.427322,
      "longitude": 19.89201,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1673945266,
      "ems": null
    },
    {
      "latitude": 51.429005,
      "longitude": 19.893036,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1673945268,
      "ems": null
    },
    {
      "latitude": 51.432869,
      "longitude": 19.895477,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1673945275,
      "ems": null
    },
    {
      "latitude": 51.43721,
      "longitude": 19.898394,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1673945283,
      "ems": null
    },
    {
      "latitude": 51.438858,
      "longitude": 19.899654,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1673945286,
      "ems": null
    },
    {
      "latitude": 51.440456,
      "longitude": 19.900818,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1673945289,
      "ems": null
    },
    {
      "latitude": 51.443893,
      "longitude": 19.903217,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1673945295,
      "ems": null
    },
    {
      "latitude": 51.447205,
      "longitude": 19.905243,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1673945301,
      "ems": null
    },
    {
      "latitude": 51.450714,
      "longitude": 19.907227,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945307,
      "ems": null
    },
    {
      "latitude": 51.452606,
      "longitude": 19.908295,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945310,
      "ems": null
    },
    {
      "latitude": 51.454327,
      "longitude": 19.909286,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945313,
      "ems": null
    },
    {
      "latitude": 51.455978,
      "longitude": 19.910196,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945316,
      "ems": null
    },
    {
      "latitude": 51.45945,
      "longitude": 19.912109,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1673945322,
      "ems": null
    },
    {
      "latitude": 51.461266,
      "longitude": 19.912796,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1673945326,
      "ems": null
    },
    {
      "latitude": 51.462982,
      "longitude": 19.913166,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673945328,
      "ems": null
    },
    {
      "latitude": 51.464615,
      "longitude": 19.913177,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673945331,
      "ems": null
    },
    {
      "latitude": 51.466339,
      "longitude": 19.912949,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1673945334,
      "ems": null
    },
    {
      "latitude": 51.467789,
      "longitude": 19.912497,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1673945337,
      "ems": null
    },
    {
      "latitude": 51.469437,
      "longitude": 19.91168,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1673945340,
      "ems": null
    },
    {
      "latitude": 51.470947,
      "longitude": 19.91066,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1673945343,
      "ems": null
    },
    {
      "latitude": 51.472412,
      "longitude": 19.909527,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1673945347,
      "ems": null
    },
    {
      "latitude": 51.473553,
      "longitude": 19.908524,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1673945349,
      "ems": null
    },
    {
      "latitude": 51.475136,
      "longitude": 19.906998,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1673945353,
      "ems": null
    },
    {
      "latitude": 51.47644,
      "longitude": 19.905668,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673945355,
      "ems": null
    },
    {
      "latitude": 51.477768,
      "longitude": 19.904257,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673945358,
      "ems": null
    },
    {
      "latitude": 51.47905,
      "longitude": 19.902773,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1673945362,
      "ems": null
    },
    {
      "latitude": 51.480492,
      "longitude": 19.901199,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1673945365,
      "ems": null
    },
    {
      "latitude": 51.48175,
      "longitude": 19.899803,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1673945368,
      "ems": null
    },
    {
      "latitude": 51.483124,
      "longitude": 19.898319,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1673945371,
      "ems": null
    },
    {
      "latitude": 51.484406,
      "longitude": 19.896908,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673945374,
      "ems": null
    },
    {
      "latitude": 51.485703,
      "longitude": 19.89563,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1673945377,
      "ems": null
    },
    {
      "latitude": 51.488312,
      "longitude": 19.89296,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1673945383,
      "ems": null
    },
    {
      "latitude": 51.491058,
      "longitude": 19.89006,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673945389,
      "ems": null
    },
    {
      "latitude": 51.493423,
      "longitude": 19.887482,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1673945395,
      "ems": null
    },
    {
      "latitude": 51.496628,
      "longitude": 19.883844,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1673945403,
      "ems": null
    },
    {
      "latitude": 51.500427,
      "longitude": 19.879463,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1673945412,
      "ems": null
    },
    {
      "latitude": 51.502415,
      "longitude": 19.877167,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1673945417,
      "ems": null
    },
    {
      "latitude": 51.503487,
      "longitude": 19.875717,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1673945420,
      "ems": null
    },
    {
      "latitude": 51.50423,
      "longitude": 19.874725,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1673945422,
      "ems": null
    },
    {
      "latitude": 51.505737,
      "longitude": 19.872561,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1673945426,
      "ems": null
    },
    {
      "latitude": 51.506424,
      "longitude": 19.871447,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1673945428,
      "ems": null
    },
    {
      "latitude": 51.50798,
      "longitude": 19.869072,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "timestamp": 1673945432,
      "ems": null
    },
    {
      "latitude": 51.508888,
      "longitude": 19.86763,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673945435,
      "ems": null
    },
    {
      "latitude": 51.509766,
      "longitude": 19.866251,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "timestamp": 1673945437,
      "ems": null
    },
    {
      "latitude": 51.511093,
      "longitude": 19.864172,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "7000",
      "timestamp": 1673945441,
      "ems": null
    },
    {
      "latitude": 51.51265,
      "longitude": 19.861797,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "7000",
      "timestamp": 1673945445,
      "ems": null
    },
    {
      "latitude": 51.51384,
      "longitude": 19.859941,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673945449,
      "ems": null
    },
    {
      "latitude": 51.516708,
      "longitude": 19.855423,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673945457,
      "ems": null
    },
    {
      "latitude": 51.519745,
      "longitude": 19.850737,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673945465,
      "ems": null
    },
    {
      "latitude": 51.521896,
      "longitude": 19.847321,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1673945472,
      "ems": null
    },
    {
      "latitude": 51.525284,
      "longitude": 19.842051,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "squawk": "7000",
      "timestamp": 1673945480,
      "ems": null
    },
    {
      "latitude": 51.52858,
      "longitude": 19.836855,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1673945489,
      "ems": null
    },
    {
      "latitude": 51.530582,
      "longitude": 19.83345,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1673945495,
      "ems": null
    },
    {
      "latitude": 51.533279,
      "longitude": 19.829407,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1673945503,
      "ems": null
    },
    {
      "latitude": 51.534443,
      "longitude": 19.828186,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673945505,
      "ems": null
    },
    {
      "latitude": 51.535217,
      "longitude": 19.827501,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945508,
      "ems": null
    },
    {
      "latitude": 51.537422,
      "longitude": 19.82605,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1673945512,
      "ems": null
    },
    {
      "latitude": 51.539978,
      "longitude": 19.824606,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1673945517,
      "ems": null
    },
    {
      "latitude": 51.541489,
      "longitude": 19.823715,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1673945521,
      "ems": null
    },
    {
      "latitude": 51.544693,
      "longitude": 19.821415,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1673945526,
      "ems": null
    },
    {
      "latitude": 51.546341,
      "longitude": 19.820152,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945530,
      "ems": null
    },
    {
      "latitude": 51.548218,
      "longitude": 19.818668,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1673945534,
      "ems": null
    },
    {
      "latitude": 51.551762,
      "longitude": 19.81575,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1673945541,
      "ems": null
    },
    {
      "latitude": 51.553158,
      "longitude": 19.814606,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1673945544,
      "ems": null
    },
    {
      "latitude": 51.554352,
      "longitude": 19.81362,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945547,
      "ems": null
    },
    {
      "latitude": 51.555347,
      "longitude": 19.812851,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945550,
      "ems": null
    },
    {
      "latitude": 51.558884,
      "longitude": 19.809982,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945556,
      "ems": null
    },
    {
      "latitude": 51.561817,
      "longitude": 19.807663,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945562,
      "ems": null
    },
    {
      "latitude": 51.564697,
      "longitude": 19.80538,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945569,
      "ems": null
    },
    {
      "latitude": 51.56955,
      "longitude": 19.801519,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945579,
      "ems": null
    },
    {
      "latitude": 51.573177,
      "longitude": 19.79866,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945587,
      "ems": null
    },
    {
      "latitude": 51.575226,
      "longitude": 19.796982,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945591,
      "ems": null
    },
    {
      "latitude": 51.578751,
      "longitude": 19.79417,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945599,
      "ems": null
    },
    {
      "latitude": 51.581772,
      "longitude": 19.791796,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945605,
      "ems": null
    },
    {
      "latitude": 51.584908,
      "longitude": 19.789276,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1673945611,
      "ems": null
    },
    {
      "latitude": 51.588821,
      "longitude": 19.786303,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1673945620,
      "ems": null
    },
    {
      "latitude": 51.590355,
      "longitude": 19.785309,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1673945623,
      "ems": null
    },
    {
      "latitude": 51.591888,
      "longitude": 19.784546,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1673945626,
      "ems": null
    },
    {
      "latitude": 51.593445,
      "longitude": 19.784002,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1673945629,
      "ems": null
    },
    {
      "latitude": 51.595047,
      "longitude": 19.783556,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1673945632,
      "ems": null
    },
    {
      "latitude": 51.597057,
      "longitude": 19.783401,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673945635,
      "ems": null
    },
    {
      "latitude": 51.59864,
      "longitude": 19.783478,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1673945638,
      "ems": null
    },
    {
      "latitude": 51.599712,
      "longitude": 19.78363,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1673945641,
      "ems": null
    },
    {
      "latitude": 51.602966,
      "longitude": 19.784077,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673945645,
      "ems": null
    },
    {
      "latitude": 51.604923,
      "longitude": 19.784317,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673945649,
      "ems": null
    },
    {
      "latitude": 51.606491,
      "longitude": 19.784521,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673945651,
      "ems": null
    },
    {
      "latitude": 51.60791,
      "longitude": 19.784744,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1673945654,
      "ems": null
    },
    {
      "latitude": 51.610325,
      "longitude": 19.785004,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1673945658,
      "ems": null
    },
    {
      "latitude": 51.611256,
      "longitude": 19.78508,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1673945661,
      "ems": null
    },
    {
      "latitude": 51.615261,
      "longitude": 19.785461,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1673945666,
      "ems": null
    },
    {
      "latitude": 51.618984,
      "longitude": 19.785843,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1673945673,
      "ems": null
    },
    {
      "latitude": 51.623474,
      "longitude": 19.786303,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1673945680,
      "ems": null
    },
    {
      "latitude": 51.626663,
      "longitude": 19.786606,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1673945687,
      "ems": null
    },
    {
      "latitude": 51.630669,
      "longitude": 19.786758,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1673945693,
      "ems": null
    },
    {
      "latitude": 51.634094,
      "longitude": 19.786749,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673945699,
      "ems": null
    },
    {
      "latitude": 51.635788,
      "longitude": 19.786606,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1673945702,
      "ems": null
    },
    {
      "latitude": 51.636749,
      "longitude": 19.786526,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1673945703,
      "ems": null
    },
    {
      "latitude": 51.638302,
      "longitude": 19.786377,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1673945708,
      "ems": null
    },
    {
      "latitude": 51.641739,
      "longitude": 19.785858,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1673945712,
      "ems": null
    },
    {
      "latitude": 51.64357,
      "longitude": 19.785486,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1673945716,
      "ems": null
    },
    {
      "latitude": 51.646729,
      "longitude": 19.784775,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1673945721,
      "ems": null
    },
    {
      "latitude": 51.648823,
      "longitude": 19.784317,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1673945725,
      "ems": null
    },
    {
      "latitude": 51.651031,
      "longitude": 19.783779,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1673945729,
      "ems": null
    },
    {
      "latitude": 51.65469,
      "longitude": 19.78302,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1673945735,
      "ems": null
    },
    {
      "latitude": 51.659454,
      "longitude": 19.781923,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1673945743,
      "ems": null
    },
    {
      "latitude": 51.663765,
      "longitude": 19.781113,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1673945750,
      "ems": null
    },
    {
      "latitude": 51.666885,
      "longitude": 19.780579,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1673945756,
      "ems": null
    },
    {
      "latitude": 51.670006,
      "longitude": 19.780045,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1673945761,
      "ems": null
    },
    {
      "latitude": 51.674149,
      "longitude": 19.779547,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1673945768,
      "ems": null
    },
    {
      "latitude": 51.675842,
      "longitude": 19.779696,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673945771,
      "ems": null
    },
    {
      "latitude": 51.677128,
      "longitude": 19.780045,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1673945774,
      "ems": null
    },
    {
      "latitude": 51.679409,
      "longitude": 19.780884,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1673945777,
      "ems": null
    },
    {
      "latitude": 51.681179,
      "longitude": 19.781799,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1673945780,
      "ems": null
    },
    {
      "latitude": 51.683041,
      "longitude": 19.782791,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945783,
      "ems": null
    },
    {
      "latitude": 51.684769,
      "longitude": 19.783779,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945786,
      "ems": null
    },
    {
      "latitude": 51.686783,
      "longitude": 19.784967,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945789,
      "ems": null
    },
    {
      "latitude": 51.688671,
      "longitude": 19.785995,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945792,
      "ems": null
    },
    {
      "latitude": 51.690353,
      "longitude": 19.78697,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945795,
      "ems": null
    },
    {
      "latitude": 51.692139,
      "longitude": 19.78801,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945798,
      "ems": null
    },
    {
      "latitude": 51.693279,
      "longitude": 19.788666,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945800,
      "ems": null
    },
    {
      "latitude": 51.695049,
      "longitude": 19.789658,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945804,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.791946,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945810,
      "ems": null
    },
    {
      "latitude": 51.702499,
      "longitude": 19.793854,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945816,
      "ems": null
    },
    {
      "latitude": 51.706329,
      "longitude": 19.796026,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945822,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.797956,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945828,
      "ems": null
    },
    {
      "latitude": 51.713577,
      "longitude": 19.800034,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945835,
      "ems": null
    },
    {
      "latitude": 51.717178,
      "longitude": 19.80204,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945841,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.803822,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945846,
      "ems": null
    },
    {
      "latitude": 51.724136,
      "longitude": 19.805901,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945853,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 19.807682,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1673945858,
      "ems": null
    },
    {
      "latitude": 51.731369,
      "longitude": 19.810057,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673945865,
      "ems": null
    },
    {
      "latitude": 51.733749,
      "longitude": 19.811022,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1673945871,
      "ems": null
    },
    {
      "latitude": 51.738235,
      "longitude": 19.811319,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1673945877,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.810724,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1673945880,
      "ems": null
    },
    {
      "latitude": 51.740997,
      "longitude": 19.810257,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1673945882,
      "ems": null
    },
    {
      "latitude": 51.74258,
      "longitude": 19.809036,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1673945886,
      "ems": null
    },
    {
      "latitude": 51.743511,
      "longitude": 19.808121,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1673945888,
      "ems": null
    },
    {
      "latitude": 51.744209,
      "longitude": 19.807281,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1673945889,
      "ems": null
    },
    {
      "latitude": 51.745281,
      "longitude": 19.805603,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1673945893,
      "ems": null
    },
    {
      "latitude": 51.746258,
      "longitude": 19.803467,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1673945898,
      "ems": null
    },
    {
      "latitude": 51.747143,
      "longitude": 19.799881,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1673945902,
      "ems": null
    },
    {
      "latitude": 51.747299,
      "longitude": 19.798328,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1673945904,
      "ems": null
    },
    {
      "latitude": 51.747299,
      "longitude": 19.797661,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1673945905,
      "ems": null
    },
    {
      "latitude": 51.747097,
      "longitude": 19.794617,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1673945910,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 19.792709,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673945913,
      "ems": null
    },
    {
      "latitude": 51.746071,
      "longitude": 19.791107,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1673945916,
      "ems": null
    },
    {
      "latitude": 51.745373,
      "longitude": 19.789658,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1673945919,
      "ems": null
    },
    {
      "latitude": 51.744534,
      "longitude": 19.788437,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1673945922,
      "ems": null
    },
    {
      "latitude": 51.743603,
      "longitude": 19.787292,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673945925,
      "ems": null
    },
    {
      "latitude": 51.742672,
      "longitude": 19.786148,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673945928,
      "ems": null
    },
    {
      "latitude": 51.742069,
      "longitude": 19.785385,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673945931,
      "ems": null
    },
    {
      "latitude": 51.740578,
      "longitude": 19.78363,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673945935,
      "ems": null
    },
    {
      "latitude": 51.739105,
      "longitude": 19.781849,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673945940,
      "ems": null
    },
    {
      "latitude": 51.738018,
      "longitude": 19.780579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673945944,
      "ems": null
    },
    {
      "latitude": 51.737041,
      "longitude": 19.779358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673945946,
      "ems": null
    },
    {
      "latitude": 51.735409,
      "longitude": 19.777298,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673945952,
      "ems": null
    },
    {
      "latitude": 51.733315,
      "longitude": 19.77478,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1673945959,
      "ems": null
    },
    {
      "latitude": 51.731499,
      "longitude": 19.772491,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1673945965,
      "ems": null
    },
    {
      "latitude": 51.730911,
      "longitude": 19.771605,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1673945967,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 19.769745,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1673945971,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.768753,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1673945972,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 19.766388,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673945976,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.764776,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1673945979,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.762474,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1673945983,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.760895,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1673945985,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.758614,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673945989,
      "ems": null
    },
    {
      "latitude": 51.730244,
      "longitude": 19.757156,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673945991,
      "ems": null
    },
    {
      "latitude": 51.730682,
      "longitude": 19.754902,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673945994,
      "ems": null
    },
    {
      "latitude": 51.731083,
      "longitude": 19.752731,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673945998,
      "ems": null
    },
    {
      "latitude": 51.731415,
      "longitude": 19.751043,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1673946001,
      "ems": null
    },
    {
      "latitude": 51.731735,
      "longitude": 19.749334,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1673946004,
      "ems": null
    },
    {
      "latitude": 51.732147,
      "longitude": 19.745995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1673946008,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 19.744186,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1673946011,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 19.742661,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673946014,
      "ems": null
    },
    {
      "latitude": 51.731506,
      "longitude": 19.740353,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673946017,
      "ems": null
    },
    {
      "latitude": 51.73114,
      "longitude": 19.738869,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673946020,
      "ems": null
    },
    {
      "latitude": 51.730728,
      "longitude": 19.73679,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673946023,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 19.735455,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673946026,
      "ems": null
    },
    {
      "latitude": 51.729916,
      "longitude": 19.733429,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946029,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 19.73241,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946031,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.730148,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673946036,
      "ems": null
    },
    {
      "latitude": 51.728706,
      "longitude": 19.728088,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673946040,
      "ems": null
    },
    {
      "latitude": 51.728165,
      "longitude": 19.724987,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673946046,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.724274,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1673946048,
      "ems": null
    },
    {
      "latitude": 51.727497,
      "longitude": 19.720535,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1673946055,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 19.719009,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946058,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.717638,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946061,
      "ems": null
    },
    {
      "latitude": 51.726891,
      "longitude": 19.715958,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1673946064,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.713211,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673946070,
      "ems": null
    },
    {
      "latitude": 51.725773,
      "longitude": 19.710083,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673946076,
      "ems": null
    },
    {
      "latitude": 51.725216,
      "longitude": 19.70787,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673946081,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.705505,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "squawk": "7000",
      "timestamp": 1673946085,
      "ems": null
    },
    {
      "latitude": 51.724091,
      "longitude": 19.703312,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946090,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.701233,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673946094,
      "ems": null
    },
    {
      "latitude": 51.72261,
      "longitude": 19.696503,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946102,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.694977,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1673946105,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.691849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1673946111,
      "ems": null
    },
    {
      "latitude": 51.720657,
      "longitude": 19.690172,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1673946115,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.688614,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1673946117,
      "ems": null
    },
    {
      "latitude": 51.719677,
      "longitude": 19.687195,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1673946120,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 19.685051,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "timestamp": 1673946124,
      "ems": null
    },
    {
      "latitude": 51.718369,
      "longitude": 19.683344,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1673946127,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.679337,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1673946134,
      "ems": null
    },
    {
      "latitude": 51.715858,
      "longitude": 19.675674,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1673946140,
      "ems": null
    },
    {
      "latitude": 51.714798,
      "longitude": 19.67206,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1673946146,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.668571,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946152,
      "ems": null
    },
    {
      "latitude": 51.713333,
      "longitude": 19.66679,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1673946155,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.663467,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946160,
      "ems": null
    },
    {
      "latitude": 51.71209,
      "longitude": 19.661484,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946163,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.659576,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946166,
      "ems": null
    },
    {
      "latitude": 51.711227,
      "longitude": 19.657734,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946169,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.655655,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673946172,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.651947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1673946179,
      "ems": null
    },
    {
      "latitude": 51.708923,
      "longitude": 19.648743,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673946184,
      "ems": null
    },
    {
      "latitude": 51.707806,
      "longitude": 19.644852,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946190,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.641037,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946197,
      "ems": null
    },
    {
      "latitude": 51.705826,
      "longitude": 19.63769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673946202,
      "ems": null
    },
    {
      "latitude": 51.705093,
      "longitude": 19.634943,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673946207,
      "ems": null
    },
    {
      "latitude": 51.703812,
      "longitude": 19.630341,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673946215,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.62677,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1673946221,
      "ems": null
    },
    {
      "latitude": 51.702438,
      "longitude": 19.625887,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1673946222,
      "ems": null
    },
    {
      "latitude": 51.701202,
      "longitude": 19.621582,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1673946230,
      "ems": null
    },
    {
      "latitude": 51.700775,
      "longitude": 19.619598,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673946233,
      "ems": null
    },
    {
      "latitude": 51.700516,
      "longitude": 19.618317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673946235,
      "ems": null
    },
    {
      "latitude": 51.700104,
      "longitude": 19.615866,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673946239,
      "ems": null
    },
    {
      "latitude": 51.699844,
      "longitude": 19.614182,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1673946242,
      "ems": null
    },
    {
      "latitude": 51.699646,
      "longitude": 19.612526,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946245,
      "ems": null
    },
    {
      "latitude": 51.699379,
      "longitude": 19.610367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946248,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 19.608688,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1673946251,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.606512,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673946254,
      "ems": null
    },
    {
      "latitude": 51.698914,
      "longitude": 19.604797,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1673946257,
      "ems": null
    },
    {
      "latitude": 51.698776,
      "longitude": 19.602728,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1673946260,
      "ems": null
    },
    {
      "latitude": 51.69873,
      "longitude": 19.601168,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1673946263,
      "ems": null
    },
    {
      "latitude": 51.69854,
      "longitude": 19.598541,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673946267,
      "ems": null
    },
    {
      "latitude": 51.698448,
      "longitude": 19.597244,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1673946269,
      "ems": null
    },
    {
      "latitude": 51.697906,
      "longitude": 19.592779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946276,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 19.589081,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946282,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.58506,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946288,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.581274,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1673946294,
      "ems": null
    },
    {
      "latitude": 51.696308,
      "longitude": 19.579315,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946297,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.577942,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "timestamp": 1673946300,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.57593,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1673946303,
      "ems": null
    },
    {
      "latitude": 51.695023,
      "longitude": 19.574667,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1673946306,
      "ems": null
    },
    {
      "latitude": 51.693886,
      "longitude": 19.573212,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1673946309,
      "ems": null
    },
    {
      "latitude": 51.692722,
      "longitude": 19.572601,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1673946312,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.572525,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1673946315,
      "ems": null
    },
    {
      "latitude": 51.690216,
      "longitude": 19.573034,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "timestamp": 1673946318,
      "ems": null
    },
    {
      "latitude": 51.688797,
      "longitude": 19.574148,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1673946321,
      "ems": null
    },
    {
      "latitude": 51.687603,
      "longitude": 19.575653,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1673946324,
      "ems": null
    },
    {
      "latitude": 51.686691,
      "longitude": 19.57719,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1673946327,
      "ems": null
    },
    {
      "latitude": 51.685738,
      "longitude": 19.579391,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1673946330,
      "ems": null
    },
    {
      "latitude": 51.684952,
      "longitude": 19.58209,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1673946333,
      "ems": null
    },
    {
      "latitude": 51.684448,
      "longitude": 19.584763,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1673946336,
      "ems": null
    },
    {
      "latitude": 51.684109,
      "longitude": 19.587708,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1673946339,
      "ems": null
    },
    {
      "latitude": 51.68399,
      "longitude": 19.590107,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673946342,
      "ems": null
    },
    {
      "latitude": 51.68383,
      "longitude": 19.593582,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1673946345,
      "ems": null
    },
    {
      "latitude": 51.683643,
      "longitude": 19.596481,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1673946348,
      "ems": null
    },
    {
      "latitude": 51.683304,
      "longitude": 19.599535,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1673946351,
      "ems": null
    },
    {
      "latitude": 51.683075,
      "longitude": 19.602282,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1673946354,
      "ems": null
    },
    {
      "latitude": 51.682854,
      "longitude": 19.605484,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673946358,
      "ems": null
    },
    {
      "latitude": 51.682713,
      "longitude": 19.608078,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1673946360,
      "ems": null
    },
    {
      "latitude": 51.682571,
      "longitude": 19.611189,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1673946363,
      "ems": null
    },
    {
      "latitude": 51.68248,
      "longitude": 19.614105,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1673946366,
      "ems": null
    },
    {
      "latitude": 51.682434,
      "longitude": 19.617426,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1673946369,
      "ems": null
    },
    {
      "latitude": 51.682388,
      "longitude": 19.620514,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1673946373,
      "ems": null
    },
    {
      "latitude": 51.68248,
      "longitude": 19.626629,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1673946379,
      "ems": null
    },
    {
      "latitude": 51.682575,
      "longitude": 19.629593,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1673946382,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.632492,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1673946384,
      "ems": null
    },
    {
      "latitude": 51.682892,
      "longitude": 19.635908,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1673946388,
      "ems": null
    },
    {
      "latitude": 51.683086,
      "longitude": 19.638824,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1673946391,
      "ems": null
    },
    {
      "latitude": 51.683304,
      "longitude": 19.641773,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1673946394,
      "ems": null
    },
    {
      "latitude": 51.683578,
      "longitude": 19.644817,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1673946396,
      "ems": null
    },
    {
      "latitude": 51.683899,
      "longitude": 19.647785,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1673946399,
      "ems": null
    },
    {
      "latitude": 51.684311,
      "longitude": 19.650978,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1673946403,
      "ems": null
    },
    {
      "latitude": 51.684669,
      "longitude": 19.653854,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1673946406,
      "ems": null
    },
    {
      "latitude": 51.684998,
      "longitude": 19.656397,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673946408,
      "ems": null
    },
    {
      "latitude": 51.685455,
      "longitude": 19.659811,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673946411,
      "ems": null
    },
    {
      "latitude": 51.685879,
      "longitude": 19.662933,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673946415,
      "ems": null
    },
    {
      "latitude": 51.686279,
      "longitude": 19.665899,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673946417,
      "ems": null
    },
    {
      "latitude": 51.686764,
      "longitude": 19.669342,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1673946421,
      "ems": null
    },
    {
      "latitude": 51.687183,
      "longitude": 19.672318,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1673946424,
      "ems": null
    },
    {
      "latitude": 51.687649,
      "longitude": 19.675293,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673946427,
      "ems": null
    },
    {
      "latitude": 51.688114,
      "longitude": 19.67804,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1673946430,
      "ems": null
    },
    {
      "latitude": 51.688671,
      "longitude": 19.681091,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1673946433,
      "ems": null
    },
    {
      "latitude": 51.689163,
      "longitude": 19.683491,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673946435,
      "ems": null
    },
    {
      "latitude": 51.689651,
      "longitude": 19.685669,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673946438,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.689713,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673946442,
      "ems": null
    },
    {
      "latitude": 51.691185,
      "longitude": 19.692154,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946445,
      "ems": null
    },
    {
      "latitude": 51.692001,
      "longitude": 19.695368,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946448,
      "ems": null
    },
    {
      "latitude": 51.692631,
      "longitude": 19.697647,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946451,
      "ems": null
    },
    {
      "latitude": 51.69342,
      "longitude": 19.700623,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673946454,
      "ems": null
    },
    {
      "latitude": 51.69429,
      "longitude": 19.703608,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1673946457,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.706039,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673946460,
      "ems": null
    },
    {
      "latitude": 51.695847,
      "longitude": 19.708805,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1673946463,
      "ems": null
    },
    {
      "latitude": 51.696724,
      "longitude": 19.711609,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1673946466,
      "ems": null
    },
    {
      "latitude": 51.697659,
      "longitude": 19.714432,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1673946469,
      "ems": null
    },
    {
      "latitude": 51.69928,
      "longitude": 19.719791,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673946475,
      "ems": null
    },
    {
      "latitude": 51.700928,
      "longitude": 19.725136,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1673946481,
      "ems": null
    },
    {
      "latitude": 51.702637,
      "longitude": 19.730606,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1673946488,
      "ems": null
    },
    {
      "latitude": 51.704918,
      "longitude": 19.737778,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1673946496,
      "ems": null
    },
    {
      "latitude": 51.707432,
      "longitude": 19.745941,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673946505,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.751488,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1673946511,
      "ems": null
    },
    {
      "latitude": 51.710644,
      "longitude": 19.757843,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946518,
      "ems": null
    },
    {
      "latitude": 51.711391,
      "longitude": 19.760742,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946521,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.765814,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946527,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 19.7686,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946530,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.773163,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946535,
      "ems": null
    },
    {
      "latitude": 51.715626,
      "longitude": 19.777679,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946541,
      "ems": null
    },
    {
      "latitude": 51.717316,
      "longitude": 19.784595,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946548,
      "ems": null
    },
    {
      "latitude": 51.71846,
      "longitude": 19.789421,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946553,
      "ems": null
    },
    {
      "latitude": 51.719303,
      "longitude": 19.792862,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1673946560,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.799145,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673946565,
      "ems": null
    },
    {
      "latitude": 51.722305,
      "longitude": 19.806049,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1673946572,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.811913,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673946579,
      "ems": null
    },
    {
      "latitude": 51.725124,
      "longitude": 19.818726,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1673946586,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.824903,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1673946593,
      "ems": null
    },
    {
      "latitude": 51.727402,
      "longitude": 19.830017,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1673946599,
      "ems": null
    },
    {
      "latitude": 51.728661,
      "longitude": 19.835587,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673946605,
      "ems": null
    },
    {
      "latitude": 51.729637,
      "longitude": 19.838257,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1673946608,
      "ems": null
    },
    {
      "latitude": 51.72987,
      "longitude": 19.838791,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1673946609,
      "ems": null
    },
    {
      "latitude": 51.73085,
      "longitude": 19.840469,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1673946611,
      "ems": null
    },
    {
      "latitude": 51.732571,
      "longitude": 19.842529,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1673946615,
      "ems": null
    },
    {
      "latitude": 51.733841,
      "longitude": 19.843683,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1673946617,
      "ems": null
    },
    {
      "latitude": 51.735737,
      "longitude": 19.844894,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673946621,
      "ems": null
    },
    {
      "latitude": 51.737087,
      "longitude": 19.845428,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1673946623,
      "ems": null
    },
    {
      "latitude": 51.738968,
      "longitude": 19.845837,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1673946626,
      "ems": null
    },
    {
      "latitude": 51.739197,
      "longitude": 19.845911,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673946629,
      "ems": null
    },
    {
      "latitude": 51.742207,
      "longitude": 19.845581,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1673946633,
      "ems": null
    },
    {
      "latitude": 51.743557,
      "longitude": 19.845047,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1673946635,
      "ems": null
    },
    {
      "latitude": 51.744461,
      "longitude": 19.844574,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1673946637,
      "ems": null
    },
    {
      "latitude": 51.746109,
      "longitude": 19.843164,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1673946641,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.842148,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673946644,
      "ems": null
    },
    {
      "latitude": 51.747849,
      "longitude": 19.841011,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673946647,
      "ems": null
    },
    {
      "latitude": 51.74905,
      "longitude": 19.838486,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1673946651,
      "ems": null
    },
    {
      "latitude": 51.749794,
      "longitude": 19.835739,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1673946656,
      "ems": null
    },
    {
      "latitude": 51.750027,
      "longitude": 19.833527,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1673946660,
      "ems": null
    },
    {
      "latitude": 51.750046,
      "longitude": 19.832253,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1673946662,
      "ems": null
    },
    {
      "latitude": 51.749817,
      "longitude": 19.830248,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1673946665,
      "ems": null
    },
    {
      "latitude": 51.74947,
      "longitude": 19.828796,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1673946668,
      "ems": null
    },
    {
      "latitude": 51.74905,
      "longitude": 19.827652,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1673946670,
      "ems": null
    },
    {
      "latitude": 51.748169,
      "longitude": 19.826017,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1673946674,
      "ems": null
    },
    {
      "latitude": 51.74762,
      "longitude": 19.825348,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1673946676,
      "ems": null
    },
    {
      "latitude": 51.746246,
      "longitude": 19.824236,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1673946681,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.823938,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1673946682,
      "ems": null
    },
    {
      "latitude": 51.744278,
      "longitude": 19.823566,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1673946686,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 19.823761,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1673946690,
      "ems": null
    },
    {
      "latitude": 51.741623,
      "longitude": 19.824162,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1673946693,
      "ems": null
    },
    {
      "latitude": 51.740437,
      "longitude": 19.824905,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1673946696,
      "ems": null
    },
    {
      "latitude": 51.738903,
      "longitude": 19.826431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1673946700,
      "ems": null
    },
    {
      "latitude": 51.737644,
      "longitude": 19.82811,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1673946703,
      "ems": null
    },
    {
      "latitude": 51.736954,
      "longitude": 19.829357,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1673946706,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.831732,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1673946709,
      "ems": null
    },
    {
      "latitude": 51.735123,
      "longitude": 19.83396,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "timestamp": 1673946712,
      "ems": null
    },
    {
      "latitude": 51.734985,
      "longitude": 19.834406,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "timestamp": 1673946712,
      "ems": null
    },
    {
      "latitude": 51.734344,
      "longitude": 19.837597,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1673946716,
      "ems": null
    },
    {
      "latitude": 51.733932,
      "longitude": 19.840715,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1673946720,
      "ems": null
    },
    {
      "latitude": 51.733829,
      "longitude": 19.844513,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1673946724,
      "ems": null
    },
    {
      "latitude": 51.734116,
      "longitude": 19.848509,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1673946728,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.852295,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1673946732,
      "ems": null
    },
    {
      "latitude": 51.73476,
      "longitude": 19.854202,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1673946735,
      "ems": null
    },
    {
      "latitude": 51.734848,
      "longitude": 19.857046,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1673946737,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.860609,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1673946741,
      "ems": null
    },
    {
      "latitude": 51.734432,
      "longitude": 19.863129,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1673946744,
      "ems": null
    },
    {
      "latitude": 51.734116,
      "longitude": 19.865805,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1673946747,
      "ems": null
    },
    {
      "latitude": 51.733315,
      "longitude": 19.870987,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1673946753,
      "ems": null
    },
    {
      "latitude": 51.733128,
      "longitude": 19.872437,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1673946756,
      "ems": null
    },
    {
      "latitude": 51.732849,
      "longitude": 19.876175,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673946759,
      "ems": null
    },
    {
      "latitude": 51.732742,
      "longitude": 19.878277,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1673946762,
      "ems": null
    },
    {
      "latitude": 51.732662,
      "longitude": 19.881821,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1673946765,
      "ems": null
    },
    {
      "latitude": 51.732616,
      "longitude": 19.888229,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1673946772,
      "ems": null
    },
    {
      "latitude": 51.732651,
      "longitude": 19.891415,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1673946776,
      "ems": null
    },
    {
      "latitude": 51.732662,
      "longitude": 19.896317,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1673946781,
      "ems": null
    },
    {
      "latitude": 51.732742,
      "longitude": 19.900101,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1673946786,
      "ems": null
    },
    {
      "latitude": 51.732616,
      "longitude": 19.906006,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1673946792,
      "ems": null
    },
    {
      "latitude": 51.732151,
      "longitude": 19.912033,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1673946798,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 19.916803,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1673946804,
      "ems": null
    },
    {
      "latitude": 51.730618,
      "longitude": 19.919357,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1673946808,
      "ems": null
    },
    {
      "latitude": 51.729778,
      "longitude": 19.921875,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1673946812,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.92485,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1673946816,
      "ems": null
    },
    {
      "latitude": 51.727356,
      "longitude": 19.926987,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1673946820,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.929123,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1673946824,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.931353,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1673946829,
      "ems": null
    },
    {
      "latitude": 51.722748,
      "longitude": 19.93309,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1673946834,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.93454,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1673946838,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.93499,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1673946840,
      "ems": null
    },
    {
      "latitude": 51.718651,
      "longitude": 19.935684,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1673946844,
      "ems": null
    },
    {
      "latitude": 51.717224,
      "longitude": 19.935955,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1673946848,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.935837,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1673946852,
      "ems": null
    },
    {
      "latitude": 51.714294,
      "longitude": 19.935286,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1673946856,
      "ems": null
    },
    {
      "latitude": 51.713333,
      "longitude": 19.934618,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1673946859,
      "ems": null
    },
    {
      "latitude": 51.712368,
      "longitude": 19.933777,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1673946862,
      "ems": null
    },
    {
      "latitude": 51.71167,
      "longitude": 19.932861,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1673946864,
      "ems": null
    },
    {
      "latitude": 51.710861,
      "longitude": 19.931648,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1673946867,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 19.930387,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1673946871,
      "ems": null
    },
    {
      "latitude": 51.709763,
      "longitude": 19.929199,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1673946874,
      "ems": null
    },
    {
      "latitude": 51.709343,
      "longitude": 19.927902,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673946876,
      "ems": null
    },
    {
      "latitude": 51.709061,
      "longitude": 19.926453,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1673946879,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 19.92482,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1673946881,
      "ems": null
    },
    {
      "latitude": 51.708878,
      "longitude": 19.921799,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1673946886,
      "ems": null
    },
    {
      "latitude": 51.709015,
      "longitude": 19.92012,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1673946889,
      "ems": null
    },
    {
      "latitude": 51.709305,
      "longitude": 19.917841,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1673946892,
      "ems": null
    },
    {
      "latitude": 51.709717,
      "longitude": 19.915392,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1673946895,
      "ems": null
    },
    {
      "latitude": 51.710274,
      "longitude": 19.912872,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1673946900,
      "ems": null
    },
    {
      "latitude": 51.710999,
      "longitude": 19.910196,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1673946904,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.908564,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1673946907,
      "ems": null
    },
    {
      "latitude": 51.711994,
      "longitude": 19.906693,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1673946909,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.905014,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1673946912,
      "ems": null
    },
    {
      "latitude": 51.713203,
      "longitude": 19.902496,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1673946916,
      "ems": null
    },
    {
      "latitude": 51.713669,
      "longitude": 19.900894,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1673946919,
      "ems": null
    },
    {
      "latitude": 51.714294,
      "longitude": 19.898689,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1673946922,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.896687,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1673946925,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.893494,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1673946931,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.889338,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1673946937,
      "ems": null
    },
    {
      "latitude": 51.716835,
      "longitude": 19.887772,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1673946940,
      "ems": null
    },
    {
      "latitude": 51.717178,
      "longitude": 19.885254,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1673946943,
      "ems": null
    },
    {
      "latitude": 51.717407,
      "longitude": 19.883547,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1673946946,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.881439,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1673946949,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.8806,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1673946951,
      "ems": null
    },
    {
      "latitude": 51.718281,
      "longitude": 19.878006,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1673946955,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.875677,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673946958,
      "ems": null
    },
    {
      "latitude": 51.71949,
      "longitude": 19.871826,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673946964,
      "ems": null
    },
    {
      "latitude": 51.719769,
      "longitude": 19.870224,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673946967,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.868328,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1673946970,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.864349,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1673946976,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.862213,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1673946979,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.860016,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673946982,
      "ems": null
    },
    {
      "latitude": 51.720245,
      "longitude": 19.857937,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1673946985,
      "ems": null
    },
    {
      "latitude": 51.720001,
      "longitude": 19.855881,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946988,
      "ems": null
    },
    {
      "latitude": 51.719788,
      "longitude": 19.854076,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946991,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.851404,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1673946994,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.849091,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1673946997,
      "ems": null
    },
    {
      "latitude": 51.718979,
      "longitude": 19.846802,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1673947000,
      "ems": null
    },
    {
      "latitude": 51.718884,
      "longitude": 19.846115,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947003,
      "ems": null
    },
    {
      "latitude": 51.718605,
      "longitude": 19.842453,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947006,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.837671,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947012,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.835358,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947015,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.832687,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947019,
      "ems": null
    },
    {
      "latitude": 51.717628,
      "longitude": 19.829788,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947022,
      "ems": null
    },
    {
      "latitude": 51.717453,
      "longitude": 19.827129,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947026,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.81748,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947038,
      "ems": null
    },
    {
      "latitude": 51.716217,
      "longitude": 19.811764,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947044,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.80694,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947050,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.803005,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947058,
      "ems": null
    },
    {
      "latitude": 51.715027,
      "longitude": 19.794765,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947066,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.789865,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947072,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.786154,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947077,
      "ems": null
    },
    {
      "latitude": 51.713928,
      "longitude": 19.779993,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947084,
      "ems": null
    },
    {
      "latitude": 51.713699,
      "longitude": 19.776728,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947088,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.7696,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947097,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.762623,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947105,
      "ems": null
    },
    {
      "latitude": 51.712273,
      "longitude": 19.756546,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947113,
      "ems": null
    },
    {
      "latitude": 51.711807,
      "longitude": 19.750671,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947120,
      "ems": null
    },
    {
      "latitude": 51.711483,
      "longitude": 19.745941,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947126,
      "ems": null
    },
    {
      "latitude": 51.711044,
      "longitude": 19.740131,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947133,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.735231,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947139,
      "ems": null
    },
    {
      "latitude": 51.710358,
      "longitude": 19.729961,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947145,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.72521,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947151,
      "ems": null
    },
    {
      "latitude": 51.709667,
      "longitude": 19.720154,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947157,
      "ems": null
    },
    {
      "latitude": 51.709343,
      "longitude": 19.715424,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947163,
      "ems": null
    },
    {
      "latitude": 51.709015,
      "longitude": 19.71077,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947169,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.705811,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947174,
      "ems": null
    },
    {
      "latitude": 51.708271,
      "longitude": 19.700851,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947180,
      "ems": null
    },
    {
      "latitude": 51.70784,
      "longitude": 19.695368,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947187,
      "ems": null
    },
    {
      "latitude": 51.70752,
      "longitude": 19.690619,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947193,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 19.685942,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947199,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.680405,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947205,
      "ems": null
    },
    {
      "latitude": 51.706409,
      "longitude": 19.675217,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947211,
      "ems": null
    },
    {
      "latitude": 51.706177,
      "longitude": 19.671555,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947217,
      "ems": null
    },
    {
      "latitude": 51.705803,
      "longitude": 19.665833,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947223,
      "ems": null
    },
    {
      "latitude": 51.705383,
      "longitude": 19.660263,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947229,
      "ems": null
    },
    {
      "latitude": 51.705059,
      "longitude": 19.65538,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947235,
      "ems": null
    },
    {
      "latitude": 51.704685,
      "longitude": 19.65065,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947241,
      "ems": null
    },
    {
      "latitude": 51.704266,
      "longitude": 19.644852,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947247,
      "ems": null
    },
    {
      "latitude": 51.703949,
      "longitude": 19.640215,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947253,
      "ems": null
    },
    {
      "latitude": 51.703674,
      "longitude": 19.635983,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947258,
      "ems": null
    },
    {
      "latitude": 51.703152,
      "longitude": 19.628525,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947267,
      "ems": null
    },
    {
      "latitude": 51.702778,
      "longitude": 19.623108,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947273,
      "ems": null
    },
    {
      "latitude": 51.702347,
      "longitude": 19.617054,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947280,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.611816,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947286,
      "ems": null
    },
    {
      "latitude": 51.701519,
      "longitude": 19.605408,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947294,
      "ems": null
    },
    {
      "latitude": 51.701111,
      "longitude": 19.599312,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947301,
      "ems": null
    },
    {
      "latitude": 51.700745,
      "longitude": 19.594563,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947306,
      "ems": null
    },
    {
      "latitude": 51.700378,
      "longitude": 19.589142,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947313,
      "ems": null
    },
    {
      "latitude": 51.700012,
      "longitude": 19.584614,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947318,
      "ems": null
    },
    {
      "latitude": 51.699554,
      "longitude": 19.577934,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947326,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 19.572754,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947332,
      "ems": null
    },
    {
      "latitude": 51.698776,
      "longitude": 19.56769,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947338,
      "ems": null
    },
    {
      "latitude": 51.698448,
      "longitude": 19.562607,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947344,
      "ems": null
    },
    {
      "latitude": 51.698029,
      "longitude": 19.557114,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947350,
      "ems": null
    },
    {
      "latitude": 51.697704,
      "longitude": 19.552002,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947356,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.546978,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947362,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.541634,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947368,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.536736,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947374,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.531612,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947380,
      "ems": null
    },
    {
      "latitude": 51.695843,
      "longitude": 19.526291,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947386,
      "ems": null
    },
    {
      "latitude": 51.695469,
      "longitude": 19.521408,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947392,
      "ems": null
    },
    {
      "latitude": 51.695095,
      "longitude": 19.516296,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947398,
      "ems": null
    },
    {
      "latitude": 51.694771,
      "longitude": 19.511414,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947404,
      "ems": null
    },
    {
      "latitude": 51.694351,
      "longitude": 19.506226,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947410,
      "ems": null
    },
    {
      "latitude": 51.69397,
      "longitude": 19.501251,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947416,
      "ems": null
    },
    {
      "latitude": 51.693558,
      "longitude": 19.495981,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947422,
      "ems": null
    },
    {
      "latitude": 51.693188,
      "longitude": 19.490891,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947428,
      "ems": null
    },
    {
      "latitude": 51.692825,
      "longitude": 19.485886,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947434,
      "ems": null
    },
    {
      "latitude": 51.692444,
      "longitude": 19.480743,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947440,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.47579,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947446,
      "ems": null
    },
    {
      "latitude": 51.691727,
      "longitude": 19.47052,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1673947453,
      "ems": null
    },
    {
      "latitude": 51.691513,
      "longitude": 19.465942,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1673947458,
      "ems": null
    },
    {
      "latitude": 51.691681,
      "longitude": 19.46332,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1673947461,
      "ems": null
    },
    {
      "latitude": 51.692139,
      "longitude": 19.461018,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1673947465,
      "ems": null
    },
    {
      "latitude": 51.692963,
      "longitude": 19.458717,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1673947468,
      "ems": null
    },
    {
      "latitude": 51.694305,
      "longitude": 19.456253,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1673947471,
      "ems": null
    },
    {
      "latitude": 51.695702,
      "longitude": 19.454651,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1673947473,
      "ems": null
    },
    {
      "latitude": 51.697376,
      "longitude": 19.453354,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1673947476,
      "ems": null
    },
    {
      "latitude": 51.699188,
      "longitude": 19.452631,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1673947479,
      "ems": null
    },
    {
      "latitude": 51.701103,
      "longitude": 19.452133,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1673947483,
      "ems": null
    },
    {
      "latitude": 51.702915,
      "longitude": 19.451675,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1673947485,
      "ems": null
    },
    {
      "latitude": 51.70491,
      "longitude": 19.451294,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1673947489,
      "ems": null
    },
    {
      "latitude": 51.706604,
      "longitude": 19.451071,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1673947492,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 19.450836,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1673947495,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.450684,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1673947498,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.450607,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1673947501,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.450607,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1673947504,
      "ems": null
    },
    {
      "latitude": 51.714066,
      "longitude": 19.450552,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1673947506,
      "ems": null
    },
    {
      "latitude": 51.715767,
      "longitude": 19.450455,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1673947510,
      "ems": null
    },
    {
      "latitude": 51.717209,
      "longitude": 19.450378,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1673947513,
      "ems": null
    },
    {
      "latitude": 51.718513,
      "longitude": 19.450302,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1673947515,
      "ems": null
    },
    {
      "latitude": 51.720016,
      "longitude": 19.450329,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1673947519,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 19.450684,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1673947522,
      "ems": null
    },
    {
      "latitude": 51.723076,
      "longitude": 19.45137,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1673947525,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.452362,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1673947528,
      "ems": null
    },
    {
      "latitude": 51.72554,
      "longitude": 19.453506,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673947530,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.455338,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1673947534,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 19.457306,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1673947537,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.459459,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1673947540,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.46167,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1673947543,
      "ems": null
    },
    {
      "latitude": 51.728943,
      "longitude": 19.46369,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1673947545,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.466141,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1673947549,
      "ems": null
    },
    {
      "latitude": 51.728622,
      "longitude": 19.46822,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1673947552,
      "ems": null
    },
    {
      "latitude": 51.728073,
      "longitude": 19.470148,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1673947555,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.471783,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1673947558,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.472733,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1673947560,
      "ems": null
    },
    {
      "latitude": 51.725868,
      "longitude": 19.473724,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1673947563,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.474157,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1673947566,
      "ems": null
    },
    {
      "latitude": 51.724045,
      "longitude": 19.474009,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1673947569,
      "ems": null
    },
    {
      "latitude": 51.723446,
      "longitude": 19.473495,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1673947572,
      "ems": null
    },
    {
      "latitude": 51.722855,
      "longitude": 19.472153,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1673947575,
      "ems": null
    },
    {
      "latitude": 51.722717,
      "longitude": 19.470446,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1673947579,
      "ems": null
    },
    {
      "latitude": 51.723129,
      "longitude": 19.468813,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1673947582,
      "ems": null
    },
    {
      "latitude": 51.723907,
      "longitude": 19.467476,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1673947584,
      "ems": null
    },
    {
      "latitude": 51.725143,
      "longitude": 19.466141,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1673947587,
      "ems": null
    },
    {
      "latitude": 51.725876,
      "longitude": 19.464952,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1673947590,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.46312,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1673947594,
      "ems": null
    },
    {
      "latitude": 51.726013,
      "longitude": 19.461761,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1673947597,
      "ems": null
    },
    {
      "latitude": 51.725403,
      "longitude": 19.460678,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1673947599,
      "ems": null
    },
    {
      "latitude": 51.724365,
      "longitude": 19.460127,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1673947603,
      "ems": null
    },
    {
      "latitude": 51.723267,
      "longitude": 19.460201,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1673947605,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.460831,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1673947609,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.461746,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1673947611,
      "ems": null
    },
    {
      "latitude": 51.720062,
      "longitude": 19.463171,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1673947614,
      "ems": null
    },
    {
      "latitude": 51.719101,
      "longitude": 19.464952,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1673947618,
      "ems": null
    },
    {
      "latitude": 51.718327,
      "longitude": 19.466858,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1673947621,
      "ems": null
    },
    {
      "latitude": 51.717773,
      "longitude": 19.468887,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1673947623,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 19.471741,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1673947627,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 19.473267,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1673947629,
      "ems": null
    },
    {
      "latitude": 51.717865,
      "longitude": 19.476904,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1673947633,
      "ems": null
    },
    {
      "latitude": 51.718643,
      "longitude": 19.479353,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1673947636,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.481581,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1673947639,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.483109,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1673947642,
      "ems": null
    },
    {
      "latitude": 51.722305,
      "longitude": 19.484253,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1673947644,
      "ems": null
    },
    {
      "latitude": 51.72419,
      "longitude": 19.484863,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1673947648,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.484711,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1673947651,
      "ems": null
    },
    {
      "latitude": 51.726791,
      "longitude": 19.484179,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1673947653,
      "ems": null
    },
    {
      "latitude": 51.728073,
      "longitude": 19.482769,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1673947657,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.481277,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1673947660,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.479599,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1673947663,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.478018,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1673947666,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.476547,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1673947669,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 19.475098,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1673947672,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.474232,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1673947675,
      "ems": null
    },
    {
      "latitude": 51.726658,
      "longitude": 19.473801,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1673947678,
      "ems": null
    },
    {
      "latitude": 51.725372,
      "longitude": 19.473785,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1673947681,
      "ems": null
    },
    {
      "latitude": 51.72419,
      "longitude": 19.474258,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1673947684,
      "ems": null
    },
    {
      "latitude": 51.723167,
      "longitude": 19.475098,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1673947687,
      "ems": null
    },
    {
      "latitude": 51.72205,
      "longitude": 19.476471,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1673947690,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.478073,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1673947693,
      "ems": null
    },
    {
      "latitude": 51.720562,
      "longitude": 19.479675,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1673947696,
      "ems": null
    },
    {
      "latitude": 51.720016,
      "longitude": 19.482248,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1673947699,
      "ems": null
    },
    {
      "latitude": 51.719833,
      "longitude": 19.484402,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1673947702,
      "ems": null
    },
    {
      "latitude": 51.719879,
      "longitude": 19.486109,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1673947704,
      "ems": null
    },
    {
      "latitude": 51.720383,
      "longitude": 19.489523,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1673947708,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 19.492195,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1673947711,
      "ems": null
    },
    {
      "latitude": 51.721664,
      "longitude": 19.492939,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1673947712,
      "ems": null
    },
    {
      "latitude": 51.723492,
      "longitude": 19.495468,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1673947717,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.496918,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1673947721,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.497095,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1673947725,
      "ems": null
    },
    {
      "latitude": 51.729584,
      "longitude": 19.496353,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1673947729,
      "ems": null
    },
    {
      "latitude": 51.731232,
      "longitude": 19.494497,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1673947733,
      "ems": null
    },
    {
      "latitude": 51.732056,
      "longitude": 19.492716,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1673947737,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 19.48982,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1673947741,
      "ems": null
    },
    {
      "latitude": 51.733177,
      "longitude": 19.487915,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1673947745,
      "ems": null
    },
    {
      "latitude": 51.733475,
      "longitude": 19.486332,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1673947747,
      "ems": null
    },
    {
      "latitude": 51.733734,
      "longitude": 19.484558,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1673947750,
      "ems": null
    },
    {
      "latitude": 51.733921,
      "longitude": 19.48349,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1673947754,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.481506,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1673947756,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.479057,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1673947760,
      "ems": null
    },
    {
      "latitude": 51.734806,
      "longitude": 19.47731,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1673947763,
      "ems": null
    },
    {
      "latitude": 51.735039,
      "longitude": 19.475555,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1673947766,
      "ems": null
    },
    {
      "latitude": 51.735077,
      "longitude": 19.475197,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1673947766,
      "ems": null
    },
    {
      "latitude": 51.735397,
      "longitude": 19.472227,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1673947771,
      "ems": null
    },
    {
      "latitude": 51.735596,
      "longitude": 19.46991,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1673947775,
      "ems": null
    },
    {
      "latitude": 51.735737,
      "longitude": 19.468079,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1673947778,
      "ems": null
    },
    {
      "latitude": 51.735809,
      "longitude": 19.466215,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1673947780,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.464359,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1673947784,
      "ems": null
    },
    {
      "latitude": 51.735783,
      "longitude": 19.462357,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1673947787,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.460499,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1673947790,
      "ems": null
    },
    {
      "latitude": 51.735306,
      "longitude": 19.458643,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1673947793,
      "ems": null
    },
    {
      "latitude": 51.734985,
      "longitude": 19.45701,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673947796,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.455566,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673947799,
      "ems": null
    },
    {
      "latitude": 51.734245,
      "longitude": 19.453583,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947802,
      "ems": null
    },
    {
      "latitude": 51.733875,
      "longitude": 19.451981,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947805,
      "ems": null
    },
    {
      "latitude": 51.733521,
      "longitude": 19.450478,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673947808,
      "ems": null
    },
    {
      "latitude": 51.733109,
      "longitude": 19.448696,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673947811,
      "ems": null
    },
    {
      "latitude": 51.732895,
      "longitude": 19.447784,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673947813,
      "ems": null
    },
    {
      "latitude": 51.73243,
      "longitude": 19.445724,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673947817,
      "ems": null
    },
    {
      "latitude": 51.732101,
      "longitude": 19.444391,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947820,
      "ems": null
    },
    {
      "latitude": 51.731735,
      "longitude": 19.442757,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673947823,
      "ems": null
    },
    {
      "latitude": 51.731094,
      "longitude": 19.439861,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947829,
      "ems": null
    },
    {
      "latitude": 51.730476,
      "longitude": 19.43718,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947835,
      "ems": null
    },
    {
      "latitude": 51.729721,
      "longitude": 19.433849,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1673947841,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.430954,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947847,
      "ems": null
    },
    {
      "latitude": 51.728428,
      "longitude": 19.428024,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673947853,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.425278,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1673947859,
      "ems": null
    },
    {
      "latitude": 51.727123,
      "longitude": 19.422073,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947865,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.418261,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1673947873,
      "ems": null
    },
    {
      "latitude": 51.725098,
      "longitude": 19.412916,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673947883,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.411877,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1673947885,
      "ems": null
    },
    {
      "latitude": 51.724239,
      "longitude": 19.409027,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1673947891,
      "ems": null
    },
    {
      "latitude": 51.72142,
      "longitude": 19.408379,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1673948024,
      "ems": null
    },
    {
      "latitude": 51.720921,
      "longitude": 19.408455,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1673948031,
      "ems": null
    },
    {
      "latitude": 51.719868,
      "longitude": 19.406328,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 13,
        "kts": 7,
        "mph": 8.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1673948072,
      "ems": null
    }
  ],
};
