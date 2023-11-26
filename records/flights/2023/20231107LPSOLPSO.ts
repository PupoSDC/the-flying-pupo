import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231107LPSOLPSO",
    callsign: "RVP230",
    name: "Dual command renovation",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 10, 7, 12, 25).getTime(),
    arrival: new Date(2023, 10, 7, 13, 25).getTime(),
    singleEnginePistonTime: 60,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 60,
    ifrTime: 0,
    nightTime: 0,
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
      modes: "48B048",
      registration: "CS-DHW",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
  },
  track: [
    {
      "latitude": 39.203934,
      "longitude": -8.061995,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 204,
      "squawk": "0",
      "timestamp": 1699360760,
      "ems": null
    },
    {
      "latitude": 39.201096,
      "longitude": -8.063547,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "0",
      "timestamp": 1699360769,
      "ems": null
    },
    {
      "latitude": 39.198349,
      "longitude": -8.06498,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 202,
      "squawk": "0",
      "timestamp": 1699360778,
      "ems": null
    },
    {
      "latitude": 39.195587,
      "longitude": -8.066467,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 201,
      "squawk": "0",
      "timestamp": 1699360786,
      "ems": null
    },
    {
      "latitude": 39.192581,
      "longitude": -8.068085,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 202,
      "squawk": "0",
      "timestamp": 1699360795,
      "ems": null
    },
    {
      "latitude": 39.189606,
      "longitude": -8.069757,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 203,
      "squawk": "0",
      "timestamp": 1699360804,
      "ems": null
    },
    {
      "latitude": 39.187534,
      "longitude": -8.070984,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 206,
      "squawk": "0",
      "timestamp": 1699360810,
      "ems": null
    },
    {
      "latitude": 39.184753,
      "longitude": -8.072682,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "0",
      "timestamp": 1699360819,
      "ems": null
    },
    {
      "latitude": 39.181595,
      "longitude": -8.074653,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1699360829,
      "ems": null
    },
    {
      "latitude": 39.180645,
      "longitude": -8.075317,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1699360832,
      "ems": null
    },
    {
      "latitude": 39.17762,
      "longitude": -8.077271,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1699360841,
      "ems": null
    },
    {
      "latitude": 39.174774,
      "longitude": -8.078833,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1699360849,
      "ems": null
    },
    {
      "latitude": 39.171982,
      "longitude": -8.080384,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1699360859,
      "ems": null
    },
    {
      "latitude": 39.170822,
      "longitude": -8.08136,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1699360861,
      "ems": null
    },
    {
      "latitude": 39.170105,
      "longitude": -8.082056,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1699360864,
      "ems": null
    },
    {
      "latitude": 39.169052,
      "longitude": -8.083191,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1699360868,
      "ems": null
    },
    {
      "latitude": 39.168228,
      "longitude": -8.084086,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1699360871,
      "ems": null
    },
    {
      "latitude": 39.166912,
      "longitude": -8.085266,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1699360875,
      "ems": null
    },
    {
      "latitude": 39.165985,
      "longitude": -8.086117,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1699360878,
      "ems": null
    },
    {
      "latitude": 39.165237,
      "longitude": -8.086792,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 215,
      "squawk": "3216",
      "timestamp": 1699360880,
      "ems": null
    },
    {
      "latitude": 39.164165,
      "longitude": -8.087769,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "3216",
      "timestamp": 1699360884,
      "ems": null
    },
    {
      "latitude": 39.161373,
      "longitude": -8.09021,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 213,
      "squawk": "3216",
      "timestamp": 1699360893,
      "ems": null
    },
    {
      "latitude": 39.160488,
      "longitude": -8.090942,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699360896,
      "ems": null
    },
    {
      "latitude": 39.159393,
      "longitude": -8.091848,
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
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699360899,
      "ems": null
    },
    {
      "latitude": 39.156578,
      "longitude": -8.093994,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699360908,
      "ems": null
    },
    {
      "latitude": 39.155552,
      "longitude": -8.094727,
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
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699360911,
      "ems": null
    },
    {
      "latitude": 39.154388,
      "longitude": -8.09552,
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
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699360914,
      "ems": null
    },
    {
      "latitude": 39.153305,
      "longitude": -8.096267,
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
      "heading": 207,
      "squawk": "3216",
      "timestamp": 1699360917,
      "ems": null
    },
    {
      "latitude": 39.149921,
      "longitude": -8.098694,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699360926,
      "ems": null
    },
    {
      "latitude": 39.146614,
      "longitude": -8.101257,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699360935,
      "ems": null
    },
    {
      "latitude": 39.142845,
      "longitude": -8.104126,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699360945,
      "ems": null
    },
    {
      "latitude": 39.139252,
      "longitude": -8.106597,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "3216",
      "timestamp": 1699360954,
      "ems": null
    },
    {
      "latitude": 39.135441,
      "longitude": -8.109314,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "squawk": "3216",
      "timestamp": 1699360963,
      "ems": null
    },
    {
      "latitude": 39.131809,
      "longitude": -8.111938,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699360972,
      "ems": null
    },
    {
      "latitude": 39.129318,
      "longitude": -8.113821,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699360978,
      "ems": null
    },
    {
      "latitude": 39.12561,
      "longitude": -8.116747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699360988,
      "ems": null
    },
    {
      "latitude": 39.12199,
      "longitude": -8.11969,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699360996,
      "ems": null
    },
    {
      "latitude": 39.118332,
      "longitude": -8.122658,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699361006,
      "ems": null
    },
    {
      "latitude": 39.114578,
      "longitude": -8.125525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699361015,
      "ems": null
    },
    {
      "latitude": 39.110733,
      "longitude": -8.12839,
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
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699361024,
      "ems": null
    },
    {
      "latitude": 39.107254,
      "longitude": -8.131196,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699361033,
      "ems": null
    },
    {
      "latitude": 39.104813,
      "longitude": -8.133301,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 213,
      "squawk": "3216",
      "timestamp": 1699361039,
      "ems": null
    },
    {
      "latitude": 39.103867,
      "longitude": -8.134182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "3216",
      "timestamp": 1699361042,
      "ems": null
    },
    {
      "latitude": 39.102531,
      "longitude": -8.135437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "3216",
      "timestamp": 1699361045,
      "ems": null
    },
    {
      "latitude": 39.101395,
      "longitude": -8.136511,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 217,
      "squawk": "3216",
      "timestamp": 1699361049,
      "ems": null
    },
    {
      "latitude": 39.100155,
      "longitude": -8.137756,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361052,
      "ems": null
    },
    {
      "latitude": 39.099133,
      "longitude": -8.138794,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 217,
      "squawk": "3216",
      "timestamp": 1699361055,
      "ems": null
    },
    {
      "latitude": 39.095718,
      "longitude": -8.141765,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699361064,
      "ems": null
    },
    {
      "latitude": 39.092468,
      "longitude": -8.144691,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "3216",
      "timestamp": 1699361073,
      "ems": null
    },
    {
      "latitude": 39.089401,
      "longitude": -8.147676,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361083,
      "ems": null
    },
    {
      "latitude": 39.086517,
      "longitude": -8.150542,
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
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361092,
      "ems": null
    },
    {
      "latitude": 39.086235,
      "longitude": -8.150818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361092,
      "ems": null
    },
    {
      "latitude": 39.085236,
      "longitude": -8.151795,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361096,
      "ems": null
    },
    {
      "latitude": 39.082279,
      "longitude": -8.154846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "3216",
      "timestamp": 1699361105,
      "ems": null
    },
    {
      "latitude": 39.079487,
      "longitude": -8.157715,
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
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699361114,
      "ems": null
    },
    {
      "latitude": 39.076538,
      "longitude": -8.160692,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 217,
      "squawk": "3216",
      "timestamp": 1699361123,
      "ems": null
    },
    {
      "latitude": 39.073715,
      "longitude": -8.163757,
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
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699361132,
      "ems": null
    },
    {
      "latitude": 39.070816,
      "longitude": -8.167081,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "3216",
      "timestamp": 1699361141,
      "ems": null
    },
    {
      "latitude": 39.067566,
      "longitude": -8.170723,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699361150,
      "ems": null
    },
    {
      "latitude": 39.065289,
      "longitude": -8.172974,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 214,
      "squawk": "3216",
      "timestamp": 1699361156,
      "ems": null
    },
    {
      "latitude": 39.064171,
      "longitude": -8.173767,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 205,
      "squawk": "3216",
      "timestamp": 1699361159,
      "ems": null
    },
    {
      "latitude": 39.062866,
      "longitude": -8.174377,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "3216",
      "timestamp": 1699361162,
      "ems": null
    },
    {
      "latitude": 39.06147,
      "longitude": -8.174744,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "3216",
      "timestamp": 1699361165,
      "ems": null
    },
    {
      "latitude": 39.060059,
      "longitude": -8.174843,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "3216",
      "timestamp": 1699361168,
      "ems": null
    },
    {
      "latitude": 39.058685,
      "longitude": -8.174724,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 177,
      "squawk": "3216",
      "timestamp": 1699361171,
      "ems": null
    },
    {
      "latitude": 39.057266,
      "longitude": -8.174246,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 162,
      "squawk": "3216",
      "timestamp": 1699361174,
      "ems": null
    },
    {
      "latitude": 39.056122,
      "longitude": -8.17359,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "3216",
      "timestamp": 1699361177,
      "ems": null
    },
    {
      "latitude": 39.054977,
      "longitude": -8.172693,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 145,
      "squawk": "3216",
      "timestamp": 1699361180,
      "ems": null
    },
    {
      "latitude": 39.054153,
      "longitude": -8.171798,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 137,
      "squawk": "3216",
      "timestamp": 1699361183,
      "ems": null
    },
    {
      "latitude": 39.053009,
      "longitude": -8.170245,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 130,
      "squawk": "3216",
      "timestamp": 1699361186,
      "ems": null
    },
    {
      "latitude": 39.052231,
      "longitude": -8.168813,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 123,
      "squawk": "3216",
      "timestamp": 1699361190,
      "ems": null
    },
    {
      "latitude": 39.051693,
      "longitude": -8.16748,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 115,
      "squawk": "3216",
      "timestamp": 1699361192,
      "ems": null
    },
    {
      "latitude": 39.051182,
      "longitude": -8.165894,
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
      "heading": 110,
      "squawk": "3216",
      "timestamp": 1699361195,
      "ems": null
    },
    {
      "latitude": 39.050766,
      "longitude": -8.164394,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "3216",
      "timestamp": 1699361199,
      "ems": null
    },
    {
      "latitude": 39.050446,
      "longitude": -8.162961,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 104,
      "squawk": "3216",
      "timestamp": 1699361201,
      "ems": null
    },
    {
      "latitude": 39.050262,
      "longitude": -8.161408,
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
      "heading": 96,
      "squawk": "3216",
      "timestamp": 1699361204,
      "ems": null
    },
    {
      "latitude": 39.050297,
      "longitude": -8.159607,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 86,
      "squawk": "3216",
      "timestamp": 1699361208,
      "ems": null
    },
    {
      "latitude": 39.050484,
      "longitude": -8.158264,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 79,
      "squawk": "3216",
      "timestamp": 1699361210,
      "ems": null
    },
    {
      "latitude": 39.050762,
      "longitude": -8.15686,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 73,
      "squawk": "3216",
      "timestamp": 1699361213,
      "ems": null
    },
    {
      "latitude": 39.05109,
      "longitude": -8.155457,
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
      "heading": 71,
      "squawk": "3216",
      "timestamp": 1699361216,
      "ems": null
    },
    {
      "latitude": 39.051544,
      "longitude": -8.154005,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 68,
      "squawk": "3216",
      "timestamp": 1699361219,
      "ems": null
    },
    {
      "latitude": 39.051975,
      "longitude": -8.152771,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 65,
      "squawk": "3216",
      "timestamp": 1699361222,
      "ems": null
    },
    {
      "latitude": 39.05246,
      "longitude": -8.151378,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "3216",
      "timestamp": 1699361225,
      "ems": null
    },
    {
      "latitude": 39.052963,
      "longitude": -8.150124,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 60,
      "squawk": "3216",
      "timestamp": 1699361229,
      "ems": null
    },
    {
      "latitude": 39.053604,
      "longitude": -8.14881,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361232,
      "ems": null
    },
    {
      "latitude": 39.054348,
      "longitude": -8.147461,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "3216",
      "timestamp": 1699361235,
      "ems": null
    },
    {
      "latitude": 39.055092,
      "longitude": -8.14624,
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
      "heading": 53,
      "squawk": "3216",
      "timestamp": 1699361238,
      "ems": null
    },
    {
      "latitude": 39.05579,
      "longitude": -8.14502,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "3216",
      "timestamp": 1699361241,
      "ems": null
    },
    {
      "latitude": 39.05658,
      "longitude": -8.143795,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "3216",
      "timestamp": 1699361244,
      "ems": null
    },
    {
      "latitude": 39.057358,
      "longitude": -8.142541,
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
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361247,
      "ems": null
    },
    {
      "latitude": 39.058167,
      "longitude": -8.141357,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361250,
      "ems": null
    },
    {
      "latitude": 39.058956,
      "longitude": -8.140198,
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
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361253,
      "ems": null
    },
    {
      "latitude": 39.059784,
      "longitude": -8.139018,
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
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361256,
      "ems": null
    },
    {
      "latitude": 39.060699,
      "longitude": -8.137705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361259,
      "ems": null
    },
    {
      "latitude": 39.06147,
      "longitude": -8.136658,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361262,
      "ems": null
    },
    {
      "latitude": 39.062447,
      "longitude": -8.135315,
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
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361265,
      "ems": null
    },
    {
      "latitude": 39.063473,
      "longitude": -8.133911,
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
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361268,
      "ems": null
    },
    {
      "latitude": 39.06427,
      "longitude": -8.132749,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361271,
      "ems": null
    },
    {
      "latitude": 39.0672,
      "longitude": -8.128689,
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
      "heading": 46,
      "squawk": "3216",
      "timestamp": 1699361280,
      "ems": null
    },
    {
      "latitude": 39.070221,
      "longitude": -8.124748,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 43,
      "squawk": "3216",
      "timestamp": 1699361289,
      "ems": null
    },
    {
      "latitude": 39.073483,
      "longitude": -8.120605,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 46,
      "squawk": "3216",
      "timestamp": 1699361298,
      "ems": null
    },
    {
      "latitude": 39.076355,
      "longitude": -8.116568,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "3216",
      "timestamp": 1699361307,
      "ems": null
    },
    {
      "latitude": 39.077251,
      "longitude": -8.115112,
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
      "heading": 52,
      "squawk": "3216",
      "timestamp": 1699361310,
      "ems": null
    },
    {
      "latitude": 39.078278,
      "longitude": -8.113342,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3216",
      "timestamp": 1699361313,
      "ems": null
    },
    {
      "latitude": 39.079147,
      "longitude": -8.111732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "3216",
      "timestamp": 1699361317,
      "ems": null
    },
    {
      "latitude": 39.079998,
      "longitude": -8.110168,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699361319,
      "ems": null
    },
    {
      "latitude": 39.080887,
      "longitude": -8.108507,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699361323,
      "ems": null
    },
    {
      "latitude": 39.081673,
      "longitude": -8.106995,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699361325,
      "ems": null
    },
    {
      "latitude": 39.082558,
      "longitude": -8.105347,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361328,
      "ems": null
    },
    {
      "latitude": 39.083351,
      "longitude": -8.103821,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361331,
      "ems": null
    },
    {
      "latitude": 39.084274,
      "longitude": -8.102058,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361335,
      "ems": null
    },
    {
      "latitude": 39.085072,
      "longitude": -8.100403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "3216",
      "timestamp": 1699361337,
      "ems": null
    },
    {
      "latitude": 39.085831,
      "longitude": -8.098775,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 59,
      "squawk": "3216",
      "timestamp": 1699361340,
      "ems": null
    },
    {
      "latitude": 39.086655,
      "longitude": -8.096924,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "3216",
      "timestamp": 1699361344,
      "ems": null
    },
    {
      "latitude": 39.089081,
      "longitude": -8.092088,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361353,
      "ems": null
    },
    {
      "latitude": 39.09137,
      "longitude": -8.08749,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361362,
      "ems": null
    },
    {
      "latitude": 39.093796,
      "longitude": -8.082773,
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
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361371,
      "ems": null
    },
    {
      "latitude": 39.096058,
      "longitude": -8.078247,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361380,
      "ems": null
    },
    {
      "latitude": 39.098759,
      "longitude": -8.07312,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 56,
      "squawk": "3216",
      "timestamp": 1699361389,
      "ems": null
    },
    {
      "latitude": 39.10144,
      "longitude": -8.068145,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "3216",
      "timestamp": 1699361398,
      "ems": null
    },
    {
      "latitude": 39.10239,
      "longitude": -8.06665,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361401,
      "ems": null
    },
    {
      "latitude": 39.103271,
      "longitude": -8.065278,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361404,
      "ems": null
    },
    {
      "latitude": 39.104141,
      "longitude": -8.063846,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361407,
      "ems": null
    },
    {
      "latitude": 39.105057,
      "longitude": -8.062412,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361410,
      "ems": null
    },
    {
      "latitude": 39.105881,
      "longitude": -8.061096,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "3216",
      "timestamp": 1699361413,
      "ems": null
    },
    {
      "latitude": 39.10675,
      "longitude": -8.059666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "3216",
      "timestamp": 1699361416,
      "ems": null
    },
    {
      "latitude": 39.107574,
      "longitude": -8.058352,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "3216",
      "timestamp": 1699361419,
      "ems": null
    },
    {
      "latitude": 39.108349,
      "longitude": -8.057068,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 51,
      "squawk": "3216",
      "timestamp": 1699361422,
      "ems": null
    },
    {
      "latitude": 39.110962,
      "longitude": -8.052859,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361431,
      "ems": null
    },
    {
      "latitude": 39.113655,
      "longitude": -8.048706,
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
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699361440,
      "ems": null
    },
    {
      "latitude": 39.116589,
      "longitude": -8.044373,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361449,
      "ems": null
    },
    {
      "latitude": 39.117519,
      "longitude": -8.04303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "3216",
      "timestamp": 1699361452,
      "ems": null
    },
    {
      "latitude": 39.118404,
      "longitude": -8.041809,
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
      "heading": 46,
      "squawk": "3216",
      "timestamp": 1699361455,
      "ems": null
    },
    {
      "latitude": 39.12117,
      "longitude": -8.037812,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361464,
      "ems": null
    },
    {
      "latitude": 39.123825,
      "longitude": -8.03417,
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
      "heading": 45,
      "squawk": "3216",
      "timestamp": 1699361473,
      "ems": null
    },
    {
      "latitude": 39.125839,
      "longitude": -8.031722,
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
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361480,
      "ems": null
    },
    {
      "latitude": 39.126709,
      "longitude": -8.030767,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "3216",
      "timestamp": 1699361482,
      "ems": null
    },
    {
      "latitude": 39.127762,
      "longitude": -8.029572,
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
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361485,
      "ems": null
    },
    {
      "latitude": 39.128815,
      "longitude": -8.028439,
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
      "heading": 39,
      "squawk": "3216",
      "timestamp": 1699361489,
      "ems": null
    },
    {
      "latitude": 39.129868,
      "longitude": -8.027304,
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
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699361492,
      "ems": null
    },
    {
      "latitude": 39.130787,
      "longitude": -8.026367,
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
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699361495,
      "ems": null
    },
    {
      "latitude": 39.131809,
      "longitude": -8.025391,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699361498,
      "ems": null
    },
    {
      "latitude": 39.132881,
      "longitude": -8.024231,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "3216",
      "timestamp": 1699361501,
      "ems": null
    },
    {
      "latitude": 39.133896,
      "longitude": -8.023184,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "3216",
      "timestamp": 1699361504,
      "ems": null
    },
    {
      "latitude": 39.136688,
      "longitude": -8.02008,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361513,
      "ems": null
    },
    {
      "latitude": 39.139389,
      "longitude": -8.016974,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361522,
      "ems": null
    },
    {
      "latitude": 39.140423,
      "longitude": -8.015686,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "3216",
      "timestamp": 1699361525,
      "ems": null
    },
    {
      "latitude": 39.141266,
      "longitude": -8.014646,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "3216",
      "timestamp": 1699361528,
      "ems": null
    },
    {
      "latitude": 39.144012,
      "longitude": -8.011421,
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
      "heading": 43,
      "squawk": "3216",
      "timestamp": 1699361537,
      "ems": null
    },
    {
      "latitude": 39.146755,
      "longitude": -8.008118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "3216",
      "timestamp": 1699361546,
      "ems": null
    },
    {
      "latitude": 39.149597,
      "longitude": -8.004675,
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
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361555,
      "ems": null
    },
    {
      "latitude": 39.151566,
      "longitude": -8.002645,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 37,
      "squawk": "3216",
      "timestamp": 1699361561,
      "ems": null
    },
    {
      "latitude": 39.152714,
      "longitude": -8.001648,
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
      "heading": 32,
      "squawk": "3216",
      "timestamp": 1699361564,
      "ems": null
    },
    {
      "latitude": 39.153671,
      "longitude": -8.001032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699361567,
      "ems": null
    },
    {
      "latitude": 39.155041,
      "longitude": -8.00061,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3216",
      "timestamp": 1699361570,
      "ems": null
    },
    {
      "latitude": 39.156418,
      "longitude": -8.000733,
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
      "heading": 350,
      "squawk": "3216",
      "timestamp": 1699361573,
      "ems": null
    },
    {
      "latitude": 39.157509,
      "longitude": -8.001099,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 341,
      "squawk": "3216",
      "timestamp": 1699361576,
      "ems": null
    },
    {
      "latitude": 39.158531,
      "longitude": -8.00177,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699361579,
      "ems": null
    },
    {
      "latitude": 39.159557,
      "longitude": -8.002502,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699361583,
      "ems": null
    },
    {
      "latitude": 39.160446,
      "longitude": -8.003181,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361585,
      "ems": null
    },
    {
      "latitude": 39.161606,
      "longitude": -8.003967,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699361588,
      "ems": null
    },
    {
      "latitude": 39.162491,
      "longitude": -8.004578,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699361591,
      "ems": null
    },
    {
      "latitude": 39.163651,
      "longitude": -8.005391,
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
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361595,
      "ems": null
    },
    {
      "latitude": 39.164566,
      "longitude": -8.006107,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361597,
      "ems": null
    },
    {
      "latitude": 39.165573,
      "longitude": -8.006824,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 329,
      "squawk": "3216",
      "timestamp": 1699361600,
      "ems": null
    },
    {
      "latitude": 39.166538,
      "longitude": -8.007568,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361603,
      "ems": null
    },
    {
      "latitude": 39.167542,
      "longitude": -8.008257,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 329,
      "squawk": "3216",
      "timestamp": 1699361606,
      "ems": null
    },
    {
      "latitude": 39.170403,
      "longitude": -8.010376,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361616,
      "ems": null
    },
    {
      "latitude": 39.173244,
      "longitude": -8.012512,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361624,
      "ems": null
    },
    {
      "latitude": 39.17627,
      "longitude": -8.014526,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "3216",
      "timestamp": 1699361633,
      "ems": null
    },
    {
      "latitude": 39.179214,
      "longitude": -8.016557,
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
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699361643,
      "ems": null
    },
    {
      "latitude": 39.182144,
      "longitude": -8.018646,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 330,
      "squawk": "3216",
      "timestamp": 1699361651,
      "ems": null
    },
    {
      "latitude": 39.185394,
      "longitude": -8.021034,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "3216",
      "timestamp": 1699361661,
      "ems": null
    },
    {
      "latitude": 39.185997,
      "longitude": -8.021606,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "3216",
      "timestamp": 1699361663,
      "ems": null
    },
    {
      "latitude": 39.187256,
      "longitude": -8.022644,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "3216",
      "timestamp": 1699361667,
      "ems": null
    },
    {
      "latitude": 39.188232,
      "longitude": -8.023499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "3216",
      "timestamp": 1699361670,
      "ems": null
    },
    {
      "latitude": 39.189537,
      "longitude": -8.024658,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "3216",
      "timestamp": 1699361674,
      "ems": null
    },
    {
      "latitude": 39.191353,
      "longitude": -8.026245,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "3216",
      "timestamp": 1699361679,
      "ems": null
    },
    {
      "latitude": 39.192444,
      "longitude": -8.027184,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "3216",
      "timestamp": 1699361683,
      "ems": null
    },
    {
      "latitude": 39.193497,
      "longitude": -8.02814,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 323,
      "squawk": "3216",
      "timestamp": 1699361686,
      "ems": null
    },
    {
      "latitude": 39.196609,
      "longitude": -8.031304,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "3216",
      "timestamp": 1699361695,
      "ems": null
    },
    {
      "latitude": 39.197571,
      "longitude": -8.032379,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "3216",
      "timestamp": 1699361698,
      "ems": null
    },
    {
      "latitude": 39.198566,
      "longitude": -8.033569,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "3216",
      "timestamp": 1699361701,
      "ems": null
    },
    {
      "latitude": 39.199539,
      "longitude": -8.034708,
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
      "heading": 318,
      "squawk": "3216",
      "timestamp": 1699361704,
      "ems": null
    },
    {
      "latitude": 39.200615,
      "longitude": -8.035889,
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
      "heading": 318,
      "squawk": "3216",
      "timestamp": 1699361708,
      "ems": null
    },
    {
      "latitude": 39.201591,
      "longitude": -8.037048,
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
      "heading": 317,
      "squawk": "3216",
      "timestamp": 1699361711,
      "ems": null
    },
    {
      "latitude": 39.20256,
      "longitude": -8.03835,
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
      "heading": 313,
      "squawk": "3216",
      "timestamp": 1699361714,
      "ems": null
    },
    {
      "latitude": 39.203476,
      "longitude": -8.039604,
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
      "heading": 310,
      "squawk": "3216",
      "timestamp": 1699361717,
      "ems": null
    },
    {
      "latitude": 39.204292,
      "longitude": -8.040955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "3216",
      "timestamp": 1699361720,
      "ems": null
    },
    {
      "latitude": 39.205078,
      "longitude": -8.042291,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "3216",
      "timestamp": 1699361723,
      "ems": null
    },
    {
      "latitude": 39.205967,
      "longitude": -8.043762,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "3216",
      "timestamp": 1699361726,
      "ems": null
    },
    {
      "latitude": 39.206772,
      "longitude": -8.044977,
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
      "heading": 309,
      "squawk": "3216",
      "timestamp": 1699361729,
      "ems": null
    },
    {
      "latitude": 39.2076,
      "longitude": -8.046265,
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
      "heading": 309,
      "squawk": "3216",
      "timestamp": 1699361732,
      "ems": null
    },
    {
      "latitude": 39.208481,
      "longitude": -8.047668,
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
      "heading": 309,
      "squawk": "3216",
      "timestamp": 1699361736,
      "ems": null
    },
    {
      "latitude": 39.20932,
      "longitude": -8.049011,
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
      "heading": 310,
      "squawk": "3216",
      "timestamp": 1699361739,
      "ems": null
    },
    {
      "latitude": 39.211853,
      "longitude": -8.052799,
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
      "heading": 309,
      "squawk": "3216",
      "timestamp": 1699361748,
      "ems": null
    },
    {
      "latitude": 39.214256,
      "longitude": -8.056519,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "3216",
      "timestamp": 1699361757,
      "ems": null
    },
    {
      "latitude": 39.216431,
      "longitude": -8.060382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 303,
      "squawk": "3216",
      "timestamp": 1699361766,
      "ems": null
    },
    {
      "latitude": 39.217094,
      "longitude": -8.061707,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "3216",
      "timestamp": 1699361769,
      "ems": null
    },
    {
      "latitude": 39.217701,
      "longitude": -8.062927,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "3216",
      "timestamp": 1699361772,
      "ems": null
    },
    {
      "latitude": 39.218353,
      "longitude": -8.064209,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "3216",
      "timestamp": 1699361775,
      "ems": null
    },
    {
      "latitude": 39.218903,
      "longitude": -8.065457,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "3216",
      "timestamp": 1699361778,
      "ems": null
    },
    {
      "latitude": 39.219543,
      "longitude": -8.06695,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699361781,
      "ems": null
    },
    {
      "latitude": 39.220093,
      "longitude": -8.068264,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699361784,
      "ems": null
    },
    {
      "latitude": 39.220634,
      "longitude": -8.069519,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699361787,
      "ems": null
    },
    {
      "latitude": 39.221191,
      "longitude": -8.070831,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699361790,
      "ems": null
    },
    {
      "latitude": 39.221741,
      "longitude": -8.072145,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "3216",
      "timestamp": 1699361793,
      "ems": null
    },
    {
      "latitude": 39.223526,
      "longitude": -8.076086,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "3216",
      "timestamp": 1699361802,
      "ems": null
    },
    {
      "latitude": 39.224636,
      "longitude": -8.078491,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "3216",
      "timestamp": 1699361808,
      "ems": null
    },
    {
      "latitude": 39.225723,
      "longitude": -8.080624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 303,
      "squawk": "3216",
      "timestamp": 1699361814,
      "ems": null
    },
    {
      "latitude": 39.227142,
      "longitude": -8.083728,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "3216",
      "timestamp": 1699361821,
      "ems": null
    },
    {
      "latitude": 39.227554,
      "longitude": -8.084923,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "3216",
      "timestamp": 1699361824,
      "ems": null
    },
    {
      "latitude": 39.228035,
      "longitude": -8.086365,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "3216",
      "timestamp": 1699361826,
      "ems": null
    },
    {
      "latitude": 39.228516,
      "longitude": -8.087968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "3216",
      "timestamp": 1699361830,
      "ems": null
    },
    {
      "latitude": 39.228825,
      "longitude": -8.089233,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 288,
      "squawk": "3216",
      "timestamp": 1699361832,
      "ems": null
    },
    {
      "latitude": 39.229248,
      "longitude": -8.090953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 287,
      "squawk": "3216",
      "timestamp": 1699361836,
      "ems": null
    },
    {
      "latitude": 39.229568,
      "longitude": -8.092566,
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
      "heading": 283,
      "squawk": "3216",
      "timestamp": 1699361839,
      "ems": null
    },
    {
      "latitude": 39.229797,
      "longitude": -8.093998,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "3216",
      "timestamp": 1699361842,
      "ems": null
    },
    {
      "latitude": 39.230038,
      "longitude": -8.095642,
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
      "heading": 279,
      "squawk": "3216",
      "timestamp": 1699361845,
      "ems": null
    },
    {
      "latitude": 39.230221,
      "longitude": -8.097168,
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
      "heading": 280,
      "squawk": "3216",
      "timestamp": 1699361848,
      "ems": null
    },
    {
      "latitude": 39.230362,
      "longitude": -8.0979,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 282,
      "squawk": "3216",
      "timestamp": 1699361850,
      "ems": null
    },
    {
      "latitude": 39.230686,
      "longitude": -8.100098,
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
      "heading": 280,
      "squawk": "3216",
      "timestamp": 1699361853,
      "ems": null
    },
    {
      "latitude": 39.230827,
      "longitude": -8.101807,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 276,
      "squawk": "3216",
      "timestamp": 1699361856,
      "ems": null
    },
    {
      "latitude": 39.230736,
      "longitude": -8.103699,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 262,
      "squawk": "3216",
      "timestamp": 1699361860,
      "ems": null
    },
    {
      "latitude": 39.230362,
      "longitude": -8.10553,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 253,
      "squawk": "3216",
      "timestamp": 1699361863,
      "ems": null
    },
    {
      "latitude": 39.230164,
      "longitude": -8.106178,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "3216",
      "timestamp": 1699361865,
      "ems": null
    },
    {
      "latitude": 39.229385,
      "longitude": -8.108149,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 239,
      "squawk": "3216",
      "timestamp": 1699361869,
      "ems": null
    },
    {
      "latitude": 39.228607,
      "longitude": -8.109582,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 237,
      "squawk": "3216",
      "timestamp": 1699361872,
      "ems": null
    },
    {
      "latitude": 39.227707,
      "longitude": -8.110901,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 230,
      "squawk": "3216",
      "timestamp": 1699361875,
      "ems": null
    },
    {
      "latitude": 39.227463,
      "longitude": -8.111314,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 228,
      "squawk": "3216",
      "timestamp": 1699361876,
      "ems": null
    },
    {
      "latitude": 39.225941,
      "longitude": -8.113281,
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
      "heading": 222,
      "squawk": "3216",
      "timestamp": 1699361881,
      "ems": null
    },
    {
      "latitude": 39.225147,
      "longitude": -8.114075,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 216,
      "squawk": "3216",
      "timestamp": 1699361883,
      "ems": null
    },
    {
      "latitude": 39.223343,
      "longitude": -8.115254,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 203,
      "squawk": "3216",
      "timestamp": 1699361887,
      "ems": null
    },
    {
      "latitude": 39.222153,
      "longitude": -8.115672,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 193,
      "squawk": "3216",
      "timestamp": 1699361890,
      "ems": null
    },
    {
      "latitude": 39.220772,
      "longitude": -8.115967,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 187,
      "squawk": "3216",
      "timestamp": 1699361893,
      "ems": null
    },
    {
      "latitude": 39.219376,
      "longitude": -8.11615,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 186,
      "squawk": "3216",
      "timestamp": 1699361896,
      "ems": null
    },
    {
      "latitude": 39.218033,
      "longitude": -8.116388,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 187,
      "squawk": "3216",
      "timestamp": 1699361899,
      "ems": null
    },
    {
      "latitude": 39.216675,
      "longitude": -8.116577,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 187,
      "squawk": "3216",
      "timestamp": 1699361902,
      "ems": null
    },
    {
      "latitude": 39.215466,
      "longitude": -8.116699,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 184,
      "squawk": "3216",
      "timestamp": 1699361905,
      "ems": null
    },
    {
      "latitude": 39.214207,
      "longitude": -8.116577,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 173,
      "squawk": "3216",
      "timestamp": 1699361908,
      "ems": null
    },
    {
      "latitude": 39.212906,
      "longitude": -8.116211,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 164,
      "squawk": "3216",
      "timestamp": 1699361911,
      "ems": null
    },
    {
      "latitude": 39.211647,
      "longitude": -8.11554,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 156,
      "squawk": "3216",
      "timestamp": 1699361914,
      "ems": null
    },
    {
      "latitude": 39.210663,
      "longitude": -8.114837,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "3216",
      "timestamp": 1699361917,
      "ems": null
    },
    {
      "latitude": 39.20932,
      "longitude": -8.11377,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 145,
      "squawk": "3216",
      "timestamp": 1699361920,
      "ems": null
    },
    {
      "latitude": 39.208328,
      "longitude": -8.112746,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 139,
      "squawk": "3216",
      "timestamp": 1699361923,
      "ems": null
    },
    {
      "latitude": 39.207458,
      "longitude": -8.111572,
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
      "heading": 130,
      "squawk": "3216",
      "timestamp": 1699361927,
      "ems": null
    },
    {
      "latitude": 39.206619,
      "longitude": -8.109924,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 123,
      "squawk": "3216",
      "timestamp": 1699361930,
      "ems": null
    },
    {
      "latitude": 39.206131,
      "longitude": -8.108447,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 112,
      "squawk": "3216",
      "timestamp": 1699361933,
      "ems": null
    },
    {
      "latitude": 39.205688,
      "longitude": -8.106934,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 109,
      "squawk": "3216",
      "timestamp": 1699361935,
      "ems": null
    },
    {
      "latitude": 39.205364,
      "longitude": -8.105286,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 104,
      "squawk": "3216",
      "timestamp": 1699361938,
      "ems": null
    },
    {
      "latitude": 39.205132,
      "longitude": -8.103821,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 100,
      "squawk": "3216",
      "timestamp": 1699361941,
      "ems": null
    },
    {
      "latitude": 39.20499,
      "longitude": -8.101929,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 103,
      "squawk": "3216",
      "timestamp": 1699361945,
      "ems": null
    },
    {
      "latitude": 39.205032,
      "longitude": -8.100267,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "3216",
      "timestamp": 1699361948,
      "ems": null
    },
    {
      "latitude": 39.205124,
      "longitude": -8.098834,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 84,
      "squawk": "3216",
      "timestamp": 1699361950,
      "ems": null
    },
    {
      "latitude": 39.205364,
      "longitude": -8.097168,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "3216",
      "timestamp": 1699361954,
      "ems": null
    },
    {
      "latitude": 39.205551,
      "longitude": -8.095703,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "3216",
      "timestamp": 1699361956,
      "ems": null
    },
    {
      "latitude": 39.205719,
      "longitude": -8.094655,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "3216",
      "timestamp": 1699361958,
      "ems": null
    },
    {
      "latitude": 39.206223,
      "longitude": -8.092744,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 76,
      "squawk": "3216",
      "timestamp": 1699361962,
      "ems": null
    },
    {
      "latitude": 39.206726,
      "longitude": -8.091311,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "3216",
      "timestamp": 1699361966,
      "ems": null
    },
    {
      "latitude": 39.207275,
      "longitude": -8.090057,
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
      "heading": 59,
      "squawk": "3216",
      "timestamp": 1699361969,
      "ems": null
    },
    {
      "latitude": 39.207916,
      "longitude": -8.088803,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699361972,
      "ems": null
    },
    {
      "latitude": 39.208576,
      "longitude": -8.087585,
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
      "heading": 54,
      "squawk": "3216",
      "timestamp": 1699361975,
      "ems": null
    },
    {
      "latitude": 39.209335,
      "longitude": -8.086415,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699361978,
      "ems": null
    },
    {
      "latitude": 39.210251,
      "longitude": -8.08534,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699361981,
      "ems": null
    },
    {
      "latitude": 39.211075,
      "longitude": -8.084504,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699361984,
      "ems": null
    },
    {
      "latitude": 39.212021,
      "longitude": -8.083557,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 35,
      "squawk": "3216",
      "timestamp": 1699361987,
      "ems": null
    },
    {
      "latitude": 39.212997,
      "longitude": -8.082764,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "3216",
      "timestamp": 1699361990,
      "ems": null
    },
    {
      "latitude": 39.213959,
      "longitude": -8.081997,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 31,
      "squawk": "3216",
      "timestamp": 1699361993,
      "ems": null
    },
    {
      "latitude": 39.21492,
      "longitude": -8.081221,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 31,
      "squawk": "3216",
      "timestamp": 1699361996,
      "ems": null
    },
    {
      "latitude": 39.215885,
      "longitude": -8.080505,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 30,
      "squawk": "3216",
      "timestamp": 1699361999,
      "ems": null
    },
    {
      "latitude": 39.216862,
      "longitude": -8.079712,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "3216",
      "timestamp": 1699362002,
      "ems": null
    },
    {
      "latitude": 39.21785,
      "longitude": -8.078952,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 32,
      "squawk": "3216",
      "timestamp": 1699362005,
      "ems": null
    },
    {
      "latitude": 39.218765,
      "longitude": -8.078176,
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
      "heading": 31,
      "squawk": "3216",
      "timestamp": 1699362008,
      "ems": null
    },
    {
      "latitude": 39.219749,
      "longitude": -8.077454,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3216",
      "timestamp": 1699362011,
      "ems": null
    },
    {
      "latitude": 39.220642,
      "longitude": -8.076742,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3216",
      "timestamp": 1699362014,
      "ems": null
    },
    {
      "latitude": 39.221611,
      "longitude": -8.07605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 30,
      "squawk": "3216",
      "timestamp": 1699362017,
      "ems": null
    },
    {
      "latitude": 39.223564,
      "longitude": -8.074646,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "3216",
      "timestamp": 1699362023,
      "ems": null
    },
    {
      "latitude": 39.225845,
      "longitude": -8.073425,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "3216",
      "timestamp": 1699362030,
      "ems": null
    },
    {
      "latitude": 39.226826,
      "longitude": -8.072937,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 22,
      "squawk": "3216",
      "timestamp": 1699362033,
      "ems": null
    },
    {
      "latitude": 39.228268,
      "longitude": -8.072144,
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
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362037,
      "ems": null
    },
    {
      "latitude": 39.22929,
      "longitude": -8.071533,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362041,
      "ems": null
    },
    {
      "latitude": 39.229935,
      "longitude": -8.07113,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362043,
      "ems": null
    },
    {
      "latitude": 39.231106,
      "longitude": -8.070435,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362047,
      "ems": null
    },
    {
      "latitude": 39.233917,
      "longitude": -8.068742,
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
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362056,
      "ems": null
    },
    {
      "latitude": 39.236229,
      "longitude": -8.067444,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699362063,
      "ems": null
    },
    {
      "latitude": 39.239456,
      "longitude": -8.065637,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362073,
      "ems": null
    },
    {
      "latitude": 39.241425,
      "longitude": -8.064144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699362080,
      "ems": null
    },
    {
      "latitude": 39.242569,
      "longitude": -8.062531,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "3216",
      "timestamp": 1699362084,
      "ems": null
    },
    {
      "latitude": 39.242889,
      "longitude": -8.061934,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 57,
      "squawk": "3216",
      "timestamp": 1699362086,
      "ems": null
    },
    {
      "latitude": 39.243443,
      "longitude": -8.060425,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "3216",
      "timestamp": 1699362090,
      "ems": null
    },
    {
      "latitude": 39.243675,
      "longitude": -8.059265,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 75,
      "squawk": "3216",
      "timestamp": 1699362092,
      "ems": null
    },
    {
      "latitude": 39.243805,
      "longitude": -8.057815,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 84,
      "squawk": "3216",
      "timestamp": 1699362095,
      "ems": null
    },
    {
      "latitude": 39.243805,
      "longitude": -8.056322,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 94,
      "squawk": "3216",
      "timestamp": 1699362099,
      "ems": null
    },
    {
      "latitude": 39.243576,
      "longitude": -8.05477,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "3216",
      "timestamp": 1699362102,
      "ems": null
    },
    {
      "latitude": 39.243301,
      "longitude": -8.053576,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "3216",
      "timestamp": 1699362105,
      "ems": null
    },
    {
      "latitude": 39.242844,
      "longitude": -8.052321,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 116,
      "squawk": "3216",
      "timestamp": 1699362108,
      "ems": null
    },
    {
      "latitude": 39.242294,
      "longitude": -8.051127,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "3216",
      "timestamp": 1699362111,
      "ems": null
    },
    {
      "latitude": 39.241722,
      "longitude": -8.049927,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 121,
      "squawk": "3216",
      "timestamp": 1699362114,
      "ems": null
    },
    {
      "latitude": 39.241196,
      "longitude": -8.048859,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 123,
      "squawk": "3216",
      "timestamp": 1699362117,
      "ems": null
    },
    {
      "latitude": 39.240509,
      "longitude": -8.047668,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 127,
      "squawk": "3216",
      "timestamp": 1699362120,
      "ems": null
    },
    {
      "latitude": 39.239861,
      "longitude": -8.046692,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 131,
      "squawk": "3216",
      "timestamp": 1699362123,
      "ems": null
    },
    {
      "latitude": 39.238976,
      "longitude": -8.045654,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 140,
      "squawk": "3216",
      "timestamp": 1699362126,
      "ems": null
    },
    {
      "latitude": 39.238129,
      "longitude": -8.045037,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 151,
      "squawk": "3216",
      "timestamp": 1699362129,
      "ems": null
    },
    {
      "latitude": 39.237019,
      "longitude": -8.044617,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 167,
      "squawk": "3216",
      "timestamp": 1699362132,
      "ems": null
    },
    {
      "latitude": 39.236088,
      "longitude": -8.044495,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 182,
      "squawk": "3216",
      "timestamp": 1699362135,
      "ems": null
    },
    {
      "latitude": 39.23497,
      "longitude": -8.044739,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 190,
      "squawk": "3216",
      "timestamp": 1699362138,
      "ems": null
    },
    {
      "latitude": 39.233994,
      "longitude": -8.045044,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 196,
      "squawk": "3216",
      "timestamp": 1699362141,
      "ems": null
    },
    {
      "latitude": 39.232956,
      "longitude": -8.045515,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 200,
      "squawk": "3216",
      "timestamp": 1699362144,
      "ems": null
    },
    {
      "latitude": 39.231945,
      "longitude": -8.046021,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 200,
      "squawk": "3216",
      "timestamp": 1699362147,
      "ems": null
    },
    {
      "latitude": 39.231125,
      "longitude": -8.046471,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 203,
      "squawk": "3216",
      "timestamp": 1699362150,
      "ems": null
    },
    {
      "latitude": 39.229988,
      "longitude": -8.047119,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362153,
      "ems": null
    },
    {
      "latitude": 39.229244,
      "longitude": -8.047546,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362156,
      "ems": null
    },
    {
      "latitude": 39.228195,
      "longitude": -8.048142,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362159,
      "ems": null
    },
    {
      "latitude": 39.227383,
      "longitude": -8.048584,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "3216",
      "timestamp": 1699362162,
      "ems": null
    },
    {
      "latitude": 39.226547,
      "longitude": -8.049097,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362165,
      "ems": null
    },
    {
      "latitude": 39.225754,
      "longitude": -8.049561,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "3216",
      "timestamp": 1699362168,
      "ems": null
    },
    {
      "latitude": 39.201965,
      "longitude": -8.063538,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 207,
      "squawk": "3216",
      "timestamp": 1699362254,
      "ems": null
    },
    {
      "latitude": 39.19931,
      "longitude": -8.065308,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 207,
      "squawk": "3216",
      "timestamp": 1699362263,
      "ems": null
    },
    {
      "latitude": 39.196796,
      "longitude": -8.066956,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 205,
      "squawk": "3216",
      "timestamp": 1699362271,
      "ems": null
    },
    {
      "latitude": 39.194138,
      "longitude": -8.068383,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 198,
      "squawk": "3216",
      "timestamp": 1699362280,
      "ems": null
    },
    {
      "latitude": 39.192719,
      "longitude": -8.06904,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 201,
      "squawk": "3216",
      "timestamp": 1699362283,
      "ems": null
    },
    {
      "latitude": 39.189442,
      "longitude": -8.071228,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362292,
      "ems": null
    },
    {
      "latitude": 39.187637,
      "longitude": -8.072503,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699362298,
      "ems": null
    },
    {
      "latitude": 39.186539,
      "longitude": -8.073279,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699362301,
      "ems": null
    },
    {
      "latitude": 39.185577,
      "longitude": -8.073996,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699362304,
      "ems": null
    },
    {
      "latitude": 39.184753,
      "longitude": -8.074593,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699362307,
      "ems": null
    },
    {
      "latitude": 39.18367,
      "longitude": -8.075378,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362310,
      "ems": null
    },
    {
      "latitude": 39.182693,
      "longitude": -8.075907,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 197,
      "squawk": "3216",
      "timestamp": 1699362313,
      "ems": null
    },
    {
      "latitude": 39.181549,
      "longitude": -8.076026,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 182,
      "squawk": "3216",
      "timestamp": 1699362316,
      "ems": null
    },
    {
      "latitude": 39.18055,
      "longitude": -8.075867,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "3216",
      "timestamp": 1699362319,
      "ems": null
    },
    {
      "latitude": 39.179718,
      "longitude": -8.075488,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 159,
      "squawk": "3216",
      "timestamp": 1699362321,
      "ems": null
    },
    {
      "latitude": 39.178391,
      "longitude": -8.074473,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 142,
      "squawk": "3216",
      "timestamp": 1699362325,
      "ems": null
    },
    {
      "latitude": 39.17757,
      "longitude": -8.073425,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 133,
      "squawk": "3216",
      "timestamp": 1699362328,
      "ems": null
    },
    {
      "latitude": 39.176781,
      "longitude": -8.071838,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 118,
      "squawk": "3216",
      "timestamp": 1699362332,
      "ems": null
    },
    {
      "latitude": 39.176285,
      "longitude": -8.070473,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 111,
      "squawk": "3216",
      "timestamp": 1699362335,
      "ems": null
    },
    {
      "latitude": 39.175896,
      "longitude": -8.069031,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 111,
      "squawk": "3216",
      "timestamp": 1699362338,
      "ems": null
    },
    {
      "latitude": 39.175476,
      "longitude": -8.067627,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 110,
      "squawk": "3216",
      "timestamp": 1699362341,
      "ems": null
    },
    {
      "latitude": 39.17514,
      "longitude": -8.066413,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "3216",
      "timestamp": 1699362343,
      "ems": null
    },
    {
      "latitude": 39.174866,
      "longitude": -8.064801,
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
      "heading": 97,
      "squawk": "3216",
      "timestamp": 1699362347,
      "ems": null
    },
    {
      "latitude": 39.174911,
      "longitude": -8.063249,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "3216",
      "timestamp": 1699362350,
      "ems": null
    },
    {
      "latitude": 39.175152,
      "longitude": -8.062012,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "3216",
      "timestamp": 1699362352,
      "ems": null
    },
    {
      "latitude": 39.175991,
      "longitude": -8.060059,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699362356,
      "ems": null
    },
    {
      "latitude": 39.176834,
      "longitude": -8.05877,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 46,
      "squawk": "3216",
      "timestamp": 1699362359,
      "ems": null
    },
    {
      "latitude": 39.177479,
      "longitude": -8.057922,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 41,
      "squawk": "3216",
      "timestamp": 1699362362,
      "ems": null
    },
    {
      "latitude": 39.178783,
      "longitude": -8.056519,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "3216",
      "timestamp": 1699362365,
      "ems": null
    },
    {
      "latitude": 39.179806,
      "longitude": -8.055542,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "3216",
      "timestamp": 1699362368,
      "ems": null
    },
    {
      "latitude": 39.181065,
      "longitude": -8.054504,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 32,
      "squawk": "3216",
      "timestamp": 1699362371,
      "ems": null
    },
    {
      "latitude": 39.182041,
      "longitude": -8.053711,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 31,
      "squawk": "3216",
      "timestamp": 1699362374,
      "ems": null
    },
    {
      "latitude": 39.183296,
      "longitude": -8.052734,
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
      "heading": 29,
      "squawk": "3216",
      "timestamp": 1699362377,
      "ems": null
    },
    {
      "latitude": 39.184479,
      "longitude": -8.051904,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 28,
      "squawk": "3216",
      "timestamp": 1699362380,
      "ems": null
    },
    {
      "latitude": 39.185669,
      "longitude": -8.051068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 27,
      "squawk": "3216",
      "timestamp": 1699362383,
      "ems": null
    },
    {
      "latitude": 39.186882,
      "longitude": -8.050232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "3216",
      "timestamp": 1699362386,
      "ems": null
    },
    {
      "latitude": 39.188187,
      "longitude": -8.049336,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "3216",
      "timestamp": 1699362389,
      "ems": null
    },
    {
      "latitude": 39.189304,
      "longitude": -8.048584,
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
      "heading": 27,
      "squawk": "3216",
      "timestamp": 1699362392,
      "ems": null
    },
    {
      "latitude": 39.190468,
      "longitude": -8.047791,
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
      "heading": 27,
      "squawk": "3216",
      "timestamp": 1699362395,
      "ems": null
    },
    {
      "latitude": 39.19162,
      "longitude": -8.047068,
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
      "heading": 26,
      "squawk": "3216",
      "timestamp": 1699362398,
      "ems": null
    },
    {
      "latitude": 39.192795,
      "longitude": -8.046326,
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
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362401,
      "ems": null
    },
    {
      "latitude": 39.193867,
      "longitude": -8.045654,
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
      "heading": 26,
      "squawk": "3216",
      "timestamp": 1699362404,
      "ems": null
    },
    {
      "latitude": 39.197159,
      "longitude": -8.043604,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362413,
      "ems": null
    },
    {
      "latitude": 39.200409,
      "longitude": -8.041574,
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
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362422,
      "ems": null
    },
    {
      "latitude": 39.203979,
      "longitude": -8.039663,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 20,
      "squawk": "3216",
      "timestamp": 1699362431,
      "ems": null
    },
    {
      "latitude": 39.205223,
      "longitude": -8.039063,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "3216",
      "timestamp": 1699362434,
      "ems": null
    },
    {
      "latitude": 39.20636,
      "longitude": -8.038529,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 20,
      "squawk": "3216",
      "timestamp": 1699362437,
      "ems": null
    },
    {
      "latitude": 39.208435,
      "longitude": -8.037109,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "3216",
      "timestamp": 1699362443,
      "ems": null
    },
    {
      "latitude": 39.209381,
      "longitude": -8.035902,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "3216",
      "timestamp": 1699362447,
      "ems": null
    },
    {
      "latitude": 39.210022,
      "longitude": -8.034589,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "3216",
      "timestamp": 1699362450,
      "ems": null
    },
    {
      "latitude": 39.21048,
      "longitude": -8.032976,
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
      "heading": 72,
      "squawk": "3216",
      "timestamp": 1699362453,
      "ems": null
    },
    {
      "latitude": 39.210709,
      "longitude": -8.031543,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 83,
      "squawk": "3216",
      "timestamp": 1699362456,
      "ems": null
    },
    {
      "latitude": 39.210663,
      "longitude": -8.029931,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 95,
      "squawk": "3216",
      "timestamp": 1699362459,
      "ems": null
    },
    {
      "latitude": 39.210438,
      "longitude": -8.028442,
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
      "heading": 105,
      "squawk": "3216",
      "timestamp": 1699362461,
      "ems": null
    },
    {
      "latitude": 39.209927,
      "longitude": -8.026978,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "3216",
      "timestamp": 1699362464,
      "ems": null
    },
    {
      "latitude": 39.209133,
      "longitude": -8.025635,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 134,
      "squawk": "3216",
      "timestamp": 1699362468,
      "ems": null
    },
    {
      "latitude": 39.208099,
      "longitude": -8.024676,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "3216",
      "timestamp": 1699362471,
      "ems": null
    },
    {
      "latitude": 39.207039,
      "longitude": -8.024109,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 166,
      "squawk": "3216",
      "timestamp": 1699362474,
      "ems": null
    },
    {
      "latitude": 39.205502,
      "longitude": -8.023987,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 181,
      "squawk": "3216",
      "timestamp": 1699362477,
      "ems": null
    },
    {
      "latitude": 39.204163,
      "longitude": -8.024438,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3216",
      "timestamp": 1699362480,
      "ems": null
    },
    {
      "latitude": 39.203201,
      "longitude": -8.025154,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699362483,
      "ems": null
    },
    {
      "latitude": 39.202011,
      "longitude": -8.026123,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699362486,
      "ems": null
    },
    {
      "latitude": 39.200848,
      "longitude": -8.026978,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362489,
      "ems": null
    },
    {
      "latitude": 39.199951,
      "longitude": -8.027602,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699362492,
      "ems": null
    },
    {
      "latitude": 39.198799,
      "longitude": -8.028442,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362495,
      "ems": null
    },
    {
      "latitude": 39.197708,
      "longitude": -8.029215,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699362498,
      "ems": null
    },
    {
      "latitude": 39.196472,
      "longitude": -8.030169,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 212,
      "squawk": "3216",
      "timestamp": 1699362501,
      "ems": null
    },
    {
      "latitude": 39.195496,
      "longitude": -8.031067,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699362504,
      "ems": null
    },
    {
      "latitude": 39.19455,
      "longitude": -8.032141,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 222,
      "squawk": "3216",
      "timestamp": 1699362507,
      "ems": null
    },
    {
      "latitude": 39.193726,
      "longitude": -8.033203,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "3216",
      "timestamp": 1699362510,
      "ems": null
    },
    {
      "latitude": 39.192993,
      "longitude": -8.03417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "3216",
      "timestamp": 1699362513,
      "ems": null
    },
    {
      "latitude": 39.192215,
      "longitude": -8.035186,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "3216",
      "timestamp": 1699362516,
      "ems": null
    },
    {
      "latitude": 39.191399,
      "longitude": -8.036255,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "3216",
      "timestamp": 1699362519,
      "ems": null
    },
    {
      "latitude": 39.190659,
      "longitude": -8.037215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "3216",
      "timestamp": 1699362522,
      "ems": null
    },
    {
      "latitude": 39.189972,
      "longitude": -8.038111,
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
      "heading": 226,
      "squawk": "3216",
      "timestamp": 1699362525,
      "ems": null
    },
    {
      "latitude": 39.189163,
      "longitude": -8.039185,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 226,
      "squawk": "3216",
      "timestamp": 1699362528,
      "ems": null
    },
    {
      "latitude": 39.188507,
      "longitude": -8.040082,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 226,
      "squawk": "3216",
      "timestamp": 1699362531,
      "ems": null
    },
    {
      "latitude": 39.187675,
      "longitude": -8.041138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "3216",
      "timestamp": 1699362534,
      "ems": null
    },
    {
      "latitude": 39.18623,
      "longitude": -8.042969,
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
      "heading": 222,
      "squawk": "3216",
      "timestamp": 1699362540,
      "ems": null
    },
    {
      "latitude": 39.18544,
      "longitude": -8.043843,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699362543,
      "ems": null
    },
    {
      "latitude": 39.183243,
      "longitude": -8.046291,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699362553,
      "ems": null
    },
    {
      "latitude": 39.18251,
      "longitude": -8.047068,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699362556,
      "ems": null
    },
    {
      "latitude": 39.1819,
      "longitude": -8.047791,
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
      "heading": 220,
      "squawk": "3216",
      "timestamp": 1699362559,
      "ems": null
    },
    {
      "latitude": 39.181183,
      "longitude": -8.04856,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "3216",
      "timestamp": 1699362562,
      "ems": null
    },
    {
      "latitude": 39.180496,
      "longitude": -8.049217,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699362564,
      "ems": null
    },
    {
      "latitude": 39.179672,
      "longitude": -8.050113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "3216",
      "timestamp": 1699362568,
      "ems": null
    },
    {
      "latitude": 39.177387,
      "longitude": -8.052246,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "3216",
      "timestamp": 1699362576,
      "ems": null
    },
    {
      "latitude": 39.176605,
      "longitude": -8.052979,
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
      "heading": 214,
      "squawk": "3216",
      "timestamp": 1699362579,
      "ems": null
    },
    {
      "latitude": 39.174179,
      "longitude": -8.055427,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 224,
      "squawk": "3216",
      "timestamp": 1699362589,
      "ems": null
    },
    {
      "latitude": 39.173538,
      "longitude": -8.056441,
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
      "heading": 238,
      "squawk": "3216",
      "timestamp": 1699362592,
      "ems": null
    },
    {
      "latitude": 39.173103,
      "longitude": -8.057556,
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
      "heading": 244,
      "squawk": "3216",
      "timestamp": 1699362595,
      "ems": null
    },
    {
      "latitude": 39.172871,
      "longitude": -8.058655,
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
      "heading": 255,
      "squawk": "3216",
      "timestamp": 1699362597,
      "ems": null
    },
    {
      "latitude": 39.172871,
      "longitude": -8.060303,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 275,
      "squawk": "3216",
      "timestamp": 1699362601,
      "ems": null
    },
    {
      "latitude": 39.173149,
      "longitude": -8.061584,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3216",
      "timestamp": 1699362604,
      "ems": null
    },
    {
      "latitude": 39.173615,
      "longitude": -8.062805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "3216",
      "timestamp": 1699362607,
      "ems": null
    },
    {
      "latitude": 39.174034,
      "longitude": -8.063721,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3216",
      "timestamp": 1699362609,
      "ems": null
    },
    {
      "latitude": 39.174545,
      "longitude": -8.065002,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699362612,
      "ems": null
    },
    {
      "latitude": 39.17514,
      "longitude": -8.066353,
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
      "heading": 298,
      "squawk": "3216",
      "timestamp": 1699362616,
      "ems": null
    },
    {
      "latitude": 39.17569,
      "longitude": -8.067548,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 300,
      "squawk": "3216",
      "timestamp": 1699362619,
      "ems": null
    },
    {
      "latitude": 39.176174,
      "longitude": -8.068604,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "3216",
      "timestamp": 1699362622,
      "ems": null
    },
    {
      "latitude": 39.176781,
      "longitude": -8.069641,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "3216",
      "timestamp": 1699362625,
      "ems": null
    },
    {
      "latitude": 39.177387,
      "longitude": -8.070618,
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
      "heading": 309,
      "squawk": "3216",
      "timestamp": 1699362628,
      "ems": null
    },
    {
      "latitude": 39.178085,
      "longitude": -8.071472,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 319,
      "squawk": "3216",
      "timestamp": 1699362631,
      "ems": null
    },
    {
      "latitude": 39.17894,
      "longitude": -8.072145,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 333,
      "squawk": "3216",
      "timestamp": 1699362634,
      "ems": null
    },
    {
      "latitude": 39.17981,
      "longitude": -8.072503,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 343,
      "squawk": "3216",
      "timestamp": 1699362637,
      "ems": null
    },
    {
      "latitude": 39.180771,
      "longitude": -8.072742,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 352,
      "squawk": "3216",
      "timestamp": 1699362640,
      "ems": null
    },
    {
      "latitude": 39.181717,
      "longitude": -8.072754,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 352,
      "squawk": "3216",
      "timestamp": 1699362643,
      "ems": null
    },
    {
      "latitude": 39.182648,
      "longitude": -8.072693,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 5,
      "squawk": "3216",
      "timestamp": 1699362646,
      "ems": null
    },
    {
      "latitude": 39.183762,
      "longitude": -8.072449,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 9,
      "squawk": "3216",
      "timestamp": 1699362649,
      "ems": null
    },
    {
      "latitude": 39.184845,
      "longitude": -8.072205,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 11,
      "squawk": "3216",
      "timestamp": 1699362652,
      "ems": null
    },
    {
      "latitude": 39.18586,
      "longitude": -8.071899,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 13,
      "squawk": "3216",
      "timestamp": 1699362655,
      "ems": null
    },
    {
      "latitude": 39.186813,
      "longitude": -8.071548,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 18,
      "squawk": "3216",
      "timestamp": 1699362659,
      "ems": null
    },
    {
      "latitude": 39.187908,
      "longitude": -8.071045,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 20,
      "squawk": "3216",
      "timestamp": 1699362661,
      "ems": null
    },
    {
      "latitude": 39.188976,
      "longitude": -8.070557,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 20,
      "squawk": "3216",
      "timestamp": 1699362664,
      "ems": null
    },
    {
      "latitude": 39.190094,
      "longitude": -8.069946,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699362668,
      "ems": null
    },
    {
      "latitude": 39.190979,
      "longitude": -8.069458,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "3216",
      "timestamp": 1699362671,
      "ems": null
    },
    {
      "latitude": 39.191757,
      "longitude": -8.06904,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699362673,
      "ems": null
    },
    {
      "latitude": 39.192097,
      "longitude": -8.068848,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699362675,
      "ems": null
    },
    {
      "latitude": 39.193539,
      "longitude": -8.068054,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "3216",
      "timestamp": 1699362680,
      "ems": null
    },
    {
      "latitude": 39.194332,
      "longitude": -8.067627,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362682,
      "ems": null
    },
    {
      "latitude": 39.195374,
      "longitude": -8.06701,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362687,
      "ems": null
    }
    ,
    {
      "latitude": 39.219189,
      "longitude": -8.053406,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699362776,
      "ems": null
    },
    {
      "latitude": 39.222107,
      "longitude": -8.051665,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699362785,
      "ems": null
    },
    {
      "latitude": 39.224854,
      "longitude": -8.050113,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 23,
      "squawk": "3216",
      "timestamp": 1699362794,
      "ems": null
    },
    {
      "latitude": 39.227707,
      "longitude": -8.048645,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 20,
      "squawk": "3216",
      "timestamp": 1699362804,
      "ems": null
    },
    {
      "latitude": 39.229664,
      "longitude": -8.047729,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 18,
      "squawk": "3216",
      "timestamp": 1699362810,
      "ems": null
    },
    {
      "latitude": 39.230667,
      "longitude": -8.047306,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 18,
      "squawk": "3216",
      "timestamp": 1699362812,
      "ems": null
    },
    {
      "latitude": 39.231758,
      "longitude": -8.046875,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 16,
      "squawk": "3216",
      "timestamp": 1699362816,
      "ems": null
    },
    {
      "latitude": 39.232643,
      "longitude": -8.046509,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3216",
      "timestamp": 1699362818,
      "ems": null
    },
    {
      "latitude": 39.233643,
      "longitude": -8.04635,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 3,
      "squawk": "3216",
      "timestamp": 1699362821,
      "ems": null
    },
    {
      "latitude": 39.234646,
      "longitude": -8.04657,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 346,
      "squawk": "3216",
      "timestamp": 1699362824,
      "ems": null
    },
    {
      "latitude": 39.235481,
      "longitude": -8.047058,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 331,
      "squawk": "3216",
      "timestamp": 1699362828,
      "ems": null
    },
    {
      "latitude": 39.236206,
      "longitude": -8.047784,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 316,
      "squawk": "3216",
      "timestamp": 1699362831,
      "ems": null
    },
    {
      "latitude": 39.236801,
      "longitude": -8.048859,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 301,
      "squawk": "3216",
      "timestamp": 1699362834,
      "ems": null
    },
    {
      "latitude": 39.237167,
      "longitude": -8.049933,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 291,
      "squawk": "3216",
      "timestamp": 1699362837,
      "ems": null
    },
    {
      "latitude": 39.237484,
      "longitude": -8.051025,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 291,
      "squawk": "3216",
      "timestamp": 1699362840,
      "ems": null
    },
    {
      "latitude": 39.237854,
      "longitude": -8.052142,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 293,
      "squawk": "3216",
      "timestamp": 1699362843,
      "ems": null
    },
    {
      "latitude": 39.238266,
      "longitude": -8.053277,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 295,
      "squawk": "3216",
      "timestamp": 1699362846,
      "ems": null
    },
    {
      "latitude": 39.238743,
      "longitude": -8.054382,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 297,
      "squawk": "3216",
      "timestamp": 1699362849,
      "ems": null
    },
    {
      "latitude": 39.239136,
      "longitude": -8.055427,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 295,
      "squawk": "3216",
      "timestamp": 1699362852,
      "ems": null
    },
    {
      "latitude": 39.239548,
      "longitude": -8.05674,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 292,
      "squawk": "3216",
      "timestamp": 1699362855,
      "ems": null
    },
    {
      "latitude": 39.239868,
      "longitude": -8.057935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "3216",
      "timestamp": 1699362858,
      "ems": null
    },
    {
      "latitude": 39.240189,
      "longitude": -8.059188,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "3216",
      "timestamp": 1699362861,
      "ems": null
    },
    {
      "latitude": 39.240417,
      "longitude": -8.060323,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 282,
      "squawk": "3216",
      "timestamp": 1699362864,
      "ems": null
    },
    {
      "latitude": 39.240463,
      "longitude": -8.06189,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 266,
      "squawk": "3216",
      "timestamp": 1699362867,
      "ems": null
    },
    {
      "latitude": 39.240189,
      "longitude": -8.063249,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "3216",
      "timestamp": 1699362870,
      "ems": null
    },
    {
      "latitude": 39.239628,
      "longitude": -8.064575,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "3216",
      "timestamp": 1699362873,
      "ems": null
    },
    {
      "latitude": 39.238907,
      "longitude": -8.065577,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 224,
      "squawk": "3216",
      "timestamp": 1699362876,
      "ems": null
    },
    {
      "latitude": 39.238037,
      "longitude": -8.066413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "3216",
      "timestamp": 1699362879,
      "ems": null
    },
    {
      "latitude": 39.237122,
      "longitude": -8.06701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3216",
      "timestamp": 1699362882,
      "ems": null
    },
    {
      "latitude": 39.236023,
      "longitude": -8.067607,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "3216",
      "timestamp": 1699362885,
      "ems": null
    },
    {
      "latitude": 39.23497,
      "longitude": -8.068176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "3216",
      "timestamp": 1699362888,
      "ems": null
    },
    {
      "latitude": 39.233948,
      "longitude": -8.068665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3216",
      "timestamp": 1699362891,
      "ems": null
    },
    {
      "latitude": 39.232876,
      "longitude": -8.069214,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3216",
      "timestamp": 1699362894,
      "ems": null
    },
    {
      "latitude": 39.231766,
      "longitude": -8.069817,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "3216",
      "timestamp": 1699362898,
      "ems": null
    },
    {
      "latitude": 39.230923,
      "longitude": -8.070251,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362900,
      "ems": null
    },
    {
      "latitude": 39.229706,
      "longitude": -8.070951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "3216",
      "timestamp": 1699362904,
      "ems": null
    },
    {
      "latitude": 39.228882,
      "longitude": -8.071548,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3216",
      "timestamp": 1699362906,
      "ems": null
    },
    {
      "latitude": 39.225906,
      "longitude": -8.073518,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362916,
      "ems": null
    },
    {
      "latitude": 39.224854,
      "longitude": -8.074294,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699362919,
      "ems": null
    },
    {
      "latitude": 39.22403,
      "longitude": -8.074951,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "3216",
      "timestamp": 1699362922,
      "ems": null
    },
    {
      "latitude": 39.22316,
      "longitude": -8.075608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3216",
      "timestamp": 1699362924,
      "ems": null
    },
    {
      "latitude": 39.222122,
      "longitude": -8.076355,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362928,
      "ems": null
    },
    {
      "latitude": 39.219284,
      "longitude": -8.078308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "3216",
      "timestamp": 1699362936,
      "ems": null
    },
    {
      "latitude": 39.216568,
      "longitude": -8.080206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3216",
      "timestamp": 1699362946,
      "ems": null
    },
    {
      "latitude": 39.215881,
      "longitude": -8.080683,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "3216",
      "timestamp": 1699362948,
      "ems": null
    },
    {
      "latitude": 39.212906,
      "longitude": -8.082642,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "3216",
      "timestamp": 1699362958,
      "ems": null
    },
    {
      "latitude": 39.210346,
      "longitude": -8.084351,
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
      "heading": 206,
      "squawk": "3216",
      "timestamp": 1699362966,
      "ems": null
    },
    {
      "latitude": 39.207691,
      "longitude": -8.086121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3216",
      "timestamp": 1699362976,
      "ems": null
    },
    {
      "latitude": 39.205627,
      "longitude": -8.087251,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 197,
      "squawk": "3216",
      "timestamp": 1699362982,
      "ems": null
    },
    {
      "latitude": 39.204666,
      "longitude": -8.08749,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "3216",
      "timestamp": 1699362985,
      "ems": null
    },
    {
      "latitude": 39.203796,
      "longitude": -8.087549,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "3216",
      "timestamp": 1699362987,
      "ems": null
    },
    {
      "latitude": 39.202618,
      "longitude": -8.087341,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 169,
      "squawk": "3216",
      "timestamp": 1699362991,
      "ems": null
    },
    {
      "latitude": 39.201599,
      "longitude": -8.086952,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 159,
      "squawk": "3216",
      "timestamp": 1699362994,
      "ems": null
    },
    {
      "latitude": 39.200592,
      "longitude": -8.086355,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 153,
      "squawk": "3216",
      "timestamp": 1699362997,
      "ems": null
    },
    {
      "latitude": 39.199722,
      "longitude": -8.085639,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "3216",
      "timestamp": 1699363000,
      "ems": null
    },
    {
      "latitude": 39.198895,
      "longitude": -8.084717,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 137,
      "squawk": "3216",
      "timestamp": 1699363003,
      "ems": null
    },
    {
      "latitude": 39.198334,
      "longitude": -8.083984,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 134,
      "squawk": "3216",
      "timestamp": 1699363005,
      "ems": null
    },
    {
      "latitude": 39.197495,
      "longitude": -8.082825,
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
      "heading": 131,
      "squawk": "3216",
      "timestamp": 1699363009,
      "ems": null
    },
    {
      "latitude": 39.196884,
      "longitude": -8.081818,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 121,
      "squawk": "3216",
      "timestamp": 1699363012,
      "ems": null
    },
    {
      "latitude": 39.196564,
      "longitude": -8.081041,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 118,
      "squawk": "3216",
      "timestamp": 1699363014,
      "ems": null
    },
    {
      "latitude": 39.195915,
      "longitude": -8.079346,
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
      "heading": 114,
      "squawk": "3216",
      "timestamp": 1699363019,
      "ems": null
    },
    {
      "latitude": 39.195511,
      "longitude": -8.078056,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 112,
      "squawk": "3216",
      "timestamp": 1699363022,
      "ems": null
    },
    {
      "latitude": 39.195168,
      "longitude": -8.076965,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "3216",
      "timestamp": 1699363024,
      "ems": null
    },
    {
      "latitude": 39.19487,
      "longitude": -8.075667,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 106,
      "squawk": "3216",
      "timestamp": 1699363027,
      "ems": null
    },
    {
      "latitude": 39.194611,
      "longitude": -8.074158,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 98,
      "squawk": "3216",
      "timestamp": 1699363031,
      "ems": null
    },
    {
      "latitude": 39.194565,
      "longitude": -8.072937,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 91,
      "squawk": "3216",
      "timestamp": 1699363033,
      "ems": null
    },
    {
      "latitude": 39.194611,
      "longitude": -8.072021,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 84,
      "squawk": "3216",
      "timestamp": 1699363035,
      "ems": null
    },
    {
      "latitude": 39.194962,
      "longitude": -8.070473,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 84,
      "squawk": "3216",
      "timestamp": 1699363038,
      "ems": null
    },
    {
      "latitude": 39.195633,
      "longitude": -8.068787,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 84,
      "squawk": "3216",
      "timestamp": 1699363042,
      "ems": null
    },
    {
      "latitude": 39.196148,
      "longitude": -8.06781,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 55,
      "squawk": "3216",
      "timestamp": 1699363045,
      "ems": null
    },
    {
      "latitude": 39.196838,
      "longitude": -8.066831,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "3216",
      "timestamp": 1699363048,
      "ems": null
    },
    {
      "latitude": 39.197914,
      "longitude": -8.065735,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 32,
      "squawk": "3216",
      "timestamp": 1699363052,
      "ems": null
    },
    {
      "latitude": 39.198986,
      "longitude": -8.065063,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699363056,
      "ems": null
    },
    {
      "latitude": 39.199593,
      "longitude": -8.064697,
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
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699363059,
      "ems": null
    },
    {
      "latitude": 39.200592,
      "longitude": -8.064144,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 25,
      "squawk": "3216",
      "timestamp": 1699363062,
      "ems": null
    },
    {
      "latitude": 39.201313,
      "longitude": -8.06366,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 24,
      "squawk": "3216",
      "timestamp": 1699363065,
      "ems": null
    }
  ],
};