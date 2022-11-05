import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220527LPCSLPCS",
    callsign: "RVP101",
    name: "Second night flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 27, 20, 30).getTime(),
    arrival: new Date(2022, 4, 27, 21, 45).getTime(),
    singleEnginePistonTime: 75,
    picTime: 0,
    dualTime: 75,
    nightTime: 75,
    landings: {
      day: 0,
      night: 8,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D1229",
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
      },
    },
    destination: {
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
      },
    },
  },
  track: [
    {
      "latitude": 38.718578,
      "longitude": -9.352341,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 14.8,
        "kts": 8,
        "mph": 9.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "0",
      "timestamp": 1653494053,
      "ems": null
    },
    {
      "latitude": 38.718464,
      "longitude": -9.35257,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 16.7,
        "kts": 9,
        "mph": 10.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "0",
      "timestamp": 1653494059,
      "ems": null
    },
    {
      "latitude": 38.718555,
      "longitude": -9.352814,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 14.8,
        "kts": 8,
        "mph": 9.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "0",
      "timestamp": 1653494064,
      "ems": null
    },
    {
      "latitude": 38.718796,
      "longitude": -9.352903,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 16.7,
        "kts": 9,
        "mph": 10.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "0",
      "timestamp": 1653494077,
      "ems": null
    },
    {
      "latitude": 38.719219,
      "longitude": -9.353052,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 46.3,
        "kts": 25,
        "mph": 28.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "0",
      "timestamp": 1653494082,
      "ems": null
    },
    {
      "latitude": 38.719631,
      "longitude": -9.353202,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "0",
      "timestamp": 1653494085,
      "ems": null
    },
    {
      "latitude": 38.720707,
      "longitude": -9.353638,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "0",
      "timestamp": 1653494091,
      "ems": null
    },
    {
      "latitude": 38.721359,
      "longitude": -9.353844,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 346,
      "squawk": "3246",
      "timestamp": 1653494095,
      "ems": null
    },
    {
      "latitude": 38.721863,
      "longitude": -9.354022,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653494097,
      "ems": null
    },
    {
      "latitude": 38.723648,
      "longitude": -9.354679,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653494106,
      "ems": null
    },
    {
      "latitude": 38.725037,
      "longitude": -9.355225,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653494112,
      "ems": null
    },
    {
      "latitude": 38.727085,
      "longitude": -9.355896,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 346,
      "squawk": "3246",
      "timestamp": 1653494121,
      "ems": null
    },
    {
      "latitude": 38.72839,
      "longitude": -9.356323,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653494128,
      "ems": null
    },
    {
      "latitude": 38.729736,
      "longitude": -9.356709,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653494134,
      "ems": null
    },
    {
      "latitude": 38.730484,
      "longitude": -9.356934,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653494137,
      "ems": null
    },
    {
      "latitude": 38.731647,
      "longitude": -9.357178,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3246",
      "timestamp": 1653494142,
      "ems": null
    },
    {
      "latitude": 38.7323,
      "longitude": -9.357239,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 356,
      "squawk": "3246",
      "timestamp": 1653494145,
      "ems": null
    },
    {
      "latitude": 38.733078,
      "longitude": -9.357306,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 353,
      "squawk": "3246",
      "timestamp": 1653494148,
      "ems": null
    },
    {
      "latitude": 38.735371,
      "longitude": -9.35791,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653494157,
      "ems": null
    },
    {
      "latitude": 38.736694,
      "longitude": -9.358441,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653494163,
      "ems": null
    },
    {
      "latitude": 38.737564,
      "longitude": -9.358799,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653494166,
      "ems": null
    },
    {
      "latitude": 38.739075,
      "longitude": -9.359337,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653494172,
      "ems": null
    },
    {
      "latitude": 38.739841,
      "longitude": -9.359619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653494174,
      "ems": null
    },
    {
      "latitude": 38.740997,
      "longitude": -9.359934,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653494178,
      "ems": null
    },
    {
      "latitude": 38.742867,
      "longitude": -9.360413,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "3246",
      "timestamp": 1653494184,
      "ems": null
    },
    {
      "latitude": 38.744843,
      "longitude": -9.360888,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "3246",
      "timestamp": 1653494190,
      "ems": null
    },
    {
      "latitude": 38.745613,
      "longitude": -9.361023,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "3246",
      "timestamp": 1653494193,
      "ems": null
    },
    {
      "latitude": 38.746948,
      "longitude": -9.361128,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "3246",
      "timestamp": 1653494197,
      "ems": null
    },
    {
      "latitude": 38.747849,
      "longitude": -9.360779,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 19,
      "squawk": "3246",
      "timestamp": 1653494200,
      "ems": null
    },
    {
      "latitude": 38.748638,
      "longitude": -9.360107,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 38,
      "squawk": "3246",
      "timestamp": 1653494203,
      "ems": null
    },
    {
      "latitude": 38.749283,
      "longitude": -9.359158,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 54,
      "squawk": "3246",
      "timestamp": 1653494206,
      "ems": null
    },
    {
      "latitude": 38.749878,
      "longitude": -9.357665,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "3246",
      "timestamp": 1653494209,
      "ems": null
    },
    {
      "latitude": 38.750175,
      "longitude": -9.356323,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "3246",
      "timestamp": 1653494212,
      "ems": null
    },
    {
      "latitude": 38.750336,
      "longitude": -9.35462,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653494215,
      "ems": null
    },
    {
      "latitude": 38.750427,
      "longitude": -9.352948,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494218,
      "ems": null
    },
    {
      "latitude": 38.750408,
      "longitude": -9.351135,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653494221,
      "ems": null
    },
    {
      "latitude": 38.750271,
      "longitude": -9.349426,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 100,
      "squawk": "3246",
      "timestamp": 1653494224,
      "ems": null
    },
    {
      "latitude": 38.749832,
      "longitude": -9.347574,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 110,
      "squawk": "3246",
      "timestamp": 1653494227,
      "ems": null
    },
    {
      "latitude": 38.7491,
      "longitude": -9.345782,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 123,
      "squawk": "3246",
      "timestamp": 1653494230,
      "ems": null
    },
    {
      "latitude": 38.747894,
      "longitude": -9.344116,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 139,
      "squawk": "3246",
      "timestamp": 1653494233,
      "ems": null
    },
    {
      "latitude": 38.746536,
      "longitude": -9.342916,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "3246",
      "timestamp": 1653494236,
      "ems": null
    },
    {
      "latitude": 38.744915,
      "longitude": -9.34198,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 158,
      "squawk": "3246",
      "timestamp": 1653494239,
      "ems": null
    },
    {
      "latitude": 38.743195,
      "longitude": -9.341305,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494242,
      "ems": null
    },
    {
      "latitude": 38.741562,
      "longitude": -9.340698,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494245,
      "ems": null
    },
    {
      "latitude": 38.740082,
      "longitude": -9.34017,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494248,
      "ems": null
    },
    {
      "latitude": 38.738342,
      "longitude": -9.339573,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494252,
      "ems": null
    },
    {
      "latitude": 38.736694,
      "longitude": -9.339036,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494254,
      "ems": null
    },
    {
      "latitude": 38.734863,
      "longitude": -9.338379,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494258,
      "ems": null
    },
    {
      "latitude": 38.733185,
      "longitude": -9.337708,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 162,
      "squawk": "3246",
      "timestamp": 1653494261,
      "ems": null
    },
    {
      "latitude": 38.73175,
      "longitude": -9.337125,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 163,
      "squawk": "3246",
      "timestamp": 1653494263,
      "ems": null
    },
    {
      "latitude": 38.730057,
      "longitude": -9.336528,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494267,
      "ems": null
    },
    {
      "latitude": 38.727085,
      "longitude": -9.335022,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494272,
      "ems": null
    },
    {
      "latitude": 38.725735,
      "longitude": -9.333862,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494276,
      "ems": null
    },
    {
      "latitude": 38.724426,
      "longitude": -9.332527,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 142,
      "squawk": "3246",
      "timestamp": 1653494279,
      "ems": null
    },
    {
      "latitude": 38.723053,
      "longitude": -9.331274,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 144,
      "squawk": "3246",
      "timestamp": 1653494282,
      "ems": null
    },
    {
      "latitude": 38.72168,
      "longitude": -9.330079,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 145,
      "squawk": "3246",
      "timestamp": 1653494285,
      "ems": null
    },
    {
      "latitude": 38.720196,
      "longitude": -9.328735,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 144,
      "squawk": "3246",
      "timestamp": 1653494288,
      "ems": null
    },
    {
      "latitude": 38.718933,
      "longitude": -9.327572,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494291,
      "ems": null
    },
    {
      "latitude": 38.717514,
      "longitude": -9.326258,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494294,
      "ems": null
    },
    {
      "latitude": 38.71624,
      "longitude": -9.325073,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494297,
      "ems": null
    },
    {
      "latitude": 38.714905,
      "longitude": -9.32381,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 144,
      "squawk": "3246",
      "timestamp": 1653494300,
      "ems": null
    },
    {
      "latitude": 38.712479,
      "longitude": -9.321422,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "3246",
      "timestamp": 1653494306,
      "ems": null
    },
    {
      "latitude": 38.710007,
      "longitude": -9.318854,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "3246",
      "timestamp": 1653494312,
      "ems": null
    },
    {
      "latitude": 38.707489,
      "longitude": -9.316227,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494318,
      "ems": null
    },
    {
      "latitude": 38.70488,
      "longitude": -9.31366,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "3246",
      "timestamp": 1653494324,
      "ems": null
    },
    {
      "latitude": 38.703579,
      "longitude": -9.312134,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 137,
      "squawk": "3246",
      "timestamp": 1653494327,
      "ems": null
    },
    {
      "latitude": 38.702454,
      "longitude": -9.310734,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "3246",
      "timestamp": 1653494330,
      "ems": null
    },
    {
      "latitude": 38.701172,
      "longitude": -9.309181,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 134,
      "squawk": "3246",
      "timestamp": 1653494334,
      "ems": null
    },
    {
      "latitude": 38.700119,
      "longitude": -9.307689,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 131,
      "squawk": "3246",
      "timestamp": 1653494337,
      "ems": null
    },
    {
      "latitude": 38.699112,
      "longitude": -9.306315,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 134,
      "squawk": "3246",
      "timestamp": 1653494340,
      "ems": null
    },
    {
      "latitude": 38.697876,
      "longitude": -9.304763,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 135,
      "squawk": "3246",
      "timestamp": 1653494343,
      "ems": null
    },
    {
      "latitude": 38.69664,
      "longitude": -9.303223,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 136,
      "squawk": "3246",
      "timestamp": 1653494346,
      "ems": null
    },
    {
      "latitude": 38.695404,
      "longitude": -9.301718,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 136,
      "squawk": "3246",
      "timestamp": 1653494349,
      "ems": null
    },
    {
      "latitude": 38.694351,
      "longitude": -9.300405,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 135,
      "squawk": "3246",
      "timestamp": 1653494352,
      "ems": null
    },
    {
      "latitude": 38.692123,
      "longitude": -9.297424,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 132,
      "squawk": "3246",
      "timestamp": 1653494358,
      "ems": null
    },
    {
      "latitude": 38.690868,
      "longitude": -9.295593,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 130,
      "squawk": "3246",
      "timestamp": 1653494361,
      "ems": null
    },
    {
      "latitude": 38.688721,
      "longitude": -9.292463,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 131,
      "squawk": "3246",
      "timestamp": 1653494367,
      "ems": null
    },
    {
      "latitude": 38.686447,
      "longitude": -9.289246,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 133,
      "squawk": "3246",
      "timestamp": 1653494373,
      "ems": null
    },
    {
      "latitude": 38.68396,
      "longitude": -9.285895,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 133,
      "squawk": "3246",
      "timestamp": 1653494379,
      "ems": null
    },
    {
      "latitude": 38.681511,
      "longitude": -9.282898,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "3246",
      "timestamp": 1653494385,
      "ems": null
    },
    {
      "latitude": 38.680256,
      "longitude": -9.281433,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 136,
      "squawk": "3246",
      "timestamp": 1653494388,
      "ems": null
    },
    {
      "latitude": 38.677872,
      "longitude": -9.278313,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 131,
      "squawk": "3246",
      "timestamp": 1653494395,
      "ems": null
    },
    {
      "latitude": 38.675644,
      "longitude": -9.275024,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 130,
      "squawk": "3246",
      "timestamp": 1653494400,
      "ems": null
    },
    {
      "latitude": 38.673569,
      "longitude": -9.271924,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 131,
      "squawk": "3246",
      "timestamp": 1653494406,
      "ems": null
    },
    {
      "latitude": 38.672432,
      "longitude": -9.270142,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 129,
      "squawk": "3246",
      "timestamp": 1653494410,
      "ems": null
    },
    {
      "latitude": 38.67141,
      "longitude": -9.268555,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 127,
      "squawk": "3246",
      "timestamp": 1653494412,
      "ems": null
    },
    {
      "latitude": 38.670383,
      "longitude": -9.266907,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 129,
      "squawk": "3246",
      "timestamp": 1653494415,
      "ems": null
    },
    {
      "latitude": 38.668056,
      "longitude": -9.263916,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 140,
      "squawk": "3246",
      "timestamp": 1653494422,
      "ems": null
    },
    {
      "latitude": 38.666656,
      "longitude": -9.262669,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 146,
      "squawk": "3246",
      "timestamp": 1653494425,
      "ems": null
    },
    {
      "latitude": 38.665283,
      "longitude": -9.261535,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 147,
      "squawk": "3246",
      "timestamp": 1653494428,
      "ems": null
    },
    {
      "latitude": 38.663776,
      "longitude": -9.260315,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "3246",
      "timestamp": 1653494431,
      "ems": null
    },
    {
      "latitude": 38.66238,
      "longitude": -9.259399,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3246",
      "timestamp": 1653494434,
      "ems": null
    },
    {
      "latitude": 38.661026,
      "longitude": -9.25849,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494437,
      "ems": null
    },
    {
      "latitude": 38.659492,
      "longitude": -9.257507,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3246",
      "timestamp": 1653494440,
      "ems": null
    },
    {
      "latitude": 38.657768,
      "longitude": -9.25647,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 155,
      "squawk": "3246",
      "timestamp": 1653494443,
      "ems": null
    },
    {
      "latitude": 38.656631,
      "longitude": -9.255683,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "3246",
      "timestamp": 1653494446,
      "ems": null
    },
    {
      "latitude": 38.65493,
      "longitude": -9.254395,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "3246",
      "timestamp": 1653494449,
      "ems": null
    },
    {
      "latitude": 38.652184,
      "longitude": -9.25238,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "3246",
      "timestamp": 1653494455,
      "ems": null
    },
    {
      "latitude": 38.648941,
      "longitude": -9.25013,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494461,
      "ems": null
    },
    {
      "latitude": 38.645481,
      "longitude": -9.247681,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494467,
      "ems": null
    },
    {
      "latitude": 38.643082,
      "longitude": -9.24601,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "3246",
      "timestamp": 1653494472,
      "ems": null
    },
    {
      "latitude": 38.640198,
      "longitude": -9.243801,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "3246",
      "timestamp": 1653494477,
      "ems": null
    },
    {
      "latitude": 38.637009,
      "longitude": -9.241272,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 148,
      "squawk": "3246",
      "timestamp": 1653494484,
      "ems": null
    },
    {
      "latitude": 38.634109,
      "longitude": -9.238965,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 146,
      "squawk": "3246",
      "timestamp": 1653494490,
      "ems": null
    },
    {
      "latitude": 38.63269,
      "longitude": -9.23777,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 146,
      "squawk": "3246",
      "timestamp": 1653494493,
      "ems": null
    },
    {
      "latitude": 38.629837,
      "longitude": -9.235474,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 149,
      "squawk": "3246",
      "timestamp": 1653494499,
      "ems": null
    },
    {
      "latitude": 38.626785,
      "longitude": -9.233352,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494505,
      "ems": null
    },
    {
      "latitude": 38.624084,
      "longitude": -9.231561,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494511,
      "ems": null
    },
    {
      "latitude": 38.622669,
      "longitude": -9.230652,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3246",
      "timestamp": 1653494514,
      "ems": null
    },
    {
      "latitude": 38.62104,
      "longitude": -9.229675,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3246",
      "timestamp": 1653494517,
      "ems": null
    },
    {
      "latitude": 38.619553,
      "longitude": -9.228754,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3246",
      "timestamp": 1653494520,
      "ems": null
    },
    {
      "latitude": 38.618088,
      "longitude": -9.227859,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3246",
      "timestamp": 1653494523,
      "ems": null
    },
    {
      "latitude": 38.615269,
      "longitude": -9.226196,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 155,
      "squawk": "3246",
      "timestamp": 1653494528,
      "ems": null
    },
    {
      "latitude": 38.61224,
      "longitude": -9.224426,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3246",
      "timestamp": 1653494535,
      "ems": null
    },
    {
      "latitude": 38.60939,
      "longitude": -9.222545,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494541,
      "ems": null
    },
    {
      "latitude": 38.606377,
      "longitude": -9.22052,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494547,
      "ems": null
    },
    {
      "latitude": 38.603531,
      "longitude": -9.218723,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3246",
      "timestamp": 1653494553,
      "ems": null
    },
    {
      "latitude": 38.60051,
      "longitude": -9.216797,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494560,
      "ems": null
    },
    {
      "latitude": 38.597717,
      "longitude": -9.214902,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494566,
      "ems": null
    },
    {
      "latitude": 38.594692,
      "longitude": -9.213074,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 155,
      "squawk": "3246",
      "timestamp": 1653494572,
      "ems": null
    },
    {
      "latitude": 38.591713,
      "longitude": -9.211304,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 155,
      "squawk": "3246",
      "timestamp": 1653494577,
      "ems": null
    },
    {
      "latitude": 38.588688,
      "longitude": -9.209473,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 154,
      "squawk": "3246",
      "timestamp": 1653494583,
      "ems": null
    },
    {
      "latitude": 38.585587,
      "longitude": -9.207678,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 155,
      "squawk": "3246",
      "timestamp": 1653494589,
      "ems": null
    },
    {
      "latitude": 38.584076,
      "longitude": -9.206841,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 156,
      "squawk": "3246",
      "timestamp": 1653494592,
      "ems": null
    },
    {
      "latitude": 38.581055,
      "longitude": -9.20517,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 156,
      "squawk": "3246",
      "timestamp": 1653494598,
      "ems": null
    },
    {
      "latitude": 38.5784,
      "longitude": -9.203796,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "squawk": "3246",
      "timestamp": 1653494604,
      "ems": null
    },
    {
      "latitude": 38.575012,
      "longitude": -9.201766,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494610,
      "ems": null
    },
    {
      "latitude": 38.572067,
      "longitude": -9.199768,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3246",
      "timestamp": 1653494617,
      "ems": null
    },
    {
      "latitude": 38.567413,
      "longitude": -9.196899,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "squawk": "3246",
      "timestamp": 1653494626,
      "ems": null
    },
    {
      "latitude": 38.564484,
      "longitude": -9.195437,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 159,
      "squawk": "3246",
      "timestamp": 1653494631,
      "ems": null
    },
    {
      "latitude": 38.562836,
      "longitude": -9.19472,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 161,
      "squawk": "3246",
      "timestamp": 1653494635,
      "ems": null
    },
    {
      "latitude": 38.561172,
      "longitude": -9.194092,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 163,
      "squawk": "3246",
      "timestamp": 1653494638,
      "ems": null
    },
    {
      "latitude": 38.559631,
      "longitude": -9.193586,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 164,
      "squawk": "3246",
      "timestamp": 1653494641,
      "ems": null
    },
    {
      "latitude": 38.557938,
      "longitude": -9.193048,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "3246",
      "timestamp": 1653494644,
      "ems": null
    },
    {
      "latitude": 38.556564,
      "longitude": -9.192631,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 167,
      "squawk": "3246",
      "timestamp": 1653494646,
      "ems": null
    },
    {
      "latitude": 38.554703,
      "longitude": -9.192078,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "3246",
      "timestamp": 1653494650,
      "ems": null
    },
    {
      "latitude": 38.553074,
      "longitude": -9.191528,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 165,
      "squawk": "3246",
      "timestamp": 1653494653,
      "ems": null
    },
    {
      "latitude": 38.551445,
      "longitude": -9.19104,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "3246",
      "timestamp": 1653494656,
      "ems": null
    },
    {
      "latitude": 38.549973,
      "longitude": -9.1906,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 167,
      "squawk": "3246",
      "timestamp": 1653494659,
      "ems": null
    },
    {
      "latitude": 38.548138,
      "longitude": -9.190125,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 168,
      "squawk": "3246",
      "timestamp": 1653494662,
      "ems": null
    },
    {
      "latitude": 38.546463,
      "longitude": -9.189697,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 168,
      "squawk": "3246",
      "timestamp": 1653494665,
      "ems": null
    },
    {
      "latitude": 38.543064,
      "longitude": -9.188782,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 168,
      "squawk": "3246",
      "timestamp": 1653494671,
      "ems": null
    },
    {
      "latitude": 38.539536,
      "longitude": -9.187914,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 169,
      "squawk": "3246",
      "timestamp": 1653494677,
      "ems": null
    },
    {
      "latitude": 38.537796,
      "longitude": -9.187496,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 170,
      "squawk": "3246",
      "timestamp": 1653494680,
      "ems": null
    },
    {
      "latitude": 38.534409,
      "longitude": -9.18672,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 169,
      "squawk": "3246",
      "timestamp": 1653494686,
      "ems": null
    },
    {
      "latitude": 38.530869,
      "longitude": -9.185913,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 170,
      "squawk": "3246",
      "timestamp": 1653494692,
      "ems": null
    },
    {
      "latitude": 38.527451,
      "longitude": -9.185407,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 174,
      "squawk": "3246",
      "timestamp": 1653494698,
      "ems": null
    },
    {
      "latitude": 38.525711,
      "longitude": -9.185167,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 174,
      "squawk": "3246",
      "timestamp": 1653494701,
      "ems": null
    },
    {
      "latitude": 38.522461,
      "longitude": -9.18475,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 173,
      "squawk": "3246",
      "timestamp": 1653494707,
      "ems": null
    },
    {
      "latitude": 38.518673,
      "longitude": -9.184143,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 171,
      "squawk": "3246",
      "timestamp": 1653494713,
      "ems": null
    },
    {
      "latitude": 38.515457,
      "longitude": -9.183137,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 161,
      "squawk": "3246",
      "timestamp": 1653494720,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -9.182312,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 152,
      "squawk": "3246",
      "timestamp": 1653494722,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.181167,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 143,
      "squawk": "3246",
      "timestamp": 1653494726,
      "ems": null
    },
    {
      "latitude": 38.511749,
      "longitude": -9.179973,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 132,
      "squawk": "3246",
      "timestamp": 1653494728,
      "ems": null
    },
    {
      "latitude": 38.510849,
      "longitude": -9.178467,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 122,
      "squawk": "3246",
      "timestamp": 1653494731,
      "ems": null
    },
    {
      "latitude": 38.510239,
      "longitude": -9.176928,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 112,
      "squawk": "3246",
      "timestamp": 1653494734,
      "ems": null
    },
    {
      "latitude": 38.50964,
      "longitude": -9.174561,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 102,
      "squawk": "3246",
      "timestamp": 1653494738,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -9.172485,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 96,
      "squawk": "3246",
      "timestamp": 1653494741,
      "ems": null
    },
    {
      "latitude": 38.509277,
      "longitude": -9.170957,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653494744,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -9.169006,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494747,
      "ems": null
    },
    {
      "latitude": 38.50946,
      "longitude": -9.167315,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653494750,
      "ems": null
    },
    {
      "latitude": 38.509548,
      "longitude": -9.165527,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494753,
      "ems": null
    },
    {
      "latitude": 38.50964,
      "longitude": -9.163574,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653494757,
      "ems": null
    },
    {
      "latitude": 38.509781,
      "longitude": -9.162109,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 84,
      "squawk": "3246",
      "timestamp": 1653494759,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -9.161316,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 84,
      "squawk": "3246",
      "timestamp": 1653494762,
      "ems": null
    },
    {
      "latitude": 38.510059,
      "longitude": -9.159058,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 82,
      "squawk": "3246",
      "timestamp": 1653494765,
      "ems": null
    },
    {
      "latitude": 38.510101,
      "longitude": -9.158418,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 82,
      "squawk": "3246",
      "timestamp": 1653494768,
      "ems": null
    },
    {
      "latitude": 38.510422,
      "longitude": -9.155671,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 82,
      "squawk": "3246",
      "timestamp": 1653494771,
      "ems": null
    },
    {
      "latitude": 38.510525,
      "longitude": -9.154175,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 83,
      "squawk": "3246",
      "timestamp": 1653494774,
      "ems": null
    },
    {
      "latitude": 38.510803,
      "longitude": -9.15033,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 84,
      "squawk": "3246",
      "timestamp": 1653494780,
      "ems": null
    },
    {
      "latitude": 38.511017,
      "longitude": -9.146655,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494786,
      "ems": null
    },
    {
      "latitude": 38.511223,
      "longitude": -9.1427,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494792,
      "ems": null
    },
    {
      "latitude": 38.51141,
      "longitude": -9.138977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494798,
      "ems": null
    },
    {
      "latitude": 38.511456,
      "longitude": -9.137268,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494801,
      "ems": null
    },
    {
      "latitude": 38.51152,
      "longitude": -9.135311,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494804,
      "ems": null
    },
    {
      "latitude": 38.511658,
      "longitude": -9.131371,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494810,
      "ems": null
    },
    {
      "latitude": 38.511749,
      "longitude": -9.127848,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494816,
      "ems": null
    },
    {
      "latitude": 38.511875,
      "longitude": -9.123779,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494822,
      "ems": null
    },
    {
      "latitude": 38.51207,
      "longitude": -9.119608,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494828,
      "ems": null
    },
    {
      "latitude": 38.512253,
      "longitude": -9.115488,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494835,
      "ems": null
    },
    {
      "latitude": 38.512436,
      "longitude": -9.111607,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653494840,
      "ems": null
    },
    {
      "latitude": 38.512527,
      "longitude": -9.107971,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494847,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -9.103606,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494852,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -9.099487,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494859,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -9.095426,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494864,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.09137,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "3246",
      "timestamp": 1653494870,
      "ems": null
    },
    {
      "latitude": 38.512894,
      "longitude": -9.087067,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494877,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.083191,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494882,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -9.079006,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494889,
      "ems": null
    },
    {
      "latitude": 38.512939,
      "longitude": -9.075006,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494895,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.070801,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494900,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -9.06543,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494909,
      "ems": null
    },
    {
      "latitude": 38.512939,
      "longitude": -9.058885,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494919,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.05481,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653494925,
      "ems": null
    },
    {
      "latitude": 38.512993,
      "longitude": -9.050964,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494930,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.047119,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494937,
      "ems": null
    },
    {
      "latitude": 38.51313,
      "longitude": -9.043457,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "3246",
      "timestamp": 1653494942,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.039612,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494949,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.035828,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494955,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.032166,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494961,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.028433,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653494967,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.024536,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494973,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.020874,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494979,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -9.017566,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653494985,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -9.014343,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653494990,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -9.010559,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653494997,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -9.006998,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495003,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -9.003906,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495008,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -8.999116,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495015,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.995422,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495021,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.993652,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495024,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -8.989801,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495030,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -8.985802,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495036,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.981934,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495042,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -8.975949,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495051,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.973816,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495054,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.969859,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495060,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.966157,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495066,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.962575,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495072,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.958679,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495078,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -8.955171,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495084,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.951477,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495091,
      "ems": null
    },
    {
      "latitude": 38.514175,
      "longitude": -8.947947,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495096,
      "ems": null
    },
    {
      "latitude": 38.514202,
      "longitude": -8.944397,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495103,
      "ems": null
    },
    {
      "latitude": 38.514221,
      "longitude": -8.940961,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495108,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -8.937012,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495115,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.935181,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 93,
      "squawk": "3246",
      "timestamp": 1653495118,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.933855,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495120,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.931702,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495124,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.930725,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495125,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -8.930359,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495127,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -8.927406,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 93,
      "squawk": "3246",
      "timestamp": 1653495132,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -8.922485,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495139,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.918945,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495145,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.917236,
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495148,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.915524,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495151,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.913913,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495153,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.913554,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495154,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.909554,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495161,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.905911,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495167,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.902344,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495172,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.898804,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495178,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.895044,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495184,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.891045,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495191,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -8.88739,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495197,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -8.883043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495205,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.878863,
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495212,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.877563,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495215,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.873908,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495221,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.870178,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495227,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -8.868286,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495230,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.866638,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495233,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.864929,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495236,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.862915,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495239,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.859619,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495245,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -8.855817,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "3246",
      "timestamp": 1653495252,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.854264,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495254,
      "ems": null
    },
    {
      "latitude": 38.514542,
      "longitude": -8.852413,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495257,
      "ems": null
    },
    {
      "latitude": 38.514622,
      "longitude": -8.848999,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495263,
      "ems": null
    },
    {
      "latitude": 38.514633,
      "longitude": -8.845307,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495270,
      "ems": null
    },
    {
      "latitude": 38.514713,
      "longitude": -8.843567,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495273,
      "ems": null
    },
    {
      "latitude": 38.514954,
      "longitude": -8.839934,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 84,
      "squawk": "3246",
      "timestamp": 1653495279,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.836351,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495285,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.832769,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495291,
      "ems": null
    },
    {
      "latitude": 38.514954,
      "longitude": -8.829366,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495297,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -8.827335,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "3246",
      "timestamp": 1653495300,
      "ems": null
    },
    {
      "latitude": 38.514713,
      "longitude": -8.825806,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 93,
      "squawk": "3246",
      "timestamp": 1653495303,
      "ems": null
    },
    {
      "latitude": 38.514679,
      "longitude": -8.823873,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495306,
      "ems": null
    },
    {
      "latitude": 38.514633,
      "longitude": -8.82226,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495309,
      "ems": null
    },
    {
      "latitude": 38.514633,
      "longitude": -8.818738,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495315,
      "ems": null
    },
    {
      "latitude": 38.514679,
      "longitude": -8.817305,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495318,
      "ems": null
    },
    {
      "latitude": 38.514725,
      "longitude": -8.815215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495321,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -8.812073,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495328,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -8.808533,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495334,
      "ems": null
    },
    {
      "latitude": 38.514679,
      "longitude": -8.805243,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495339,
      "ems": null
    },
    {
      "latitude": 38.514809,
      "longitude": -8.801697,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495346,
      "ems": null
    },
    {
      "latitude": 38.514862,
      "longitude": -8.798496,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495351,
      "ems": null
    },
    {
      "latitude": 38.5149,
      "longitude": -8.794495,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495358,
      "ems": null
    },
    {
      "latitude": 38.514862,
      "longitude": -8.791212,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495365,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -8.787964,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495371,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -8.784584,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495377,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -8.781616,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495383,
      "ems": null
    },
    {
      "latitude": 38.514763,
      "longitude": -8.778137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495389,
      "ems": null
    },
    {
      "latitude": 38.514725,
      "longitude": -8.774673,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495395,
      "ems": null
    },
    {
      "latitude": 38.514713,
      "longitude": -8.771423,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495401,
      "ems": null
    },
    {
      "latitude": 38.514763,
      "longitude": -8.767761,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495407,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -8.764224,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495413,
      "ems": null
    },
    {
      "latitude": 38.514587,
      "longitude": -8.760582,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 95,
      "squawk": "3246",
      "timestamp": 1653495419,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -8.758606,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 96,
      "squawk": "3246",
      "timestamp": 1653495422,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.756761,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 96,
      "squawk": "3246",
      "timestamp": 1653495425,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -8.755066,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 97,
      "squawk": "3246",
      "timestamp": 1653495428,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.753058,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 101,
      "squawk": "3246",
      "timestamp": 1653495431,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -8.750916,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 98,
      "squawk": "3246",
      "timestamp": 1653495434,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -8.749084,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 95,
      "squawk": "3246",
      "timestamp": 1653495436,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -8.745177,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495443,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -8.743505,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495446,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -8.741356,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495449,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.739326,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495452,
      "ems": null
    },
    {
      "latitude": 38.513901,
      "longitude": -8.737535,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495455,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.735683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495458,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.733948,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495460,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.732041,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495464,
      "ems": null
    },
    {
      "latitude": 38.514221,
      "longitude": -8.730249,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495466,
      "ems": null
    },
    {
      "latitude": 38.514359,
      "longitude": -8.725533,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495475,
      "ems": null
    },
    {
      "latitude": 38.51445,
      "longitude": -8.72207,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495481,
      "ems": null
    },
    {
      "latitude": 38.514622,
      "longitude": -8.718567,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495487,
      "ems": null
    },
    {
      "latitude": 38.514725,
      "longitude": -8.715143,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495493,
      "ems": null
    },
    {
      "latitude": 38.514809,
      "longitude": -8.711609,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495499,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -8.708313,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495504,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.704895,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495510,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.700806,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495517,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.697171,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495523,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.693726,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495529,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.68988,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495535,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.686218,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495541,
      "ems": null
    },
    {
      "latitude": 38.515553,
      "longitude": -8.682617,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495547,
      "ems": null
    },
    {
      "latitude": 38.515594,
      "longitude": -8.679318,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495553,
      "ems": null
    },
    {
      "latitude": 38.51564,
      "longitude": -8.675856,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495559,
      "ems": null
    },
    {
      "latitude": 38.515823,
      "longitude": -8.673109,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 85,
      "squawk": "3246",
      "timestamp": 1653495564,
      "ems": null
    },
    {
      "latitude": 38.516006,
      "longitude": -8.670302,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "3246",
      "timestamp": 1653495568,
      "ems": null
    },
    {
      "latitude": 38.516109,
      "longitude": -8.666931,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495575,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.663818,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495581,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -8.66057,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495587,
      "ems": null
    },
    {
      "latitude": 38.515915,
      "longitude": -8.657166,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495593,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -8.655457,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495596,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -8.653564,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495599,
      "ems": null
    },
    {
      "latitude": 38.515739,
      "longitude": -8.651855,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495602,
      "ems": null
    },
    {
      "latitude": 38.515644,
      "longitude": -8.648254,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495608,
      "ems": null
    },
    {
      "latitude": 38.515594,
      "longitude": -8.644748,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495614,
      "ems": null
    },
    {
      "latitude": 38.515644,
      "longitude": -8.641968,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495619,
      "ems": null
    },
    {
      "latitude": 38.515785,
      "longitude": -8.637939,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495626,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -8.636169,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495629,
      "ems": null
    },
    {
      "latitude": 38.515869,
      "longitude": -8.632806,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "3246",
      "timestamp": 1653495635,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -8.629333,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495641,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -8.625977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495647,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -8.622803,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495653,
      "ems": null
    },
    {
      "latitude": 38.515869,
      "longitude": -8.618954,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495659,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -8.615371,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495665,
      "ems": null
    },
    {
      "latitude": 38.515869,
      "longitude": -8.612146,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 93,
      "squawk": "3246",
      "timestamp": 1653495671,
      "ems": null
    },
    {
      "latitude": 38.515739,
      "longitude": -8.610229,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 96,
      "squawk": "3246",
      "timestamp": 1653495674,
      "ems": null
    },
    {
      "latitude": 38.515553,
      "longitude": -8.608521,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 97,
      "squawk": "3246",
      "timestamp": 1653495676,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.606995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 95,
      "squawk": "3246",
      "timestamp": 1653495680,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.603787,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 99,
      "squawk": "3246",
      "timestamp": 1653495685,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -8.602051,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 99,
      "squawk": "3246",
      "timestamp": 1653495688,
      "ems": null
    },
    {
      "latitude": 38.514622,
      "longitude": -8.600281,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 99,
      "squawk": "3246",
      "timestamp": 1653495691,
      "ems": null
    },
    {
      "latitude": 38.51445,
      "longitude": -8.598951,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 100,
      "squawk": "3246",
      "timestamp": 1653495694,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.596683,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 98,
      "squawk": "3246",
      "timestamp": 1653495697,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.593398,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 94,
      "squawk": "3246",
      "timestamp": 1653495703,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.590149,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495709,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.588318,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495712,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.586652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 87,
      "squawk": "3246",
      "timestamp": 1653495715,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.585205,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495718,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.583427,
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
      "heading": 84,
      "squawk": "3246",
      "timestamp": 1653495721,
      "ems": null
    },
    {
      "latitude": 38.514084,
      "longitude": -8.581994,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495724,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -8.580627,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 86,
      "squawk": "3246",
      "timestamp": 1653495727,
      "ems": null
    },
    {
      "latitude": 38.514202,
      "longitude": -8.578125,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 88,
      "squawk": "3246",
      "timestamp": 1653495731,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.574769,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "3246",
      "timestamp": 1653495738,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.571366,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495744,
      "ems": null
    },
    {
      "latitude": 38.514248,
      "longitude": -8.57019,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495747,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -8.568176,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 92,
      "squawk": "3246",
      "timestamp": 1653495750,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.566709,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "3246",
      "timestamp": 1653495753,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -8.564978,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495756,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.561584,
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
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653495762,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.55841,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 91,
      "squawk": "3246",
      "timestamp": 1653495768,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.555359,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 96,
      "squawk": "3246",
      "timestamp": 1653495773,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -8.55365,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 116,
      "squawk": "3246",
      "timestamp": 1653495777,
      "ems": null
    },
    {
      "latitude": 38.512573,
      "longitude": -8.552379,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 125,
      "squawk": "3246",
      "timestamp": 1653495780,
      "ems": null
    },
    {
      "latitude": 38.511887,
      "longitude": -8.551364,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 134,
      "squawk": "3246",
      "timestamp": 1653495783,
      "ems": null
    },
    {
      "latitude": 38.510651,
      "longitude": -8.549931,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "3246",
      "timestamp": 1653495786,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -8.549316,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "3246",
      "timestamp": 1653495788,
      "ems": null
    },
    {
      "latitude": 38.50795,
      "longitude": -8.54814,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 159,
      "squawk": "3246",
      "timestamp": 1653495792,
      "ems": null
    },
    {
      "latitude": 38.506943,
      "longitude": -8.547781,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 167,
      "squawk": "3246",
      "timestamp": 1653495795,
      "ems": null
    },
    {
      "latitude": 38.505203,
      "longitude": -8.547363,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 171,
      "squawk": "3246",
      "timestamp": 1653495798,
      "ems": null
    },
    {
      "latitude": 38.503784,
      "longitude": -8.547244,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 180,
      "squawk": "3246",
      "timestamp": 1653495801,
      "ems": null
    },
    {
      "latitude": 38.50275,
      "longitude": -8.547363,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 186,
      "squawk": "3246",
      "timestamp": 1653495804,
      "ems": null
    },
    {
      "latitude": 38.500889,
      "longitude": -8.547852,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 194,
      "squawk": "3246",
      "timestamp": 1653495807,
      "ems": null
    },
    {
      "latitude": 38.499573,
      "longitude": -8.548319,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 196,
      "squawk": "3246",
      "timestamp": 1653495810,
      "ems": null
    },
    {
      "latitude": 38.498142,
      "longitude": -8.548889,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 197,
      "squawk": "3246",
      "timestamp": 1653495813,
      "ems": null
    },
    {
      "latitude": 38.496643,
      "longitude": -8.549513,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 198,
      "squawk": "3246",
      "timestamp": 1653495816,
      "ems": null
    },
    {
      "latitude": 38.495361,
      "longitude": -8.55005,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 198,
      "squawk": "3246",
      "timestamp": 1653495819,
      "ems": null
    },
    {
      "latitude": 38.494125,
      "longitude": -8.550588,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 199,
      "squawk": "3246",
      "timestamp": 1653495822,
      "ems": null
    },
    {
      "latitude": 38.492661,
      "longitude": -8.551364,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3246",
      "timestamp": 1653495825,
      "ems": null
    },
    {
      "latitude": 38.491745,
      "longitude": -8.551901,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 204,
      "squawk": "3246",
      "timestamp": 1653495827,
      "ems": null
    },
    {
      "latitude": 38.490692,
      "longitude": -8.552618,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3246",
      "timestamp": 1653495829,
      "ems": null
    },
    {
      "latitude": 38.489529,
      "longitude": -8.553406,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3246",
      "timestamp": 1653495832,
      "ems": null
    },
    {
      "latitude": 38.488831,
      "longitude": -8.553894,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3246",
      "timestamp": 1653495834,
      "ems": null
    },
    {
      "latitude": 38.486893,
      "longitude": -8.555484,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 215,
      "squawk": "3246",
      "timestamp": 1653495838,
      "ems": null
    },
    {
      "latitude": 38.485664,
      "longitude": -8.556763,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 219,
      "squawk": "3246",
      "timestamp": 1653495841,
      "ems": null
    },
    {
      "latitude": 38.48455,
      "longitude": -8.558044,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 222,
      "squawk": "3246",
      "timestamp": 1653495844,
      "ems": null
    },
    {
      "latitude": 38.483688,
      "longitude": -8.559066,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653495848,
      "ems": null
    },
    {
      "latitude": 38.482502,
      "longitude": -8.560547,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495850,
      "ems": null
    },
    {
      "latitude": 38.481674,
      "longitude": -8.561693,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495853,
      "ems": null
    },
    {
      "latitude": 38.479755,
      "longitude": -8.564392,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653495857,
      "ems": null
    },
    {
      "latitude": 38.479568,
      "longitude": -8.564636,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495858,
      "ems": null
    },
    {
      "latitude": 38.478058,
      "longitude": -8.566709,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495862,
      "ems": null
    },
    {
      "latitude": 38.476913,
      "longitude": -8.568321,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653495865,
      "ems": null
    },
    {
      "latitude": 38.475891,
      "longitude": -8.569824,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653495868,
      "ems": null
    },
    {
      "latitude": 38.474728,
      "longitude": -8.571655,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 231,
      "squawk": "3246",
      "timestamp": 1653495872,
      "ems": null
    },
    {
      "latitude": 38.473656,
      "longitude": -8.573303,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 230,
      "squawk": "3246",
      "timestamp": 1653495875,
      "ems": null
    },
    {
      "latitude": 38.471466,
      "longitude": -8.576416,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653495881,
      "ems": null
    },
    {
      "latitude": 38.468536,
      "longitude": -8.580444,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653495889,
      "ems": null
    },
    {
      "latitude": 38.466858,
      "longitude": -8.582886,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653495894,
      "ems": null
    },
    {
      "latitude": 38.465103,
      "longitude": -8.585398,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495899,
      "ems": null
    },
    {
      "latitude": 38.461739,
      "longitude": -8.590393,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 231,
      "squawk": "3246",
      "timestamp": 1653495909,
      "ems": null
    },
    {
      "latitude": 38.459885,
      "longitude": -8.593219,
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653495915,
      "ems": null
    },
    {
      "latitude": 38.457455,
      "longitude": -8.596375,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653495923,
      "ems": null
    },
    {
      "latitude": 38.455406,
      "longitude": -8.598938,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495929,
      "ems": null
    },
    {
      "latitude": 38.453751,
      "longitude": -8.601101,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495935,
      "ems": null
    },
    {
      "latitude": 38.452652,
      "longitude": -8.602533,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495938,
      "ems": null
    },
    {
      "latitude": 38.451637,
      "longitude": -8.60376,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653495941,
      "ems": null
    },
    {
      "latitude": 38.449589,
      "longitude": -8.606323,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495946,
      "ems": null
    },
    {
      "latitude": 38.447773,
      "longitude": -8.608826,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495952,
      "ems": null
    },
    {
      "latitude": 38.445911,
      "longitude": -8.611328,
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495959,
      "ems": null
    },
    {
      "latitude": 38.443863,
      "longitude": -8.614118,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653495965,
      "ems": null
    },
    {
      "latitude": 38.441986,
      "longitude": -8.616625,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495971,
      "ems": null
    },
    {
      "latitude": 38.439907,
      "longitude": -8.619324,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653495977,
      "ems": null
    },
    {
      "latitude": 38.437763,
      "longitude": -8.621887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "3246",
      "timestamp": 1653495982,
      "ems": null
    },
    {
      "latitude": 38.435486,
      "longitude": -8.624626,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653495989,
      "ems": null
    },
    {
      "latitude": 38.433342,
      "longitude": -8.627502,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653495995,
      "ems": null
    },
    {
      "latitude": 38.43148,
      "longitude": -8.630066,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653496001,
      "ems": null
    },
    {
      "latitude": 38.429214,
      "longitude": -8.633403,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653496008,
      "ems": null
    },
    {
      "latitude": 38.427063,
      "longitude": -8.636389,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653496014,
      "ems": null
    },
    {
      "latitude": 38.42482,
      "longitude": -8.639194,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 222,
      "squawk": "3246",
      "timestamp": 1653496020,
      "ems": null
    },
    {
      "latitude": 38.423492,
      "longitude": -8.640747,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 221,
      "squawk": "3246",
      "timestamp": 1653496023,
      "ems": null
    },
    {
      "latitude": 38.421158,
      "longitude": -8.643554,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653496029,
      "ems": null
    },
    {
      "latitude": 38.418777,
      "longitude": -8.646599,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496034,
      "ems": null
    },
    {
      "latitude": 38.416214,
      "longitude": -8.649763,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653496041,
      "ems": null
    },
    {
      "latitude": 38.414154,
      "longitude": -8.65227,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496047,
      "ems": null
    },
    {
      "latitude": 38.411507,
      "longitude": -8.655555,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653496053,
      "ems": null
    },
    {
      "latitude": 38.409439,
      "longitude": -8.657928,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496058,
      "ems": null
    },
    {
      "latitude": 38.406921,
      "longitude": -8.661201,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496065,
      "ems": null
    },
    {
      "latitude": 38.404572,
      "longitude": -8.664212,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496071,
      "ems": null
    },
    {
      "latitude": 38.402252,
      "longitude": -8.667336,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496078,
      "ems": null
    },
    {
      "latitude": 38.401657,
      "longitude": -8.668155,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653496080,
      "ems": null
    },
    {
      "latitude": 38.400196,
      "longitude": -8.670243,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653496084,
      "ems": null
    },
    {
      "latitude": 38.399185,
      "longitude": -8.671778,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653496087,
      "ems": null
    },
    {
      "latitude": 38.398891,
      "longitude": -8.672214,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 230,
      "squawk": "3246",
      "timestamp": 1653496088,
      "ems": null
    },
    {
      "latitude": 38.397774,
      "longitude": -8.673944,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653496092,
      "ems": null
    },
    {
      "latitude": 38.395569,
      "longitude": -8.677095,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653496098,
      "ems": null
    },
    {
      "latitude": 38.393585,
      "longitude": -8.679976,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 228,
      "squawk": "3246",
      "timestamp": 1653496103,
      "ems": null
    },
    {
      "latitude": 38.391586,
      "longitude": -8.682706,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496110,
      "ems": null
    },
    {
      "latitude": 38.389118,
      "longitude": -8.685767,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496116,
      "ems": null
    },
    {
      "latitude": 38.387722,
      "longitude": -8.687558,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496119,
      "ems": null
    },
    {
      "latitude": 38.386787,
      "longitude": -8.688693,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496122,
      "ems": null
    },
    {
      "latitude": 38.384216,
      "longitude": -8.691998,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496128,
      "ems": null
    },
    {
      "latitude": 38.382553,
      "longitude": -8.693888,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 221,
      "squawk": "3246",
      "timestamp": 1653496132,
      "ems": null
    },
    {
      "latitude": 38.381577,
      "longitude": -8.695022,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 221,
      "squawk": "3246",
      "timestamp": 1653496135,
      "ems": null
    },
    {
      "latitude": 38.378967,
      "longitude": -8.697948,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 222,
      "squawk": "3246",
      "timestamp": 1653496141,
      "ems": null
    },
    {
      "latitude": 38.376663,
      "longitude": -8.700763,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 223,
      "squawk": "3246",
      "timestamp": 1653496147,
      "ems": null
    },
    {
      "latitude": 38.374374,
      "longitude": -8.703627,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 224,
      "squawk": "3246",
      "timestamp": 1653496153,
      "ems": null
    },
    {
      "latitude": 38.372032,
      "longitude": -8.706665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496159,
      "ems": null
    },
    {
      "latitude": 38.369934,
      "longitude": -8.70947,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653496165,
      "ems": null
    },
    {
      "latitude": 38.36882,
      "longitude": -8.710904,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496168,
      "ems": null
    },
    {
      "latitude": 38.366638,
      "longitude": -8.713853,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496174,
      "ems": null
    },
    {
      "latitude": 38.364532,
      "longitude": -8.716717,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496180,
      "ems": null
    },
    {
      "latitude": 38.362534,
      "longitude": -8.719263,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "3246",
      "timestamp": 1653496186,
      "ems": null
    },
    {
      "latitude": 38.360229,
      "longitude": -8.722326,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496192,
      "ems": null
    },
    {
      "latitude": 38.358124,
      "longitude": -8.725073,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653496198,
      "ems": null
    },
    {
      "latitude": 38.35611,
      "longitude": -8.727937,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 227,
      "squawk": "3246",
      "timestamp": 1653496204,
      "ems": null
    },
    {
      "latitude": 38.353924,
      "longitude": -8.730847,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496210,
      "ems": null
    },
    {
      "latitude": 38.350708,
      "longitude": -8.734949,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 225,
      "squawk": "3246",
      "timestamp": 1653496219,
      "ems": null
    },
    {
      "latitude": 38.348709,
      "longitude": -8.737654,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 229,
      "squawk": "3246",
      "timestamp": 1653496225,
      "ems": null
    },
    {
      "latitude": 38.347454,
      "longitude": -8.739743,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 233,
      "squawk": "3246",
      "timestamp": 1653496228,
      "ems": null
    },
    {
      "latitude": 38.347275,
      "longitude": -8.740033,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 233,
      "squawk": "3246",
      "timestamp": 1653496229,
      "ems": null
    },
    {
      "latitude": 38.346336,
      "longitude": -8.74255,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 249,
      "squawk": "3246",
      "timestamp": 1653496233,
      "ems": null
    },
    {
      "latitude": 38.346054,
      "longitude": -8.744222,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "3246",
      "timestamp": 1653496236,
      "ems": null
    },
    {
      "latitude": 38.345963,
      "longitude": -8.74643,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496239,
      "ems": null
    },
    {
      "latitude": 38.346008,
      "longitude": -8.748342,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 274,
      "squawk": "3246",
      "timestamp": 1653496242,
      "ems": null
    },
    {
      "latitude": 38.346222,
      "longitude": -8.750259,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 278,
      "squawk": "3246",
      "timestamp": 1653496244,
      "ems": null
    },
    {
      "latitude": 38.346451,
      "longitude": -8.751954,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 281,
      "squawk": "3246",
      "timestamp": 1653496247,
      "ems": null
    },
    {
      "latitude": 38.346817,
      "longitude": -8.753942,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 282,
      "squawk": "3246",
      "timestamp": 1653496250,
      "ems": null
    },
    {
      "latitude": 38.347126,
      "longitude": -8.755567,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 284,
      "squawk": "3246",
      "timestamp": 1653496254,
      "ems": null
    },
    {
      "latitude": 38.347504,
      "longitude": -8.757447,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 284,
      "squawk": "3246",
      "timestamp": 1653496257,
      "ems": null
    },
    {
      "latitude": 38.347687,
      "longitude": -8.758372,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "3246",
      "timestamp": 1653496259,
      "ems": null
    },
    {
      "latitude": 38.348335,
      "longitude": -8.761298,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "3246",
      "timestamp": 1653496263,
      "ems": null
    },
    {
      "latitude": 38.34874,
      "longitude": -8.763058,
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
      "heading": 285,
      "squawk": "3246",
      "timestamp": 1653496266,
      "ems": null
    },
    {
      "latitude": 38.349152,
      "longitude": -8.764694,
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
      "heading": 287,
      "squawk": "3246",
      "timestamp": 1653496269,
      "ems": null
    },
    {
      "latitude": 38.349609,
      "longitude": -8.766505,
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
      "heading": 289,
      "squawk": "3246",
      "timestamp": 1653496272,
      "ems": null
    },
    {
      "latitude": 38.350105,
      "longitude": -8.768344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 289,
      "squawk": "3246",
      "timestamp": 1653496275,
      "ems": null
    },
    {
      "latitude": 38.350666,
      "longitude": -8.770016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3246",
      "timestamp": 1653496278,
      "ems": null
    },
    {
      "latitude": 38.35141,
      "longitude": -8.771568,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 302,
      "squawk": "3246",
      "timestamp": 1653496281,
      "ems": null
    },
    {
      "latitude": 38.352173,
      "longitude": -8.772992,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "3246",
      "timestamp": 1653496284,
      "ems": null
    },
    {
      "latitude": 38.353134,
      "longitude": -8.774511,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "3246",
      "timestamp": 1653496287,
      "ems": null
    },
    {
      "latitude": 38.354015,
      "longitude": -8.775688,
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
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653496290,
      "ems": null
    },
    {
      "latitude": 38.354855,
      "longitude": -8.776703,
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
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653496293,
      "ems": null
    },
    {
      "latitude": 38.356018,
      "longitude": -8.778018,
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
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653496296,
      "ems": null
    },
    {
      "latitude": 38.356949,
      "longitude": -8.778972,
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
      "heading": 322,
      "squawk": "3246",
      "timestamp": 1653496299,
      "ems": null
    },
    {
      "latitude": 38.358112,
      "longitude": -8.780046,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 323,
      "squawk": "3246",
      "timestamp": 1653496302,
      "ems": null
    },
    {
      "latitude": 38.35923,
      "longitude": -8.781002,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "3246",
      "timestamp": 1653496305,
      "ems": null
    },
    {
      "latitude": 38.360458,
      "longitude": -8.781992,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "3246",
      "timestamp": 1653496308,
      "ems": null
    },
    {
      "latitude": 38.361603,
      "longitude": -8.782868,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496311,
      "ems": null
    },
    {
      "latitude": 38.362629,
      "longitude": -8.783629,
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
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496314,
      "ems": null
    },
    {
      "latitude": 38.363754,
      "longitude": -8.784504,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496317,
      "ems": null
    },
    {
      "latitude": 38.36499,
      "longitude": -8.785439,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496320,
      "ems": null
    },
    {
      "latitude": 38.366028,
      "longitude": -8.786197,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496323,
      "ems": null
    },
    {
      "latitude": 38.367146,
      "longitude": -8.787032,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496326,
      "ems": null
    },
    {
      "latitude": 38.368355,
      "longitude": -8.787808,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496329,
      "ems": null
    },
    {
      "latitude": 38.369427,
      "longitude": -8.788585,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496332,
      "ems": null
    },
    {
      "latitude": 38.371708,
      "longitude": -8.790197,
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
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496338,
      "ems": null
    },
    {
      "latitude": 38.374054,
      "longitude": -8.791926,
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
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496344,
      "ems": null
    },
    {
      "latitude": 38.376846,
      "longitude": -8.793971,
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
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496352,
      "ems": null
    },
    {
      "latitude": 38.379063,
      "longitude": -8.79557,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496358,
      "ems": null
    },
    {
      "latitude": 38.381332,
      "longitude": -8.797069,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496364,
      "ems": null
    },
    {
      "latitude": 38.383671,
      "longitude": -8.798736,
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
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496370,
      "ems": null
    },
    {
      "latitude": 38.386047,
      "longitude": -8.800341,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496376,
      "ems": null
    },
    {
      "latitude": 38.388325,
      "longitude": -8.80184,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496382,
      "ems": null
    },
    {
      "latitude": 38.390373,
      "longitude": -8.803154,
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
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496387,
      "ems": null
    },
    {
      "latitude": 38.393005,
      "longitude": -8.805191,
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
      "heading": 327,
      "squawk": "3246",
      "timestamp": 1653496394,
      "ems": null
    },
    {
      "latitude": 38.39415,
      "longitude": -8.806127,
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
      "heading": 325,
      "squawk": "3246",
      "timestamp": 1653496397,
      "ems": null
    },
    {
      "latitude": 38.395309,
      "longitude": -8.807154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "3246",
      "timestamp": 1653496400,
      "ems": null
    },
    {
      "latitude": 38.396378,
      "longitude": -8.80799,
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
      "heading": 326,
      "squawk": "3246",
      "timestamp": 1653496403,
      "ems": null
    },
    {
      "latitude": 38.397537,
      "longitude": -8.80899,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3246",
      "timestamp": 1653496406,
      "ems": null
    },
    {
      "latitude": 38.398682,
      "longitude": -8.809925,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3246",
      "timestamp": 1653496409,
      "ems": null
    },
    {
      "latitude": 38.39978,
      "longitude": -8.81086,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3246",
      "timestamp": 1653496412,
      "ems": null
    },
    {
      "latitude": 38.40192,
      "longitude": -8.812528,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496418,
      "ems": null
    },
    {
      "latitude": 38.404526,
      "longitude": -8.814319,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496424,
      "ems": null
    },
    {
      "latitude": 38.405777,
      "longitude": -8.815125,
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
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496427,
      "ems": null
    },
    {
      "latitude": 38.406898,
      "longitude": -8.815812,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496430,
      "ems": null
    },
    {
      "latitude": 38.40834,
      "longitude": -8.816646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496433,
      "ems": null
    },
    {
      "latitude": 38.409531,
      "longitude": -8.817347,
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
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496436,
      "ems": null
    },
    {
      "latitude": 38.411739,
      "longitude": -8.818976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496442,
      "ems": null
    },
    {
      "latitude": 38.414429,
      "longitude": -8.820887,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496449,
      "ems": null
    },
    {
      "latitude": 38.41663,
      "longitude": -8.822449,
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
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496454,
      "ems": null
    },
    {
      "latitude": 38.418869,
      "longitude": -8.823992,
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
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496461,
      "ems": null
    },
    {
      "latitude": 38.420242,
      "longitude": -8.825067,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "3246",
      "timestamp": 1653496464,
      "ems": null
    },
    {
      "latitude": 38.42244,
      "longitude": -8.826738,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "3246",
      "timestamp": 1653496470,
      "ems": null
    },
    {
      "latitude": 38.425335,
      "longitude": -8.829102,
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
      "heading": 327,
      "squawk": "3246",
      "timestamp": 1653496477,
      "ems": null
    },
    {
      "latitude": 38.427704,
      "longitude": -8.831098,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "3246",
      "timestamp": 1653496483,
      "ems": null
    },
    {
      "latitude": 38.431183,
      "longitude": -8.833545,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496492,
      "ems": null
    },
    {
      "latitude": 38.433426,
      "longitude": -8.835038,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496498,
      "ems": null
    },
    {
      "latitude": 38.434708,
      "longitude": -8.835934,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496501,
      "ems": null
    },
    {
      "latitude": 38.435898,
      "longitude": -8.83671,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496504,
      "ems": null
    },
    {
      "latitude": 38.437134,
      "longitude": -8.837545,
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
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496507,
      "ems": null
    },
    {
      "latitude": 38.440567,
      "longitude": -8.840054,
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
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496516,
      "ems": null
    },
    {
      "latitude": 38.44281,
      "longitude": -8.841606,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496522,
      "ems": null
    },
    {
      "latitude": 38.445374,
      "longitude": -8.843516,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496528,
      "ems": null
    },
    {
      "latitude": 38.447353,
      "longitude": -8.844788,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496534,
      "ems": null
    },
    {
      "latitude": 38.450378,
      "longitude": -8.846497,
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
      "heading": 336,
      "squawk": "3246",
      "timestamp": 1653496540,
      "ems": null
    },
    {
      "latitude": 38.452789,
      "longitude": -8.847876,
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
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496546,
      "ems": null
    },
    {
      "latitude": 38.455173,
      "longitude": -8.849426,
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
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496552,
      "ems": null
    },
    {
      "latitude": 38.457367,
      "longitude": -8.85098,
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
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496558,
      "ems": null
    },
    {
      "latitude": 38.459736,
      "longitude": -8.8526,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496564,
      "ems": null
    },
    {
      "latitude": 38.462112,
      "longitude": -8.854126,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653496571,
      "ems": null
    },
    {
      "latitude": 38.464577,
      "longitude": -8.855713,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496576,
      "ems": null
    },
    {
      "latitude": 38.467091,
      "longitude": -8.8573,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496582,
      "ems": null
    },
    {
      "latitude": 38.469177,
      "longitude": -8.858802,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496588,
      "ems": null
    },
    {
      "latitude": 38.471786,
      "longitude": -8.860712,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 329,
      "squawk": "3246",
      "timestamp": 1653496594,
      "ems": null
    },
    {
      "latitude": 38.474213,
      "longitude": -8.862427,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653496600,
      "ems": null
    },
    {
      "latitude": 38.475239,
      "longitude": -8.863281,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3246",
      "timestamp": 1653496603,
      "ems": null
    },
    {
      "latitude": 38.476639,
      "longitude": -8.864355,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3246",
      "timestamp": 1653496606,
      "ems": null
    },
    {
      "latitude": 38.47752,
      "longitude": -8.865112,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "3246",
      "timestamp": 1653496609,
      "ems": null
    },
    {
      "latitude": 38.478973,
      "longitude": -8.866564,
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
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653496613,
      "ems": null
    },
    {
      "latitude": 38.479889,
      "longitude": -8.867459,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653496616,
      "ems": null
    },
    {
      "latitude": 38.480919,
      "longitude": -8.868591,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653496618,
      "ems": null
    },
    {
      "latitude": 38.481522,
      "longitude": -8.869202,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653496621,
      "ems": null
    },
    {
      "latitude": 38.482864,
      "longitude": -8.870504,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "3246",
      "timestamp": 1653496624,
      "ems": null
    },
    {
      "latitude": 38.483551,
      "longitude": -8.871101,
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
      "heading": 325,
      "squawk": "3246",
      "timestamp": 1653496626,
      "ems": null
    },
    {
      "latitude": 38.487247,
      "longitude": -8.873901,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496636,
      "ems": null
    },
    {
      "latitude": 38.488449,
      "longitude": -8.874684,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496640,
      "ems": null
    },
    {
      "latitude": 38.489639,
      "longitude": -8.875401,
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
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496643,
      "ems": null
    },
    {
      "latitude": 38.490784,
      "longitude": -8.876058,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496646,
      "ems": null
    },
    {
      "latitude": 38.492043,
      "longitude": -8.87677,
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
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496649,
      "ems": null
    },
    {
      "latitude": 38.49321,
      "longitude": -8.87749,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496652,
      "ems": null
    },
    {
      "latitude": 38.494354,
      "longitude": -8.878266,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496655,
      "ems": null
    },
    {
      "latitude": 38.495537,
      "longitude": -8.879028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496658,
      "ems": null
    },
    {
      "latitude": 38.497833,
      "longitude": -8.880416,
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
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653496664,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -8.881968,
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
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653496671,
      "ems": null
    },
    {
      "latitude": 38.502563,
      "longitude": -8.883423,
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
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653496676,
      "ems": null
    },
    {
      "latitude": 38.50494,
      "longitude": -8.884949,
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
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496683,
      "ems": null
    },
    {
      "latitude": 38.507172,
      "longitude": -8.886292,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653496689,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -8.887634,
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
      "heading": 335,
      "squawk": "3246",
      "timestamp": 1653496695,
      "ems": null
    },
    {
      "latitude": 38.511597,
      "longitude": -8.888916,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "3246",
      "timestamp": 1653496701,
      "ems": null
    },
    {
      "latitude": 38.514576,
      "longitude": -8.890686,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "3246",
      "timestamp": 1653496709,
      "ems": null
    },
    {
      "latitude": 38.515732,
      "longitude": -8.891701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653496712,
      "ems": null
    },
    {
      "latitude": 38.516529,
      "longitude": -8.8927,
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
      "heading": 310,
      "squawk": "3246",
      "timestamp": 1653496715,
      "ems": null
    },
    {
      "latitude": 38.517242,
      "longitude": -8.89409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "3246",
      "timestamp": 1653496718,
      "ems": null
    },
    {
      "latitude": 38.517792,
      "longitude": -8.895642,
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
      "heading": 288,
      "squawk": "3246",
      "timestamp": 1653496721,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -8.897433,
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
      "heading": 280,
      "squawk": "3246",
      "timestamp": 1653496724,
      "ems": null
    },
    {
      "latitude": 38.51825,
      "longitude": -8.899164,
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
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653496727,
      "ems": null
    },
    {
      "latitude": 38.518253,
      "longitude": -8.900879,
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
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496730,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -8.902687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496733,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -8.904358,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496736,
      "ems": null
    },
    {
      "latitude": 38.517883,
      "longitude": -8.906329,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496739,
      "ems": null
    },
    {
      "latitude": 38.517746,
      "longitude": -8.908002,
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
      "heading": 263,
      "squawk": "3246",
      "timestamp": 1653496742,
      "ems": null
    },
    {
      "latitude": 38.517609,
      "longitude": -8.909852,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496745,
      "ems": null
    },
    {
      "latitude": 38.517471,
      "longitude": -8.911584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496748,
      "ems": null
    },
    {
      "latitude": 38.517334,
      "longitude": -8.913316,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496751,
      "ems": null
    },
    {
      "latitude": 38.517242,
      "longitude": -8.914927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496754,
      "ems": null
    },
    {
      "latitude": 38.517105,
      "longitude": -8.916659,
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
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496757,
      "ems": null
    },
    {
      "latitude": 38.516811,
      "longitude": -8.920227,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496763,
      "ems": null
    },
    {
      "latitude": 38.516556,
      "longitude": -8.923764,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496769,
      "ems": null
    },
    {
      "latitude": 38.516281,
      "longitude": -8.927168,
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
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496775,
      "ems": null
    },
    {
      "latitude": 38.516109,
      "longitude": -8.930847,
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
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496781,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -8.934265,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496787,
      "ems": null
    },
    {
      "latitude": 38.515823,
      "longitude": -8.937915,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496793,
      "ems": null
    },
    {
      "latitude": 38.515694,
      "longitude": -8.941589,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496799,
      "ems": null
    },
    {
      "latitude": 38.515598,
      "longitude": -8.945251,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496805,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.949036,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496811,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -8.952576,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653496817,
      "ems": null
    },
    {
      "latitude": 38.515503,
      "longitude": -8.956306,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496823,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.959961,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653496829,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.963709,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496835,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.967346,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496841,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -8.970934,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "3246",
      "timestamp": 1653496847,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -8.972839,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496850,
      "ems": null
    },
    {
      "latitude": 38.5149,
      "longitude": -8.97467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "3246",
      "timestamp": 1653496853,
      "ems": null
    },
    {
      "latitude": 38.514679,
      "longitude": -8.976487,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "3246",
      "timestamp": 1653496856,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.978394,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 261,
      "squawk": "3246",
      "timestamp": 1653496859,
      "ems": null
    },
    {
      "latitude": 38.514248,
      "longitude": -8.980103,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "3246",
      "timestamp": 1653496862,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.981934,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "3246",
      "timestamp": 1653496865,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.983704,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 262,
      "squawk": "3246",
      "timestamp": 1653496868,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -8.987175,
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
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653496874,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -8.992668,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496883,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -8.994202,
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
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653496886,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -8.995832,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "3246",
      "timestamp": 1653496889,
      "ems": null
    },
    {
      "latitude": 38.513596,
      "longitude": -8.997681,
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
      "heading": 274,
      "squawk": "3246",
      "timestamp": 1653496892,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.99939,
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
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653496895,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -9.001146,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496898,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -9.002808,
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
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653496901,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -9.004609,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653496904,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -9.007996,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496910,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -9.011416,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653496916,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -9.012573,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653496919,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -9.015119,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 266,
      "squawk": "3246",
      "timestamp": 1653496922,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -9.016969,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 266,
      "squawk": "3246",
      "timestamp": 1653496926,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.020569,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653496931,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.024109,
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
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653496937,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.028015,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653496943,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.029846,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496947,
      "ems": null
    },
    {
      "latitude": 38.513306,
      "longitude": -9.031598,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496949,
      "ems": null
    },
    {
      "latitude": 38.513351,
      "longitude": -9.033448,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496952,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -9.036926,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496959,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -9.040494,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496965,
      "ems": null
    },
    {
      "latitude": 38.513535,
      "longitude": -9.044017,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653496971,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -9.04718,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653496977,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -9.050824,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653496983,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -9.054565,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496989,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -9.058228,
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653496995,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -9.061584,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497001,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -9.065332,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497007,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -9.068677,
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
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653497013,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -9.072319,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653497019,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -9.075562,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497024,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -9.080081,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "3246",
      "timestamp": 1653497032,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -9.084798,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497040,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -9.089216,
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497047,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -9.092739,
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
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653497053,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -9.096321,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653497059,
      "ems": null
    },
    {
      "latitude": 38.513351,
      "longitude": -9.097993,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653497062,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -9.101807,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "3246",
      "timestamp": 1653497068,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.105347,
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497074,
      "ems": null
    },
    {
      "latitude": 38.512848,
      "longitude": -9.109039,
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497080,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.112383,
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
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653497087,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.116025,
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
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497092,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -9.119787,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497099,
      "ems": null
    },
    {
      "latitude": 38.512527,
      "longitude": -9.123474,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 268,
      "squawk": "3246",
      "timestamp": 1653497105,
      "ems": null
    },
    {
      "latitude": 38.512386,
      "longitude": -9.126892,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "3246",
      "timestamp": 1653497111,
      "ems": null
    },
    {
      "latitude": 38.512253,
      "longitude": -9.129699,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "3246",
      "timestamp": 1653497117,
      "ems": null
    },
    {
      "latitude": 38.512207,
      "longitude": -9.134057,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497122,
      "ems": null
    },
    {
      "latitude": 38.512299,
      "longitude": -9.13758,
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
      "heading": 273,
      "squawk": "3246",
      "timestamp": 1653497129,
      "ems": null
    },
    {
      "latitude": 38.512386,
      "longitude": -9.139282,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653497132,
      "ems": null
    },
    {
      "latitude": 38.512432,
      "longitude": -9.141296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653497135,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.144805,
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
      "heading": 269,
      "squawk": "3246",
      "timestamp": 1653497141,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.148376,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497147,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.1521,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497153,
      "ems": null
    },
    {
      "latitude": 38.512527,
      "longitude": -9.155396,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "3246",
      "timestamp": 1653497159,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -9.158813,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "3246",
      "timestamp": 1653497165,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.162538,
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
      "heading": 272,
      "squawk": "3246",
      "timestamp": 1653497171,
      "ems": null
    },
    {
      "latitude": 38.512993,
      "longitude": -9.165649,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 276,
      "squawk": "3246",
      "timestamp": 1653497177,
      "ems": null
    },
    {
      "latitude": 38.513214,
      "longitude": -9.167315,
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
      "heading": 280,
      "squawk": "3246",
      "timestamp": 1653497180,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -9.168986,
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
      "heading": 282,
      "squawk": "3246",
      "timestamp": 1653497183,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.170593,
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
      "heading": 293,
      "squawk": "3246",
      "timestamp": 1653497186,
      "ems": null
    },
    {
      "latitude": 38.51453,
      "longitude": -9.171936,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "3246",
      "timestamp": 1653497189,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -9.173166,
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
      "heading": 310,
      "squawk": "3246",
      "timestamp": 1653497192,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -9.174002,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653497195,
      "ems": null
    },
    {
      "latitude": 38.51709,
      "longitude": -9.174927,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653497198,
      "ems": null
    },
    {
      "latitude": 38.518208,
      "longitude": -9.175476,
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
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497201,
      "ems": null
    },
    {
      "latitude": 38.51944,
      "longitude": -9.175972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497204,
      "ems": null
    },
    {
      "latitude": 38.520535,
      "longitude": -9.176392,
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
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497207,
      "ems": null
    },
    {
      "latitude": 38.521744,
      "longitude": -9.176819,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497210,
      "ems": null
    },
    {
      "latitude": 38.522861,
      "longitude": -9.177185,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497214,
      "ems": null
    },
    {
      "latitude": 38.523373,
      "longitude": -9.177368,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497215,
      "ems": null
    },
    {
      "latitude": 38.523788,
      "longitude": -9.177525,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497216,
      "ems": null
    },
    {
      "latitude": 38.524956,
      "longitude": -9.177917,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497220,
      "ems": null
    },
    {
      "latitude": 38.526581,
      "longitude": -9.178361,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 348,
      "squawk": "3246",
      "timestamp": 1653497223,
      "ems": null
    },
    {
      "latitude": 38.527378,
      "longitude": -9.178589,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653497226,
      "ems": null
    },
    {
      "latitude": 38.529007,
      "longitude": -9.179016,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653497229,
      "ems": null
    },
    {
      "latitude": 38.531193,
      "longitude": -9.179688,
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497235,
      "ems": null
    },
    {
      "latitude": 38.533615,
      "longitude": -9.180481,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 346,
      "squawk": "3246",
      "timestamp": 1653497241,
      "ems": null
    },
    {
      "latitude": 38.535782,
      "longitude": -9.181287,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497247,
      "ems": null
    },
    {
      "latitude": 38.536873,
      "longitude": -9.181763,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497250,
      "ems": null
    },
    {
      "latitude": 38.537804,
      "longitude": -9.182129,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497253,
      "ems": null
    },
    {
      "latitude": 38.540039,
      "longitude": -9.182959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497259,
      "ems": null
    },
    {
      "latitude": 38.542274,
      "longitude": -9.183777,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497265,
      "ems": null
    },
    {
      "latitude": 38.545578,
      "longitude": -9.185107,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497274,
      "ems": null
    },
    {
      "latitude": 38.548836,
      "longitude": -9.186401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497283,
      "ems": null
    },
    {
      "latitude": 38.551117,
      "longitude": -9.187256,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497289,
      "ems": null
    },
    {
      "latitude": 38.553314,
      "longitude": -9.188153,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497295,
      "ems": null
    },
    {
      "latitude": 38.555447,
      "longitude": -9.188965,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497301,
      "ems": null
    },
    {
      "latitude": 38.557755,
      "longitude": -9.189825,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497308,
      "ems": null
    },
    {
      "latitude": 38.559906,
      "longitude": -9.19078,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653497313,
      "ems": null
    },
    {
      "latitude": 38.562057,
      "longitude": -9.191675,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653497319,
      "ems": null
    },
    {
      "latitude": 38.564255,
      "longitude": -9.192631,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497326,
      "ems": null
    },
    {
      "latitude": 38.566177,
      "longitude": -9.193467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497332,
      "ems": null
    },
    {
      "latitude": 38.568375,
      "longitude": -9.194363,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497338,
      "ems": null
    },
    {
      "latitude": 38.570251,
      "longitude": -9.195007,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497343,
      "ems": null
    },
    {
      "latitude": 38.5723,
      "longitude": -9.195923,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "3246",
      "timestamp": 1653497349,
      "ems": null
    },
    {
      "latitude": 38.573181,
      "longitude": -9.196631,
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
      "heading": 324,
      "squawk": "3246",
      "timestamp": 1653497353,
      "ems": null
    },
    {
      "latitude": 38.57402,
      "longitude": -9.197571,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497356,
      "ems": null
    },
    {
      "latitude": 38.574814,
      "longitude": -9.198547,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497359,
      "ems": null
    },
    {
      "latitude": 38.575603,
      "longitude": -9.199463,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653497361,
      "ems": null
    },
    {
      "latitude": 38.576523,
      "longitude": -9.200274,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "3246",
      "timestamp": 1653497364,
      "ems": null
    },
    {
      "latitude": 38.577438,
      "longitude": -9.20099,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653497367,
      "ems": null
    },
    {
      "latitude": 38.5784,
      "longitude": -9.20166,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "3246",
      "timestamp": 1653497370,
      "ems": null
    },
    {
      "latitude": 38.579269,
      "longitude": -9.202304,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "3246",
      "timestamp": 1653497373,
      "ems": null
    },
    {
      "latitude": 38.579933,
      "longitude": -9.202942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653497376,
      "ems": null
    },
    {
      "latitude": 38.580864,
      "longitude": -9.203979,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "3246",
      "timestamp": 1653497379,
      "ems": null
    },
    {
      "latitude": 38.581562,
      "longitude": -9.204895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497383,
      "ems": null
    },
    {
      "latitude": 38.583115,
      "longitude": -9.206961,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497389,
      "ems": null
    },
    {
      "latitude": 38.583984,
      "longitude": -9.20813,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497392,
      "ems": null
    },
    {
      "latitude": 38.584671,
      "longitude": -9.209051,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497395,
      "ems": null
    },
    {
      "latitude": 38.585476,
      "longitude": -9.210083,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497398,
      "ems": null
    },
    {
      "latitude": 38.58622,
      "longitude": -9.210999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497401,
      "ems": null
    },
    {
      "latitude": 38.58696,
      "longitude": -9.211917,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497404,
      "ems": null
    },
    {
      "latitude": 38.588654,
      "longitude": -9.213887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "3246",
      "timestamp": 1653497410,
      "ems": null
    },
    {
      "latitude": 38.589432,
      "longitude": -9.214723,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653497413,
      "ems": null
    },
    {
      "latitude": 38.590393,
      "longitude": -9.215738,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653497416,
      "ems": null
    },
    {
      "latitude": 38.591263,
      "longitude": -9.216634,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653497419,
      "ems": null
    },
    {
      "latitude": 38.591991,
      "longitude": -9.217407,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653497421,
      "ems": null
    },
    {
      "latitude": 38.592911,
      "longitude": -9.218306,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "3246",
      "timestamp": 1653497425,
      "ems": null
    },
    {
      "latitude": 38.593781,
      "longitude": -9.219201,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653497428,
      "ems": null
    },
    {
      "latitude": 38.595436,
      "longitude": -9.221191,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497434,
      "ems": null
    },
    {
      "latitude": 38.597168,
      "longitude": -9.223381,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497440,
      "ems": null
    },
    {
      "latitude": 38.598835,
      "longitude": -9.225464,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "3246",
      "timestamp": 1653497446,
      "ems": null
    },
    {
      "latitude": 38.600464,
      "longitude": -9.227356,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497452,
      "ems": null
    },
    {
      "latitude": 38.602295,
      "longitude": -9.229471,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653497458,
      "ems": null
    },
    {
      "latitude": 38.604034,
      "longitude": -9.231441,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "3246",
      "timestamp": 1653497464,
      "ems": null
    },
    {
      "latitude": 38.605774,
      "longitude": -9.233412,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497470,
      "ems": null
    },
    {
      "latitude": 38.607494,
      "longitude": -9.235413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497476,
      "ems": null
    },
    {
      "latitude": 38.609253,
      "longitude": -9.237532,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497482,
      "ems": null
    },
    {
      "latitude": 38.609985,
      "longitude": -9.238487,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 313,
      "squawk": "3246",
      "timestamp": 1653497485,
      "ems": null
    },
    {
      "latitude": 38.610855,
      "longitude": -9.239681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "3246",
      "timestamp": 1653497488,
      "ems": null
    },
    {
      "latitude": 38.611591,
      "longitude": -9.240723,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "3246",
      "timestamp": 1653497491,
      "ems": null
    },
    {
      "latitude": 38.612503,
      "longitude": -9.24195,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "3246",
      "timestamp": 1653497496,
      "ems": null
    },
    {
      "latitude": 38.614883,
      "longitude": -9.244876,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497503,
      "ems": null
    },
    {
      "latitude": 38.616119,
      "longitude": -9.246368,
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
      "heading": 316,
      "squawk": "3246",
      "timestamp": 1653497508,
      "ems": null
    },
    {
      "latitude": 38.618134,
      "longitude": -9.248697,
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
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497514,
      "ems": null
    },
    {
      "latitude": 38.619415,
      "longitude": -9.25025,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497519,
      "ems": null
    },
    {
      "latitude": 38.621567,
      "longitude": -9.252757,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 320,
      "squawk": "3246",
      "timestamp": 1653497527,
      "ems": null
    },
    {
      "latitude": 38.623306,
      "longitude": -9.254608,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "3246",
      "timestamp": 1653497533,
      "ems": null
    },
    {
      "latitude": 38.62532,
      "longitude": -9.256937,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497539,
      "ems": null
    },
    {
      "latitude": 38.626766,
      "longitude": -9.258728,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "3246",
      "timestamp": 1653497545,
      "ems": null
    },
    {
      "latitude": 38.627838,
      "longitude": -9.259982,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 317,
      "squawk": "3246",
      "timestamp": 1653497551,
      "ems": null
    },
    {
      "latitude": 38.630127,
      "longitude": -9.262609,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653497556,
      "ems": null
    },
    {
      "latitude": 38.63142,
      "longitude": -9.264038,
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
      "heading": 319,
      "squawk": "3246",
      "timestamp": 1653497563,
      "ems": null
    },
    {
      "latitude": 38.633564,
      "longitude": -9.266479,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "3246",
      "timestamp": 1653497569,
      "ems": null
    },
    {
      "latitude": 38.634888,
      "longitude": -9.268341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "3246",
      "timestamp": 1653497575,
      "ems": null
    },
    {
      "latitude": 38.636776,
      "longitude": -9.271057,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 311,
      "squawk": "3246",
      "timestamp": 1653497581,
      "ems": null
    },
    {
      "latitude": 38.637405,
      "longitude": -9.271983,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497584,
      "ems": null
    },
    {
      "latitude": 38.638172,
      "longitude": -9.273193,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 308,
      "squawk": "3246",
      "timestamp": 1653497587,
      "ems": null
    },
    {
      "latitude": 38.638916,
      "longitude": -9.274353,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "3246",
      "timestamp": 1653497590,
      "ems": null
    },
    {
      "latitude": 38.639648,
      "longitude": -9.275506,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "3246",
      "timestamp": 1653497592,
      "ems": null
    },
    {
      "latitude": 38.640427,
      "longitude": -9.2767,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497596,
      "ems": null
    },
    {
      "latitude": 38.642082,
      "longitude": -9.279358,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3246",
      "timestamp": 1653497602,
      "ems": null
    },
    {
      "latitude": 38.642685,
      "longitude": -9.280396,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 307,
      "squawk": "3246",
      "timestamp": 1653497605,
      "ems": null
    },
    {
      "latitude": 38.643448,
      "longitude": -9.281656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "3246",
      "timestamp": 1653497608,
      "ems": null
    },
    {
      "latitude": 38.645016,
      "longitude": -9.28418,
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
      "heading": 307,
      "squawk": "3246",
      "timestamp": 1653497614,
      "ems": null
    },
    {
      "latitude": 38.646881,
      "longitude": -9.287149,
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
      "heading": 308,
      "squawk": "3246",
      "timestamp": 1653497621,
      "ems": null
    },
    {
      "latitude": 38.648319,
      "longitude": -9.289429,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497628,
      "ems": null
    },
    {
      "latitude": 38.649765,
      "longitude": -9.291508,
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
      "heading": 311,
      "squawk": "3246",
      "timestamp": 1653497633,
      "ems": null
    },
    {
      "latitude": 38.650509,
      "longitude": -9.292603,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 312,
      "squawk": "3246",
      "timestamp": 1653497636,
      "ems": null
    },
    {
      "latitude": 38.651871,
      "longitude": -9.294613,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497642,
      "ems": null
    },
    {
      "latitude": 38.653255,
      "longitude": -9.296814,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497648,
      "ems": null
    },
    {
      "latitude": 38.654663,
      "longitude": -9.298912,
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
      "heading": 310,
      "squawk": "3246",
      "timestamp": 1653497654,
      "ems": null
    },
    {
      "latitude": 38.656082,
      "longitude": -9.301002,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "3246",
      "timestamp": 1653497661,
      "ems": null
    },
    {
      "latitude": 38.657536,
      "longitude": -9.302979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "3246",
      "timestamp": 1653497667,
      "ems": null
    },
    {
      "latitude": 38.659012,
      "longitude": -9.30548,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "3246",
      "timestamp": 1653497673,
      "ems": null
    },
    {
      "latitude": 38.659584,
      "longitude": -9.306641,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "3246",
      "timestamp": 1653497676,
      "ems": null
    },
    {
      "latitude": 38.660202,
      "longitude": -9.307928,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "3246",
      "timestamp": 1653497679,
      "ems": null
    },
    {
      "latitude": 38.660797,
      "longitude": -9.309143,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "3246",
      "timestamp": 1653497682,
      "ems": null
    },
    {
      "latitude": 38.661346,
      "longitude": -9.310376,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "3246",
      "timestamp": 1653497685,
      "ems": null
    },
    {
      "latitude": 38.661942,
      "longitude": -9.311629,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "3246",
      "timestamp": 1653497688,
      "ems": null
    },
    {
      "latitude": 38.662518,
      "longitude": -9.312927,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "3246",
      "timestamp": 1653497691,
      "ems": null
    },
    {
      "latitude": 38.663086,
      "longitude": -9.314197,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "3246",
      "timestamp": 1653497694,
      "ems": null
    },
    {
      "latitude": 38.663727,
      "longitude": -9.315491,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "3246",
      "timestamp": 1653497697,
      "ems": null
    },
    {
      "latitude": 38.664333,
      "longitude": -9.316895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "3246",
      "timestamp": 1653497700,
      "ems": null
    },
    {
      "latitude": 38.665375,
      "longitude": -9.319213,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "3246",
      "timestamp": 1653497706,
      "ems": null
    },
    {
      "latitude": 38.666565,
      "longitude": -9.322019,
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
      "heading": 298,
      "squawk": "3246",
      "timestamp": 1653497712,
      "ems": null
    },
    {
      "latitude": 38.667686,
      "longitude": -9.324707,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 298,
      "squawk": "3246",
      "timestamp": 1653497718,
      "ems": null
    },
    {
      "latitude": 38.668808,
      "longitude": -9.327273,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 299,
      "squawk": "3246",
      "timestamp": 1653497724,
      "ems": null
    },
    {
      "latitude": 38.670013,
      "longitude": -9.329712,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 304,
      "squawk": "3246",
      "timestamp": 1653497730,
      "ems": null
    },
    {
      "latitude": 38.670712,
      "longitude": -9.330933,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 306,
      "squawk": "3246",
      "timestamp": 1653497733,
      "ems": null
    },
    {
      "latitude": 38.67141,
      "longitude": -9.332153,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 307,
      "squawk": "3246",
      "timestamp": 1653497736,
      "ems": null
    },
    {
      "latitude": 38.672104,
      "longitude": -9.333184,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 309,
      "squawk": "3246",
      "timestamp": 1653497739,
      "ems": null
    },
    {
      "latitude": 38.672791,
      "longitude": -9.334199,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 316,
      "squawk": "3246",
      "timestamp": 1653497742,
      "ems": null
    },
    {
      "latitude": 38.67355,
      "longitude": -9.335022,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 321,
      "squawk": "3246",
      "timestamp": 1653497745,
      "ems": null
    },
    {
      "latitude": 38.674347,
      "longitude": -9.335752,
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
      "heading": 323,
      "squawk": "3246",
      "timestamp": 1653497748,
      "ems": null
    },
    {
      "latitude": 38.675262,
      "longitude": -9.336469,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "3246",
      "timestamp": 1653497751,
      "ems": null
    },
    {
      "latitude": 38.676205,
      "longitude": -9.337036,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "3246",
      "timestamp": 1653497754,
      "ems": null
    },
    {
      "latitude": 38.677094,
      "longitude": -9.337483,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3246",
      "timestamp": 1653497757,
      "ems": null
    },
    {
      "latitude": 38.677975,
      "longitude": -9.337952,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 339,
      "squawk": "3246",
      "timestamp": 1653497760,
      "ems": null
    },
    {
      "latitude": 38.678787,
      "longitude": -9.338319,
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
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653497763,
      "ems": null
    },
    {
      "latitude": 38.679695,
      "longitude": -9.338623,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "3246",
      "timestamp": 1653497766,
      "ems": null
    },
    {
      "latitude": 38.680481,
      "longitude": -9.338857,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497769,
      "ems": null
    },
    {
      "latitude": 38.68137,
      "longitude": -9.339172,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497772,
      "ems": null
    },
    {
      "latitude": 38.682072,
      "longitude": -9.339478,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497775,
      "ems": null
    },
    {
      "latitude": 38.68277,
      "longitude": -9.339871,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497778,
      "ems": null
    },
    {
      "latitude": 38.683468,
      "longitude": -9.340149,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497781,
      "ems": null
    },
    {
      "latitude": 38.684116,
      "longitude": -9.340393,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497784,
      "ems": null
    },
    {
      "latitude": 38.684738,
      "longitude": -9.340648,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497788,
      "ems": null
    },
    {
      "latitude": 38.685375,
      "longitude": -9.34082,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497791,
      "ems": null
    },
    {
      "latitude": 38.686771,
      "longitude": -9.34137,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497797,
      "ems": null
    },
    {
      "latitude": 38.687988,
      "longitude": -9.341722,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "3246",
      "timestamp": 1653497803,
      "ems": null
    },
    {
      "latitude": 38.689178,
      "longitude": -9.34214,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497809,
      "ems": null
    },
    {
      "latitude": 38.689751,
      "longitude": -9.342346,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 348,
      "squawk": "3246",
      "timestamp": 1653497812,
      "ems": null
    },
    {
      "latitude": 38.690781,
      "longitude": -9.342678,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "3246",
      "timestamp": 1653497817,
      "ems": null
    },
    {
      "latitude": 38.692108,
      "longitude": -9.343215,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497823,
      "ems": null
    },
    {
      "latitude": 38.693481,
      "longitude": -9.343693,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497830,
      "ems": null
    },
    {
      "latitude": 38.694637,
      "longitude": -9.344177,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497836,
      "ems": null
    },
    {
      "latitude": 38.695999,
      "longitude": -9.344648,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497842,
      "ems": null
    },
    {
      "latitude": 38.697338,
      "longitude": -9.345154,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497848,
      "ems": null
    },
    {
      "latitude": 38.698643,
      "longitude": -9.345703,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653497854,
      "ems": null
    },
    {
      "latitude": 38.699947,
      "longitude": -9.34613,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497860,
      "ems": null
    },
    {
      "latitude": 38.701157,
      "longitude": -9.346558,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3246",
      "timestamp": 1653497866,
      "ems": null
    },
    {
      "latitude": 38.702362,
      "longitude": -9.346977,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 346,
      "squawk": "3246",
      "timestamp": 1653497872,
      "ems": null
    },
    {
      "latitude": 38.703671,
      "longitude": -9.347412,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497878,
      "ems": null
    },
    {
      "latitude": 38.704926,
      "longitude": -9.3479,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3246",
      "timestamp": 1653497884,
      "ems": null
    },
    {
      "latitude": 38.706299,
      "longitude": -9.34841,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497890,
      "ems": null
    },
    {
      "latitude": 38.707443,
      "longitude": -9.348828,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497896,
      "ems": null
    },
    {
      "latitude": 38.708744,
      "longitude": -9.349304,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "3246",
      "timestamp": 1653497902,
      "ems": null
    },
    {
      "latitude": 38.710693,
      "longitude": -9.350022,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497911,
      "ems": null
    },
    {
      "latitude": 38.712112,
      "longitude": -9.3505,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497917,
      "ems": null
    },
    {
      "latitude": 38.713448,
      "longitude": -9.350952,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497923,
      "ems": null
    },
    {
      "latitude": 38.714767,
      "longitude": -9.351455,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497929,
      "ems": null
    },
    {
      "latitude": 38.716003,
      "longitude": -9.351933,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497936,
      "ems": null
    },
    {
      "latitude": 38.717194,
      "longitude": -9.35235,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497942,
      "ems": null
    },
    {
      "latitude": 38.718567,
      "longitude": -9.352844,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3246",
      "timestamp": 1653497948,
      "ems": null
    },
    {
      "latitude": 38.719162,
      "longitude": -9.353067,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497953,
      "ems": null
    },
    {
      "latitude": 38.720993,
      "longitude": -9.353724,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 57.4,
        "kts": 31,
        "mph": 35.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497961,
      "ems": null
    },
    {
      "latitude": 38.721592,
      "longitude": -9.353943,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 42.6,
        "kts": 23,
        "mph": 26.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3246",
      "timestamp": 1653497966,
      "ems": null
    },
    {
      "latitude": 38.722366,
      "longitude": -9.354261,
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
      "heading": 341,
      "squawk": "3246",
      "timestamp": 1653497975,
      "ems": null
    },
    {
      "latitude": 38.723007,
      "longitude": -9.354381,
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
      "heading": 11,
      "squawk": "3246",
      "timestamp": 1653497984,
      "ems": null
    },
    {
      "latitude": 38.723145,
      "longitude": -9.354082,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 5.6,
        "kts": 3,
        "mph": 3.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3246",
      "timestamp": 1653497993,
      "ems": null
    },
    {
      "latitude": 38.723221,
      "longitude": -9.353821,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 9.3,
        "kts": 5,
        "mph": 5.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3246",
      "timestamp": 1653498002,
      "ems": null
    }
  ]
};
