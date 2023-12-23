import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231223LPSOLPCO",
    callsign: "RVP103",
    name: "NAV 15",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 11, 23, 8, 5).getTime(),
    arrival: new Date(2023, 11, 23, 9, 45).getTime(),
    singleEnginePistonTime: 100,
    multiEnginePistonTime: 0,
    picTime: 100,
    dualTime: 0,
    ifrTime: 0,
    nightTime: 0,
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
      modes: "48B048",
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
    destination: {
      name: "Coimbra",
      code: "LPCO",
      position: {
        latitude: 40.1572,
        longitude: -8.47,
      },
    },
  },
  track: [
    {
      "latitude": 39.216816,
      "longitude": -8.055481,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 23,
      "squawk": "0",
      "timestamp": 1703319646,
      "ems": null
    },
    {
      "latitude": 39.218994,
      "longitude": -8.054292,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 22,
      "squawk": "0",
      "timestamp": 1703319654,
      "ems": null
    },
    {
      "latitude": 39.221565,
      "longitude": -8.052979,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 22,
      "squawk": "0",
      "timestamp": 1703319663,
      "ems": null
    },
    {
      "latitude": 39.224125,
      "longitude": -8.051575,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 22,
      "squawk": "0",
      "timestamp": 1703319672,
      "ems": null
    },
    {
      "latitude": 39.22501,
      "longitude": -8.051147,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 12,
      "squawk": "0",
      "timestamp": 1703319675,
      "ems": null
    },
    {
      "latitude": 39.225906,
      "longitude": -8.051068,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703319678,
      "ems": null
    },
    {
      "latitude": 39.226959,
      "longitude": -8.051367,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 342,
      "squawk": "3260",
      "timestamp": 1703319681,
      "ems": null
    },
    {
      "latitude": 39.227783,
      "longitude": -8.051964,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 326,
      "squawk": "3260",
      "timestamp": 1703319684,
      "ems": null
    },
    {
      "latitude": 39.2285,
      "longitude": -8.052979,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703319687,
      "ems": null
    },
    {
      "latitude": 39.22892,
      "longitude": -8.054199,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703319690,
      "ems": null
    },
    {
      "latitude": 39.229019,
      "longitude": -8.055665,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 270,
      "squawk": "3260",
      "timestamp": 1703319693,
      "ems": null
    },
    {
      "latitude": 39.228836,
      "longitude": -8.056979,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703319696,
      "ems": null
    },
    {
      "latitude": 39.228455,
      "longitude": -8.058228,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 241,
      "squawk": "3260",
      "timestamp": 1703319699,
      "ems": null
    },
    {
      "latitude": 39.227848,
      "longitude": -8.059326,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 231,
      "squawk": "3260",
      "timestamp": 1703319702,
      "ems": null
    },
    {
      "latitude": 39.227051,
      "longitude": -8.060323,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 223,
      "squawk": "3260",
      "timestamp": 1703319705,
      "ems": null
    },
    {
      "latitude": 39.226273,
      "longitude": -8.061158,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 218,
      "squawk": "3260",
      "timestamp": 1703319708,
      "ems": null
    },
    {
      "latitude": 39.225494,
      "longitude": -8.061934,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703319711,
      "ems": null
    },
    {
      "latitude": 39.22459,
      "longitude": -8.062622,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703319714,
      "ems": null
    },
    {
      "latitude": 39.223755,
      "longitude": -8.063128,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703319717,
      "ems": null
    },
    {
      "latitude": 39.222839,
      "longitude": -8.063666,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319720,
      "ems": null
    },
    {
      "latitude": 39.221878,
      "longitude": -8.064144,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319723,
      "ems": null
    },
    {
      "latitude": 39.220959,
      "longitude": -8.064636,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319726,
      "ems": null
    },
    {
      "latitude": 39.220028,
      "longitude": -8.065125,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703319730,
      "ems": null
    },
    {
      "latitude": 39.219223,
      "longitude": -8.065457,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703319732,
      "ems": null
    },
    {
      "latitude": 39.218258,
      "longitude": -8.065857,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319735,
      "ems": null
    },
    {
      "latitude": 39.217255,
      "longitude": -8.066294,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319739,
      "ems": null
    },
    {
      "latitude": 39.216209,
      "longitude": -8.066711,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 196,
      "squawk": "3260",
      "timestamp": 1703319742,
      "ems": null
    },
    {
      "latitude": 39.215195,
      "longitude": -8.06707,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703319745,
      "ems": null
    },
    {
      "latitude": 39.212673,
      "longitude": -8.068665,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703319753,
      "ems": null
    },
    {
      "latitude": 39.211761,
      "longitude": -8.069279,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703319757,
      "ems": null
    },
    {
      "latitude": 39.210983,
      "longitude": -8.069817,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703319759,
      "ems": null
    },
    {
      "latitude": 39.209976,
      "longitude": -8.070533,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703319763,
      "ems": null
    },
    {
      "latitude": 39.209381,
      "longitude": -8.070831,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703319764,
      "ems": null
    },
    {
      "latitude": 39.208099,
      "longitude": -8.071608,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703319768,
      "ems": null
    },
    {
      "latitude": 39.207047,
      "longitude": -8.072205,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703319771,
      "ems": null
    },
    {
      "latitude": 39.205921,
      "longitude": -8.072876,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703319774,
      "ems": null
    },
    {
      "latitude": 39.202606,
      "longitude": -8.074653,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703319783,
      "ems": null
    },
    {
      "latitude": 39.201591,
      "longitude": -8.075256,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703319786,
      "ems": null
    },
    {
      "latitude": 39.200546,
      "longitude": -8.075788,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319789,
      "ems": null
    },
    {
      "latitude": 39.197205,
      "longitude": -8.077579,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703319799,
      "ems": null
    },
    {
      "latitude": 39.193817,
      "longitude": -8.07919,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "3260",
      "timestamp": 1703319807,
      "ems": null
    },
    {
      "latitude": 39.191483,
      "longitude": -8.080146,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319813,
      "ems": null
    },
    {
      "latitude": 39.190094,
      "longitude": -8.080688,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "3260",
      "timestamp": 1703319817,
      "ems": null
    },
    {
      "latitude": 39.188931,
      "longitude": -8.081177,
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
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319820,
      "ems": null
    },
    {
      "latitude": 39.187767,
      "longitude": -8.081665,
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
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319823,
      "ems": null
    },
    {
      "latitude": 39.186649,
      "longitude": -8.082092,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "3260",
      "timestamp": 1703319826,
      "ems": null
    },
    {
      "latitude": 39.183018,
      "longitude": -8.083618,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 198,
      "squawk": "3260",
      "timestamp": 1703319835,
      "ems": null
    },
    {
      "latitude": 39.179306,
      "longitude": -8.08528,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703319843,
      "ems": null
    },
    {
      "latitude": 39.175571,
      "longitude": -8.087097,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703319853,
      "ems": null
    },
    {
      "latitude": 39.174313,
      "longitude": -8.087708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319856,
      "ems": null
    },
    {
      "latitude": 39.173126,
      "longitude": -8.088386,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319859,
      "ems": null
    },
    {
      "latitude": 39.17194,
      "longitude": -8.088989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703319862,
      "ems": null
    },
    {
      "latitude": 39.170013,
      "longitude": -8.090117,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703319868,
      "ems": null
    },
    {
      "latitude": 39.168869,
      "longitude": -8.090774,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703319870,
      "ems": null
    },
    {
      "latitude": 39.167358,
      "longitude": -8.091789,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319874,
      "ems": null
    },
    {
      "latitude": 39.16626,
      "longitude": -8.092505,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319877,
      "ems": null
    },
    {
      "latitude": 39.165237,
      "longitude": -8.093201,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703319880,
      "ems": null
    },
    {
      "latitude": 39.162022,
      "longitude": -8.095215,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319889,
      "ems": null
    },
    {
      "latitude": 39.160858,
      "longitude": -8.096069,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703319892,
      "ems": null
    },
    {
      "latitude": 39.159851,
      "longitude": -8.096745,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703319895,
      "ems": null
    },
    {
      "latitude": 39.156784,
      "longitude": -8.098775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319904,
      "ems": null
    },
    {
      "latitude": 39.153458,
      "longitude": -8.101013,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319913,
      "ems": null
    },
    {
      "latitude": 39.151035,
      "longitude": -8.102539,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703319920,
      "ems": null
    },
    {
      "latitude": 39.149506,
      "longitude": -8.103373,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703319925,
      "ems": null
    },
    {
      "latitude": 39.148361,
      "longitude": -8.10397,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703319928,
      "ems": null
    },
    {
      "latitude": 39.147263,
      "longitude": -8.104506,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703319931,
      "ems": null
    },
    {
      "latitude": 39.14629,
      "longitude": -8.10498,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703319933,
      "ems": null
    },
    {
      "latitude": 39.14296,
      "longitude": -8.107074,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703319943,
      "ems": null
    },
    {
      "latitude": 39.141724,
      "longitude": -8.108209,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703319947,
      "ems": null
    },
    {
      "latitude": 39.1409,
      "longitude": -8.109045,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 218,
      "squawk": "3260",
      "timestamp": 1703319950,
      "ems": null
    },
    {
      "latitude": 39.140331,
      "longitude": -8.109619,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703319952,
      "ems": null
    },
    {
      "latitude": 39.139446,
      "longitude": -8.110535,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703319955,
      "ems": null
    },
    {
      "latitude": 39.138245,
      "longitude": -8.111671,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703319959,
      "ems": null
    },
    {
      "latitude": 39.137329,
      "longitude": -8.112508,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703319962,
      "ems": null
    },
    {
      "latitude": 39.13678,
      "longitude": -8.112986,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703319964,
      "ems": null
    },
    {
      "latitude": 39.135452,
      "longitude": -8.11412,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703319967,
      "ems": null
    },
    {
      "latitude": 39.132477,
      "longitude": -8.116628,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703319976,
      "ems": null
    },
    {
      "latitude": 39.131439,
      "longitude": -8.117432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703319980,
      "ems": null
    },
    {
      "latitude": 39.130646,
      "longitude": -8.11806,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703319982,
      "ems": null
    },
    {
      "latitude": 39.12941,
      "longitude": -8.119016,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703319986,
      "ems": null
    },
    {
      "latitude": 39.128265,
      "longitude": -8.119792,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319989,
      "ems": null
    },
    {
      "latitude": 39.128036,
      "longitude": -8.119911,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319989,
      "ems": null
    },
    {
      "latitude": 39.127121,
      "longitude": -8.120508,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703319993,
      "ems": null
    },
    {
      "latitude": 39.125992,
      "longitude": -8.121277,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703319995,
      "ems": null
    },
    {
      "latitude": 39.124741,
      "longitude": -8.122061,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703319999,
      "ems": null
    },
    {
      "latitude": 39.123852,
      "longitude": -8.122681,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703320001,
      "ems": null
    },
    {
      "latitude": 39.121628,
      "longitude": -8.12421,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703320008,
      "ems": null
    },
    {
      "latitude": 39.120346,
      "longitude": -8.124987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703320011,
      "ems": null
    },
    {
      "latitude": 39.119385,
      "longitude": -8.125584,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320013,
      "ems": null
    },
    {
      "latitude": 39.116215,
      "longitude": -8.127441,
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703320023,
      "ems": null
    },
    {
      "latitude": 39.1138,
      "longitude": -8.128748,
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
      "heading": 202,
      "squawk": "3260",
      "timestamp": 1703320029,
      "ems": null
    },
    {
      "latitude": 39.112289,
      "longitude": -8.129524,
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
      "heading": 201,
      "squawk": "3260",
      "timestamp": 1703320033,
      "ems": null
    },
    {
      "latitude": 39.111008,
      "longitude": -8.130121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703320036,
      "ems": null
    },
    {
      "latitude": 39.107651,
      "longitude": -8.13208,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703320045,
      "ems": null
    },
    {
      "latitude": 39.10556,
      "longitude": -8.133466,
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703320051,
      "ems": null
    },
    {
      "latitude": 39.104393,
      "longitude": -8.134277,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703320054,
      "ems": null
    },
    {
      "latitude": 39.103462,
      "longitude": -8.134949,
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703320057,
      "ems": null
    },
    {
      "latitude": 39.102345,
      "longitude": -8.135742,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703320060,
      "ems": null
    },
    {
      "latitude": 39.101166,
      "longitude": -8.13663,
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
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703320063,
      "ems": null
    },
    {
      "latitude": 39.100109,
      "longitude": -8.13739,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703320067,
      "ems": null
    },
    {
      "latitude": 39.099037,
      "longitude": -8.138184,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703320069,
      "ems": null
    },
    {
      "latitude": 39.096176,
      "longitude": -8.140033,
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703320079,
      "ems": null
    },
    {
      "latitude": 39.092148,
      "longitude": -8.142601,
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
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703320088,
      "ems": null
    },
    {
      "latitude": 39.088799,
      "longitude": -8.144775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703320097,
      "ems": null
    },
    {
      "latitude": 39.086098,
      "longitude": -8.146484,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703320104,
      "ems": null
    },
    {
      "latitude": 39.082764,
      "longitude": -8.148512,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320113,
      "ems": null
    },
    {
      "latitude": 39.079578,
      "longitude": -8.15033,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320122,
      "ems": null
    },
    {
      "latitude": 39.076035,
      "longitude": -8.152333,
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
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703320131,
      "ems": null
    },
    {
      "latitude": 39.072411,
      "longitude": -8.154358,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320140,
      "ems": null
    },
    {
      "latitude": 39.068874,
      "longitude": -8.156433,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320149,
      "ems": null
    },
    {
      "latitude": 39.065567,
      "longitude": -8.158386,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703320158,
      "ems": null
    },
    {
      "latitude": 39.061981,
      "longitude": -8.160461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703320167,
      "ems": null
    },
    {
      "latitude": 39.059784,
      "longitude": -8.161946,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703320173,
      "ems": null
    },
    {
      "latitude": 39.058777,
      "longitude": -8.163021,
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
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703320176,
      "ems": null
    },
    {
      "latitude": 39.058228,
      "longitude": -8.163618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "3260",
      "timestamp": 1703320179,
      "ems": null
    },
    {
      "latitude": 39.057186,
      "longitude": -8.165222,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 231,
      "squawk": "3260",
      "timestamp": 1703320182,
      "ems": null
    },
    {
      "latitude": 39.056488,
      "longitude": -8.166565,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "3260",
      "timestamp": 1703320185,
      "ems": null
    },
    {
      "latitude": 39.055885,
      "longitude": -8.168274,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703320188,
      "ems": null
    },
    {
      "latitude": 39.055557,
      "longitude": -8.169861,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703320191,
      "ems": null
    },
    {
      "latitude": 39.055374,
      "longitude": -8.171448,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "3260",
      "timestamp": 1703320194,
      "ems": null
    },
    {
      "latitude": 39.055298,
      "longitude": -8.173052,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 267,
      "squawk": "3260",
      "timestamp": 1703320197,
      "ems": null
    },
    {
      "latitude": 39.055325,
      "longitude": -8.174744,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "3260",
      "timestamp": 1703320200,
      "ems": null
    },
    {
      "latitude": 39.055466,
      "longitude": -8.176758,
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
      "heading": 275,
      "squawk": "3260",
      "timestamp": 1703320203,
      "ems": null
    },
    {
      "latitude": 39.055664,
      "longitude": -8.178605,
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
      "heading": 278,
      "squawk": "3260",
      "timestamp": 1703320207,
      "ems": null
    },
    {
      "latitude": 39.055885,
      "longitude": -8.180298,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 281,
      "squawk": "3260",
      "timestamp": 1703320209,
      "ems": null
    },
    {
      "latitude": 39.056213,
      "longitude": -8.182128,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 283,
      "squawk": "3260",
      "timestamp": 1703320213,
      "ems": null
    },
    {
      "latitude": 39.056583,
      "longitude": -8.183777,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 286,
      "squawk": "3260",
      "timestamp": 1703320215,
      "ems": null
    },
    {
      "latitude": 39.057049,
      "longitude": -8.185486,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320218,
      "ems": null
    },
    {
      "latitude": 39.057468,
      "longitude": -8.187012,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320221,
      "ems": null
    },
    {
      "latitude": 39.057907,
      "longitude": -8.188815,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320225,
      "ems": null
    },
    {
      "latitude": 39.058353,
      "longitude": -8.190308,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320228,
      "ems": null
    },
    {
      "latitude": 39.058777,
      "longitude": -8.1918,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320230,
      "ems": null
    },
    {
      "latitude": 39.059284,
      "longitude": -8.193542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320234,
      "ems": null
    },
    {
      "latitude": 39.05975,
      "longitude": -8.195007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320236,
      "ems": null
    },
    {
      "latitude": 39.060307,
      "longitude": -8.196899,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320240,
      "ems": null
    },
    {
      "latitude": 39.060745,
      "longitude": -8.198607,
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
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320243,
      "ems": null
    },
    {
      "latitude": 39.061844,
      "longitude": -8.202548,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320252,
      "ems": null
    },
    {
      "latitude": 39.063126,
      "longitude": -8.20625,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320261,
      "ems": null
    },
    {
      "latitude": 39.064495,
      "longitude": -8.210083,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320270,
      "ems": null
    },
    {
      "latitude": 39.0658,
      "longitude": -8.213989,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320279,
      "ems": null
    },
    {
      "latitude": 39.067108,
      "longitude": -8.217953,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320288,
      "ems": null
    },
    {
      "latitude": 39.068436,
      "longitude": -8.221833,
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
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320297,
      "ems": null
    },
    {
      "latitude": 39.069717,
      "longitude": -8.226312,
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
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320306,
      "ems": null
    },
    {
      "latitude": 39.070129,
      "longitude": -8.227864,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320309,
      "ems": null
    },
    {
      "latitude": 39.070454,
      "longitude": -8.229309,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 286,
      "squawk": "3260",
      "timestamp": 1703320312,
      "ems": null
    },
    {
      "latitude": 39.070908,
      "longitude": -8.231089,
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
      "heading": 287,
      "squawk": "3260",
      "timestamp": 1703320315,
      "ems": null
    },
    {
      "latitude": 39.071136,
      "longitude": -8.232223,
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
      "heading": 286,
      "squawk": "3260",
      "timestamp": 1703320318,
      "ems": null
    },
    {
      "latitude": 39.071548,
      "longitude": -8.234015,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 285,
      "squawk": "3260",
      "timestamp": 1703320321,
      "ems": null
    },
    {
      "latitude": 39.071915,
      "longitude": -8.235686,
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
      "heading": 285,
      "squawk": "3260",
      "timestamp": 1703320324,
      "ems": null
    },
    {
      "latitude": 39.072235,
      "longitude": -8.237238,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 285,
      "squawk": "3260",
      "timestamp": 1703320327,
      "ems": null
    },
    {
      "latitude": 39.072598,
      "longitude": -8.238831,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 284,
      "squawk": "3260",
      "timestamp": 1703320330,
      "ems": null
    },
    {
      "latitude": 39.07362,
      "longitude": -8.243835,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 284,
      "squawk": "3260",
      "timestamp": 1703320340,
      "ems": null
    },
    {
      "latitude": 39.074661,
      "longitude": -8.248822,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 286,
      "squawk": "3260",
      "timestamp": 1703320348,
      "ems": null
    },
    {
      "latitude": 39.075996,
      "longitude": -8.254089,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320358,
      "ems": null
    },
    {
      "latitude": 39.076492,
      "longitude": -8.255748,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320361,
      "ems": null
    },
    {
      "latitude": 39.077065,
      "longitude": -8.257446,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320364,
      "ems": null
    },
    {
      "latitude": 39.077637,
      "longitude": -8.259211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320367,
      "ems": null
    },
    {
      "latitude": 39.078232,
      "longitude": -8.260823,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320370,
      "ems": null
    },
    {
      "latitude": 39.078835,
      "longitude": -8.262512,
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320373,
      "ems": null
    },
    {
      "latitude": 39.079422,
      "longitude": -8.264286,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320376,
      "ems": null
    },
    {
      "latitude": 39.079971,
      "longitude": -8.265899,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320379,
      "ems": null
    },
    {
      "latitude": 39.080566,
      "longitude": -8.267749,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320382,
      "ems": null
    },
    {
      "latitude": 39.081116,
      "longitude": -8.269348,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320384,
      "ems": null
    },
    {
      "latitude": 39.082993,
      "longitude": -8.274675,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320394,
      "ems": null
    },
    {
      "latitude": 39.084869,
      "longitude": -8.279691,
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
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320403,
      "ems": null
    },
    {
      "latitude": 39.086792,
      "longitude": -8.284945,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320412,
      "ems": null
    },
    {
      "latitude": 39.088703,
      "longitude": -8.290344,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320421,
      "ems": null
    },
    {
      "latitude": 39.090546,
      "longitude": -8.295692,
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320430,
      "ems": null
    },
    {
      "latitude": 39.092331,
      "longitude": -8.300768,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320439,
      "ems": null
    },
    {
      "latitude": 39.094337,
      "longitude": -8.306091,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320448,
      "ems": null
    },
    {
      "latitude": 39.096268,
      "longitude": -8.311276,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320457,
      "ems": null
    },
    {
      "latitude": 39.098152,
      "longitude": -8.316406,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320466,
      "ems": null
    },
    {
      "latitude": 39.09927,
      "longitude": -8.320007,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320472,
      "ems": null
    },
    {
      "latitude": 39.100899,
      "longitude": -8.324951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320481,
      "ems": null
    },
    {
      "latitude": 39.102722,
      "longitude": -8.330145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320490,
      "ems": null
    },
    {
      "latitude": 39.104507,
      "longitude": -8.33516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320499,
      "ems": null
    },
    {
      "latitude": 39.105103,
      "longitude": -8.336832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320502,
      "ems": null
    },
    {
      "latitude": 39.106888,
      "longitude": -8.341967,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320512,
      "ems": null
    },
    {
      "latitude": 39.10849,
      "longitude": -8.346863,
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
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320520,
      "ems": null
    },
    {
      "latitude": 39.110138,
      "longitude": -8.351997,
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
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320529,
      "ems": null
    },
    {
      "latitude": 39.111832,
      "longitude": -8.356954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320539,
      "ems": null
    },
    {
      "latitude": 39.113525,
      "longitude": -8.362088,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320548,
      "ems": null
    },
    {
      "latitude": 39.115284,
      "longitude": -8.366943,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320557,
      "ems": null
    },
    {
      "latitude": 39.1171,
      "longitude": -8.372009,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320566,
      "ems": null
    },
    {
      "latitude": 39.118973,
      "longitude": -8.377015,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320575,
      "ems": null
    },
    {
      "latitude": 39.121033,
      "longitude": -8.382091,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703320584,
      "ems": null
    },
    {
      "latitude": 39.123104,
      "longitude": -8.387268,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320593,
      "ems": null
    },
    {
      "latitude": 39.125061,
      "longitude": -8.392241,
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320602,
      "ems": null
    },
    {
      "latitude": 39.126366,
      "longitude": -8.39563,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320608,
      "ems": null
    },
    {
      "latitude": 39.127533,
      "longitude": -8.398929,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320614,
      "ems": null
    },
    {
      "latitude": 39.12925,
      "longitude": -8.403992,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320623,
      "ems": null
    },
    {
      "latitude": 39.131065,
      "longitude": -8.40918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320632,
      "ems": null
    },
    {
      "latitude": 39.13279,
      "longitude": -8.414429,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320642,
      "ems": null
    },
    {
      "latitude": 39.134354,
      "longitude": -8.419707,
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
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320651,
      "ems": null
    },
    {
      "latitude": 39.134857,
      "longitude": -8.421438,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320654,
      "ems": null
    },
    {
      "latitude": 39.135258,
      "longitude": -8.423035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320656,
      "ems": null
    },
    {
      "latitude": 39.135723,
      "longitude": -8.424805,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "3260",
      "timestamp": 1703320659,
      "ems": null
    },
    {
      "latitude": 39.136234,
      "longitude": -8.426819,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320663,
      "ems": null
    },
    {
      "latitude": 39.136604,
      "longitude": -8.428345,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "3260",
      "timestamp": 1703320665,
      "ems": null
    },
    {
      "latitude": 39.138107,
      "longitude": -8.433917,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 289,
      "squawk": "3260",
      "timestamp": 1703320675,
      "ems": null
    },
    {
      "latitude": 39.139538,
      "longitude": -8.438904,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320684,
      "ems": null
    },
    {
      "latitude": 39.141029,
      "longitude": -8.444153,
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
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320693,
      "ems": null
    },
    {
      "latitude": 39.142593,
      "longitude": -8.449083,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320702,
      "ems": null
    },
    {
      "latitude": 39.143311,
      "longitude": -8.45105,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320705,
      "ems": null
    },
    {
      "latitude": 39.143875,
      "longitude": -8.452666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320708,
      "ems": null
    },
    {
      "latitude": 39.144566,
      "longitude": -8.454346,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320711,
      "ems": null
    },
    {
      "latitude": 39.145126,
      "longitude": -8.455811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320714,
      "ems": null
    },
    {
      "latitude": 39.145824,
      "longitude": -8.457581,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320717,
      "ems": null
    },
    {
      "latitude": 39.147629,
      "longitude": -8.462816,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320726,
      "ems": null
    },
    {
      "latitude": 39.149223,
      "longitude": -8.467773,
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
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320735,
      "ems": null
    },
    {
      "latitude": 39.149734,
      "longitude": -8.469482,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320738,
      "ems": null
    },
    {
      "latitude": 39.15033,
      "longitude": -8.471295,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320741,
      "ems": null
    },
    {
      "latitude": 39.150803,
      "longitude": -8.4729,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320744,
      "ems": null
    },
    {
      "latitude": 39.152386,
      "longitude": -8.478088,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320753,
      "ems": null
    },
    {
      "latitude": 39.154018,
      "longitude": -8.48291,
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320762,
      "ems": null
    },
    {
      "latitude": 39.155693,
      "longitude": -8.487976,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "3260",
      "timestamp": 1703320771,
      "ems": null
    },
    {
      "latitude": 39.157333,
      "longitude": -8.492849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320780,
      "ems": null
    },
    {
      "latitude": 39.15921,
      "longitude": -8.497925,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320789,
      "ems": null
    },
    {
      "latitude": 39.161133,
      "longitude": -8.503119,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320799,
      "ems": null
    },
    {
      "latitude": 39.162964,
      "longitude": -8.508195,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320808,
      "ems": null
    },
    {
      "latitude": 39.164932,
      "longitude": -8.51339,
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
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320817,
      "ems": null
    },
    {
      "latitude": 39.166679,
      "longitude": -8.518127,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "3260",
      "timestamp": 1703320826,
      "ems": null
    },
    {
      "latitude": 39.168728,
      "longitude": -8.523376,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320835,
      "ems": null
    },
    {
      "latitude": 39.170609,
      "longitude": -8.528197,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320844,
      "ems": null
    },
    {
      "latitude": 39.172577,
      "longitude": -8.533093,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320853,
      "ems": null
    },
    {
      "latitude": 39.174637,
      "longitude": -8.537989,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703320862,
      "ems": null
    },
    {
      "latitude": 39.176788,
      "longitude": -8.542706,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "3260",
      "timestamp": 1703320871,
      "ems": null
    },
    {
      "latitude": 39.179062,
      "longitude": -8.547607,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "3260",
      "timestamp": 1703320880,
      "ems": null
    },
    {
      "latitude": 39.181015,
      "longitude": -8.552368,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320889,
      "ems": null
    },
    {
      "latitude": 39.182831,
      "longitude": -8.557215,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320898,
      "ems": null
    },
    {
      "latitude": 39.183517,
      "longitude": -8.559186,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320901,
      "ems": null
    },
    {
      "latitude": 39.18409,
      "longitude": -8.560791,
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
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320904,
      "ems": null
    },
    {
      "latitude": 39.186081,
      "longitude": -8.565932,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320913,
      "ems": null
    },
    {
      "latitude": 39.188095,
      "longitude": -8.570769,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703320922,
      "ems": null
    },
    {
      "latitude": 39.190189,
      "longitude": -8.575989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "3260",
      "timestamp": 1703320932,
      "ems": null
    },
    {
      "latitude": 39.192234,
      "longitude": -8.580811,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "3260",
      "timestamp": 1703320940,
      "ems": null
    },
    {
      "latitude": 39.194283,
      "longitude": -8.585754,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703320950,
      "ems": null
    },
    {
      "latitude": 39.196106,
      "longitude": -8.590772,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320958,
      "ems": null
    },
    {
      "latitude": 39.196705,
      "longitude": -8.592529,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320961,
      "ems": null
    },
    {
      "latitude": 39.197296,
      "longitude": -8.594174,
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
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703320964,
      "ems": null
    },
    {
      "latitude": 39.199078,
      "longitude": -8.599304,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703320973,
      "ems": null
    },
    {
      "latitude": 39.200821,
      "longitude": -8.604384,
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
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320983,
      "ems": null
    },
    {
      "latitude": 39.201324,
      "longitude": -8.606116,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "3260",
      "timestamp": 1703320986,
      "ems": null
    },
    {
      "latitude": 39.20285,
      "longitude": -8.611267,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703320994,
      "ems": null
    },
    {
      "latitude": 39.204529,
      "longitude": -8.616326,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703321003,
      "ems": null
    },
    {
      "latitude": 39.206062,
      "longitude": -8.621399,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703321012,
      "ems": null
    },
    {
      "latitude": 39.207321,
      "longitude": -8.625044,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3260",
      "timestamp": 1703321019,
      "ems": null
    },
    {
      "latitude": 39.209106,
      "longitude": -8.62994,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3260",
      "timestamp": 1703321028,
      "ems": null
    },
    {
      "latitude": 39.209839,
      "longitude": -8.631552,
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
      "heading": 300,
      "squawk": "3260",
      "timestamp": 1703321031,
      "ems": null
    },
    {
      "latitude": 39.210579,
      "longitude": -8.633179,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "3260",
      "timestamp": 1703321034,
      "ems": null
    },
    {
      "latitude": 39.211369,
      "longitude": -8.634827,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 301,
      "squawk": "3260",
      "timestamp": 1703321037,
      "ems": null
    },
    {
      "latitude": 39.212112,
      "longitude": -8.636292,
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
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703321039,
      "ems": null
    },
    {
      "latitude": 39.212677,
      "longitude": -8.637403,
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
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703321042,
      "ems": null
    },
    {
      "latitude": 39.213043,
      "longitude": -8.63812,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321045,
      "ems": null
    },
    {
      "latitude": 39.214691,
      "longitude": -8.640926,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321049,
      "ems": null
    },
    {
      "latitude": 39.215561,
      "longitude": -8.642419,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321052,
      "ems": null
    },
    {
      "latitude": 39.216305,
      "longitude": -8.643799,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703321054,
      "ems": null
    },
    {
      "latitude": 39.217209,
      "longitude": -8.645404,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703321058,
      "ems": null
    },
    {
      "latitude": 39.218025,
      "longitude": -8.646851,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321060,
      "ems": null
    },
    {
      "latitude": 39.218903,
      "longitude": -8.64839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321064,
      "ems": null
    },
    {
      "latitude": 39.219818,
      "longitude": -8.649942,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321067,
      "ems": null
    },
    {
      "latitude": 39.222309,
      "longitude": -8.654175,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703321076,
      "ems": null
    },
    {
      "latitude": 39.224777,
      "longitude": -8.658325,
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
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321084,
      "ems": null
    },
    {
      "latitude": 39.227428,
      "longitude": -8.662903,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703321094,
      "ems": null
    },
    {
      "latitude": 39.230129,
      "longitude": -8.66803,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703321103,
      "ems": null
    },
    {
      "latitude": 39.232727,
      "longitude": -8.67287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "3260",
      "timestamp": 1703321112,
      "ems": null
    },
    {
      "latitude": 39.235382,
      "longitude": -8.677647,
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
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703321121,
      "ems": null
    },
    {
      "latitude": 39.238091,
      "longitude": -8.68219,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703321130,
      "ems": null
    },
    {
      "latitude": 39.240738,
      "longitude": -8.686663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703321139,
      "ems": null
    },
    {
      "latitude": 39.242558,
      "longitude": -8.689453,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703321145,
      "ems": null
    },
    {
      "latitude": 39.243896,
      "longitude": -8.690544,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 336,
      "squawk": "3260",
      "timestamp": 1703321149,
      "ems": null
    },
    {
      "latitude": 39.245178,
      "longitude": -8.690603,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "3260",
      "timestamp": 1703321151,
      "ems": null
    },
    {
      "latitude": 39.246414,
      "longitude": -8.689768,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321154,
      "ems": null
    },
    {
      "latitude": 39.24733,
      "longitude": -8.688633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 44,
      "squawk": "3260",
      "timestamp": 1703321157,
      "ems": null
    },
    {
      "latitude": 39.248337,
      "longitude": -8.68732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "3260",
      "timestamp": 1703321161,
      "ems": null
    },
    {
      "latitude": 39.249298,
      "longitude": -8.686066,
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703321164,
      "ems": null
    },
    {
      "latitude": 39.250214,
      "longitude": -8.684991,
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
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703321166,
      "ems": null
    },
    {
      "latitude": 39.251266,
      "longitude": -8.683797,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321170,
      "ems": null
    },
    {
      "latitude": 39.252289,
      "longitude": -8.682861,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321172,
      "ems": null
    },
    {
      "latitude": 39.253189,
      "longitude": -8.682006,
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321175,
      "ems": null
    },
    {
      "latitude": 39.254337,
      "longitude": -8.680908,
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321178,
      "ems": null
    },
    {
      "latitude": 39.255432,
      "longitude": -8.679915,
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321181,
      "ems": null
    },
    {
      "latitude": 39.257721,
      "longitude": -8.677826,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321188,
      "ems": null
    },
    {
      "latitude": 39.258804,
      "longitude": -8.676819,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321190,
      "ems": null
    },
    {
      "latitude": 39.260063,
      "longitude": -8.67572,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321194,
      "ems": null
    },
    {
      "latitude": 39.260994,
      "longitude": -8.674866,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321196,
      "ems": null
    },
    {
      "latitude": 39.262249,
      "longitude": -8.673828,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321200,
      "ems": null
    },
    {
      "latitude": 39.265366,
      "longitude": -8.671079,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321208,
      "ems": null
    },
    {
      "latitude": 39.26886,
      "longitude": -8.667969,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321218,
      "ems": null
    },
    {
      "latitude": 39.272121,
      "longitude": -8.6651,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321227,
      "ems": null
    },
    {
      "latitude": 39.275116,
      "longitude": -8.662361,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321236,
      "ems": null
    },
    {
      "latitude": 39.278824,
      "longitude": -8.658838,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321245,
      "ems": null
    },
    {
      "latitude": 39.280777,
      "longitude": -8.656799,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321251,
      "ems": null
    },
    {
      "latitude": 39.281803,
      "longitude": -8.655762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321254,
      "ems": null
    },
    {
      "latitude": 39.282825,
      "longitude": -8.654663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321257,
      "ems": null
    },
    {
      "latitude": 39.285828,
      "longitude": -8.651673,
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321266,
      "ems": null
    },
    {
      "latitude": 39.289032,
      "longitude": -8.648569,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321275,
      "ems": null
    },
    {
      "latitude": 39.292278,
      "longitude": -8.645386,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321284,
      "ems": null
    },
    {
      "latitude": 39.295486,
      "longitude": -8.64206,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703321293,
      "ems": null
    },
    {
      "latitude": 39.298553,
      "longitude": -8.638597,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321302,
      "ems": null
    },
    {
      "latitude": 39.299561,
      "longitude": -8.637464,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703321305,
      "ems": null
    },
    {
      "latitude": 39.30043,
      "longitude": -8.636448,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703321307,
      "ems": null
    },
    {
      "latitude": 39.301449,
      "longitude": -8.635254,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703321310,
      "ems": null
    },
    {
      "latitude": 39.304661,
      "longitude": -8.631592,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703321320,
      "ems": null
    },
    {
      "latitude": 39.307777,
      "longitude": -8.628235,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321329,
      "ems": null
    },
    {
      "latitude": 39.310898,
      "longitude": -8.625,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321338,
      "ems": null
    },
    {
      "latitude": 39.31369,
      "longitude": -8.622009,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321347,
      "ems": null
    },
    {
      "latitude": 39.316681,
      "longitude": -8.618655,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321356,
      "ems": null
    },
    {
      "latitude": 39.319462,
      "longitude": -8.615479,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321365,
      "ems": null
    },
    {
      "latitude": 39.322266,
      "longitude": -8.612326,
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
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703321374,
      "ems": null
    },
    {
      "latitude": 39.324921,
      "longitude": -8.608982,
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703321383,
      "ems": null
    },
    {
      "latitude": 39.325748,
      "longitude": -8.60791,
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703321386,
      "ems": null
    },
    {
      "latitude": 39.328445,
      "longitude": -8.604683,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321395,
      "ems": null
    },
    {
      "latitude": 39.331375,
      "longitude": -8.601399,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321404,
      "ems": null
    },
    {
      "latitude": 39.333427,
      "longitude": -8.599182,
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321410,
      "ems": null
    },
    {
      "latitude": 39.334358,
      "longitude": -8.598206,
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
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321413,
      "ems": null
    },
    {
      "latitude": 39.334991,
      "longitude": -8.597518,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321415,
      "ems": null
    },
    {
      "latitude": 39.336319,
      "longitude": -8.596265,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321419,
      "ems": null
    },
    {
      "latitude": 39.33728,
      "longitude": -8.595368,
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321422,
      "ems": null
    },
    {
      "latitude": 39.338379,
      "longitude": -8.594294,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321425,
      "ems": null
    },
    {
      "latitude": 39.341583,
      "longitude": -8.591129,
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
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321434,
      "ems": null
    },
    {
      "latitude": 39.344742,
      "longitude": -8.587952,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321443,
      "ems": null
    },
    {
      "latitude": 39.348,
      "longitude": -8.5849,
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321452,
      "ems": null
    },
    {
      "latitude": 39.350189,
      "longitude": -8.583069,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703321458,
      "ems": null
    },
    {
      "latitude": 39.351288,
      "longitude": -8.582232,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321461,
      "ems": null
    },
    {
      "latitude": 39.352608,
      "longitude": -8.581299,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703321464,
      "ems": null
    },
    {
      "latitude": 39.353725,
      "longitude": -8.580627,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703321467,
      "ems": null
    },
    {
      "latitude": 39.35503,
      "longitude": -8.579773,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703321470,
      "ems": null
    },
    {
      "latitude": 39.355961,
      "longitude": -8.579163,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703321473,
      "ems": null
    },
    {
      "latitude": 39.357311,
      "longitude": -8.578125,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321476,
      "ems": null
    },
    {
      "latitude": 39.36058,
      "longitude": -8.575366,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321485,
      "ems": null
    },
    {
      "latitude": 39.362915,
      "longitude": -8.573396,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321491,
      "ems": null
    },
    {
      "latitude": 39.364059,
      "longitude": -8.572388,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321494,
      "ems": null
    },
    {
      "latitude": 39.365158,
      "longitude": -8.571486,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321497,
      "ems": null
    },
    {
      "latitude": 39.366249,
      "longitude": -8.570557,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321500,
      "ems": null
    },
    {
      "latitude": 39.367401,
      "longitude": -8.569574,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321503,
      "ems": null
    },
    {
      "latitude": 39.370789,
      "longitude": -8.566709,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321512,
      "ems": null
    },
    {
      "latitude": 39.374161,
      "longitude": -8.563721,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321521,
      "ems": null
    },
    {
      "latitude": 39.377518,
      "longitude": -8.560917,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703321530,
      "ems": null
    },
    {
      "latitude": 39.381042,
      "longitude": -8.557991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703321540,
      "ems": null
    },
    {
      "latitude": 39.384357,
      "longitude": -8.555481,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703321548,
      "ems": null
    },
    {
      "latitude": 39.387802,
      "longitude": -8.552856,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703321558,
      "ems": null
    },
    {
      "latitude": 39.388966,
      "longitude": -8.552063,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703321561,
      "ems": null
    },
    {
      "latitude": 39.390198,
      "longitude": -8.551304,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703321564,
      "ems": null
    },
    {
      "latitude": 39.391159,
      "longitude": -8.550707,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703321566,
      "ems": null
    },
    {
      "latitude": 39.392551,
      "longitude": -8.549866,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703321570,
      "ems": null
    },
    {
      "latitude": 39.393669,
      "longitude": -8.549194,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703321572,
      "ems": null
    },
    {
      "latitude": 39.397297,
      "longitude": -8.546875,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703321582,
      "ems": null
    },
    {
      "latitude": 39.398529,
      "longitude": -8.546109,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703321585,
      "ems": null
    },
    {
      "latitude": 39.402054,
      "longitude": -8.54396,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703321594,
      "ems": null
    },
    {
      "latitude": 39.405579,
      "longitude": -8.541512,
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
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703321603,
      "ems": null
    },
    {
      "latitude": 39.409241,
      "longitude": -8.538825,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321612,
      "ems": null
    },
    {
      "latitude": 39.410381,
      "longitude": -8.538025,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321615,
      "ems": null
    },
    {
      "latitude": 39.413776,
      "longitude": -8.535461,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321624,
      "ems": null
    },
    {
      "latitude": 39.417221,
      "longitude": -8.532715,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703321633,
      "ems": null
    },
    {
      "latitude": 39.420685,
      "longitude": -8.530047,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703321642,
      "ems": null
    },
    {
      "latitude": 39.422653,
      "longitude": -8.528376,
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321648,
      "ems": null
    },
    {
      "latitude": 39.423927,
      "longitude": -8.527283,
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321651,
      "ems": null
    },
    {
      "latitude": 39.427231,
      "longitude": -8.524292,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321660,
      "ems": null
    },
    {
      "latitude": 39.428192,
      "longitude": -8.52342,
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321663,
      "ems": null
    },
    {
      "latitude": 39.429375,
      "longitude": -8.522278,
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703321666,
      "ems": null
    },
    {
      "latitude": 39.430527,
      "longitude": -8.521271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321669,
      "ems": null
    },
    {
      "latitude": 39.433701,
      "longitude": -8.51825,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703321678,
      "ems": null
    },
    {
      "latitude": 39.437008,
      "longitude": -8.515076,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321687,
      "ems": null
    },
    {
      "latitude": 39.440128,
      "longitude": -8.511902,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703321696,
      "ems": null
    },
    {
      "latitude": 39.443665,
      "longitude": -8.508314,
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
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321705,
      "ems": null
    },
    {
      "latitude": 39.447109,
      "longitude": -8.505005,
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
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703321714,
      "ems": null
    },
    {
      "latitude": 39.450321,
      "longitude": -8.501709,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703321723,
      "ems": null
    },
    {
      "latitude": 39.453396,
      "longitude": -8.498352,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703321733,
      "ems": null
    },
    {
      "latitude": 39.455673,
      "longitude": -8.49585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321739,
      "ems": null
    },
    {
      "latitude": 39.456665,
      "longitude": -8.4947,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703321742,
      "ems": null
    },
    {
      "latitude": 39.459549,
      "longitude": -8.491476,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703321750,
      "ems": null
    },
    {
      "latitude": 39.462845,
      "longitude": -8.487915,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 34,
      "squawk": "3260",
      "timestamp": 1703321760,
      "ems": null
    },
    {
      "latitude": 39.464081,
      "longitude": -8.487118,
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
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703321763,
      "ems": null
    },
    {
      "latitude": 39.464539,
      "longitude": -8.486938,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703321764,
      "ems": null
    },
    {
      "latitude": 39.46629,
      "longitude": -8.48645,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703321768,
      "ems": null
    },
    {
      "latitude": 39.467651,
      "longitude": -8.486402,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321771,
      "ems": null
    },
    {
      "latitude": 39.469315,
      "longitude": -8.486328,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703321774,
      "ems": null
    },
    {
      "latitude": 39.470764,
      "longitude": -8.486222,
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703321777,
      "ems": null
    },
    {
      "latitude": 39.472,
      "longitude": -8.486162,
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703321780,
      "ems": null
    },
    {
      "latitude": 39.472961,
      "longitude": -8.486102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321782,
      "ems": null
    },
    {
      "latitude": 39.474808,
      "longitude": -8.486084,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321786,
      "ems": null
    },
    {
      "latitude": 39.476391,
      "longitude": -8.486023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321789,
      "ems": null
    },
    {
      "latitude": 39.4776,
      "longitude": -8.486023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321792,
      "ems": null
    },
    {
      "latitude": 39.479046,
      "longitude": -8.485962,
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321795,
      "ems": null
    },
    {
      "latitude": 39.480698,
      "longitude": -8.485983,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703321798,
      "ems": null
    },
    {
      "latitude": 39.483467,
      "longitude": -8.486084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321804,
      "ems": null
    },
    {
      "latitude": 39.484772,
      "longitude": -8.486206,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703321807,
      "ems": null
    },
    {
      "latitude": 39.486237,
      "longitude": -8.486281,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703321810,
      "ems": null
    },
    {
      "latitude": 39.487656,
      "longitude": -8.486402,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703321813,
      "ems": null
    },
    {
      "latitude": 39.491661,
      "longitude": -8.486633,
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321822,
      "ems": null
    },
    {
      "latitude": 39.495804,
      "longitude": -8.486819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321831,
      "ems": null
    },
    {
      "latitude": 39.499947,
      "longitude": -8.486938,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 360,
      "squawk": "3260",
      "timestamp": 1703321840,
      "ems": null
    },
    {
      "latitude": 39.504227,
      "longitude": -8.486999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703321849,
      "ems": null
    },
    {
      "latitude": 39.507393,
      "longitude": -8.487061,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703321856,
      "ems": null
    },
    {
      "latitude": 39.511322,
      "longitude": -8.487058,
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
      "heading": 360,
      "squawk": "3260",
      "timestamp": 1703321864,
      "ems": null
    },
    {
      "latitude": 39.515633,
      "longitude": -8.486938,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321874,
      "ems": null
    },
    {
      "latitude": 39.519314,
      "longitude": -8.486816,
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
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703321883,
      "ems": null
    },
    {
      "latitude": 39.523968,
      "longitude": -8.486877,
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
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703321892,
      "ems": null
    },
    {
      "latitude": 39.52803,
      "longitude": -8.486938,
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
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703321901,
      "ems": null
    },
    {
      "latitude": 39.532196,
      "longitude": -8.487118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321910,
      "ems": null
    },
    {
      "latitude": 39.536259,
      "longitude": -8.487305,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703321919,
      "ems": null
    },
    {
      "latitude": 39.540619,
      "longitude": -8.487356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703321928,
      "ems": null
    },
    {
      "latitude": 39.544327,
      "longitude": -8.487475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703321937,
      "ems": null
    },
    {
      "latitude": 39.549152,
      "longitude": -8.48761,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703321946,
      "ems": null
    },
    {
      "latitude": 39.553341,
      "longitude": -8.487732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321955,
      "ems": null
    },
    {
      "latitude": 39.557251,
      "longitude": -8.487976,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321964,
      "ems": null
    },
    {
      "latitude": 39.561489,
      "longitude": -8.488281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321973,
      "ems": null
    },
    {
      "latitude": 39.565796,
      "longitude": -8.48855,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703321982,
      "ems": null
    },
    {
      "latitude": 39.569962,
      "longitude": -8.488849,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703321991,
      "ems": null
    },
    {
      "latitude": 39.573593,
      "longitude": -8.488953,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703321999,
      "ems": null
    },
    {
      "latitude": 39.575317,
      "longitude": -8.48879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322003,
      "ems": null
    },
    {
      "latitude": 39.576874,
      "longitude": -8.488491,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322006,
      "ems": null
    },
    {
      "latitude": 39.57724,
      "longitude": -8.488431,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322007,
      "ems": null
    },
    {
      "latitude": 39.578934,
      "longitude": -8.488193,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322011,
      "ems": null
    },
    {
      "latitude": 39.580444,
      "longitude": -8.487894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322014,
      "ems": null
    },
    {
      "latitude": 39.581783,
      "longitude": -8.487732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322017,
      "ems": null
    },
    {
      "latitude": 39.583145,
      "longitude": -8.487475,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322020,
      "ems": null
    },
    {
      "latitude": 39.584518,
      "longitude": -8.487237,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322023,
      "ems": null
    },
    {
      "latitude": 39.585846,
      "longitude": -8.486999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703322026,
      "ems": null
    },
    {
      "latitude": 39.588593,
      "longitude": -8.486759,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322032,
      "ems": null
    },
    {
      "latitude": 39.590073,
      "longitude": -8.487,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703322035,
      "ems": null
    },
    {
      "latitude": 39.591248,
      "longitude": -8.487177,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703322038,
      "ems": null
    },
    {
      "latitude": 39.592678,
      "longitude": -8.487366,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322041,
      "ems": null
    },
    {
      "latitude": 39.59417,
      "longitude": -8.487488,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322044,
      "ems": null
    },
    {
      "latitude": 39.595505,
      "longitude": -8.487655,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322047,
      "ems": null
    },
    {
      "latitude": 39.596634,
      "longitude": -8.487793,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322049,
      "ems": null
    },
    {
      "latitude": 39.59803,
      "longitude": -8.487915,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322053,
      "ems": null
    },
    {
      "latitude": 39.59935,
      "longitude": -8.488132,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322055,
      "ems": null
    },
    {
      "latitude": 39.600826,
      "longitude": -8.488281,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322059,
      "ems": null
    },
    {
      "latitude": 39.604828,
      "longitude": -8.48877,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322068,
      "ems": null
    },
    {
      "latitude": 39.608692,
      "longitude": -8.489258,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703322076,
      "ems": null
    },
    {
      "latitude": 39.612511,
      "longitude": -8.489685,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322085,
      "ems": null
    },
    {
      "latitude": 39.616699,
      "longitude": -8.489868,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703322095,
      "ems": null
    },
    {
      "latitude": 39.620937,
      "longitude": -8.490051,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322104,
      "ems": null
    },
    {
      "latitude": 39.623589,
      "longitude": -8.490173,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322110,
      "ems": null
    },
    {
      "latitude": 39.628242,
      "longitude": -8.490601,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322120,
      "ems": null
    },
    {
      "latitude": 39.632263,
      "longitude": -8.490939,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322129,
      "ems": null
    },
    {
      "latitude": 39.636391,
      "longitude": -8.491394,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322137,
      "ems": null
    },
    {
      "latitude": 39.640549,
      "longitude": -8.491895,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322147,
      "ems": null
    },
    {
      "latitude": 39.644676,
      "longitude": -8.492249,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322156,
      "ems": null
    },
    {
      "latitude": 39.647278,
      "longitude": -8.492252,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703322162,
      "ems": null
    },
    {
      "latitude": 39.648495,
      "longitude": -8.492188,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703322165,
      "ems": null
    },
    {
      "latitude": 39.649841,
      "longitude": -8.492073,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703322168,
      "ems": null
    },
    {
      "latitude": 39.650986,
      "longitude": -8.492014,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "3260",
      "timestamp": 1703322171,
      "ems": null
    },
    {
      "latitude": 39.652637,
      "longitude": -8.491882,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703322174,
      "ems": null
    },
    {
      "latitude": 39.653801,
      "longitude": -8.49176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703322176,
      "ems": null
    },
    {
      "latitude": 39.655151,
      "longitude": -8.491638,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703322180,
      "ems": null
    },
    {
      "latitude": 39.655804,
      "longitude": -8.491577,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703322181,
      "ems": null
    },
    {
      "latitude": 39.656406,
      "longitude": -8.491577,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703322183,
      "ems": null
    },
    {
      "latitude": 39.659573,
      "longitude": -8.49176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703322189,
      "ems": null
    },
    {
      "latitude": 39.661201,
      "longitude": -8.492004,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703322193,
      "ems": null
    },
    {
      "latitude": 39.662567,
      "longitude": -8.492193,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703322196,
      "ems": null
    },
    {
      "latitude": 39.664787,
      "longitude": -8.492432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322201,
      "ems": null
    },
    {
      "latitude": 39.666138,
      "longitude": -8.492551,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322204,
      "ems": null
    },
    {
      "latitude": 39.66758,
      "longitude": -8.492737,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322207,
      "ems": null
    },
    {
      "latitude": 39.668884,
      "longitude": -8.492849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322210,
      "ems": null
    },
    {
      "latitude": 39.670235,
      "longitude": -8.492981,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322213,
      "ems": null
    },
    {
      "latitude": 39.674332,
      "longitude": -8.493446,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703322222,
      "ems": null
    },
    {
      "latitude": 39.678333,
      "longitude": -8.493835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703322230,
      "ems": null
    },
    {
      "latitude": 39.68243,
      "longitude": -8.49408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322239,
      "ems": null
    },
    {
      "latitude": 39.686783,
      "longitude": -8.494223,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322249,
      "ems": null
    },
    {
      "latitude": 39.690857,
      "longitude": -8.494446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703322258,
      "ems": null
    },
    {
      "latitude": 39.694813,
      "longitude": -8.494446,
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
      "heading": 5,
      "squawk": "3260",
      "timestamp": 1703322267,
      "ems": null
    },
    {
      "latitude": 39.696304,
      "longitude": -8.494141,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703322270,
      "ems": null
    },
    {
      "latitude": 39.697559,
      "longitude": -8.493591,
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
      "heading": 21,
      "squawk": "3260",
      "timestamp": 1703322273,
      "ems": null
    },
    {
      "latitude": 39.69873,
      "longitude": -8.492849,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703322276,
      "ems": null
    },
    {
      "latitude": 39.699795,
      "longitude": -8.491821,
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703322279,
      "ems": null
    },
    {
      "latitude": 39.700726,
      "longitude": -8.490662,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "3260",
      "timestamp": 1703322282,
      "ems": null
    },
    {
      "latitude": 39.701385,
      "longitude": -8.489566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703322285,
      "ems": null
    },
    {
      "latitude": 39.702072,
      "longitude": -8.488073,
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
      "heading": 61,
      "squawk": "3260",
      "timestamp": 1703322288,
      "ems": null
    },
    {
      "latitude": 39.702587,
      "longitude": -8.486389,
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
      "heading": 71,
      "squawk": "3260",
      "timestamp": 1703322291,
      "ems": null
    },
    {
      "latitude": 39.702805,
      "longitude": -8.484729,
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
      "heading": 83,
      "squawk": "3260",
      "timestamp": 1703322294,
      "ems": null
    },
    {
      "latitude": 39.702759,
      "longitude": -8.483117,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703322297,
      "ems": null
    },
    {
      "latitude": 39.702541,
      "longitude": -8.481689,
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
      "heading": 103,
      "squawk": "3260",
      "timestamp": 1703322300,
      "ems": null
    },
    {
      "latitude": 39.702076,
      "longitude": -8.480103,
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
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703322303,
      "ems": null
    },
    {
      "latitude": 39.701385,
      "longitude": -8.478639,
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
      "heading": 123,
      "squawk": "3260",
      "timestamp": 1703322306,
      "ems": null
    },
    {
      "latitude": 39.700726,
      "longitude": -8.4776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 131,
      "squawk": "3260",
      "timestamp": 1703322309,
      "ems": null
    },
    {
      "latitude": 39.6996,
      "longitude": -8.476251,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "3260",
      "timestamp": 1703322312,
      "ems": null
    },
    {
      "latitude": 39.69854,
      "longitude": -8.475281,
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
      "heading": 146,
      "squawk": "3260",
      "timestamp": 1703322315,
      "ems": null
    },
    {
      "latitude": 39.697403,
      "longitude": -8.474519,
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
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703322318,
      "ems": null
    },
    {
      "latitude": 39.696117,
      "longitude": -8.473938,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "3260",
      "timestamp": 1703322321,
      "ems": null
    },
    {
      "latitude": 39.694908,
      "longitude": -8.473694,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703322324,
      "ems": null
    },
    {
      "latitude": 39.69342,
      "longitude": -8.473803,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "3260",
      "timestamp": 1703322327,
      "ems": null
    },
    {
      "latitude": 39.69202,
      "longitude": -8.474365,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "3260",
      "timestamp": 1703322330,
      "ems": null
    },
    {
      "latitude": 39.690765,
      "longitude": -8.475403,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 215,
      "squawk": "3260",
      "timestamp": 1703322334,
      "ems": null
    },
    {
      "latitude": 39.689693,
      "longitude": -8.476501,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703322336,
      "ems": null
    },
    {
      "latitude": 39.688614,
      "longitude": -8.477564,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 216,
      "squawk": "3260",
      "timestamp": 1703322339,
      "ems": null
    },
    {
      "latitude": 39.687424,
      "longitude": -8.478519,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 210,
      "squawk": "3260",
      "timestamp": 1703322342,
      "ems": null
    },
    {
      "latitude": 39.686188,
      "longitude": -8.479415,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703322345,
      "ems": null
    },
    {
      "latitude": 39.685135,
      "longitude": -8.480132,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703322348,
      "ems": null
    },
    {
      "latitude": 39.683689,
      "longitude": -8.481201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322351,
      "ems": null
    },
    {
      "latitude": 39.682388,
      "longitude": -8.482102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3260",
      "timestamp": 1703322355,
      "ems": null
    },
    {
      "latitude": 39.681267,
      "longitude": -8.48291,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322358,
      "ems": null
    },
    {
      "latitude": 39.679916,
      "longitude": -8.483887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322361,
      "ems": null
    },
    {
      "latitude": 39.678753,
      "longitude": -8.484741,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322364,
      "ems": null
    },
    {
      "latitude": 39.677681,
      "longitude": -8.485596,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322367,
      "ems": null
    },
    {
      "latitude": 39.676426,
      "longitude": -8.486511,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "3260",
      "timestamp": 1703322370,
      "ems": null
    },
    {
      "latitude": 39.672821,
      "longitude": -8.488969,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703322379,
      "ems": null
    },
    {
      "latitude": 39.671722,
      "longitude": -8.489685,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322382,
      "ems": null
    },
    {
      "latitude": 39.668106,
      "longitude": -8.491895,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703322391,
      "ems": null
    },
    {
      "latitude": 39.664555,
      "longitude": -8.49408,
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
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703322400,
      "ems": null
    },
    {
      "latitude": 39.662601,
      "longitude": -8.49585,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "3260",
      "timestamp": 1703322406,
      "ems": null
    },
    {
      "latitude": 39.661606,
      "longitude": -8.497328,
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
      "heading": 233,
      "squawk": "3260",
      "timestamp": 1703322409,
      "ems": null
    },
    {
      "latitude": 39.660965,
      "longitude": -8.498641,
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
      "heading": 240,
      "squawk": "3260",
      "timestamp": 1703322412,
      "ems": null
    },
    {
      "latitude": 39.660412,
      "longitude": -8.500305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703322415,
      "ems": null
    },
    {
      "latitude": 39.660133,
      "longitude": -8.501953,
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
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322418,
      "ems": null
    },
    {
      "latitude": 39.660038,
      "longitude": -8.503662,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 268,
      "squawk": "3260",
      "timestamp": 1703322421,
      "ems": null
    },
    {
      "latitude": 39.660187,
      "longitude": -8.505628,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 277,
      "squawk": "3260",
      "timestamp": 1703322424,
      "ems": null
    },
    {
      "latitude": 39.660458,
      "longitude": -8.507141,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 286,
      "squawk": "3260",
      "timestamp": 1703322427,
      "ems": null
    },
    {
      "latitude": 39.661057,
      "longitude": -8.508911,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 296,
      "squawk": "3260",
      "timestamp": 1703322430,
      "ems": null
    },
    {
      "latitude": 39.661789,
      "longitude": -8.510345,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703322433,
      "ems": null
    },
    {
      "latitude": 39.662693,
      "longitude": -8.511719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703322436,
      "ems": null
    },
    {
      "latitude": 39.66362,
      "longitude": -8.512733,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 322,
      "squawk": "3260",
      "timestamp": 1703322439,
      "ems": null
    },
    {
      "latitude": 39.664764,
      "longitude": -8.513628,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 330,
      "squawk": "3260",
      "timestamp": 1703322442,
      "ems": null
    },
    {
      "latitude": 39.666046,
      "longitude": -8.514344,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703322445,
      "ems": null
    },
    {
      "latitude": 39.667347,
      "longitude": -8.514709,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703322448,
      "ems": null
    },
    {
      "latitude": 39.66893,
      "longitude": -8.514763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703322452,
      "ems": null
    },
    {
      "latitude": 39.670212,
      "longitude": -8.514524,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703322454,
      "ems": null
    },
    {
      "latitude": 39.67149,
      "longitude": -8.514038,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 19,
      "squawk": "3260",
      "timestamp": 1703322457,
      "ems": null
    },
    {
      "latitude": 39.672749,
      "longitude": -8.513184,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703322460,
      "ems": null
    },
    {
      "latitude": 39.673958,
      "longitude": -8.512268,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703322463,
      "ems": null
    },
    {
      "latitude": 39.675201,
      "longitude": -8.511359,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703322466,
      "ems": null
    },
    {
      "latitude": 39.676346,
      "longitude": -8.510523,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703322469,
      "ems": null
    },
    {
      "latitude": 39.677536,
      "longitude": -8.509627,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322473,
      "ems": null
    },
    {
      "latitude": 39.678818,
      "longitude": -8.508613,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322476,
      "ems": null
    },
    {
      "latitude": 39.680008,
      "longitude": -8.507657,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703322479,
      "ems": null
    },
    {
      "latitude": 39.681126,
      "longitude": -8.506775,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322482,
      "ems": null
    },
    {
      "latitude": 39.682339,
      "longitude": -8.505859,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322485,
      "ems": null
    },
    {
      "latitude": 39.683395,
      "longitude": -8.50503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703322488,
      "ems": null
    },
    {
      "latitude": 39.686874,
      "longitude": -8.502462,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703322497,
      "ems": null
    },
    {
      "latitude": 39.690079,
      "longitude": -8.500014,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322506,
      "ems": null
    },
    {
      "latitude": 39.693466,
      "longitude": -8.497447,
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703322515,
      "ems": null
    },
    {
      "latitude": 39.697048,
      "longitude": -8.494812,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703322524,
      "ems": null
    },
    {
      "latitude": 39.70047,
      "longitude": -8.492372,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703322533,
      "ems": null
    },
    {
      "latitude": 39.703659,
      "longitude": -8.489685,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703322542,
      "ems": null
    },
    {
      "latitude": 39.704269,
      "longitude": -8.48867,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703322545,
      "ems": null
    },
    {
      "latitude": 39.704956,
      "longitude": -8.486878,
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
      "heading": 66,
      "squawk": "3260",
      "timestamp": 1703322548,
      "ems": null
    },
    {
      "latitude": 39.705322,
      "longitude": -8.485327,
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
      "heading": 76,
      "squawk": "3260",
      "timestamp": 1703322551,
      "ems": null
    },
    {
      "latitude": 39.70546,
      "longitude": -8.483535,
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
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703322554,
      "ems": null
    },
    {
      "latitude": 39.705322,
      "longitude": -8.481744,
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
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703322557,
      "ems": null
    },
    {
      "latitude": 39.705048,
      "longitude": -8.48031,
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
      "heading": 107,
      "squawk": "3260",
      "timestamp": 1703322560,
      "ems": null
    },
    {
      "latitude": 39.704453,
      "longitude": -8.47858,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "3260",
      "timestamp": 1703322563,
      "ems": null
    },
    {
      "latitude": 39.70372,
      "longitude": -8.477206,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "3260",
      "timestamp": 1703322566,
      "ems": null
    },
    {
      "latitude": 39.702942,
      "longitude": -8.476131,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "3260",
      "timestamp": 1703322569,
      "ems": null
    },
    {
      "latitude": 39.701935,
      "longitude": -8.475037,
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
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703322572,
      "ems": null
    },
    {
      "latitude": 39.700771,
      "longitude": -8.474182,
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
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703322575,
      "ems": null
    },
    {
      "latitude": 39.699375,
      "longitude": -8.473572,
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
      "heading": 162,
      "squawk": "3260",
      "timestamp": 1703322578,
      "ems": null
    },
    {
      "latitude": 39.698135,
      "longitude": -8.473206,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "3260",
      "timestamp": 1703322581,
      "ems": null
    },
    {
      "latitude": 39.696716,
      "longitude": -8.473145,
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
      "heading": 178,
      "squawk": "3260",
      "timestamp": 1703322585,
      "ems": null
    },
    {
      "latitude": 39.695389,
      "longitude": -8.473325,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 187,
      "squawk": "3260",
      "timestamp": 1703322588,
      "ems": null
    },
    {
      "latitude": 39.694115,
      "longitude": -8.473755,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703322590,
      "ems": null
    },
    {
      "latitude": 39.693092,
      "longitude": -8.474304,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 206,
      "squawk": "3260",
      "timestamp": 1703322593,
      "ems": null
    },
    {
      "latitude": 39.691879,
      "longitude": -8.475159,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 211,
      "squawk": "3260",
      "timestamp": 1703322596,
      "ems": null
    },
    {
      "latitude": 39.690582,
      "longitude": -8.476311,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703322599,
      "ems": null
    },
    {
      "latitude": 39.689255,
      "longitude": -8.477505,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703322603,
      "ems": null
    },
    {
      "latitude": 39.68811,
      "longitude": -8.478519,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703322606,
      "ems": null
    },
    {
      "latitude": 39.685875,
      "longitude": -8.480469,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "3260",
      "timestamp": 1703322612,
      "ems": null
    },
    {
      "latitude": 39.684757,
      "longitude": -8.481445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703322615,
      "ems": null
    },
    {
      "latitude": 39.683578,
      "longitude": -8.48246,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "3260",
      "timestamp": 1703322618,
      "ems": null
    },
    {
      "latitude": 39.682434,
      "longitude": -8.483416,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703322621,
      "ems": null
    },
    {
      "latitude": 39.681362,
      "longitude": -8.484314,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3260",
      "timestamp": 1703322624,
      "ems": null
    },
    {
      "latitude": 39.678986,
      "longitude": -8.486023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "3260",
      "timestamp": 1703322630,
      "ems": null
    },
    {
      "latitude": 39.677719,
      "longitude": -8.486759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322633,
      "ems": null
    },
    {
      "latitude": 39.676483,
      "longitude": -8.487475,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703322636,
      "ems": null
    },
    {
      "latitude": 39.675121,
      "longitude": -8.48822,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703322639,
      "ems": null
    },
    {
      "latitude": 39.674145,
      "longitude": -8.488831,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703322641,
      "ems": null
    },
    {
      "latitude": 39.672749,
      "longitude": -8.489624,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322645,
      "ems": null
    },
    {
      "latitude": 39.671677,
      "longitude": -8.490222,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703322647,
      "ems": null
    },
    {
      "latitude": 39.670654,
      "longitude": -8.490845,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322650,
      "ems": null
    },
    {
      "latitude": 39.668884,
      "longitude": -8.491895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322654,
      "ems": null
    },
    {
      "latitude": 39.668289,
      "longitude": -8.492193,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "3260",
      "timestamp": 1703322655,
      "ems": null
    },
    {
      "latitude": 39.665497,
      "longitude": -8.494402,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703322663,
      "ems": null
    },
    {
      "latitude": 39.664398,
      "longitude": -8.495835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "3260",
      "timestamp": 1703322666,
      "ems": null
    },
    {
      "latitude": 39.663666,
      "longitude": -8.497209,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "3260",
      "timestamp": 1703322669,
      "ems": null
    },
    {
      "latitude": 39.663208,
      "longitude": -8.498223,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "3260",
      "timestamp": 1703322671,
      "ems": null
    },
    {
      "latitude": 39.662659,
      "longitude": -8.500134,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "3260",
      "timestamp": 1703322675,
      "ems": null
    },
    {
      "latitude": 39.662384,
      "longitude": -8.501865,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322678,
      "ems": null
    },
    {
      "latitude": 39.662228,
      "longitude": -8.503296,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 261,
      "squawk": "3260",
      "timestamp": 1703322680,
      "ems": null
    },
    {
      "latitude": 39.662136,
      "longitude": -8.505493,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "3260",
      "timestamp": 1703322684,
      "ems": null
    },
    {
      "latitude": 39.661995,
      "longitude": -8.507507,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703322687,
      "ems": null
    },
    {
      "latitude": 39.661808,
      "longitude": -8.509094,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "3260",
      "timestamp": 1703322690,
      "ems": null
    },
    {
      "latitude": 39.66153,
      "longitude": -8.511047,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 257,
      "squawk": "3260",
      "timestamp": 1703322693,
      "ems": null
    },
    {
      "latitude": 39.66124,
      "longitude": -8.512613,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322696,
      "ems": null
    },
    {
      "latitude": 39.660877,
      "longitude": -8.514526,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322699,
      "ems": null
    },
    {
      "latitude": 39.660553,
      "longitude": -8.516235,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322702,
      "ems": null
    },
    {
      "latitude": 39.66032,
      "longitude": -8.5177,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322705,
      "ems": null
    },
    {
      "latitude": 39.659527,
      "longitude": -8.521423,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 254,
      "squawk": "3260",
      "timestamp": 1703322711,
      "ems": null
    },
    {
      "latitude": 39.659203,
      "longitude": -8.52301,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "3260",
      "timestamp": 1703322714,
      "ems": null
    },
    {
      "latitude": 39.658768,
      "longitude": -8.524794,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "3260",
      "timestamp": 1703322717,
      "ems": null
    },
    {
      "latitude": 39.657852,
      "longitude": -8.529785,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322726,
      "ems": null
    },
    {
      "latitude": 39.656876,
      "longitude": -8.535095,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322736,
      "ems": null
    },
    {
      "latitude": 39.656021,
      "longitude": -8.540138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "3260",
      "timestamp": 1703322744,
      "ems": null
    },
    {
      "latitude": 39.655746,
      "longitude": -8.542109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322748,
      "ems": null
    },
    {
      "latitude": 39.655476,
      "longitude": -8.543823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "3260",
      "timestamp": 1703322751,
      "ems": null
    },
    {
      "latitude": 39.654964,
      "longitude": -8.54834,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "3260",
      "timestamp": 1703322759,
      "ems": null
    },
    {
      "latitude": 39.654694,
      "longitude": -8.550886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "3260",
      "timestamp": 1703322762,
      "ems": null
    },
    {
      "latitude": 39.654556,
      "longitude": -8.552439,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703322765,
      "ems": null
    },
    {
      "latitude": 39.654453,
      "longitude": -8.554382,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703322768,
      "ems": null
    },
    {
      "latitude": 39.653896,
      "longitude": -8.557861,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 254,
      "squawk": "3260",
      "timestamp": 1703322774,
      "ems": null
    },
    {
      "latitude": 39.653427,
      "longitude": -8.559814,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "3260",
      "timestamp": 1703322777,
      "ems": null
    },
    {
      "latitude": 39.652916,
      "longitude": -8.561462,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "3260",
      "timestamp": 1703322780,
      "ems": null
    },
    {
      "latitude": 39.652405,
      "longitude": -8.563049,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703322783,
      "ems": null
    },
    {
      "latitude": 39.651855,
      "longitude": -8.564738,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703322787,
      "ems": null
    },
    {
      "latitude": 39.651333,
      "longitude": -8.566345,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703322789,
      "ems": null
    },
    {
      "latitude": 39.650822,
      "longitude": -8.567993,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "3260",
      "timestamp": 1703322793,
      "ems": null
    },
    {
      "latitude": 39.650345,
      "longitude": -8.569574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "3260",
      "timestamp": 1703322796,
      "ems": null
    },
    {
      "latitude": 39.649979,
      "longitude": -8.570889,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "3260",
      "timestamp": 1703322798,
      "ems": null
    },
    {
      "latitude": 39.648914,
      "longitude": -8.576416,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322808,
      "ems": null
    },
    {
      "latitude": 39.648697,
      "longitude": -8.577695,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322811,
      "ems": null
    },
    {
      "latitude": 39.648331,
      "longitude": -8.579367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322813,
      "ems": null
    },
    {
      "latitude": 39.64801,
      "longitude": -8.581099,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322816,
      "ems": null
    },
    {
      "latitude": 39.647598,
      "longitude": -8.583188,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322819,
      "ems": null
    },
    {
      "latitude": 39.647236,
      "longitude": -8.585022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703322823,
      "ems": null
    },
    {
      "latitude": 39.646912,
      "longitude": -8.586731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322826,
      "ems": null
    },
    {
      "latitude": 39.646637,
      "longitude": -8.588443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "3260",
      "timestamp": 1703322829,
      "ems": null
    },
    {
      "latitude": 39.645767,
      "longitude": -8.593518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "3260",
      "timestamp": 1703322838,
      "ems": null
    },
    {
      "latitude": 39.644943,
      "longitude": -8.598891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "3260",
      "timestamp": 1703322847,
      "ems": null
    },
    {
      "latitude": 39.644073,
      "longitude": -8.604027,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "3260",
      "timestamp": 1703322856,
      "ems": null
    },
    {
      "latitude": 39.643143,
      "longitude": -8.609253,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322864,
      "ems": null
    },
    {
      "latitude": 39.642105,
      "longitude": -8.614715,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322874,
      "ems": null
    },
    {
      "latitude": 39.64114,
      "longitude": -8.620056,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "3260",
      "timestamp": 1703322883,
      "ems": null
    },
    {
      "latitude": 39.64032,
      "longitude": -8.625044,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322891,
      "ems": null
    },
    {
      "latitude": 39.639496,
      "longitude": -8.631015,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322901,
      "ems": null
    },
    {
      "latitude": 39.639038,
      "longitude": -8.634358,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "3260",
      "timestamp": 1703322907,
      "ems": null
    },
    {
      "latitude": 39.638348,
      "longitude": -8.640015,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "3260",
      "timestamp": 1703322917,
      "ems": null
    },
    {
      "latitude": 39.637695,
      "longitude": -8.645386,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "3260",
      "timestamp": 1703322925,
      "ems": null
    },
    {
      "latitude": 39.637321,
      "longitude": -8.649109,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 264,
      "squawk": "3260",
      "timestamp": 1703322931,
      "ems": null
    },
    {
      "latitude": 39.637276,
      "longitude": -8.651123,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 268,
      "squawk": "3260",
      "timestamp": 1703322935,
      "ems": null
    },
    {
      "latitude": 39.637344,
      "longitude": -8.653047,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "3260",
      "timestamp": 1703322938,
      "ems": null
    },
    {
      "latitude": 39.6376,
      "longitude": -8.654602,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "3260",
      "timestamp": 1703322941,
      "ems": null
    },
    {
      "latitude": 39.638077,
      "longitude": -8.656092,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "3260",
      "timestamp": 1703322943,
      "ems": null
    },
    {
      "latitude": 39.638996,
      "longitude": -8.658142,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703322947,
      "ems": null
    },
    {
      "latitude": 39.639679,
      "longitude": -8.659257,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703322949,
      "ems": null
    },
    {
      "latitude": 39.64072,
      "longitude": -8.660645,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "3260",
      "timestamp": 1703322952,
      "ems": null
    },
    {
      "latitude": 39.64193,
      "longitude": -8.661987,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "3260",
      "timestamp": 1703322956,
      "ems": null
    },
    {
      "latitude": 39.642975,
      "longitude": -8.663018,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "3260",
      "timestamp": 1703322959,
      "ems": null
    },
    {
      "latitude": 39.644024,
      "longitude": -8.664124,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "3260",
      "timestamp": 1703322962,
      "ems": null
    },
    {
      "latitude": 39.645126,
      "longitude": -8.665347,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "3260",
      "timestamp": 1703322965,
      "ems": null
    },
    {
      "latitude": 39.646317,
      "longitude": -8.666422,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 327,
      "squawk": "3260",
      "timestamp": 1703322968,
      "ems": null
    },
    {
      "latitude": 39.647278,
      "longitude": -8.667019,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703322971,
      "ems": null
    },
    {
      "latitude": 39.648727,
      "longitude": -8.667236,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703322974,
      "ems": null
    },
    {
      "latitude": 39.649933,
      "longitude": -8.6669,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 16,
      "squawk": "3260",
      "timestamp": 1703322977,
      "ems": null
    },
    {
      "latitude": 39.650913,
      "longitude": -8.666321,
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
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703322979,
      "ems": null
    },
    {
      "latitude": 39.652222,
      "longitude": -8.665287,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322983,
      "ems": null
    },
    {
      "latitude": 39.653011,
      "longitude": -8.664673,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703322986,
      "ems": null
    },
    {
      "latitude": 39.654465,
      "longitude": -8.663496,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703322989,
      "ems": null
    },
    {
      "latitude": 39.655476,
      "longitude": -8.662659,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703322992,
      "ems": null
    },
    {
      "latitude": 39.656406,
      "longitude": -8.661865,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703322994,
      "ems": null
    },
    {
      "latitude": 39.657574,
      "longitude": -8.660889,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703322998,
      "ems": null
    },
    {
      "latitude": 39.658676,
      "longitude": -8.659973,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703323001,
      "ems": null
    },
    {
      "latitude": 39.659622,
      "longitude": -8.65918,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703323004,
      "ems": null
    },
    {
      "latitude": 39.660553,
      "longitude": -8.658386,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323007,
      "ems": null
    },
    {
      "latitude": 39.661388,
      "longitude": -8.657715,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323010,
      "ems": null
    },
    {
      "latitude": 39.664696,
      "longitude": -8.654968,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323019,
      "ems": null
    },
    {
      "latitude": 39.667721,
      "longitude": -8.652588,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703323028,
      "ems": null
    },
    {
      "latitude": 39.668839,
      "longitude": -8.651855,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 26,
      "squawk": "3260",
      "timestamp": 1703323031,
      "ems": null
    },
    {
      "latitude": 39.6698,
      "longitude": -8.651196,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323034,
      "ems": null
    },
    {
      "latitude": 39.671074,
      "longitude": -8.650452,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703323037,
      "ems": null
    },
    {
      "latitude": 39.672134,
      "longitude": -8.649882,
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
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703323040,
      "ems": null
    },
    {
      "latitude": 39.67326,
      "longitude": -8.649231,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703323043,
      "ems": null
    },
    {
      "latitude": 39.674286,
      "longitude": -8.648628,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323046,
      "ems": null
    },
    {
      "latitude": 39.675495,
      "longitude": -8.647888,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323049,
      "ems": null
    },
    {
      "latitude": 39.676517,
      "longitude": -8.647278,
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
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703323052,
      "ems": null
    },
    {
      "latitude": 39.677776,
      "longitude": -8.646667,
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
      "heading": 21,
      "squawk": "3260",
      "timestamp": 1703323055,
      "ems": null
    },
    {
      "latitude": 39.68108,
      "longitude": -8.644653,
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323064,
      "ems": null
    },
    {
      "latitude": 39.683407,
      "longitude": -8.643066,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703323070,
      "ems": null
    },
    {
      "latitude": 39.684311,
      "longitude": -8.642359,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323073,
      "ems": null
    },
    {
      "latitude": 39.685318,
      "longitude": -8.641479,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323076,
      "ems": null
    },
    {
      "latitude": 39.686436,
      "longitude": -8.640564,
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
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703323079,
      "ems": null
    },
    {
      "latitude": 39.687469,
      "longitude": -8.639732,
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
      "heading": 32,
      "squawk": "3260",
      "timestamp": 1703323082,
      "ems": null
    },
    {
      "latitude": 39.688484,
      "longitude": -8.638916,
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
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703323085,
      "ems": null
    },
    {
      "latitude": 39.689552,
      "longitude": -8.638062,
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703323088,
      "ems": null
    },
    {
      "latitude": 39.692825,
      "longitude": -8.635672,
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
      "heading": 27,
      "squawk": "3260",
      "timestamp": 1703323097,
      "ems": null
    },
    {
      "latitude": 39.694115,
      "longitude": -8.634888,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323100,
      "ems": null
    },
    {
      "latitude": 39.695187,
      "longitude": -8.634216,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703323104,
      "ems": null
    },
    {
      "latitude": 39.696026,
      "longitude": -8.633789,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703323106,
      "ems": null
    },
    {
      "latitude": 39.697468,
      "longitude": -8.632996,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703323110,
      "ems": null
    },
    {
      "latitude": 39.698456,
      "longitude": -8.632507,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703323112,
      "ems": null
    },
    {
      "latitude": 39.699841,
      "longitude": -8.631775,
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
      "heading": 21,
      "squawk": "3260",
      "timestamp": 1703323116,
      "ems": null
    },
    {
      "latitude": 39.700912,
      "longitude": -8.631226,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "3260",
      "timestamp": 1703323118,
      "ems": null
    },
    {
      "latitude": 39.702072,
      "longitude": -8.630656,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703323121,
      "ems": null
    },
    {
      "latitude": 39.703098,
      "longitude": -8.630127,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703323124,
      "ems": null
    },
    {
      "latitude": 39.70673,
      "longitude": -8.627686,
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
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703323134,
      "ems": null
    },
    {
      "latitude": 39.707569,
      "longitude": -8.62677,
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
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703323136,
      "ems": null
    },
    {
      "latitude": 39.708481,
      "longitude": -8.62576,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323140,
      "ems": null
    },
    {
      "latitude": 39.709618,
      "longitude": -8.624512,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323143,
      "ems": null
    },
    {
      "latitude": 39.710548,
      "longitude": -8.623413,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323146,
      "ems": null
    },
    {
      "latitude": 39.711411,
      "longitude": -8.622357,
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
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703323149,
      "ems": null
    },
    {
      "latitude": 39.712463,
      "longitude": -8.621162,
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
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703323152,
      "ems": null
    },
    {
      "latitude": 39.713341,
      "longitude": -8.620178,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323154,
      "ems": null
    },
    {
      "latitude": 39.714386,
      "longitude": -8.618954,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323158,
      "ems": null
    },
    {
      "latitude": 39.715302,
      "longitude": -8.617879,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323161,
      "ems": null
    },
    {
      "latitude": 39.718048,
      "longitude": -8.614655,
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323169,
      "ems": null
    },
    {
      "latitude": 39.720093,
      "longitude": -8.612427,
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703323176,
      "ems": null
    },
    {
      "latitude": 39.721207,
      "longitude": -8.611549,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703323179,
      "ems": null
    },
    {
      "latitude": 39.722351,
      "longitude": -8.610893,
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
      "heading": 23,
      "squawk": "3260",
      "timestamp": 1703323182,
      "ems": null
    },
    {
      "latitude": 39.723492,
      "longitude": -8.610352,
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703323185,
      "ems": null
    },
    {
      "latitude": 39.724422,
      "longitude": -8.609924,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703323187,
      "ems": null
    },
    {
      "latitude": 39.725632,
      "longitude": -8.609436,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703323190,
      "ems": null
    },
    {
      "latitude": 39.726837,
      "longitude": -8.608923,
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
      "heading": 18,
      "squawk": "3260",
      "timestamp": 1703323194,
      "ems": null
    },
    {
      "latitude": 39.728531,
      "longitude": -8.608325,
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
      "heading": 13,
      "squawk": "3260",
      "timestamp": 1703323197,
      "ems": null
    },
    {
      "latitude": 39.729633,
      "longitude": -8.608032,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 13,
      "squawk": "3260",
      "timestamp": 1703323200,
      "ems": null
    },
    {
      "latitude": 39.731094,
      "longitude": -8.607609,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703323203,
      "ems": null
    },
    {
      "latitude": 39.732521,
      "longitude": -8.607239,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 11,
      "squawk": "3260",
      "timestamp": 1703323206,
      "ems": null
    },
    {
      "latitude": 39.733871,
      "longitude": -8.606873,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "3260",
      "timestamp": 1703323209,
      "ems": null
    },
    {
      "latitude": 39.73526,
      "longitude": -8.606534,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703323212,
      "ems": null
    },
    {
      "latitude": 39.736385,
      "longitude": -8.606323,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703323215,
      "ems": null
    },
    {
      "latitude": 39.737503,
      "longitude": -8.606079,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703323217,
      "ems": null
    },
    {
      "latitude": 39.738739,
      "longitude": -8.605818,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703323220,
      "ems": null
    },
    {
      "latitude": 39.740295,
      "longitude": -8.605469,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703323224,
      "ems": null
    },
    {
      "latitude": 39.74118,
      "longitude": -8.605286,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703323227,
      "ems": null
    },
    {
      "latitude": 39.745232,
      "longitude": -8.604431,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 10,
      "squawk": "3260",
      "timestamp": 1703323236,
      "ems": null
    },
    {
      "latitude": 39.74826,
      "longitude": -8.603668,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3260",
      "timestamp": 1703323243,
      "ems": null
    },
    {
      "latitude": 39.75238,
      "longitude": -8.602713,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703323253,
      "ems": null
    },
    {
      "latitude": 39.756168,
      "longitude": -8.601807,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 10,
      "squawk": "3260",
      "timestamp": 1703323261,
      "ems": null
    },
    {
      "latitude": 39.759987,
      "longitude": -8.600952,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703323271,
      "ems": null
    },
    {
      "latitude": 39.76413,
      "longitude": -8.600037,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 10,
      "squawk": "3260",
      "timestamp": 1703323280,
      "ems": null
    },
    {
      "latitude": 39.767948,
      "longitude": -8.598877,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703323289,
      "ems": null
    },
    {
      "latitude": 39.771717,
      "longitude": -8.597778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 11,
      "squawk": "3260",
      "timestamp": 1703323298,
      "ems": null
    },
    {
      "latitude": 39.775211,
      "longitude": -8.596863,
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
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703323307,
      "ems": null
    },
    {
      "latitude": 39.778885,
      "longitude": -8.595846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "3260",
      "timestamp": 1703323316,
      "ems": null
    },
    {
      "latitude": 39.781353,
      "longitude": -8.595154,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 13,
      "squawk": "3260",
      "timestamp": 1703323322,
      "ems": null
    },
    {
      "latitude": 39.783737,
      "longitude": -8.594652,
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
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703323328,
      "ems": null
    },
    {
      "latitude": 39.784882,
      "longitude": -8.594652,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703323331,
      "ems": null
    },
    {
      "latitude": 39.786209,
      "longitude": -8.594771,
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323334,
      "ems": null
    },
    {
      "latitude": 39.787453,
      "longitude": -8.595032,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703323337,
      "ems": null
    },
    {
      "latitude": 39.788712,
      "longitude": -8.595459,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3260",
      "timestamp": 1703323340,
      "ems": null
    },
    {
      "latitude": 39.789921,
      "longitude": -8.596069,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703323343,
      "ems": null
    },
    {
      "latitude": 39.791225,
      "longitude": -8.596741,
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
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703323346,
      "ems": null
    },
    {
      "latitude": 39.79248,
      "longitude": -8.597412,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703323350,
      "ems": null
    },
    {
      "latitude": 39.793552,
      "longitude": -8.598022,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703323353,
      "ems": null
    },
    {
      "latitude": 39.794949,
      "longitude": -8.598755,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "3260",
      "timestamp": 1703323356,
      "ems": null
    },
    {
      "latitude": 39.796158,
      "longitude": -8.599365,
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
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703323359,
      "ems": null
    },
    {
      "latitude": 39.797184,
      "longitude": -8.599915,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "3260",
      "timestamp": 1703323361,
      "ems": null
    },
    {
      "latitude": 39.798431,
      "longitude": -8.600563,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "3260",
      "timestamp": 1703323365,
      "ems": null
    },
    {
      "latitude": 39.801132,
      "longitude": -8.601339,
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
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703323371,
      "ems": null
    },
    {
      "latitude": 39.802395,
      "longitude": -8.601501,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323374,
      "ems": null
    },
    {
      "latitude": 39.803841,
      "longitude": -8.601624,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323377,
      "ems": null
    },
    {
      "latitude": 39.805141,
      "longitude": -8.601807,
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323380,
      "ems": null
    },
    {
      "latitude": 39.806355,
      "longitude": -8.601929,
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
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323383,
      "ems": null
    },
    {
      "latitude": 39.807632,
      "longitude": -8.602057,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323386,
      "ems": null
    },
    {
      "latitude": 39.809006,
      "longitude": -8.602173,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323389,
      "ems": null
    },
    {
      "latitude": 39.810471,
      "longitude": -8.602355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323392,
      "ems": null
    },
    {
      "latitude": 39.811848,
      "longitude": -8.602478,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323395,
      "ems": null
    },
    {
      "latitude": 39.813198,
      "longitude": -8.6026,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323398,
      "ems": null
    },
    {
      "latitude": 39.8172,
      "longitude": -8.603011,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323407,
      "ems": null
    },
    {
      "latitude": 39.821136,
      "longitude": -8.603549,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323416,
      "ems": null
    },
    {
      "latitude": 39.825298,
      "longitude": -8.603943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703323425,
      "ems": null
    },
    {
      "latitude": 39.829628,
      "longitude": -8.604187,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323434,
      "ems": null
    },
    {
      "latitude": 39.832329,
      "longitude": -8.604492,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323440,
      "ems": null
    },
    {
      "latitude": 39.836197,
      "longitude": -8.604862,
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
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703323449,
      "ems": null
    },
    {
      "latitude": 39.840523,
      "longitude": -8.604736,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703323458,
      "ems": null
    },
    {
      "latitude": 39.84462,
      "longitude": -8.604858,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323468,
      "ems": null
    },
    {
      "latitude": 39.848808,
      "longitude": -8.605164,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323477,
      "ems": null
    },
    {
      "latitude": 39.850159,
      "longitude": -8.60528,
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
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323480,
      "ems": null
    },
    {
      "latitude": 39.851601,
      "longitude": -8.605408,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323483,
      "ems": null
    },
    {
      "latitude": 39.852764,
      "longitude": -8.605469,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323485,
      "ems": null
    },
    {
      "latitude": 39.8573,
      "longitude": -8.605937,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323495,
      "ems": null
    },
    {
      "latitude": 39.861649,
      "longitude": -8.606475,
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323504,
      "ems": null
    },
    {
      "latitude": 39.865906,
      "longitude": -8.607072,
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
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323513,
      "ems": null
    },
    {
      "latitude": 39.869797,
      "longitude": -8.607728,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703323522,
      "ems": null
    },
    {
      "latitude": 39.874039,
      "longitude": -8.608459,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323531,
      "ems": null
    },
    {
      "latitude": 39.878136,
      "longitude": -8.609192,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703323540,
      "ems": null
    },
    {
      "latitude": 39.882385,
      "longitude": -8.610057,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703323549,
      "ems": null
    },
    {
      "latitude": 39.884949,
      "longitude": -8.610595,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703323555,
      "ems": null
    },
    {
      "latitude": 39.889122,
      "longitude": -8.610962,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323564,
      "ems": null
    },
    {
      "latitude": 39.890442,
      "longitude": -8.611072,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323567,
      "ems": null
    },
    {
      "latitude": 39.891678,
      "longitude": -8.611132,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323570,
      "ems": null
    },
    {
      "latitude": 39.893143,
      "longitude": -8.611251,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323573,
      "ems": null
    },
    {
      "latitude": 39.894478,
      "longitude": -8.611389,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323576,
      "ems": null
    },
    {
      "latitude": 39.89592,
      "longitude": -8.611511,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323579,
      "ems": null
    },
    {
      "latitude": 39.900108,
      "longitude": -8.612,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323589,
      "ems": null
    },
    {
      "latitude": 39.901474,
      "longitude": -8.612267,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703323591,
      "ems": null
    },
    {
      "latitude": 39.903076,
      "longitude": -8.612505,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703323595,
      "ems": null
    },
    {
      "latitude": 39.907333,
      "longitude": -8.613043,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323604,
      "ems": null
    },
    {
      "latitude": 39.911636,
      "longitude": -8.613461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323613,
      "ems": null
    },
    {
      "latitude": 39.914402,
      "longitude": -8.613647,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323619,
      "ems": null
    },
    {
      "latitude": 39.915798,
      "longitude": -8.613708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323622,
      "ems": null
    },
    {
      "latitude": 39.917149,
      "longitude": -8.613831,
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323625,
      "ems": null
    },
    {
      "latitude": 39.921383,
      "longitude": -8.614075,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323634,
      "ems": null
    },
    {
      "latitude": 39.925434,
      "longitude": -8.614218,
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323643,
      "ems": null
    },
    {
      "latitude": 39.929718,
      "longitude": -8.61453,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323652,
      "ems": null
    },
    {
      "latitude": 39.93372,
      "longitude": -8.614841,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323661,
      "ems": null
    },
    {
      "latitude": 39.936493,
      "longitude": -8.615051,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323667,
      "ems": null
    },
    {
      "latitude": 39.940609,
      "longitude": -8.615528,
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
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323676,
      "ems": null
    },
    {
      "latitude": 39.944778,
      "longitude": -8.615967,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323685,
      "ems": null
    },
    {
      "latitude": 39.949036,
      "longitude": -8.616403,
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
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323695,
      "ems": null
    },
    {
      "latitude": 39.953178,
      "longitude": -8.616776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323704,
      "ems": null
    },
    {
      "latitude": 39.957321,
      "longitude": -8.617065,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323713,
      "ems": null
    },
    {
      "latitude": 39.961559,
      "longitude": -8.617401,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703323722,
      "ems": null
    },
    {
      "latitude": 39.965881,
      "longitude": -8.617798,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323731,
      "ems": null
    },
    {
      "latitude": 39.970047,
      "longitude": -8.618286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323740,
      "ems": null
    },
    {
      "latitude": 39.974167,
      "longitude": -8.618896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323749,
      "ems": null
    },
    {
      "latitude": 39.978176,
      "longitude": -8.619586,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "3260",
      "timestamp": 1703323758,
      "ems": null
    },
    {
      "latitude": 39.982414,
      "longitude": -8.620398,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703323767,
      "ems": null
    },
    {
      "latitude": 39.986526,
      "longitude": -8.621216,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703323776,
      "ems": null
    },
    {
      "latitude": 39.988998,
      "longitude": -8.621643,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703323782,
      "ems": null
    },
    {
      "latitude": 39.990654,
      "longitude": -8.621833,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323785,
      "ems": null
    },
    {
      "latitude": 39.99202,
      "longitude": -8.621887,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703323788,
      "ems": null
    },
    {
      "latitude": 39.993446,
      "longitude": -8.621896,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703323791,
      "ems": null
    },
    {
      "latitude": 39.994812,
      "longitude": -8.621887,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703323794,
      "ems": null
    },
    {
      "latitude": 39.99638,
      "longitude": -8.621896,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "3260",
      "timestamp": 1703323798,
      "ems": null
    },
    {
      "latitude": 39.997833,
      "longitude": -8.621826,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703323801,
      "ems": null
    },
    {
      "latitude": 39.999031,
      "longitude": -8.621833,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703323803,
      "ems": null
    },
    {
      "latitude": 40.001919,
      "longitude": -8.622146,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703323810,
      "ems": null
    },
    {
      "latitude": 40.003082,
      "longitude": -8.622458,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703323812,
      "ems": null
    },
    {
      "latitude": 40.004791,
      "longitude": -8.622925,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703323816,
      "ems": null
    },
    {
      "latitude": 40.006107,
      "longitude": -8.623394,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703323818,
      "ems": null
    },
    {
      "latitude": 40.007538,
      "longitude": -8.623779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703323822,
      "ems": null
    },
    {
      "latitude": 40.008911,
      "longitude": -8.624207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703323825,
      "ems": null
    },
    {
      "latitude": 40.010113,
      "longitude": -8.624642,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703323827,
      "ems": null
    },
    {
      "latitude": 40.011612,
      "longitude": -8.625061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3260",
      "timestamp": 1703323831,
      "ems": null
    },
    {
      "latitude": 40.012939,
      "longitude": -8.625427,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703323834,
      "ems": null
    },
    {
      "latitude": 40.016956,
      "longitude": -8.626328,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703323842,
      "ems": null
    },
    {
      "latitude": 40.020958,
      "longitude": -8.627264,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703323852,
      "ems": null
    },
    {
      "latitude": 40.025162,
      "longitude": -8.628357,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703323861,
      "ems": null
    },
    {
      "latitude": 40.029243,
      "longitude": -8.629449,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 348,
      "squawk": "3260",
      "timestamp": 1703323870,
      "ems": null
    },
    {
      "latitude": 40.033493,
      "longitude": -8.630493,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703323879,
      "ems": null
    },
    {
      "latitude": 40.037766,
      "longitude": -8.631446,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703323888,
      "ems": null
    },
    {
      "latitude": 40.041916,
      "longitude": -8.632385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703323897,
      "ems": null
    },
    {
      "latitude": 40.046005,
      "longitude": -8.633132,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703323906,
      "ems": null
    },
    {
      "latitude": 40.048645,
      "longitude": -8.633545,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703323912,
      "ems": null
    },
    {
      "latitude": 40.051544,
      "longitude": -8.633943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3260",
      "timestamp": 1703323918,
      "ems": null
    },
    {
      "latitude": 40.052799,
      "longitude": -8.634006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323922,
      "ems": null
    },
    {
      "latitude": 40.054382,
      "longitude": -8.634006,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703323924,
      "ems": null
    },
    {
      "latitude": 40.055786,
      "longitude": -8.63385,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703323928,
      "ems": null
    },
    {
      "latitude": 40.057083,
      "longitude": -8.633444,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 16,
      "squawk": "3260",
      "timestamp": 1703323930,
      "ems": null
    },
    {
      "latitude": 40.058441,
      "longitude": -8.63269,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703323934,
      "ems": null
    },
    {
      "latitude": 40.059505,
      "longitude": -8.631946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3260",
      "timestamp": 1703323937,
      "ems": null
    },
    {
      "latitude": 40.060638,
      "longitude": -8.630981,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703323940,
      "ems": null
    },
    {
      "latitude": 40.062012,
      "longitude": -8.629639,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 36,
      "squawk": "3260",
      "timestamp": 1703323943,
      "ems": null
    },
    {
      "latitude": 40.063087,
      "longitude": -8.628574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703323946,
      "ems": null
    },
    {
      "latitude": 40.064205,
      "longitude": -8.627451,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703323949,
      "ems": null
    },
    {
      "latitude": 40.065277,
      "longitude": -8.62639,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 38,
      "squawk": "3260",
      "timestamp": 1703323952,
      "ems": null
    },
    {
      "latitude": 40.066441,
      "longitude": -8.625141,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703323954,
      "ems": null
    },
    {
      "latitude": 40.067604,
      "longitude": -8.623893,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 41,
      "squawk": "3260",
      "timestamp": 1703323958,
      "ems": null
    },
    {
      "latitude": 40.068443,
      "longitude": -8.622832,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703323960,
      "ems": null
    },
    {
      "latitude": 40.069374,
      "longitude": -8.621459,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 49,
      "squawk": "3260",
      "timestamp": 1703323964,
      "ems": null
    },
    {
      "latitude": 40.070538,
      "longitude": -8.619648,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 51,
      "squawk": "3260",
      "timestamp": 1703323967,
      "ems": null
    },
    {
      "latitude": 40.071095,
      "longitude": -8.618649,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703323969,
      "ems": null
    },
    {
      "latitude": 40.072212,
      "longitude": -8.616714,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703323973,
      "ems": null
    },
    {
      "latitude": 40.073135,
      "longitude": -8.615173,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703323976,
      "ems": null
    },
    {
      "latitude": 40.073936,
      "longitude": -8.613781,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703323979,
      "ems": null
    },
    {
      "latitude": 40.074966,
      "longitude": -8.611328,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703323984,
      "ems": null
    },
    {
      "latitude": 40.07547,
      "longitude": -8.609473,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 72,
      "squawk": "3260",
      "timestamp": 1703323987,
      "ems": null
    },
    {
      "latitude": 40.075844,
      "longitude": -8.607538,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 78,
      "squawk": "3260",
      "timestamp": 1703323990,
      "ems": null
    },
    {
      "latitude": 40.076065,
      "longitude": -8.605713,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703323993,
      "ems": null
    },
    {
      "latitude": 40.076248,
      "longitude": -8.60376,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 83,
      "squawk": "3260",
      "timestamp": 1703323996,
      "ems": null
    },
    {
      "latitude": 40.076401,
      "longitude": -8.602045,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703323999,
      "ems": null
    },
    {
      "latitude": 40.076496,
      "longitude": -8.60011,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703324002,
      "ems": null
    },
    {
      "latitude": 40.076523,
      "longitude": -8.598083,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 89,
      "squawk": "3260",
      "timestamp": 1703324005,
      "ems": null
    },
    {
      "latitude": 40.076477,
      "longitude": -8.59613,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703324008,
      "ems": null
    },
    {
      "latitude": 40.076385,
      "longitude": -8.594299,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 94,
      "squawk": "3260",
      "timestamp": 1703324011,
      "ems": null
    },
    {
      "latitude": 40.076248,
      "longitude": -8.592285,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 95,
      "squawk": "3260",
      "timestamp": 1703324014,
      "ems": null
    },
    {
      "latitude": 40.076065,
      "longitude": -8.590088,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703324017,
      "ems": null
    },
    {
      "latitude": 40.07589,
      "longitude": -8.588375,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "3260",
      "timestamp": 1703324020,
      "ems": null
    },
    {
      "latitude": 40.075657,
      "longitude": -8.58644,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703324023,
      "ems": null
    },
    {
      "latitude": 40.07547,
      "longitude": -8.58438,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703324026,
      "ems": null
    },
    {
      "latitude": 40.075287,
      "longitude": -8.582694,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 97,
      "squawk": "3260",
      "timestamp": 1703324029,
      "ems": null
    },
    {
      "latitude": 40.075104,
      "longitude": -8.580505,
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
      "heading": 96,
      "squawk": "3260",
      "timestamp": 1703324032,
      "ems": null
    },
    {
      "latitude": 40.074959,
      "longitude": -8.579074,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 95,
      "squawk": "3260",
      "timestamp": 1703324035,
      "ems": null
    },
    {
      "latitude": 40.074646,
      "longitude": -8.573792,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703324044,
      "ems": null
    },
    {
      "latitude": 40.0746,
      "longitude": -8.572021,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "3260",
      "timestamp": 1703324047,
      "ems": null
    },
    {
      "latitude": 40.074539,
      "longitude": -8.570397,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "3260",
      "timestamp": 1703324050,
      "ems": null
    },
    {
      "latitude": 40.074493,
      "longitude": -8.568524,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 91,
      "squawk": "3260",
      "timestamp": 1703324053,
      "ems": null
    },
    {
      "latitude": 40.074463,
      "longitude": -8.566895,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703324056,
      "ems": null
    },
    {
      "latitude": 40.074554,
      "longitude": -8.565247,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "3260",
      "timestamp": 1703324059,
      "ems": null
    },
    {
      "latitude": 40.074635,
      "longitude": -8.563468,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703324062,
      "ems": null
    },
    {
      "latitude": 40.074829,
      "longitude": -8.561707,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "3260",
      "timestamp": 1703324065,
      "ems": null
    },
    {
      "latitude": 40.075054,
      "longitude": -8.560098,
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
      "heading": 77,
      "squawk": "3260",
      "timestamp": 1703324068,
      "ems": null
    },
    {
      "latitude": 40.075378,
      "longitude": -8.558599,
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
      "heading": 74,
      "squawk": "3260",
      "timestamp": 1703324071,
      "ems": null
    },
    {
      "latitude": 40.075844,
      "longitude": -8.556726,
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
      "heading": 70,
      "squawk": "3260",
      "timestamp": 1703324074,
      "ems": null
    },
    {
      "latitude": 40.076263,
      "longitude": -8.555291,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "3260",
      "timestamp": 1703324077,
      "ems": null
    },
    {
      "latitude": 40.076843,
      "longitude": -8.553467,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 65,
      "squawk": "3260",
      "timestamp": 1703324080,
      "ems": null
    },
    {
      "latitude": 40.077381,
      "longitude": -8.552045,
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
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703324083,
      "ems": null
    },
    {
      "latitude": 40.078079,
      "longitude": -8.550415,
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
      "heading": 61,
      "squawk": "3260",
      "timestamp": 1703324086,
      "ems": null
    },
    {
      "latitude": 40.078766,
      "longitude": -8.54895,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "3260",
      "timestamp": 1703324089,
      "ems": null
    },
    {
      "latitude": 40.079475,
      "longitude": -8.54755,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703324092,
      "ems": null
    },
    {
      "latitude": 40.080406,
      "longitude": -8.546115,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 50,
      "squawk": "3260",
      "timestamp": 1703324095,
      "ems": null
    },
    {
      "latitude": 40.081291,
      "longitude": -8.544742,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 49,
      "squawk": "3260",
      "timestamp": 1703324098,
      "ems": null
    },
    {
      "latitude": 40.082199,
      "longitude": -8.543396,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 48,
      "squawk": "3260",
      "timestamp": 1703324101,
      "ems": null
    },
    {
      "latitude": 40.08316,
      "longitude": -8.541992,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 48,
      "squawk": "3260",
      "timestamp": 1703324104,
      "ems": null
    },
    {
      "latitude": 40.084129,
      "longitude": -8.540684,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 45,
      "squawk": "3260",
      "timestamp": 1703324107,
      "ems": null
    },
    {
      "latitude": 40.085293,
      "longitude": -8.539248,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703324111,
      "ems": null
    },
    {
      "latitude": 40.086224,
      "longitude": -8.538062,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703324113,
      "ems": null
    },
    {
      "latitude": 40.087463,
      "longitude": -8.53656,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 42,
      "squawk": "3260",
      "timestamp": 1703324116,
      "ems": null
    },
    {
      "latitude": 40.088516,
      "longitude": -8.535339,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 40,
      "squawk": "3260",
      "timestamp": 1703324119,
      "ems": null
    },
    {
      "latitude": 40.089855,
      "longitude": -8.534067,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703324123,
      "ems": null
    },
    {
      "latitude": 40.09116,
      "longitude": -8.533006,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 29,
      "squawk": "3260",
      "timestamp": 1703324126,
      "ems": null
    },
    {
      "latitude": 40.092415,
      "longitude": -8.532195,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703324129,
      "ems": null
    },
    {
      "latitude": 40.093815,
      "longitude": -8.531446,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 20,
      "squawk": "3260",
      "timestamp": 1703324132,
      "ems": null
    },
    {
      "latitude": 40.095161,
      "longitude": -8.530946,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 14,
      "squawk": "3260",
      "timestamp": 1703324135,
      "ems": null
    },
    {
      "latitude": 40.096512,
      "longitude": -8.530634,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703324137,
      "ems": null
    },
    {
      "latitude": 40.097958,
      "longitude": -8.530572,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 358,
      "squawk": "3260",
      "timestamp": 1703324141,
      "ems": null
    },
    {
      "latitude": 40.099274,
      "longitude": -8.530762,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703324144,
      "ems": null
    },
    {
      "latitude": 40.100555,
      "longitude": -8.53125,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "3260",
      "timestamp": 1703324147,
      "ems": null
    },
    {
      "latitude": 40.101654,
      "longitude": -8.531982,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 330,
      "squawk": "3260",
      "timestamp": 1703324149,
      "ems": null
    },
    {
      "latitude": 40.102753,
      "longitude": -8.532898,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 324,
      "squawk": "3260",
      "timestamp": 1703324153,
      "ems": null
    },
    {
      "latitude": 40.103577,
      "longitude": -8.533813,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 318,
      "squawk": "3260",
      "timestamp": 1703324155,
      "ems": null
    },
    {
      "latitude": 40.104568,
      "longitude": -8.535191,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703324159,
      "ems": null
    },
    {
      "latitude": 40.10527,
      "longitude": -8.536438,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 305,
      "squawk": "3260",
      "timestamp": 1703324162,
      "ems": null
    },
    {
      "latitude": 40.105965,
      "longitude": -8.537688,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 307,
      "squawk": "3260",
      "timestamp": 1703324164,
      "ems": null
    },
    {
      "latitude": 40.106873,
      "longitude": -8.53894,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 311,
      "squawk": "3260",
      "timestamp": 1703324168,
      "ems": null
    },
    {
      "latitude": 40.107872,
      "longitude": -8.539935,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 326,
      "squawk": "3260",
      "timestamp": 1703324171,
      "ems": null
    },
    {
      "latitude": 40.108849,
      "longitude": -8.540684,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "3260",
      "timestamp": 1703324173,
      "ems": null
    },
    {
      "latitude": 40.110294,
      "longitude": -8.541245,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "3260",
      "timestamp": 1703324176,
      "ems": null
    },
    {
      "latitude": 40.111679,
      "longitude": -8.541382,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703324180,
      "ems": null
    },
    {
      "latitude": 40.113144,
      "longitude": -8.541016,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703324183,
      "ems": null
    },
    {
      "latitude": 40.114437,
      "longitude": -8.54031,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703324186,
      "ems": null
    },
    {
      "latitude": 40.115753,
      "longitude": -8.539185,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 35,
      "squawk": "3260",
      "timestamp": 1703324189,
      "ems": null
    },
    {
      "latitude": 40.11681,
      "longitude": -8.538062,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "3260",
      "timestamp": 1703324192,
      "ems": null
    },
    {
      "latitude": 40.117676,
      "longitude": -8.536926,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 47,
      "squawk": "3260",
      "timestamp": 1703324195,
      "ems": null
    },
    {
      "latitude": 40.118546,
      "longitude": -8.535278,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 57,
      "squawk": "3260",
      "timestamp": 1703324198,
      "ems": null
    },
    {
      "latitude": 40.119186,
      "longitude": -8.533691,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703324201,
      "ems": null
    },
    {
      "latitude": 40.119873,
      "longitude": -8.532104,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703324204,
      "ems": null
    },
    {
      "latitude": 40.120861,
      "longitude": -8.530447,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 51,
      "squawk": "3260",
      "timestamp": 1703324207,
      "ems": null
    },
    {
      "latitude": 40.12175,
      "longitude": -8.529175,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "3260",
      "timestamp": 1703324210,
      "ems": null
    },
    {
      "latitude": 40.122955,
      "longitude": -8.527887,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703324213,
      "ems": null
    },
    {
      "latitude": 40.124119,
      "longitude": -8.526889,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 30,
      "squawk": "3260",
      "timestamp": 1703324216,
      "ems": null
    },
    {
      "latitude": 40.125328,
      "longitude": -8.526139,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "3260",
      "timestamp": 1703324219,
      "ems": null
    },
    {
      "latitude": 40.126511,
      "longitude": -8.525757,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "3260",
      "timestamp": 1703324222,
      "ems": null
    },
    {
      "latitude": 40.127701,
      "longitude": -8.525513,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 7,
      "squawk": "3260",
      "timestamp": 1703324224,
      "ems": null
    },
    {
      "latitude": 40.129566,
      "longitude": -8.525516,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703324228,
      "ems": null
    },
    {
      "latitude": 40.130768,
      "longitude": -8.525757,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 350,
      "squawk": "3260",
      "timestamp": 1703324231,
      "ems": null
    },
    {
      "latitude": 40.132359,
      "longitude": -8.526389,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 340,
      "squawk": "3260",
      "timestamp": 1703324234,
      "ems": null
    },
    {
      "latitude": 40.133476,
      "longitude": -8.527014,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324237,
      "ems": null
    },
    {
      "latitude": 40.134476,
      "longitude": -8.527832,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 327,
      "squawk": "3260",
      "timestamp": 1703324240,
      "ems": null
    },
    {
      "latitude": 40.135345,
      "longitude": -8.528748,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 318,
      "squawk": "3260",
      "timestamp": 1703324243,
      "ems": null
    },
    {
      "latitude": 40.136078,
      "longitude": -8.529846,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 306,
      "squawk": "3260",
      "timestamp": 1703324246,
      "ems": null
    },
    {
      "latitude": 40.136593,
      "longitude": -8.531134,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 293,
      "squawk": "3260",
      "timestamp": 1703324249,
      "ems": null
    },
    {
      "latitude": 40.136902,
      "longitude": -8.532593,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "3260",
      "timestamp": 1703324252,
      "ems": null
    },
    {
      "latitude": 40.136967,
      "longitude": -8.533942,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "3260",
      "timestamp": 1703324255,
      "ems": null
    },
    {
      "latitude": 40.136875,
      "longitude": -8.535316,
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
      "heading": 261,
      "squawk": "3260",
      "timestamp": 1703324258,
      "ems": null
    },
    {
      "latitude": 40.136642,
      "longitude": -8.536502,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "3260",
      "timestamp": 1703324261,
      "ems": null
    },
    {
      "latitude": 40.135986,
      "longitude": -8.537903,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "3260",
      "timestamp": 1703324264,
      "ems": null
    },
    {
      "latitude": 40.135338,
      "longitude": -8.538687,
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
      "heading": 218,
      "squawk": "3260",
      "timestamp": 1703324267,
      "ems": null
    },
    {
      "latitude": 40.134174,
      "longitude": -8.53956,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "3260",
      "timestamp": 1703324270,
      "ems": null
    },
    {
      "latitude": 40.133148,
      "longitude": -8.539856,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 190,
      "squawk": "3260",
      "timestamp": 1703324273,
      "ems": null
    },
    {
      "latitude": 40.13205,
      "longitude": -8.539856,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703324276,
      "ems": null
    },
    {
      "latitude": 40.1311,
      "longitude": -8.53956,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 163,
      "squawk": "3260",
      "timestamp": 1703324279,
      "ems": null
    },
    {
      "latitude": 40.130081,
      "longitude": -8.538879,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "3260",
      "timestamp": 1703324282,
      "ems": null
    },
    {
      "latitude": 40.129166,
      "longitude": -8.537903,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "3260",
      "timestamp": 1703324285,
      "ems": null
    },
    {
      "latitude": 40.128448,
      "longitude": -8.536752,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703324288,
      "ems": null
    },
    {
      "latitude": 40.127888,
      "longitude": -8.535378,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "3260",
      "timestamp": 1703324292,
      "ems": null
    },
    {
      "latitude": 40.127518,
      "longitude": -8.53413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "3260",
      "timestamp": 1703324294,
      "ems": null
    },
    {
      "latitude": 40.127151,
      "longitude": -8.532654,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 103,
      "squawk": "3260",
      "timestamp": 1703324297,
      "ems": null
    },
    {
      "latitude": 40.126957,
      "longitude": -8.530822,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 96,
      "squawk": "3260",
      "timestamp": 1703324300,
      "ems": null
    },
    {
      "latitude": 40.126911,
      "longitude": -8.529261,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "3260",
      "timestamp": 1703324303,
      "ems": null
    },
    {
      "latitude": 40.127007,
      "longitude": -8.5277,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "3260",
      "timestamp": 1703324306,
      "ems": null
    },
    {
      "latitude": 40.127197,
      "longitude": -8.526672,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 77,
      "squawk": "3260",
      "timestamp": 1703324308,
      "ems": null
    },
    {
      "latitude": 40.127838,
      "longitude": -8.524536,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703324312,
      "ems": null
    },
    {
      "latitude": 40.12812,
      "longitude": -8.52383,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703324314,
      "ems": null
    },
    {
      "latitude": 40.128937,
      "longitude": -8.522339,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703324317,
      "ems": null
    },
    {
      "latitude": 40.129704,
      "longitude": -8.521084,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "3260",
      "timestamp": 1703324320,
      "ems": null
    },
    {
      "latitude": 40.130585,
      "longitude": -8.519775,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "3260",
      "timestamp": 1703324323,
      "ems": null
    },
    {
      "latitude": 40.131409,
      "longitude": -8.518555,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 47,
      "squawk": "3260",
      "timestamp": 1703324326,
      "ems": null
    },
    {
      "latitude": 40.132313,
      "longitude": -8.517276,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 46,
      "squawk": "3260",
      "timestamp": 1703324329,
      "ems": null
    },
    {
      "latitude": 40.133102,
      "longitude": -8.516113,
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
      "heading": 48,
      "squawk": "3260",
      "timestamp": 1703324332,
      "ems": null
    },
    {
      "latitude": 40.133942,
      "longitude": -8.514841,
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
      "heading": 50,
      "squawk": "3260",
      "timestamp": 1703324336,
      "ems": null
    },
    {
      "latitude": 40.134613,
      "longitude": -8.513733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703324338,
      "ems": null
    },
    {
      "latitude": 40.135246,
      "longitude": -8.512531,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "3260",
      "timestamp": 1703324341,
      "ems": null
    },
    {
      "latitude": 40.135849,
      "longitude": -8.511283,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703324345,
      "ems": null
    },
    {
      "latitude": 40.136456,
      "longitude": -8.509785,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703324347,
      "ems": null
    },
    {
      "latitude": 40.137039,
      "longitude": -8.508484,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "3260",
      "timestamp": 1703324351,
      "ems": null
    },
    {
      "latitude": 40.137573,
      "longitude": -8.507288,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703324353,
      "ems": null
    },
    {
      "latitude": 40.13813,
      "longitude": -8.505978,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "3260",
      "timestamp": 1703324356,
      "ems": null
    },
    {
      "latitude": 40.138687,
      "longitude": -8.5047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703324360,
      "ems": null
    },
    {
      "latitude": 40.139435,
      "longitude": -8.503293,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "3260",
      "timestamp": 1703324363,
      "ems": null
    },
    {
      "latitude": 40.140289,
      "longitude": -8.502075,
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
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703324366,
      "ems": null
    },
    {
      "latitude": 40.141296,
      "longitude": -8.50116,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703324369,
      "ems": null
    },
    {
      "latitude": 40.142487,
      "longitude": -8.500366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3260",
      "timestamp": 1703324372,
      "ems": null
    },
    {
      "latitude": 40.143585,
      "longitude": -8.499878,
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
      "heading": 16,
      "squawk": "3260",
      "timestamp": 1703324375,
      "ems": null
    },
    {
      "latitude": 40.144775,
      "longitude": -8.499634,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3260",
      "timestamp": 1703324378,
      "ems": null
    },
    {
      "latitude": 40.146011,
      "longitude": -8.499512,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "3260",
      "timestamp": 1703324381,
      "ems": null
    },
    {
      "latitude": 40.147114,
      "longitude": -8.499423,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 1,
      "squawk": "3260",
      "timestamp": 1703324384,
      "ems": null
    },
    {
      "latitude": 40.148232,
      "longitude": -8.499485,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 356,
      "squawk": "3260",
      "timestamp": 1703324386,
      "ems": null
    },
    {
      "latitude": 40.149628,
      "longitude": -8.499673,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 353,
      "squawk": "3260",
      "timestamp": 1703324390,
      "ems": null
    },
    {
      "latitude": 40.150791,
      "longitude": -8.49986,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703324393,
      "ems": null
    },
    {
      "latitude": 40.152096,
      "longitude": -8.500172,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "3260",
      "timestamp": 1703324396,
      "ems": null
    },
    {
      "latitude": 40.153305,
      "longitude": -8.500546,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 347,
      "squawk": "3260",
      "timestamp": 1703324399,
      "ems": null
    },
    {
      "latitude": 40.154518,
      "longitude": -8.500921,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 344,
      "squawk": "3260",
      "timestamp": 1703324402,
      "ems": null
    },
    {
      "latitude": 40.155819,
      "longitude": -8.50142,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 343,
      "squawk": "3260",
      "timestamp": 1703324405,
      "ems": null
    },
    {
      "latitude": 40.15686,
      "longitude": -8.501831,
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
      "heading": 342,
      "squawk": "3260",
      "timestamp": 1703324408,
      "ems": null
    },
    {
      "latitude": 40.158188,
      "longitude": -8.502319,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 345,
      "squawk": "3260",
      "timestamp": 1703324411,
      "ems": null
    },
    {
      "latitude": 40.159378,
      "longitude": -8.502686,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 347,
      "squawk": "3260",
      "timestamp": 1703324414,
      "ems": null
    },
    {
      "latitude": 40.160568,
      "longitude": -8.50293,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 351,
      "squawk": "3260",
      "timestamp": 1703324417,
      "ems": null
    },
    {
      "latitude": 40.162804,
      "longitude": -8.503043,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "3260",
      "timestamp": 1703324423,
      "ems": null
    },
    {
      "latitude": 40.164108,
      "longitude": -8.502793,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 9,
      "squawk": "3260",
      "timestamp": 1703324426,
      "ems": null
    },
    {
      "latitude": 40.165039,
      "longitude": -8.502544,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 16,
      "squawk": "3260",
      "timestamp": 1703324429,
      "ems": null
    },
    {
      "latitude": 40.166157,
      "longitude": -8.50192,
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
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703324432,
      "ems": null
    },
    {
      "latitude": 40.167023,
      "longitude": -8.501282,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "3260",
      "timestamp": 1703324435,
      "ems": null
    },
    {
      "latitude": 40.167847,
      "longitude": -8.500305,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703324438,
      "ems": null
    },
    {
      "latitude": 40.168438,
      "longitude": -8.499423,
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
      "heading": 50,
      "squawk": "3260",
      "timestamp": 1703324441,
      "ems": null
    },
    {
      "latitude": 40.168991,
      "longitude": -8.498352,
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
      "heading": 58,
      "squawk": "3260",
      "timestamp": 1703324444,
      "ems": null
    },
    {
      "latitude": 40.169586,
      "longitude": -8.496948,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703324448,
      "ems": null
    },
    {
      "latitude": 40.169971,
      "longitude": -8.495803,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "3260",
      "timestamp": 1703324450,
      "ems": null
    },
    {
      "latitude": 40.17041,
      "longitude": -8.49469,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703324453,
      "ems": null
    },
    {
      "latitude": 40.170856,
      "longitude": -8.49368,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 57,
      "squawk": "3260",
      "timestamp": 1703324456,
      "ems": null
    },
    {
      "latitude": 40.171417,
      "longitude": -8.492682,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 55,
      "squawk": "3260",
      "timestamp": 1703324460,
      "ems": null
    },
    {
      "latitude": 40.171928,
      "longitude": -8.491683,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703324462,
      "ems": null
    },
    {
      "latitude": 40.17247,
      "longitude": -8.490662,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703324466,
      "ems": null
    },
    {
      "latitude": 40.173019,
      "longitude": -8.489746,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703324469,
      "ems": null
    },
    {
      "latitude": 40.174301,
      "longitude": -8.486689,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 78,
      "squawk": "3260",
      "timestamp": 1703324478,
      "ems": null
    },
    {
      "latitude": 40.174301,
      "longitude": -8.485535,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 96,
      "squawk": "3260",
      "timestamp": 1703324481,
      "ems": null
    },
    {
      "latitude": 40.174114,
      "longitude": -8.484504,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 107,
      "squawk": "3260",
      "timestamp": 1703324483,
      "ems": null
    },
    {
      "latitude": 40.173744,
      "longitude": -8.483443,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703324487,
      "ems": null
    },
    {
      "latitude": 40.173294,
      "longitude": -8.482361,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703324490,
      "ems": null
    },
    {
      "latitude": 40.172859,
      "longitude": -8.481258,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703324493,
      "ems": null
    },
    {
      "latitude": 40.172333,
      "longitude": -8.480286,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703324496,
      "ems": null
    },
    {
      "latitude": 40.171692,
      "longitude": -8.479553,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703324499,
      "ems": null
    },
    {
      "latitude": 40.170952,
      "longitude": -8.479011,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324502,
      "ems": null
    },
    {
      "latitude": 40.170254,
      "longitude": -8.478512,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324505,
      "ems": null
    },
    {
      "latitude": 40.169552,
      "longitude": -8.478012,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324508,
      "ems": null
    },
    {
      "latitude": 40.168762,
      "longitude": -8.477512,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703324511,
      "ems": null
    },
    {
      "latitude": 40.167938,
      "longitude": -8.477051,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703324514,
      "ems": null
    },
    {
      "latitude": 40.167179,
      "longitude": -8.476701,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703324517,
      "ems": null
    },
    {
      "latitude": 40.166336,
      "longitude": -8.476196,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703324520,
      "ems": null
    },
    {
      "latitude": 40.165642,
      "longitude": -8.475702,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324523,
      "ems": null
    },
    {
      "latitude": 40.165039,
      "longitude": -8.475204,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703324526,
      "ems": null
    },
    {
      "latitude": 40.163734,
      "longitude": -8.474267,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703324532,
      "ems": null
    },
    {
      "latitude": 40.162903,
      "longitude": -8.473816,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703324535,
      "ems": null
    },
    {
      "latitude": 40.160431,
      "longitude": -8.472519,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703324545,
      "ems": null
    },
    {
      "latitude": 40.158234,
      "longitude": -8.471069,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703324553,
      "ems": null
    },
    {
      "latitude": 40.157364,
      "longitude": -8.470154,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703324557,
      "ems": null
    },
    {
      "latitude": 40.156723,
      "longitude": -8.469543,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703324560,
      "ems": null
    },
    {
      "latitude": 40.156082,
      "longitude": -8.468872,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703324563,
      "ems": null
    },
    {
      "latitude": 40.155354,
      "longitude": -8.468212,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703324566,
      "ems": null
    },
    {
      "latitude": 40.154655,
      "longitude": -8.467525,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 143,
      "squawk": "3260",
      "timestamp": 1703324569,
      "ems": null
    },
    {
      "latitude": 40.153957,
      "longitude": -8.466901,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703324572,
      "ems": null
    },
    {
      "latitude": 40.15329,
      "longitude": -8.466248,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 145,
      "squawk": "3260",
      "timestamp": 1703324575,
      "ems": null
    },
    {
      "latitude": 40.151539,
      "longitude": -8.465153,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703324581,
      "ems": null
    },
    {
      "latitude": 40.150681,
      "longitude": -8.464844,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 168,
      "squawk": "3260",
      "timestamp": 1703324584,
      "ems": null
    },
    {
      "latitude": 40.14949,
      "longitude": -8.464783,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 183,
      "squawk": "3260",
      "timestamp": 1703324587,
      "ems": null
    },
    {
      "latitude": 40.148529,
      "longitude": -8.465027,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 194,
      "squawk": "3260",
      "timestamp": 1703324590,
      "ems": null
    },
    {
      "latitude": 40.147533,
      "longitude": -8.465652,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703324593,
      "ems": null
    },
    {
      "latitude": 40.146648,
      "longitude": -8.466526,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "3260",
      "timestamp": 1703324596,
      "ems": null
    },
    {
      "latitude": 40.145782,
      "longitude": -8.467712,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "3260",
      "timestamp": 1703324599,
      "ems": null
    },
    {
      "latitude": 40.14505,
      "longitude": -8.469055,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 238,
      "squawk": "3260",
      "timestamp": 1703324602,
      "ems": null
    },
    {
      "latitude": 40.144501,
      "longitude": -8.470459,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 243,
      "squawk": "3260",
      "timestamp": 1703324605,
      "ems": null
    },
    {
      "latitude": 40.144089,
      "longitude": -8.472082,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 254,
      "squawk": "3260",
      "timestamp": 1703324608,
      "ems": null
    },
    {
      "latitude": 40.143906,
      "longitude": -8.473877,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 267,
      "squawk": "3260",
      "timestamp": 1703324611,
      "ems": null
    },
    {
      "latitude": 40.143997,
      "longitude": -8.47539,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 278,
      "squawk": "3260",
      "timestamp": 1703324614,
      "ems": null
    },
    {
      "latitude": 40.144882,
      "longitude": -8.478012,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 303,
      "squawk": "3260",
      "timestamp": 1703324619,
      "ems": null
    },
    {
      "latitude": 40.145161,
      "longitude": -8.478449,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 309,
      "squawk": "3260",
      "timestamp": 1703324620,
      "ems": null
    },
    {
      "latitude": 40.146183,
      "longitude": -8.47951,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 327,
      "squawk": "3260",
      "timestamp": 1703324623,
      "ems": null
    },
    {
      "latitude": 40.147568,
      "longitude": -8.48053,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 331,
      "squawk": "3260",
      "timestamp": 1703324626,
      "ems": null
    },
    {
      "latitude": 40.148697,
      "longitude": -8.48132,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 331,
      "squawk": "3260",
      "timestamp": 1703324629,
      "ems": null
    },
    {
      "latitude": 40.149815,
      "longitude": -8.482132,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "3260",
      "timestamp": 1703324632,
      "ems": null
    },
    {
      "latitude": 40.151073,
      "longitude": -8.483068,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 330,
      "squawk": "3260",
      "timestamp": 1703324635,
      "ems": null
    },
    {
      "latitude": 40.152142,
      "longitude": -8.48388,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703324638,
      "ems": null
    },
    {
      "latitude": 40.153381,
      "longitude": -8.484863,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 328,
      "squawk": "3260",
      "timestamp": 1703324641,
      "ems": null
    },
    {
      "latitude": 40.154518,
      "longitude": -8.485815,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 328,
      "squawk": "3260",
      "timestamp": 1703324644,
      "ems": null
    },
    {
      "latitude": 40.155869,
      "longitude": -8.486938,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 327,
      "squawk": "3260",
      "timestamp": 1703324647,
      "ems": null
    },
    {
      "latitude": 40.159313,
      "longitude": -8.489747,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "squawk": "3260",
      "timestamp": 1703324657,
      "ems": null
    },
    {
      "latitude": 40.162857,
      "longitude": -8.492371,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 330,
      "squawk": "3260",
      "timestamp": 1703324666,
      "ems": null
    },
    {
      "latitude": 40.165874,
      "longitude": -8.494617,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "3260",
      "timestamp": 1703324675,
      "ems": null
    },
    {
      "latitude": 40.166855,
      "longitude": -8.495303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "3260",
      "timestamp": 1703324677,
      "ems": null
    },
    {
      "latitude": 40.167847,
      "longitude": -8.495972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "3260",
      "timestamp": 1703324681,
      "ems": null
    },
    {
      "latitude": 40.168621,
      "longitude": -8.496427,
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
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324683,
      "ems": null
    },
    {
      "latitude": 40.169678,
      "longitude": -8.497009,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703324687,
      "ems": null
    },
    {
      "latitude": 40.170486,
      "longitude": -8.497176,
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
      "heading": 357,
      "squawk": "3260",
      "timestamp": 1703324689,
      "ems": null
    },
    {
      "latitude": 40.171322,
      "longitude": -8.497051,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 8,
      "squawk": "3260",
      "timestamp": 1703324692,
      "ems": null
    },
    {
      "latitude": 40.172562,
      "longitude": -8.49646,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 24,
      "squawk": "3260",
      "timestamp": 1703324696,
      "ems": null
    },
    {
      "latitude": 40.173386,
      "longitude": -8.495789,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 37,
      "squawk": "3260",
      "timestamp": 1703324699,
      "ems": null
    },
    {
      "latitude": 40.174068,
      "longitude": -8.494866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "3260",
      "timestamp": 1703324701,
      "ems": null
    },
    {
      "latitude": 40.174629,
      "longitude": -8.49393,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 51,
      "squawk": "3260",
      "timestamp": 1703324704,
      "ems": null
    },
    {
      "latitude": 40.175217,
      "longitude": -8.49292,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "3260",
      "timestamp": 1703324707,
      "ems": null
    },
    {
      "latitude": 40.175812,
      "longitude": -8.491943,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703324711,
      "ems": null
    },
    {
      "latitude": 40.17627,
      "longitude": -8.491028,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 59,
      "squawk": "3260",
      "timestamp": 1703324713,
      "ems": null
    },
    {
      "latitude": 40.176678,
      "longitude": -8.489997,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703324716,
      "ems": null
    },
    {
      "latitude": 40.177002,
      "longitude": -8.488873,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "3260",
      "timestamp": 1703324719,
      "ems": null
    },
    {
      "latitude": 40.177189,
      "longitude": -8.48775,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 85,
      "squawk": "3260",
      "timestamp": 1703324722,
      "ems": null
    },
    {
      "latitude": 40.177048,
      "longitude": -8.486511,
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
      "heading": 101,
      "squawk": "3260",
      "timestamp": 1703324725,
      "ems": null
    },
    {
      "latitude": 40.176773,
      "longitude": -8.485413,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "3260",
      "timestamp": 1703324729,
      "ems": null
    },
    {
      "latitude": 40.176304,
      "longitude": -8.484254,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 118,
      "squawk": "3260",
      "timestamp": 1703324732,
      "ems": null
    },
    {
      "latitude": 40.175858,
      "longitude": -8.483276,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 120,
      "squawk": "3260",
      "timestamp": 1703324734,
      "ems": null
    },
    {
      "latitude": 40.175308,
      "longitude": -8.482178,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 125,
      "squawk": "3260",
      "timestamp": 1703324738,
      "ems": null
    },
    {
      "latitude": 40.174667,
      "longitude": -8.481201,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 133,
      "squawk": "3260",
      "timestamp": 1703324741,
      "ems": null
    },
    {
      "latitude": 40.173981,
      "longitude": -8.48053,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 150,
      "squawk": "3260",
      "timestamp": 1703324744,
      "ems": null
    },
    {
      "latitude": 40.173065,
      "longitude": -8.47998,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703324747,
      "ems": null
    },
    {
      "latitude": 40.172104,
      "longitude": -8.479492,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703324750,
      "ems": null
    },
    {
      "latitude": 40.17123,
      "longitude": -8.479074,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703324753,
      "ems": null
    },
    {
      "latitude": 40.17041,
      "longitude": -8.478516,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703324756,
      "ems": null
    },
    {
      "latitude": 40.169552,
      "longitude": -8.47795,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703324759,
      "ems": null
    },
    {
      "latitude": 40.168625,
      "longitude": -8.477356,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324762,
      "ems": null
    },
    {
      "latitude": 40.167801,
      "longitude": -8.476746,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703324765,
      "ems": null
    },
    {
      "latitude": 40.166901,
      "longitude": -8.476202,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703324768,
      "ems": null
    },
    {
      "latitude": 40.166107,
      "longitude": -8.475702,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703324771,
      "ems": null
    },
    {
      "latitude": 40.164322,
      "longitude": -8.474548,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703324777,
      "ems": null
    },
    {
      "latitude": 40.163548,
      "longitude": -8.473954,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324780,
      "ems": null
    },
    {
      "latitude": 40.162811,
      "longitude": -8.47345,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703324783,
      "ems": null
    },
    {
      "latitude": 40.160381,
      "longitude": -8.471894,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703324792,
      "ems": null
    },
    {
      "latitude": 40.158195,
      "longitude": -8.470459,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "3260",
      "timestamp": 1703324801,
      "ems": null
    },
    {
      "latitude": 40.155819,
      "longitude": -8.468961,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703324810,
      "ems": null
    },
    {
      "latitude": 40.153355,
      "longitude": -8.467525,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703324819,
      "ems": null
    },
    {
      "latitude": 40.151688,
      "longitude": -8.466614,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703324825,
      "ems": null
    },
    {
      "latitude": 40.149956,
      "longitude": -8.465714,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 157,
      "squawk": "3260",
      "timestamp": 1703324831,
      "ems": null
    },
    {
      "latitude": 40.14917,
      "longitude": -8.465332,
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
      "heading": 160,
      "squawk": "3260",
      "timestamp": 1703324834,
      "ems": null
    },
    {
      "latitude": 40.1483,
      "longitude": -8.464966,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 161,
      "squawk": "3260",
      "timestamp": 1703324837,
      "ems": null
    },
    {
      "latitude": 40.145767,
      "longitude": -8.463717,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 159,
      "squawk": "3260",
      "timestamp": 1703324846,
      "ems": null
    },
    {
      "latitude": 40.144833,
      "longitude": -8.463343,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 164,
      "squawk": "3260",
      "timestamp": 1703324849,
      "ems": null
    },
    {
      "latitude": 40.143669,
      "longitude": -8.463093,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 174,
      "squawk": "3260",
      "timestamp": 1703324853,
      "ems": null
    },
    {
      "latitude": 40.142738,
      "longitude": -8.463156,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 182,
      "squawk": "3260",
      "timestamp": 1703324855,
      "ems": null
    },
    {
      "latitude": 40.141617,
      "longitude": -8.463501,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 195,
      "squawk": "3260",
      "timestamp": 1703324858,
      "ems": null
    },
    {
      "latitude": 40.140564,
      "longitude": -8.464111,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 207,
      "squawk": "3260",
      "timestamp": 1703324861,
      "ems": null
    },
    {
      "latitude": 40.139759,
      "longitude": -8.464841,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 217,
      "squawk": "3260",
      "timestamp": 1703324864,
      "ems": null
    },
    {
      "latitude": 40.138733,
      "longitude": -8.466309,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 233,
      "squawk": "3260",
      "timestamp": 1703324868,
      "ems": null
    },
    {
      "latitude": 40.138138,
      "longitude": -8.467651,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 244,
      "squawk": "3260",
      "timestamp": 1703324871,
      "ems": null
    },
    {
      "latitude": 40.13776,
      "longitude": -8.469024,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 252,
      "squawk": "3260",
      "timestamp": 1703324873,
      "ems": null
    },
    {
      "latitude": 40.137432,
      "longitude": -8.470709,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "3260",
      "timestamp": 1703324876,
      "ems": null
    },
    {
      "latitude": 40.137405,
      "longitude": -8.472351,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 273,
      "squawk": "3260",
      "timestamp": 1703324880,
      "ems": null
    },
    {
      "latitude": 40.137432,
      "longitude": -8.472644,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 277,
      "squawk": "3260",
      "timestamp": 1703324880,
      "ems": null
    },
    {
      "latitude": 40.138321,
      "longitude": -8.475037,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 308,
      "squawk": "3260",
      "timestamp": 1703324886,
      "ems": null
    },
    {
      "latitude": 40.138737,
      "longitude": -8.475577,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 313,
      "squawk": "3260",
      "timestamp": 1703324887,
      "ems": null
    },
    {
      "latitude": 40.140366,
      "longitude": -8.477076,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "3260",
      "timestamp": 1703324892,
      "ems": null
    },
    {
      "latitude": 40.141529,
      "longitude": -8.4777,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "3260",
      "timestamp": 1703324895,
      "ems": null
    },
    {
      "latitude": 40.142693,
      "longitude": -8.478262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703324898,
      "ems": null
    },
    {
      "latitude": 40.14386,
      "longitude": -8.478821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "3260",
      "timestamp": 1703324901,
      "ems": null
    },
    {
      "latitude": 40.145004,
      "longitude": -8.479309,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703324903,
      "ems": null
    },
    {
      "latitude": 40.146332,
      "longitude": -8.479919,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703324907,
      "ems": null
    },
    {
      "latitude": 40.147579,
      "longitude": -8.480447,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "3260",
      "timestamp": 1703324910,
      "ems": null
    },
    {
      "latitude": 40.148758,
      "longitude": -8.481018,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703324913,
      "ems": null
    },
    {
      "latitude": 40.15004,
      "longitude": -8.481689,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703324916,
      "ems": null
    },
    {
      "latitude": 40.151093,
      "longitude": -8.482178,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 339,
      "squawk": "3260",
      "timestamp": 1703324918,
      "ems": null
    },
    {
      "latitude": 40.154617,
      "longitude": -8.484253,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324927,
      "ems": null
    },
    {
      "latitude": 40.155853,
      "longitude": -8.484985,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324931,
      "ems": null
    },
    {
      "latitude": 40.156937,
      "longitude": -8.48569,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324934,
      "ems": null
    },
    {
      "latitude": 40.158195,
      "longitude": -8.486439,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324937,
      "ems": null
    },
    {
      "latitude": 40.159058,
      "longitude": -8.487,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324939,
      "ems": null
    },
    {
      "latitude": 40.160156,
      "longitude": -8.487671,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324943,
      "ems": null
    },
    {
      "latitude": 40.161175,
      "longitude": -8.488312,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "3260",
      "timestamp": 1703324946,
      "ems": null
    },
    {
      "latitude": 40.162079,
      "longitude": -8.488953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "3260",
      "timestamp": 1703324949,
      "ems": null
    },
    {
      "latitude": 40.162811,
      "longitude": -8.489441,
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
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703324951,
      "ems": null
    },
    {
      "latitude": 40.163727,
      "longitude": -8.490234,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "3260",
      "timestamp": 1703324955,
      "ems": null
    },
    {
      "latitude": 40.166248,
      "longitude": -8.49212,
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
      "heading": 329,
      "squawk": "3260",
      "timestamp": 1703324964,
      "ems": null
    },
    {
      "latitude": 40.167984,
      "longitude": -8.493164,
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
      "heading": 341,
      "squawk": "3260",
      "timestamp": 1703324970,
      "ems": null
    },
    {
      "latitude": 40.168991,
      "longitude": -8.493286,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "3260",
      "timestamp": 1703324973,
      "ems": null
    },
    {
      "latitude": 40.170067,
      "longitude": -8.493056,
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
      "heading": 15,
      "squawk": "3260",
      "timestamp": 1703324976,
      "ems": null
    },
    {
      "latitude": 40.170776,
      "longitude": -8.492615,
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
      "heading": 28,
      "squawk": "3260",
      "timestamp": 1703324978,
      "ems": null
    },
    {
      "latitude": 40.17165,
      "longitude": -8.491745,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 43,
      "squawk": "3260",
      "timestamp": 1703324982,
      "ems": null
    },
    {
      "latitude": 40.172348,
      "longitude": -8.490622,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 51,
      "squawk": "3260",
      "timestamp": 1703324985,
      "ems": null
    },
    {
      "latitude": 40.172882,
      "longitude": -8.489624,
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
      "heading": 54,
      "squawk": "3260",
      "timestamp": 1703324988,
      "ems": null
    },
    {
      "latitude": 40.173416,
      "longitude": -8.488562,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "3260",
      "timestamp": 1703324991,
      "ems": null
    },
    {
      "latitude": 40.173836,
      "longitude": -8.487563,
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
      "heading": 63,
      "squawk": "3260",
      "timestamp": 1703324994,
      "ems": null
    },
    {
      "latitude": 40.174164,
      "longitude": -8.48645,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "3260",
      "timestamp": 1703324997,
      "ems": null
    },
    {
      "latitude": 40.174347,
      "longitude": -8.485474,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 79,
      "squawk": "3260",
      "timestamp": 1703325000,
      "ems": null
    },
    {
      "latitude": 40.174397,
      "longitude": -8.484192,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 93,
      "squawk": "3260",
      "timestamp": 1703325003,
      "ems": null
    },
    {
      "latitude": 40.17421,
      "longitude": -8.483154,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 105,
      "squawk": "3260",
      "timestamp": 1703325006,
      "ems": null
    },
    {
      "latitude": 40.17379,
      "longitude": -8.482007,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "3260",
      "timestamp": 1703325009,
      "ems": null
    },
    {
      "latitude": 40.173203,
      "longitude": -8.481018,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 128,
      "squawk": "3260",
      "timestamp": 1703325012,
      "ems": null
    },
    {
      "latitude": 40.172516,
      "longitude": -8.480164,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "3260",
      "timestamp": 1703325015,
      "ems": null
    },
    {
      "latitude": 40.171833,
      "longitude": -8.47951,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 142,
      "squawk": "3260",
      "timestamp": 1703325018,
      "ems": null
    },
    {
      "latitude": 40.171135,
      "longitude": -8.478824,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 144,
      "squawk": "3260",
      "timestamp": 1703325021,
      "ems": null
    },
    {
      "latitude": 40.170437,
      "longitude": -8.478324,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 154,
      "squawk": "3260",
      "timestamp": 1703325024,
      "ems": null
    },
    {
      "latitude": 40.169693,
      "longitude": -8.477887,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 158,
      "squawk": "3260",
      "timestamp": 1703325027,
      "ems": null
    },
    {
      "latitude": 40.168854,
      "longitude": -8.47745,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703325030,
      "ems": null
    },
    {
      "latitude": 40.168167,
      "longitude": -8.47699,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703325033,
      "ems": null
    },
    {
      "latitude": 40.167412,
      "longitude": -8.476577,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703325036,
      "ems": null
    },
    {
      "latitude": 40.166622,
      "longitude": -8.476139,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 156,
      "squawk": "3260",
      "timestamp": 1703325039,
      "ems": null
    },
    {
      "latitude": 40.165924,
      "longitude": -8.475708,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 155,
      "squawk": "3260",
      "timestamp": 1703325042,
      "ems": null
    },
    {
      "latitude": 40.165272,
      "longitude": -8.475266,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703325045,
      "ems": null
    },
    {
      "latitude": 40.164246,
      "longitude": -8.474454,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 149,
      "squawk": "3260",
      "timestamp": 1703325051,
      "ems": null
    },
    {
      "latitude": 40.162033,
      "longitude": -8.473022,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 152,
      "squawk": "3260",
      "timestamp": 1703325060,
      "ems": null
    },
    {
      "latitude": 40.160202,
      "longitude": -8.471802,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "3260",
      "timestamp": 1703325069,
      "ems": null
    },
  ]
};
