import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220219EDLWEDKB",
    callsign: "DEFCZ",
    name: "300NM third leg - 43",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 19, 15, 45).getTime(),
    arrival: new Date(2022, 1, 19, 16, 45).getTime(),
    singleEnginePistonTime: 60,
    picTime: 60,
    dualTime: 0,
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
      registration: "D-EFCZ",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      "name": "Dortmund Airport",
      "code": "EDLW",
      "position": {
        "latitude": 51.518311,
        "longitude": 7.612242,
      }
    },
    destination: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      }
    },
  },
  track: [
    {
      "latitude": 50.769562,
      "longitude": 7.160414,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 291,
      "squawk": "0",
      "timestamp": 1645270246,
      "ems": null
    },
    {
      "latitude": 50.770058,
      "longitude": 7.158508,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 292,
      "squawk": "0",
      "timestamp": 1645270254,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.155991,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 284,
      "squawk": "0",
      "timestamp": 1645270262,
      "ems": null
    },
    {
      "latitude": 50.770756,
      "longitude": 7.154846,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 277,
      "squawk": "0",
      "timestamp": 1645270266,
      "ems": null
    },
    {
      "latitude": 50.770847,
      "longitude": 7.15332,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "0",
      "timestamp": 1645270270,
      "ems": null
    },
    {
      "latitude": 50.770847,
      "longitude": 7.151947,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 272,
      "squawk": "0",
      "timestamp": 1645270274,
      "ems": null
    },
    {
      "latitude": 50.770889,
      "longitude": 7.151061,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 273,
      "squawk": "0",
      "timestamp": 1645270276,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.149963,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "0",
      "timestamp": 1645270279,
      "ems": null
    },
    {
      "latitude": 50.770988,
      "longitude": 7.148361,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 274,
      "squawk": "0",
      "timestamp": 1645270283,
      "ems": null
    },
    {
      "latitude": 50.771072,
      "longitude": 7.1472,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 273,
      "squawk": "0",
      "timestamp": 1645270285,
      "ems": null
    },
    {
      "latitude": 50.771072,
      "longitude": 7.146087,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 272,
      "squawk": "0",
      "timestamp": 1645270288,
      "ems": null
    },
    {
      "latitude": 50.771175,
      "longitude": 7.143555,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1645270294,
      "ems": null
    },
    {
      "latitude": 50.771126,
      "longitude": 7.141113,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1645270300,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.139969,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1645270303,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.13896,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645270306,
      "ems": null
    },
    {
      "latitude": 50.770065,
      "longitude": 7.137921,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1645270309,
      "ems": null
    },
    {
      "latitude": 50.769562,
      "longitude": 7.137031,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1645270312,
      "ems": null
    },
    {
      "latitude": 50.769127,
      "longitude": 7.13623,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1645270315,
      "ems": null
    },
    {
      "latitude": 50.768555,
      "longitude": 7.135249,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1645270318,
      "ems": null
    },
    {
      "latitude": 50.768009,
      "longitude": 7.134552,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1645270321,
      "ems": null
    },
    {
      "latitude": 50.767181,
      "longitude": 7.133542,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1645270324,
      "ems": null
    },
    {
      "latitude": 50.766678,
      "longitude": 7.132948,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1645270327,
      "ems": null
    },
    {
      "latitude": 50.765991,
      "longitude": 7.132205,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1645270330,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.131389,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1645270333,
      "ems": null
    },
    {
      "latitude": 50.764481,
      "longitude": 7.130721,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1645270336,
      "ems": null
    },
    {
      "latitude": 50.763794,
      "longitude": 7.129979,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1645270339,
      "ems": null
    },
    {
      "latitude": 50.763073,
      "longitude": 7.129211,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1645270342,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.128568,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1645270345,
      "ems": null
    },
    {
      "latitude": 50.761688,
      "longitude": 7.127974,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1645270348,
      "ems": null
    },
    {
      "latitude": 50.76091,
      "longitude": 7.127306,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1645270351,
      "ems": null
    },
    {
      "latitude": 50.760326,
      "longitude": 7.12677,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1645270354,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.126193,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1645270357,
      "ems": null
    },
    {
      "latitude": 50.759033,
      "longitude": 7.125822,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1645270360,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.125092,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1645270363,
      "ems": null
    },
    {
      "latitude": 50.757156,
      "longitude": 7.124559,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1645270367,
      "ems": null
    },
    {
      "latitude": 50.756416,
      "longitude": 7.1241,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1645270370,
      "ems": null
    },
    {
      "latitude": 50.755627,
      "longitude": 7.123642,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1645270373,
      "ems": null
    },
    {
      "latitude": 50.754879,
      "longitude": 7.123108,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1645270376,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.122555,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1645270379,
      "ems": null
    },
    {
      "latitude": 50.753204,
      "longitude": 7.122116,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1645270382,
      "ems": null
    },
    {
      "latitude": 50.75235,
      "longitude": 7.121665,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1645270385,
      "ems": null
    },
    {
      "latitude": 50.750793,
      "longitude": 7.120699,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1645270391,
      "ems": null
    },
    {
      "latitude": 50.750088,
      "longitude": 7.120285,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1645270393,
      "ems": null
    },
    {
      "latitude": 50.749237,
      "longitude": 7.119883,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1645270396,
      "ems": null
    },
    {
      "latitude": 50.748367,
      "longitude": 7.119586,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1645270399,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.119446,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1645270402,
      "ems": null
    },
    {
      "latitude": 50.746502,
      "longitude": 7.119293,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1645270405,
      "ems": null
    },
    {
      "latitude": 50.74543,
      "longitude": 7.119293,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1645270409,
      "ems": null
    },
    {
      "latitude": 50.744595,
      "longitude": 7.119293,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1645270411,
      "ems": null
    },
    {
      "latitude": 50.743382,
      "longitude": 7.119675,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1645270415,
      "ems": null
    },
    {
      "latitude": 50.742325,
      "longitude": 7.120106,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1645270417,
      "ems": null
    },
    {
      "latitude": 50.741287,
      "longitude": 7.120667,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1645270420,
      "ems": null
    },
    {
      "latitude": 50.740173,
      "longitude": 7.121442,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1645270423,
      "ems": null
    },
    {
      "latitude": 50.739029,
      "longitude": 7.122333,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1645270427,
      "ems": null
    },
    {
      "latitude": 50.737984,
      "longitude": 7.12326,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1645270430,
      "ems": null
    },
    {
      "latitude": 50.736866,
      "longitude": 7.124176,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1645270433,
      "ems": null
    },
    {
      "latitude": 50.735779,
      "longitude": 7.125154,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1645270436,
      "ems": null
    },
    {
      "latitude": 50.734634,
      "longitude": 7.126119,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1645270439,
      "ems": null
    },
    {
      "latitude": 50.73349,
      "longitude": 7.127009,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1645270442,
      "ems": null
    },
    {
      "latitude": 50.732258,
      "longitude": 7.127991,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1645270445,
      "ems": null
    },
    {
      "latitude": 50.731327,
      "longitude": 7.128754,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1645270448,
      "ems": null
    },
    {
      "latitude": 50.72858,
      "longitude": 7.130737,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1645270454,
      "ems": null
    },
    {
      "latitude": 50.726349,
      "longitude": 7.132725,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1645270460,
      "ems": null
    },
    {
      "latitude": 50.723969,
      "longitude": 7.134705,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1645270466,
      "ems": null
    },
    {
      "latitude": 50.721588,
      "longitude": 7.136659,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1645270472,
      "ems": null
    },
    {
      "latitude": 50.719437,
      "longitude": 7.138738,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1645270478,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 7.140045,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1645270481,
      "ems": null
    },
    {
      "latitude": 50.717312,
      "longitude": 7.141266,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1645270484,
      "ems": null
    },
    {
      "latitude": 50.716244,
      "longitude": 7.142639,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1645270487,
      "ems": null
    },
    {
      "latitude": 50.715218,
      "longitude": 7.143936,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1645270490,
      "ems": null
    },
    {
      "latitude": 50.714146,
      "longitude": 7.145462,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1645270493,
      "ems": null
    },
    {
      "latitude": 50.713169,
      "longitude": 7.146835,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1645270496,
      "ems": null
    },
    {
      "latitude": 50.712158,
      "longitude": 7.14824,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1645270499,
      "ems": null
    },
    {
      "latitude": 50.711166,
      "longitude": 7.149734,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1645270502,
      "ems": null
    },
    {
      "latitude": 50.710236,
      "longitude": 7.151061,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1645270505,
      "ems": null
    },
    {
      "latitude": 50.708237,
      "longitude": 7.153702,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270511,
      "ems": null
    },
    {
      "latitude": 50.706142,
      "longitude": 7.156372,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645270517,
      "ems": null
    },
    {
      "latitude": 50.704185,
      "longitude": 7.158966,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270523,
      "ems": null
    },
    {
      "latitude": 50.702087,
      "longitude": 7.161601,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270529,
      "ems": null
    },
    {
      "latitude": 50.700989,
      "longitude": 7.162938,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270532,
      "ems": null
    },
    {
      "latitude": 50.698833,
      "longitude": 7.165604,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645270538,
      "ems": null
    },
    {
      "latitude": 50.696831,
      "longitude": 7.168045,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270544,
      "ems": null
    },
    {
      "latitude": 50.694969,
      "longitude": 7.170258,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645270550,
      "ems": null
    },
    {
      "latitude": 50.69252,
      "longitude": 7.173404,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645270556,
      "ems": null
    },
    {
      "latitude": 50.690311,
      "longitude": 7.176361,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645270562,
      "ems": null
    },
    {
      "latitude": 50.688313,
      "longitude": 7.178879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645270568,
      "ems": null
    },
    {
      "latitude": 50.685883,
      "longitude": 7.181792,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645270574,
      "ems": null
    },
    {
      "latitude": 50.683502,
      "longitude": 7.184316,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270580,
      "ems": null
    },
    {
      "latitude": 50.682446,
      "longitude": 7.185364,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270583,
      "ems": null
    },
    {
      "latitude": 50.681213,
      "longitude": 7.186543,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270586,
      "ems": null
    },
    {
      "latitude": 50.680023,
      "longitude": 7.187729,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270589,
      "ems": null
    },
    {
      "latitude": 50.678768,
      "longitude": 7.189026,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645270592,
      "ems": null
    },
    {
      "latitude": 50.677509,
      "longitude": 7.190323,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645270595,
      "ems": null
    },
    {
      "latitude": 50.676361,
      "longitude": 7.191517,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270598,
      "ems": null
    },
    {
      "latitude": 50.675182,
      "longitude": 7.192688,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270601,
      "ems": null
    },
    {
      "latitude": 50.672974,
      "longitude": 7.194783,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270607,
      "ems": null
    },
    {
      "latitude": 50.670387,
      "longitude": 7.197084,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645270613,
      "ems": null
    },
    {
      "latitude": 50.667938,
      "longitude": 7.19908,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645270619,
      "ems": null
    },
    {
      "latitude": 50.666748,
      "longitude": 7.200092,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270622,
      "ems": null
    },
    {
      "latitude": 50.665501,
      "longitude": 7.201093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270625,
      "ems": null
    },
    {
      "latitude": 50.663269,
      "longitude": 7.202984,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270631,
      "ems": null
    },
    {
      "latitude": 50.662289,
      "longitude": 7.203691,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645270634,
      "ems": null
    },
    {
      "latitude": 50.660522,
      "longitude": 7.204718,
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645270637,
      "ems": null
    },
    {
      "latitude": 50.659195,
      "longitude": 7.205369,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645270640,
      "ems": null
    },
    {
      "latitude": 50.657867,
      "longitude": 7.205947,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645270643,
      "ems": null
    },
    {
      "latitude": 50.65654,
      "longitude": 7.206525,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645270646,
      "ems": null
    },
    {
      "latitude": 50.655258,
      "longitude": 7.207031,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645270649,
      "ems": null
    },
    {
      "latitude": 50.653721,
      "longitude": 7.207625,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645270652,
      "ems": null
    },
    {
      "latitude": 50.652695,
      "longitude": 7.208116,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645270655,
      "ems": null
    },
    {
      "latitude": 50.651257,
      "longitude": 7.208887,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645270658,
      "ems": null
    },
    {
      "latitude": 50.648575,
      "longitude": 7.210718,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645270664,
      "ems": null
    },
    {
      "latitude": 50.64592,
      "longitude": 7.21238,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645270670,
      "ems": null
    },
    {
      "latitude": 50.643341,
      "longitude": 7.213638,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645270676,
      "ems": null
    },
    {
      "latitude": 50.640564,
      "longitude": 7.21491,
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645270682,
      "ems": null
    },
    {
      "latitude": 50.637894,
      "longitude": 7.216384,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645270688,
      "ems": null
    },
    {
      "latitude": 50.635429,
      "longitude": 7.218389,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270694,
      "ems": null
    },
    {
      "latitude": 50.634495,
      "longitude": 7.219205,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270697,
      "ems": null
    },
    {
      "latitude": 50.633102,
      "longitude": 7.220475,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270700,
      "ems": null
    },
    {
      "latitude": 50.631935,
      "longitude": 7.221507,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270703,
      "ems": null
    },
    {
      "latitude": 50.630905,
      "longitude": 7.222499,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270706,
      "ems": null
    },
    {
      "latitude": 50.629852,
      "longitude": 7.223438,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270709,
      "ems": null
    },
    {
      "latitude": 50.628479,
      "longitude": 7.22474,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270712,
      "ems": null
    },
    {
      "latitude": 50.627335,
      "longitude": 7.225824,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270715,
      "ems": null
    },
    {
      "latitude": 50.626694,
      "longitude": 7.226474,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270718,
      "ems": null
    },
    {
      "latitude": 50.623093,
      "longitude": 7.230117,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645270727,
      "ems": null
    },
    {
      "latitude": 50.62151,
      "longitude": 7.231825,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645270731,
      "ems": null
    },
    {
      "latitude": 50.620251,
      "longitude": 7.233309,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645270735,
      "ems": null
    },
    {
      "latitude": 50.617172,
      "longitude": 7.236593,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270743,
      "ems": null
    },
    {
      "latitude": 50.613968,
      "longitude": 7.239619,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270751,
      "ems": null
    },
    {
      "latitude": 50.612686,
      "longitude": 7.240785,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270755,
      "ems": null
    },
    {
      "latitude": 50.612,
      "longitude": 7.241364,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270759,
      "ems": null
    },
    {
      "latitude": 50.609032,
      "longitude": 7.243628,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270763,
      "ems": null
    },
    {
      "latitude": 50.60759,
      "longitude": 7.244741,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645270767,
      "ems": null
    },
    {
      "latitude": 50.605915,
      "longitude": 7.245929,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270771,
      "ems": null
    },
    {
      "latitude": 50.604099,
      "longitude": 7.247414,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270775,
      "ems": null
    },
    {
      "latitude": 50.600838,
      "longitude": 7.249938,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270783,
      "ems": null
    },
    {
      "latitude": 50.597443,
      "longitude": 7.252711,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270791,
      "ems": null
    },
    {
      "latitude": 50.59639,
      "longitude": 7.253651,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270793,
      "ems": null
    },
    {
      "latitude": 50.59544,
      "longitude": 7.254539,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270796,
      "ems": null
    },
    {
      "latitude": 50.594181,
      "longitude": 7.255727,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270800,
      "ems": null
    },
    {
      "latitude": 50.592636,
      "longitude": 7.257265,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270803,
      "ems": null
    },
    {
      "latitude": 50.591576,
      "longitude": 7.258326,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645270805,
      "ems": null
    },
    {
      "latitude": 50.590317,
      "longitude": 7.259662,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270808,
      "ems": null
    },
    {
      "latitude": 50.589294,
      "longitude": 7.260627,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645270811,
      "ems": null
    },
    {
      "latitude": 50.588333,
      "longitude": 7.261674,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645270814,
      "ems": null
    },
    {
      "latitude": 50.585197,
      "longitude": 7.264709,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270822,
      "ems": null
    },
    {
      "latitude": 50.582428,
      "longitude": 7.267239,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645270830,
      "ems": null
    },
    {
      "latitude": 50.580822,
      "longitude": 7.268569,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645270833,
      "ems": null
    },
    {
      "latitude": 50.57975,
      "longitude": 7.269386,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270836,
      "ems": null
    },
    {
      "latitude": 50.578262,
      "longitude": 7.270574,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270839,
      "ems": null
    },
    {
      "latitude": 50.577026,
      "longitude": 7.271503,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270842,
      "ems": null
    },
    {
      "latitude": 50.575974,
      "longitude": 7.272226,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270845,
      "ems": null
    },
    {
      "latitude": 50.574909,
      "longitude": 7.273024,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270848,
      "ems": null
    },
    {
      "latitude": 50.573502,
      "longitude": 7.274034,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645270850,
      "ems": null
    },
    {
      "latitude": 50.572449,
      "longitude": 7.274828,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645270854,
      "ems": null
    },
    {
      "latitude": 50.569229,
      "longitude": 7.277181,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270860,
      "ems": null
    },
    {
      "latitude": 50.567696,
      "longitude": 7.278368,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645270864,
      "ems": null
    },
    {
      "latitude": 50.56411,
      "longitude": 7.281115,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270872,
      "ems": null
    },
    {
      "latitude": 50.560867,
      "longitude": 7.283574,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270880,
      "ems": null
    },
    {
      "latitude": 50.55764,
      "longitude": 7.286237,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645270887,
      "ems": null
    },
    {
      "latitude": 50.555099,
      "longitude": 7.288417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645270893,
      "ems": null
    },
    {
      "latitude": 50.553864,
      "longitude": 7.289573,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270896,
      "ems": null
    },
    {
      "latitude": 50.552845,
      "longitude": 7.290542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270898,
      "ems": null
    },
    {
      "latitude": 50.552124,
      "longitude": 7.291235,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270902,
      "ems": null
    },
    {
      "latitude": 50.550613,
      "longitude": 7.292681,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270904,
      "ems": null
    },
    {
      "latitude": 50.54805,
      "longitude": 7.294996,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270910,
      "ems": null
    },
    {
      "latitude": 50.54549,
      "longitude": 7.297149,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270917,
      "ems": null
    },
    {
      "latitude": 50.543301,
      "longitude": 7.299227,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270923,
      "ems": null
    },
    {
      "latitude": 50.541504,
      "longitude": 7.301065,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645270928,
      "ems": null
    },
    {
      "latitude": 50.538971,
      "longitude": 7.303755,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645270934,
      "ems": null
    },
    {
      "latitude": 50.538227,
      "longitude": 7.304498,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645270938,
      "ems": null
    },
    {
      "latitude": 50.536179,
      "longitude": 7.306873,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645270942,
      "ems": null
    },
    {
      "latitude": 50.534409,
      "longitude": 7.308729,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645270948,
      "ems": null
    },
    {
      "latitude": 50.533127,
      "longitude": 7.31039,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645270951,
      "ems": null
    },
    {
      "latitude": 50.532223,
      "longitude": 7.311476,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645270954,
      "ems": null
    },
    {
      "latitude": 50.530125,
      "longitude": 7.313777,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270959,
      "ems": null
    },
    {
      "latitude": 50.528545,
      "longitude": 7.315039,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645270963,
      "ems": null
    },
    {
      "latitude": 50.527378,
      "longitude": 7.316004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645270966,
      "ems": null
    },
    {
      "latitude": 50.526169,
      "longitude": 7.316967,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270970,
      "ems": null
    },
    {
      "latitude": 50.52507,
      "longitude": 7.317762,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270972,
      "ems": null
    },
    {
      "latitude": 50.523983,
      "longitude": 7.318602,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270975,
      "ems": null
    },
    {
      "latitude": 50.522724,
      "longitude": 7.319493,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645270978,
      "ems": null
    },
    {
      "latitude": 50.521637,
      "longitude": 7.320292,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645270981,
      "ems": null
    },
    {
      "latitude": 50.520306,
      "longitude": 7.321274,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645270984,
      "ems": null
    },
    {
      "latitude": 50.519028,
      "longitude": 7.322388,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645270988,
      "ems": null
    },
    {
      "latitude": 50.516693,
      "longitude": 7.324556,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645270994,
      "ems": null
    },
    {
      "latitude": 50.514393,
      "longitude": 7.326767,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645270999,
      "ems": null
    },
    {
      "latitude": 50.511879,
      "longitude": 7.32892,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271006,
      "ems": null
    },
    {
      "latitude": 50.509232,
      "longitude": 7.330844,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271012,
      "ems": null
    },
    {
      "latitude": 50.506714,
      "longitude": 7.332651,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271018,
      "ems": null
    },
    {
      "latitude": 50.504383,
      "longitude": 7.334562,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271023,
      "ems": null
    },
    {
      "latitude": 50.50177,
      "longitude": 7.336988,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271030,
      "ems": null
    },
    {
      "latitude": 50.500992,
      "longitude": 7.337855,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645271032,
      "ems": null
    },
    {
      "latitude": 50.499344,
      "longitude": 7.33959,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271036,
      "ems": null
    },
    {
      "latitude": 50.4981,
      "longitude": 7.340871,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271039,
      "ems": null
    },
    {
      "latitude": 50.496872,
      "longitude": 7.342047,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271042,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 7.343024,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271044,
      "ems": null
    },
    {
      "latitude": 50.494514,
      "longitude": 7.34436,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271047,
      "ems": null
    },
    {
      "latitude": 50.493164,
      "longitude": 7.345771,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271051,
      "ems": null
    },
    {
      "latitude": 50.490742,
      "longitude": 7.347998,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271057,
      "ems": null
    },
    {
      "latitude": 50.489395,
      "longitude": 7.349185,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271060,
      "ems": null
    },
    {
      "latitude": 50.48822,
      "longitude": 7.350215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271063,
      "ems": null
    },
    {
      "latitude": 50.486984,
      "longitude": 7.351227,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271065,
      "ems": null
    },
    {
      "latitude": 50.485855,
      "longitude": 7.352006,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271068,
      "ems": null
    },
    {
      "latitude": 50.484283,
      "longitude": 7.353034,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271072,
      "ems": null
    },
    {
      "latitude": 50.483109,
      "longitude": 7.353862,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271074,
      "ems": null
    },
    {
      "latitude": 50.481621,
      "longitude": 7.354901,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271078,
      "ems": null
    },
    {
      "latitude": 50.480362,
      "longitude": 7.355866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271081,
      "ems": null
    },
    {
      "latitude": 50.477921,
      "longitude": 7.357804,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271086,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 7.358599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271089,
      "ems": null
    },
    {
      "latitude": 50.475311,
      "longitude": 7.359539,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271092,
      "ems": null
    },
    {
      "latitude": 50.473099,
      "longitude": 7.361211,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271099,
      "ems": null
    },
    {
      "latitude": 50.47147,
      "longitude": 7.362621,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271102,
      "ems": null
    },
    {
      "latitude": 50.470306,
      "longitude": 7.363661,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271104,
      "ems": null
    },
    {
      "latitude": 50.46904,
      "longitude": 7.364815,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271108,
      "ems": null
    },
    {
      "latitude": 50.468025,
      "longitude": 7.365813,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271110,
      "ems": null
    },
    {
      "latitude": 50.466537,
      "longitude": 7.367298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271114,
      "ems": null
    },
    {
      "latitude": 50.4646,
      "longitude": 7.369152,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271119,
      "ems": null
    },
    {
      "latitude": 50.461601,
      "longitude": 7.371455,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271126,
      "ems": null
    },
    {
      "latitude": 50.459042,
      "longitude": 7.373534,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271132,
      "ems": null
    },
    {
      "latitude": 50.457733,
      "longitude": 7.374573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271135,
      "ems": null
    },
    {
      "latitude": 50.455318,
      "longitude": 7.376577,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271141,
      "ems": null
    },
    {
      "latitude": 50.452698,
      "longitude": 7.378837,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271147,
      "ems": null
    },
    {
      "latitude": 50.451591,
      "longitude": 7.379843,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271149,
      "ems": null
    },
    {
      "latitude": 50.450382,
      "longitude": 7.381031,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271153,
      "ems": null
    },
    {
      "latitude": 50.448101,
      "longitude": 7.383035,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271159,
      "ems": null
    },
    {
      "latitude": 50.445465,
      "longitude": 7.38527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271165,
      "ems": null
    },
    {
      "latitude": 50.442982,
      "longitude": 7.387563,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271171,
      "ems": null
    },
    {
      "latitude": 50.440701,
      "longitude": 7.389716,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271177,
      "ems": null
    },
    {
      "latitude": 50.438465,
      "longitude": 7.392017,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645271183,
      "ems": null
    },
    {
      "latitude": 50.436184,
      "longitude": 7.394319,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271189,
      "ems": null
    },
    {
      "latitude": 50.433701,
      "longitude": 7.396545,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271195,
      "ems": null
    },
    {
      "latitude": 50.432419,
      "longitude": 7.397485,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271198,
      "ems": null
    },
    {
      "latitude": 50.431183,
      "longitude": 7.398208,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271201,
      "ems": null
    },
    {
      "latitude": 50.429947,
      "longitude": 7.398786,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645271203,
      "ems": null
    },
    {
      "latitude": 50.428921,
      "longitude": 7.399218,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271206,
      "ems": null
    },
    {
      "latitude": 50.427155,
      "longitude": 7.400183,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271210,
      "ems": null
    },
    {
      "latitude": 50.426331,
      "longitude": 7.400665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271213,
      "ems": null
    },
    {
      "latitude": 50.424591,
      "longitude": 7.401816,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271216,
      "ems": null
    },
    {
      "latitude": 50.423244,
      "longitude": 7.402781,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271219,
      "ems": null
    },
    {
      "latitude": 50.421009,
      "longitude": 7.404562,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271224,
      "ems": null
    },
    {
      "latitude": 50.418449,
      "longitude": 7.406567,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271231,
      "ems": null
    },
    {
      "latitude": 50.417236,
      "longitude": 7.407532,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271234,
      "ems": null
    },
    {
      "latitude": 50.416168,
      "longitude": 7.408348,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271236,
      "ems": null
    },
    {
      "latitude": 50.414818,
      "longitude": 7.409388,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271240,
      "ems": null
    },
    {
      "latitude": 50.412552,
      "longitude": 7.411001,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271246,
      "ems": null
    },
    {
      "latitude": 50.409927,
      "longitude": 7.413099,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271252,
      "ems": null
    },
    {
      "latitude": 50.408844,
      "longitude": 7.414109,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271255,
      "ems": null
    },
    {
      "latitude": 50.407791,
      "longitude": 7.415121,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271258,
      "ems": null
    },
    {
      "latitude": 50.406811,
      "longitude": 7.416142,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271260,
      "ems": null
    },
    {
      "latitude": 50.404404,
      "longitude": 7.418374,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271267,
      "ems": null
    },
    {
      "latitude": 50.403214,
      "longitude": 7.41953,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271270,
      "ems": null
    },
    {
      "latitude": 50.402161,
      "longitude": 7.420542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271273,
      "ems": null
    },
    {
      "latitude": 50.400009,
      "longitude": 7.422493,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271279,
      "ems": null
    },
    {
      "latitude": 50.399082,
      "longitude": 7.423195,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271282,
      "ems": null
    },
    {
      "latitude": 50.397629,
      "longitude": 7.424084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271285,
      "ems": null
    },
    {
      "latitude": 50.396484,
      "longitude": 7.42459,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645271288,
      "ems": null
    },
    {
      "latitude": 50.395359,
      "longitude": 7.425125,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645271291,
      "ems": null
    },
    {
      "latitude": 50.394196,
      "longitude": 7.425746,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645271294,
      "ems": null
    },
    {
      "latitude": 50.393078,
      "longitude": 7.426535,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271297,
      "ems": null
    },
    {
      "latitude": 50.391998,
      "longitude": 7.427336,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271300,
      "ems": null
    },
    {
      "latitude": 50.389618,
      "longitude": 7.429432,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271306,
      "ems": null
    },
    {
      "latitude": 50.387375,
      "longitude": 7.431311,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271312,
      "ems": null
    },
    {
      "latitude": 50.386322,
      "longitude": 7.432251,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271315,
      "ems": null
    },
    {
      "latitude": 50.385223,
      "longitude": 7.433263,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271318,
      "ems": null
    },
    {
      "latitude": 50.384186,
      "longitude": 7.434255,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271321,
      "ems": null
    },
    {
      "latitude": 50.383068,
      "longitude": 7.435295,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271324,
      "ems": null
    },
    {
      "latitude": 50.382202,
      "longitude": 7.436154,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271327,
      "ems": null
    },
    {
      "latitude": 50.380966,
      "longitude": 7.437455,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271330,
      "ems": null
    },
    {
      "latitude": 50.378906,
      "longitude": 7.439551,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271336,
      "ems": null
    },
    {
      "latitude": 50.377991,
      "longitude": 7.440491,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271339,
      "ems": null
    },
    {
      "latitude": 50.375565,
      "longitude": 7.442948,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271345,
      "ems": null
    },
    {
      "latitude": 50.373569,
      "longitude": 7.444945,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271351,
      "ems": null
    },
    {
      "latitude": 50.371765,
      "longitude": 7.446128,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645271357,
      "ems": null
    },
    {
      "latitude": 50.370483,
      "longitude": 7.44649,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1645271360,
      "ems": null
    },
    {
      "latitude": 50.369244,
      "longitude": 7.446726,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1645271363,
      "ems": null
    },
    {
      "latitude": 50.368313,
      "longitude": 7.446949,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1645271366,
      "ems": null
    },
    {
      "latitude": 50.367096,
      "longitude": 7.447357,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1645271369,
      "ems": null
    },
    {
      "latitude": 50.365845,
      "longitude": 7.44784,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645271372,
      "ems": null
    },
    {
      "latitude": 50.364807,
      "longitude": 7.448297,
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645271375,
      "ems": null
    },
    {
      "latitude": 50.363655,
      "longitude": 7.448805,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271378,
      "ems": null
    },
    {
      "latitude": 50.3624,
      "longitude": 7.449473,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271381,
      "ems": null
    },
    {
      "latitude": 50.361374,
      "longitude": 7.450031,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271384,
      "ems": null
    },
    {
      "latitude": 50.36055,
      "longitude": 7.450537,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271386,
      "ems": null
    },
    {
      "latitude": 50.35936,
      "longitude": 7.451333,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271390,
      "ems": null
    },
    {
      "latitude": 50.358765,
      "longitude": 7.451694,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271393,
      "ems": null
    },
    {
      "latitude": 50.357025,
      "longitude": 7.452923,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271396,
      "ems": null
    },
    {
      "latitude": 50.356209,
      "longitude": 7.453407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645271399,
      "ems": null
    },
    {
      "latitude": 50.35524,
      "longitude": 7.454007,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271401,
      "ems": null
    },
    {
      "latitude": 50.353912,
      "longitude": 7.455452,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645271405,
      "ems": null
    },
    {
      "latitude": 50.352577,
      "longitude": 7.45749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645271410,
      "ems": null
    },
    {
      "latitude": 50.351074,
      "longitude": 7.459789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645271415,
      "ems": null
    },
    {
      "latitude": 50.349701,
      "longitude": 7.46174,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645271419,
      "ems": null
    },
    {
      "latitude": 50.348419,
      "longitude": 7.463331,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645271424,
      "ems": null
    },
    {
      "latitude": 50.346897,
      "longitude": 7.465358,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645271430,
      "ems": null
    },
    {
      "latitude": 50.344196,
      "longitude": 7.468922,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645271439,
      "ems": null
    },
    {
      "latitude": 50.341827,
      "longitude": 7.471859,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645271447,
      "ems": null
    },
    {
      "latitude": 50.339729,
      "longitude": 7.474266,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271453,
      "ems": null
    },
    {
      "latitude": 50.339127,
      "longitude": 7.474895,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271455,
      "ems": null
    },
    {
      "latitude": 50.337753,
      "longitude": 7.476124,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271460,
      "ems": null
    },
    {
      "latitude": 50.336983,
      "longitude": 7.47679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271462,
      "ems": null
    },
    {
      "latitude": 50.335739,
      "longitude": 7.477859,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271466,
      "ems": null
    },
    {
      "latitude": 50.334869,
      "longitude": 7.478581,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271468,
      "ems": null
    },
    {
      "latitude": 50.333817,
      "longitude": 7.479537,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271471,
      "ems": null
    },
    {
      "latitude": 50.332886,
      "longitude": 7.480428,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271475,
      "ems": null
    },
    {
      "latitude": 50.331848,
      "longitude": 7.481256,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271478,
      "ems": null
    },
    {
      "latitude": 50.330841,
      "longitude": 7.482051,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271480,
      "ems": null
    },
    {
      "latitude": 50.329742,
      "longitude": 7.482846,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271484,
      "ems": null
    },
    {
      "latitude": 50.328735,
      "longitude": 7.483641,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271487,
      "ems": null
    },
    {
      "latitude": 50.327682,
      "longitude": 7.484364,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271490,
      "ems": null
    },
    {
      "latitude": 50.326645,
      "longitude": 7.484956,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645271492,
      "ems": null
    },
    {
      "latitude": 50.325531,
      "longitude": 7.485592,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645271496,
      "ems": null
    },
    {
      "latitude": 50.324551,
      "longitude": 7.486144,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645271498,
      "ems": null
    },
    {
      "latitude": 50.32338,
      "longitude": 7.486749,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271502,
      "ems": null
    },
    {
      "latitude": 50.322178,
      "longitude": 7.487331,
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271505,
      "ems": null
    },
    {
      "latitude": 50.321434,
      "longitude": 7.487702,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271507,
      "ems": null
    },
    {
      "latitude": 50.320873,
      "longitude": 7.487925,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645271510,
      "ems": null
    },
    {
      "latitude": 50.31934,
      "longitude": 7.488741,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645271513,
      "ems": null
    },
    {
      "latitude": 50.316826,
      "longitude": 7.4903,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271520,
      "ems": null
    },
    {
      "latitude": 50.315277,
      "longitude": 7.491519,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271523,
      "ems": null
    },
    {
      "latitude": 50.314178,
      "longitude": 7.492531,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271526,
      "ems": null
    },
    {
      "latitude": 50.313053,
      "longitude": 7.493641,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271529,
      "ems": null
    },
    {
      "latitude": 50.312309,
      "longitude": 7.494309,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271531,
      "ems": null
    },
    {
      "latitude": 50.310913,
      "longitude": 7.495793,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271535,
      "ems": null
    },
    {
      "latitude": 50.310074,
      "longitude": 7.496684,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271538,
      "ems": null
    },
    {
      "latitude": 50.308914,
      "longitude": 7.497808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271540,
      "ems": null
    },
    {
      "latitude": 50.307861,
      "longitude": 7.498819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271543,
      "ems": null
    },
    {
      "latitude": 50.306763,
      "longitude": 7.499831,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271547,
      "ems": null
    },
    {
      "latitude": 50.305,
      "longitude": 7.501287,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271552,
      "ems": null
    },
    {
      "latitude": 50.303371,
      "longitude": 7.502549,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271558,
      "ems": null
    },
    {
      "latitude": 50.300629,
      "longitude": 7.504818,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271565,
      "ems": null
    },
    {
      "latitude": 50.298946,
      "longitude": 7.506334,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271571,
      "ems": null
    },
    {
      "latitude": 50.29628,
      "longitude": 7.508866,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271577,
      "ems": null
    },
    {
      "latitude": 50.29541,
      "longitude": 7.509749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271580,
      "ems": null
    },
    {
      "latitude": 50.294292,
      "longitude": 7.510863,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271582,
      "ems": null
    },
    {
      "latitude": 50.292389,
      "longitude": 7.512625,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271588,
      "ems": null
    },
    {
      "latitude": 50.289917,
      "longitude": 7.514871,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271595,
      "ems": null
    },
    {
      "latitude": 50.287811,
      "longitude": 7.516962,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271601,
      "ems": null
    },
    {
      "latitude": 50.285706,
      "longitude": 7.51913,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271607,
      "ems": null
    },
    {
      "latitude": 50.283493,
      "longitude": 7.521255,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271613,
      "ems": null
    },
    {
      "latitude": 50.282043,
      "longitude": 7.522744,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271617,
      "ems": null
    },
    {
      "latitude": 50.279343,
      "longitude": 7.52549,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271625,
      "ems": null
    },
    {
      "latitude": 50.276741,
      "longitude": 7.52853,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645271633,
      "ems": null
    },
    {
      "latitude": 50.273483,
      "longitude": 7.53214,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645271642,
      "ems": null
    },
    {
      "latitude": 50.270737,
      "longitude": 7.534308,
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
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271650,
      "ems": null
    },
    {
      "latitude": 50.269684,
      "longitude": 7.534742,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645271655,
      "ems": null
    },
    {
      "latitude": 50.267803,
      "longitude": 7.535582,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271660,
      "ems": null
    },
    {
      "latitude": 50.266037,
      "longitude": 7.536844,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271665,
      "ems": null
    },
    {
      "latitude": 50.263962,
      "longitude": 7.538573,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271673,
      "ems": null
    },
    {
      "latitude": 50.262817,
      "longitude": 7.539801,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645271677,
      "ems": null
    },
    {
      "latitude": 50.261765,
      "longitude": 7.541174,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645271681,
      "ems": null
    },
    {
      "latitude": 50.26059,
      "longitude": 7.542857,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645271685,
      "ems": null
    },
    {
      "latitude": 50.259613,
      "longitude": 7.544341,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645271689,
      "ems": null
    },
    {
      "latitude": 50.257965,
      "longitude": 7.546668,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645271694,
      "ems": null
    },
    {
      "latitude": 50.256958,
      "longitude": 7.547978,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645271697,
      "ems": null
    },
    {
      "latitude": 50.256027,
      "longitude": 7.549315,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645271700,
      "ems": null
    },
    {
      "latitude": 50.254166,
      "longitude": 7.551294,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271706,
      "ems": null
    },
    {
      "latitude": 50.253422,
      "longitude": 7.551839,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271708,
      "ems": null
    },
    {
      "latitude": 50.252022,
      "longitude": 7.552581,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645271712,
      "ems": null
    },
    {
      "latitude": 50.250824,
      "longitude": 7.553173,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645271715,
      "ems": null
    },
    {
      "latitude": 50.24968,
      "longitude": 7.553751,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271718,
      "ems": null
    },
    {
      "latitude": 50.248764,
      "longitude": 7.554214,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271721,
      "ems": null
    },
    {
      "latitude": 50.247482,
      "longitude": 7.554835,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271724,
      "ems": null
    },
    {
      "latitude": 50.246521,
      "longitude": 7.555341,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645271727,
      "ems": null
    },
    {
      "latitude": 50.245228,
      "longitude": 7.555995,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645271730,
      "ems": null
    },
    {
      "latitude": 50.244247,
      "longitude": 7.55659,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645271733,
      "ems": null
    },
    {
      "latitude": 50.241714,
      "longitude": 7.558232,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271739,
      "ems": null
    },
    {
      "latitude": 50.240711,
      "longitude": 7.558891,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645271742,
      "ems": null
    },
    {
      "latitude": 50.239826,
      "longitude": 7.55941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645271745,
      "ems": null
    },
    {
      "latitude": 50.238243,
      "longitude": 7.56045,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645271748,
      "ems": null
    },
    {
      "latitude": 50.237045,
      "longitude": 7.56134,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271751,
      "ems": null
    },
    {
      "latitude": 50.23587,
      "longitude": 7.562231,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271754,
      "ems": null
    },
    {
      "latitude": 50.234802,
      "longitude": 7.563075,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271757,
      "ems": null
    },
    {
      "latitude": 50.234116,
      "longitude": 7.563725,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271760,
      "ems": null
    },
    {
      "latitude": 50.232559,
      "longitude": 7.565171,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645271763,
      "ems": null
    },
    {
      "latitude": 50.231598,
      "longitude": 7.566255,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645271766,
      "ems": null
    },
    {
      "latitude": 50.230591,
      "longitude": 7.567484,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645271769,
      "ems": null
    },
    {
      "latitude": 50.229351,
      "longitude": 7.568541,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271772,
      "ems": null
    },
    {
      "latitude": 50.22847,
      "longitude": 7.569283,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271775,
      "ems": null
    },
    {
      "latitude": 50.226513,
      "longitude": 7.570768,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271781,
      "ems": null
    },
    {
      "latitude": 50.224548,
      "longitude": 7.572254,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271785,
      "ems": null
    },
    {
      "latitude": 50.221527,
      "longitude": 7.574784,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645271793,
      "ems": null
    },
    {
      "latitude": 50.220703,
      "longitude": 7.575435,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271797,
      "ems": null
    },
    {
      "latitude": 50.217087,
      "longitude": 7.578615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271805,
      "ems": null
    },
    {
      "latitude": 50.215385,
      "longitude": 7.580269,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645271810,
      "ems": null
    },
    {
      "latitude": 50.21413,
      "longitude": 7.581605,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645271814,
      "ems": null
    },
    {
      "latitude": 50.211056,
      "longitude": 7.584204,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271822,
      "ems": null
    },
    {
      "latitude": 50.207886,
      "longitude": 7.58671,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271831,
      "ems": null
    },
    {
      "latitude": 50.205982,
      "longitude": 7.588138,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271836,
      "ems": null
    },
    {
      "latitude": 50.203003,
      "longitude": 7.590588,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271845,
      "ems": null
    },
    {
      "latitude": 50.199509,
      "longitude": 7.593143,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271854,
      "ems": null
    },
    {
      "latitude": 50.196953,
      "longitude": 7.595338,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271862,
      "ems": null
    },
    {
      "latitude": 50.19453,
      "longitude": 7.59764,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271870,
      "ems": null
    },
    {
      "latitude": 50.192577,
      "longitude": 7.59957,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271875,
      "ems": null
    },
    {
      "latitude": 50.192093,
      "longitude": 7.600009,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645271879,
      "ems": null
    },
    {
      "latitude": 50.188385,
      "longitude": 7.603768,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645271888,
      "ems": null
    },
    {
      "latitude": 50.187012,
      "longitude": 7.60478,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271892,
      "ems": null
    },
    {
      "latitude": 50.185921,
      "longitude": 7.605508,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271896,
      "ems": null
    },
    {
      "latitude": 50.183899,
      "longitude": 7.60702,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271901,
      "ems": null
    },
    {
      "latitude": 50.182709,
      "longitude": 7.607958,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271905,
      "ems": null
    },
    {
      "latitude": 50.181381,
      "longitude": 7.6089,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645271909,
      "ems": null
    },
    {
      "latitude": 50.178909,
      "longitude": 7.610779,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271917,
      "ems": null
    },
    {
      "latitude": 50.176468,
      "longitude": 7.612783,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271925,
      "ems": null
    },
    {
      "latitude": 50.173141,
      "longitude": 7.615477,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271933,
      "ems": null
    },
    {
      "latitude": 50.169811,
      "longitude": 7.618053,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645271942,
      "ems": null
    },
    {
      "latitude": 50.167206,
      "longitude": 7.620058,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645271950,
      "ems": null
    },
    {
      "latitude": 50.165085,
      "longitude": 7.621765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645271958,
      "ems": null
    },
    {
      "latitude": 50.161713,
      "longitude": 7.624883,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271966,
      "ems": null
    },
    {
      "latitude": 50.16037,
      "longitude": 7.626102,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645271970,
      "ems": null
    },
    {
      "latitude": 50.159454,
      "longitude": 7.627041,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271975,
      "ems": null
    },
    {
      "latitude": 50.155426,
      "longitude": 7.630747,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271983,
      "ems": null
    },
    {
      "latitude": 50.152863,
      "longitude": 7.633185,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645271991,
      "ems": null
    },
    {
      "latitude": 50.149292,
      "longitude": 7.636582,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272001,
      "ems": null
    },
    {
      "latitude": 50.146225,
      "longitude": 7.639112,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272010,
      "ems": null
    },
    {
      "latitude": 50.144302,
      "longitude": 7.640249,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272015,
      "ems": null
    },
    {
      "latitude": 50.143066,
      "longitude": 7.640991,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645272019,
      "ems": null
    },
    {
      "latitude": 50.141369,
      "longitude": 7.641956,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645272023,
      "ems": null
    },
    {
      "latitude": 50.139553,
      "longitude": 7.643144,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645272028,
      "ems": null
    },
    {
      "latitude": 50.138626,
      "longitude": 7.643738,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272032,
      "ems": null
    },
    {
      "latitude": 50.137039,
      "longitude": 7.644926,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272036,
      "ems": null
    },
    {
      "latitude": 50.134964,
      "longitude": 7.646629,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272041,
      "ems": null
    },
    {
      "latitude": 50.133133,
      "longitude": 7.648002,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272046,
      "ems": null
    },
    {
      "latitude": 50.13176,
      "longitude": 7.649014,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272051,
      "ems": null
    },
    {
      "latitude": 50.130009,
      "longitude": 7.650419,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272056,
      "ems": null
    },
    {
      "latitude": 50.126999,
      "longitude": 7.652845,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272064,
      "ems": null
    },
    {
      "latitude": 50.123959,
      "longitude": 7.655467,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272074,
      "ems": null
    },
    {
      "latitude": 50.120224,
      "longitude": 7.658627,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272084,
      "ems": null
    },
    {
      "latitude": 50.117302,
      "longitude": 7.661108,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272093,
      "ems": null
    },
    {
      "latitude": 50.114136,
      "longitude": 7.664077,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272101,
      "ems": null
    },
    {
      "latitude": 50.110519,
      "longitude": 7.667517,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645272111,
      "ems": null
    },
    {
      "latitude": 50.108643,
      "longitude": 7.669348,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272116,
      "ems": null
    },
    {
      "latitude": 50.104919,
      "longitude": 7.673059,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272126,
      "ems": null
    },
    {
      "latitude": 50.103104,
      "longitude": 7.67489,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645272131,
      "ems": null
    },
    {
      "latitude": 50.101273,
      "longitude": 7.676335,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272137,
      "ems": null
    },
    {
      "latitude": 50.100029,
      "longitude": 7.677068,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645272142,
      "ems": null
    },
    {
      "latitude": 50.097565,
      "longitude": 7.678701,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272147,
      "ems": null
    },
    {
      "latitude": 50.09436,
      "longitude": 7.681178,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272157,
      "ems": null
    },
    {
      "latitude": 50.092628,
      "longitude": 7.68271,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272162,
      "ems": null
    },
    {
      "latitude": 50.090488,
      "longitude": 7.684788,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272167,
      "ems": null
    },
    {
      "latitude": 50.089142,
      "longitude": 7.686093,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272171,
      "ems": null
    },
    {
      "latitude": 50.087975,
      "longitude": 7.687312,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272175,
      "ems": null
    },
    {
      "latitude": 50.086624,
      "longitude": 7.688648,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272179,
      "ems": null
    },
    {
      "latitude": 50.083878,
      "longitude": 7.69108,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272187,
      "ems": null
    },
    {
      "latitude": 50.080994,
      "longitude": 7.693176,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272195,
      "ems": null
    },
    {
      "latitude": 50.079781,
      "longitude": 7.694067,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272199,
      "ems": null
    },
    {
      "latitude": 50.078293,
      "longitude": 7.695128,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272204,
      "ems": null
    },
    {
      "latitude": 50.075043,
      "longitude": 7.697875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272213,
      "ems": null
    },
    {
      "latitude": 50.072388,
      "longitude": 7.70026,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272221,
      "ems": null
    },
    {
      "latitude": 50.071106,
      "longitude": 7.70156,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272225,
      "ems": null
    },
    {
      "latitude": 50.068188,
      "longitude": 7.704311,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272234,
      "ems": null
    },
    {
      "latitude": 50.065475,
      "longitude": 7.706909,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272242,
      "ems": null
    },
    {
      "latitude": 50.064148,
      "longitude": 7.708282,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272246,
      "ems": null
    },
    {
      "latitude": 50.061539,
      "longitude": 7.710885,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272255,
      "ems": null
    },
    {
      "latitude": 50.059902,
      "longitude": 7.711957,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272259,
      "ems": null
    },
    {
      "latitude": 50.058517,
      "longitude": 7.712908,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272263,
      "ems": null
    },
    {
      "latitude": 50.057098,
      "longitude": 7.713848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272267,
      "ems": null
    },
    {
      "latitude": 50.055634,
      "longitude": 7.715004,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272271,
      "ems": null
    },
    {
      "latitude": 50.053986,
      "longitude": 7.716378,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272275,
      "ems": null
    },
    {
      "latitude": 50.053391,
      "longitude": 7.716884,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272279,
      "ems": null
    },
    {
      "latitude": 50.051476,
      "longitude": 7.718415,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272283,
      "ems": null
    },
    {
      "latitude": 50.048172,
      "longitude": 7.721148,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272292,
      "ems": null
    },
    {
      "latitude": 50.046616,
      "longitude": 7.722521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272296,
      "ems": null
    },
    {
      "latitude": 50.043549,
      "longitude": 7.725268,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272304,
      "ems": null
    },
    {
      "latitude": 50.040573,
      "longitude": 7.727581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272312,
      "ems": null
    },
    {
      "latitude": 50.037735,
      "longitude": 7.729822,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272320,
      "ems": null
    },
    {
      "latitude": 50.035042,
      "longitude": 7.731999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272328,
      "ems": null
    },
    {
      "latitude": 50.032249,
      "longitude": 7.734449,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272336,
      "ems": null
    },
    {
      "latitude": 50.029083,
      "longitude": 7.737122,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272344,
      "ems": null
    },
    {
      "latitude": 50.026428,
      "longitude": 7.739362,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272352,
      "ems": null
    },
    {
      "latitude": 50.024521,
      "longitude": 7.740982,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272360,
      "ems": null
    },
    {
      "latitude": 50.020287,
      "longitude": 7.744693,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272368,
      "ems": null
    },
    {
      "latitude": 50.019287,
      "longitude": 7.74565,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272371,
      "ems": null
    },
    {
      "latitude": 50.016998,
      "longitude": 7.747674,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272377,
      "ems": null
    },
    {
      "latitude": 50.014984,
      "longitude": 7.749337,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272383,
      "ems": null
    },
    {
      "latitude": 50.01405,
      "longitude": 7.749964,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272386,
      "ems": null
    },
    {
      "latitude": 50.012192,
      "longitude": 7.751143,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645272391,
      "ems": null
    },
    {
      "latitude": 50.010498,
      "longitude": 7.7523,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272395,
      "ems": null
    },
    {
      "latitude": 50.009624,
      "longitude": 7.753007,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272398,
      "ems": null
    },
    {
      "latitude": 50.00885,
      "longitude": 7.753601,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272401,
      "ems": null
    },
    {
      "latitude": 50.006832,
      "longitude": 7.75516,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272407,
      "ems": null
    },
    {
      "latitude": 50.003815,
      "longitude": 7.757721,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272414,
      "ems": null
    },
    {
      "latitude": 50.002457,
      "longitude": 7.75902,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645272418,
      "ems": null
    },
    {
      "latitude": 49.999741,
      "longitude": 7.761262,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272426,
      "ems": null
    },
    {
      "latitude": 49.996902,
      "longitude": 7.763503,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272434,
      "ems": null
    },
    {
      "latitude": 49.995346,
      "longitude": 7.76466,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272438,
      "ems": null
    },
    {
      "latitude": 49.993561,
      "longitude": 7.765888,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272442,
      "ems": null
    },
    {
      "latitude": 49.99231,
      "longitude": 7.766666,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272446,
      "ems": null
    },
    {
      "latitude": 49.98933,
      "longitude": 7.768744,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272454,
      "ems": null
    },
    {
      "latitude": 49.987976,
      "longitude": 7.769502,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272458,
      "ems": null
    },
    {
      "latitude": 49.986443,
      "longitude": 7.770303,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272462,
      "ems": null
    },
    {
      "latitude": 49.982712,
      "longitude": 7.77261,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272470,
      "ems": null
    },
    {
      "latitude": 49.979599,
      "longitude": 7.774683,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272479,
      "ems": null
    },
    {
      "latitude": 49.975937,
      "longitude": 7.77738,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272488,
      "ems": null
    },
    {
      "latitude": 49.974617,
      "longitude": 7.778395,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272492,
      "ems": null
    },
    {
      "latitude": 49.973503,
      "longitude": 7.779359,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272495,
      "ems": null
    },
    {
      "latitude": 49.973129,
      "longitude": 7.779656,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272498,
      "ems": null
    },
    {
      "latitude": 49.971176,
      "longitude": 7.781356,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272501,
      "ems": null
    },
    {
      "latitude": 49.970524,
      "longitude": 7.781958,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272504,
      "ems": null
    },
    {
      "latitude": 49.968979,
      "longitude": 7.78338,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272507,
      "ems": null
    },
    {
      "latitude": 49.967743,
      "longitude": 7.784464,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272510,
      "ems": null
    },
    {
      "latitude": 49.967171,
      "longitude": 7.785001,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272512,
      "ems": null
    },
    {
      "latitude": 49.964748,
      "longitude": 7.787302,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272518,
      "ems": null
    },
    {
      "latitude": 49.962891,
      "longitude": 7.78909,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272522,
      "ems": null
    },
    {
      "latitude": 49.961536,
      "longitude": 7.790494,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272526,
      "ems": null
    },
    {
      "latitude": 49.960464,
      "longitude": 7.79162,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272530,
      "ems": null
    },
    {
      "latitude": 49.958588,
      "longitude": 7.79386,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645272534,
      "ems": null
    },
    {
      "latitude": 49.957535,
      "longitude": 7.795097,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645272538,
      "ems": null
    },
    {
      "latitude": 49.955952,
      "longitude": 7.796878,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272542,
      "ems": null
    },
    {
      "latitude": 49.954742,
      "longitude": 7.79814,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272546,
      "ems": null
    },
    {
      "latitude": 49.95195,
      "longitude": 7.800654,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272554,
      "ems": null
    },
    {
      "latitude": 49.95076,
      "longitude": 7.801594,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272558,
      "ems": null
    },
    {
      "latitude": 49.949806,
      "longitude": 7.802372,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272561,
      "ems": null
    },
    {
      "latitude": 49.948456,
      "longitude": 7.803559,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272564,
      "ems": null
    },
    {
      "latitude": 49.947372,
      "longitude": 7.804557,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272567,
      "ems": null
    },
    {
      "latitude": 49.94627,
      "longitude": 7.805341,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272570,
      "ems": null
    },
    {
      "latitude": 49.945988,
      "longitude": 7.805563,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272571,
      "ems": null
    },
    {
      "latitude": 49.94426,
      "longitude": 7.806653,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645272575,
      "ems": null
    },
    {
      "latitude": 49.942173,
      "longitude": 7.807716,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272580,
      "ems": null
    },
    {
      "latitude": 49.939911,
      "longitude": 7.809473,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272588,
      "ems": null
    },
    {
      "latitude": 49.938168,
      "longitude": 7.811279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645272592,
      "ems": null
    },
    {
      "latitude": 49.937805,
      "longitude": 7.811641,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645272596,
      "ems": null
    },
    {
      "latitude": 49.935562,
      "longitude": 7.814397,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645272600,
      "ems": null
    },
    {
      "latitude": 49.934052,
      "longitude": 7.816483,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645272604,
      "ems": null
    },
    {
      "latitude": 49.933136,
      "longitude": 7.817784,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645272608,
      "ems": null
    },
    {
      "latitude": 49.931465,
      "longitude": 7.81989,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645272613,
      "ems": null
    },
    {
      "latitude": 49.929749,
      "longitude": 7.821615,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272618,
      "ems": null
    },
    {
      "latitude": 49.927879,
      "longitude": 7.822785,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272623,
      "ems": null
    },
    {
      "latitude": 49.926727,
      "longitude": 7.823711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272627,
      "ems": null
    },
    {
      "latitude": 49.925629,
      "longitude": 7.824506,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272630,
      "ems": null
    },
    {
      "latitude": 49.924713,
      "longitude": 7.825161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645272633,
      "ems": null
    },
    {
      "latitude": 49.923367,
      "longitude": 7.826126,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272636,
      "ems": null
    },
    {
      "latitude": 49.92247,
      "longitude": 7.826674,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272639,
      "ems": null
    },
    {
      "latitude": 49.921967,
      "longitude": 7.827036,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645272640,
      "ems": null
    },
    {
      "latitude": 49.918571,
      "longitude": 7.829689,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645272649,
      "ems": null
    },
    {
      "latitude": 49.916199,
      "longitude": 7.831734,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272657,
      "ems": null
    },
    {
      "latitude": 49.914459,
      "longitude": 7.833179,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272661,
      "ems": null
    },
    {
      "latitude": 49.912903,
      "longitude": 7.834553,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272666,
      "ems": null
    },
    {
      "latitude": 49.911072,
      "longitude": 7.836143,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272670,
      "ems": null
    },
    {
      "latitude": 49.907639,
      "longitude": 7.83889,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645272679,
      "ems": null
    },
    {
      "latitude": 49.9048,
      "longitude": 7.841275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272687,
      "ems": null
    },
    {
      "latitude": 49.902184,
      "longitude": 7.843867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645272695,
      "ems": null
    },
    {
      "latitude": 49.899445,
      "longitude": 7.846623,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272703,
      "ems": null
    },
    {
      "latitude": 49.897854,
      "longitude": 7.848321,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272707,
      "ems": null
    },
    {
      "latitude": 49.896549,
      "longitude": 7.849954,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645272711,
      "ems": null
    },
    {
      "latitude": 49.895233,
      "longitude": 7.851683,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645272715,
      "ems": null
    },
    {
      "latitude": 49.893814,
      "longitude": 7.853418,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645272719,
      "ems": null
    },
    {
      "latitude": 49.892452,
      "longitude": 7.85515,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645272723,
      "ems": null
    },
    {
      "latitude": 49.89101,
      "longitude": 7.856932,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645272727,
      "ems": null
    },
    {
      "latitude": 49.889103,
      "longitude": 7.859382,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645272732,
      "ems": null
    },
    {
      "latitude": 49.887009,
      "longitude": 7.862128,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645272740,
      "ems": null
    },
    {
      "latitude": 49.883797,
      "longitude": 7.865766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645272748,
      "ems": null
    },
    {
      "latitude": 49.881096,
      "longitude": 7.868735,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272756,
      "ems": null
    },
    {
      "latitude": 49.87944,
      "longitude": 7.870548,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272761,
      "ems": null
    },
    {
      "latitude": 49.87793,
      "longitude": 7.872149,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272765,
      "ems": null
    },
    {
      "latitude": 49.875648,
      "longitude": 7.874673,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272773,
      "ems": null
    },
    {
      "latitude": 49.8736,
      "longitude": 7.876752,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272777,
      "ems": null
    },
    {
      "latitude": 49.872437,
      "longitude": 7.877717,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645272781,
      "ems": null
    },
    {
      "latitude": 49.870808,
      "longitude": 7.879053,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645272785,
      "ems": null
    },
    {
      "latitude": 49.869083,
      "longitude": 7.880538,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272789,
      "ems": null
    },
    {
      "latitude": 49.866348,
      "longitude": 7.883196,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272797,
      "ems": null
    },
    {
      "latitude": 49.863266,
      "longitude": 7.886179,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645272805,
      "ems": null
    },
    {
      "latitude": 49.860054,
      "longitude": 7.889297,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645272813,
      "ems": null
    },
    {
      "latitude": 49.857559,
      "longitude": 7.89187,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645272821,
      "ems": null
    },
    {
      "latitude": 49.854794,
      "longitude": 7.89479,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645272829,
      "ems": null
    },
    {
      "latitude": 49.852001,
      "longitude": 7.897982,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272837,
      "ems": null
    },
    {
      "latitude": 49.850876,
      "longitude": 7.899242,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645272845,
      "ems": null
    },
    {
      "latitude": 49.846275,
      "longitude": 7.903847,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272854,
      "ems": null
    },
    {
      "latitude": 49.844925,
      "longitude": 7.905097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645272858,
      "ems": null
    },
    {
      "latitude": 49.841675,
      "longitude": 7.908422,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272867,
      "ems": null
    },
    {
      "latitude": 49.838871,
      "longitude": 7.911492,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645272875,
      "ems": null
    },
    {
      "latitude": 49.835358,
      "longitude": 7.915071,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645272885,
      "ems": null
    },
    {
      "latitude": 49.834171,
      "longitude": 7.91602,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272890,
      "ems": null
    },
    {
      "latitude": 49.831795,
      "longitude": 7.917505,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645272895,
      "ems": null
    },
    {
      "latitude": 49.829842,
      "longitude": 7.918693,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645272900,
      "ems": null
    },
    {
      "latitude": 49.828125,
      "longitude": 7.919697,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645272906,
      "ems": null
    },
    {
      "latitude": 49.8246,
      "longitude": 7.921937,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645272916,
      "ems": null
    },
    {
      "latitude": 49.822037,
      "longitude": 7.9236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645272924,
      "ems": null
    },
    {
      "latitude": 49.818527,
      "longitude": 7.925671,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272933,
      "ems": null
    },
    {
      "latitude": 49.817322,
      "longitude": 7.926347,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645272937,
      "ems": null
    },
    {
      "latitude": 49.814758,
      "longitude": 7.927675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645272945,
      "ems": null
    },
    {
      "latitude": 49.811779,
      "longitude": 7.929234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645272952,
      "ems": null
    },
    {
      "latitude": 49.811279,
      "longitude": 7.929527,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645272955,
      "ems": null
    },
    {
      "latitude": 49.809769,
      "longitude": 7.93025,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645272958,
      "ems": null
    },
    {
      "latitude": 49.807663,
      "longitude": 7.931117,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645272964,
      "ems": null
    },
    {
      "latitude": 49.806427,
      "longitude": 7.931623,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1645272969,
      "ems": null
    },
    {
      "latitude": 49.804005,
      "longitude": 7.932277,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1645272974,
      "ems": null
    },
    {
      "latitude": 49.80249,
      "longitude": 7.932635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1645272978,
      "ems": null
    },
    {
      "latitude": 49.800842,
      "longitude": 7.932996,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1645272982,
      "ems": null
    },
    {
      "latitude": 49.799675,
      "longitude": 7.933317,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "4451",
      "timestamp": 1645272986,
      "ems": null
    },
    {
      "latitude": 49.796463,
      "longitude": 7.934505,
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
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645272994,
      "ems": null
    },
    {
      "latitude": 49.794525,
      "longitude": 7.935237,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645273000,
      "ems": null
    },
    {
      "latitude": 49.792973,
      "longitude": 7.935915,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273004,
      "ems": null
    },
    {
      "latitude": 49.791901,
      "longitude": 7.936434,
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273006,
      "ems": null
    },
    {
      "latitude": 49.790817,
      "longitude": 7.936972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273009,
      "ems": null
    },
    {
      "latitude": 49.789761,
      "longitude": 7.937548,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273012,
      "ems": null
    },
    {
      "latitude": 49.789352,
      "longitude": 7.937767,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273015,
      "ems": null
    },
    {
      "latitude": 49.78841,
      "longitude": 7.938216,
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273018,
      "ems": null
    },
    {
      "latitude": 49.785324,
      "longitude": 7.939646,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645273024,
      "ems": null
    },
    {
      "latitude": 49.783848,
      "longitude": 7.94022,
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
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645273030,
      "ems": null
    },
    {
      "latitude": 49.782219,
      "longitude": 7.94074,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1645273033,
      "ems": null
    },
    {
      "latitude": 49.780106,
      "longitude": 7.941381,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1645273039,
      "ems": null
    },
    {
      "latitude": 49.779007,
      "longitude": 7.941669,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1645273043,
      "ems": null
    },
    {
      "latitude": 49.777954,
      "longitude": 7.941959,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1645273046,
      "ems": null
    },
    {
      "latitude": 49.77747,
      "longitude": 7.942076,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1645273048,
      "ems": null
    },
    {
      "latitude": 49.774956,
      "longitude": 7.943041,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273055,
      "ems": null
    },
    {
      "latitude": 49.773056,
      "longitude": 7.944055,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645273060,
      "ems": null
    },
    {
      "latitude": 49.77179,
      "longitude": 7.944748,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273064,
      "ems": null
    },
    {
      "latitude": 49.770309,
      "longitude": 7.945428,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273068,
      "ems": null
    },
    {
      "latitude": 49.768623,
      "longitude": 7.946307,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273072,
      "ems": null
    },
    {
      "latitude": 49.7677,
      "longitude": 7.946874,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645273076,
      "ems": null
    },
    {
      "latitude": 49.766205,
      "longitude": 7.947792,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273079,
      "ems": null
    },
    {
      "latitude": 49.765594,
      "longitude": 7.948175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273081,
      "ems": null
    },
    {
      "latitude": 49.762939,
      "longitude": 7.949837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273087,
      "ems": null
    },
    {
      "latitude": 49.760101,
      "longitude": 7.951716,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273097,
      "ems": null
    },
    {
      "latitude": 49.758316,
      "longitude": 7.952945,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273100,
      "ems": null
    },
    {
      "latitude": 49.75795,
      "longitude": 7.953234,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273102,
      "ems": null
    },
    {
      "latitude": 49.754425,
      "longitude": 7.955908,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645273111,
      "ems": null
    },
    {
      "latitude": 49.752609,
      "longitude": 7.957368,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273115,
      "ems": null
    },
    {
      "latitude": 49.751221,
      "longitude": 7.958583,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273119,
      "ems": null
    },
    {
      "latitude": 49.750004,
      "longitude": 7.959743,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273123,
      "ems": null
    },
    {
      "latitude": 49.748608,
      "longitude": 7.961005,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273127,
      "ems": null
    },
    {
      "latitude": 49.747025,
      "longitude": 7.96249,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273131,
      "ems": null
    },
    {
      "latitude": 49.745628,
      "longitude": 7.963752,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273135,
      "ems": null
    },
    {
      "latitude": 49.742432,
      "longitude": 7.966823,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273143,
      "ems": null
    },
    {
      "latitude": 49.739594,
      "longitude": 7.969352,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273151,
      "ems": null
    },
    {
      "latitude": 49.737808,
      "longitude": 7.970726,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645273155,
      "ems": null
    },
    {
      "latitude": 49.73616,
      "longitude": 7.972027,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645273159,
      "ems": null
    },
    {
      "latitude": 49.733665,
      "longitude": 7.97407,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273166,
      "ems": null
    },
    {
      "latitude": 49.729431,
      "longitude": 7.977736,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273176,
      "ems": null
    },
    {
      "latitude": 49.727612,
      "longitude": 7.979341,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273180,
      "ems": null
    },
    {
      "latitude": 49.724579,
      "longitude": 7.982073,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273188,
      "ems": null
    },
    {
      "latitude": 49.721146,
      "longitude": 7.985543,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273197,
      "ems": null
    },
    {
      "latitude": 49.718307,
      "longitude": 7.988361,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273205,
      "ems": null
    },
    {
      "latitude": 49.716888,
      "longitude": 7.989735,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645273211,
      "ems": null
    },
    {
      "latitude": 49.714645,
      "longitude": 7.991903,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645273217,
      "ems": null
    },
    {
      "latitude": 49.711643,
      "longitude": 7.994855,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645273222,
      "ems": null
    },
    {
      "latitude": 49.70993,
      "longitude": 7.996385,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273228,
      "ems": null
    },
    {
      "latitude": 49.708237,
      "longitude": 7.99783,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273232,
      "ems": null
    },
    {
      "latitude": 49.706104,
      "longitude": 7.999606,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273237,
      "ems": null
    },
    {
      "latitude": 49.704025,
      "longitude": 8.001589,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273244,
      "ems": null
    },
    {
      "latitude": 49.702606,
      "longitude": 8.00289,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273249,
      "ems": null
    },
    {
      "latitude": 49.699631,
      "longitude": 8.005709,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273256,
      "ems": null
    },
    {
      "latitude": 49.697617,
      "longitude": 8.007443,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645273262,
      "ems": null
    },
    {
      "latitude": 49.695911,
      "longitude": 8.008662,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645273266,
      "ems": null
    },
    {
      "latitude": 49.693535,
      "longitude": 8.010221,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645273272,
      "ems": null
    },
    {
      "latitude": 49.692352,
      "longitude": 8.011057,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273275,
      "ems": null
    },
    {
      "latitude": 49.691208,
      "longitude": 8.011854,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645273278,
      "ems": null
    },
    {
      "latitude": 49.689953,
      "longitude": 8.012745,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273281,
      "ems": null
    },
    {
      "latitude": 49.687763,
      "longitude": 8.014452,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273287,
      "ems": null
    },
    {
      "latitude": 49.68576,
      "longitude": 8.016233,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273293,
      "ems": null
    },
    {
      "latitude": 49.683899,
      "longitude": 8.017793,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273298,
      "ems": null
    },
    {
      "latitude": 49.681198,
      "longitude": 8.019871,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645273305,
      "ems": null
    },
    {
      "latitude": 49.678173,
      "longitude": 8.021652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273313,
      "ems": null
    },
    {
      "latitude": 49.677063,
      "longitude": 8.02226,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273316,
      "ems": null
    },
    {
      "latitude": 49.675846,
      "longitude": 8.022915,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273319,
      "ems": null
    },
    {
      "latitude": 49.674683,
      "longitude": 8.023582,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645273322,
      "ems": null
    },
    {
      "latitude": 49.673538,
      "longitude": 8.024284,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273325,
      "ems": null
    },
    {
      "latitude": 49.672485,
      "longitude": 8.024935,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645273328,
      "ems": null
    },
    {
      "latitude": 49.671516,
      "longitude": 8.025438,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645273330,
      "ems": null
    },
    {
      "latitude": 49.669098,
      "longitude": 8.027072,
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
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645273337,
      "ems": null
    },
    {
      "latitude": 49.667,
      "longitude": 8.028334,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273343,
      "ems": null
    },
    {
      "latitude": 49.665047,
      "longitude": 8.029299,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645273349,
      "ems": null
    },
    {
      "latitude": 49.662781,
      "longitude": 8.030355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273355,
      "ems": null
    },
    {
      "latitude": 49.660675,
      "longitude": 8.031295,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273361,
      "ems": null
    },
    {
      "latitude": 49.659714,
      "longitude": 8.031729,
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
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645273364,
      "ems": null
    },
    {
      "latitude": 49.658527,
      "longitude": 8.03212,
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273367,
      "ems": null
    },
    {
      "latitude": 49.656189,
      "longitude": 8.033102,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273373,
      "ems": null
    },
    {
      "latitude": 49.65509,
      "longitude": 8.033607,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273376,
      "ems": null
    },
    {
      "latitude": 49.652802,
      "longitude": 8.03433,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1645273382,
      "ems": null
    },
    {
      "latitude": 49.650467,
      "longitude": 8.035126,
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1645273388,
      "ems": null
    },
    {
      "latitude": 49.648087,
      "longitude": 8.035921,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1645273394,
      "ems": null
    },
    {
      "latitude": 49.645615,
      "longitude": 8.036716,
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1645273400,
      "ems": null
    },
    {
      "latitude": 49.643261,
      "longitude": 8.037686,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645273406,
      "ems": null
    },
    {
      "latitude": 49.640671,
      "longitude": 8.038812,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645273412,
      "ems": null
    },
    {
      "latitude": 49.63797,
      "longitude": 8.039968,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1645273418,
      "ems": null
    },
    {
      "latitude": 49.635132,
      "longitude": 8.040691,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1645273424,
      "ems": null
    },
    {
      "latitude": 49.633808,
      "longitude": 8.040878,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1645273427,
      "ems": null
    },
    {
      "latitude": 49.632553,
      "longitude": 8.041027,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1645273430,
      "ems": null
    },
    {
      "latitude": 49.631111,
      "longitude": 8.041176,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1645273433,
      "ems": null
    },
    {
      "latitude": 49.629993,
      "longitude": 8.041398,
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1645273436,
      "ems": null
    },
    {
      "latitude": 49.628735,
      "longitude": 8.041621,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1645273439,
      "ems": null
    },
    {
      "latitude": 49.626499,
      "longitude": 8.042512,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273445,
      "ems": null
    },
    {
      "latitude": 49.625896,
      "longitude": 8.042883,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273448,
      "ems": null
    },
    {
      "latitude": 49.62442,
      "longitude": 8.044522,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273451,
      "ems": null
    },
    {
      "latitude": 49.623569,
      "longitude": 8.04563,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645273454,
      "ems": null
    },
    {
      "latitude": 49.622681,
      "longitude": 8.046907,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645273457,
      "ems": null
    },
    {
      "latitude": 49.62204,
      "longitude": 8.047774,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273460,
      "ems": null
    },
    {
      "latitude": 49.62059,
      "longitude": 8.049935,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273463,
      "ems": null
    },
    {
      "latitude": 49.619659,
      "longitude": 8.051346,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645273466,
      "ems": null
    },
    {
      "latitude": 49.618679,
      "longitude": 8.052755,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273469,
      "ems": null
    },
    {
      "latitude": 49.617889,
      "longitude": 8.053869,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645273472,
      "ems": null
    },
    {
      "latitude": 49.616776,
      "longitude": 8.055509,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645273475,
      "ems": null
    },
    {
      "latitude": 49.614853,
      "longitude": 8.058038,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645273481,
      "ems": null
    },
    {
      "latitude": 49.612629,
      "longitude": 8.060624,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273487,
      "ems": null
    },
    {
      "latitude": 49.611744,
      "longitude": 8.061664,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273490,
      "ems": null
    },
    {
      "latitude": 49.610672,
      "longitude": 8.062925,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273493,
      "ems": null
    },
    {
      "latitude": 49.609974,
      "longitude": 8.063742,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273496,
      "ems": null
    },
    {
      "latitude": 49.607666,
      "longitude": 8.066566,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645273502,
      "ems": null
    },
    {
      "latitude": 49.606613,
      "longitude": 8.067651,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273505,
      "ems": null
    },
    {
      "latitude": 49.60556,
      "longitude": 8.068663,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645273508,
      "ems": null
    },
    {
      "latitude": 49.6035,
      "longitude": 8.070831,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645273514,
      "ems": null
    },
    {
      "latitude": 49.601624,
      "longitude": 8.073,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273520,
      "ems": null
    },
    {
      "latitude": 49.599472,
      "longitude": 8.075674,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645273526,
      "ems": null
    },
    {
      "latitude": 49.597275,
      "longitude": 8.07871,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645273535,
      "ems": null
    },
    {
      "latitude": 49.595776,
      "longitude": 8.080667,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645273538,
      "ems": null
    },
    {
      "latitude": 49.593727,
      "longitude": 8.083191,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273544,
      "ems": null
    },
    {
      "latitude": 49.591736,
      "longitude": 8.085721,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645273550,
      "ems": null
    },
    {
      "latitude": 49.589771,
      "longitude": 8.088387,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645273556,
      "ems": null
    },
    {
      "latitude": 49.588234,
      "longitude": 8.090169,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273561,
      "ems": null
    },
    {
      "latitude": 49.585098,
      "longitude": 8.093743,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273570,
      "ems": null
    },
    {
      "latitude": 49.582928,
      "longitude": 8.096478,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273576,
      "ems": null
    },
    {
      "latitude": 49.582031,
      "longitude": 8.097574,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273579,
      "ems": null
    },
    {
      "latitude": 49.580742,
      "longitude": 8.099002,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645273582,
      "ems": null
    },
    {
      "latitude": 49.578739,
      "longitude": 8.101081,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273588,
      "ems": null
    },
    {
      "latitude": 49.576447,
      "longitude": 8.103645,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273594,
      "ems": null
    },
    {
      "latitude": 49.574203,
      "longitude": 8.106392,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273600,
      "ems": null
    },
    {
      "latitude": 49.572052,
      "longitude": 8.109283,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645273606,
      "ems": null
    },
    {
      "latitude": 49.571198,
      "longitude": 8.110657,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273609,
      "ems": null
    },
    {
      "latitude": 49.570171,
      "longitude": 8.112364,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1645273612,
      "ems": null
    },
    {
      "latitude": 49.569717,
      "longitude": 8.113114,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1645273614,
      "ems": null
    },
    {
      "latitude": 49.568436,
      "longitude": 8.115355,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1645273618,
      "ems": null
    },
    {
      "latitude": 49.567474,
      "longitude": 8.116728,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273621,
      "ems": null
    },
    {
      "latitude": 49.567192,
      "longitude": 8.117189,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273624,
      "ems": null
    },
    {
      "latitude": 49.564632,
      "longitude": 8.120678,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273630,
      "ems": null
    },
    {
      "latitude": 49.564133,
      "longitude": 8.121209,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273633,
      "ems": null
    },
    {
      "latitude": 49.562817,
      "longitude": 8.122757,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273635,
      "ems": null
    },
    {
      "latitude": 49.561798,
      "longitude": 8.124028,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273638,
      "ems": null
    },
    {
      "latitude": 49.560581,
      "longitude": 8.125429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273642,
      "ems": null
    },
    {
      "latitude": 49.560211,
      "longitude": 8.125875,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645273644,
      "ems": null
    },
    {
      "latitude": 49.558365,
      "longitude": 8.128076,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645273648,
      "ems": null
    },
    {
      "latitude": 49.557278,
      "longitude": 8.129214,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273651,
      "ems": null
    },
    {
      "latitude": 49.556259,
      "longitude": 8.130172,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273654,
      "ems": null
    },
    {
      "latitude": 49.55537,
      "longitude": 8.130922,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273658,
      "ems": null
    },
    {
      "latitude": 49.552948,
      "longitude": 8.133298,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645273664,
      "ems": null
    },
    {
      "latitude": 49.550766,
      "longitude": 8.135592,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273670,
      "ems": null
    },
    {
      "latitude": 49.549549,
      "longitude": 8.136786,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273673,
      "ems": null
    },
    {
      "latitude": 49.548805,
      "longitude": 8.137528,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645273676,
      "ems": null
    },
    {
      "latitude": 49.546509,
      "longitude": 8.139712,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645273682,
      "ems": null
    },
    {
      "latitude": 49.54443,
      "longitude": 8.141685,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645273688,
      "ems": null
    },
    {
      "latitude": 49.542435,
      "longitude": 8.143399,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645273694,
      "ems": null
    },
    {
      "latitude": 49.541264,
      "longitude": 8.144358,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645273697,
      "ems": null
    },
    {
      "latitude": 49.540333,
      "longitude": 8.145026,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645273700,
      "ems": null
    },
    {
      "latitude": 49.539276,
      "longitude": 8.145784,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645273703,
      "ems": null
    },
    {
      "latitude": 49.538239,
      "longitude": 8.146288,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273706,
      "ems": null
    },
    {
      "latitude": 49.53717,
      "longitude": 8.146869,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645273709,
      "ems": null
    },
    {
      "latitude": 49.536144,
      "longitude": 8.147327,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645273712,
      "ems": null
    },
    {
      "latitude": 49.535027,
      "longitude": 8.147847,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273715,
      "ems": null
    },
    {
      "latitude": 49.533955,
      "longitude": 8.148218,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1645273718,
      "ems": null
    },
    {
      "latitude": 49.533024,
      "longitude": 8.148367,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1645273721,
      "ems": null
    },
    {
      "latitude": 49.531769,
      "longitude": 8.148458,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1645273724,
      "ems": null
    },
    {
      "latitude": 49.530884,
      "longitude": 8.14844,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1645273727,
      "ems": null
    },
    {
      "latitude": 49.529572,
      "longitude": 8.148675,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1645273730,
      "ems": null
    },
    {
      "latitude": 49.528461,
      "longitude": 8.14896,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1645273733,
      "ems": null
    },
    {
      "latitude": 49.526554,
      "longitude": 8.149777,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645273739,
      "ems": null
    },
    {
      "latitude": 49.525249,
      "longitude": 8.150594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273742,
      "ems": null
    },
    {
      "latitude": 49.524273,
      "longitude": 8.151336,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273745,
      "ems": null
    },
    {
      "latitude": 49.523117,
      "longitude": 8.152144,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645273748,
      "ems": null
    },
    {
      "latitude": 49.521973,
      "longitude": 8.153012,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645273751,
      "ems": null
    },
    {
      "latitude": 49.52092,
      "longitude": 8.153807,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273754,
      "ems": null
    },
    {
      "latitude": 49.519867,
      "longitude": 8.154675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273757,
      "ems": null
    },
    {
      "latitude": 49.519058,
      "longitude": 8.155344,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645273760,
      "ems": null
    },
    {
      "latitude": 49.517754,
      "longitude": 8.156384,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273763,
      "ems": null
    },
    {
      "latitude": 49.516708,
      "longitude": 8.157276,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273767,
      "ems": null
    },
    {
      "latitude": 49.515568,
      "longitude": 8.158314,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273770,
      "ems": null
    },
    {
      "latitude": 49.512493,
      "longitude": 8.160541,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273778,
      "ems": null
    },
    {
      "latitude": 49.509701,
      "longitude": 8.162842,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645273785,
      "ems": null
    },
    {
      "latitude": 49.50769,
      "longitude": 8.164504,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645273790,
      "ems": null
    },
    {
      "latitude": 49.505264,
      "longitude": 8.166311,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645273797,
      "ems": null
    },
    {
      "latitude": 49.50412,
      "longitude": 8.166962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273800,
      "ems": null
    },
    {
      "latitude": 49.503067,
      "longitude": 8.167323,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1645273803,
      "ems": null
    },
    {
      "latitude": 49.501926,
      "longitude": 8.167295,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "4451",
      "timestamp": 1645273806,
      "ems": null
    },
    {
      "latitude": 49.500916,
      "longitude": 8.167034,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1645273809,
      "ems": null
    },
    {
      "latitude": 49.499973,
      "longitude": 8.166479,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1645273812,
      "ems": null
    },
    {
      "latitude": 49.49913,
      "longitude": 8.165661,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1645273815,
      "ems": null
    },
    {
      "latitude": 49.49826,
      "longitude": 8.164865,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1645273818,
      "ems": null
    },
    {
      "latitude": 49.497345,
      "longitude": 8.163926,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1645273821,
      "ems": null
    },
    {
      "latitude": 49.496666,
      "longitude": 8.163138,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 219,
      "squawk": "4451",
      "timestamp": 1645273824,
      "ems": null
    },
    {
      "latitude": 49.495876,
      "longitude": 8.1621,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 218,
      "squawk": "4451",
      "timestamp": 1645273827,
      "ems": null
    },
    {
      "latitude": 49.495148,
      "longitude": 8.161324,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1645273830,
      "ems": null
    },
    {
      "latitude": 49.494324,
      "longitude": 8.160673,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1645273833,
      "ems": null
    },
    {
      "latitude": 49.493362,
      "longitude": 8.159879,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1645273836,
      "ems": null
    },
    {
      "latitude": 49.492447,
      "longitude": 8.159228,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645273839,
      "ems": null
    },
    {
      "latitude": 49.491348,
      "longitude": 8.158505,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645273842,
      "ems": null
    },
    {
      "latitude": 49.490383,
      "longitude": 8.158017,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645273845,
      "ems": null
    },
    {
      "latitude": 49.489243,
      "longitude": 8.157421,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645273848,
      "ems": null
    },
    {
      "latitude": 49.488335,
      "longitude": 8.156829,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645273851,
      "ems": null
    },
    {
      "latitude": 49.487358,
      "longitude": 8.156161,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645273854,
      "ems": null
    },
    {
      "latitude": 49.486359,
      "longitude": 8.155397,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645273857,
      "ems": null
    },
    {
      "latitude": 49.48531,
      "longitude": 8.154751,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645273860,
      "ems": null
    },
    {
      "latitude": 49.483307,
      "longitude": 8.153415,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645273866,
      "ems": null
    },
    {
      "latitude": 49.482285,
      "longitude": 8.152867,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645273869,
      "ems": null
    },
    {
      "latitude": 49.481258,
      "longitude": 8.152524,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "4451",
      "timestamp": 1645273872,
      "ems": null
    },
    {
      "latitude": 49.480042,
      "longitude": 8.152506,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1645273875,
      "ems": null
    },
    {
      "latitude": 49.478943,
      "longitude": 8.152722,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1645273878,
      "ems": null
    },
    {
      "latitude": 49.477718,
      "longitude": 8.153043,
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
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1645273881,
      "ems": null
    },
    {
      "latitude": 49.476555,
      "longitude": 8.15334,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1645273884,
      "ems": null
    },
    {
      "latitude": 49.475437,
      "longitude": 8.153563,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1645273887,
      "ems": null
    },
    {
      "latitude": 49.474365,
      "longitude": 8.153663,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1645273890,
      "ems": null
    },
    {
      "latitude": 49.473343,
      "longitude": 8.15386,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1645273893,
      "ems": null
    },
    {
      "latitude": 49.472225,
      "longitude": 8.153934,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1645273896,
      "ems": null
    },
    {
      "latitude": 49.471111,
      "longitude": 8.153786,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 186,
      "squawk": "4451",
      "timestamp": 1645273899,
      "ems": null
    },
    {
      "latitude": 49.469009,
      "longitude": 8.153229,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1645273905,
      "ems": null
    },
    {
      "latitude": 49.467991,
      "longitude": 8.153043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645273908,
      "ems": null
    },
    {
      "latitude": 49.466995,
      "longitude": 8.152795,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645273911,
      "ems": null
    },
    {
      "latitude": 49.465897,
      "longitude": 8.152578,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645273914,
      "ems": null
    },
    {
      "latitude": 49.464966,
      "longitude": 8.152301,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645273917,
      "ems": null
    },
    {
      "latitude": 49.463848,
      "longitude": 8.152004,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645273920,
      "ems": null
    },
    {
      "latitude": 49.462784,
      "longitude": 8.151567,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645273923,
      "ems": null
    },
    {
      "latitude": 49.461704,
      "longitude": 8.151187,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645273926,
      "ems": null
    },
    {
      "latitude": 49.460861,
      "longitude": 8.150844,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645273929,
      "ems": null
    },
    {
      "latitude": 49.459625,
      "longitude": 8.150266,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645273932,
      "ems": null
    },
    {
      "latitude": 49.457657,
      "longitude": 8.150074,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1645273938,
      "ems": null
    },
    {
      "latitude": 49.456398,
      "longitude": 8.150445,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273941,
      "ems": null
    },
    {
      "latitude": 49.455322,
      "longitude": 8.150916,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273944,
      "ems": null
    },
    {
      "latitude": 49.454361,
      "longitude": 8.151711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645273947,
      "ems": null
    },
    {
      "latitude": 49.453354,
      "longitude": 8.152867,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645273950,
      "ems": null
    },
    {
      "latitude": 49.452488,
      "longitude": 8.154157,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273953,
      "ems": null
    },
    {
      "latitude": 49.451614,
      "longitude": 8.155469,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645273956,
      "ems": null
    },
    {
      "latitude": 49.450653,
      "longitude": 8.156915,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645273959,
      "ems": null
    },
    {
      "latitude": 49.449829,
      "longitude": 8.157999,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645273962,
      "ems": null
    },
    {
      "latitude": 49.448856,
      "longitude": 8.15913,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645273965,
      "ems": null
    },
    {
      "latitude": 49.447647,
      "longitude": 8.160095,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645273968,
      "ems": null
    },
    {
      "latitude": 49.446533,
      "longitude": 8.160818,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273971,
      "ems": null
    },
    {
      "latitude": 49.444157,
      "longitude": 8.162248,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273977,
      "ems": null
    },
    {
      "latitude": 49.443008,
      "longitude": 8.162987,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645273980,
      "ems": null
    },
    {
      "latitude": 49.441635,
      "longitude": 8.163781,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645273983,
      "ems": null
    },
    {
      "latitude": 49.440399,
      "longitude": 8.164432,
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645273986,
      "ems": null
    },
    {
      "latitude": 49.439129,
      "longitude": 8.164994,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273989,
      "ems": null
    },
    {
      "latitude": 49.438011,
      "longitude": 8.165365,
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645273992,
      "ems": null
    },
    {
      "latitude": 49.436829,
      "longitude": 8.16595,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645273995,
      "ems": null
    },
    {
      "latitude": 49.434265,
      "longitude": 8.167612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274001,
      "ems": null
    },
    {
      "latitude": 49.433075,
      "longitude": 8.168558,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274004,
      "ems": null
    },
    {
      "latitude": 49.431911,
      "longitude": 8.169522,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274007,
      "ems": null
    },
    {
      "latitude": 49.430923,
      "longitude": 8.170359,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274010,
      "ems": null
    },
    {
      "latitude": 49.429596,
      "longitude": 8.171443,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645274013,
      "ems": null
    },
    {
      "latitude": 49.428406,
      "longitude": 8.172382,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274016,
      "ems": null
    },
    {
      "latitude": 49.427353,
      "longitude": 8.173265,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274019,
      "ems": null
    },
    {
      "latitude": 49.426117,
      "longitude": 8.174321,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274022,
      "ems": null
    },
    {
      "latitude": 49.425022,
      "longitude": 8.175346,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274025,
      "ems": null
    },
    {
      "latitude": 49.423954,
      "longitude": 8.176575,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645274028,
      "ems": null
    },
    {
      "latitude": 49.422974,
      "longitude": 8.177732,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645274031,
      "ems": null
    },
    {
      "latitude": 49.42181,
      "longitude": 8.179032,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274034,
      "ems": null
    },
    {
      "latitude": 49.420788,
      "longitude": 8.180117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274037,
      "ems": null
    },
    {
      "latitude": 49.419754,
      "longitude": 8.181364,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274040,
      "ems": null
    },
    {
      "latitude": 49.418701,
      "longitude": 8.182772,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645274043,
      "ems": null
    },
    {
      "latitude": 49.41774,
      "longitude": 8.183899,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274046,
      "ems": null
    },
    {
      "latitude": 49.416641,
      "longitude": 8.185308,
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645274049,
      "ems": null
    },
    {
      "latitude": 49.415619,
      "longitude": 8.186622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274052,
      "ems": null
    },
    {
      "latitude": 49.414673,
      "longitude": 8.187913,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274055,
      "ems": null
    },
    {
      "latitude": 49.413895,
      "longitude": 8.18904,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274058,
      "ems": null
    },
    {
      "latitude": 49.413025,
      "longitude": 8.190378,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274061,
      "ems": null
    },
    {
      "latitude": 49.412109,
      "longitude": 8.191716,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645274064,
      "ems": null
    },
    {
      "latitude": 49.411198,
      "longitude": 8.193054,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274067,
      "ems": null
    },
    {
      "latitude": 49.410324,
      "longitude": 8.194392,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274070,
      "ems": null
    },
    {
      "latitude": 49.409363,
      "longitude": 8.195871,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274073,
      "ems": null
    },
    {
      "latitude": 49.408543,
      "longitude": 8.197174,
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
      "heading": 133,
      "squawk": "4451",
      "timestamp": 1645274076,
      "ems": null
    },
    {
      "latitude": 49.406799,
      "longitude": 8.199885,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645274082,
      "ems": null
    },
    {
      "latitude": 49.405098,
      "longitude": 8.202306,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274088,
      "ems": null
    },
    {
      "latitude": 49.403191,
      "longitude": 8.204836,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274094,
      "ems": null
    },
    {
      "latitude": 49.402359,
      "longitude": 8.205872,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274097,
      "ems": null
    },
    {
      "latitude": 49.401516,
      "longitude": 8.207004,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274100,
      "ems": null
    },
    {
      "latitude": 49.400528,
      "longitude": 8.208125,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274103,
      "ems": null
    },
    {
      "latitude": 49.399612,
      "longitude": 8.209252,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274106,
      "ems": null
    },
    {
      "latitude": 49.398628,
      "longitude": 8.210112,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645274109,
      "ems": null
    },
    {
      "latitude": 49.397556,
      "longitude": 8.210835,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645274112,
      "ems": null
    },
    {
      "latitude": 49.396347,
      "longitude": 8.211557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645274115,
      "ems": null
    },
    {
      "latitude": 49.395264,
      "longitude": 8.212492,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274118,
      "ems": null
    },
    {
      "latitude": 49.394344,
      "longitude": 8.213365,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274121,
      "ems": null
    },
    {
      "latitude": 49.393341,
      "longitude": 8.214393,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274124,
      "ems": null
    },
    {
      "latitude": 49.392334,
      "longitude": 8.215308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274127,
      "ems": null
    },
    {
      "latitude": 49.391319,
      "longitude": 8.216328,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274130,
      "ems": null
    },
    {
      "latitude": 49.390388,
      "longitude": 8.21734,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274134,
      "ems": null
    },
    {
      "latitude": 49.389359,
      "longitude": 8.218337,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274136,
      "ems": null
    },
    {
      "latitude": 49.387131,
      "longitude": 8.219942,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645274143,
      "ems": null
    },
    {
      "latitude": 49.38501,
      "longitude": 8.221717,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274149,
      "ems": null
    },
    {
      "latitude": 49.382938,
      "longitude": 8.223483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274154,
      "ems": null
    },
    {
      "latitude": 49.380844,
      "longitude": 8.225379,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274161,
      "ems": null
    },
    {
      "latitude": 49.379745,
      "longitude": 8.226295,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645274164,
      "ems": null
    },
    {
      "latitude": 49.378647,
      "longitude": 8.22707,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645274166,
      "ems": null
    },
    {
      "latitude": 49.376358,
      "longitude": 8.228619,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1645274173,
      "ems": null
    },
    {
      "latitude": 49.375305,
      "longitude": 8.229253,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645274175,
      "ems": null
    },
    {
      "latitude": 49.374161,
      "longitude": 8.230027,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645274178,
      "ems": null
    },
    {
      "latitude": 49.372978,
      "longitude": 8.230639,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645274182,
      "ems": null
    },
    {
      "latitude": 49.371769,
      "longitude": 8.231217,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645274184,
      "ems": null
    },
    {
      "latitude": 49.370556,
      "longitude": 8.231868,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645274187,
      "ems": null
    },
    {
      "latitude": 49.369308,
      "longitude": 8.232563,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645274190,
      "ems": null
    },
    {
      "latitude": 49.368088,
      "longitude": 8.233241,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645274193,
      "ems": null
    },
    {
      "latitude": 49.366333,
      "longitude": 8.234465,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645274200,
      "ems": null
    },
    {
      "latitude": 49.363586,
      "longitude": 8.236225,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1645274206,
      "ems": null
    },
    {
      "latitude": 49.361713,
      "longitude": 8.237144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645274211,
      "ems": null
    },
    {
      "latitude": 49.359013,
      "longitude": 8.238373,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645274218,
      "ems": null
    },
    {
      "latitude": 49.356674,
      "longitude": 8.239605,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1645274224,
      "ems": null
    },
    {
      "latitude": 49.355427,
      "longitude": 8.240252,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645274227,
      "ems": null
    },
    {
      "latitude": 49.354263,
      "longitude": 8.24083,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645274230,
      "ems": null
    },
    {
      "latitude": 49.353287,
      "longitude": 8.241336,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1645274233,
      "ems": null
    },
    {
      "latitude": 49.351913,
      "longitude": 8.242141,
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
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1645274236,
      "ems": null
    },
    {
      "latitude": 49.351006,
      "longitude": 8.242999,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274239,
      "ems": null
    },
    {
      "latitude": 49.349979,
      "longitude": 8.244372,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274242,
      "ems": null
    },
    {
      "latitude": 49.349094,
      "longitude": 8.245601,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274245,
      "ems": null
    },
    {
      "latitude": 49.348072,
      "longitude": 8.247046,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645274248,
      "ems": null
    },
    {
      "latitude": 49.347561,
      "longitude": 8.247769,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645274251,
      "ems": null
    },
    {
      "latitude": 49.346115,
      "longitude": 8.249866,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274254,
      "ems": null
    },
    {
      "latitude": 49.34528,
      "longitude": 8.251021,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274257,
      "ems": null
    },
    {
      "latitude": 49.344177,
      "longitude": 8.252563,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274260,
      "ems": null
    },
    {
      "latitude": 49.343216,
      "longitude": 8.253831,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274263,
      "ems": null
    },
    {
      "latitude": 49.342255,
      "longitude": 8.255029,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274266,
      "ems": null
    },
    {
      "latitude": 49.341339,
      "longitude": 8.256226,
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
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645274269,
      "ems": null
    },
    {
      "latitude": 49.3396,
      "longitude": 8.258394,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1645274275,
      "ems": null
    },
    {
      "latitude": 49.338482,
      "longitude": 8.259623,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274278,
      "ems": null
    },
    {
      "latitude": 49.33746,
      "longitude": 8.260707,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274281,
      "ems": null
    },
    {
      "latitude": 49.336246,
      "longitude": 8.261791,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274284,
      "ems": null
    },
    {
      "latitude": 49.335526,
      "longitude": 8.262423,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274287,
      "ems": null
    },
    {
      "latitude": 49.334339,
      "longitude": 8.263598,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274290,
      "ems": null
    },
    {
      "latitude": 49.33313,
      "longitude": 8.264682,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274293,
      "ems": null
    },
    {
      "latitude": 49.332058,
      "longitude": 8.265766,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274296,
      "ems": null
    },
    {
      "latitude": 49.330986,
      "longitude": 8.266778,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274299,
      "ems": null
    },
    {
      "latitude": 49.330288,
      "longitude": 8.267428,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274302,
      "ems": null
    },
    {
      "latitude": 49.3288,
      "longitude": 8.268802,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274305,
      "ems": null
    },
    {
      "latitude": 49.326736,
      "longitude": 8.270593,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274311,
      "ems": null
    },
    {
      "latitude": 49.324425,
      "longitude": 8.27256,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274317,
      "ems": null
    },
    {
      "latitude": 49.322388,
      "longitude": 8.274255,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274323,
      "ems": null
    },
    {
      "latitude": 49.320099,
      "longitude": 8.276155,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274329,
      "ems": null
    },
    {
      "latitude": 49.31786,
      "longitude": 8.278126,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274335,
      "ems": null
    },
    {
      "latitude": 49.315659,
      "longitude": 8.279959,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274341,
      "ems": null
    },
    {
      "latitude": 49.313625,
      "longitude": 8.281884,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274347,
      "ems": null
    },
    {
      "latitude": 49.312321,
      "longitude": 8.283257,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274350,
      "ems": null
    },
    {
      "latitude": 49.311218,
      "longitude": 8.284395,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274353,
      "ems": null
    },
    {
      "latitude": 49.309013,
      "longitude": 8.28651,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274359,
      "ems": null
    },
    {
      "latitude": 49.306915,
      "longitude": 8.28841,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274365,
      "ems": null
    },
    {
      "latitude": 49.304359,
      "longitude": 8.29063,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274371,
      "ems": null
    },
    {
      "latitude": 49.302078,
      "longitude": 8.292582,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274377,
      "ems": null
    },
    {
      "latitude": 49.300827,
      "longitude": 8.293621,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274380,
      "ems": null
    },
    {
      "latitude": 49.299637,
      "longitude": 8.294537,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274383,
      "ems": null
    },
    {
      "latitude": 49.297516,
      "longitude": 8.296485,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274389,
      "ems": null
    },
    {
      "latitude": 49.295235,
      "longitude": 8.29887,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274395,
      "ems": null
    },
    {
      "latitude": 49.294163,
      "longitude": 8.299954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274398,
      "ems": null
    },
    {
      "latitude": 49.29213,
      "longitude": 8.301861,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274404,
      "ems": null
    },
    {
      "latitude": 49.291031,
      "longitude": 8.302917,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274407,
      "ems": null
    },
    {
      "latitude": 49.288719,
      "longitude": 8.305086,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274413,
      "ems": null
    },
    {
      "latitude": 49.286774,
      "longitude": 8.306931,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274419,
      "ems": null
    },
    {
      "latitude": 49.284622,
      "longitude": 8.309114,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274425,
      "ems": null
    },
    {
      "latitude": 49.283707,
      "longitude": 8.310453,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1645274428,
      "ems": null
    },
    {
      "latitude": 49.283112,
      "longitude": 8.311369,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274431,
      "ems": null
    },
    {
      "latitude": 49.282341,
      "longitude": 8.312458,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274434,
      "ems": null
    },
    {
      "latitude": 49.280991,
      "longitude": 8.314554,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645274437,
      "ems": null
    },
    {
      "latitude": 49.280228,
      "longitude": 8.315805,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645274440,
      "ems": null
    },
    {
      "latitude": 49.279873,
      "longitude": 8.316289,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645274441,
      "ems": null
    },
    {
      "latitude": 49.278896,
      "longitude": 8.318024,
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
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1645274446,
      "ems": null
    },
    {
      "latitude": 49.277298,
      "longitude": 8.320664,
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
      "heading": 134,
      "squawk": "4451",
      "timestamp": 1645274450,
      "ems": null
    },
    {
      "latitude": 49.275589,
      "longitude": 8.323155,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274455,
      "ems": null
    },
    {
      "latitude": 49.273636,
      "longitude": 8.325876,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274462,
      "ems": null
    },
    {
      "latitude": 49.271713,
      "longitude": 8.328411,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274468,
      "ems": null
    },
    {
      "latitude": 49.269836,
      "longitude": 8.330947,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274474,
      "ems": null
    },
    {
      "latitude": 49.268887,
      "longitude": 8.332191,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1645274477,
      "ems": null
    },
    {
      "latitude": 49.26796,
      "longitude": 8.333271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645274480,
      "ems": null
    },
    {
      "latitude": 49.267025,
      "longitude": 8.334358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645274483,
      "ems": null
    },
    {
      "latitude": 49.265907,
      "longitude": 8.335588,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645274486,
      "ems": null
    },
    {
      "latitude": 49.264931,
      "longitude": 8.336672,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274489,
      "ems": null
    },
    {
      "latitude": 49.263885,
      "longitude": 8.337708,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274492,
      "ems": null
    },
    {
      "latitude": 49.263069,
      "longitude": 8.338478,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274495,
      "ems": null
    },
    {
      "latitude": 49.262043,
      "longitude": 8.339418,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274498,
      "ems": null
    },
    {
      "latitude": 49.261002,
      "longitude": 8.340384,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274501,
      "ems": null
    },
    {
      "latitude": 49.259857,
      "longitude": 8.341511,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274504,
      "ems": null
    },
    {
      "latitude": 49.258072,
      "longitude": 8.343623,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1645274510,
      "ems": null
    },
    {
      "latitude": 49.25647,
      "longitude": 8.345243,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274516,
      "ems": null
    },
    {
      "latitude": 49.254131,
      "longitude": 8.347441,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274522,
      "ems": null
    },
    {
      "latitude": 49.252213,
      "longitude": 8.349328,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274527,
      "ems": null
    },
    {
      "latitude": 49.249569,
      "longitude": 8.352139,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1645274535,
      "ems": null
    },
    {
      "latitude": 49.246948,
      "longitude": 8.354891,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274543,
      "ems": null
    },
    {
      "latitude": 49.244026,
      "longitude": 8.357994,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1645274551,
      "ems": null
    },
    {
      "latitude": 49.241512,
      "longitude": 8.360523,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274559,
      "ems": null
    },
    {
      "latitude": 49.239944,
      "longitude": 8.361863,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274563,
      "ems": null
    },
    {
      "latitude": 49.238892,
      "longitude": 8.362708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645274566,
      "ems": null
    },
    {
      "latitude": 49.237701,
      "longitude": 8.363554,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1645274569,
      "ems": null
    },
    {
      "latitude": 49.236767,
      "longitude": 8.364354,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274572,
      "ems": null
    },
    {
      "latitude": 49.235695,
      "longitude": 8.365366,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274575,
      "ems": null
    },
    {
      "latitude": 49.234577,
      "longitude": 8.366234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1645274578,
      "ems": null
    },
    {
      "latitude": 49.233738,
      "longitude": 8.366956,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645274581,
      "ems": null
    },
    {
      "latitude": 49.232712,
      "longitude": 8.367708,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1645274584,
      "ems": null
    },
    {
      "latitude": 49.230606,
      "longitude": 8.369117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1645274590,
      "ems": null
    },
    {
      "latitude": 49.228664,
      "longitude": 8.370354,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1645274596,
      "ems": null
    },
    {
      "latitude": 49.227596,
      "longitude": 8.370932,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1645274599,
      "ems": null
    },
    {
      "latitude": 49.22657,
      "longitude": 8.371366,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645274602,
      "ems": null
    },
    {
      "latitude": 49.225525,
      "longitude": 8.371723,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1645274605,
      "ems": null
    },
    {
      "latitude": 49.224567,
      "longitude": 8.37216,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645274608,
      "ems": null
    },
    {
      "latitude": 49.223373,
      "longitude": 8.372709,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1645274611,
      "ems": null
    },
    {
      "latitude": 49.221634,
      "longitude": 8.373906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1645274617,
      "ems": null
    },
    {
      "latitude": 49.220612,
      "longitude": 8.375124,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274620,
      "ems": null
    },
    {
      "latitude": 49.219822,
      "longitude": 8.37628,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274623,
      "ems": null
    },
    {
      "latitude": 49.218933,
      "longitude": 8.377498,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274626,
      "ems": null
    },
    {
      "latitude": 49.21833,
      "longitude": 8.378376,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274630,
      "ems": null
    },
    {
      "latitude": 49.217213,
      "longitude": 8.380038,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274633,
      "ems": null
    },
    {
      "latitude": 49.216656,
      "longitude": 8.380906,
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
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274635,
      "ems": null
    },
    {
      "latitude": 49.215546,
      "longitude": 8.382427,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1645274639,
      "ems": null
    },
    {
      "latitude": 49.214748,
      "longitude": 8.383508,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274642,
      "ems": null
    },
    {
      "latitude": 49.213165,
      "longitude": 8.385737,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1645274648,
      "ems": null
    },
    {
      "latitude": 49.211487,
      "longitude": 8.388206,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274653,
      "ems": null
    },
    {
      "latitude": 49.208553,
      "longitude": 8.392109,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1645274661,
      "ems": null
    },
    {
      "latitude": 49.206413,
      "longitude": 8.394928,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1645274669,
      "ems": null
    },
    {
      "latitude": 49.204651,
      "longitude": 8.396935,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1645274675,
      "ems": null
    },
    {
      "latitude": 49.203712,
      "longitude": 8.39782,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274678,
      "ems": null
    },
    {
      "latitude": 49.202957,
      "longitude": 8.398555,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1645274681,
      "ems": null
    },
    {
      "latitude": 49.201904,
      "longitude": 8.39947,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274684,
      "ems": null
    },
    {
      "latitude": 49.201309,
      "longitude": 8.400034,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274687,
      "ems": null
    },
    {
      "latitude": 49.200268,
      "longitude": 8.400999,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1645274689,
      "ems": null
    },
    {
      "latitude": 49.199158,
      "longitude": 8.402006,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1645274693,
      "ems": null
    },
    {
      "latitude": 49.198315,
      "longitude": 8.402734,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1645274696,
      "ems": null
    },
    {
      "latitude": 49.197418,
      "longitude": 8.403484,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1645274699,
      "ems": null
    },
    {
      "latitude": 49.196545,
      "longitude": 8.403963,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1645274702,
      "ems": null
    },
    {
      "latitude": 49.195541,
      "longitude": 8.40426,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1645274705,
      "ems": null
    },
    {
      "latitude": 49.194588,
      "longitude": 8.40418,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1645274708,
      "ems": null
    },
    {
      "latitude": 49.193619,
      "longitude": 8.403696,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645274711,
      "ems": null
    },
    {
      "latitude": 49.192886,
      "longitude": 8.403132,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1645274714,
      "ems": null
    },
    {
      "latitude": 49.191982,
      "longitude": 8.402517,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645274717,
      "ems": null
    },
    {
      "latitude": 49.191101,
      "longitude": 8.401936,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274720,
      "ems": null
    },
    {
      "latitude": 49.190231,
      "longitude": 8.401443,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645274723,
      "ems": null
    },
    {
      "latitude": 49.189377,
      "longitude": 8.400855,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645274726,
      "ems": null
    },
    {
      "latitude": 49.188538,
      "longitude": 8.400245,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1645274729,
      "ems": null
    },
    {
      "latitude": 49.187698,
      "longitude": 8.399626,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1645274732,
      "ems": null
    },
    {
      "latitude": 49.186813,
      "longitude": 8.399048,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645274735,
      "ems": null
    },
    {
      "latitude": 49.185837,
      "longitude": 8.398397,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274738,
      "ems": null
    },
    {
      "latitude": 49.184906,
      "longitude": 8.397964,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645274741,
      "ems": null
    },
    {
      "latitude": 49.184052,
      "longitude": 8.397639,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1645274744,
      "ems": null
    },
    {
      "latitude": 49.182999,
      "longitude": 8.397386,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1645274747,
      "ems": null
    },
    {
      "latitude": 49.182037,
      "longitude": 8.397146,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 191,
      "squawk": "4451",
      "timestamp": 1645274750,
      "ems": null
    },
    {
      "latitude": 49.181087,
      "longitude": 8.396735,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645274753,
      "ems": null
    },
    {
      "latitude": 49.180157,
      "longitude": 8.396374,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645274756,
      "ems": null
    },
    {
      "latitude": 49.17918,
      "longitude": 8.39594,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645274759,
      "ems": null
    },
    {
      "latitude": 49.178238,
      "longitude": 8.395597,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645274762,
      "ems": null
    },
    {
      "latitude": 49.177277,
      "longitude": 8.395174,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645274765,
      "ems": null
    },
    {
      "latitude": 49.176296,
      "longitude": 8.394783,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645274768,
      "ems": null
    },
    {
      "latitude": 49.175411,
      "longitude": 8.394422,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1645274771,
      "ems": null
    },
    {
      "latitude": 49.173477,
      "longitude": 8.393836,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1645274777,
      "ems": null
    },
    {
      "latitude": 49.171509,
      "longitude": 8.393203,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645274783,
      "ems": null
    },
    {
      "latitude": 49.169685,
      "longitude": 8.392254,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274789,
      "ems": null
    },
    {
      "latitude": 49.168892,
      "longitude": 8.391747,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645274792,
      "ems": null
    },
    {
      "latitude": 49.168007,
      "longitude": 8.39117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274795,
      "ems": null
    },
    {
      "latitude": 49.167114,
      "longitude": 8.390667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274798,
      "ems": null
    },
    {
      "latitude": 49.166199,
      "longitude": 8.390174,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645274801,
      "ems": null
    },
    {
      "latitude": 49.165283,
      "longitude": 8.389681,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645274804,
      "ems": null
    },
    {
      "latitude": 49.164425,
      "longitude": 8.389218,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274807,
      "ems": null
    },
    {
      "latitude": 49.163399,
      "longitude": 8.388712,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274810,
      "ems": null
    },
    {
      "latitude": 49.161957,
      "longitude": 8.387773,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274816,
      "ems": null
    },
    {
      "latitude": 49.160156,
      "longitude": 8.386724,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274822,
      "ems": null
    },
    {
      "latitude": 49.158188,
      "longitude": 8.385596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274828,
      "ems": null
    },
    {
      "latitude": 49.156368,
      "longitude": 8.38452,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274834,
      "ems": null
    },
    {
      "latitude": 49.154648,
      "longitude": 8.383653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645274840,
      "ems": null
    },
    {
      "latitude": 49.153748,
      "longitude": 8.383272,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645274843,
      "ems": null
    },
    {
      "latitude": 49.15274,
      "longitude": 8.38292,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645274846,
      "ems": null
    },
    {
      "latitude": 49.151779,
      "longitude": 8.382568,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645274849,
      "ems": null
    },
    {
      "latitude": 49.149948,
      "longitude": 8.381653,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274855,
      "ems": null
    },
    {
      "latitude": 49.148224,
      "longitude": 8.380617,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274861,
      "ems": null
    },
    {
      "latitude": 49.146515,
      "longitude": 8.37961,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274867,
      "ems": null
    },
    {
      "latitude": 49.145569,
      "longitude": 8.379099,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274870,
      "ems": null
    },
    {
      "latitude": 49.144825,
      "longitude": 8.378665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645274873,
      "ems": null
    },
    {
      "latitude": 49.14386,
      "longitude": 8.377991,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274876,
      "ems": null
    },
    {
      "latitude": 49.14212,
      "longitude": 8.377075,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645274882,
      "ems": null
    },
    {
      "latitude": 49.140289,
      "longitude": 8.37616,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274888,
      "ems": null
    },
    {
      "latitude": 49.138504,
      "longitude": 8.375103,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274894,
      "ems": null
    },
    {
      "latitude": 49.136772,
      "longitude": 8.37404,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274900,
      "ems": null
    },
    {
      "latitude": 49.135208,
      "longitude": 8.373061,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274906,
      "ems": null
    },
    {
      "latitude": 49.133377,
      "longitude": 8.372075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274912,
      "ems": null
    },
    {
      "latitude": 49.131649,
      "longitude": 8.371076,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274918,
      "ems": null
    },
    {
      "latitude": 49.129852,
      "longitude": 8.370173,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645274924,
      "ems": null
    },
    {
      "latitude": 49.128952,
      "longitude": 8.369847,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645274927,
      "ems": null
    },
    {
      "latitude": 49.128021,
      "longitude": 8.36947,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645274930,
      "ems": null
    },
    {
      "latitude": 49.126099,
      "longitude": 8.368484,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645274936,
      "ems": null
    },
    {
      "latitude": 49.124249,
      "longitude": 8.367607,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645274942,
      "ems": null
    },
    {
      "latitude": 49.123363,
      "longitude": 8.367246,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645274945,
      "ems": null
    },
    {
      "latitude": 49.121292,
      "longitude": 8.36623,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645274951,
      "ems": null
    },
    {
      "latitude": 49.119461,
      "longitude": 8.365314,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645274957,
      "ems": null
    },
    {
      "latitude": 49.117405,
      "longitude": 8.364354,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645274963,
      "ems": null
    },
    {
      "latitude": 49.115402,
      "longitude": 8.363342,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645274969,
      "ems": null
    },
    {
      "latitude": 49.113464,
      "longitude": 8.362215,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645274975,
      "ems": null
    },
    {
      "latitude": 49.111401,
      "longitude": 8.36103,
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274981,
      "ems": null
    },
    {
      "latitude": 49.110424,
      "longitude": 8.360451,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645274984,
      "ems": null
    },
    {
      "latitude": 49.109482,
      "longitude": 8.359821,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645274987,
      "ems": null
    },
    {
      "latitude": 49.108562,
      "longitude": 8.359222,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645274990,
      "ems": null
    },
    {
      "latitude": 49.10656,
      "longitude": 8.358066,
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645274996,
      "ems": null
    },
    {
      "latitude": 49.104511,
      "longitude": 8.356837,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645275002,
      "ems": null
    },
    {
      "latitude": 49.102478,
      "longitude": 8.355877,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275008,
      "ems": null
    },
    {
      "latitude": 49.101299,
      "longitude": 8.355319,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275011,
      "ems": null
    },
    {
      "latitude": 49.100323,
      "longitude": 8.354814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275014,
      "ems": null
    },
    {
      "latitude": 49.099136,
      "longitude": 8.354258,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645275017,
      "ems": null
    },
    {
      "latitude": 49.098225,
      "longitude": 8.353802,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275020,
      "ems": null
    },
    {
      "latitude": 49.096344,
      "longitude": 8.352849,
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275026,
      "ems": null
    },
    {
      "latitude": 49.095291,
      "longitude": 8.352356,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275029,
      "ems": null
    },
    {
      "latitude": 49.094364,
      "longitude": 8.352067,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 192,
      "squawk": "4451",
      "timestamp": 1645275032,
      "ems": null
    },
    {
      "latitude": 49.092453,
      "longitude": 8.351128,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645275038,
      "ems": null
    },
    {
      "latitude": 49.091709,
      "longitude": 8.350549,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1645275041,
      "ems": null
    },
    {
      "latitude": 49.09087,
      "longitude": 8.349898,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1645275044,
      "ems": null
    },
    {
      "latitude": 49.090073,
      "longitude": 8.349187,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 212,
      "squawk": "4451",
      "timestamp": 1645275047,
      "ems": null
    },
    {
      "latitude": 49.089432,
      "longitude": 8.348553,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 215,
      "squawk": "4451",
      "timestamp": 1645275050,
      "ems": null
    },
    {
      "latitude": 49.088654,
      "longitude": 8.347637,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 213,
      "squawk": "4451",
      "timestamp": 1645275054,
      "ems": null
    },
    {
      "latitude": 49.087936,
      "longitude": 8.347008,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1645275057,
      "ems": null
    },
    {
      "latitude": 49.087189,
      "longitude": 8.34637,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 207,
      "squawk": "4451",
      "timestamp": 1645275060,
      "ems": null
    },
    {
      "latitude": 49.086456,
      "longitude": 8.345806,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1645275063,
      "ems": null
    },
    {
      "latitude": 49.084633,
      "longitude": 8.344694,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275069,
      "ems": null
    },
    {
      "latitude": 49.083843,
      "longitude": 8.344333,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645275072,
      "ems": null
    },
    {
      "latitude": 49.083004,
      "longitude": 8.343755,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645275075,
      "ems": null
    },
    {
      "latitude": 49.08197,
      "longitude": 8.34313,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275078,
      "ems": null
    },
    {
      "latitude": 49.081055,
      "longitude": 8.342566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645275081,
      "ems": null
    },
    {
      "latitude": 49.080166,
      "longitude": 8.341948,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645275084,
      "ems": null
    },
    {
      "latitude": 49.079224,
      "longitude": 8.341299,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645275087,
      "ems": null
    },
    {
      "latitude": 49.0783,
      "longitude": 8.340719,
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275090,
      "ems": null
    },
    {
      "latitude": 49.077438,
      "longitude": 8.340242,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645275093,
      "ems": null
    },
    {
      "latitude": 49.075508,
      "longitude": 8.339273,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275099,
      "ems": null
    },
    {
      "latitude": 49.073593,
      "longitude": 8.338411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275105,
      "ems": null
    },
    {
      "latitude": 49.072769,
      "longitude": 8.338059,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275108,
      "ems": null
    },
    {
      "latitude": 49.071926,
      "longitude": 8.337684,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275111,
      "ems": null
    },
    {
      "latitude": 49.069923,
      "longitude": 8.336527,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645275117,
      "ems": null
    },
    {
      "latitude": 49.068146,
      "longitude": 8.335313,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1645275123,
      "ems": null
    },
    {
      "latitude": 49.066269,
      "longitude": 8.334327,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275129,
      "ems": null
    },
    {
      "latitude": 49.064384,
      "longitude": 8.333491,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275135,
      "ems": null
    },
    {
      "latitude": 49.062569,
      "longitude": 8.332768,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645275141,
      "ems": null
    },
    {
      "latitude": 49.061684,
      "longitude": 8.332479,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275144,
      "ems": null
    },
    {
      "latitude": 49.060658,
      "longitude": 8.331973,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275147,
      "ems": null
    },
    {
      "latitude": 49.05986,
      "longitude": 8.33158,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275150,
      "ems": null
    },
    {
      "latitude": 49.057983,
      "longitude": 8.330524,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645275156,
      "ems": null
    },
    {
      "latitude": 49.057076,
      "longitude": 8.329949,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275159,
      "ems": null
    },
    {
      "latitude": 49.056015,
      "longitude": 8.329327,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645275162,
      "ems": null
    },
    {
      "latitude": 49.055164,
      "longitude": 8.328865,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275165,
      "ems": null
    },
    {
      "latitude": 49.054142,
      "longitude": 8.328215,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275168,
      "ems": null
    },
    {
      "latitude": 49.05228,
      "longitude": 8.327275,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275174,
      "ems": null
    },
    {
      "latitude": 49.050323,
      "longitude": 8.326336,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275180,
      "ems": null
    },
    {
      "latitude": 49.048096,
      "longitude": 8.325313,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275186,
      "ems": null
    },
    {
      "latitude": 49.047134,
      "longitude": 8.324961,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645275189,
      "ems": null
    },
    {
      "latitude": 49.04604,
      "longitude": 8.324601,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275192,
      "ems": null
    },
    {
      "latitude": 49.045017,
      "longitude": 8.324167,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275195,
      "ems": null
    },
    {
      "latitude": 49.043976,
      "longitude": 8.323763,
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
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275198,
      "ems": null
    },
    {
      "latitude": 49.041992,
      "longitude": 8.322866,
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
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645275204,
      "ems": null
    },
    {
      "latitude": 49.040085,
      "longitude": 8.321792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645275210,
      "ems": null
    },
    {
      "latitude": 49.0383,
      "longitude": 8.320806,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275216,
      "ems": null
    },
    {
      "latitude": 49.037292,
      "longitude": 8.320171,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "4451",
      "timestamp": 1645275219,
      "ems": null
    },
    {
      "latitude": 49.036312,
      "longitude": 8.319686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645275222,
      "ems": null
    },
    {
      "latitude": 49.035381,
      "longitude": 8.319108,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "4451",
      "timestamp": 1645275225,
      "ems": null
    },
    {
      "latitude": 49.03363,
      "longitude": 8.31813,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275231,
      "ems": null
    },
    {
      "latitude": 49.031708,
      "longitude": 8.317073,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275237,
      "ems": null
    },
    {
      "latitude": 49.029831,
      "longitude": 8.316087,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1645275243,
      "ems": null
    },
    {
      "latitude": 49.028,
      "longitude": 8.315101,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275249,
      "ems": null
    },
    {
      "latitude": 49.026257,
      "longitude": 8.314049,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275255,
      "ems": null
    },
    {
      "latitude": 49.024487,
      "longitude": 8.313037,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275261,
      "ems": null
    },
    {
      "latitude": 49.02269,
      "longitude": 8.312002,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275267,
      "ems": null
    },
    {
      "latitude": 49.020855,
      "longitude": 8.310796,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645275273,
      "ems": null
    },
    {
      "latitude": 49.01889,
      "longitude": 8.309538,
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
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645275279,
      "ems": null
    },
    {
      "latitude": 49.016968,
      "longitude": 8.30834,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "4451",
      "timestamp": 1645275285,
      "ems": null
    },
    {
      "latitude": 49.014896,
      "longitude": 8.307326,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 196,
      "squawk": "4451",
      "timestamp": 1645275291,
      "ems": null
    },
    {
      "latitude": 49.013828,
      "longitude": 8.306821,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275294,
      "ems": null
    },
    {
      "latitude": 49.012848,
      "longitude": 8.306459,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275297,
      "ems": null
    },
    {
      "latitude": 49.011871,
      "longitude": 8.306026,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1645275300,
      "ems": null
    },
    {
      "latitude": 49.010986,
      "longitude": 8.305664,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275303,
      "ems": null
    },
    {
      "latitude": 49.01001,
      "longitude": 8.305312,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275306,
      "ems": null
    },
    {
      "latitude": 49.008892,
      "longitude": 8.304869,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275309,
      "ems": null
    },
    {
      "latitude": 49.007915,
      "longitude": 8.304507,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1645275312,
      "ems": null
    },
    {
      "latitude": 49.005936,
      "longitude": 8.303621,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275318,
      "ems": null
    },
    {
      "latitude": 49.004982,
      "longitude": 8.303134,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 201,
      "squawk": "4451",
      "timestamp": 1645275321,
      "ems": null
    },
    {
      "latitude": 49.004059,
      "longitude": 8.302424,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1645275324,
      "ems": null
    },
    {
      "latitude": 49.003143,
      "longitude": 8.30179,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645275327,
      "ems": null
    },
    {
      "latitude": 49.002235,
      "longitude": 8.301183,
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
      "heading": 204,
      "squawk": "4451",
      "timestamp": 1645275330,
      "ems": null
    },
    {
      "latitude": 49.00145,
      "longitude": 8.300593,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1645275333,
      "ems": null
    },
    {
      "latitude": 49.000561,
      "longitude": 8.299954,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "4451",
      "timestamp": 1645275336,
      "ems": null
    },
    {
      "latitude": 48.99971,
      "longitude": 8.299255,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1645275339,
      "ems": null
    },
    {
      "latitude": 48.997833,
      "longitude": 8.29834,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1645275345,
      "ems": null
    },
    {
      "latitude": 48.996788,
      "longitude": 8.298147,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645275348,
      "ems": null
    },
    {
      "latitude": 48.996002,
      "longitude": 8.297917,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645275351,
      "ems": null
    },
    {
      "latitude": 48.995022,
      "longitude": 8.297713,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 188,
      "squawk": "4451",
      "timestamp": 1645275354,
      "ems": null
    },
    {
      "latitude": 48.993904,
      "longitude": 8.297497,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1645275357,
      "ems": null
    },
    {
      "latitude": 48.993019,
      "longitude": 8.297279,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1645275360,
      "ems": null
    },
    {
      "latitude": 48.991974,
      "longitude": 8.297002,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 190,
      "squawk": "4451",
      "timestamp": 1645275363,
      "ems": null
    },
    {
      "latitude": 48.991058,
      "longitude": 8.296721,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1645275366,
      "ems": null
    },
    {
      "latitude": 48.990177,
      "longitude": 8.296268,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1645275369,
      "ems": null
    },
    {
      "latitude": 48.988403,
      "longitude": 8.295452,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1645275375,
      "ems": null
    },
    {
      "latitude": 48.987717,
      "longitude": 8.2951,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1645275378,
      "ems": null
    },
    {
      "latitude": 48.986435,
      "longitude": 8.294466,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1645275381,
      "ems": null
    },
    {
      "latitude": 48.984512,
      "longitude": 8.293762,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1645275388,
      "ems": null
    },
    {
      "latitude": 48.982407,
      "longitude": 8.29341,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1645275394,
      "ems": null
    },
    {
      "latitude": 48.981335,
      "longitude": 8.293159,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1645275397,
      "ems": null
    },
    {
      "latitude": 48.980392,
      "longitude": 8.292917,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1645275400,
      "ems": null
    },
    {
      "latitude": 48.979523,
      "longitude": 8.292635,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1645275403,
      "ems": null
    },
    {
      "latitude": 48.97847,
      "longitude": 8.292354,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1645275406,
      "ems": null
    },
    {
      "latitude": 48.977375,
      "longitude": 8.292076,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1645275409,
      "ems": null
    },
    {
      "latitude": 48.975422,
      "longitude": 8.291497,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1645275415,
      "ems": null
    },
    {
      "latitude": 48.973434,
      "longitude": 8.290945,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1645275421,
      "ems": null
    },
    {
      "latitude": 48.971375,
      "longitude": 8.290452,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1645275426,
      "ems": null
    },
    {
      "latitude": 48.969223,
      "longitude": 8.289959,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1645275433,
      "ems": null
    },
    {
      "latitude": 48.966995,
      "longitude": 8.289257,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1645275439,
      "ems": null
    },
    {
      "latitude": 48.964901,
      "longitude": 8.288462,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 194,
      "squawk": "7022",
      "timestamp": 1645275445,
      "ems": null
    },
    {
      "latitude": 48.962807,
      "longitude": 8.287811,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 190,
      "squawk": "7022",
      "timestamp": 1645275451,
      "ems": null
    },
    {
      "latitude": 48.960571,
      "longitude": 8.287088,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 194,
      "squawk": "7022",
      "timestamp": 1645275457,
      "ems": null
    },
    {
      "latitude": 48.959549,
      "longitude": 8.286654,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275460,
      "ems": null
    },
    {
      "latitude": 48.958466,
      "longitude": 8.285945,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7022",
      "timestamp": 1645275463,
      "ems": null
    },
    {
      "latitude": 48.957596,
      "longitude": 8.285381,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7022",
      "timestamp": 1645275466,
      "ems": null
    },
    {
      "latitude": 48.956589,
      "longitude": 8.284748,
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
      "heading": 201,
      "squawk": "7022",
      "timestamp": 1645275469,
      "ems": null
    },
    {
      "latitude": 48.955544,
      "longitude": 8.284198,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275472,
      "ems": null
    },
    {
      "latitude": 48.954391,
      "longitude": 8.283621,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275475,
      "ems": null
    },
    {
      "latitude": 48.953449,
      "longitude": 8.283185,
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
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275478,
      "ems": null
    },
    {
      "latitude": 48.951588,
      "longitude": 8.282463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7022",
      "timestamp": 1645275484,
      "ems": null
    },
    {
      "latitude": 48.949631,
      "longitude": 8.281579,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275490,
      "ems": null
    },
    {
      "latitude": 48.947525,
      "longitude": 8.280663,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "7022",
      "timestamp": 1645275496,
      "ems": null
    },
    {
      "latitude": 48.946106,
      "longitude": 8.280241,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 190,
      "squawk": "7022",
      "timestamp": 1645275501,
      "ems": null
    },
    {
      "latitude": 48.943359,
      "longitude": 8.279325,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "7022",
      "timestamp": 1645275508,
      "ems": null
    },
    {
      "latitude": 48.941345,
      "longitude": 8.27848,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275514,
      "ems": null
    },
    {
      "latitude": 48.939388,
      "longitude": 8.27762,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275520,
      "ems": null
    },
    {
      "latitude": 48.937389,
      "longitude": 8.276536,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275526,
      "ems": null
    },
    {
      "latitude": 48.936401,
      "longitude": 8.276015,
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
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275529,
      "ems": null
    },
    {
      "latitude": 48.935486,
      "longitude": 8.275522,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275532,
      "ems": null
    },
    {
      "latitude": 48.934387,
      "longitude": 8.274959,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275535,
      "ems": null
    },
    {
      "latitude": 48.932327,
      "longitude": 8.273902,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275541,
      "ems": null
    },
    {
      "latitude": 48.93045,
      "longitude": 8.272846,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "7022",
      "timestamp": 1645275547,
      "ems": null
    },
    {
      "latitude": 48.928497,
      "longitude": 8.271766,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275553,
      "ems": null
    },
    {
      "latitude": 48.926559,
      "longitude": 8.270874,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275559,
      "ems": null
    },
    {
      "latitude": 48.924587,
      "longitude": 8.269742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7022",
      "timestamp": 1645275565,
      "ems": null
    },
    {
      "latitude": 48.922623,
      "longitude": 8.26855,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275571,
      "ems": null
    },
    {
      "latitude": 48.920723,
      "longitude": 8.267501,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275577,
      "ems": null
    },
    {
      "latitude": 48.918732,
      "longitude": 8.266438,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275583,
      "ems": null
    },
    {
      "latitude": 48.916485,
      "longitude": 8.265405,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275589,
      "ems": null
    },
    {
      "latitude": 48.914566,
      "longitude": 8.264465,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275595,
      "ems": null
    },
    {
      "latitude": 48.913738,
      "longitude": 8.264104,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "7022",
      "timestamp": 1645275598,
      "ems": null
    },
    {
      "latitude": 48.911774,
      "longitude": 8.263268,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275604,
      "ems": null
    },
    {
      "latitude": 48.909668,
      "longitude": 8.262282,
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
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275612,
      "ems": null
    },
    {
      "latitude": 48.906693,
      "longitude": 8.260803,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275620,
      "ems": null
    },
    {
      "latitude": 48.905453,
      "longitude": 8.259984,
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
      "heading": 202,
      "squawk": "7022",
      "timestamp": 1645275624,
      "ems": null
    },
    {
      "latitude": 48.90308,
      "longitude": 8.258827,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275632,
      "ems": null
    },
    {
      "latitude": 48.900604,
      "longitude": 8.257634,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275640,
      "ems": null
    },
    {
      "latitude": 48.898956,
      "longitude": 8.256789,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275646,
      "ems": null
    },
    {
      "latitude": 48.897076,
      "longitude": 8.255719,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275652,
      "ems": null
    },
    {
      "latitude": 48.895432,
      "longitude": 8.254817,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275658,
      "ems": null
    },
    {
      "latitude": 48.893555,
      "longitude": 8.25376,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275664,
      "ems": null
    },
    {
      "latitude": 48.891312,
      "longitude": 8.252845,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275670,
      "ems": null
    },
    {
      "latitude": 48.889301,
      "longitude": 8.251889,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275676,
      "ems": null
    },
    {
      "latitude": 48.887146,
      "longitude": 8.250732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275682,
      "ems": null
    },
    {
      "latitude": 48.885132,
      "longitude": 8.249676,
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
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275688,
      "ems": null
    },
    {
      "latitude": 48.882706,
      "longitude": 8.248479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275694,
      "ems": null
    },
    {
      "latitude": 48.880596,
      "longitude": 8.247479,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275700,
      "ems": null
    },
    {
      "latitude": 48.87822,
      "longitude": 8.246367,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275706,
      "ems": null
    },
    {
      "latitude": 48.875893,
      "longitude": 8.245312,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275712,
      "ems": null
    },
    {
      "latitude": 48.873703,
      "longitude": 8.2443,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275718,
      "ems": null
    },
    {
      "latitude": 48.871563,
      "longitude": 8.243288,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "7022",
      "timestamp": 1645275724,
      "ems": null
    },
    {
      "latitude": 48.869522,
      "longitude": 8.242422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "7022",
      "timestamp": 1645275730,
      "ems": null
    },
    {
      "latitude": 48.867416,
      "longitude": 8.241365,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275736,
      "ems": null
    },
    {
      "latitude": 48.86554,
      "longitude": 8.24052,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7022",
      "timestamp": 1645275742,
      "ems": null
    },
    {
      "latitude": 48.863525,
      "longitude": 8.239465,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 199,
      "squawk": "7022",
      "timestamp": 1645275748,
      "ems": null
    },
    {
      "latitude": 48.861603,
      "longitude": 8.238408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275754,
      "ems": null
    },
    {
      "latitude": 48.860596,
      "longitude": 8.237844,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275757,
      "ems": null
    },
    {
      "latitude": 48.858765,
      "longitude": 8.236929,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7022",
      "timestamp": 1645275763,
      "ems": null
    },
    {
      "latitude": 48.856667,
      "longitude": 8.23606,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "7022",
      "timestamp": 1645275769,
      "ems": null
    },
    {
      "latitude": 48.854736,
      "longitude": 8.235098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275776,
      "ems": null
    },
    {
      "latitude": 48.853779,
      "longitude": 8.234469,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "7022",
      "timestamp": 1645275779,
      "ems": null
    },
    {
      "latitude": 48.851852,
      "longitude": 8.233337,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275785,
      "ems": null
    },
    {
      "latitude": 48.850204,
      "longitude": 8.232351,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 203,
      "squawk": "7022",
      "timestamp": 1645275791,
      "ems": null
    },
    {
      "latitude": 48.849197,
      "longitude": 8.231718,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "7022",
      "timestamp": 1645275794,
      "ems": null
    },
    {
      "latitude": 48.847366,
      "longitude": 8.230732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7022",
      "timestamp": 1645275800,
      "ems": null
    },
    {
      "latitude": 48.845589,
      "longitude": 8.22941,
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
      "heading": 209,
      "squawk": "7022",
      "timestamp": 1645275806,
      "ems": null
    },
    {
      "latitude": 48.844704,
      "longitude": 8.228687,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "7022",
      "timestamp": 1645275809,
      "ems": null
    },
    {
      "latitude": 48.843704,
      "longitude": 8.227915,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7022",
      "timestamp": 1645275812,
      "ems": null
    },
    {
      "latitude": 48.842979,
      "longitude": 8.227314,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "7022",
      "timestamp": 1645275815,
      "ems": null
    },
    {
      "latitude": 48.841141,
      "longitude": 8.226084,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7022",
      "timestamp": 1645275821,
      "ems": null
    },
    {
      "latitude": 48.840271,
      "longitude": 8.225379,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 212,
      "squawk": "7022",
      "timestamp": 1645275824,
      "ems": null
    },
    {
      "latitude": 48.83963,
      "longitude": 8.224567,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 220,
      "squawk": "7022",
      "timestamp": 1645275827,
      "ems": null
    },
    {
      "latitude": 48.838806,
      "longitude": 8.223337,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 228,
      "squawk": "7022",
      "timestamp": 1645275830,
      "ems": null
    },
    {
      "latitude": 48.838326,
      "longitude": 8.222255,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 236,
      "squawk": "7022",
      "timestamp": 1645275833,
      "ems": null
    },
    {
      "latitude": 48.837906,
      "longitude": 8.221026,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7022",
      "timestamp": 1645275836,
      "ems": null
    },
    {
      "latitude": 48.837719,
      "longitude": 8.220159,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "7022",
      "timestamp": 1645275838,
      "ems": null
    },
    {
      "latitude": 48.83725,
      "longitude": 8.217844,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 252,
      "squawk": "7022",
      "timestamp": 1645275843,
      "ems": null
    },
    {
      "latitude": 48.836838,
      "longitude": 8.216013,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "7022",
      "timestamp": 1645275847,
      "ems": null
    },
    {
      "latitude": 48.836601,
      "longitude": 8.214954,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "7022",
      "timestamp": 1645275851,
      "ems": null
    },
    {
      "latitude": 48.836334,
      "longitude": 8.213408,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 257,
      "squawk": "7022",
      "timestamp": 1645275854,
      "ems": null
    },
    {
      "latitude": 48.836151,
      "longitude": 8.212069,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7022",
      "timestamp": 1645275857,
      "ems": null
    },
    {
      "latitude": 48.835968,
      "longitude": 8.210872,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 256,
      "squawk": "7022",
      "timestamp": 1645275860,
      "ems": null
    },
    {
      "latitude": 48.83572,
      "longitude": 8.209606,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "7022",
      "timestamp": 1645275863,
      "ems": null
    },
    {
      "latitude": 48.835533,
      "longitude": 8.208522,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7022",
      "timestamp": 1645275866,
      "ems": null
    },
    {
      "latitude": 48.834915,
      "longitude": 8.20573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7022",
      "timestamp": 1645275872,
      "ems": null
    },
    {
      "latitude": 48.83432,
      "longitude": 8.203174,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7022",
      "timestamp": 1645275878,
      "ems": null
    },
    {
      "latitude": 48.833717,
      "longitude": 8.200788,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7022",
      "timestamp": 1645275884,
      "ems": null
    },
    {
      "latitude": 48.833485,
      "longitude": 8.199848,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7022",
      "timestamp": 1645275887,
      "ems": null
    },
    {
      "latitude": 48.833111,
      "longitude": 8.198402,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "7022",
      "timestamp": 1645275890,
      "ems": null
    },
    {
      "latitude": 48.832737,
      "longitude": 8.197536,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 234,
      "squawk": "7022",
      "timestamp": 1645275893,
      "ems": null
    },
    {
      "latitude": 48.832306,
      "longitude": 8.196716,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 230,
      "squawk": "7022",
      "timestamp": 1645275896,
      "ems": null
    },
    {
      "latitude": 48.831528,
      "longitude": 8.195589,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 221,
      "squawk": "7022",
      "timestamp": 1645275899,
      "ems": null
    },
    {
      "latitude": 48.830971,
      "longitude": 8.194934,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 217,
      "squawk": "7022",
      "timestamp": 1645275902,
      "ems": null
    },
    {
      "latitude": 48.830109,
      "longitude": 8.19397,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7022",
      "timestamp": 1645275905,
      "ems": null
    },
    {
      "latitude": 48.829575,
      "longitude": 8.193271,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "7022",
      "timestamp": 1645275908,
      "ems": null
    },
    {
      "latitude": 48.828922,
      "longitude": 8.192476,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7022",
      "timestamp": 1645275911,
      "ems": null
    },
    {
      "latitude": 48.828178,
      "longitude": 8.191608,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7022",
      "timestamp": 1645275914,
      "ems": null
    },
    {
      "latitude": 48.827682,
      "longitude": 8.190942,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 226,
      "squawk": "7022",
      "timestamp": 1645275917,
      "ems": null
    },
    {
      "latitude": 48.826996,
      "longitude": 8.189463,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 240,
      "squawk": "7022",
      "timestamp": 1645275920,
      "ems": null
    },
    {
      "latitude": 48.826767,
      "longitude": 8.188054,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 260,
      "squawk": "7022",
      "timestamp": 1645275923,
      "ems": null
    },
    {
      "latitude": 48.826721,
      "longitude": 8.186716,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 269,
      "squawk": "7022",
      "timestamp": 1645275926,
      "ems": null
    },
    {
      "latitude": 48.826767,
      "longitude": 8.185096,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 273,
      "squawk": "7022",
      "timestamp": 1645275929,
      "ems": null
    },
    {
      "latitude": 48.826904,
      "longitude": 8.183406,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 275,
      "squawk": "7022",
      "timestamp": 1645275932,
      "ems": null
    },
    {
      "latitude": 48.826965,
      "longitude": 8.181851,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 275,
      "squawk": "7022",
      "timestamp": 1645275935,
      "ems": null
    },
    {
      "latitude": 48.827042,
      "longitude": 8.180378,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 275,
      "squawk": "7022",
      "timestamp": 1645275938,
      "ems": null
    },
    {
      "latitude": 48.827106,
      "longitude": 8.178526,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "7022",
      "timestamp": 1645275941,
      "ems": null
    },
    {
      "latitude": 48.827198,
      "longitude": 8.177153,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 275,
      "squawk": "7022",
      "timestamp": 1645275944,
      "ems": null
    },
    {
      "latitude": 48.827271,
      "longitude": 8.176152,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 276,
      "squawk": "7022",
      "timestamp": 1645275946,
      "ems": null
    },
    {
      "latitude": 48.827431,
      "longitude": 8.174117,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 276,
      "squawk": "7022",
      "timestamp": 1645275950,
      "ems": null
    },
    {
      "latitude": 48.827682,
      "longitude": 8.171575,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 280,
      "squawk": "7022",
      "timestamp": 1645275955,
      "ems": null
    },
    {
      "latitude": 48.827896,
      "longitude": 8.169636,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 279,
      "squawk": "7022",
      "timestamp": 1645275959,
      "ems": null
    },
    {
      "latitude": 48.828003,
      "longitude": 8.166223,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "7022",
      "timestamp": 1645275967,
      "ems": null
    },
    {
      "latitude": 48.828094,
      "longitude": 8.161504,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "7022",
      "timestamp": 1645275976,
      "ems": null
    },
    {
      "latitude": 48.82814,
      "longitude": 8.157419,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7022",
      "timestamp": 1645275984,
      "ems": null
    },
    {
      "latitude": 48.828003,
      "longitude": 8.155518,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7022",
      "timestamp": 1645275988,
      "ems": null
    },
    {
      "latitude": 48.82782,
      "longitude": 8.153545,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "7022",
      "timestamp": 1645275992,
      "ems": null
    },
    {
      "latitude": 48.827663,
      "longitude": 8.152072,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7022",
      "timestamp": 1645275995,
      "ems": null
    },
    {
      "latitude": 48.82748,
      "longitude": 8.150482,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7022",
      "timestamp": 1645275998,
      "ems": null
    },
    {
      "latitude": 48.827271,
      "longitude": 8.148968,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 257,
      "squawk": "7022",
      "timestamp": 1645276001,
      "ems": null
    },
    {
      "latitude": 48.827061,
      "longitude": 8.147374,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 263,
      "squawk": "7022",
      "timestamp": 1645276004,
      "ems": null
    },
    {
      "latitude": 48.827431,
      "longitude": 8.14405,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 285,
      "squawk": "7022",
      "timestamp": 1645276010,
      "ems": null
    },
    {
      "latitude": 48.827663,
      "longitude": 8.142749,
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
      "heading": 287,
      "squawk": "7022",
      "timestamp": 1645276013,
      "ems": null
    },
    {
      "latitude": 48.827991,
      "longitude": 8.141303,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 288,
      "squawk": "7022",
      "timestamp": 1645276016,
      "ems": null
    },
    {
      "latitude": 48.828369,
      "longitude": 8.139812,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7022",
      "timestamp": 1645276019,
      "ems": null
    },
    {
      "latitude": 48.828644,
      "longitude": 8.138629,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7022",
      "timestamp": 1645276022,
      "ems": null
    },
    {
      "latitude": 48.828922,
      "longitude": 8.137111,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 287,
      "squawk": "7022",
      "timestamp": 1645276025,
      "ems": null
    },
    {
      "latitude": 48.829056,
      "longitude": 8.13601,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 279,
      "squawk": "7022",
      "timestamp": 1645276028,
      "ems": null
    },
    {
      "latitude": 48.829201,
      "longitude": 8.13393,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "7022",
      "timestamp": 1645276031,
      "ems": null
    },
    {
      "latitude": 48.829014,
      "longitude": 8.132051,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 256,
      "squawk": "7022",
      "timestamp": 1645276036,
      "ems": null
    },
    {
      "latitude": 48.828598,
      "longitude": 8.130095,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 248,
      "squawk": "7022",
      "timestamp": 1645276040,
      "ems": null
    },
    {
      "latitude": 48.828411,
      "longitude": 8.129449,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7022",
      "timestamp": 1645276042,
      "ems": null
    },
    {
      "latitude": 48.827545,
      "longitude": 8.127348,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 235,
      "squawk": "7022",
      "timestamp": 1645276046,
      "ems": null
    },
    {
      "latitude": 48.827106,
      "longitude": 8.126413,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 232,
      "squawk": "7022",
      "timestamp": 1645276049,
      "ems": null
    },
    {
      "latitude": 48.826447,
      "longitude": 8.125305,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 226,
      "squawk": "7022",
      "timestamp": 1645276052,
      "ems": null
    },
    {
      "latitude": 48.825668,
      "longitude": 8.12439,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 212,
      "squawk": "7022",
      "timestamp": 1645276055,
      "ems": null
    },
    {
      "latitude": 48.824982,
      "longitude": 8.123755,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 213,
      "squawk": "7022",
      "timestamp": 1645276058,
      "ems": null
    },
    {
      "latitude": 48.824265,
      "longitude": 8.123016,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "7022",
      "timestamp": 1645276061,
      "ems": null
    },
    {
      "latitude": 48.823975,
      "longitude": 8.1227,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "7022",
      "timestamp": 1645276064,
      "ems": null
    },
    {
      "latitude": 48.82259,
      "longitude": 8.121137,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7022",
      "timestamp": 1645276070,
      "ems": null
    },
    {
      "latitude": 48.821846,
      "longitude": 8.12027,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 214,
      "squawk": "7022",
      "timestamp": 1645276074,
      "ems": null
    },
    {
      "latitude": 48.821102,
      "longitude": 8.119619,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276078,
      "ems": null
    },
    {
      "latitude": 48.820122,
      "longitude": 8.11868,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7022",
      "timestamp": 1645276082,
      "ems": null
    },
    {
      "latitude": 48.818958,
      "longitude": 8.117523,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7022",
      "timestamp": 1645276088,
      "ems": null
    },
    {
      "latitude": 48.817749,
      "longitude": 8.116362,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276094,
      "ems": null
    },
    {
      "latitude": 48.817108,
      "longitude": 8.115727,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "7022",
      "timestamp": 1645276100,
      "ems": null
    },
    {
      "latitude": 48.81601,
      "longitude": 8.114671,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7022",
      "timestamp": 1645276103,
      "ems": null
    },
    {
      "latitude": 48.815002,
      "longitude": 8.113826,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 208,
      "squawk": "7022",
      "timestamp": 1645276109,
      "ems": null
    },
    {
      "latitude": 48.813931,
      "longitude": 8.112825,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276115,
      "ems": null
    },
    {
      "latitude": 48.812534,
      "longitude": 8.111452,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 213,
      "squawk": "7022",
      "timestamp": 1645276121,
      "ems": null
    },
    {
      "latitude": 48.810673,
      "longitude": 8.10979,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276131,
      "ems": null
    },
    {
      "latitude": 48.810162,
      "longitude": 8.109283,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "7022",
      "timestamp": 1645276133,
      "ems": null
    },
    {
      "latitude": 48.808228,
      "longitude": 8.107488,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7022",
      "timestamp": 1645276143,
      "ems": null
    },
    {
      "latitude": 48.806808,
      "longitude": 8.106248,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276149,
      "ems": null
    },
    {
      "latitude": 48.805847,
      "longitude": 8.105375,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7022",
      "timestamp": 1645276153,
      "ems": null
    },
    {
      "latitude": 48.803364,
      "longitude": 8.102923,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "7022",
      "timestamp": 1645276164,
      "ems": null
    },
    {
      "latitude": 48.800812,
      "longitude": 8.100657,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276174,
      "ems": null
    },
    {
      "latitude": 48.798244,
      "longitude": 8.098152,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7022",
      "timestamp": 1645276185,
      "ems": null
    },
    {
      "latitude": 48.795776,
      "longitude": 8.095867,
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
      "heading": 213,
      "squawk": "7022",
      "timestamp": 1645276196,
      "ems": null
    },
    {
      "latitude": 48.793819,
      "longitude": 8.094032,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 211,
      "squawk": "7022",
      "timestamp": 1645276207,
      "ems": null
    }
  ],
};
