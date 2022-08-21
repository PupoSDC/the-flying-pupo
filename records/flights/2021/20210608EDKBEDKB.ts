import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20210608EDKBEDKB",
    callsign: "PHIOT",
    name: "Pre-check ride review flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2021, 5, 8, 12, 8).getTime(),
    arrival: new Date(2021, 5, 8, 13, 55).getTime(),
    singleEnginePistonTime: 107,
    picTime: 0,
    dualTime: 107,
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
      "latitude": 50.771687,
      "longitude": 7.148056,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 284,
      "squawk": "0",
      "timestamp": 1623154534,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.145309,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 281,
      "squawk": "0",
      "timestamp": 1623154540,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.142334,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 271,
      "squawk": "0",
      "timestamp": 1623154546,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 7.141039,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1623154549,
      "ems": null
    },
    {
      "latitude": 50.772079,
      "longitude": 7.140816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "0",
      "timestamp": 1623154550,
      "ems": null
    },
    {
      "latitude": 50.771175,
      "longitude": 7.138443,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 234,
      "squawk": "0",
      "timestamp": 1623154555,
      "ems": null
    },
    {
      "latitude": 50.77108,
      "longitude": 7.138214,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 234,
      "squawk": "0",
      "timestamp": 1623154556,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 7.137179,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 234,
      "squawk": "0",
      "timestamp": 1623154558,
      "ems": null
    },
    {
      "latitude": 50.770111,
      "longitude": 7.136065,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 236,
      "squawk": "0",
      "timestamp": 1623154561,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.134581,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 237,
      "squawk": "0",
      "timestamp": 1623154564,
      "ems": null
    },
    {
      "latitude": 50.768986,
      "longitude": 7.133331,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 236,
      "squawk": "0",
      "timestamp": 1623154567,
      "ems": null
    },
    {
      "latitude": 50.768463,
      "longitude": 7.132131,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "0",
      "timestamp": 1623154570,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.130572,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 238,
      "squawk": "0",
      "timestamp": 1623154573,
      "ems": null
    },
    {
      "latitude": 50.767357,
      "longitude": 7.129211,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 239,
      "squawk": "0",
      "timestamp": 1623154576,
      "ems": null
    },
    {
      "latitude": 50.767265,
      "longitude": 7.128906,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1623154577,
      "ems": null
    },
    {
      "latitude": 50.766769,
      "longitude": 7.127603,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1623154579,
      "ems": null
    },
    {
      "latitude": 50.76622,
      "longitude": 7.126193,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1623154582,
      "ems": null
    },
    {
      "latitude": 50.765671,
      "longitude": 7.124634,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1623154585,
      "ems": null
    },
    {
      "latitude": 50.765121,
      "longitude": 7.123108,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1623154588,
      "ems": null
    },
    {
      "latitude": 50.764526,
      "longitude": 7.121442,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1623154591,
      "ems": null
    },
    {
      "latitude": 50.763428,
      "longitude": 7.11825,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1623154597,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.116623,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1623154600,
      "ems": null
    },
    {
      "latitude": 50.761414,
      "longitude": 7.11194,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1623154609,
      "ems": null
    },
    {
      "latitude": 50.760372,
      "longitude": 7.108612,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1623154615,
      "ems": null
    },
    {
      "latitude": 50.760269,
      "longitude": 7.108377,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1623154616,
      "ems": null
    },
    {
      "latitude": 50.759903,
      "longitude": 7.107041,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1623154618,
      "ems": null
    },
    {
      "latitude": 50.759026,
      "longitude": 7.103806,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1623154624,
      "ems": null
    },
    {
      "latitude": 50.758141,
      "longitude": 7.100601,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1623154630,
      "ems": null
    },
    {
      "latitude": 50.757256,
      "longitude": 7.097397,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1623154636,
      "ems": null
    },
    {
      "latitude": 50.756195,
      "longitude": 7.09457,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1623154642,
      "ems": null
    },
    {
      "latitude": 50.756092,
      "longitude": 7.094345,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1623154643,
      "ems": null
    },
    {
      "latitude": 50.755344,
      "longitude": 7.093201,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1623154645,
      "ems": null
    },
    {
      "latitude": 50.754639,
      "longitude": 7.092343,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1623154648,
      "ems": null
    },
    {
      "latitude": 50.754456,
      "longitude": 7.09212,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1623154649,
      "ems": null
    },
    {
      "latitude": 50.753723,
      "longitude": 7.091452,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1623154651,
      "ems": null
    },
    {
      "latitude": 50.752739,
      "longitude": 7.090836,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1623154654,
      "ems": null
    },
    {
      "latitude": 50.75148,
      "longitude": 7.090413,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1623154657,
      "ems": null
    },
    {
      "latitude": 50.750458,
      "longitude": 7.090225,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1623154660,
      "ems": null
    },
    {
      "latitude": 50.750244,
      "longitude": 7.09019,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1623154661,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.09019,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1623154663,
      "ems": null
    },
    {
      "latitude": 50.748184,
      "longitude": 7.090339,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1623154666,
      "ems": null
    },
    {
      "latitude": 50.747086,
      "longitude": 7.09071,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1623154669,
      "ems": null
    },
    {
      "latitude": 50.745991,
      "longitude": 7.091293,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1623154672,
      "ems": null
    },
    {
      "latitude": 50.745026,
      "longitude": 7.092046,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1623154675,
      "ems": null
    },
    {
      "latitude": 50.743927,
      "longitude": 7.092937,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1623154678,
      "ems": null
    },
    {
      "latitude": 50.742962,
      "longitude": 7.093887,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1623154681,
      "ems": null
    },
    {
      "latitude": 50.740997,
      "longitude": 7.095832,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1623154687,
      "ems": null
    },
    {
      "latitude": 50.738914,
      "longitude": 7.097931,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1623154693,
      "ems": null
    },
    {
      "latitude": 50.737003,
      "longitude": 7.099991,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1623154699,
      "ems": null
    },
    {
      "latitude": 50.735188,
      "longitude": 7.101974,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1623154705,
      "ems": null
    },
    {
      "latitude": 50.733791,
      "longitude": 7.103653,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1623154709,
      "ems": null
    },
    {
      "latitude": 50.732071,
      "longitude": 7.105927,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1623154715,
      "ems": null
    },
    {
      "latitude": 50.731293,
      "longitude": 7.107041,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1623154717,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 7.108451,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1623154721,
      "ems": null
    },
    {
      "latitude": 50.729603,
      "longitude": 7.109604,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1623154723,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 7.112089,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1623154729,
      "ems": null
    },
    {
      "latitude": 50.727631,
      "longitude": 7.112311,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1623154730,
      "ems": null
    },
    {
      "latitude": 50.726028,
      "longitude": 7.114686,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1623154735,
      "ems": null
    },
    {
      "latitude": 50.72504,
      "longitude": 7.11647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1623154739,
      "ems": null
    },
    {
      "latitude": 50.723225,
      "longitude": 7.119446,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1623154745,
      "ems": null
    },
    {
      "latitude": 50.721359,
      "longitude": 7.122704,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1623154751,
      "ems": null
    },
    {
      "latitude": 50.718613,
      "longitude": 7.127529,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1623154760,
      "ems": null
    },
    {
      "latitude": 50.712296,
      "longitude": 7.137847,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1623154779,
      "ems": null
    },
    {
      "latitude": 50.710602,
      "longitude": 7.140074,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1623154784,
      "ems": null
    },
    {
      "latitude": 50.708405,
      "longitude": 7.142895,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1623154790,
      "ems": null
    },
    {
      "latitude": 50.70507,
      "longitude": 7.146835,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1623154799,
      "ems": null
    },
    {
      "latitude": 50.703907,
      "longitude": 7.14798,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623154802,
      "ems": null
    },
    {
      "latitude": 50.702682,
      "longitude": 7.149205,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623154805,
      "ems": null
    },
    {
      "latitude": 50.701439,
      "longitude": 7.150421,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623154808,
      "ems": null
    },
    {
      "latitude": 50.700394,
      "longitude": 7.151432,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1623154811,
      "ems": null
    },
    {
      "latitude": 50.699158,
      "longitude": 7.152545,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1623154814,
      "ems": null
    },
    {
      "latitude": 50.698784,
      "longitude": 7.152863,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623154815,
      "ems": null
    },
    {
      "latitude": 50.696686,
      "longitude": 7.154772,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1623154820,
      "ems": null
    },
    {
      "latitude": 50.695404,
      "longitude": 7.156034,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623154823,
      "ems": null
    },
    {
      "latitude": 50.693108,
      "longitude": 7.158508,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623154829,
      "ems": null
    },
    {
      "latitude": 50.689819,
      "longitude": 7.161527,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1623154837,
      "ems": null
    },
    {
      "latitude": 50.689335,
      "longitude": 7.161942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1623154838,
      "ems": null
    },
    {
      "latitude": 50.686729,
      "longitude": 7.164154,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1623154844,
      "ems": null
    },
    {
      "latitude": 50.682724,
      "longitude": 7.167317,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1623154853,
      "ems": null
    },
    {
      "latitude": 50.680073,
      "longitude": 7.169189,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623154859,
      "ems": null
    },
    {
      "latitude": 50.677277,
      "longitude": 7.171097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1623154865,
      "ems": null
    },
    {
      "latitude": 50.675995,
      "longitude": 7.171919,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1623154868,
      "ems": null
    },
    {
      "latitude": 50.673294,
      "longitude": 7.173701,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623154874,
      "ems": null
    },
    {
      "latitude": 50.67062,
      "longitude": 7.175483,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623154880,
      "ems": null
    },
    {
      "latitude": 50.666573,
      "longitude": 7.177932,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1623154889,
      "ems": null
    },
    {
      "latitude": 50.663818,
      "longitude": 7.179493,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1623154895,
      "ems": null
    },
    {
      "latitude": 50.662399,
      "longitude": 7.180216,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1623154898,
      "ems": null
    },
    {
      "latitude": 50.659542,
      "longitude": 7.181718,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1623154904,
      "ems": null
    },
    {
      "latitude": 50.65654,
      "longitude": 7.183179,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1623154910,
      "ems": null
    },
    {
      "latitude": 50.653629,
      "longitude": 7.184539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1623154916,
      "ems": null
    },
    {
      "latitude": 50.652279,
      "longitude": 7.185133,
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1623154919,
      "ems": null
    },
    {
      "latitude": 50.650635,
      "longitude": 7.185709,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1623154922,
      "ems": null
    },
    {
      "latitude": 50.646416,
      "longitude": 7.18684,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1623154931,
      "ems": null
    },
    {
      "latitude": 50.644043,
      "longitude": 7.187372,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1623154936,
      "ems": null
    },
    {
      "latitude": 50.643356,
      "longitude": 7.187516,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1623154937,
      "ems": null
    },
    {
      "latitude": 50.640362,
      "longitude": 7.188028,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623154943,
      "ems": null
    },
    {
      "latitude": 50.63892,
      "longitude": 7.188176,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623154946,
      "ems": null
    },
    {
      "latitude": 50.637524,
      "longitude": 7.188325,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1623154949,
      "ems": null
    },
    {
      "latitude": 50.635986,
      "longitude": 7.188473,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623154952,
      "ems": null
    },
    {
      "latitude": 50.634731,
      "longitude": 7.188548,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623154955,
      "ems": null
    },
    {
      "latitude": 50.633057,
      "longitude": 7.1886,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623154958,
      "ems": null
    },
    {
      "latitude": 50.631611,
      "longitude": 7.188622,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623154961,
      "ems": null
    },
    {
      "latitude": 50.630173,
      "longitude": 7.1886,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623154964,
      "ems": null
    },
    {
      "latitude": 50.628632,
      "longitude": 7.188548,
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
      "heading": 182,
      "squawk": "4451",
      "timestamp": 1623154967,
      "ems": null
    },
    {
      "latitude": 50.625732,
      "longitude": 7.188167,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 185,
      "squawk": "4451",
      "timestamp": 1623154973,
      "ems": null
    },
    {
      "latitude": 50.624405,
      "longitude": 7.187878,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1623154976,
      "ems": null
    },
    {
      "latitude": 50.622997,
      "longitude": 7.187508,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1623154979,
      "ems": null
    },
    {
      "latitude": 50.621555,
      "longitude": 7.187137,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623154982,
      "ems": null
    },
    {
      "latitude": 50.620331,
      "longitude": 7.186649,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623154985,
      "ems": null
    },
    {
      "latitude": 50.619183,
      "longitude": 7.186172,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623154988,
      "ems": null
    },
    {
      "latitude": 50.617905,
      "longitude": 7.185709,
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623154990,
      "ems": null
    },
    {
      "latitude": 50.61644,
      "longitude": 7.185059,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623154994,
      "ems": null
    },
    {
      "latitude": 50.615131,
      "longitude": 7.184539,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623154997,
      "ems": null
    },
    {
      "latitude": 50.614059,
      "longitude": 7.184191,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623155000,
      "ems": null
    },
    {
      "latitude": 50.612709,
      "longitude": 7.183648,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623155003,
      "ems": null
    },
    {
      "latitude": 50.611404,
      "longitude": 7.183035,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623155006,
      "ems": null
    },
    {
      "latitude": 50.608658,
      "longitude": 7.182168,
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623155012,
      "ems": null
    },
    {
      "latitude": 50.6054,
      "longitude": 7.181124,
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
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623155020,
      "ems": null
    },
    {
      "latitude": 50.602097,
      "longitude": 7.180011,
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623155027,
      "ems": null
    },
    {
      "latitude": 50.599548,
      "longitude": 7.179132,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623155033,
      "ems": null
    },
    {
      "latitude": 50.597076,
      "longitude": 7.177975,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623155039,
      "ems": null
    },
    {
      "latitude": 50.594513,
      "longitude": 7.176819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623155045,
      "ems": null
    },
    {
      "latitude": 50.592087,
      "longitude": 7.175663,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623155050,
      "ems": null
    },
    {
      "latitude": 50.591858,
      "longitude": 7.17559,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623155052,
      "ems": null
    },
    {
      "latitude": 50.589436,
      "longitude": 7.174369,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623155057,
      "ems": null
    },
    {
      "latitude": 50.58815,
      "longitude": 7.173639,
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623155061,
      "ems": null
    },
    {
      "latitude": 50.581833,
      "longitude": 7.169013,
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623155077,
      "ems": null
    },
    {
      "latitude": 50.579891,
      "longitude": 7.167614,
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623155081,
      "ems": null
    },
    {
      "latitude": 50.578629,
      "longitude": 7.166483,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1623155085,
      "ems": null
    },
    {
      "latitude": 50.577656,
      "longitude": 7.165016,
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
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623155088,
      "ems": null
    },
    {
      "latitude": 50.576523,
      "longitude": 7.161279,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623155094,
      "ems": null
    },
    {
      "latitude": 50.576492,
      "longitude": 7.15737,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623155100,
      "ems": null
    },
    {
      "latitude": 50.576614,
      "longitude": 7.15528,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623155103,
      "ems": null
    },
    {
      "latitude": 50.576706,
      "longitude": 7.153473,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623155106,
      "ems": null
    },
    {
      "latitude": 50.576817,
      "longitude": 7.151654,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623155108,
      "ems": null
    },
    {
      "latitude": 50.577118,
      "longitude": 7.147618,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1623155115,
      "ems": null
    },
    {
      "latitude": 50.577377,
      "longitude": 7.145864,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623155117,
      "ems": null
    },
    {
      "latitude": 50.577656,
      "longitude": 7.144157,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623155120,
      "ems": null
    },
    {
      "latitude": 50.578033,
      "longitude": 7.142414,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155123,
      "ems": null
    },
    {
      "latitude": 50.578121,
      "longitude": 7.142078,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155124,
      "ems": null
    },
    {
      "latitude": 50.5784,
      "longitude": 7.140668,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155126,
      "ems": null
    },
    {
      "latitude": 50.578445,
      "longitude": 7.14039,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623155127,
      "ems": null
    },
    {
      "latitude": 50.578773,
      "longitude": 7.138812,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623155129,
      "ems": null
    },
    {
      "latitude": 50.579098,
      "longitude": 7.137031,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623155132,
      "ems": null
    },
    {
      "latitude": 50.579147,
      "longitude": 7.136734,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623155133,
      "ems": null
    },
    {
      "latitude": 50.579426,
      "longitude": 7.1351,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623155136,
      "ems": null
    },
    {
      "latitude": 50.579704,
      "longitude": 7.133393,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623155138,
      "ems": null
    },
    {
      "latitude": 50.580322,
      "longitude": 7.129694,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623155145,
      "ems": null
    },
    {
      "latitude": 50.580776,
      "longitude": 7.126415,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623155150,
      "ems": null
    },
    {
      "latitude": 50.580826,
      "longitude": 7.12608,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623155151,
      "ems": null
    },
    {
      "latitude": 50.580917,
      "longitude": 7.124417,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623155154,
      "ems": null
    },
    {
      "latitude": 50.580963,
      "longitude": 7.122333,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623155157,
      "ems": null
    },
    {
      "latitude": 50.580868,
      "longitude": 7.120477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623155160,
      "ems": null
    },
    {
      "latitude": 50.580597,
      "longitude": 7.118707,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623155163,
      "ems": null
    },
    {
      "latitude": 50.580265,
      "longitude": 7.116765,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1623155166,
      "ems": null
    },
    {
      "latitude": 50.579865,
      "longitude": 7.114948,
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623155169,
      "ems": null
    },
    {
      "latitude": 50.578903,
      "longitude": 7.111118,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1623155175,
      "ems": null
    },
    {
      "latitude": 50.5784,
      "longitude": 7.109166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1623155178,
      "ems": null
    },
    {
      "latitude": 50.577164,
      "longitude": 7.103312,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623155187,
      "ems": null
    },
    {
      "latitude": 50.576817,
      "longitude": 7.101473,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623155190,
      "ems": null
    },
    {
      "latitude": 50.576351,
      "longitude": 7.099469,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623155193,
      "ems": null
    },
    {
      "latitude": 50.573746,
      "longitude": 7.09457,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1623155202,
      "ems": null
    },
    {
      "latitude": 50.572723,
      "longitude": 7.09341,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623155205,
      "ems": null
    },
    {
      "latitude": 50.571419,
      "longitude": 7.09212,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1623155208,
      "ems": null
    },
    {
      "latitude": 50.570255,
      "longitude": 7.091155,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623155211,
      "ems": null
    },
    {
      "latitude": 50.566113,
      "longitude": 7.089967,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623155220,
      "ems": null
    },
    {
      "latitude": 50.564667,
      "longitude": 7.09019,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1623155223,
      "ems": null
    },
    {
      "latitude": 50.563179,
      "longitude": 7.090487,
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
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1623155226,
      "ems": null
    },
    {
      "latitude": 50.561687,
      "longitude": 7.090561,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623155229,
      "ems": null
    },
    {
      "latitude": 50.55899,
      "longitude": 7.090561,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623155235,
      "ems": null
    },
    {
      "latitude": 50.55748,
      "longitude": 7.09059,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623155238,
      "ems": null
    },
    {
      "latitude": 50.553265,
      "longitude": 7.091897,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1623155248,
      "ems": null
    },
    {
      "latitude": 50.552124,
      "longitude": 7.09247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1623155250,
      "ems": null
    },
    {
      "latitude": 50.550842,
      "longitude": 7.093308,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1623155253,
      "ems": null
    },
    {
      "latitude": 50.549538,
      "longitude": 7.094199,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623155256,
      "ems": null
    },
    {
      "latitude": 50.548187,
      "longitude": 7.095089,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1623155259,
      "ems": null
    },
    {
      "latitude": 50.546951,
      "longitude": 7.095867,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1623155262,
      "ems": null
    },
    {
      "latitude": 50.545628,
      "longitude": 7.096723,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623155265,
      "ems": null
    },
    {
      "latitude": 50.544327,
      "longitude": 7.097688,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1623155268,
      "ems": null
    },
    {
      "latitude": 50.543159,
      "longitude": 7.098653,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1623155271,
      "ems": null
    },
    {
      "latitude": 50.542137,
      "longitude": 7.099544,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623155274,
      "ems": null
    },
    {
      "latitude": 50.540928,
      "longitude": 7.100805,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1623155277,
      "ems": null
    },
    {
      "latitude": 50.538025,
      "longitude": 7.107793,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1623155288,
      "ems": null
    },
    {
      "latitude": 50.537994,
      "longitude": 7.108154,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1623155289,
      "ems": null
    },
    {
      "latitude": 50.537342,
      "longitude": 7.114835,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623155298,
      "ems": null
    },
    {
      "latitude": 50.536922,
      "longitude": 7.119141,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623155304,
      "ems": null
    },
    {
      "latitude": 50.536697,
      "longitude": 7.121526,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1623155307,
      "ems": null
    },
    {
      "latitude": 50.536224,
      "longitude": 7.125673,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623155313,
      "ems": null
    },
    {
      "latitude": 50.535553,
      "longitude": 7.129621,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1623155319,
      "ems": null
    },
    {
      "latitude": 50.534828,
      "longitude": 7.13228,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1623155322,
      "ems": null
    },
    {
      "latitude": 50.533943,
      "longitude": 7.134135,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1623155325,
      "ems": null
    },
    {
      "latitude": 50.533035,
      "longitude": 7.135403,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1623155328,
      "ems": null
    },
    {
      "latitude": 50.531845,
      "longitude": 7.136632,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1623155331,
      "ems": null
    },
    {
      "latitude": 50.530426,
      "longitude": 7.137788,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1623155334,
      "ems": null
    },
    {
      "latitude": 50.528915,
      "longitude": 7.138738,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1623155337,
      "ems": null
    },
    {
      "latitude": 50.526356,
      "longitude": 7.138812,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623155343,
      "ems": null
    },
    {
      "latitude": 50.524292,
      "longitude": 7.136487,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155348,
      "ems": null
    },
    {
      "latitude": 50.523422,
      "longitude": 7.133393,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623155352,
      "ems": null
    },
    {
      "latitude": 50.523983,
      "longitude": 7.125376,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155364,
      "ems": null
    },
    {
      "latitude": 50.52507,
      "longitude": 7.121815,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623155370,
      "ems": null
    },
    {
      "latitude": 50.525757,
      "longitude": 7.12008,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623155373,
      "ems": null
    },
    {
      "latitude": 50.530334,
      "longitude": 7.113069,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1623155388,
      "ems": null
    },
    {
      "latitude": 50.53157,
      "longitude": 7.111841,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623155392,
      "ems": null
    },
    {
      "latitude": 50.532688,
      "longitude": 7.110826,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1623155395,
      "ems": null
    },
    {
      "latitude": 50.534737,
      "longitude": 7.108748,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623155401,
      "ems": null
    },
    {
      "latitude": 50.53688,
      "longitude": 7.107142,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623155407,
      "ems": null
    },
    {
      "latitude": 50.541138,
      "longitude": 7.103167,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1623155419,
      "ems": null
    },
    {
      "latitude": 50.542461,
      "longitude": 7.101325,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1623155424,
      "ems": null
    },
    {
      "latitude": 50.544022,
      "longitude": 7.098686,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1623155430,
      "ems": null
    },
    {
      "latitude": 50.545116,
      "longitude": 7.096203,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623155434,
      "ems": null
    },
    {
      "latitude": 50.545624,
      "longitude": 7.09341,
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
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623155439,
      "ems": null
    },
    {
      "latitude": 50.545624,
      "longitude": 7.092759,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623155440,
      "ems": null
    },
    {
      "latitude": 50.545486,
      "longitude": 7.090952,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623155443,
      "ems": null
    },
    {
      "latitude": 50.544277,
      "longitude": 7.084029,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623155454,
      "ems": null
    },
    {
      "latitude": 50.543335,
      "longitude": 7.077725,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623155464,
      "ems": null
    },
    {
      "latitude": 50.542923,
      "longitude": 7.074255,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623155469,
      "ems": null
    },
    {
      "latitude": 50.542511,
      "longitude": 7.070667,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1623155474,
      "ems": null
    },
    {
      "latitude": 50.541904,
      "longitude": 7.066807,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623155481,
      "ems": null
    },
    {
      "latitude": 50.541321,
      "longitude": 7.06298,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623155487,
      "ems": null
    },
    {
      "latitude": 50.541046,
      "longitude": 7.061318,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1623155490,
      "ems": null
    },
    {
      "latitude": 50.540955,
      "longitude": 7.060668,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623155491,
      "ems": null
    },
    {
      "latitude": 50.5406,
      "longitude": 7.059309,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623155493,
      "ems": null
    },
    {
      "latitude": 50.540543,
      "longitude": 7.059077,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623155494,
      "ems": null
    },
    {
      "latitude": 50.540039,
      "longitude": 7.057343,
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
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623155497,
      "ems": null
    },
    {
      "latitude": 50.538895,
      "longitude": 7.054163,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623155503,
      "ems": null
    },
    {
      "latitude": 50.537716,
      "longitude": 7.050699,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623155509,
      "ems": null
    },
    {
      "latitude": 50.53627,
      "longitude": 7.046987,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623155515,
      "ems": null
    },
    {
      "latitude": 50.535507,
      "longitude": 7.045344,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623155518,
      "ems": null
    },
    {
      "latitude": 50.534641,
      "longitude": 7.043498,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623155521,
      "ems": null
    },
    {
      "latitude": 50.533756,
      "longitude": 7.041791,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623155524,
      "ems": null
    },
    {
      "latitude": 50.530079,
      "longitude": 7.03511,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623155536,
      "ems": null
    },
    {
      "latitude": 50.529057,
      "longitude": 7.033329,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155539,
      "ems": null
    },
    {
      "latitude": 50.526634,
      "longitude": 7.028355,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623155547,
      "ems": null
    },
    {
      "latitude": 50.524887,
      "longitude": 7.024311,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623155554,
      "ems": null
    },
    {
      "latitude": 50.524307,
      "longitude": 7.022936,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155556,
      "ems": null
    },
    {
      "latitude": 50.524155,
      "longitude": 7.022649,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155557,
      "ems": null
    },
    {
      "latitude": 50.523518,
      "longitude": 7.02108,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155559,
      "ems": null
    },
    {
      "latitude": 50.523376,
      "longitude": 7.020842,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155560,
      "ems": null
    },
    {
      "latitude": 50.522724,
      "longitude": 7.019299,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155562,
      "ems": null
    },
    {
      "latitude": 50.522587,
      "longitude": 7.019002,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623155563,
      "ems": null
    },
    {
      "latitude": 50.520218,
      "longitude": 7.014915,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1623155571,
      "ems": null
    },
    {
      "latitude": 50.518936,
      "longitude": 7.013903,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623155574,
      "ems": null
    },
    {
      "latitude": 50.517696,
      "longitude": 7.013434,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623155577,
      "ems": null
    },
    {
      "latitude": 50.516346,
      "longitude": 7.01336,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1623155580,
      "ems": null
    },
    {
      "latitude": 50.515182,
      "longitude": 7.013831,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1623155583,
      "ems": null
    },
    {
      "latitude": 50.514858,
      "longitude": 7.014028,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1623155584,
      "ems": null
    },
    {
      "latitude": 50.513882,
      "longitude": 7.014919,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623155587,
      "ems": null
    },
    {
      "latitude": 50.51318,
      "longitude": 7.015661,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1623155589,
      "ems": null
    },
    {
      "latitude": 50.511971,
      "longitude": 7.016626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1623155592,
      "ems": null
    },
    {
      "latitude": 50.511612,
      "longitude": 7.016794,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1623155593,
      "ems": null
    },
    {
      "latitude": 50.510807,
      "longitude": 7.016923,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623155595,
      "ems": null
    },
    {
      "latitude": 50.507084,
      "longitude": 7.015141,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623155604,
      "ems": null
    },
    {
      "latitude": 50.50676,
      "longitude": 7.014915,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623155605,
      "ems": null
    },
    {
      "latitude": 50.50592,
      "longitude": 7.014251,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623155607,
      "ems": null
    },
    {
      "latitude": 50.502869,
      "longitude": 7.01,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623155617,
      "ems": null
    },
    {
      "latitude": 50.502411,
      "longitude": 7.00906,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623155619,
      "ems": null
    },
    {
      "latitude": 50.501495,
      "longitude": 7.00682,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623155623,
      "ems": null
    },
    {
      "latitude": 50.50108,
      "longitude": 7.00564,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623155625,
      "ems": null
    },
    {
      "latitude": 50.500053,
      "longitude": 7.001854,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1623155631,
      "ems": null
    },
    {
      "latitude": 50.500008,
      "longitude": 7.001186,
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623155632,
      "ems": null
    },
    {
      "latitude": 50.499802,
      "longitude": 6.999447,
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623155635,
      "ems": null
    },
    {
      "latitude": 50.49971,
      "longitude": 6.998002,
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623155637,
      "ems": null
    },
    {
      "latitude": 50.499664,
      "longitude": 6.997351,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623155638,
      "ems": null
    },
    {
      "latitude": 50.499527,
      "longitude": 6.99605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623155640,
      "ems": null
    },
    {
      "latitude": 50.499447,
      "longitude": 6.99547,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623155641,
      "ems": null
    },
    {
      "latitude": 50.498981,
      "longitude": 6.992204,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623155646,
      "ems": null
    },
    {
      "latitude": 50.498886,
      "longitude": 6.991642,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623155647,
      "ems": null
    },
    {
      "latitude": 50.498703,
      "longitude": 6.990268,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623155649,
      "ems": null
    },
    {
      "latitude": 50.498291,
      "longitude": 6.988317,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623155652,
      "ems": null
    },
    {
      "latitude": 50.497742,
      "longitude": 6.98622,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623155655,
      "ems": null
    },
    {
      "latitude": 50.494328,
      "longitude": 6.979436,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623155667,
      "ems": null
    },
    {
      "latitude": 50.49202,
      "longitude": 6.975379,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155675,
      "ems": null
    },
    {
      "latitude": 50.491425,
      "longitude": 6.974295,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155677,
      "ems": null
    },
    {
      "latitude": 50.490559,
      "longitude": 6.972755,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155679,
      "ems": null
    },
    {
      "latitude": 50.488602,
      "longitude": 6.969489,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623155685,
      "ems": null
    },
    {
      "latitude": 50.486435,
      "longitude": 6.965765,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623155692,
      "ems": null
    },
    {
      "latitude": 50.48455,
      "longitude": 6.962511,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623155698,
      "ems": null
    },
    {
      "latitude": 50.482502,
      "longitude": 6.958948,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623155705,
      "ems": null
    },
    {
      "latitude": 50.479805,
      "longitude": 6.954717,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 221,
      "squawk": "4451",
      "timestamp": 1623155713,
      "ems": null
    },
    {
      "latitude": 50.479431,
      "longitude": 6.954273,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 220,
      "squawk": "4451",
      "timestamp": 1623155714,
      "ems": null
    },
    {
      "latitude": 50.477474,
      "longitude": 6.952044,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1623155719,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 6.951021,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623155722,
      "ems": null
    },
    {
      "latitude": 50.4758,
      "longitude": 6.950634,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1623155723,
      "ems": null
    },
    {
      "latitude": 50.474945,
      "longitude": 6.950081,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623155725,
      "ems": null
    },
    {
      "latitude": 50.474533,
      "longitude": 6.949864,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "4451",
      "timestamp": 1623155726,
      "ems": null
    },
    {
      "latitude": 50.473618,
      "longitude": 6.949431,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623155728,
      "ems": null
    },
    {
      "latitude": 50.473206,
      "longitude": 6.949214,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623155729,
      "ems": null
    },
    {
      "latitude": 50.472198,
      "longitude": 6.948853,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623155731,
      "ems": null
    },
    {
      "latitude": 50.470963,
      "longitude": 6.948491,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623155734,
      "ems": null
    },
    {
      "latitude": 50.469189,
      "longitude": 6.947814,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623155738,
      "ems": null
    },
    {
      "latitude": 50.468445,
      "longitude": 6.947442,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623155739,
      "ems": null
    },
    {
      "latitude": 50.466816,
      "longitude": 6.946403,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623155743,
      "ems": null
    },
    {
      "latitude": 50.465973,
      "longitude": 6.945817,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623155746,
      "ems": null
    },
    {
      "latitude": 50.465561,
      "longitude": 6.945528,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1623155747,
      "ems": null
    },
    {
      "latitude": 50.463882,
      "longitude": 6.943211,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623155752,
      "ems": null
    },
    {
      "latitude": 50.463184,
      "longitude": 6.94091,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623155755,
      "ems": null
    },
    {
      "latitude": 50.463043,
      "longitude": 6.939962,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1623155757,
      "ems": null
    },
    {
      "latitude": 50.463043,
      "longitude": 6.938015,
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
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1623155760,
      "ems": null
    },
    {
      "latitude": 50.463089,
      "longitude": 6.937288,
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1623155761,
      "ems": null
    },
    {
      "latitude": 50.463409,
      "longitude": 6.935843,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1623155764,
      "ems": null
    },
    {
      "latitude": 50.464024,
      "longitude": 6.934303,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623155766,
      "ems": null
    },
    {
      "latitude": 50.464909,
      "longitude": 6.932744,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1623155770,
      "ems": null
    },
    {
      "latitude": 50.467117,
      "longitude": 6.930711,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623155777,
      "ems": null
    },
    {
      "latitude": 50.467701,
      "longitude": 6.930443,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623155778,
      "ems": null
    },
    {
      "latitude": 50.468262,
      "longitude": 6.930205,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623155780,
      "ems": null
    },
    {
      "latitude": 50.468956,
      "longitude": 6.930072,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623155782,
      "ems": null
    },
    {
      "latitude": 50.470963,
      "longitude": 6.929988,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623155787,
      "ems": null
    },
    {
      "latitude": 50.471558,
      "longitude": 6.93006,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623155789,
      "ems": null
    },
    {
      "latitude": 50.47316,
      "longitude": 6.930783,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623155793,
      "ems": null
    },
    {
      "latitude": 50.474495,
      "longitude": 6.931705,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623155797,
      "ems": null
    },
    {
      "latitude": 50.476826,
      "longitude": 6.933561,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623155804,
      "ems": null
    },
    {
      "latitude": 50.477989,
      "longitude": 6.934452,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623155807,
      "ems": null
    },
    {
      "latitude": 50.478516,
      "longitude": 6.934758,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623155809,
      "ems": null
    },
    {
      "latitude": 50.480782,
      "longitude": 6.93601,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623155815,
      "ems": null
    },
    {
      "latitude": 50.481899,
      "longitude": 6.936678,
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623155818,
      "ems": null
    },
    {
      "latitude": 50.482178,
      "longitude": 6.936854,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623155819,
      "ems": null
    },
    {
      "latitude": 50.48291,
      "longitude": 6.937505,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1623155821,
      "ems": null
    },
    {
      "latitude": 50.483368,
      "longitude": 6.938083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1623155822,
      "ems": null
    },
    {
      "latitude": 50.484329,
      "longitude": 6.939312,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1623155825,
      "ems": null
    },
    {
      "latitude": 50.486507,
      "longitude": 6.942766,
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
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1623155833,
      "ems": null
    },
    {
      "latitude": 50.486786,
      "longitude": 6.943211,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1623155834,
      "ems": null
    },
    {
      "latitude": 50.487396,
      "longitude": 6.944082,
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
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1623155836,
      "ems": null
    },
    {
      "latitude": 50.487717,
      "longitude": 6.944547,
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
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1623155837,
      "ems": null
    },
    {
      "latitude": 50.488266,
      "longitude": 6.945311,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623155839,
      "ems": null
    },
    {
      "latitude": 50.488586,
      "longitude": 6.945673,
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
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1623155840,
      "ems": null
    },
    {
      "latitude": 50.489162,
      "longitude": 6.946329,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1623155842,
      "ems": null
    },
    {
      "latitude": 50.491722,
      "longitude": 6.947962,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623155849,
      "ems": null
    },
    {
      "latitude": 50.493443,
      "longitude": 6.947739,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623155854,
      "ems": null
    },
    {
      "latitude": 50.494514,
      "longitude": 6.947219,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1623155857,
      "ems": null
    },
    {
      "latitude": 50.495544,
      "longitude": 6.946467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623155860,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 6.946178,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1623155861,
      "ems": null
    },
    {
      "latitude": 50.496918,
      "longitude": 6.945094,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1623155864,
      "ems": null
    },
    {
      "latitude": 50.497307,
      "longitude": 6.944473,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1623155866,
      "ems": null
    },
    {
      "latitude": 50.497604,
      "longitude": 6.94401,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1623155867,
      "ems": null
    },
    {
      "latitude": 50.4981,
      "longitude": 6.943137,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1623155869,
      "ems": null
    },
    {
      "latitude": 50.499123,
      "longitude": 6.941058,
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623155873,
      "ems": null
    },
    {
      "latitude": 50.499821,
      "longitude": 6.939574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1623155876,
      "ems": null
    },
    {
      "latitude": 50.501263,
      "longitude": 6.937273,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1623155881,
      "ems": null
    },
    {
      "latitude": 50.50177,
      "longitude": 6.93671,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1623155882,
      "ems": null
    },
    {
      "latitude": 50.502686,
      "longitude": 6.935698,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1623155885,
      "ems": null
    },
    {
      "latitude": 50.503361,
      "longitude": 6.934897,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1623155887,
      "ems": null
    },
    {
      "latitude": 50.503685,
      "longitude": 6.934452,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1623155888,
      "ems": null
    },
    {
      "latitude": 50.504288,
      "longitude": 6.933602,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1623155890,
      "ems": null
    },
    {
      "latitude": 50.505203,
      "longitude": 6.932156,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1623155893,
      "ems": null
    },
    {
      "latitude": 50.505592,
      "longitude": 6.931334,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1623155894,
      "ems": null
    },
    {
      "latitude": 50.506199,
      "longitude": 6.929997,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1623155897,
      "ems": null
    },
    {
      "latitude": 50.506943,
      "longitude": 6.928109,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1623155900,
      "ems": null
    },
    {
      "latitude": 50.507492,
      "longitude": 6.926229,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1623155903,
      "ems": null
    },
    {
      "latitude": 50.507969,
      "longitude": 6.924059,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155906,
      "ems": null
    },
    {
      "latitude": 50.508339,
      "longitude": 6.922203,
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623155909,
      "ems": null
    },
    {
      "latitude": 50.508545,
      "longitude": 6.921242,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623155911,
      "ems": null
    },
    {
      "latitude": 50.509037,
      "longitude": 6.919011,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1623155914,
      "ems": null
    },
    {
      "latitude": 50.509506,
      "longitude": 6.916978,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623155917,
      "ems": null
    },
    {
      "latitude": 50.509598,
      "longitude": 6.916255,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623155918,
      "ems": null
    },
    {
      "latitude": 50.509922,
      "longitude": 6.914112,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623155921,
      "ems": null
    },
    {
      "latitude": 50.510063,
      "longitude": 6.91285,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623155923,
      "ems": null
    },
    {
      "latitude": 50.510193,
      "longitude": 6.912135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623155924,
      "ems": null
    },
    {
      "latitude": 50.510376,
      "longitude": 6.910689,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623155926,
      "ems": null
    },
    {
      "latitude": 50.510513,
      "longitude": 6.909678,
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623155928,
      "ems": null
    },
    {
      "latitude": 50.51062,
      "longitude": 6.908767,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623155929,
      "ems": null
    },
    {
      "latitude": 50.510742,
      "longitude": 6.907871,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623155930,
      "ems": null
    },
    {
      "latitude": 50.510994,
      "longitude": 6.905724,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623155933,
      "ems": null
    },
    {
      "latitude": 50.511246,
      "longitude": 6.903389,
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1623155936,
      "ems": null
    },
    {
      "latitude": 50.511551,
      "longitude": 6.900973,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 281,
      "squawk": "4451",
      "timestamp": 1623155939,
      "ems": null
    },
    {
      "latitude": 50.511841,
      "longitude": 6.898981,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623155942,
      "ems": null
    },
    {
      "latitude": 50.513229,
      "longitude": 6.891471,
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
      "heading": 283,
      "squawk": "4451",
      "timestamp": 1623155953,
      "ems": null
    },
    {
      "latitude": 50.513367,
      "longitude": 6.888799,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623155957,
      "ems": null
    },
    {
      "latitude": 50.513229,
      "longitude": 6.887314,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623155959,
      "ems": null
    },
    {
      "latitude": 50.513031,
      "longitude": 6.886404,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623155961,
      "ems": null
    },
    {
      "latitude": 50.512756,
      "longitude": 6.885392,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623155962,
      "ems": null
    },
    {
      "latitude": 50.512527,
      "longitude": 6.884814,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623155963,
      "ems": null
    },
    {
      "latitude": 50.512016,
      "longitude": 6.883751,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623155965,
      "ems": null
    },
    {
      "latitude": 50.51152,
      "longitude": 6.883007,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1623155967,
      "ems": null
    },
    {
      "latitude": 50.510971,
      "longitude": 6.882429,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1623155968,
      "ems": null
    },
    {
      "latitude": 50.510284,
      "longitude": 6.88185,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623155970,
      "ems": null
    },
    {
      "latitude": 50.509598,
      "longitude": 6.88145,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1623155971,
      "ems": null
    },
    {
      "latitude": 50.509003,
      "longitude": 6.8812,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623155972,
      "ems": null
    },
    {
      "latitude": 50.508293,
      "longitude": 6.88093,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623155974,
      "ems": null
    },
    {
      "latitude": 50.506107,
      "longitude": 6.880559,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1623155978,
      "ems": null
    },
    {
      "latitude": 50.5047,
      "longitude": 6.880621,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623155981,
      "ems": null
    },
    {
      "latitude": 50.503826,
      "longitude": 6.880782,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1623155983,
      "ems": null
    },
    {
      "latitude": 50.503452,
      "longitude": 6.880856,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1623155984,
      "ems": null
    },
    {
      "latitude": 50.501907,
      "longitude": 6.881344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1623155987,
      "ems": null
    },
    {
      "latitude": 50.501263,
      "longitude": 6.881598,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1623155989,
      "ems": null
    },
    {
      "latitude": 50.50058,
      "longitude": 6.881923,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1623155990,
      "ems": null
    },
    {
      "latitude": 50.499252,
      "longitude": 6.882646,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1623155993,
      "ems": null
    },
    {
      "latitude": 50.498566,
      "longitude": 6.883083,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1623155995,
      "ems": null
    },
    {
      "latitude": 50.497868,
      "longitude": 6.883603,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623155996,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 6.885384,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623156001,
      "ems": null
    },
    {
      "latitude": 50.493759,
      "longitude": 6.888355,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1623156007,
      "ems": null
    },
    {
      "latitude": 50.493397,
      "longitude": 6.888947,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1623156008,
      "ems": null
    },
    {
      "latitude": 50.492157,
      "longitude": 6.891825,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1623156013,
      "ems": null
    },
    {
      "latitude": 50.491562,
      "longitude": 6.894065,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623156016,
      "ems": null
    },
    {
      "latitude": 50.491207,
      "longitude": 6.895999,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623156019,
      "ems": null
    },
    {
      "latitude": 50.490883,
      "longitude": 6.899934,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623156025,
      "ems": null
    },
    {
      "latitude": 50.490875,
      "longitude": 6.901076,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 89,
      "squawk": "4451",
      "timestamp": 1623156027,
      "ems": null
    },
    {
      "latitude": 50.490967,
      "longitude": 6.903172,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623156030,
      "ems": null
    },
    {
      "latitude": 50.491104,
      "longitude": 6.904401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1623156031,
      "ems": null
    },
    {
      "latitude": 50.491207,
      "longitude": 6.90513,
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
      "heading": 79,
      "squawk": "4451",
      "timestamp": 1623156032,
      "ems": null
    },
    {
      "latitude": 50.492886,
      "longitude": 6.911811,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623156043,
      "ems": null
    },
    {
      "latitude": 50.493942,
      "longitude": 6.914303,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623156048,
      "ems": null
    },
    {
      "latitude": 50.494354,
      "longitude": 6.915171,
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
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623156049,
      "ems": null
    },
    {
      "latitude": 50.495354,
      "longitude": 6.917452,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1623156053,
      "ems": null
    },
    {
      "latitude": 50.495819,
      "longitude": 6.918566,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "4451",
      "timestamp": 1623156055,
      "ems": null
    },
    {
      "latitude": 50.496376,
      "longitude": 6.920051,
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
      "heading": 59,
      "squawk": "4451",
      "timestamp": 1623156058,
      "ems": null
    },
    {
      "latitude": 50.497055,
      "longitude": 6.922037,
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623156061,
      "ems": null
    },
    {
      "latitude": 50.497925,
      "longitude": 6.924639,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623156066,
      "ems": null
    },
    {
      "latitude": 50.498428,
      "longitude": 6.926157,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623156068,
      "ems": null
    },
    {
      "latitude": 50.49889,
      "longitude": 6.927548,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623156070,
      "ems": null
    },
    {
      "latitude": 50.499435,
      "longitude": 6.929482,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623156073,
      "ems": null
    },
    {
      "latitude": 50.499962,
      "longitude": 6.931408,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623156076,
      "ems": null
    },
    {
      "latitude": 50.500149,
      "longitude": 6.932002,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623156077,
      "ems": null
    },
    {
      "latitude": 50.500397,
      "longitude": 6.932879,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623156079,
      "ems": null
    },
    {
      "latitude": 50.501633,
      "longitude": 6.936565,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623156085,
      "ems": null
    },
    {
      "latitude": 50.503311,
      "longitude": 6.939722,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1623156091,
      "ems": null
    },
    {
      "latitude": 50.503647,
      "longitude": 6.940179,
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
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623156093,
      "ems": null
    },
    {
      "latitude": 50.504837,
      "longitude": 6.941408,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1623156096,
      "ems": null
    },
    {
      "latitude": 50.505314,
      "longitude": 6.941726,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623156097,
      "ems": null
    },
    {
      "latitude": 50.506573,
      "longitude": 6.942172,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623156100,
      "ems": null
    },
    {
      "latitude": 50.507221,
      "longitude": 6.942246,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623156102,
      "ems": null
    },
    {
      "latitude": 50.507919,
      "longitude": 6.942098,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1623156103,
      "ems": null
    },
    {
      "latitude": 50.508499,
      "longitude": 6.941914,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1623156105,
      "ems": null
    },
    {
      "latitude": 50.509094,
      "longitude": 6.941697,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1623156106,
      "ems": null
    },
    {
      "latitude": 50.509689,
      "longitude": 6.941355,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1623156108,
      "ems": null
    },
    {
      "latitude": 50.512024,
      "longitude": 6.93989,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1623156114,
      "ems": null
    },
    {
      "latitude": 50.512623,
      "longitude": 6.939499,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1623156115,
      "ems": null
    },
    {
      "latitude": 50.513832,
      "longitude": 6.938757,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623156118,
      "ems": null
    },
    {
      "latitude": 50.51564,
      "longitude": 6.937649,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1623156123,
      "ems": null
    },
    {
      "latitude": 50.516998,
      "longitude": 6.936827,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1623156126,
      "ems": null
    },
    {
      "latitude": 50.517517,
      "longitude": 6.936565,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1623156127,
      "ems": null
    },
    {
      "latitude": 50.521236,
      "longitude": 6.934377,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1623156136,
      "ems": null
    },
    {
      "latitude": 50.524307,
      "longitude": 6.932744,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1623156144,
      "ems": null
    },
    {
      "latitude": 50.524979,
      "longitude": 6.932446,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1623156145,
      "ems": null
    },
    {
      "latitude": 50.526215,
      "longitude": 6.931867,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156148,
      "ems": null
    },
    {
      "latitude": 50.528275,
      "longitude": 6.930855,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1623156153,
      "ems": null
    },
    {
      "latitude": 50.529335,
      "longitude": 6.930517,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623156156,
      "ems": null
    },
    {
      "latitude": 50.53093,
      "longitude": 6.930205,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623156159,
      "ems": null
    },
    {
      "latitude": 50.532761,
      "longitude": 6.929771,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623156163,
      "ems": null
    },
    {
      "latitude": 50.53363,
      "longitude": 6.929482,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623156165,
      "ems": null
    },
    {
      "latitude": 50.534225,
      "longitude": 6.929193,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623156167,
      "ems": null
    },
    {
      "latitude": 50.536514,
      "longitude": 6.928326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623156172,
      "ems": null
    },
    {
      "latitude": 50.537483,
      "longitude": 6.927919,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1623156174,
      "ems": null
    },
    {
      "latitude": 50.539299,
      "longitude": 6.927325,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623156178,
      "ems": null
    },
    {
      "latitude": 50.539902,
      "longitude": 6.927097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623156180,
      "ems": null
    },
    {
      "latitude": 50.541298,
      "longitude": 6.926732,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623156183,
      "ems": null
    },
    {
      "latitude": 50.542969,
      "longitude": 6.926157,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1623156187,
      "ems": null
    },
    {
      "latitude": 50.545486,
      "longitude": 6.925362,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623156194,
      "ems": null
    },
    {
      "latitude": 50.547913,
      "longitude": 6.924206,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623156199,
      "ems": null
    },
    {
      "latitude": 50.548645,
      "longitude": 6.9237,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156201,
      "ems": null
    },
    {
      "latitude": 50.549866,
      "longitude": 6.922872,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156204,
      "ems": null
    },
    {
      "latitude": 50.551029,
      "longitude": 6.922129,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156207,
      "ems": null
    },
    {
      "latitude": 50.551437,
      "longitude": 6.92182,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156208,
      "ems": null
    },
    {
      "latitude": 50.552193,
      "longitude": 6.921312,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156210,
      "ems": null
    },
    {
      "latitude": 50.552582,
      "longitude": 6.921025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156212,
      "ems": null
    },
    {
      "latitude": 50.55331,
      "longitude": 6.920496,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156213,
      "ems": null
    },
    {
      "latitude": 50.554825,
      "longitude": 6.919508,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1623156217,
      "ems": null
    },
    {
      "latitude": 50.55542,
      "longitude": 6.919146,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1623156219,
      "ems": null
    },
    {
      "latitude": 50.555969,
      "longitude": 6.918713,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1623156220,
      "ems": null
    },
    {
      "latitude": 50.556747,
      "longitude": 6.918207,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1623156222,
      "ems": null
    },
    {
      "latitude": 50.557175,
      "longitude": 6.917898,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623156223,
      "ems": null
    },
    {
      "latitude": 50.558441,
      "longitude": 6.91705,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623156227,
      "ems": null
    },
    {
      "latitude": 50.560776,
      "longitude": 6.915677,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623156233,
      "ems": null
    },
    {
      "latitude": 50.563133,
      "longitude": 6.914335,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1623156238,
      "ems": null
    },
    {
      "latitude": 50.563923,
      "longitude": 6.913889,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1623156240,
      "ems": null
    },
    {
      "latitude": 50.565132,
      "longitude": 6.913295,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1623156243,
      "ems": null
    },
    {
      "latitude": 50.565445,
      "longitude": 6.913147,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1623156244,
      "ems": null
    },
    {
      "latitude": 50.566223,
      "longitude": 6.912786,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156246,
      "ems": null
    },
    {
      "latitude": 50.566624,
      "longitude": 6.912627,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156247,
      "ems": null
    },
    {
      "latitude": 50.567413,
      "longitude": 6.912207,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156250,
      "ems": null
    },
    {
      "latitude": 50.56778,
      "longitude": 6.912063,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156251,
      "ems": null
    },
    {
      "latitude": 50.568485,
      "longitude": 6.911736,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1623156253,
      "ems": null
    },
    {
      "latitude": 50.568859,
      "longitude": 6.911588,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623156254,
      "ems": null
    },
    {
      "latitude": 50.569462,
      "longitude": 6.911366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1623156255,
      "ems": null
    },
    {
      "latitude": 50.570755,
      "longitude": 6.910834,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623156259,
      "ems": null
    },
    {
      "latitude": 50.571884,
      "longitude": 6.9104,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623156261,
      "ems": null
    },
    {
      "latitude": 50.573048,
      "longitude": 6.910029,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1623156264,
      "ems": null
    },
    {
      "latitude": 50.574142,
      "longitude": 6.90975,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623156267,
      "ems": null
    },
    {
      "latitude": 50.574738,
      "longitude": 6.909606,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623156269,
      "ems": null
    },
    {
      "latitude": 50.575424,
      "longitude": 6.909461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1623156270,
      "ems": null
    },
    {
      "latitude": 50.576706,
      "longitude": 6.909244,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1623156274,
      "ems": null
    },
    {
      "latitude": 50.577896,
      "longitude": 6.909027,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623156277,
      "ems": null
    },
    {
      "latitude": 50.581421,
      "longitude": 6.908232,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623156286,
      "ems": null
    },
    {
      "latitude": 50.582565,
      "longitude": 6.908015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623156289,
      "ems": null
    },
    {
      "latitude": 50.582932,
      "longitude": 6.908015,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623156290,
      "ems": null
    },
    {
      "latitude": 50.58371,
      "longitude": 6.907943,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623156292,
      "ems": null
    },
    {
      "latitude": 50.584824,
      "longitude": 6.907802,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623156294,
      "ems": null
    },
    {
      "latitude": 50.587154,
      "longitude": 6.907431,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623156300,
      "ems": null
    },
    {
      "latitude": 50.589993,
      "longitude": 6.906763,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623156308,
      "ems": null
    },
    {
      "latitude": 50.59108,
      "longitude": 6.906281,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1623156311,
      "ems": null
    },
    {
      "latitude": 50.591621,
      "longitude": 6.905872,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623156312,
      "ems": null
    },
    {
      "latitude": 50.592087,
      "longitude": 6.905413,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623156314,
      "ems": null
    },
    {
      "latitude": 50.593323,
      "longitude": 6.903317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623156318,
      "ems": null
    },
    {
      "latitude": 50.593597,
      "longitude": 6.902594,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623156320,
      "ems": null
    },
    {
      "latitude": 50.594181,
      "longitude": 6.90075,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623156323,
      "ems": null
    },
    {
      "latitude": 50.594513,
      "longitude": 6.899776,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1623156325,
      "ems": null
    },
    {
      "latitude": 50.594971,
      "longitude": 6.898041,
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
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1623156327,
      "ems": null
    },
    {
      "latitude": 50.595673,
      "longitude": 6.895331,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1623156332,
      "ems": null
    },
    {
      "latitude": 50.596481,
      "longitude": 6.89168,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623156338,
      "ems": null
    },
    {
      "latitude": 50.59671,
      "longitude": 6.890379,
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623156340,
      "ems": null
    },
    {
      "latitude": 50.596802,
      "longitude": 6.889729,
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
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623156341,
      "ems": null
    },
    {
      "latitude": 50.597443,
      "longitude": 6.884525,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623156349,
      "ems": null
    },
    {
      "latitude": 50.598267,
      "longitude": 6.880477,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1623156355,
      "ems": null
    },
    {
      "latitude": 50.599442,
      "longitude": 6.876551,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623156361,
      "ems": null
    },
    {
      "latitude": 50.600098,
      "longitude": 6.874478,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1623156364,
      "ems": null
    },
    {
      "latitude": 50.601025,
      "longitude": 6.872023,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623156368,
      "ems": null
    },
    {
      "latitude": 50.601517,
      "longitude": 6.870864,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623156370,
      "ems": null
    },
    {
      "latitude": 50.601883,
      "longitude": 6.869997,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623156371,
      "ems": null
    },
    {
      "latitude": 50.602341,
      "longitude": 6.868985,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623156373,
      "ems": null
    },
    {
      "latitude": 50.603119,
      "longitude": 6.867198,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623156376,
      "ems": null
    },
    {
      "latitude": 50.604034,
      "longitude": 6.865299,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1623156379,
      "ems": null
    },
    {
      "latitude": 50.604237,
      "longitude": 6.864748,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623156380,
      "ems": null
    },
    {
      "latitude": 50.605316,
      "longitude": 6.860745,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623156386,
      "ems": null
    },
    {
      "latitude": 50.605453,
      "longitude": 6.8593,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 279,
      "squawk": "4451",
      "timestamp": 1623156388,
      "ems": null
    },
    {
      "latitude": 50.605263,
      "longitude": 6.855172,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623156394,
      "ems": null
    },
    {
      "latitude": 50.605122,
      "longitude": 6.854281,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623156395,
      "ems": null
    },
    {
      "latitude": 50.604858,
      "longitude": 6.852722,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623156397,
      "ems": null
    },
    {
      "latitude": 50.604752,
      "longitude": 6.852054,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623156398,
      "ems": null
    },
    {
      "latitude": 50.604492,
      "longitude": 6.850698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623156400,
      "ems": null
    },
    {
      "latitude": 50.604378,
      "longitude": 6.849901,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623156401,
      "ems": null
    },
    {
      "latitude": 50.604145,
      "longitude": 6.848417,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623156403,
      "ems": null
    },
    {
      "latitude": 50.60408,
      "longitude": 6.84759,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1623156404,
      "ems": null
    },
    {
      "latitude": 50.603912,
      "longitude": 6.84619,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623156406,
      "ems": null
    },
    {
      "latitude": 50.603806,
      "longitude": 6.84535,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623156407,
      "ems": null
    },
    {
      "latitude": 50.603401,
      "longitude": 6.841513,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623156412,
      "ems": null
    },
    {
      "latitude": 50.603348,
      "longitude": 6.840868,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623156413,
      "ems": null
    },
    {
      "latitude": 50.603168,
      "longitude": 6.839286,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623156415,
      "ems": null
    },
    {
      "latitude": 50.603119,
      "longitude": 6.838692,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623156416,
      "ems": null
    },
    {
      "latitude": 50.602283,
      "longitude": 6.830156,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623156427,
      "ems": null
    },
    {
      "latitude": 50.602283,
      "longitude": 6.829859,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623156428,
      "ems": null
    },
    {
      "latitude": 50.602097,
      "longitude": 6.825924,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623156433,
      "ems": null
    },
    {
      "latitude": 50.602005,
      "longitude": 6.823475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623156436,
      "ems": null
    },
    {
      "latitude": 50.601974,
      "longitude": 6.822799,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623156437,
      "ems": null
    },
    {
      "latitude": 50.60191,
      "longitude": 6.821248,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623156439,
      "ems": null
    },
    {
      "latitude": 50.601883,
      "longitude": 6.820631,
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
      "heading": 266,
      "squawk": "4451",
      "timestamp": 1623156440,
      "ems": null
    },
    {
      "latitude": 50.601837,
      "longitude": 6.81839,
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
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1623156443,
      "ems": null
    },
    {
      "latitude": 50.601791,
      "longitude": 6.816944,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623156445,
      "ems": null
    },
    {
      "latitude": 50.601818,
      "longitude": 6.816126,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623156446,
      "ems": null
    },
    {
      "latitude": 50.601772,
      "longitude": 6.814641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623156448,
      "ems": null
    },
    {
      "latitude": 50.601772,
      "longitude": 6.813899,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1623156449,
      "ems": null
    },
    {
      "latitude": 50.601772,
      "longitude": 6.812414,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623156451,
      "ems": null
    },
    {
      "latitude": 50.601772,
      "longitude": 6.811672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1623156452,
      "ems": null
    },
    {
      "latitude": 50.601791,
      "longitude": 6.810078,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1623156454,
      "ems": null
    },
    {
      "latitude": 50.601864,
      "longitude": 6.807144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623156458,
      "ems": null
    },
    {
      "latitude": 50.602005,
      "longitude": 6.803432,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623156463,
      "ems": null
    },
    {
      "latitude": 50.602066,
      "longitude": 6.802561,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623156464,
      "ems": null
    },
    {
      "latitude": 50.602142,
      "longitude": 6.801353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623156466,
      "ems": null
    },
    {
      "latitude": 50.602188,
      "longitude": 6.800611,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623156467,
      "ems": null
    },
    {
      "latitude": 50.602283,
      "longitude": 6.799201,
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
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1623156469,
      "ems": null
    },
    {
      "latitude": 50.602375,
      "longitude": 6.7969,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623156472,
      "ems": null
    },
    {
      "latitude": 50.602421,
      "longitude": 6.796157,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1623156473,
      "ems": null
    },
    {
      "latitude": 50.602341,
      "longitude": 6.793888,
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623156476,
      "ems": null
    },
    {
      "latitude": 50.602158,
      "longitude": 6.792442,
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623156478,
      "ems": null
    },
    {
      "latitude": 50.60202,
      "longitude": 6.791719,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623156479,
      "ems": null
    },
    {
      "latitude": 50.601746,
      "longitude": 6.790635,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "4451",
      "timestamp": 1623156481,
      "ems": null
    },
    {
      "latitude": 50.600006,
      "longitude": 6.786804,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623156487,
      "ems": null
    },
    {
      "latitude": 50.599869,
      "longitude": 6.786587,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623156488,
      "ems": null
    },
    {
      "latitude": 50.598999,
      "longitude": 6.785286,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623156490,
      "ems": null
    },
    {
      "latitude": 50.598743,
      "longitude": 6.784874,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623156491,
      "ems": null
    },
    {
      "latitude": 50.597809,
      "longitude": 6.783479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623156494,
      "ems": null
    },
    {
      "latitude": 50.596184,
      "longitude": 6.781088,
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623156499,
      "ems": null
    },
    {
      "latitude": 50.595345,
      "longitude": 6.77953,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623156502,
      "ems": null
    },
    {
      "latitude": 50.595108,
      "longitude": 6.77907,
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623156503,
      "ems": null
    },
    {
      "latitude": 50.593624,
      "longitude": 6.775892,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623156509,
      "ems": null
    },
    {
      "latitude": 50.59314,
      "longitude": 6.774734,
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623156511,
      "ems": null
    },
    {
      "latitude": 50.592957,
      "longitude": 6.7743,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623156512,
      "ems": null
    },
    {
      "latitude": 50.592178,
      "longitude": 6.772638,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623156515,
      "ems": null
    },
    {
      "latitude": 50.591583,
      "longitude": 6.771409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623156517,
      "ems": null
    },
    {
      "latitude": 50.591434,
      "longitude": 6.771141,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623156518,
      "ems": null
    },
    {
      "latitude": 50.590805,
      "longitude": 6.769891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623156520,
      "ems": null
    },
    {
      "latitude": 50.590691,
      "longitude": 6.769657,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623156521,
      "ems": null
    },
    {
      "latitude": 50.590084,
      "longitude": 6.768617,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623156523,
      "ems": null
    },
    {
      "latitude": 50.589844,
      "longitude": 6.768157,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623156524,
      "ems": null
    },
    {
      "latitude": 50.587326,
      "longitude": 6.76382,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623156533,
      "ems": null
    },
    {
      "latitude": 50.586639,
      "longitude": 6.762446,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623156536,
      "ems": null
    },
    {
      "latitude": 50.584076,
      "longitude": 6.756013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623156547,
      "ems": null
    },
    {
      "latitude": 50.583893,
      "longitude": 6.755553,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1623156548,
      "ems": null
    },
    {
      "latitude": 50.583244,
      "longitude": 6.75392,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623156551,
      "ems": null
    },
    {
      "latitude": 50.582729,
      "longitude": 6.752732,
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623156553,
      "ems": null
    },
    {
      "latitude": 50.582497,
      "longitude": 6.75236,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1623156554,
      "ems": null
    },
    {
      "latitude": 50.58194,
      "longitude": 6.751173,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623156556,
      "ems": null
    },
    {
      "latitude": 50.581238,
      "longitude": 6.749725,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623156559,
      "ems": null
    },
    {
      "latitude": 50.580322,
      "longitude": 6.747629,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623156563,
      "ems": null
    },
    {
      "latitude": 50.579891,
      "longitude": 6.746571,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1623156565,
      "ems": null
    },
    {
      "latitude": 50.578354,
      "longitude": 6.742859,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623156572,
      "ems": null
    },
    {
      "latitude": 50.576912,
      "longitude": 6.740335,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623156577,
      "ems": null
    },
    {
      "latitude": 50.57666,
      "longitude": 6.739895,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623156578,
      "ems": null
    },
    {
      "latitude": 50.576019,
      "longitude": 6.738811,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623156581,
      "ems": null
    },
    {
      "latitude": 50.574371,
      "longitude": 6.735342,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623156587,
      "ems": null
    },
    {
      "latitude": 50.573093,
      "longitude": 6.732244,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1623156593,
      "ems": null
    },
    {
      "latitude": 50.571991,
      "longitude": 6.729126,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623156598,
      "ems": null
    },
    {
      "latitude": 50.571419,
      "longitude": 6.72727,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623156601,
      "ems": null
    },
    {
      "latitude": 50.571323,
      "longitude": 6.726973,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623156602,
      "ems": null
    },
    {
      "latitude": 50.570858,
      "longitude": 6.725043,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623156605,
      "ems": null
    },
    {
      "latitude": 50.570572,
      "longitude": 6.723705,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623156607,
      "ems": null
    },
    {
      "latitude": 50.570442,
      "longitude": 6.723039,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1623156608,
      "ems": null
    },
    {
      "latitude": 50.570206,
      "longitude": 6.721465,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623156611,
      "ems": null
    },
    {
      "latitude": 50.569977,
      "longitude": 6.719513,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623156614,
      "ems": null
    },
    {
      "latitude": 50.56979,
      "longitude": 6.71762,
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623156616,
      "ems": null
    },
    {
      "latitude": 50.569744,
      "longitude": 6.716952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623156617,
      "ems": null
    },
    {
      "latitude": 50.569702,
      "longitude": 6.71308,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623156623,
      "ems": null
    },
    {
      "latitude": 50.569931,
      "longitude": 6.709177,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623156629,
      "ems": null
    },
    {
      "latitude": 50.569977,
      "longitude": 6.707747,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1623156632,
      "ems": null
    },
    {
      "latitude": 50.569881,
      "longitude": 6.705892,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 263,
      "squawk": "4451",
      "timestamp": 1623156635,
      "ems": null
    },
    {
      "latitude": 50.568905,
      "longitude": 6.700472,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623156644,
      "ems": null
    },
    {
      "latitude": 50.568531,
      "longitude": 6.698691,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623156647,
      "ems": null
    },
    {
      "latitude": 50.568146,
      "longitude": 6.697251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623156649,
      "ems": null
    },
    {
      "latitude": 50.567505,
      "longitude": 6.695155,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623156653,
      "ems": null
    },
    {
      "latitude": 50.566956,
      "longitude": 6.693637,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1623156656,
      "ems": null
    },
    {
      "latitude": 50.566086,
      "longitude": 6.69212,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623156659,
      "ems": null
    },
    {
      "latitude": 50.564941,
      "longitude": 6.690891,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1623156662,
      "ems": null
    },
    {
      "latitude": 50.56411,
      "longitude": 6.690228,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623156664,
      "ems": null
    },
    {
      "latitude": 50.563797,
      "longitude": 6.689951,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623156665,
      "ems": null
    },
    {
      "latitude": 50.562973,
      "longitude": 6.689301,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1623156668,
      "ems": null
    },
    {
      "latitude": 50.561783,
      "longitude": 6.688521,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "4451",
      "timestamp": 1623156671,
      "ems": null
    },
    {
      "latitude": 50.560593,
      "longitude": 6.68771,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623156674,
      "ems": null
    },
    {
      "latitude": 50.559357,
      "longitude": 6.686987,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1623156677,
      "ems": null
    },
    {
      "latitude": 50.558105,
      "longitude": 6.686294,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623156680,
      "ems": null
    },
    {
      "latitude": 50.556976,
      "longitude": 6.685687,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623156683,
      "ems": null
    },
    {
      "latitude": 50.555546,
      "longitude": 6.684958,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623156686,
      "ems": null
    },
    {
      "latitude": 50.554565,
      "longitude": 6.684438,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623156689,
      "ems": null
    },
    {
      "latitude": 50.55423,
      "longitude": 6.684313,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623156690,
      "ems": null
    },
    {
      "latitude": 50.553032,
      "longitude": 6.68377,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623156692,
      "ems": null
    },
    {
      "latitude": 50.552193,
      "longitude": 6.683399,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623156695,
      "ems": null
    },
    {
      "latitude": 50.550888,
      "longitude": 6.682805,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623156698,
      "ems": null
    },
    {
      "latitude": 50.549698,
      "longitude": 6.68229,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623156701,
      "ems": null
    },
    {
      "latitude": 50.549286,
      "longitude": 6.682073,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623156702,
      "ems": null
    },
    {
      "latitude": 50.548515,
      "longitude": 6.681692,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623156704,
      "ems": null
    },
    {
      "latitude": 50.54586,
      "longitude": 6.68043,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623156710,
      "ems": null
    },
    {
      "latitude": 50.544708,
      "longitude": 6.680049,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623156713,
      "ems": null
    },
    {
      "latitude": 50.544296,
      "longitude": 6.679904,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623156714,
      "ems": null
    },
    {
      "latitude": 50.543243,
      "longitude": 6.679543,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623156716,
      "ems": null
    },
    {
      "latitude": 50.543022,
      "longitude": 6.679465,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623156717,
      "ems": null
    },
    {
      "latitude": 50.541962,
      "longitude": 6.679109,
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623156719,
      "ems": null
    },
    {
      "latitude": 50.539436,
      "longitude": 6.678129,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623156725,
      "ems": null
    },
    {
      "latitude": 50.537018,
      "longitude": 6.677015,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623156731,
      "ems": null
    },
    {
      "latitude": 50.534088,
      "longitude": 6.67564,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1623156738,
      "ems": null
    },
    {
      "latitude": 50.533218,
      "longitude": 6.675206,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623156740,
      "ems": null
    },
    {
      "latitude": 50.532806,
      "longitude": 6.674989,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623156741,
      "ems": null
    },
    {
      "latitude": 50.531799,
      "longitude": 6.674339,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623156743,
      "ems": null
    },
    {
      "latitude": 50.53157,
      "longitude": 6.674122,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623156744,
      "ems": null
    },
    {
      "latitude": 50.529419,
      "longitude": 6.672749,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1623156749,
      "ems": null
    },
    {
      "latitude": 50.526764,
      "longitude": 6.671448,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623156755,
      "ems": null
    },
    {
      "latitude": 50.523056,
      "longitude": 6.669569,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623156764,
      "ems": null
    },
    {
      "latitude": 50.520538,
      "longitude": 6.668484,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1623156770,
      "ems": null
    },
    {
      "latitude": 50.520126,
      "longitude": 6.66834,
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623156771,
      "ems": null
    },
    {
      "latitude": 50.519302,
      "longitude": 6.668123,
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623156773,
      "ems": null
    },
    {
      "latitude": 50.518906,
      "longitude": 6.667959,
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
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1623156774,
      "ems": null
    },
    {
      "latitude": 50.517929,
      "longitude": 6.667689,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623156776,
      "ems": null
    },
    {
      "latitude": 50.516556,
      "longitude": 6.667255,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623156779,
      "ems": null
    },
    {
      "latitude": 50.516346,
      "longitude": 6.667216,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1623156780,
      "ems": null
    },
    {
      "latitude": 50.515324,
      "longitude": 6.666994,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1623156782,
      "ems": null
    },
    {
      "latitude": 50.515091,
      "longitude": 6.666966,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1623156783,
      "ems": null
    },
    {
      "latitude": 50.513741,
      "longitude": 6.666771,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1623156786,
      "ems": null
    },
    {
      "latitude": 50.512577,
      "longitude": 6.666697,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1623156788,
      "ems": null
    },
    {
      "latitude": 50.511429,
      "longitude": 6.666749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623156791,
      "ems": null
    },
    {
      "latitude": 50.511154,
      "longitude": 6.666822,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623156792,
      "ems": null
    },
    {
      "latitude": 50.510063,
      "longitude": 6.66692,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623156794,
      "ems": null
    },
    {
      "latitude": 50.50882,
      "longitude": 6.667039,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623156797,
      "ems": null
    },
    {
      "latitude": 50.507454,
      "longitude": 6.667216,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1623156800,
      "ems": null
    },
    {
      "latitude": 50.506119,
      "longitude": 6.667472,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1623156803,
      "ems": null
    },
    {
      "latitude": 50.505875,
      "longitude": 6.667513,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1623156804,
      "ems": null
    },
    {
      "latitude": 50.504757,
      "longitude": 6.66781,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1623156806,
      "ems": null
    },
    {
      "latitude": 50.50351,
      "longitude": 6.668051,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1623156809,
      "ems": null
    },
    {
      "latitude": 50.502289,
      "longitude": 6.668404,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1623156812,
      "ems": null
    },
    {
      "latitude": 50.500797,
      "longitude": 6.668776,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1623156816,
      "ems": null
    },
    {
      "latitude": 50.500076,
      "longitude": 6.66899,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1623156817,
      "ems": null
    },
    {
      "latitude": 50.49931,
      "longitude": 6.669221,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1623156819,
      "ems": null
    },
    {
      "latitude": 50.498146,
      "longitude": 6.669592,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1623156821,
      "ems": null
    },
    {
      "latitude": 50.497215,
      "longitude": 6.670037,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1623156824,
      "ems": null
    },
    {
      "latitude": 50.496735,
      "longitude": 6.670291,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1623156825,
      "ems": null
    },
    {
      "latitude": 50.49559,
      "longitude": 6.670942,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1623156827,
      "ems": null
    },
    {
      "latitude": 50.494308,
      "longitude": 6.671809,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623156830,
      "ems": null
    },
    {
      "latitude": 50.492931,
      "longitude": 6.672784,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623156834,
      "ems": null
    },
    {
      "latitude": 50.491837,
      "longitude": 6.673544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623156836,
      "ems": null
    },
    {
      "latitude": 50.491627,
      "longitude": 6.673675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1623156837,
      "ems": null
    },
    {
      "latitude": 50.490417,
      "longitude": 6.674556,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1623156840,
      "ems": null
    },
    {
      "latitude": 50.48822,
      "longitude": 6.676435,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156845,
      "ems": null
    },
    {
      "latitude": 50.487991,
      "longitude": 6.676652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1623156846,
      "ems": null
    },
    {
      "latitude": 50.487076,
      "longitude": 6.677519,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156848,
      "ems": null
    },
    {
      "latitude": 50.485657,
      "longitude": 6.678748,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156852,
      "ems": null
    },
    {
      "latitude": 50.484467,
      "longitude": 6.679832,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156855,
      "ems": null
    },
    {
      "latitude": 50.483414,
      "longitude": 6.680772,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156857,
      "ems": null
    },
    {
      "latitude": 50.482269,
      "longitude": 6.681766,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156860,
      "ems": null
    },
    {
      "latitude": 50.482037,
      "longitude": 6.681989,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156861,
      "ems": null
    },
    {
      "latitude": 50.48106,
      "longitude": 6.682879,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1623156863,
      "ems": null
    },
    {
      "latitude": 50.479889,
      "longitude": 6.684024,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1623156867,
      "ems": null
    },
    {
      "latitude": 50.478836,
      "longitude": 6.685108,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623156870,
      "ems": null
    },
    {
      "latitude": 50.477989,
      "longitude": 6.685997,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1623156872,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 6.688216,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623156878,
      "ems": null
    },
    {
      "latitude": 50.47366,
      "longitude": 6.690526,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623156885,
      "ems": null
    },
    {
      "latitude": 50.471512,
      "longitude": 6.692626,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1623156891,
      "ems": null
    },
    {
      "latitude": 50.470642,
      "longitude": 6.693637,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1623156894,
      "ems": null
    },
    {
      "latitude": 50.468491,
      "longitude": 6.69595,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623156900,
      "ems": null
    },
    {
      "latitude": 50.466351,
      "longitude": 6.698246,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1623156906,
      "ems": null
    },
    {
      "latitude": 50.465332,
      "longitude": 6.699492,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1623156909,
      "ems": null
    },
    {
      "latitude": 50.464394,
      "longitude": 6.700918,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1623156912,
      "ems": null
    },
    {
      "latitude": 50.463547,
      "longitude": 6.702383,
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1623156915,
      "ems": null
    },
    {
      "latitude": 50.462673,
      "longitude": 6.703739,
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
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1623156917,
      "ems": null
    },
    {
      "latitude": 50.462578,
      "longitude": 6.703961,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1623156918,
      "ems": null
    },
    {
      "latitude": 50.461807,
      "longitude": 6.705347,
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1623156921,
      "ems": null
    },
    {
      "latitude": 50.460995,
      "longitude": 6.706856,
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1623156923,
      "ems": null
    },
    {
      "latitude": 50.460846,
      "longitude": 6.707081,
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1623156924,
      "ems": null
    },
    {
      "latitude": 50.460159,
      "longitude": 6.708415,
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1623156927,
      "ems": null
    },
    {
      "latitude": 50.459244,
      "longitude": 6.710189,
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
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1623156930,
      "ems": null
    },
    {
      "latitude": 50.457642,
      "longitude": 6.713225,
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1623156936,
      "ems": null
    },
    {
      "latitude": 50.45676,
      "longitude": 6.714799,
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1623156939,
      "ems": null
    },
    {
      "latitude": 50.455597,
      "longitude": 6.716284,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1623156942,
      "ems": null
    },
    {
      "latitude": 50.454571,
      "longitude": 6.717249,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623156945,
      "ems": null
    },
    {
      "latitude": 50.45343,
      "longitude": 6.718284,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1623156948,
      "ems": null
    },
    {
      "latitude": 50.452618,
      "longitude": 6.719179,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1623156950,
      "ems": null
    },
    {
      "latitude": 50.451553,
      "longitude": 6.72038,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1623156954,
      "ems": null
    },
    {
      "latitude": 50.450661,
      "longitude": 6.721406,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1623156956,
      "ems": null
    },
    {
      "latitude": 50.449585,
      "longitude": 6.722838,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1623156960,
      "ems": null
    },
    {
      "latitude": 50.447868,
      "longitude": 6.725563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1623156966,
      "ems": null
    },
    {
      "latitude": 50.446148,
      "longitude": 6.727715,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1623156971,
      "ems": null
    },
    {
      "latitude": 50.443726,
      "longitude": 6.729646,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1623156978,
      "ems": null
    },
    {
      "latitude": 50.442608,
      "longitude": 6.730536,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1623156981,
      "ems": null
    },
    {
      "latitude": 50.441437,
      "longitude": 6.731511,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "4451",
      "timestamp": 1623156984,
      "ems": null
    },
    {
      "latitude": 50.439442,
      "longitude": 6.73358,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1623156990,
      "ems": null
    },
    {
      "latitude": 50.437489,
      "longitude": 6.736401,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1623156996,
      "ems": null
    },
    {
      "latitude": 50.436695,
      "longitude": 6.737885,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1623156999,
      "ems": null
    },
    {
      "latitude": 50.435345,
      "longitude": 6.741077,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1623157005,
      "ems": null
    },
    {
      "latitude": 50.434555,
      "longitude": 6.742414,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1623157008,
      "ems": null
    },
    {
      "latitude": 50.432236,
      "longitude": 6.744015,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1623157014,
      "ems": null
    },
    {
      "latitude": 50.429489,
      "longitude": 6.744738,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1623157020,
      "ems": null
    },
    {
      "latitude": 50.427666,
      "longitude": 6.746496,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1623157025,
      "ems": null
    },
    {
      "latitude": 50.423988,
      "longitude": 6.753103,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1623157038,
      "ems": null
    },
    {
      "latitude": 50.423309,
      "longitude": 6.754785,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1623157041,
      "ems": null
    },
    {
      "latitude": 50.422729,
      "longitude": 6.756592,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1623157044,
      "ems": null
    },
    {
      "latitude": 50.42244,
      "longitude": 6.757676,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623157046,
      "ems": null
    },
    {
      "latitude": 50.422119,
      "longitude": 6.759844,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1623157049,
      "ems": null
    },
    {
      "latitude": 50.422077,
      "longitude": 6.760155,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623157050,
      "ems": null
    },
    {
      "latitude": 50.423035,
      "longitude": 6.76541,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1623157059,
      "ems": null
    },
    {
      "latitude": 50.42371,
      "longitude": 6.766984,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623157062,
      "ems": null
    },
    {
      "latitude": 50.424454,
      "longitude": 6.768321,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623157065,
      "ems": null
    },
    {
      "latitude": 50.425339,
      "longitude": 6.769508,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1623157068,
      "ems": null
    },
    {
      "latitude": 50.427521,
      "longitude": 6.771409,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623157074,
      "ems": null
    },
    {
      "latitude": 50.428619,
      "longitude": 6.772276,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623157077,
      "ems": null
    },
    {
      "latitude": 50.429668,
      "longitude": 6.773146,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623157080,
      "ems": null
    },
    {
      "latitude": 50.430771,
      "longitude": 6.774228,
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
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623157083,
      "ems": null
    },
    {
      "latitude": 50.432926,
      "longitude": 6.776412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623157089,
      "ems": null
    },
    {
      "latitude": 50.435394,
      "longitude": 6.778342,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623157095,
      "ems": null
    },
    {
      "latitude": 50.436604,
      "longitude": 6.779307,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623157098,
      "ems": null
    },
    {
      "latitude": 50.439011,
      "longitude": 6.781311,
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
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623157104,
      "ems": null
    },
    {
      "latitude": 50.441391,
      "longitude": 6.783407,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623157110,
      "ems": null
    },
    {
      "latitude": 50.443588,
      "longitude": 6.785648,
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
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1623157116,
      "ems": null
    },
    {
      "latitude": 50.444778,
      "longitude": 6.786877,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623157119,
      "ems": null
    },
    {
      "latitude": 50.446892,
      "longitude": 6.789254,
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
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623157125,
      "ems": null
    },
    {
      "latitude": 50.447964,
      "longitude": 6.790219,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1623157128,
      "ems": null
    },
    {
      "latitude": 50.449768,
      "longitude": 6.791502,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623157133,
      "ems": null
    },
    {
      "latitude": 50.451691,
      "longitude": 6.792153,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623157137,
      "ems": null
    },
    {
      "latitude": 50.453018,
      "longitude": 6.79208,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623157140,
      "ems": null
    },
    {
      "latitude": 50.454208,
      "longitude": 6.791719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1623157143,
      "ems": null
    },
    {
      "latitude": 50.456406,
      "longitude": 6.790129,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1623157149,
      "ems": null
    },
    {
      "latitude": 50.458511,
      "longitude": 6.787383,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1623157155,
      "ems": null
    },
    {
      "latitude": 50.45932,
      "longitude": 6.785765,
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
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1623157158,
      "ems": null
    },
    {
      "latitude": 50.460018,
      "longitude": 6.783909,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623157161,
      "ems": null
    },
    {
      "latitude": 50.460709,
      "longitude": 6.782251,
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623157164,
      "ems": null
    },
    {
      "latitude": 50.462219,
      "longitude": 6.778781,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623157170,
      "ems": null
    },
    {
      "latitude": 50.464394,
      "longitude": 6.773739,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623157179,
      "ems": null
    },
    {
      "latitude": 50.465836,
      "longitude": 6.770614,
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623157185,
      "ems": null
    },
    {
      "latitude": 50.467941,
      "longitude": 6.765337,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1623157194,
      "ems": null
    },
    {
      "latitude": 50.46933,
      "longitude": 6.761862,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1623157200,
      "ems": null
    },
    {
      "latitude": 50.471924,
      "longitude": 6.755219,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623157212,
      "ems": null
    },
    {
      "latitude": 50.473286,
      "longitude": 6.751767,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623157218,
      "ems": null
    },
    {
      "latitude": 50.475449,
      "longitude": 6.746979,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1623157228,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 6.745678,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623157230,
      "ems": null
    },
    {
      "latitude": 50.477142,
      "longitude": 6.744377,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623157233,
      "ems": null
    },
    {
      "latitude": 50.477661,
      "longitude": 6.743527,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623157235,
      "ems": null
    },
    {
      "latitude": 50.477829,
      "longitude": 6.743292,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623157236,
      "ems": null
    },
    {
      "latitude": 50.479942,
      "longitude": 6.740409,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1623157242,
      "ems": null
    },
    {
      "latitude": 50.480923,
      "longitude": 6.739147,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1623157245,
      "ems": null
    },
    {
      "latitude": 50.481853,
      "longitude": 6.737885,
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
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1623157248,
      "ems": null
    },
    {
      "latitude": 50.48283,
      "longitude": 6.736623,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1623157251,
      "ems": null
    },
    {
      "latitude": 50.483139,
      "longitude": 6.736281,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1623157252,
      "ems": null
    },
    {
      "latitude": 50.485016,
      "longitude": 6.73433,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1623157258,
      "ems": null
    },
    {
      "latitude": 50.486298,
      "longitude": 6.733173,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1623157261,
      "ems": null
    },
    {
      "latitude": 50.488415,
      "longitude": 6.730834,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1623157266,
      "ems": null
    },
    {
      "latitude": 50.490601,
      "longitude": 6.728331,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1623157273,
      "ems": null
    },
    {
      "latitude": 50.492706,
      "longitude": 6.726018,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1623157279,
      "ems": null
    },
    {
      "latitude": 50.495445,
      "longitude": 6.721925,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623157288,
      "ems": null
    },
    {
      "latitude": 50.495911,
      "longitude": 6.719995,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 287,
      "squawk": "4451",
      "timestamp": 1623157291,
      "ems": null
    },
    {
      "latitude": 50.496002,
      "longitude": 6.718718,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623157293,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 6.716581,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623157296,
      "ems": null
    },
    {
      "latitude": 50.49577,
      "longitude": 6.716209,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623157297,
      "ems": null
    },
    {
      "latitude": 50.495316,
      "longitude": 6.714598,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623157300,
      "ems": null
    },
    {
      "latitude": 50.49456,
      "longitude": 6.712869,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623157303,
      "ems": null
    },
    {
      "latitude": 50.49284,
      "longitude": 6.709974,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623157308,
      "ems": null
    },
    {
      "latitude": 50.492706,
      "longitude": 6.709755,
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
      "heading": 224,
      "squawk": "4451",
      "timestamp": 1623157309,
      "ems": null
    },
    {
      "latitude": 50.491768,
      "longitude": 6.708415,
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
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1623157312,
      "ems": null
    },
    {
      "latitude": 50.490696,
      "longitude": 6.706931,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1623157315,
      "ems": null
    },
    {
      "latitude": 50.489639,
      "longitude": 6.70578,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623157318,
      "ems": null
    },
    {
      "latitude": 50.48851,
      "longitude": 6.704778,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623157321,
      "ems": null
    },
    {
      "latitude": 50.487297,
      "longitude": 6.703813,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623157324,
      "ems": null
    },
    {
      "latitude": 50.486115,
      "longitude": 6.703033,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623157327,
      "ems": null
    },
    {
      "latitude": 50.484879,
      "longitude": 6.702311,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1623157330,
      "ems": null
    },
    {
      "latitude": 50.482456,
      "longitude": 6.700695,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623157336,
      "ems": null
    },
    {
      "latitude": 50.481293,
      "longitude": 6.699879,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623157339,
      "ems": null
    },
    {
      "latitude": 50.480118,
      "longitude": 6.698986,
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1623157342,
      "ems": null
    },
    {
      "latitude": 50.478825,
      "longitude": 6.698171,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623157345,
      "ems": null
    },
    {
      "latitude": 50.477646,
      "longitude": 6.697396,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623157348,
      "ems": null
    },
    {
      "latitude": 50.475174,
      "longitude": 6.695589,
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623157354,
      "ems": null
    },
    {
      "latitude": 50.47403,
      "longitude": 6.694432,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1623157357,
      "ems": null
    },
    {
      "latitude": 50.47282,
      "longitude": 6.693049,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1623157360,
      "ems": null
    },
    {
      "latitude": 50.471008,
      "longitude": 6.690457,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1623157366,
      "ems": null
    },
    {
      "latitude": 50.470001,
      "longitude": 6.688867,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623157369,
      "ems": null
    },
    {
      "latitude": 50.469223,
      "longitude": 6.687494,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "4451",
      "timestamp": 1623157372,
      "ems": null
    },
    {
      "latitude": 50.468307,
      "longitude": 6.685904,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623157375,
      "ems": null
    },
    {
      "latitude": 50.467621,
      "longitude": 6.684386,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623157378,
      "ems": null
    },
    {
      "latitude": 50.467163,
      "longitude": 6.683157,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157380,
      "ems": null
    },
    {
      "latitude": 50.467003,
      "longitude": 6.682657,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623157381,
      "ems": null
    },
    {
      "latitude": 50.466488,
      "longitude": 6.681098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623157384,
      "ems": null
    },
    {
      "latitude": 50.465927,
      "longitude": 6.679543,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623157386,
      "ems": null
    },
    {
      "latitude": 50.465324,
      "longitude": 6.677683,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623157390,
      "ems": null
    },
    {
      "latitude": 50.464859,
      "longitude": 6.676125,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623157392,
      "ems": null
    },
    {
      "latitude": 50.464813,
      "longitude": 6.675902,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1623157393,
      "ems": null
    },
    {
      "latitude": 50.464348,
      "longitude": 6.674194,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1623157396,
      "ems": null
    },
    {
      "latitude": 50.463837,
      "longitude": 6.672264,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623157399,
      "ems": null
    },
    {
      "latitude": 50.463455,
      "longitude": 6.670725,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623157401,
      "ems": null
    },
    {
      "latitude": 50.46254,
      "longitude": 6.667183,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1623157407,
      "ems": null
    },
    {
      "latitude": 50.462067,
      "longitude": 6.665064,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "4451",
      "timestamp": 1623157411,
      "ems": null
    },
    {
      "latitude": 50.461697,
      "longitude": 6.663282,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623157414,
      "ems": null
    },
    {
      "latitude": 50.461304,
      "longitude": 6.661401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623157417,
      "ems": null
    },
    {
      "latitude": 50.46048,
      "longitude": 6.657353,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623157423,
      "ems": null
    },
    {
      "latitude": 50.460159,
      "longitude": 6.655191,
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
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623157426,
      "ems": null
    },
    {
      "latitude": 50.459831,
      "longitude": 6.653261,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623157428,
      "ems": null
    },
    {
      "latitude": 50.459793,
      "longitude": 6.652872,
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
      "heading": 257,
      "squawk": "4451",
      "timestamp": 1623157429,
      "ems": null
    },
    {
      "latitude": 50.459507,
      "longitude": 6.650886,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623157432,
      "ems": null
    },
    {
      "latitude": 50.458809,
      "longitude": 6.647026,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623157437,
      "ems": null
    },
    {
      "latitude": 50.45723,
      "longitude": 6.638344,
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
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623157450,
      "ems": null
    },
    {
      "latitude": 50.456436,
      "longitude": 6.63448,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623157456,
      "ems": null
    },
    {
      "latitude": 50.455811,
      "longitude": 6.62996,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1623157462,
      "ems": null
    },
    {
      "latitude": 50.454571,
      "longitude": 6.624088,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623157471,
      "ems": null
    },
    {
      "latitude": 50.453064,
      "longitude": 6.620853,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623157477,
      "ems": null
    },
    {
      "latitude": 50.452198,
      "longitude": 6.619188,
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1623157480,
      "ems": null
    },
    {
      "latitude": 50.451267,
      "longitude": 6.61763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623157483,
      "ems": null
    },
    {
      "latitude": 50.450291,
      "longitude": 6.615922,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623157486,
      "ems": null
    },
    {
      "latitude": 50.449677,
      "longitude": 6.61442,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623157489,
      "ems": null
    },
    {
      "latitude": 50.449032,
      "longitude": 6.612285,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623157492,
      "ems": null
    },
    {
      "latitude": 50.448578,
      "longitude": 6.610662,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623157495,
      "ems": null
    },
    {
      "latitude": 50.447433,
      "longitude": 6.607192,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157501,
      "ems": null
    },
    {
      "latitude": 50.446751,
      "longitude": 6.605604,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 236,
      "squawk": "4451",
      "timestamp": 1623157504,
      "ems": null
    },
    {
      "latitude": 50.445866,
      "longitude": 6.603526,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623157507,
      "ems": null
    },
    {
      "latitude": 50.445282,
      "longitude": 6.602205,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623157510,
      "ems": null
    },
    {
      "latitude": 50.443085,
      "longitude": 6.597723,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623157519,
      "ems": null
    },
    {
      "latitude": 50.442169,
      "longitude": 6.595989,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623157522,
      "ems": null
    },
    {
      "latitude": 50.441536,
      "longitude": 6.594766,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623157525,
      "ems": null
    },
    {
      "latitude": 50.440002,
      "longitude": 6.591574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623157531,
      "ems": null
    },
    {
      "latitude": 50.438553,
      "longitude": 6.588327,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623157537,
      "ems": null
    },
    {
      "latitude": 50.435715,
      "longitude": 6.582039,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623157549,
      "ems": null
    },
    {
      "latitude": 50.434341,
      "longitude": 6.578859,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1623157555,
      "ems": null
    },
    {
      "latitude": 50.43367,
      "longitude": 6.577099,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157558,
      "ems": null
    },
    {
      "latitude": 50.433105,
      "longitude": 6.575534,
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157561,
      "ems": null
    },
    {
      "latitude": 50.433014,
      "longitude": 6.575317,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157562,
      "ems": null
    },
    {
      "latitude": 50.432419,
      "longitude": 6.573583,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623157565,
      "ems": null
    },
    {
      "latitude": 50.43132,
      "longitude": 6.570186,
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
      "heading": 245,
      "squawk": "4451",
      "timestamp": 1623157570,
      "ems": null
    },
    {
      "latitude": 50.430862,
      "longitude": 6.568668,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623157573,
      "ems": null
    },
    {
      "latitude": 50.430737,
      "longitude": 6.568414,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623157574,
      "ems": null
    },
    {
      "latitude": 50.429249,
      "longitude": 6.565296,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1623157579,
      "ems": null
    },
    {
      "latitude": 50.428036,
      "longitude": 6.564183,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623157583,
      "ems": null
    },
    {
      "latitude": 50.427338,
      "longitude": 6.563825,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623157584,
      "ems": null
    },
    {
      "latitude": 50.426826,
      "longitude": 6.563663,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623157585,
      "ems": null
    },
    {
      "latitude": 50.424454,
      "longitude": 6.563898,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1623157591,
      "ems": null
    },
    {
      "latitude": 50.422943,
      "longitude": 6.564837,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623157594,
      "ems": null
    },
    {
      "latitude": 50.421982,
      "longitude": 6.565921,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1623157597,
      "ems": null
    },
    {
      "latitude": 50.420425,
      "longitude": 6.569463,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1623157603,
      "ems": null
    },
    {
      "latitude": 50.420105,
      "longitude": 6.571631,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1623157606,
      "ems": null
    },
    {
      "latitude": 50.420105,
      "longitude": 6.573366,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1623157608,
      "ems": null
    },
    {
      "latitude": 50.420544,
      "longitude": 6.576208,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623157613,
      "ems": null
    },
    {
      "latitude": 50.420975,
      "longitude": 6.577631,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623157615,
      "ems": null
    },
    {
      "latitude": 50.422623,
      "longitude": 6.580955,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157621,
      "ems": null
    },
    {
      "latitude": 50.422714,
      "longitude": 6.581172,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157622,
      "ems": null
    },
    {
      "latitude": 50.425243,
      "longitude": 6.586007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1623157631,
      "ems": null
    },
    {
      "latitude": 50.425755,
      "longitude": 6.587046,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157633,
      "ems": null
    },
    {
      "latitude": 50.427898,
      "longitude": 6.591054,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1623157641,
      "ems": null
    },
    {
      "latitude": 50.429169,
      "longitude": 6.593387,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1623157645,
      "ems": null
    },
    {
      "latitude": 50.430691,
      "longitude": 6.596177,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1623157651,
      "ems": null
    },
    {
      "latitude": 50.432144,
      "longitude": 6.599097,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157657,
      "ems": null
    },
    {
      "latitude": 50.433437,
      "longitude": 6.601595,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157663,
      "ems": null
    },
    {
      "latitude": 50.436356,
      "longitude": 6.60712,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1623157675,
      "ems": null
    },
    {
      "latitude": 50.440201,
      "longitude": 6.614348,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1623157691,
      "ems": null
    },
    {
      "latitude": 50.442421,
      "longitude": 6.61852,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1623157700,
      "ems": null
    },
    {
      "latitude": 50.443726,
      "longitude": 6.621286,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623157705,
      "ems": null
    },
    {
      "latitude": 50.444412,
      "longitude": 6.622732,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623157708,
      "ems": null
    },
    {
      "latitude": 50.444515,
      "longitude": 6.622974,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623157709,
      "ems": null
    },
    {
      "latitude": 50.44519,
      "longitude": 6.624467,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623157712,
      "ems": null
    },
    {
      "latitude": 50.446426,
      "longitude": 6.627057,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1623157718,
      "ems": null
    },
    {
      "latitude": 50.447681,
      "longitude": 6.629729,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623157724,
      "ems": null
    },
    {
      "latitude": 50.449127,
      "longitude": 6.632562,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157730,
      "ems": null
    },
    {
      "latitude": 50.450989,
      "longitude": 6.63641,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623157738,
      "ems": null
    },
    {
      "latitude": 50.452431,
      "longitude": 6.63938,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1623157745,
      "ems": null
    },
    {
      "latitude": 50.45364,
      "longitude": 6.641681,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623157750,
      "ems": null
    },
    {
      "latitude": 50.455132,
      "longitude": 6.644576,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1623157757,
      "ems": null
    },
    {
      "latitude": 50.456436,
      "longitude": 6.647026,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623157763,
      "ems": null
    },
    {
      "latitude": 50.457645,
      "longitude": 6.649178,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623157768,
      "ems": null
    },
    {
      "latitude": 50.458996,
      "longitude": 6.651405,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623157775,
      "ems": null
    },
    {
      "latitude": 50.460434,
      "longitude": 6.653884,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623157781,
      "ems": null
    },
    {
      "latitude": 50.461136,
      "longitude": 6.654894,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1623157784,
      "ems": null
    },
    {
      "latitude": 50.462082,
      "longitude": 6.656414,
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
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1623157787,
      "ems": null
    },
    {
      "latitude": 50.464188,
      "longitude": 6.659739,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1623157796,
      "ems": null
    },
    {
      "latitude": 50.464737,
      "longitude": 6.660606,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1623157799,
      "ems": null
    },
    {
      "latitude": 50.465515,
      "longitude": 6.661546,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1623157802,
      "ems": null
    },
    {
      "latitude": 50.466255,
      "longitude": 6.662392,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1623157805,
      "ems": null
    },
    {
      "latitude": 50.467072,
      "longitude": 6.663352,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623157808,
      "ems": null
    },
    {
      "latitude": 50.467888,
      "longitude": 6.664173,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623157810,
      "ems": null
    },
    {
      "latitude": 50.468166,
      "longitude": 6.664396,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623157811,
      "ems": null
    },
    {
      "latitude": 50.468857,
      "longitude": 6.665015,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623157814,
      "ems": null
    },
    {
      "latitude": 50.470001,
      "longitude": 6.665738,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623157817,
      "ems": null
    },
    {
      "latitude": 50.470963,
      "longitude": 6.666316,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623157820,
      "ems": null
    },
    {
      "latitude": 50.471748,
      "longitude": 6.666623,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623157823,
      "ems": null
    },
    {
      "latitude": 50.473755,
      "longitude": 6.667183,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623157829,
      "ems": null
    },
    {
      "latitude": 50.474728,
      "longitude": 6.667291,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1623157831,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 6.667545,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623157835,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 6.667736,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1623157838,
      "ems": null
    },
    {
      "latitude": 50.477615,
      "longitude": 6.66781,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157841,
      "ems": null
    },
    {
      "latitude": 50.478313,
      "longitude": 6.66781,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157844,
      "ems": null
    },
    {
      "latitude": 50.479198,
      "longitude": 6.667736,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157847,
      "ems": null
    },
    {
      "latitude": 50.480072,
      "longitude": 6.667761,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157850,
      "ems": null
    },
    {
      "latitude": 50.480896,
      "longitude": 6.667761,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157852,
      "ems": null
    },
    {
      "latitude": 50.481171,
      "longitude": 6.667761,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157853,
      "ems": null
    },
    {
      "latitude": 50.481758,
      "longitude": 6.667736,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157855,
      "ems": null
    },
    {
      "latitude": 50.48204,
      "longitude": 6.667689,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157857,
      "ems": null
    },
    {
      "latitude": 50.482597,
      "longitude": 6.667662,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157859,
      "ems": null
    },
    {
      "latitude": 50.483551,
      "longitude": 6.667617,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623157862,
      "ems": null
    },
    {
      "latitude": 50.484226,
      "longitude": 6.667513,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623157865,
      "ems": null
    },
    {
      "latitude": 50.485298,
      "longitude": 6.667439,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623157868,
      "ems": null
    },
    {
      "latitude": 50.485901,
      "longitude": 6.667365,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1623157871,
      "ems": null
    },
    {
      "latitude": 50.486694,
      "longitude": 6.667216,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623157874,
      "ems": null
    },
    {
      "latitude": 50.487484,
      "longitude": 6.666994,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623157877,
      "ems": null
    },
    {
      "latitude": 50.488277,
      "longitude": 6.666771,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623157880,
      "ems": null
    },
    {
      "latitude": 50.48909,
      "longitude": 6.666605,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623157882,
      "ems": null
    },
    {
      "latitude": 50.489395,
      "longitude": 6.666548,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623157883,
      "ems": null
    },
    {
      "latitude": 50.490234,
      "longitude": 6.666316,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623157887,
      "ems": null
    },
    {
      "latitude": 50.490784,
      "longitude": 6.666172,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623157889,
      "ems": null
    },
    {
      "latitude": 50.491535,
      "longitude": 6.665955,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1623157892,
      "ems": null
    },
    {
      "latitude": 50.493393,
      "longitude": 6.665376,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623157898,
      "ems": null
    },
    {
      "latitude": 50.495586,
      "longitude": 6.664841,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623157906,
      "ems": null
    },
    {
      "latitude": 50.496368,
      "longitude": 6.664798,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623157910,
      "ems": null
    },
    {
      "latitude": 50.497009,
      "longitude": 6.664726,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623157912,
      "ems": null
    },
    {
      "latitude": 50.497215,
      "longitude": 6.664693,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157913,
      "ems": null
    },
    {
      "latitude": 50.497681,
      "longitude": 6.664693,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157915,
      "ems": null
    },
    {
      "latitude": 50.498566,
      "longitude": 6.664726,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157919,
      "ems": null
    },
    {
      "latitude": 50.49884,
      "longitude": 6.664654,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623157920,
      "ems": null
    },
    {
      "latitude": 50.500717,
      "longitude": 6.664292,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1623157925,
      "ems": null
    },
    {
      "latitude": 50.50145,
      "longitude": 6.664247,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623157927,
      "ems": null
    },
    {
      "latitude": 50.501862,
      "longitude": 6.66422,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623157929,
      "ems": null
    },
    {
      "latitude": 50.502522,
      "longitude": 6.664247,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623157931,
      "ems": null
    },
    {
      "latitude": 50.503555,
      "longitude": 6.664364,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623157933,
      "ems": null
    },
    {
      "latitude": 50.504791,
      "longitude": 6.664437,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157937,
      "ems": null
    },
    {
      "latitude": 50.505157,
      "longitude": 6.664437,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157938,
      "ems": null
    },
    {
      "latitude": 50.50629,
      "longitude": 6.66447,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157941,
      "ems": null
    },
    {
      "latitude": 50.508572,
      "longitude": 6.664544,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623157947,
      "ems": null
    },
    {
      "latitude": 50.509689,
      "longitude": 6.664618,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623157950,
      "ems": null
    },
    {
      "latitude": 50.510376,
      "longitude": 6.664654,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157952,
      "ems": null
    },
    {
      "latitude": 50.510715,
      "longitude": 6.664693,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623157953,
      "ems": null
    },
    {
      "latitude": 50.512527,
      "longitude": 6.664726,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623157958,
      "ems": null
    },
    {
      "latitude": 50.512894,
      "longitude": 6.664726,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623157959,
      "ems": null
    },
    {
      "latitude": 50.515045,
      "longitude": 6.664767,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623157965,
      "ems": null
    },
    {
      "latitude": 50.516968,
      "longitude": 6.664726,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623157971,
      "ems": null
    },
    {
      "latitude": 50.519047,
      "longitude": 6.664767,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1623157977,
      "ems": null
    },
    {
      "latitude": 50.520721,
      "longitude": 6.664841,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623157983,
      "ems": null
    },
    {
      "latitude": 50.522232,
      "longitude": 6.665015,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623157989,
      "ems": null
    },
    {
      "latitude": 50.524429,
      "longitude": 6.665304,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1623157998,
      "ems": null
    },
    {
      "latitude": 50.526398,
      "longitude": 6.665449,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1623158004,
      "ems": null
    },
    {
      "latitude": 50.529289,
      "longitude": 6.66588,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623158013,
      "ems": null
    },
    {
      "latitude": 50.530407,
      "longitude": 6.6664,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623158016,
      "ems": null
    },
    {
      "latitude": 50.531021,
      "longitude": 6.666749,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623158018,
      "ems": null
    },
    {
      "latitude": 50.53194,
      "longitude": 6.667142,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623158021,
      "ems": null
    },
    {
      "latitude": 50.532871,
      "longitude": 6.667513,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623158024,
      "ems": null
    },
    {
      "latitude": 50.533173,
      "longitude": 6.667617,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623158025,
      "ems": null
    },
    {
      "latitude": 50.534088,
      "longitude": 6.667906,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623158028,
      "ems": null
    },
    {
      "latitude": 50.534729,
      "longitude": 6.668195,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623158030,
      "ems": null
    },
    {
      "latitude": 50.535667,
      "longitude": 6.668553,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623158033,
      "ems": null
    },
    {
      "latitude": 50.535992,
      "longitude": 6.668701,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623158034,
      "ems": null
    },
    {
      "latitude": 50.536644,
      "longitude": 6.668924,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623158036,
      "ems": null
    },
    {
      "latitude": 50.538803,
      "longitude": 6.669713,
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
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623158042,
      "ems": null
    },
    {
      "latitude": 50.540508,
      "longitude": 6.670334,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623158048,
      "ems": null
    },
    {
      "latitude": 50.542091,
      "longitude": 6.670928,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623158054,
      "ems": null
    },
    {
      "latitude": 50.54493,
      "longitude": 6.672338,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623158066,
      "ems": null
    },
    {
      "latitude": 50.547134,
      "longitude": 6.673327,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1623158073,
      "ems": null
    },
    {
      "latitude": 50.54892,
      "longitude": 6.674267,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623158078,
      "ems": null
    },
    {
      "latitude": 50.54924,
      "longitude": 6.674411,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623158079,
      "ems": null
    },
    {
      "latitude": 50.550053,
      "longitude": 6.674862,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1623158081,
      "ems": null
    },
    {
      "latitude": 50.551029,
      "longitude": 6.67553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158084,
      "ems": null
    },
    {
      "latitude": 50.552238,
      "longitude": 6.676347,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158087,
      "ems": null
    },
    {
      "latitude": 50.552567,
      "longitude": 6.67657,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623158088,
      "ems": null
    },
    {
      "latitude": 50.553215,
      "longitude": 6.677089,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623158090,
      "ems": null
    },
    {
      "latitude": 50.553452,
      "longitude": 6.677302,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623158091,
      "ems": null
    },
    {
      "latitude": 50.554321,
      "longitude": 6.677953,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623158094,
      "ems": null
    },
    {
      "latitude": 50.554871,
      "longitude": 6.678459,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623158096,
      "ems": null
    },
    {
      "latitude": 50.555496,
      "longitude": 6.678945,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623158098,
      "ems": null
    },
    {
      "latitude": 50.556427,
      "longitude": 6.679762,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623158103,
      "ems": null
    },
    {
      "latitude": 50.557617,
      "longitude": 6.680772,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158108,
      "ems": null
    },
    {
      "latitude": 50.559406,
      "longitude": 6.681766,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623158114,
      "ems": null
    },
    {
      "latitude": 50.562561,
      "longitude": 6.683735,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158123,
      "ems": null
    },
    {
      "latitude": 50.563751,
      "longitude": 6.68453,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158126,
      "ems": null
    },
    {
      "latitude": 50.564064,
      "longitude": 6.684735,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158127,
      "ems": null
    },
    {
      "latitude": 50.56485,
      "longitude": 6.685325,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158129,
      "ems": null
    },
    {
      "latitude": 50.565182,
      "longitude": 6.685552,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158130,
      "ems": null
    },
    {
      "latitude": 50.568161,
      "longitude": 6.687705,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158138,
      "ems": null
    },
    {
      "latitude": 50.570255,
      "longitude": 6.689115,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623158144,
      "ems": null
    },
    {
      "latitude": 50.572117,
      "longitude": 6.690377,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158150,
      "ems": null
    },
    {
      "latitude": 50.57373,
      "longitude": 6.691541,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623158156,
      "ems": null
    },
    {
      "latitude": 50.575329,
      "longitude": 6.692604,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158162,
      "ems": null
    },
    {
      "latitude": 50.57666,
      "longitude": 6.69342,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158168,
      "ems": null
    },
    {
      "latitude": 50.577934,
      "longitude": 6.694163,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623158174,
      "ems": null
    },
    {
      "latitude": 50.578217,
      "longitude": 6.694215,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623158175,
      "ems": null
    },
    {
      "latitude": 50.578674,
      "longitude": 6.69436,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623158177,
      "ems": null
    },
    {
      "latitude": 50.580505,
      "longitude": 6.695372,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623158183,
      "ems": null
    },
    {
      "latitude": 50.582218,
      "longitude": 6.69639,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158189,
      "ems": null
    },
    {
      "latitude": 50.583801,
      "longitude": 6.697396,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158196,
      "ems": null
    },
    {
      "latitude": 50.584873,
      "longitude": 6.698246,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623158202,
      "ems": null
    },
    {
      "latitude": 50.585339,
      "longitude": 6.698543,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623158204,
      "ems": null
    },
    {
      "latitude": 50.585632,
      "longitude": 6.698769,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1623158205,
      "ems": null
    },
    {
      "latitude": 50.585991,
      "longitude": 6.698988,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623158207,
      "ems": null
    },
    {
      "latitude": 50.587738,
      "longitude": 6.699998,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1623158213,
      "ems": null
    },
    {
      "latitude": 50.58934,
      "longitude": 6.70101,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158219,
      "ems": null
    },
    {
      "latitude": 50.591064,
      "longitude": 6.702106,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623158225,
      "ems": null
    },
    {
      "latitude": 50.593113,
      "longitude": 6.703368,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158231,
      "ems": null
    },
    {
      "latitude": 50.594135,
      "longitude": 6.704036,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623158234,
      "ems": null
    },
    {
      "latitude": 50.596558,
      "longitude": 6.705297,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623158241,
      "ems": null
    },
    {
      "latitude": 50.598652,
      "longitude": 6.706411,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623158249,
      "ems": null
    },
    {
      "latitude": 50.598976,
      "longitude": 6.70656,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623158251,
      "ems": null
    },
    {
      "latitude": 50.599319,
      "longitude": 6.70672,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623158252,
      "ems": null
    },
    {
      "latitude": 50.599537,
      "longitude": 6.706856,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623158253,
      "ems": null
    },
    {
      "latitude": 50.599957,
      "longitude": 6.707005,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623158255,
      "ems": null
    },
    {
      "latitude": 50.600601,
      "longitude": 6.707081,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1623158258,
      "ems": null
    },
    {
      "latitude": 50.601196,
      "longitude": 6.706936,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1623158261,
      "ems": null
    },
    {
      "latitude": 50.601425,
      "longitude": 6.706864,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623158262,
      "ems": null
    },
    {
      "latitude": 50.601818,
      "longitude": 6.706634,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1623158264,
      "ems": null
    },
    {
      "latitude": 50.602341,
      "longitude": 6.706286,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1623158267,
      "ems": null
    },
    {
      "latitude": 50.60284,
      "longitude": 6.705817,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1623158270,
      "ems": null
    },
    {
      "latitude": 50.603306,
      "longitude": 6.705223,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1623158273,
      "ems": null
    },
    {
      "latitude": 50.603912,
      "longitude": 6.704332,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1623158278,
      "ems": null
    },
    {
      "latitude": 50.604332,
      "longitude": 6.703219,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1623158281,
      "ems": null
    },
    {
      "latitude": 50.604565,
      "longitude": 6.702625,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623158282,
      "ems": null
    },
    {
      "latitude": 50.604813,
      "longitude": 6.702022,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623158284,
      "ems": null
    },
    {
      "latitude": 50.605042,
      "longitude": 6.701443,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623158285,
      "ems": null
    },
    {
      "latitude": 50.605309,
      "longitude": 6.700844,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623158287,
      "ems": null
    },
    {
      "latitude": 50.606472,
      "longitude": 6.698839,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1623158292,
      "ems": null
    },
    {
      "latitude": 50.60759,
      "longitude": 6.697503,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1623158296,
      "ems": null
    },
    {
      "latitude": 50.608109,
      "longitude": 6.697034,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623158297,
      "ems": null
    },
    {
      "latitude": 50.609684,
      "longitude": 6.695276,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1623158303,
      "ems": null
    },
    {
      "latitude": 50.60994,
      "longitude": 6.694866,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1623158304,
      "ems": null
    },
    {
      "latitude": 50.610943,
      "longitude": 6.693346,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1623158309,
      "ems": null
    },
    {
      "latitude": 50.611965,
      "longitude": 6.691787,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1623158315,
      "ems": null
    },
    {
      "latitude": 50.612961,
      "longitude": 6.690168,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623158322,
      "ems": null
    },
    {
      "latitude": 50.613174,
      "longitude": 6.689857,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623158323,
      "ems": null
    },
    {
      "latitude": 50.613464,
      "longitude": 6.689373,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -1984,
        "ms": -10.1
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1623158324,
      "ems": null
    },
    {
      "latitude": 50.613781,
      "longitude": 6.688744,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1623158326,
      "ems": null
    },
    {
      "latitude": 50.614105,
      "longitude": 6.688072,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1623158327,
      "ems": null
    },
    {
      "latitude": 50.614944,
      "longitude": 6.686591,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1623158330,
      "ems": null
    },
    {
      "latitude": 50.61644,
      "longitude": 6.684241,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623158337,
      "ems": null
    },
    {
      "latitude": 50.618298,
      "longitude": 6.682137,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1623158343,
      "ems": null
    },
    {
      "latitude": 50.618717,
      "longitude": 6.68184,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623158345,
      "ems": null
    },
    {
      "latitude": 50.619415,
      "longitude": 6.681494,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623158347,
      "ems": null
    },
    {
      "latitude": 50.619873,
      "longitude": 6.681278,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1623158348,
      "ems": null
    },
    {
      "latitude": 50.620296,
      "longitude": 6.681024,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623158350,
      "ems": null
    },
    {
      "latitude": 50.621613,
      "longitude": 6.678459,
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
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1623158356,
      "ems": null
    },
    {
      "latitude": 50.621521,
      "longitude": 6.675785,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1623158361,
      "ems": null
    },
    {
      "latitude": 50.620834,
      "longitude": 6.673399,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623158365,
      "ems": null
    },
    {
      "latitude": 50.619831,
      "longitude": 6.671002,
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1623158369,
      "ems": null
    },
    {
      "latitude": 50.619232,
      "longitude": 6.669496,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1623158372,
      "ems": null
    },
    {
      "latitude": 50.619049,
      "longitude": 6.669063,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1623158373,
      "ems": null
    },
    {
      "latitude": 50.618637,
      "longitude": 6.668051,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623158376,
      "ems": null
    },
    {
      "latitude": 50.618156,
      "longitude": 6.666697,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 239,
      "squawk": "4451",
      "timestamp": 1623158379,
      "ems": null
    },
    {
      "latitude": 50.617924,
      "longitude": 6.666103,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623158380,
      "ems": null
    },
    {
      "latitude": 50.617722,
      "longitude": 6.665521,
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
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1623158382,
      "ems": null
    },
    {
      "latitude": 50.61755,
      "longitude": 6.664916,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623158383,
      "ems": null
    },
    {
      "latitude": 50.617367,
      "longitude": 6.664321,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623158385,
      "ems": null
    },
    {
      "latitude": 50.61718,
      "longitude": 6.663802,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158386,
      "ems": null
    },
    {
      "latitude": 50.616947,
      "longitude": 6.66306,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158388,
      "ems": null
    },
    {
      "latitude": 50.616257,
      "longitude": 6.660461,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623158394,
      "ems": null
    },
    {
      "latitude": 50.616119,
      "longitude": 6.659883,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1623158395,
      "ems": null
    },
    {
      "latitude": 50.615829,
      "longitude": 6.658903,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158397,
      "ems": null
    },
    {
      "latitude": 50.615662,
      "longitude": 6.658293,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158398,
      "ems": null
    },
    {
      "latitude": 50.615364,
      "longitude": 6.657269,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158400,
      "ems": null
    },
    {
      "latitude": 50.615177,
      "longitude": 6.656676,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1623158401,
      "ems": null
    },
    {
      "latitude": 50.614899,
      "longitude": 6.655785,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623158402,
      "ems": null
    },
    {
      "latitude": 50.614197,
      "longitude": 6.654028,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1623158406,
      "ems": null
    },
    {
      "latitude": 50.613827,
      "longitude": 6.653409,
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
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623158407,
      "ems": null
    },
    {
      "latitude": 50.612823,
      "longitude": 6.652222,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1623158410,
      "ems": null
    },
    {
      "latitude": 50.610443,
      "longitude": 6.651571,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1623158416,
      "ems": null
    },
    {
      "latitude": 50.609962,
      "longitude": 6.651702,
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1623158417,
      "ems": null
    },
    {
      "latitude": 50.609543,
      "longitude": 6.651851,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1623158418,
      "ems": null
    },
    {
      "latitude": 50.608612,
      "longitude": 6.652511,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1623158421,
      "ems": null
    },
    {
      "latitude": 50.607544,
      "longitude": 6.653409,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1623158424,
      "ems": null
    },
    {
      "latitude": 50.60717,
      "longitude": 6.653707,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1623158425,
      "ems": null
    },
    {
      "latitude": 50.606564,
      "longitude": 6.654226,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623158426,
      "ems": null
    },
    {
      "latitude": 50.605961,
      "longitude": 6.654746,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623158428,
      "ems": null
    },
    {
      "latitude": 50.604843,
      "longitude": 6.655785,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1623158431,
      "ems": null
    },
    {
      "latitude": 50.60326,
      "longitude": 6.65764,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1623158435,
      "ems": null
    },
    {
      "latitude": 50.602608,
      "longitude": 6.659125,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 122,
      "squawk": "4451",
      "timestamp": 1623158438,
      "ems": null
    },
    {
      "latitude": 50.602329,
      "longitude": 6.661278,
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
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158441,
      "ems": null
    },
    {
      "latitude": 50.602421,
      "longitude": 6.664247,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623158445,
      "ems": null
    },
    {
      "latitude": 50.602478,
      "longitude": 6.667689,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 89,
      "squawk": "4451",
      "timestamp": 1623158451,
      "ems": null
    },
    {
      "latitude": 50.602524,
      "longitude": 6.669207,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623158453,
      "ems": null
    },
    {
      "latitude": 50.602661,
      "longitude": 6.670797,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1623158456,
      "ems": null
    },
    {
      "latitude": 50.603348,
      "longitude": 6.674339,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623158463,
      "ems": null
    },
    {
      "latitude": 50.603958,
      "longitude": 6.675902,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "4451",
      "timestamp": 1623158465,
      "ems": null
    },
    {
      "latitude": 50.604237,
      "longitude": 6.676347,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "4451",
      "timestamp": 1623158466,
      "ems": null
    },
    {
      "latitude": 50.60495,
      "longitude": 6.676796,
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
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158468,
      "ems": null
    },
    {
      "latitude": 50.605179,
      "longitude": 6.676868,
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
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623158469,
      "ems": null
    },
    {
      "latitude": 50.60717,
      "longitude": 6.676793,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623158473,
      "ems": null
    },
    {
      "latitude": 50.607651,
      "longitude": 6.676724,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623158474,
      "ems": null
    },
    {
      "latitude": 50.609962,
      "longitude": 6.67657,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623158479,
      "ems": null
    },
    {
      "latitude": 50.610615,
      "longitude": 6.676496,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1623158481,
      "ems": null
    },
    {
      "latitude": 50.611778,
      "longitude": 6.676421,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623158484,
      "ems": null
    },
    {
      "latitude": 50.612431,
      "longitude": 6.676273,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623158485,
      "ems": null
    },
    {
      "latitude": 50.613876,
      "longitude": 6.674845,
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
        "fpm": -2240,
        "ms": -11.4
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1623158490,
      "ems": null
    },
    {
      "latitude": 50.614201,
      "longitude": 6.673972,
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
        "fpm": -3648,
        "ms": -18.5
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623158491,
      "ems": null
    },
    {
      "latitude": 50.614517,
      "longitude": 6.672966,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -3264,
        "ms": -16.6
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1623158493,
      "ems": null
    },
    {
      "latitude": 50.617355,
      "longitude": 6.664437,
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
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623158506,
      "ems": null
    },
    {
      "latitude": 50.617599,
      "longitude": 6.66395,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1623158507,
      "ems": null
    },
    {
      "latitude": 50.618362,
      "longitude": 6.662341,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623158510,
      "ems": null
    },
    {
      "latitude": 50.621368,
      "longitude": 6.658235,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1623158520,
      "ems": null
    },
    {
      "latitude": 50.622482,
      "longitude": 6.657064,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1623158523,
      "ems": null
    },
    {
      "latitude": 50.623558,
      "longitude": 6.656082,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623158526,
      "ems": null
    },
    {
      "latitude": 50.62413,
      "longitude": 6.655547,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623158527,
      "ems": null
    },
    {
      "latitude": 50.626163,
      "longitude": 6.653409,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1623158533,
      "ems": null
    },
    {
      "latitude": 50.628571,
      "longitude": 6.650704,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1623158541,
      "ems": null
    },
    {
      "latitude": 50.630539,
      "longitude": 6.650143,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1623158546,
      "ems": null
    },
    {
      "latitude": 50.63118,
      "longitude": 6.65027,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1623158547,
      "ems": null
    },
    {
      "latitude": 50.632324,
      "longitude": 6.650993,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623158550,
      "ems": null
    },
    {
      "latitude": 50.632828,
      "longitude": 6.651499,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623158551,
      "ems": null
    },
    {
      "latitude": 50.63324,
      "longitude": 6.651999,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1623158552,
      "ems": null
    },
    {
      "latitude": 50.633892,
      "longitude": 6.65289,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1623158554,
      "ems": null
    },
    {
      "latitude": 50.634155,
      "longitude": 6.653306,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1623158555,
      "ems": null
    },
    {
      "latitude": 50.634613,
      "longitude": 6.654318,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623158557,
      "ems": null
    },
    {
      "latitude": 50.635529,
      "longitude": 6.659016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623158565,
      "ems": null
    },
    {
      "latitude": 50.635429,
      "longitude": 6.661204,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158568,
      "ems": null
    },
    {
      "latitude": 50.635391,
      "longitude": 6.661835,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1623158569,
      "ems": null
    },
    {
      "latitude": 50.635197,
      "longitude": 6.663356,
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158571,
      "ems": null
    },
    {
      "latitude": 50.634964,
      "longitude": 6.665361,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158574,
      "ems": null
    },
    {
      "latitude": 50.634613,
      "longitude": 6.668918,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158579,
      "ems": null
    },
    {
      "latitude": 50.634521,
      "longitude": 6.671954,
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
      "heading": 90,
      "squawk": "4451",
      "timestamp": 1623158583,
      "ems": null
    },
    {
      "latitude": 50.634705,
      "longitude": 6.675351,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623158587,
      "ems": null
    },
    {
      "latitude": 50.634796,
      "longitude": 6.676507,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623158589,
      "ems": null
    },
    {
      "latitude": 50.634888,
      "longitude": 6.678531,
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
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623158592,
      "ems": null
    },
    {
      "latitude": 50.634964,
      "longitude": 6.679317,
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
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1623158593,
      "ems": null
    },
    {
      "latitude": 50.635071,
      "longitude": 6.680699,
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
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1623158595,
      "ems": null
    },
    {
      "latitude": 50.635712,
      "longitude": 6.686193,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623158603,
      "ems": null
    },
    {
      "latitude": 50.635849,
      "longitude": 6.686843,
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
      "heading": 74,
      "squawk": "4451",
      "timestamp": 1623158604,
      "ems": null
    },
    {
      "latitude": 50.636124,
      "longitude": 6.688072,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158605,
      "ems": null
    },
    {
      "latitude": 50.636581,
      "longitude": 6.69024,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158609,
      "ems": null
    },
    {
      "latitude": 50.636826,
      "longitude": 6.691267,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158610,
      "ems": null
    },
    {
      "latitude": 50.637039,
      "longitude": 6.692336,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158612,
      "ems": null
    },
    {
      "latitude": 50.637222,
      "longitude": 6.693276,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158613,
      "ems": null
    },
    {
      "latitude": 50.637615,
      "longitude": 6.695276,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158616,
      "ems": null
    },
    {
      "latitude": 50.637863,
      "longitude": 6.696311,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158617,
      "ems": null
    },
    {
      "latitude": 50.638046,
      "longitude": 6.697323,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158619,
      "ems": null
    },
    {
      "latitude": 50.638733,
      "longitude": 6.700398,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158623,
      "ems": null
    },
    {
      "latitude": 50.639374,
      "longitude": 6.704696,
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
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623158629,
      "ems": null
    },
    {
      "latitude": 50.640038,
      "longitude": 6.708935,
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
      "heading": 76,
      "squawk": "4451",
      "timestamp": 1623158636,
      "ems": null
    },
    {
      "latitude": 50.640175,
      "longitude": 6.709974,
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
      "heading": 76,
      "squawk": "4451",
      "timestamp": 1623158637,
      "ems": null
    },
    {
      "latitude": 50.640427,
      "longitude": 6.712213,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1623158640,
      "ems": null
    },
    {
      "latitude": 50.640564,
      "longitude": 6.714381,
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
      "heading": 87,
      "squawk": "4451",
      "timestamp": 1623158643,
      "ems": null
    },
    {
      "latitude": 50.640549,
      "longitude": 6.715616,
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
      "heading": 91,
      "squawk": "4451",
      "timestamp": 1623158645,
      "ems": null
    },
    {
      "latitude": 50.640518,
      "longitude": 6.716766,
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
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623158646,
      "ems": null
    },
    {
      "latitude": 50.640472,
      "longitude": 6.717923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1623158648,
      "ems": null
    },
    {
      "latitude": 50.640408,
      "longitude": 6.718659,
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1623158649,
      "ems": null
    },
    {
      "latitude": 50.640335,
      "longitude": 6.720886,
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1623158652,
      "ems": null
    },
    {
      "latitude": 50.640244,
      "longitude": 6.723054,
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1623158655,
      "ems": null
    },
    {
      "latitude": 50.640152,
      "longitude": 6.725151,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623158658,
      "ems": null
    },
    {
      "latitude": 50.64006,
      "longitude": 6.726235,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623158660,
      "ems": null
    },
    {
      "latitude": 50.639988,
      "longitude": 6.72727,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158661,
      "ems": null
    },
    {
      "latitude": 50.639832,
      "longitude": 6.72927,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158664,
      "ems": null
    },
    {
      "latitude": 50.639709,
      "longitude": 6.731427,
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
      "heading": 95,
      "squawk": "4451",
      "timestamp": 1623158667,
      "ems": null
    },
    {
      "latitude": 50.639618,
      "longitude": 6.733357,
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1623158670,
      "ems": null
    },
    {
      "latitude": 50.639557,
      "longitude": 6.734692,
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1623158672,
      "ems": null
    },
    {
      "latitude": 50.63929,
      "longitude": 6.738925,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158678,
      "ems": null
    },
    {
      "latitude": 50.639008,
      "longitude": 6.743076,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623158684,
      "ems": null
    },
    {
      "latitude": 50.638641,
      "longitude": 6.747268,
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623158690,
      "ems": null
    },
    {
      "latitude": 50.638222,
      "longitude": 6.751396,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1623158696,
      "ems": null
    },
    {
      "latitude": 50.637955,
      "longitude": 6.753556,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158699,
      "ems": null
    },
    {
      "latitude": 50.637711,
      "longitude": 6.755627,
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
      "heading": 101,
      "squawk": "4451",
      "timestamp": 1623158702,
      "ems": null
    },
    {
      "latitude": 50.637569,
      "longitude": 6.756517,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158703,
      "ems": null
    },
    {
      "latitude": 50.637314,
      "longitude": 6.758399,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158706,
      "ems": null
    },
    {
      "latitude": 50.637177,
      "longitude": 6.759411,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158708,
      "ems": null
    },
    {
      "latitude": 50.637039,
      "longitude": 6.76035,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623158709,
      "ems": null
    },
    {
      "latitude": 50.636902,
      "longitude": 6.761218,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623158711,
      "ems": null
    },
    {
      "latitude": 50.63673,
      "longitude": 6.762233,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623158712,
      "ems": null
    },
    {
      "latitude": 50.636543,
      "longitude": 6.763198,
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158714,
      "ems": null
    },
    {
      "latitude": 50.636127,
      "longitude": 6.766316,
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158718,
      "ems": null
    },
    {
      "latitude": 50.635475,
      "longitude": 6.770473,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158724,
      "ems": null
    },
    {
      "latitude": 50.635162,
      "longitude": 6.772421,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158727,
      "ems": null
    },
    {
      "latitude": 50.634964,
      "longitude": 6.773517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158729,
      "ems": null
    },
    {
      "latitude": 50.634262,
      "longitude": 6.777748,
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
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623158735,
      "ems": null
    },
    {
      "latitude": 50.633381,
      "longitude": 6.782276,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1623158741,
      "ems": null
    },
    {
      "latitude": 50.633194,
      "longitude": 6.782973,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1623158742,
      "ems": null
    },
    {
      "latitude": 50.63269,
      "longitude": 6.784997,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623158745,
      "ems": null
    },
    {
      "latitude": 50.63237,
      "longitude": 6.786371,
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623158747,
      "ems": null
    },
    {
      "latitude": 50.632095,
      "longitude": 6.787383,
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623158748,
      "ems": null
    },
    {
      "latitude": 50.631821,
      "longitude": 6.788539,
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
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1623158750,
      "ems": null
    },
    {
      "latitude": 50.631657,
      "longitude": 6.789328,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1623158751,
      "ems": null
    },
    {
      "latitude": 50.631409,
      "longitude": 6.790418,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1623158753,
      "ems": null
    },
    {
      "latitude": 50.630539,
      "longitude": 6.79497,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158759,
      "ems": null
    },
    {
      "latitude": 50.629887,
      "longitude": 6.799275,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623158765,
      "ems": null
    },
    {
      "latitude": 50.629395,
      "longitude": 6.802199,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623158769,
      "ems": null
    },
    {
      "latitude": 50.628819,
      "longitude": 6.805733,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623158774,
      "ems": null
    },
    {
      "latitude": 50.628632,
      "longitude": 6.806773,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1623158775,
      "ems": null
    },
    {
      "latitude": 50.628342,
      "longitude": 6.808849,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158778,
      "ems": null
    },
    {
      "latitude": 50.628071,
      "longitude": 6.811152,
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158781,
      "ems": null
    },
    {
      "latitude": 50.62793,
      "longitude": 6.812318,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158783,
      "ems": null
    },
    {
      "latitude": 50.627747,
      "longitude": 6.813602,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 100,
      "squawk": "4451",
      "timestamp": 1623158784,
      "ems": null
    },
    {
      "latitude": 50.627151,
      "longitude": 6.818317,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158790,
      "ems": null
    },
    {
      "latitude": 50.626492,
      "longitude": 6.822955,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 102,
      "squawk": "4451",
      "timestamp": 1623158796,
      "ems": null
    },
    {
      "latitude": 50.625698,
      "longitude": 6.827558,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1623158802,
      "ems": null
    },
    {
      "latitude": 50.624908,
      "longitude": 6.83205,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 104,
      "squawk": "4451",
      "timestamp": 1623158808,
      "ems": null
    },
    {
      "latitude": 50.62468,
      "longitude": 6.835881,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 90,
      "squawk": "4451",
      "timestamp": 1623158813,
      "ems": null
    },
    {
      "latitude": 50.624725,
      "longitude": 6.836966,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623158814,
      "ems": null
    },
    {
      "latitude": 50.625,
      "longitude": 6.839278,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623158817,
      "ems": null
    },
    {
      "latitude": 50.625233,
      "longitude": 6.840771,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158819,
      "ems": null
    },
    {
      "latitude": 50.625458,
      "longitude": 6.841519,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158820,
      "ems": null
    },
    {
      "latitude": 50.625698,
      "longitude": 6.842627,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158822,
      "ems": null
    },
    {
      "latitude": 50.625931,
      "longitude": 6.843814,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158823,
      "ems": null
    },
    {
      "latitude": 50.62619,
      "longitude": 6.844844,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158825,
      "ems": null
    },
    {
      "latitude": 50.626465,
      "longitude": 6.846,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158827,
      "ems": null
    },
    {
      "latitude": 50.626694,
      "longitude": 6.84694,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623158828,
      "ems": null
    },
    {
      "latitude": 50.626907,
      "longitude": 6.848045,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623158829,
      "ems": null
    },
    {
      "latitude": 50.627426,
      "longitude": 6.85012,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158833,
      "ems": null
    },
    {
      "latitude": 50.627838,
      "longitude": 6.852129,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158836,
      "ems": null
    },
    {
      "latitude": 50.628067,
      "longitude": 6.853084,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158837,
      "ems": null
    },
    {
      "latitude": 50.628258,
      "longitude": 6.853836,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158838,
      "ems": null
    },
    {
      "latitude": 50.629051,
      "longitude": 6.857176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623158843,
      "ems": null
    },
    {
      "latitude": 50.629189,
      "longitude": 6.857844,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623158844,
      "ems": null
    },
    {
      "latitude": 50.629532,
      "longitude": 6.859155,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623158846,
      "ems": null
    },
    {
      "latitude": 50.630402,
      "longitude": 6.862697,
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
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623158852,
      "ems": null
    },
    {
      "latitude": 50.631409,
      "longitude": 6.8666,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623158858,
      "ems": null
    },
    {
      "latitude": 50.632309,
      "longitude": 6.870315,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158865,
      "ems": null
    },
    {
      "latitude": 50.633099,
      "longitude": 6.873656,
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
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623158870,
      "ems": null
    },
    {
      "latitude": 50.634064,
      "longitude": 6.877369,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623158877,
      "ems": null
    },
    {
      "latitude": 50.634979,
      "longitude": 6.880766,
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
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623158882,
      "ems": null
    },
    {
      "latitude": 50.635941,
      "longitude": 6.884271,
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623158888,
      "ems": null
    },
    {
      "latitude": 50.636871,
      "longitude": 6.887834,
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
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623158894,
      "ems": null
    },
    {
      "latitude": 50.638,
      "longitude": 6.893342,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158903,
      "ems": null
    },
    {
      "latitude": 50.63887,
      "longitude": 6.897318,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158910,
      "ems": null
    },
    {
      "latitude": 50.639385,
      "longitude": 6.899711,
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
      "heading": 71,
      "squawk": "4451",
      "timestamp": 1623158913,
      "ems": null
    },
    {
      "latitude": 50.640198,
      "longitude": 6.903678,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1623158920,
      "ems": null
    },
    {
      "latitude": 50.641479,
      "longitude": 6.909461,
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
      "heading": 70,
      "squawk": "4451",
      "timestamp": 1623158928,
      "ems": null
    },
    {
      "latitude": 50.642597,
      "longitude": 6.915819,
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
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623158938,
      "ems": null
    },
    {
      "latitude": 50.642784,
      "longitude": 6.917155,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623158940,
      "ems": null
    },
    {
      "latitude": 50.642899,
      "longitude": 6.917917,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 78,
      "squawk": "4451",
      "timestamp": 1623158941,
      "ems": null
    },
    {
      "latitude": 50.644646,
      "longitude": 6.929107,
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
      "heading": 75,
      "squawk": "4451",
      "timestamp": 1623158957,
      "ems": null
    },
    {
      "latitude": 50.645416,
      "longitude": 6.933168,
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
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1623158964,
      "ems": null
    },
    {
      "latitude": 50.646011,
      "longitude": 6.936999,
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
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1623158970,
      "ems": null
    },
    {
      "latitude": 50.646194,
      "longitude": 6.938517,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 81,
      "squawk": "4451",
      "timestamp": 1623158972,
      "ems": null
    },
    {
      "latitude": 50.646286,
      "longitude": 6.94054,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1623158976,
      "ems": null
    },
    {
      "latitude": 50.646332,
      "longitude": 6.941119,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623158977,
      "ems": null
    },
    {
      "latitude": 50.646378,
      "longitude": 6.942059,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 87,
      "squawk": "4451",
      "timestamp": 1623158978,
      "ems": null
    },
    {
      "latitude": 50.646378,
      "longitude": 6.942853,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623158980,
      "ems": null
    },
    {
      "latitude": 50.64632,
      "longitude": 6.945809,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1623158985,
      "ems": null
    },
    {
      "latitude": 50.645966,
      "longitude": 6.951455,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1623158994,
      "ems": null
    },
    {
      "latitude": 50.645782,
      "longitude": 6.954418,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1623159000,
      "ems": null
    },
    {
      "latitude": 50.645622,
      "longitude": 6.95828,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1623159007,
      "ems": null
    },
    {
      "latitude": 50.645599,
      "longitude": 6.95926,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623159009,
      "ems": null
    },
    {
      "latitude": 50.645554,
      "longitude": 6.962441,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623159014,
      "ems": null
    },
    {
      "latitude": 50.645809,
      "longitude": 6.964144,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "4451",
      "timestamp": 1623159018,
      "ems": null
    },
    {
      "latitude": 50.646835,
      "longitude": 6.966561,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159024,
      "ems": null
    },
    {
      "latitude": 50.647064,
      "longitude": 6.96685,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623159025,
      "ems": null
    },
    {
      "latitude": 50.648415,
      "longitude": 6.968376,
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
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1623159030,
      "ems": null
    },
    {
      "latitude": 50.650604,
      "longitude": 6.972087,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 55,
      "squawk": "4451",
      "timestamp": 1623159040,
      "ems": null
    },
    {
      "latitude": 50.650955,
      "longitude": 6.972993,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623159042,
      "ems": null
    },
    {
      "latitude": 50.651138,
      "longitude": 6.973427,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1623159043,
      "ems": null
    },
    {
      "latitude": 50.652977,
      "longitude": 6.978545,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 62,
      "squawk": "4451",
      "timestamp": 1623159055,
      "ems": null
    },
    {
      "latitude": 50.65329,
      "longitude": 6.979426,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623159057,
      "ems": null
    },
    {
      "latitude": 50.653473,
      "longitude": 6.97986,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 57,
      "squawk": "4451",
      "timestamp": 1623159058,
      "ems": null
    },
    {
      "latitude": 50.653862,
      "longitude": 6.98055,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1623159060,
      "ems": null
    },
    {
      "latitude": 50.654934,
      "longitude": 6.981514,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623159064,
      "ems": null
    },
    {
      "latitude": 50.655678,
      "longitude": 6.981737,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159066,
      "ems": null
    },
    {
      "latitude": 50.656563,
      "longitude": 6.981663,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1623159069,
      "ems": null
    },
    {
      "latitude": 50.656815,
      "longitude": 6.981595,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623159070,
      "ems": null
    },
    {
      "latitude": 50.657448,
      "longitude": 6.981292,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1623159072,
      "ems": null
    },
    {
      "latitude": 50.657776,
      "longitude": 6.981089,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623159073,
      "ems": null
    },
    {
      "latitude": 50.658844,
      "longitude": 6.97951,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623159078,
      "ems": null
    },
    {
      "latitude": 50.659012,
      "longitude": 6.979065,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623159079,
      "ems": null
    },
    {
      "latitude": 50.659286,
      "longitude": 6.977764,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623159082,
      "ems": null
    },
    {
      "latitude": 50.659378,
      "longitude": 6.976824,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1623159084,
      "ems": null
    },
    {
      "latitude": 50.659355,
      "longitude": 6.976244,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1623159085,
      "ems": null
    },
    {
      "latitude": 50.659286,
      "longitude": 6.975307,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623159087,
      "ems": null
    },
    {
      "latitude": 50.659241,
      "longitude": 6.974801,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623159088,
      "ems": null
    },
    {
      "latitude": 50.659149,
      "longitude": 6.973644,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623159090,
      "ems": null
    },
    {
      "latitude": 50.659103,
      "longitude": 6.973066,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1623159091,
      "ems": null
    },
    {
      "latitude": 50.659077,
      "longitude": 6.972087,
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
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623159093,
      "ems": null
    },
    {
      "latitude": 50.659012,
      "longitude": 6.971548,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1623159094,
      "ems": null
    },
    {
      "latitude": 50.658798,
      "longitude": 6.970232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1623159097,
      "ems": null
    },
    {
      "latitude": 50.658508,
      "longitude": 6.96909,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "4451",
      "timestamp": 1623159099,
      "ems": null
    },
    {
      "latitude": 50.658279,
      "longitude": 6.96779,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1623159102,
      "ems": null
    },
    {
      "latitude": 50.658237,
      "longitude": 6.967336,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623159103,
      "ems": null
    },
    {
      "latitude": 50.6586,
      "longitude": 6.965043,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623159108,
      "ems": null
    },
    {
      "latitude": 50.659332,
      "longitude": 6.964031,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623159112,
      "ems": null
    },
    {
      "latitude": 50.66011,
      "longitude": 6.963453,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1623159115,
      "ems": null
    },
    {
      "latitude": 50.660614,
      "longitude": 6.963105,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1623159117,
      "ems": null
    },
    {
      "latitude": 50.660797,
      "longitude": 6.962874,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1623159118,
      "ems": null
    },
    {
      "latitude": 50.661171,
      "longitude": 6.962437,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1623159120,
      "ems": null
    },
    {
      "latitude": 50.661312,
      "longitude": 6.96214,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1623159121,
      "ems": null
    },
    {
      "latitude": 50.661621,
      "longitude": 6.961501,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1623159123,
      "ems": null
    },
    {
      "latitude": 50.662197,
      "longitude": 6.96021,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1623159126,
      "ems": null
    },
    {
      "latitude": 50.662613,
      "longitude": 6.959245,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 302,
      "squawk": "4451",
      "timestamp": 1623159129,
      "ems": null
    },
    {
      "latitude": 50.66272,
      "longitude": 6.958899,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1623159130,
      "ems": null
    },
    {
      "latitude": 50.66304,
      "longitude": 6.958104,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623159132,
      "ems": null
    },
    {
      "latitude": 50.663177,
      "longitude": 6.957598,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623159133,
      "ems": null
    },
    {
      "latitude": 50.664001,
      "longitude": 6.955286,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623159139,
      "ems": null
    },
    {
      "latitude": 50.664368,
      "longitude": 6.954346,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1623159141,
      "ems": null
    },
    {
      "latitude": 50.664734,
      "longitude": 6.953261,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1623159144,
      "ems": null
    },
    {
      "latitude": 50.664989,
      "longitude": 6.952119,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623159147,
      "ems": null
    },
    {
      "latitude": 50.665035,
      "longitude": 6.951674,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623159148,
      "ems": null
    },
    {
      "latitude": 50.665081,
      "longitude": 6.950114,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1623159151,
      "ems": null
    },
    {
      "latitude": 50.664989,
      "longitude": 6.94915,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1623159153,
      "ems": null
    },
    {
      "latitude": 50.664944,
      "longitude": 6.948853,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1623159154,
      "ems": null
    },
    {
      "latitude": 50.664661,
      "longitude": 6.947442,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1623159157,
      "ems": null
    },
    {
      "latitude": 50.664368,
      "longitude": 6.946612,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1623159159,
      "ems": null
    },
    {
      "latitude": 50.663773,
      "longitude": 6.945383,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623159162,
      "ems": null
    },
    {
      "latitude": 50.663593,
      "longitude": 6.944993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623159163,
      "ems": null
    },
    {
      "latitude": 50.663174,
      "longitude": 6.944176,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1623159165,
      "ems": null
    },
    {
      "latitude": 50.663033,
      "longitude": 6.943953,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623159166,
      "ems": null
    },
    {
      "latitude": 50.66243,
      "longitude": 6.94284,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1623159168,
      "ems": null
    },
    {
      "latitude": 50.661682,
      "longitude": 6.941578,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623159172,
      "ems": null
    },
    {
      "latitude": 50.661125,
      "longitude": 6.940761,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623159174,
      "ems": null
    },
    {
      "latitude": 50.660984,
      "longitude": 6.940538,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 222,
      "squawk": "4451",
      "timestamp": 1623159175,
      "ems": null
    },
    {
      "latitude": 50.660477,
      "longitude": 6.939818,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623159177,
      "ems": null
    },
    {
      "latitude": 50.660286,
      "longitude": 6.939499,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1623159178,
      "ems": null
    },
    {
      "latitude": 50.659496,
      "longitude": 6.93846,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1623159181,
      "ems": null
    },
    {
      "latitude": 50.658966,
      "longitude": 6.937794,
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
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1623159183,
      "ems": null
    },
    {
      "latitude": 50.658703,
      "longitude": 6.937495,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1623159184,
      "ems": null
    },
    {
      "latitude": 50.658234,
      "longitude": 6.936926,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1623159186,
      "ems": null
    },
    {
      "latitude": 50.657913,
      "longitude": 6.936604,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1623159187,
      "ems": null
    },
    {
      "latitude": 50.65741,
      "longitude": 6.936059,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1623159189,
      "ems": null
    },
    {
      "latitude": 50.65712,
      "longitude": 6.935788,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1623159190,
      "ems": null
    },
    {
      "latitude": 50.65654,
      "longitude": 6.935264,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1623159192,
      "ems": null
    },
    {
      "latitude": 50.656265,
      "longitude": 6.935047,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1623159193,
      "ems": null
    },
    {
      "latitude": 50.654617,
      "longitude": 6.933819,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623159198,
      "ems": null
    },
    {
      "latitude": 50.654388,
      "longitude": 6.933674,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1623159199,
      "ems": null
    },
    {
      "latitude": 50.653931,
      "longitude": 6.933457,
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1623159201,
      "ems": null
    },
    {
      "latitude": 50.653397,
      "longitude": 6.933189,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623159202,
      "ems": null
    },
    {
      "latitude": 50.652744,
      "longitude": 6.932893,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623159204,
      "ems": null
    },
    {
      "latitude": 50.652466,
      "longitude": 6.932879,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1623159205,
      "ems": null
    },
    {
      "latitude": 50.651722,
      "longitude": 6.932744,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 184,
      "squawk": "4451",
      "timestamp": 1623159207,
      "ems": null
    },
    {
      "latitude": 50.650791,
      "longitude": 6.932893,
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1623159210,
      "ems": null
    },
    {
      "latitude": 50.650417,
      "longitude": 6.933041,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1623159211,
      "ems": null
    },
    {
      "latitude": 50.649765,
      "longitude": 6.933338,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1623159213,
      "ems": null
    },
    {
      "latitude": 50.648758,
      "longitude": 6.933891,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1623159216,
      "ems": null
    },
    {
      "latitude": 50.648438,
      "longitude": 6.934108,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1623159217,
      "ems": null
    },
    {
      "latitude": 50.647717,
      "longitude": 6.9346,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1623159219,
      "ems": null
    },
    {
      "latitude": 50.64674,
      "longitude": 6.935342,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1623159222,
      "ems": null
    },
    {
      "latitude": 50.646423,
      "longitude": 6.935698,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1623159223,
      "ems": null
    },
    {
      "latitude": 50.645809,
      "longitude": 6.936233,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1623159225,
      "ems": null
    },
    {
      "latitude": 50.644913,
      "longitude": 6.937288,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1623159228,
      "ems": null
    },
    {
      "latitude": 50.6446,
      "longitude": 6.937718,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1623159229,
      "ems": null
    },
    {
      "latitude": 50.644135,
      "longitude": 6.938312,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1623159231,
      "ems": null
    },
    {
      "latitude": 50.643036,
      "longitude": 6.93989,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1623159235,
      "ems": null
    },
    {
      "latitude": 50.642487,
      "longitude": 6.940613,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1623159237,
      "ems": null
    },
    {
      "latitude": 50.641663,
      "longitude": 6.941914,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1623159240,
      "ems": null
    },
    {
      "latitude": 50.641014,
      "longitude": 6.942914,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1623159243,
      "ems": null
    },
    {
      "latitude": 50.640015,
      "longitude": 6.944588,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1623159247,
      "ems": null
    },
    {
      "latitude": 50.638779,
      "longitude": 6.947046,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1623159253,
      "ems": null
    },
    {
      "latitude": 50.638313,
      "longitude": 6.948259,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1623159255,
      "ems": null
    },
    {
      "latitude": 50.637756,
      "longitude": 6.950263,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 110,
      "squawk": "4451",
      "timestamp": 1623159259,
      "ems": null
    },
    {
      "latitude": 50.637802,
      "longitude": 6.95197,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "4451",
      "timestamp": 1623159262,
      "ems": null
    },
    {
      "latitude": 50.638092,
      "longitude": 6.953117,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623159265,
      "ems": null
    },
    {
      "latitude": 50.638733,
      "longitude": 6.954273,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1623159267,
      "ems": null
    },
    {
      "latitude": 50.639618,
      "longitude": 6.955088,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623159271,
      "ems": null
    },
    {
      "latitude": 50.640408,
      "longitude": 6.955534,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1623159273,
      "ems": null
    },
    {
      "latitude": 50.64283,
      "longitude": 6.95635,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623159280,
      "ems": null
    },
    {
      "latitude": 50.643494,
      "longitude": 6.956514,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159282,
      "ems": null
    },
    {
      "latitude": 50.643814,
      "longitude": 6.956586,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159283,
      "ems": null
    },
    {
      "latitude": 50.644821,
      "longitude": 6.956803,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159286,
      "ems": null
    },
    {
      "latitude": 50.645645,
      "longitude": 6.956948,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623159289,
      "ems": null
    },
    {
      "latitude": 50.64679,
      "longitude": 6.957237,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159292,
      "ems": null
    },
    {
      "latitude": 50.647762,
      "longitude": 6.957389,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623159295,
      "ems": null
    },
    {
      "latitude": 50.649811,
      "longitude": 6.957983,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623159301,
      "ems": null
    },
    {
      "latitude": 50.650452,
      "longitude": 6.958177,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623159303,
      "ems": null
    },
    {
      "latitude": 50.652695,
      "longitude": 6.958755,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1623159310,
      "ems": null
    },
    {
      "latitude": 50.655445,
      "longitude": 6.959319,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159319,
      "ems": null
    },
    {
      "latitude": 50.657261,
      "longitude": 6.959913,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1623159324,
      "ems": null
    },
    {
      "latitude": 50.657639,
      "longitude": 6.960056,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1623159325,
      "ems": null
    },
    {
      "latitude": 50.659424,
      "longitude": 6.960995,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623159331,
      "ems": null
    },
    {
      "latitude": 50.660339,
      "longitude": 6.961429,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623159334,
      "ems": null
    },
    {
      "latitude": 50.663078,
      "longitude": 6.961027,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1623159343,
      "ems": null
    },
    {
      "latitude": 50.663635,
      "longitude": 6.960489,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1623159346,
      "ems": null
    },
    {
      "latitude": 50.664322,
      "longitude": 6.959622,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1623159349,
      "ems": null
    },
    {
      "latitude": 50.665127,
      "longitude": 6.95828,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1623159352,
      "ems": null
    },
    {
      "latitude": 50.665558,
      "longitude": 6.957454,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1623159355,
      "ems": null
    },
    {
      "latitude": 50.666245,
      "longitude": 6.955756,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1623159359,
      "ems": null
    },
    {
      "latitude": 50.666573,
      "longitude": 6.954791,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1623159361,
      "ems": null
    },
    {
      "latitude": 50.667023,
      "longitude": 6.953406,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1623159364,
      "ems": null
    },
    {
      "latitude": 50.667709,
      "longitude": 6.950298,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623159370,
      "ems": null
    },
    {
      "latitude": 50.667549,
      "longitude": 6.947219,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1623159376,
      "ems": null
    },
    {
      "latitude": 50.667221,
      "longitude": 6.94618,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1623159379,
      "ems": null
    },
    {
      "latitude": 50.666565,
      "longitude": 6.944805,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 228,
      "squawk": "4451",
      "timestamp": 1623159382,
      "ems": null
    },
    {
      "latitude": 50.665512,
      "longitude": 6.943504,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623159386,
      "ems": null
    },
    {
      "latitude": 50.663731,
      "longitude": 6.942098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623159391,
      "ems": null
    },
    {
      "latitude": 50.662846,
      "longitude": 6.941504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623159394,
      "ems": null
    },
    {
      "latitude": 50.661869,
      "longitude": 6.940984,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1623159397,
      "ems": null
    },
    {
      "latitude": 50.660889,
      "longitude": 6.940974,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1623159400,
      "ems": null
    },
    {
      "latitude": 50.659866,
      "longitude": 6.941355,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1623159403,
      "ems": null
    },
    {
      "latitude": 50.658981,
      "longitude": 6.942172,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1623159406,
      "ems": null
    },
    {
      "latitude": 50.658333,
      "longitude": 6.943211,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1623159409,
      "ems": null
    },
    {
      "latitude": 50.657494,
      "longitude": 6.944918,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1623159413,
      "ems": null
    },
    {
      "latitude": 50.657181,
      "longitude": 6.945745,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1623159415,
      "ems": null
    },
    {
      "latitude": 50.656998,
      "longitude": 6.946178,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1623159416,
      "ems": null
    },
    {
      "latitude": 50.656887,
      "longitude": 6.9467,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 115,
      "squawk": "4451",
      "timestamp": 1623159417,
      "ems": null
    },
    {
      "latitude": 50.656654,
      "longitude": 6.949075,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 92,
      "squawk": "4451",
      "timestamp": 1623159421,
      "ems": null
    },
    {
      "latitude": 50.657402,
      "longitude": 6.951822,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623159427,
      "ems": null
    },
    {
      "latitude": 50.657913,
      "longitude": 6.952713,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159430,
      "ems": null
    },
    {
      "latitude": 50.658844,
      "longitude": 6.953529,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623159433,
      "ems": null
    },
    {
      "latitude": 50.659729,
      "longitude": 6.953975,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1623159436,
      "ems": null
    },
    {
      "latitude": 50.66066,
      "longitude": 6.953912,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1623159439,
      "ems": null
    },
    {
      "latitude": 50.661392,
      "longitude": 6.953406,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1623159442,
      "ems": null
    },
    {
      "latitude": 50.66201,
      "longitude": 6.952564,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1623159444,
      "ems": null
    },
    {
      "latitude": 50.663078,
      "longitude": 6.949743,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623159451,
      "ems": null
    },
    {
      "latitude": 50.663498,
      "longitude": 6.948407,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1623159454,
      "ems": null
    },
    {
      "latitude": 50.663818,
      "longitude": 6.947046,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 291,
      "squawk": "4451",
      "timestamp": 1623159457,
      "ems": null
    },
    {
      "latitude": 50.664139,
      "longitude": 6.945673,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 288,
      "squawk": "4451",
      "timestamp": 1623159460,
      "ems": null
    },
    {
      "latitude": 50.664474,
      "longitude": 6.943879,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623159464,
      "ems": null
    },
    {
      "latitude": 50.664688,
      "longitude": 6.942781,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1623159466,
      "ems": null
    },
    {
      "latitude": 50.664707,
      "longitude": 6.942543,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 282,
      "squawk": "4451",
      "timestamp": 1623159467,
      "ems": null
    },
    {
      "latitude": 50.664825,
      "longitude": 6.941553,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623159469,
      "ems": null
    },
    {
      "latitude": 50.664894,
      "longitude": 6.940984,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1623159470,
      "ems": null
    },
    {
      "latitude": 50.664963,
      "longitude": 6.939962,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1623159472,
      "ems": null
    },
    {
      "latitude": 50.665009,
      "longitude": 6.936926,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1623159478,
      "ems": null
    },
    {
      "latitude": 50.664757,
      "longitude": 6.935565,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1623159481,
      "ems": null
    },
    {
      "latitude": 50.664322,
      "longitude": 6.934469,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 232,
      "squawk": "4451",
      "timestamp": 1623159484,
      "ems": null
    },
    {
      "latitude": 50.663639,
      "longitude": 6.933561,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 214,
      "squawk": "4451",
      "timestamp": 1623159487,
      "ems": null
    },
    {
      "latitude": 50.662708,
      "longitude": 6.932818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1623159491,
      "ems": null
    },
    {
      "latitude": 50.661777,
      "longitude": 6.932299,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1623159494,
      "ems": null
    },
    {
      "latitude": 50.66103,
      "longitude": 6.931928,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623159496,
      "ems": null
    },
    {
      "latitude": 50.660156,
      "longitude": 6.931506,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1623159499,
      "ems": null
    },
    {
      "latitude": 50.658417,
      "longitude": 6.931217,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1623159505,
      "ems": null
    },
    {
      "latitude": 50.65741,
      "longitude": 6.931433,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1623159508,
      "ems": null
    },
    {
      "latitude": 50.656448,
      "longitude": 6.931795,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1623159511,
      "ems": null
    },
    {
      "latitude": 50.654068,
      "longitude": 6.935047,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1623159522,
      "ems": null
    },
    {
      "latitude": 50.653885,
      "longitude": 6.93577,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1623159523,
      "ems": null
    },
    {
      "latitude": 50.653675,
      "longitude": 6.938757,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1623159529,
      "ems": null
    },
    {
      "latitude": 50.654114,
      "longitude": 6.941408,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623159535,
      "ems": null
    },
    {
      "latitude": 50.654755,
      "longitude": 6.942853,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1623159539,
      "ems": null
    },
    {
      "latitude": 50.655212,
      "longitude": 6.94373,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1623159541,
      "ems": null
    },
    {
      "latitude": 50.655956,
      "longitude": 6.945067,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623159545,
      "ems": null
    },
    {
      "latitude": 50.656422,
      "longitude": 6.945958,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1623159547,
      "ems": null
    },
    {
      "latitude": 50.657547,
      "longitude": 6.94813,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1623159553,
      "ems": null
    },
    {
      "latitude": 50.6586,
      "longitude": 6.950443,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623159559,
      "ems": null
    },
    {
      "latitude": 50.659698,
      "longitude": 6.952683,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159565,
      "ems": null
    },
    {
      "latitude": 50.660984,
      "longitude": 6.954123,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1623159571,
      "ems": null
    },
    {
      "latitude": 50.662567,
      "longitude": 6.955088,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1623159578,
      "ems": null
    },
    {
      "latitude": 50.663361,
      "longitude": 6.955385,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623159581,
      "ems": null
    },
    {
      "latitude": 50.664047,
      "longitude": 6.955575,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623159583,
      "ems": null
    },
    {
      "latitude": 50.664917,
      "longitude": 6.955791,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1623159587,
      "ems": null
    },
    {
      "latitude": 50.665455,
      "longitude": 6.955756,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1623159589,
      "ems": null
    },
    {
      "latitude": 50.66629,
      "longitude": 6.955534,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1623159593,
      "ems": null
    },
    {
      "latitude": 50.666885,
      "longitude": 6.955213,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1623159595,
      "ems": null
    },
    {
      "latitude": 50.667664,
      "longitude": 6.954707,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1623159598,
      "ems": null
    },
    {
      "latitude": 50.668442,
      "longitude": 6.954057,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1623159601,
      "ems": null
    },
    {
      "latitude": 50.669411,
      "longitude": 6.953232,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1623159605,
      "ems": null
    },
    {
      "latitude": 50.669968,
      "longitude": 6.952564,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1623159607,
      "ems": null
    },
    {
      "latitude": 50.670528,
      "longitude": 6.951376,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1623159610,
      "ems": null
    },
    {
      "latitude": 50.670868,
      "longitude": 6.950153,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1623159613,
      "ems": null
    },
    {
      "latitude": 50.671181,
      "longitude": 6.948704,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1623159616,
      "ems": null
    },
    {
      "latitude": 50.671227,
      "longitude": 6.948407,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 285,
      "squawk": "4451",
      "timestamp": 1623159617,
      "ems": null
    },
    {
      "latitude": 50.671371,
      "longitude": 6.94719,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1623159619,
      "ems": null
    },
    {
      "latitude": 50.67128,
      "longitude": 6.945745,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 262,
      "squawk": "4451",
      "timestamp": 1623159622,
      "ems": null
    },
    {
      "latitude": 50.670914,
      "longitude": 6.944371,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1623159625,
      "ems": null
    },
    {
      "latitude": 50.670273,
      "longitude": 6.943142,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 226,
      "squawk": "4451",
      "timestamp": 1623159628,
      "ems": null
    },
    {
      "latitude": 50.669357,
      "longitude": 6.941914,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 216,
      "squawk": "4451",
      "timestamp": 1623159632,
      "ems": null
    },
    {
      "latitude": 50.668526,
      "longitude": 6.941133,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 209,
      "squawk": "4451",
      "timestamp": 1623159635,
      "ems": null
    },
    {
      "latitude": 50.66748,
      "longitude": 6.940468,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1623159638,
      "ems": null
    },
    {
      "latitude": 50.666573,
      "longitude": 6.940167,
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1623159640,
      "ems": null
    },
    {
      "latitude": 50.665512,
      "longitude": 6.939818,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1623159643,
      "ems": null
    },
    {
      "latitude": 50.664505,
      "longitude": 6.939384,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1623159646,
      "ems": null
    },
    {
      "latitude": 50.663498,
      "longitude": 6.938831,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623159650,
      "ems": null
    },
    {
      "latitude": 50.662628,
      "longitude": 6.938083,
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1623159652,
      "ems": null
    },
    {
      "latitude": 50.661728,
      "longitude": 6.937346,
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623159655,
      "ems": null
    },
    {
      "latitude": 50.660892,
      "longitude": 6.936604,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1623159659,
      "ems": null
    },
    {
      "latitude": 50.658981,
      "longitude": 6.935268,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1623159665,
      "ems": null
    },
    {
      "latitude": 50.657307,
      "longitude": 6.934674,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1623159670,
      "ems": null
    },
    {
      "latitude": 50.656403,
      "longitude": 6.935047,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1623159673,
      "ems": null
    },
    {
      "latitude": 50.655167,
      "longitude": 6.93736,
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
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1623159679,
      "ems": null
    },
    {
      "latitude": 50.655121,
      "longitude": 6.937577,
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
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1623159680,
      "ems": null
    },
    {
      "latitude": 50.655071,
      "longitude": 6.939351,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 90,
      "squawk": "4451",
      "timestamp": 1623159683,
      "ems": null
    },
    {
      "latitude": 50.655304,
      "longitude": 6.940761,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1623159686,
      "ems": null
    },
    {
      "latitude": 50.655762,
      "longitude": 6.941697,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623159689,
      "ems": null
    },
    {
      "latitude": 50.656448,
      "longitude": 6.94242,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1623159691,
      "ems": null
    },
    {
      "latitude": 50.657402,
      "longitude": 6.942914,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623159695,
      "ems": null
    },
    {
      "latitude": 50.658279,
      "longitude": 6.943142,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1623159698,
      "ems": null
    },
    {
      "latitude": 50.659077,
      "longitude": 6.943359,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1623159700,
      "ems": null
    },
    {
      "latitude": 50.664322,
      "longitude": 6.945311,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623159716,
      "ems": null
    },
    {
      "latitude": 50.665222,
      "longitude": 6.945809,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623159719,
      "ems": null
    },
    {
      "latitude": 50.666107,
      "longitude": 6.946323,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1623159722,
      "ems": null
    },
    {
      "latitude": 50.666943,
      "longitude": 6.946774,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623159725,
      "ems": null
    },
    {
      "latitude": 50.667847,
      "longitude": 6.947262,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1623159728,
      "ems": null
    },
    {
      "latitude": 50.669456,
      "longitude": 6.94811,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1623159734,
      "ems": null
    },
    {
      "latitude": 50.671097,
      "longitude": 6.948925,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1623159740,
      "ems": null
    },
    {
      "latitude": 50.672016,
      "longitude": 6.94931,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1623159743,
      "ems": null
    },
    {
      "latitude": 50.672947,
      "longitude": 6.949615,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1623159746,
      "ems": null
    },
    {
      "latitude": 50.674622,
      "longitude": 6.95056,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623159752,
      "ems": null
    },
    {
      "latitude": 50.67551,
      "longitude": 6.951904,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159755,
      "ems": null
    },
    {
      "latitude": 50.676132,
      "longitude": 6.952935,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159758,
      "ems": null
    },
    {
      "latitude": 50.677872,
      "longitude": 6.954791,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623159764,
      "ems": null
    },
    {
      "latitude": 50.67979,
      "longitude": 6.956024,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1623159770,
      "ems": null
    },
    {
      "latitude": 50.680756,
      "longitude": 6.956573,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1623159773,
      "ems": null
    },
    {
      "latitude": 50.681534,
      "longitude": 6.957167,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 22,
      "squawk": "4451",
      "timestamp": 1623159776,
      "ems": null
    },
    {
      "latitude": 50.682495,
      "longitude": 6.957835,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1623159779,
      "ems": null
    },
    {
      "latitude": 50.683609,
      "longitude": 6.958618,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623159782,
      "ems": null
    },
    {
      "latitude": 50.684586,
      "longitude": 6.959381,
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
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1623159785,
      "ems": null
    },
    {
      "latitude": 50.685425,
      "longitude": 6.959991,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623159788,
      "ems": null
    },
    {
      "latitude": 50.686523,
      "longitude": 6.960952,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623159791,
      "ems": null
    },
    {
      "latitude": 50.687428,
      "longitude": 6.961746,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1623159794,
      "ems": null
    },
    {
      "latitude": 50.688446,
      "longitude": 6.962511,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1623159797,
      "ems": null
    },
    {
      "latitude": 50.689407,
      "longitude": 6.963328,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1623159800,
      "ems": null
    },
    {
      "latitude": 50.690323,
      "longitude": 6.964144,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1623159803,
      "ems": null
    },
    {
      "latitude": 50.691242,
      "longitude": 6.965103,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1623159806,
      "ems": null
    },
    {
      "latitude": 50.692062,
      "longitude": 6.966,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1623159809,
      "ems": null
    },
    {
      "latitude": 50.692932,
      "longitude": 6.96704,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1623159812,
      "ems": null
    },
    {
      "latitude": 50.693802,
      "longitude": 6.968153,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1623159815,
      "ems": null
    },
    {
      "latitude": 50.69455,
      "longitude": 6.969147,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1623159818,
      "ems": null
    },
    {
      "latitude": 50.695358,
      "longitude": 6.970305,
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
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1623159821,
      "ems": null
    },
    {
      "latitude": 50.696045,
      "longitude": 6.971419,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1623159824,
      "ems": null
    },
    {
      "latitude": 50.696735,
      "longitude": 6.97258,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623159827,
      "ems": null
    },
    {
      "latitude": 50.697388,
      "longitude": 6.973724,
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
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623159830,
      "ems": null
    },
    {
      "latitude": 50.698086,
      "longitude": 6.975021,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1623159833,
      "ems": null
    },
    {
      "latitude": 50.698692,
      "longitude": 6.976089,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1623159836,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 6.977539,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1623159839,
      "ems": null
    },
    {
      "latitude": 50.699982,
      "longitude": 6.979213,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1623159842,
      "ems": null
    },
    {
      "latitude": 50.700394,
      "longitude": 6.980475,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623159845,
      "ems": null
    },
    {
      "latitude": 50.700928,
      "longitude": 6.98204,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623159848,
      "ems": null
    },
    {
      "latitude": 50.701347,
      "longitude": 6.98349,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623159851,
      "ems": null
    },
    {
      "latitude": 50.701813,
      "longitude": 6.985226,
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
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623159854,
      "ems": null
    },
    {
      "latitude": 50.70237,
      "longitude": 6.987228,
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
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623159857,
      "ems": null
    },
    {
      "latitude": 50.702774,
      "longitude": 6.988566,
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
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623159860,
      "ems": null
    },
    {
      "latitude": 50.703323,
      "longitude": 6.990571,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1623159863,
      "ems": null
    },
    {
      "latitude": 50.703781,
      "longitude": 6.99213,
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
      "heading": 65,
      "squawk": "4451",
      "timestamp": 1623159866,
      "ems": null
    },
    {
      "latitude": 50.704376,
      "longitude": 6.994134,
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
      "heading": 63,
      "squawk": "4451",
      "timestamp": 1623159869,
      "ems": null
    },
    {
      "latitude": 50.705978,
      "longitude": 6.99985,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 69,
      "squawk": "4451",
      "timestamp": 1623159878,
      "ems": null
    },
    {
      "latitude": 50.70694,
      "longitude": 7.003636,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1623159884,
      "ems": null
    },
    {
      "latitude": 50.707947,
      "longitude": 7.007644,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623159890,
      "ems": null
    },
    {
      "latitude": 50.709492,
      "longitude": 7.013626,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "4451",
      "timestamp": 1623159900,
      "ems": null
    },
    {
      "latitude": 50.711105,
      "longitude": 7.019225,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1623159908,
      "ems": null
    },
    {
      "latitude": 50.712612,
      "longitude": 7.022705,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1623159914,
      "ems": null
    },
    {
      "latitude": 50.713497,
      "longitude": 7.024307,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1623159917,
      "ems": null
    },
    {
      "latitude": 50.713623,
      "longitude": 7.024569,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1623159918,
      "ems": null
    },
    {
      "latitude": 50.714401,
      "longitude": 7.02598,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1623159920,
      "ems": null
    },
    {
      "latitude": 50.717079,
      "longitude": 7.030716,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1623159929,
      "ems": null
    },
    {
      "latitude": 50.718201,
      "longitude": 7.032363,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1623159933,
      "ems": null
    },
    {
      "latitude": 50.719162,
      "longitude": 7.033477,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1623159935,
      "ems": null
    },
    {
      "latitude": 50.720245,
      "longitude": 7.034836,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1623159939,
      "ems": null
    },
    {
      "latitude": 50.721874,
      "longitude": 7.037735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1623159944,
      "ems": null
    },
    {
      "latitude": 50.722622,
      "longitude": 7.039413,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1623159947,
      "ems": null
    },
    {
      "latitude": 50.723328,
      "longitude": 7.041197,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1623159950,
      "ems": null
    },
    {
      "latitude": 50.725227,
      "longitude": 7.046432,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1623159959,
      "ems": null
    },
    {
      "latitude": 50.725296,
      "longitude": 7.04669,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1623159960,
      "ems": null
    },
    {
      "latitude": 50.727367,
      "longitude": 7.057571,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1623159977,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 7.059904,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1623159980,
      "ems": null
    },
    {
      "latitude": 50.728043,
      "longitude": 7.061165,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1623159983,
      "ems": null
    },
    {
      "latitude": 50.729004,
      "longitude": 7.065694,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1623159990,
      "ems": null
    },
    {
      "latitude": 50.730209,
      "longitude": 7.071533,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "squawk": "7000",
      "timestamp": 1623159999,
      "ems": null
    },
    {
      "latitude": 50.730927,
      "longitude": 7.076234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1623160005,
      "ems": null
    },
    {
      "latitude": 50.731651,
      "longitude": 7.08168,
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
      "timestamp": 1623160013,
      "ems": null
    },
    {
      "latitude": 50.732254,
      "longitude": 7.085662,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1623160020,
      "ems": null
    },
    {
      "latitude": 50.732956,
      "longitude": 7.08931,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1623160026,
      "ems": null
    },
    {
      "latitude": 50.733856,
      "longitude": 7.093085,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1623160032,
      "ems": null
    },
    {
      "latitude": 50.734722,
      "longitude": 7.096405,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1623160038,
      "ems": null
    },
    {
      "latitude": 50.735935,
      "longitude": 7.100601,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1623160045,
      "ems": null
    },
    {
      "latitude": 50.737236,
      "longitude": 7.104568,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1623160053,
      "ems": null
    },
    {
      "latitude": 50.73848,
      "longitude": 7.107783,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1623160059,
      "ems": null
    },
    {
      "latitude": 50.740402,
      "longitude": 7.11235,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1623160068,
      "ems": null
    },
    {
      "latitude": 50.742081,
      "longitude": 7.11647,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1623160076,
      "ems": null
    },
    {
      "latitude": 50.743744,
      "longitude": 7.121145,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1623160086,
      "ems": null
    },
    {
      "latitude": 50.744827,
      "longitude": 7.123947,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1623160092,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.13089,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1623160106,
      "ems": null
    },
    {
      "latitude": 50.748222,
      "longitude": 7.132797,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1623160110,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.136808,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1623160117,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.137699,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1623160119,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.139332,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1623160122,
      "ems": null
    },
    {
      "latitude": 50.748272,
      "longitude": 7.140808,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1623160125,
      "ems": null
    },
    {
      "latitude": 50.74823,
      "longitude": 7.142227,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1623160128,
      "ems": null
    },
    {
      "latitude": 50.748184,
      "longitude": 7.143785,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1623160131,
      "ems": null
    },
    {
      "latitude": 50.748001,
      "longitude": 7.145567,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1623160134,
      "ems": null
    },
    {
      "latitude": 50.747681,
      "longitude": 7.148685,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1623160140,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.151794,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1623160146,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.154994,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1623160152,
      "ems": null
    },
    {
      "latitude": 50.74678,
      "longitude": 7.159729,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1623160161,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 7.162938,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1623160167,
      "ems": null
    },
    {
      "latitude": 50.746223,
      "longitude": 7.166367,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1623160173,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 7.169418,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1623160179,
      "ems": null
    },
    {
      "latitude": 50.746174,
      "longitude": 7.170944,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1623160182,
      "ems": null
    },
    {
      "latitude": 50.746307,
      "longitude": 7.172513,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1623160185,
      "ems": null
    },
    {
      "latitude": 50.746857,
      "longitude": 7.175408,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1623160191,
      "ems": null
    },
    {
      "latitude": 50.7472,
      "longitude": 7.176895,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1623160194,
      "ems": null
    },
    {
      "latitude": 50.747498,
      "longitude": 7.178304,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1623160197,
      "ems": null
    },
    {
      "latitude": 50.747772,
      "longitude": 7.179714,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1623160200,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.181091,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1623160203,
      "ems": null
    },
    {
      "latitude": 50.748322,
      "longitude": 7.184093,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1623160209,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.185669,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1623160212,
      "ems": null
    },
    {
      "latitude": 50.74897,
      "longitude": 7.188873,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1623160218,
      "ems": null
    },
    {
      "latitude": 50.749191,
      "longitude": 7.190403,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1623160221,
      "ems": null
    },
    {
      "latitude": 50.749374,
      "longitude": 7.192037,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1623160224,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.194901,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1623160230,
      "ems": null
    },
    {
      "latitude": 50.750366,
      "longitude": 7.195969,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1623160233,
      "ems": null
    },
    {
      "latitude": 50.751022,
      "longitude": 7.19701,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1623160236,
      "ems": null
    },
    {
      "latitude": 50.752716,
      "longitude": 7.198198,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1623160242,
      "ems": null
    },
    {
      "latitude": 50.753632,
      "longitude": 7.198494,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1623160245,
      "ems": null
    },
    {
      "latitude": 50.754509,
      "longitude": 7.198792,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1623160248,
      "ems": null
    },
    {
      "latitude": 50.75544,
      "longitude": 7.198944,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1623160251,
      "ems": null
    },
    {
      "latitude": 50.756241,
      "longitude": 7.199014,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1623160254,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.199014,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1623160260,
      "ems": null
    },
    {
      "latitude": 50.758884,
      "longitude": 7.198868,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1623160263,
      "ems": null
    },
    {
      "latitude": 50.759674,
      "longitude": 7.198639,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1623160266,
      "ems": null
    },
    {
      "latitude": 50.760468,
      "longitude": 7.198029,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1623160269,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 7.197113,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1623160272,
      "ems": null
    },
    {
      "latitude": 50.761818,
      "longitude": 7.196045,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1623160275,
      "ems": null
    },
    {
      "latitude": 50.762142,
      "longitude": 7.194977,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1623160278,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.193451,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1623160281,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 7.192001,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1623160284,
      "ems": null
    },
    {
      "latitude": 50.762878,
      "longitude": 7.1907,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623160287,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.189216,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623160290,
      "ems": null
    },
    {
      "latitude": 50.763493,
      "longitude": 7.188034,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1623160293,
      "ems": null
    },
    {
      "latitude": 50.764053,
      "longitude": 7.185516,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623160299,
      "ems": null
    },
    {
      "latitude": 50.764423,
      "longitude": 7.183838,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160302,
      "ems": null
    },
    {
      "latitude": 50.764618,
      "longitude": 7.182906,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160304,
      "ems": null
    },
    {
      "latitude": 50.764751,
      "longitude": 7.182388,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160306,
      "ems": null
    },
    {
      "latitude": 50.764889,
      "longitude": 7.181778,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160307,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 7.181273,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160308,
      "ems": null
    },
    {
      "latitude": 50.76582,
      "longitude": 7.177353,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160317,
      "ems": null
    },
    {
      "latitude": 50.766495,
      "longitude": 7.173998,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1623160324,
      "ems": null
    },
    {
      "latitude": 50.767265,
      "longitude": 7.170639,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1623160332,
      "ems": null
    }
  ],
};
