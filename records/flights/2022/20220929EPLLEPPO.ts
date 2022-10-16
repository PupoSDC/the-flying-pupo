import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220929EPLLEPPO",
    callsign: "BNI8AX",
    name: "Hour building flight to Poznan",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 29, 9, 35).getTime(),
    arrival: new Date(2022, 8, 29, 11, 0).getTime(),
    singleEnginePistonTime: 85,
    multiEnginePistonTime: 0,
    picTime: 85,
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
      modes: "3D3720",
      registration: "SP-ELT",
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
      name: "Poznan Lawica Airport",
      code: "EPPO",
      position: {
        latitude: 52.421028,
        longitude: 16.826321,
      },
    },
  },
  track: [
    {
      "latitude": 51.722031,
      "longitude": 19.349152,
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
      "heading": 340,
      "squawk": "0",
      "timestamp": 1664444535,
      "ems": null
    },
    {
      "latitude": 51.724937,
      "longitude": 19.346542,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 317,
      "squawk": "0",
      "timestamp": 1664444543,
      "ems": null
    },
    {
      "latitude": 51.725773,
      "longitude": 19.344635,
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
      "heading": 301,
      "squawk": "0",
      "timestamp": 1664444547,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.341728,
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
      "heading": 293,
      "squawk": "0",
      "timestamp": 1664444552,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.339371,
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
      "heading": 294,
      "squawk": "0",
      "timestamp": 1664444556,
      "ems": null
    },
    {
      "latitude": 51.727962,
      "longitude": 19.337082,
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
      "heading": 295,
      "squawk": "0",
      "timestamp": 1664444560,
      "ems": null
    },
    {
      "latitude": 51.728851,
      "longitude": 19.334305,
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
      "heading": 297,
      "squawk": "0",
      "timestamp": 1664444564,
      "ems": null
    },
    {
      "latitude": 51.729546,
      "longitude": 19.332275,
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
      "heading": 298,
      "squawk": "0",
      "timestamp": 1664444568,
      "ems": null
    },
    {
      "latitude": 51.73114,
      "longitude": 19.327326,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664444576,
      "ems": null
    },
    {
      "latitude": 51.732101,
      "longitude": 19.324505,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664444580,
      "ems": null
    },
    {
      "latitude": 51.732849,
      "longitude": 19.322205,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664444584,
      "ems": null
    },
    {
      "latitude": 51.734013,
      "longitude": 19.319153,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664444588,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 19.314781,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664444596,
      "ems": null
    },
    {
      "latitude": 51.736862,
      "longitude": 19.311886,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664444600,
      "ems": null
    },
    {
      "latitude": 51.738716,
      "longitude": 19.306564,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664444608,
      "ems": null
    },
    {
      "latitude": 51.739517,
      "longitude": 19.304018,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664444612,
      "ems": null
    },
    {
      "latitude": 51.740112,
      "longitude": 19.3013,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664444616,
      "ems": null
    },
    {
      "latitude": 51.740616,
      "longitude": 19.298079,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664444621,
      "ems": null
    },
    {
      "latitude": 51.740902,
      "longitude": 19.294739,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664444625,
      "ems": null
    },
    {
      "latitude": 51.740982,
      "longitude": 19.292439,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664444628,
      "ems": null
    },
    {
      "latitude": 51.741028,
      "longitude": 19.290953,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664444630,
      "ems": null
    },
    {
      "latitude": 51.741028,
      "longitude": 19.290285,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444631,
      "ems": null
    },
    {
      "latitude": 51.741043,
      "longitude": 19.289856,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444631,
      "ems": null
    },
    {
      "latitude": 51.740952,
      "longitude": 19.286957,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664444636,
      "ems": null
    },
    {
      "latitude": 51.740856,
      "longitude": 19.284363,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664444639,
      "ems": null
    },
    {
      "latitude": 51.740856,
      "longitude": 19.281082,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664444644,
      "ems": null
    },
    {
      "latitude": 51.741165,
      "longitude": 19.275141,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444652,
      "ems": null
    },
    {
      "latitude": 51.74144,
      "longitude": 19.27002,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664444661,
      "ems": null
    },
    {
      "latitude": 51.741577,
      "longitude": 19.26512,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664444666,
      "ems": null
    },
    {
      "latitude": 51.74176,
      "longitude": 19.259924,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664444674,
      "ems": null
    },
    {
      "latitude": 51.742172,
      "longitude": 19.253763,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664444682,
      "ems": null
    },
    {
      "latitude": 51.742447,
      "longitude": 19.249828,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664444687,
      "ems": null
    },
    {
      "latitude": 51.742676,
      "longitude": 19.247305,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664444691,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 19.245893,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664444693,
      "ems": null
    },
    {
      "latitude": 51.74295,
      "longitude": 19.24408,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664444695,
      "ems": null
    },
    {
      "latitude": 51.743511,
      "longitude": 19.237442,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664444705,
      "ems": null
    },
    {
      "latitude": 51.744141,
      "longitude": 19.230825,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664444714,
      "ems": null
    },
    {
      "latitude": 51.744583,
      "longitude": 19.224701,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444723,
      "ems": null
    },
    {
      "latitude": 51.744873,
      "longitude": 19.220879,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664444728,
      "ems": null
    },
    {
      "latitude": 51.745193,
      "longitude": 19.214939,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444737,
      "ems": null
    },
    {
      "latitude": 51.745193,
      "longitude": 19.212564,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444741,
      "ems": null
    },
    {
      "latitude": 51.745193,
      "longitude": 19.207962,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444747,
      "ems": null
    },
    {
      "latitude": 51.745186,
      "longitude": 19.20517,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444751,
      "ems": null
    },
    {
      "latitude": 51.745186,
      "longitude": 19.204712,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444753,
      "ems": null
    },
    {
      "latitude": 51.745186,
      "longitude": 19.201813,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444757,
      "ems": null
    },
    {
      "latitude": 51.745186,
      "longitude": 19.199753,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444759,
      "ems": null
    },
    {
      "latitude": 51.745193,
      "longitude": 19.197569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664444763,
      "ems": null
    },
    {
      "latitude": 51.74514,
      "longitude": 19.193344,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444769,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.189606,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444773,
      "ems": null
    },
    {
      "latitude": 51.744965,
      "longitude": 19.183466,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444782,
      "ems": null
    },
    {
      "latitude": 51.744999,
      "longitude": 19.178238,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444790,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.174957,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664444794,
      "ems": null
    },
    {
      "latitude": 51.745239,
      "longitude": 19.169733,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444802,
      "ems": null
    },
    {
      "latitude": 51.745232,
      "longitude": 19.165497,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444808,
      "ems": null
    },
    {
      "latitude": 51.745193,
      "longitude": 19.160973,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444814,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.156876,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444820,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.152679,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664444826,
      "ems": null
    },
    {
      "latitude": 51.745056,
      "longitude": 19.148872,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664444831,
      "ems": null
    },
    {
      "latitude": 51.745056,
      "longitude": 19.144123,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664444838,
      "ems": null
    },
    {
      "latitude": 51.74514,
      "longitude": 19.13765,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664444848,
      "ems": null
    },
    {
      "latitude": 51.745239,
      "longitude": 19.135214,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664444852,
      "ems": null
    },
    {
      "latitude": 51.745377,
      "longitude": 19.132097,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664444856,
      "ems": null
    },
    {
      "latitude": 51.745464,
      "longitude": 19.130325,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444859,
      "ems": null
    },
    {
      "latitude": 51.745605,
      "longitude": 19.12779,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444862,
      "ems": null
    },
    {
      "latitude": 51.745743,
      "longitude": 19.125713,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444865,
      "ems": null
    },
    {
      "latitude": 51.745979,
      "longitude": 19.121246,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664444871,
      "ems": null
    },
    {
      "latitude": 51.746162,
      "longitude": 19.117126,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664444877,
      "ems": null
    },
    {
      "latitude": 51.746117,
      "longitude": 19.115829,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664444879,
      "ems": null
    },
    {
      "latitude": 51.74588,
      "longitude": 19.113167,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444883,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.111832,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444885,
      "ems": null
    },
    {
      "latitude": 51.745514,
      "longitude": 19.11042,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444887,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.10759,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444891,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.104557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444895,
      "ems": null
    },
    {
      "latitude": 51.744461,
      "longitude": 19.103146,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444897,
      "ems": null
    },
    {
      "latitude": 51.744186,
      "longitude": 19.101141,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444900,
      "ems": null
    },
    {
      "latitude": 51.743835,
      "longitude": 19.098434,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444904,
      "ems": null
    },
    {
      "latitude": 51.743637,
      "longitude": 19.096985,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664444906,
      "ems": null
    },
    {
      "latitude": 51.743279,
      "longitude": 19.094315,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664444910,
      "ems": null
    },
    {
      "latitude": 51.742905,
      "longitude": 19.091339,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444916,
      "ems": null
    },
    {
      "latitude": 51.742252,
      "longitude": 19.08577,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444922,
      "ems": null
    },
    {
      "latitude": 51.741486,
      "longitude": 19.079168,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444930,
      "ems": null
    },
    {
      "latitude": 51.740982,
      "longitude": 19.073898,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664444938,
      "ems": null
    },
    {
      "latitude": 51.740707,
      "longitude": 19.070335,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664444943,
      "ems": null
    },
    {
      "latitude": 51.74025,
      "longitude": 19.0641,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664444952,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.060389,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1664444957,
      "ems": null
    },
    {
      "latitude": 51.739925,
      "longitude": 19.057388,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664444961,
      "ems": null
    },
    {
      "latitude": 51.739834,
      "longitude": 19.055405,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664444964,
      "ems": null
    },
    {
      "latitude": 51.739746,
      "longitude": 19.052149,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664444969,
      "ems": null
    },
    {
      "latitude": 51.739059,
      "longitude": 19.046879,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664444977,
      "ems": null
    },
    {
      "latitude": 51.738556,
      "longitude": 19.044651,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664444981,
      "ems": null
    },
    {
      "latitude": 51.737869,
      "longitude": 19.041904,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664444985,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.039455,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664444989,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.036865,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664444993,
      "ems": null
    },
    {
      "latitude": 51.736481,
      "longitude": 19.034195,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664444997,
      "ems": null
    },
    {
      "latitude": 51.736156,
      "longitude": 19.031067,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664445001,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.028097,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664445005,
      "ems": null
    },
    {
      "latitude": 51.73555,
      "longitude": 19.025726,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664445009,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 19.022234,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664445014,
      "ems": null
    },
    {
      "latitude": 51.73476,
      "longitude": 19.019928,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664445018,
      "ems": null
    },
    {
      "latitude": 51.734436,
      "longitude": 19.016962,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664445022,
      "ems": null
    },
    {
      "latitude": 51.733875,
      "longitude": 19.011993,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664445030,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.006042,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664445038,
      "ems": null
    },
    {
      "latitude": 51.732758,
      "longitude": 19.000702,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664445045,
      "ems": null
    },
    {
      "latitude": 51.732338,
      "longitude": 18.995285,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664445054,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 18.988903,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664445063,
      "ems": null
    },
    {
      "latitude": 51.731598,
      "longitude": 18.984821,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664445069,
      "ems": null
    },
    {
      "latitude": 51.731361,
      "longitude": 18.982315,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664445074,
      "ems": null
    },
    {
      "latitude": 51.730988,
      "longitude": 18.975143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664445084,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 18.972795,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664445087,
      "ems": null
    },
    {
      "latitude": 51.731781,
      "longitude": 18.970795,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664445091,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 18.969879,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664445092,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 18.965836,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445100,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 18.963318,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445105,
      "ems": null
    },
    {
      "latitude": 51.737228,
      "longitude": 18.961586,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445109,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 18.960398,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445111,
      "ems": null
    },
    {
      "latitude": 51.73867,
      "longitude": 18.959732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445114,
      "ems": null
    },
    {
      "latitude": 51.740253,
      "longitude": 18.957672,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445117,
      "ems": null
    },
    {
      "latitude": 51.741302,
      "longitude": 18.95639,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445120,
      "ems": null
    },
    {
      "latitude": 51.742348,
      "longitude": 18.955154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664445123,
      "ems": null
    },
    {
      "latitude": 51.743698,
      "longitude": 18.953629,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664445127,
      "ems": null
    },
    {
      "latitude": 51.744781,
      "longitude": 18.952381,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664445130,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 18.949709,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445136,
      "ems": null
    },
    {
      "latitude": 51.749084,
      "longitude": 18.947037,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445141,
      "ems": null
    },
    {
      "latitude": 51.75087,
      "longitude": 18.944513,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445147,
      "ems": null
    },
    {
      "latitude": 51.751984,
      "longitude": 18.942795,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445150,
      "ems": null
    },
    {
      "latitude": 51.753342,
      "longitude": 18.940876,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445154,
      "ems": null
    },
    {
      "latitude": 51.754078,
      "longitude": 18.939819,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445156,
      "ems": null
    },
    {
      "latitude": 51.75531,
      "longitude": 18.938055,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445159,
      "ems": null
    },
    {
      "latitude": 51.757477,
      "longitude": 18.934937,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445166,
      "ems": null
    },
    {
      "latitude": 51.75906,
      "longitude": 18.932724,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445170,
      "ems": null
    },
    {
      "latitude": 51.761665,
      "longitude": 18.929214,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445178,
      "ems": null
    },
    {
      "latitude": 51.763714,
      "longitude": 18.926315,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445183,
      "ems": null
    },
    {
      "latitude": 51.765564,
      "longitude": 18.923653,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445190,
      "ems": null
    },
    {
      "latitude": 51.767811,
      "longitude": 18.920517,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445195,
      "ems": null
    },
    {
      "latitude": 51.769859,
      "longitude": 18.917465,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445201,
      "ems": null
    },
    {
      "latitude": 51.772141,
      "longitude": 18.914413,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445208,
      "ems": null
    },
    {
      "latitude": 51.774189,
      "longitude": 18.911896,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445213,
      "ems": null
    },
    {
      "latitude": 51.776047,
      "longitude": 18.909401,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445219,
      "ems": null
    },
    {
      "latitude": 51.77903,
      "longitude": 18.904953,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445228,
      "ems": null
    },
    {
      "latitude": 51.781128,
      "longitude": 18.901978,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445235,
      "ems": null
    },
    {
      "latitude": 51.782913,
      "longitude": 18.89938,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445240,
      "ems": null
    },
    {
      "latitude": 51.785797,
      "longitude": 18.895,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445250,
      "ems": null
    },
    {
      "latitude": 51.787628,
      "longitude": 18.892179,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445256,
      "ems": null
    },
    {
      "latitude": 51.789318,
      "longitude": 18.889618,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445262,
      "ems": null
    },
    {
      "latitude": 51.791336,
      "longitude": 18.886538,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445268,
      "ems": null
    },
    {
      "latitude": 51.793087,
      "longitude": 18.88382,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445274,
      "ems": null
    },
    {
      "latitude": 51.794952,
      "longitude": 18.881119,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445279,
      "ems": null
    },
    {
      "latitude": 51.796463,
      "longitude": 18.878817,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445286,
      "ems": null
    },
    {
      "latitude": 51.800034,
      "longitude": 18.873844,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445294,
      "ems": null
    },
    {
      "latitude": 51.800903,
      "longitude": 18.87273,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445298,
      "ems": null
    },
    {
      "latitude": 51.804428,
      "longitude": 18.86783,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445307,
      "ems": null
    },
    {
      "latitude": 51.806404,
      "longitude": 18.865051,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445313,
      "ems": null
    },
    {
      "latitude": 51.809151,
      "longitude": 18.861008,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445321,
      "ems": null
    },
    {
      "latitude": 51.810379,
      "longitude": 18.859072,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445325,
      "ems": null
    },
    {
      "latitude": 51.811291,
      "longitude": 18.857574,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445328,
      "ems": null
    },
    {
      "latitude": 51.81308,
      "longitude": 18.854692,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664445333,
      "ems": null
    },
    {
      "latitude": 51.816551,
      "longitude": 18.848877,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664445344,
      "ems": null
    },
    {
      "latitude": 51.819077,
      "longitude": 18.844671,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664445352,
      "ems": null
    },
    {
      "latitude": 51.821548,
      "longitude": 18.840439,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445360,
      "ems": null
    },
    {
      "latitude": 51.823654,
      "longitude": 18.836876,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445366,
      "ems": null
    },
    {
      "latitude": 51.825668,
      "longitude": 18.833536,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664445373,
      "ems": null
    },
    {
      "latitude": 51.82695,
      "longitude": 18.831755,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445377,
      "ems": null
    },
    {
      "latitude": 51.828461,
      "longitude": 18.829676,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445381,
      "ems": null
    },
    {
      "latitude": 51.829971,
      "longitude": 18.827597,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445385,
      "ems": null
    },
    {
      "latitude": 51.832489,
      "longitude": 18.823959,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445393,
      "ems": null
    },
    {
      "latitude": 51.835281,
      "longitude": 18.819654,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445401,
      "ems": null
    },
    {
      "latitude": 51.837872,
      "longitude": 18.815765,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445409,
      "ems": null
    },
    {
      "latitude": 51.839767,
      "longitude": 18.812824,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445415,
      "ems": null
    },
    {
      "latitude": 51.841644,
      "longitude": 18.809814,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445421,
      "ems": null
    },
    {
      "latitude": 51.843365,
      "longitude": 18.807144,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445427,
      "ems": null
    },
    {
      "latitude": 51.846439,
      "longitude": 18.802414,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445436,
      "ems": null
    },
    {
      "latitude": 51.848392,
      "longitude": 18.799744,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445442,
      "ems": null
    },
    {
      "latitude": 51.849289,
      "longitude": 18.798647,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445445,
      "ems": null
    },
    {
      "latitude": 51.851513,
      "longitude": 18.795319,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445451,
      "ems": null
    },
    {
      "latitude": 51.853699,
      "longitude": 18.791656,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445458,
      "ems": null
    },
    {
      "latitude": 51.854874,
      "longitude": 18.789814,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445462,
      "ems": null
    },
    {
      "latitude": 51.857098,
      "longitude": 18.786316,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445469,
      "ems": null
    },
    {
      "latitude": 51.860123,
      "longitude": 18.781662,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445478,
      "ems": null
    },
    {
      "latitude": 51.860683,
      "longitude": 18.780823,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445481,
      "ems": null
    },
    {
      "latitude": 51.862473,
      "longitude": 18.778307,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445484,
      "ems": null
    },
    {
      "latitude": 51.864407,
      "longitude": 18.775635,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445490,
      "ems": null
    },
    {
      "latitude": 51.865219,
      "longitude": 18.774595,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445492,
      "ems": null
    },
    {
      "latitude": 51.866596,
      "longitude": 18.772888,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445496,
      "ems": null
    },
    {
      "latitude": 51.867874,
      "longitude": 18.77133,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445500,
      "ems": null
    },
    {
      "latitude": 51.868881,
      "longitude": 18.770067,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445502,
      "ems": null
    },
    {
      "latitude": 51.871307,
      "longitude": 18.767023,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445509,
      "ems": null
    },
    {
      "latitude": 51.872269,
      "longitude": 18.765911,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664445511,
      "ems": null
    },
    {
      "latitude": 51.874054,
      "longitude": 18.763535,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445516,
      "ems": null
    },
    {
      "latitude": 51.877304,
      "longitude": 18.759155,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445526,
      "ems": null
    },
    {
      "latitude": 51.880875,
      "longitude": 18.754478,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445536,
      "ems": null
    },
    {
      "latitude": 51.883167,
      "longitude": 18.751755,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664445542,
      "ems": null
    },
    {
      "latitude": 51.884472,
      "longitude": 18.750916,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1664445545,
      "ems": null
    },
    {
      "latitude": 51.886047,
      "longitude": 18.750469,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1664445548,
      "ems": null
    },
    {
      "latitude": 51.887421,
      "longitude": 18.750397,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1664445551,
      "ems": null
    },
    {
      "latitude": 51.888847,
      "longitude": 18.750229,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1664445554,
      "ems": null
    },
    {
      "latitude": 51.889709,
      "longitude": 18.750099,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1664445556,
      "ems": null
    },
    {
      "latitude": 51.891312,
      "longitude": 18.749432,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1664445560,
      "ems": null
    },
    {
      "latitude": 51.892639,
      "longitude": 18.748466,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1664445563,
      "ems": null
    },
    {
      "latitude": 51.89476,
      "longitude": 18.745657,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445569,
      "ems": null
    },
    {
      "latitude": 51.895477,
      "longitude": 18.744278,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664445571,
      "ems": null
    },
    {
      "latitude": 51.896439,
      "longitude": 18.742218,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664445575,
      "ems": null
    },
    {
      "latitude": 51.897179,
      "longitude": 18.740557,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664445578,
      "ems": null
    },
    {
      "latitude": 51.897995,
      "longitude": 18.738937,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664445581,
      "ems": null
    },
    {
      "latitude": 51.899139,
      "longitude": 18.737183,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445584,
      "ems": null
    },
    {
      "latitude": 51.90033,
      "longitude": 18.735962,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1664445587,
      "ems": null
    },
    {
      "latitude": 51.902718,
      "longitude": 18.734514,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1664445592,
      "ems": null
    },
    {
      "latitude": 51.904396,
      "longitude": 18.733337,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1664445596,
      "ems": null
    },
    {
      "latitude": 51.905327,
      "longitude": 18.732161,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445599,
      "ems": null
    },
    {
      "latitude": 51.907001,
      "longitude": 18.728159,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664445605,
      "ems": null
    },
    {
      "latitude": 51.907562,
      "longitude": 18.726196,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664445608,
      "ems": null
    },
    {
      "latitude": 51.908157,
      "longitude": 18.724136,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664445611,
      "ems": null
    },
    {
      "latitude": 51.908817,
      "longitude": 18.722116,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664445614,
      "ems": null
    },
    {
      "latitude": 51.909485,
      "longitude": 18.720093,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445617,
      "ems": null
    },
    {
      "latitude": 51.910076,
      "longitude": 18.718271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445620,
      "ems": null
    },
    {
      "latitude": 51.91082,
      "longitude": 18.71623,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445623,
      "ems": null
    },
    {
      "latitude": 51.911518,
      "longitude": 18.714504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664445626,
      "ems": null
    },
    {
      "latitude": 51.912449,
      "longitude": 18.712698,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664445629,
      "ems": null
    },
    {
      "latitude": 51.91338,
      "longitude": 18.71113,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664445632,
      "ems": null
    },
    {
      "latitude": 51.91431,
      "longitude": 18.709639,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445635,
      "ems": null
    },
    {
      "latitude": 51.915474,
      "longitude": 18.707912,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445638,
      "ems": null
    },
    {
      "latitude": 51.916546,
      "longitude": 18.706343,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445641,
      "ems": null
    },
    {
      "latitude": 51.917679,
      "longitude": 18.704681,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445644,
      "ems": null
    },
    {
      "latitude": 51.918827,
      "longitude": 18.703047,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445647,
      "ems": null
    },
    {
      "latitude": 51.919895,
      "longitude": 18.701477,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445650,
      "ems": null
    },
    {
      "latitude": 51.920563,
      "longitude": 18.700409,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445652,
      "ems": null
    },
    {
      "latitude": 51.921982,
      "longitude": 18.698196,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445656,
      "ems": null
    },
    {
      "latitude": 51.92308,
      "longitude": 18.696594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445659,
      "ems": null
    },
    {
      "latitude": 51.925186,
      "longitude": 18.693542,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445665,
      "ems": null
    },
    {
      "latitude": 51.927338,
      "longitude": 18.690567,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445671,
      "ems": null
    },
    {
      "latitude": 51.929718,
      "longitude": 18.687515,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445677,
      "ems": null
    },
    {
      "latitude": 51.931778,
      "longitude": 18.684769,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664445683,
      "ems": null
    },
    {
      "latitude": 51.93306,
      "longitude": 18.683167,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664445686,
      "ems": null
    },
    {
      "latitude": 51.93428,
      "longitude": 18.681702,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664445689,
      "ems": null
    },
    {
      "latitude": 51.935493,
      "longitude": 18.68021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664445693,
      "ems": null
    },
    {
      "latitude": 51.936611,
      "longitude": 18.678877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664445695,
      "ems": null
    },
    {
      "latitude": 51.937912,
      "longitude": 18.677385,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664445698,
      "ems": null
    },
    {
      "latitude": 51.939011,
      "longitude": 18.676224,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664445701,
      "ems": null
    },
    {
      "latitude": 51.940063,
      "longitude": 18.675079,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664445704,
      "ems": null
    },
    {
      "latitude": 51.941589,
      "longitude": 18.673462,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664445707,
      "ems": null
    },
    {
      "latitude": 51.943871,
      "longitude": 18.670481,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445713,
      "ems": null
    },
    {
      "latitude": 51.944851,
      "longitude": 18.668989,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445716,
      "ems": null
    },
    {
      "latitude": 51.945873,
      "longitude": 18.667498,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445720,
      "ems": null
    },
    {
      "latitude": 51.946838,
      "longitude": 18.665848,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664445722,
      "ems": null
    },
    {
      "latitude": 51.947754,
      "longitude": 18.664322,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445725,
      "ems": null
    },
    {
      "latitude": 51.948669,
      "longitude": 18.66272,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445728,
      "ems": null
    },
    {
      "latitude": 51.949596,
      "longitude": 18.661142,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445732,
      "ems": null
    },
    {
      "latitude": 51.950481,
      "longitude": 18.659573,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664445734,
      "ems": null
    },
    {
      "latitude": 51.951508,
      "longitude": 18.657837,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664445738,
      "ems": null
    },
    {
      "latitude": 51.952332,
      "longitude": 18.65654,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664445741,
      "ems": null
    },
    {
      "latitude": 51.954163,
      "longitude": 18.653412,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664445746,
      "ems": null
    },
    {
      "latitude": 51.955215,
      "longitude": 18.651428,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664445750,
      "ems": null
    },
    {
      "latitude": 51.956726,
      "longitude": 18.648605,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664445755,
      "ems": null
    },
    {
      "latitude": 51.958862,
      "longitude": 18.644819,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445761,
      "ems": null
    },
    {
      "latitude": 51.960815,
      "longitude": 18.641602,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664445767,
      "ems": null
    },
    {
      "latitude": 51.96286,
      "longitude": 18.638382,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664445774,
      "ems": null
    },
    {
      "latitude": 51.964005,
      "longitude": 18.63678,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445777,
      "ems": null
    },
    {
      "latitude": 51.964966,
      "longitude": 18.63533,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664445780,
      "ems": null
    },
    {
      "latitude": 51.965984,
      "longitude": 18.633833,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664445783,
      "ems": null
    },
    {
      "latitude": 51.967072,
      "longitude": 18.632278,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664445786,
      "ems": null
    },
    {
      "latitude": 51.968216,
      "longitude": 18.630753,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445789,
      "ems": null
    },
    {
      "latitude": 51.969177,
      "longitude": 18.629456,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445791,
      "ems": null
    },
    {
      "latitude": 51.970406,
      "longitude": 18.627869,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445795,
      "ems": null
    },
    {
      "latitude": 51.97261,
      "longitude": 18.624954,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664445801,
      "ems": null
    },
    {
      "latitude": 51.974625,
      "longitude": 18.621902,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664445807,
      "ems": null
    },
    {
      "latitude": 51.975586,
      "longitude": 18.620224,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664445810,
      "ems": null
    },
    {
      "latitude": 51.976551,
      "longitude": 18.618452,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664445813,
      "ems": null
    },
    {
      "latitude": 51.977482,
      "longitude": 18.616726,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664445816,
      "ems": null
    },
    {
      "latitude": 51.978367,
      "longitude": 18.61492,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664445819,
      "ems": null
    },
    {
      "latitude": 51.979294,
      "longitude": 18.613052,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664445822,
      "ems": null
    },
    {
      "latitude": 51.980087,
      "longitude": 18.611311,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664445825,
      "ems": null
    },
    {
      "latitude": 51.980896,
      "longitude": 18.60939,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664445828,
      "ems": null
    },
    {
      "latitude": 51.98172,
      "longitude": 18.607559,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664445831,
      "ems": null
    },
    {
      "latitude": 51.982464,
      "longitude": 18.605974,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664445833,
      "ems": null
    },
    {
      "latitude": 51.983349,
      "longitude": 18.604092,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664445837,
      "ems": null
    },
    {
      "latitude": 51.984192,
      "longitude": 18.602295,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664445840,
      "ems": null
    },
    {
      "latitude": 51.985016,
      "longitude": 18.600464,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664445843,
      "ems": null
    },
    {
      "latitude": 51.985794,
      "longitude": 18.598633,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664445846,
      "ems": null
    },
    {
      "latitude": 51.986607,
      "longitude": 18.596714,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664445849,
      "ems": null
    },
    {
      "latitude": 51.987305,
      "longitude": 18.594894,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445852,
      "ems": null
    },
    {
      "latitude": 51.987854,
      "longitude": 18.592834,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664445855,
      "ems": null
    },
    {
      "latitude": 51.988377,
      "longitude": 18.59083,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664445858,
      "ems": null
    },
    {
      "latitude": 51.988907,
      "longitude": 18.588486,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664445861,
      "ems": null
    },
    {
      "latitude": 51.989365,
      "longitude": 18.586655,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664445864,
      "ems": null
    },
    {
      "latitude": 51.989819,
      "longitude": 18.584707,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664445867,
      "ems": null
    },
    {
      "latitude": 51.990372,
      "longitude": 18.582382,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664445870,
      "ems": null
    },
    {
      "latitude": 51.990875,
      "longitude": 18.579941,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664445873,
      "ems": null
    },
    {
      "latitude": 51.991287,
      "longitude": 18.577728,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664445876,
      "ems": null
    },
    {
      "latitude": 51.991653,
      "longitude": 18.575516,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664445879,
      "ems": null
    },
    {
      "latitude": 51.991928,
      "longitude": 18.573608,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664445882,
      "ems": null
    },
    {
      "latitude": 51.992332,
      "longitude": 18.571054,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664445885,
      "ems": null
    },
    {
      "latitude": 51.992661,
      "longitude": 18.568954,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664445888,
      "ems": null
    },
    {
      "latitude": 51.993576,
      "longitude": 18.564682,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664445894,
      "ems": null
    },
    {
      "latitude": 51.994492,
      "longitude": 18.560867,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664445900,
      "ems": null
    },
    {
      "latitude": 51.995453,
      "longitude": 18.556692,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664445906,
      "ems": null
    },
    {
      "latitude": 51.996288,
      "longitude": 18.552612,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664445912,
      "ems": null
    },
    {
      "latitude": 51.996735,
      "longitude": 18.550644,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664445915,
      "ems": null
    },
    {
      "latitude": 51.997219,
      "longitude": 18.548689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664445918,
      "ems": null
    },
    {
      "latitude": 51.997734,
      "longitude": 18.546726,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664445921,
      "ems": null
    },
    {
      "latitude": 51.998802,
      "longitude": 18.542881,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664445927,
      "ems": null
    },
    {
      "latitude": 51.999985,
      "longitude": 18.538818,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664445933,
      "ems": null
    },
    {
      "latitude": 52.000946,
      "longitude": 18.535112,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664445939,
      "ems": null
    },
    {
      "latitude": 52.00177,
      "longitude": 18.531265,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664445945,
      "ems": null
    },
    {
      "latitude": 52.00296,
      "longitude": 18.527603,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664445951,
      "ems": null
    },
    {
      "latitude": 52.00383,
      "longitude": 18.525461,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664445955,
      "ems": null
    },
    {
      "latitude": 52.004471,
      "longitude": 18.523788,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664445957,
      "ems": null
    },
    {
      "latitude": 52.005226,
      "longitude": 18.521694,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445961,
      "ems": null
    },
    {
      "latitude": 52.006439,
      "longitude": 18.517609,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664445967,
      "ems": null
    },
    {
      "latitude": 52.007034,
      "longitude": 18.515625,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664445970,
      "ems": null
    },
    {
      "latitude": 52.008068,
      "longitude": 18.512197,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664445975,
      "ems": null
    },
    {
      "latitude": 52.009418,
      "longitude": 18.508196,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445982,
      "ems": null
    },
    {
      "latitude": 52.00993,
      "longitude": 18.506704,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664445984,
      "ems": null
    },
    {
      "latitude": 52.011467,
      "longitude": 18.502468,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664445991,
      "ems": null
    },
    {
      "latitude": 52.012115,
      "longitude": 18.500584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664445994,
      "ems": null
    },
    {
      "latitude": 52.012711,
      "longitude": 18.499069,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664445996,
      "ems": null
    },
    {
      "latitude": 52.013535,
      "longitude": 18.496933,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446000,
      "ems": null
    },
    {
      "latitude": 52.014084,
      "longitude": 18.495636,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446002,
      "ems": null
    },
    {
      "latitude": 52.014862,
      "longitude": 18.493805,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446005,
      "ems": null
    },
    {
      "latitude": 52.015327,
      "longitude": 18.492737,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446007,
      "ems": null
    },
    {
      "latitude": 52.016445,
      "longitude": 18.490305,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664446011,
      "ems": null
    },
    {
      "latitude": 52.017239,
      "longitude": 18.488577,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664446014,
      "ems": null
    },
    {
      "latitude": 52.017982,
      "longitude": 18.486851,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446017,
      "ems": null
    },
    {
      "latitude": 52.018753,
      "longitude": 18.485031,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446020,
      "ems": null
    },
    {
      "latitude": 52.01952,
      "longitude": 18.483398,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446023,
      "ems": null
    },
    {
      "latitude": 52.021133,
      "longitude": 18.479462,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446029,
      "ems": null
    },
    {
      "latitude": 52.022591,
      "longitude": 18.475393,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446035,
      "ems": null
    },
    {
      "latitude": 52.024128,
      "longitude": 18.471392,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446041,
      "ems": null
    },
    {
      "latitude": 52.025898,
      "longitude": 18.467312,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446047,
      "ems": null
    },
    {
      "latitude": 52.027542,
      "longitude": 18.46344,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446053,
      "ems": null
    },
    {
      "latitude": 52.029156,
      "longitude": 18.459463,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446060,
      "ems": null
    },
    {
      "latitude": 52.030563,
      "longitude": 18.455582,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446065,
      "ems": null
    },
    {
      "latitude": 52.031158,
      "longitude": 18.453674,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446068,
      "ems": null
    },
    {
      "latitude": 52.031857,
      "longitude": 18.45146,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446072,
      "ems": null
    },
    {
      "latitude": 52.033531,
      "longitude": 18.447927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664446078,
      "ems": null
    },
    {
      "latitude": 52.034603,
      "longitude": 18.44628,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664446081,
      "ems": null
    },
    {
      "latitude": 52.035671,
      "longitude": 18.444868,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664446084,
      "ems": null
    },
    {
      "latitude": 52.036602,
      "longitude": 18.443455,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664446086,
      "ems": null
    },
    {
      "latitude": 52.037533,
      "longitude": 18.441807,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664446090,
      "ems": null
    },
    {
      "latitude": 52.038391,
      "longitude": 18.44017,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664446093,
      "ems": null
    },
    {
      "latitude": 52.039215,
      "longitude": 18.438568,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664446096,
      "ems": null
    },
    {
      "latitude": 52.040039,
      "longitude": 18.437119,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664446098,
      "ems": null
    },
    {
      "latitude": 52.040932,
      "longitude": 18.435373,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664446102,
      "ems": null
    },
    {
      "latitude": 52.042469,
      "longitude": 18.431763,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446108,
      "ems": null
    },
    {
      "latitude": 52.043106,
      "longitude": 18.429947,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446111,
      "ems": null
    },
    {
      "latitude": 52.043747,
      "longitude": 18.428268,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446113,
      "ems": null
    },
    {
      "latitude": 52.044388,
      "longitude": 18.426285,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446117,
      "ems": null
    },
    {
      "latitude": 52.044891,
      "longitude": 18.424465,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446120,
      "ems": null
    },
    {
      "latitude": 52.045357,
      "longitude": 18.422503,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446123,
      "ems": null
    },
    {
      "latitude": 52.045773,
      "longitude": 18.420698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446125,
      "ems": null
    },
    {
      "latitude": 52.046288,
      "longitude": 18.418736,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446129,
      "ems": null
    },
    {
      "latitude": 52.04689,
      "longitude": 18.416697,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446132,
      "ems": null
    },
    {
      "latitude": 52.047501,
      "longitude": 18.414917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446135,
      "ems": null
    },
    {
      "latitude": 52.049126,
      "longitude": 18.41136,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664446141,
      "ems": null
    },
    {
      "latitude": 52.049973,
      "longitude": 18.410034,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664446144,
      "ems": null
    },
    {
      "latitude": 52.050888,
      "longitude": 18.408432,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664446147,
      "ems": null
    },
    {
      "latitude": 52.051315,
      "longitude": 18.407436,
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
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664446149,
      "ems": null
    },
    {
      "latitude": 52.051575,
      "longitude": 18.406677,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446150,
      "ems": null
    },
    {
      "latitude": 52.052433,
      "longitude": 18.404219,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446155,
      "ems": null
    },
    {
      "latitude": 52.053589,
      "longitude": 18.400421,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664446162,
      "ems": null
    },
    {
      "latitude": 52.054138,
      "longitude": 18.39859,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446165,
      "ems": null
    },
    {
      "latitude": 52.054642,
      "longitude": 18.396759,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446168,
      "ems": null
    },
    {
      "latitude": 52.055145,
      "longitude": 18.394775,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664446171,
      "ems": null
    },
    {
      "latitude": 52.055603,
      "longitude": 18.392868,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664446174,
      "ems": null
    },
    {
      "latitude": 52.056107,
      "longitude": 18.391037,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446177,
      "ems": null
    },
    {
      "latitude": 52.05661,
      "longitude": 18.38913,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446180,
      "ems": null
    },
    {
      "latitude": 52.057224,
      "longitude": 18.387424,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446183,
      "ems": null
    },
    {
      "latitude": 52.058064,
      "longitude": 18.386013,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664446186,
      "ems": null
    },
    {
      "latitude": 52.05904,
      "longitude": 18.384207,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664446189,
      "ems": null
    },
    {
      "latitude": 52.05986,
      "longitude": 18.382492,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446192,
      "ems": null
    },
    {
      "latitude": 52.060719,
      "longitude": 18.378635,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664446198,
      "ems": null
    },
    {
      "latitude": 52.060577,
      "longitude": 18.376831,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1664446201,
      "ems": null
    },
    {
      "latitude": 52.060135,
      "longitude": 18.375092,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664446204,
      "ems": null
    },
    {
      "latitude": 52.05946,
      "longitude": 18.373535,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664446207,
      "ems": null
    },
    {
      "latitude": 52.058437,
      "longitude": 18.372202,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664446210,
      "ems": null
    },
    {
      "latitude": 52.057274,
      "longitude": 18.371338,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664446213,
      "ems": null
    },
    {
      "latitude": 52.05611,
      "longitude": 18.370554,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664446216,
      "ems": null
    },
    {
      "latitude": 52.054871,
      "longitude": 18.369675,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1664446219,
      "ems": null
    },
    {
      "latitude": 52.053829,
      "longitude": 18.36867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664446222,
      "ems": null
    },
    {
      "latitude": 52.052803,
      "longitude": 18.367414,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664446225,
      "ems": null
    },
    {
      "latitude": 52.051731,
      "longitude": 18.366001,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664446228,
      "ems": null
    },
    {
      "latitude": 52.050797,
      "longitude": 18.365021,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664446231,
      "ems": null
    },
    {
      "latitude": 52.0495,
      "longitude": 18.364197,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664446234,
      "ems": null
    },
    {
      "latitude": 52.048336,
      "longitude": 18.363333,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664446237,
      "ems": null
    },
    {
      "latitude": 52.047501,
      "longitude": 18.361893,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1664446240,
      "ems": null
    },
    {
      "latitude": 52.047218,
      "longitude": 18.360037,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664446243,
      "ems": null
    },
    {
      "latitude": 52.047405,
      "longitude": 18.358232,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664446246,
      "ems": null
    },
    {
      "latitude": 52.047821,
      "longitude": 18.356171,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446249,
      "ems": null
    },
    {
      "latitude": 52.048325,
      "longitude": 18.354263,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446252,
      "ems": null
    },
    {
      "latitude": 52.048847,
      "longitude": 18.352427,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446255,
      "ems": null
    },
    {
      "latitude": 52.049561,
      "longitude": 18.350372,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446258,
      "ems": null
    },
    {
      "latitude": 52.050201,
      "longitude": 18.34877,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446261,
      "ems": null
    },
    {
      "latitude": 52.050987,
      "longitude": 18.346853,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446264,
      "ems": null
    },
    {
      "latitude": 52.051666,
      "longitude": 18.345108,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446267,
      "ems": null
    },
    {
      "latitude": 52.052444,
      "longitude": 18.343124,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446270,
      "ems": null
    },
    {
      "latitude": 52.053177,
      "longitude": 18.341204,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446273,
      "ems": null
    },
    {
      "latitude": 52.053875,
      "longitude": 18.339399,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446276,
      "ems": null
    },
    {
      "latitude": 52.05455,
      "longitude": 18.337479,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446279,
      "ems": null
    },
    {
      "latitude": 52.055237,
      "longitude": 18.335648,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446282,
      "ems": null
    },
    {
      "latitude": 52.056656,
      "longitude": 18.33168,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446288,
      "ems": null
    },
    {
      "latitude": 52.058159,
      "longitude": 18.327942,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446294,
      "ems": null
    },
    {
      "latitude": 52.058762,
      "longitude": 18.325958,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446297,
      "ems": null
    },
    {
      "latitude": 52.060207,
      "longitude": 18.321978,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446303,
      "ems": null
    },
    {
      "latitude": 52.061691,
      "longitude": 18.318405,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446309,
      "ems": null
    },
    {
      "latitude": 52.062393,
      "longitude": 18.316641,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446312,
      "ems": null
    },
    {
      "latitude": 52.063976,
      "longitude": 18.313032,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446318,
      "ems": null
    },
    {
      "latitude": 52.065372,
      "longitude": 18.309187,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446324,
      "ems": null
    },
    {
      "latitude": 52.066956,
      "longitude": 18.305206,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446330,
      "ems": null
    },
    {
      "latitude": 52.068493,
      "longitude": 18.301418,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446336,
      "ems": null
    },
    {
      "latitude": 52.069931,
      "longitude": 18.297882,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446342,
      "ems": null
    },
    {
      "latitude": 52.071518,
      "longitude": 18.294041,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446348,
      "ems": null
    },
    {
      "latitude": 52.073181,
      "longitude": 18.2901,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446355,
      "ems": null
    },
    {
      "latitude": 52.074497,
      "longitude": 18.286587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446360,
      "ems": null
    },
    {
      "latitude": 52.075974,
      "longitude": 18.2827,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446366,
      "ems": null
    },
    {
      "latitude": 52.07753,
      "longitude": 18.278732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446372,
      "ems": null
    },
    {
      "latitude": 52.079041,
      "longitude": 18.274918,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446378,
      "ems": null
    },
    {
      "latitude": 52.080505,
      "longitude": 18.270798,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446385,
      "ems": null
    },
    {
      "latitude": 52.081833,
      "longitude": 18.26683,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446391,
      "ems": null
    },
    {
      "latitude": 52.083298,
      "longitude": 18.262939,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446397,
      "ems": null
    },
    {
      "latitude": 52.084854,
      "longitude": 18.259277,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446402,
      "ems": null
    },
    {
      "latitude": 52.086506,
      "longitude": 18.255432,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446409,
      "ems": null
    },
    {
      "latitude": 52.088058,
      "longitude": 18.251495,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446415,
      "ems": null
    },
    {
      "latitude": 52.089569,
      "longitude": 18.247757,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446420,
      "ems": null
    },
    {
      "latitude": 52.091118,
      "longitude": 18.243582,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446427,
      "ems": null
    },
    {
      "latitude": 52.091858,
      "longitude": 18.241501,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446430,
      "ems": null
    },
    {
      "latitude": 52.092464,
      "longitude": 18.239737,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446432,
      "ems": null
    },
    {
      "latitude": 52.093166,
      "longitude": 18.237698,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446436,
      "ems": null
    },
    {
      "latitude": 52.094559,
      "longitude": 18.233795,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446442,
      "ems": null
    },
    {
      "latitude": 52.095913,
      "longitude": 18.230085,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446448,
      "ems": null
    },
    {
      "latitude": 52.097397,
      "longitude": 18.226242,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446454,
      "ems": null
    },
    {
      "latitude": 52.098724,
      "longitude": 18.222809,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446460,
      "ems": null
    },
    {
      "latitude": 52.100193,
      "longitude": 18.218706,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446466,
      "ems": null
    },
    {
      "latitude": 52.101517,
      "longitude": 18.214951,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446472,
      "ems": null
    },
    {
      "latitude": 52.103073,
      "longitude": 18.211212,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446478,
      "ems": null
    },
    {
      "latitude": 52.103851,
      "longitude": 18.209457,
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
      "squawk": "7000",
      "timestamp": 1664446481,
      "ems": null
    },
    {
      "latitude": 52.105267,
      "longitude": 18.205994,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446487,
      "ems": null
    },
    {
      "latitude": 52.106461,
      "longitude": 18.202591,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446492,
      "ems": null
    },
    {
      "latitude": 52.107922,
      "longitude": 18.198538,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446499,
      "ems": null
    },
    {
      "latitude": 52.109272,
      "longitude": 18.194851,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446505,
      "ems": null
    },
    {
      "latitude": 52.109879,
      "longitude": 18.193125,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446508,
      "ems": null
    },
    {
      "latitude": 52.110527,
      "longitude": 18.191397,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446511,
      "ems": null
    },
    {
      "latitude": 52.110992,
      "longitude": 18.189592,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664446514,
      "ems": null
    },
    {
      "latitude": 52.11132,
      "longitude": 18.187866,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664446517,
      "ems": null
    },
    {
      "latitude": 52.111645,
      "longitude": 18.185984,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664446520,
      "ems": null
    },
    {
      "latitude": 52.112019,
      "longitude": 18.183865,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664446523,
      "ems": null
    },
    {
      "latitude": 52.112366,
      "longitude": 18.182297,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664446526,
      "ems": null
    },
    {
      "latitude": 52.112778,
      "longitude": 18.180161,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664446529,
      "ems": null
    },
    {
      "latitude": 52.113228,
      "longitude": 18.178135,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446532,
      "ems": null
    },
    {
      "latitude": 52.113647,
      "longitude": 18.176346,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446535,
      "ems": null
    },
    {
      "latitude": 52.114113,
      "longitude": 18.174526,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446538,
      "ems": null
    },
    {
      "latitude": 52.115387,
      "longitude": 18.171005,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446544,
      "ems": null
    },
    {
      "latitude": 52.11607,
      "longitude": 18.169424,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446547,
      "ems": null
    },
    {
      "latitude": 52.116806,
      "longitude": 18.167725,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446550,
      "ems": null
    },
    {
      "latitude": 52.117447,
      "longitude": 18.166275,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446553,
      "ems": null
    },
    {
      "latitude": 52.118256,
      "longitude": 18.16448,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446556,
      "ems": null
    },
    {
      "latitude": 52.118908,
      "longitude": 18.162832,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446559,
      "ems": null
    },
    {
      "latitude": 52.119278,
      "longitude": 18.162003,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446560,
      "ems": null
    },
    {
      "latitude": 52.120331,
      "longitude": 18.159332,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446565,
      "ems": null
    },
    {
      "latitude": 52.121796,
      "longitude": 18.155746,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446571,
      "ems": null
    },
    {
      "latitude": 52.12347,
      "longitude": 18.151533,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446579,
      "ems": null
    },
    {
      "latitude": 52.124496,
      "longitude": 18.148651,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446583,
      "ems": null
    },
    {
      "latitude": 52.125092,
      "longitude": 18.146973,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446586,
      "ems": null
    },
    {
      "latitude": 52.126404,
      "longitude": 18.14345,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446592,
      "ems": null
    },
    {
      "latitude": 52.12793,
      "longitude": 18.139954,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446598,
      "ems": null
    },
    {
      "latitude": 52.129288,
      "longitude": 18.13678,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446604,
      "ems": null
    },
    {
      "latitude": 52.130081,
      "longitude": 18.135071,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446607,
      "ems": null
    },
    {
      "latitude": 52.130814,
      "longitude": 18.133316,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664446610,
      "ems": null
    },
    {
      "latitude": 52.132317,
      "longitude": 18.12956,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446616,
      "ems": null
    },
    {
      "latitude": 52.133663,
      "longitude": 18.126028,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446623,
      "ems": null
    },
    {
      "latitude": 52.13427,
      "longitude": 18.12438,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446625,
      "ems": null
    },
    {
      "latitude": 52.135529,
      "longitude": 18.121109,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446631,
      "ems": null
    },
    {
      "latitude": 52.136925,
      "longitude": 18.117554,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446637,
      "ems": null
    },
    {
      "latitude": 52.138275,
      "longitude": 18.113943,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446644,
      "ems": null
    },
    {
      "latitude": 52.140137,
      "longitude": 18.108843,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446652,
      "ems": null
    },
    {
      "latitude": 52.141571,
      "longitude": 18.104935,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446658,
      "ems": null
    },
    {
      "latitude": 52.143162,
      "longitude": 18.100368,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446665,
      "ems": null
    },
    {
      "latitude": 52.144867,
      "longitude": 18.095169,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446673,
      "ems": null
    },
    {
      "latitude": 52.145966,
      "longitude": 18.091888,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446679,
      "ems": null
    },
    {
      "latitude": 52.147797,
      "longitude": 18.088608,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664446686,
      "ems": null
    },
    {
      "latitude": 52.148804,
      "longitude": 18.087463,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664446688,
      "ems": null
    },
    {
      "latitude": 52.150269,
      "longitude": 18.085785,
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
        "fpm": -2560,
        "ms": -13
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664446692,
      "ems": null
    },
    {
      "latitude": 52.151321,
      "longitude": 18.084564,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -4224,
        "ms": -21.5
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664446694,
      "ems": null
    },
    {
      "latitude": 52.152473,
      "longitude": 18.082554,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -2688,
        "ms": -13.7
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664446697,
      "ems": null
    },
    {
      "latitude": 52.153542,
      "longitude": 18.0802,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664446700,
      "ems": null
    },
    {
      "latitude": 52.154472,
      "longitude": 18.077925,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446703,
      "ems": null
    },
    {
      "latitude": 52.155266,
      "longitude": 18.075335,
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
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664446707,
      "ems": null
    },
    {
      "latitude": 52.155823,
      "longitude": 18.072903,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664446710,
      "ems": null
    },
    {
      "latitude": 52.156403,
      "longitude": 18.070755,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664446713,
      "ems": null
    },
    {
      "latitude": 52.157089,
      "longitude": 18.068466,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446715,
      "ems": null
    },
    {
      "latitude": 52.157871,
      "longitude": 18.066389,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446718,
      "ems": null
    },
    {
      "latitude": 52.158802,
      "longitude": 18.064035,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446722,
      "ems": null
    },
    {
      "latitude": 52.159595,
      "longitude": 18.061916,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446725,
      "ems": null
    },
    {
      "latitude": 52.160339,
      "longitude": 18.059875,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446728,
      "ems": null
    },
    {
      "latitude": 52.161942,
      "longitude": 18.055573,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446734,
      "ems": null
    },
    {
      "latitude": 52.162674,
      "longitude": 18.053513,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446736,
      "ems": null
    },
    {
      "latitude": 52.16346,
      "longitude": 18.051243,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446740,
      "ems": null
    },
    {
      "latitude": 52.164249,
      "longitude": 18.049124,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446743,
      "ems": null
    },
    {
      "latitude": 52.165741,
      "longitude": 18.044815,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446749,
      "ems": null
    },
    {
      "latitude": 52.166519,
      "longitude": 18.042526,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446752,
      "ems": null
    },
    {
      "latitude": 52.167847,
      "longitude": 18.038483,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446758,
      "ems": null
    },
    {
      "latitude": 52.169037,
      "longitude": 18.034744,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446763,
      "ems": null
    },
    {
      "latitude": 52.170208,
      "longitude": 18.030684,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446770,
      "ems": null
    },
    {
      "latitude": 52.171417,
      "longitude": 18.026886,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664446775,
      "ems": null
    },
    {
      "latitude": 52.172882,
      "longitude": 18.022919,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446782,
      "ems": null
    },
    {
      "latitude": 52.174259,
      "longitude": 18.019148,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446788,
      "ems": null
    },
    {
      "latitude": 52.175674,
      "longitude": 18.015442,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446794,
      "ems": null
    },
    {
      "latitude": 52.176453,
      "longitude": 18.013229,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446797,
      "ems": null
    },
    {
      "latitude": 52.17778,
      "longitude": 18.009644,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446803,
      "ems": null
    },
    {
      "latitude": 52.179245,
      "longitude": 18.0056,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446809,
      "ems": null
    },
    {
      "latitude": 52.180729,
      "longitude": 18.001804,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664446815,
      "ems": null
    },
    {
      "latitude": 52.182037,
      "longitude": 17.998505,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446821,
      "ems": null
    },
    {
      "latitude": 52.183617,
      "longitude": 17.994429,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446827,
      "ems": null
    },
    {
      "latitude": 52.184917,
      "longitude": 17.990976,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446833,
      "ems": null
    },
    {
      "latitude": 52.186249,
      "longitude": 17.987061,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446839,
      "ems": null
    },
    {
      "latitude": 52.186874,
      "longitude": 17.984854,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446842,
      "ems": null
    },
    {
      "latitude": 52.187347,
      "longitude": 17.983246,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446845,
      "ems": null
    },
    {
      "latitude": 52.187943,
      "longitude": 17.981262,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446848,
      "ems": null
    },
    {
      "latitude": 52.188644,
      "longitude": 17.979048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664446851,
      "ems": null
    },
    {
      "latitude": 52.190132,
      "longitude": 17.974966,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446857,
      "ems": null
    },
    {
      "latitude": 52.191483,
      "longitude": 17.971043,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446863,
      "ems": null
    },
    {
      "latitude": 52.192886,
      "longitude": 17.967148,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446869,
      "ems": null
    },
    {
      "latitude": 52.193619,
      "longitude": 17.965088,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446872,
      "ems": null
    },
    {
      "latitude": 52.194927,
      "longitude": 17.961155,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446878,
      "ems": null
    },
    {
      "latitude": 52.196228,
      "longitude": 17.95723,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446884,
      "ems": null
    },
    {
      "latitude": 52.197693,
      "longitude": 17.952957,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446890,
      "ems": null
    },
    {
      "latitude": 52.19907,
      "longitude": 17.949306,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446896,
      "ems": null
    },
    {
      "latitude": 52.200516,
      "longitude": 17.945618,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446902,
      "ems": null
    },
    {
      "latitude": 52.201912,
      "longitude": 17.942007,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446908,
      "ems": null
    },
    {
      "latitude": 52.203232,
      "longitude": 17.938614,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446914,
      "ems": null
    },
    {
      "latitude": 52.204239,
      "longitude": 17.936096,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664446919,
      "ems": null
    },
    {
      "latitude": 52.205822,
      "longitude": 17.931807,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446926,
      "ems": null
    },
    {
      "latitude": 52.207123,
      "longitude": 17.928196,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446932,
      "ems": null
    },
    {
      "latitude": 52.208405,
      "longitude": 17.924881,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664446938,
      "ems": null
    },
    {
      "latitude": 52.209915,
      "longitude": 17.920761,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446944,
      "ems": null
    },
    {
      "latitude": 52.211315,
      "longitude": 17.916739,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446951,
      "ems": null
    },
    {
      "latitude": 52.212662,
      "longitude": 17.913055,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446956,
      "ems": null
    },
    {
      "latitude": 52.213875,
      "longitude": 17.909597,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664446962,
      "ems": null
    },
    {
      "latitude": 52.215225,
      "longitude": 17.905579,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664446969,
      "ems": null
    },
    {
      "latitude": 52.21637,
      "longitude": 17.901917,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664446974,
      "ems": null
    },
    {
      "latitude": 52.216873,
      "longitude": 17.900162,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664446977,
      "ems": null
    },
    {
      "latitude": 52.217468,
      "longitude": 17.898102,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446981,
      "ems": null
    },
    {
      "latitude": 52.217972,
      "longitude": 17.896347,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664446984,
      "ems": null
    },
    {
      "latitude": 52.218475,
      "longitude": 17.894363,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664446986,
      "ems": null
    },
    {
      "latitude": 52.218857,
      "longitude": 17.892883,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664446989,
      "ems": null
    },
    {
      "latitude": 52.219437,
      "longitude": 17.89032,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664446993,
      "ems": null
    },
    {
      "latitude": 52.219894,
      "longitude": 17.888336,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664446996,
      "ems": null
    },
    {
      "latitude": 52.22039,
      "longitude": 17.88637,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664446999,
      "ems": null
    },
    {
      "latitude": 52.220901,
      "longitude": 17.884293,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447002,
      "ems": null
    },
    {
      "latitude": 52.221275,
      "longitude": 17.882524,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447004,
      "ems": null
    },
    {
      "latitude": 52.221836,
      "longitude": 17.880014,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447008,
      "ems": null
    },
    {
      "latitude": 52.222813,
      "longitude": 17.875933,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447014,
      "ems": null
    },
    {
      "latitude": 52.22374,
      "longitude": 17.872162,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447020,
      "ems": null
    },
    {
      "latitude": 52.224861,
      "longitude": 17.867615,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447026,
      "ems": null
    },
    {
      "latitude": 52.225933,
      "longitude": 17.863535,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447032,
      "ems": null
    },
    {
      "latitude": 52.22691,
      "longitude": 17.859846,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447037,
      "ems": null
    },
    {
      "latitude": 52.228134,
      "longitude": 17.855682,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447044,
      "ems": null
    },
    {
      "latitude": 52.228683,
      "longitude": 17.853851,
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
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664447047,
      "ems": null
    },
    {
      "latitude": 52.229279,
      "longitude": 17.852173,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664447050,
      "ems": null
    },
    {
      "latitude": 52.230122,
      "longitude": 17.849722,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664447053,
      "ems": null
    },
    {
      "latitude": 52.230911,
      "longitude": 17.847525,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447056,
      "ems": null
    },
    {
      "latitude": 52.231609,
      "longitude": 17.845564,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447059,
      "ems": null
    },
    {
      "latitude": 52.232391,
      "longitude": 17.843628,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447061,
      "ems": null
    },
    {
      "latitude": 52.23317,
      "longitude": 17.841644,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664447064,
      "ems": null
    },
    {
      "latitude": 52.234032,
      "longitude": 17.8396,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664447067,
      "ems": null
    },
    {
      "latitude": 52.234818,
      "longitude": 17.837524,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664447071,
      "ems": null
    },
    {
      "latitude": 52.235504,
      "longitude": 17.835922,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664447074,
      "ems": null
    },
    {
      "latitude": 52.236511,
      "longitude": 17.833481,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664447077,
      "ems": null
    },
    {
      "latitude": 52.237289,
      "longitude": 17.831753,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664447080,
      "ems": null
    },
    {
      "latitude": 52.238846,
      "longitude": 17.827835,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664447085,
      "ems": null
    },
    {
      "latitude": 52.240456,
      "longitude": 17.823591,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447092,
      "ems": null
    },
    {
      "latitude": 52.241821,
      "longitude": 17.819977,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664447098,
      "ems": null
    },
    {
      "latitude": 52.243156,
      "longitude": 17.816763,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664447104,
      "ems": null
    },
    {
      "latitude": 52.244877,
      "longitude": 17.812449,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664447110,
      "ems": null
    },
    {
      "latitude": 52.246307,
      "longitude": 17.808914,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664447116,
      "ems": null
    },
    {
      "latitude": 52.247765,
      "longitude": 17.80562,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664447121,
      "ems": null
    },
    {
      "latitude": 52.248642,
      "longitude": 17.803726,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664447125,
      "ems": null
    },
    {
      "latitude": 52.250278,
      "longitude": 17.800283,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447131,
      "ems": null
    },
    {
      "latitude": 52.251022,
      "longitude": 17.798767,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664447134,
      "ems": null
    },
    {
      "latitude": 52.252625,
      "longitude": 17.795258,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664447140,
      "ems": null
    },
    {
      "latitude": 52.254135,
      "longitude": 17.791748,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664447146,
      "ems": null
    },
    {
      "latitude": 52.255234,
      "longitude": 17.789001,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664447152,
      "ems": null
    },
    {
      "latitude": 52.256149,
      "longitude": 17.78656,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447155,
      "ems": null
    },
    {
      "latitude": 52.25679,
      "longitude": 17.784882,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447158,
      "ems": null
    },
    {
      "latitude": 52.257214,
      "longitude": 17.783726,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447160,
      "ems": null
    },
    {
      "latitude": 52.257431,
      "longitude": 17.783127,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447164,
      "ems": null
    },
    {
      "latitude": 52.25853,
      "longitude": 17.779694,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447167,
      "ems": null
    },
    {
      "latitude": 52.259033,
      "longitude": 17.777939,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447170,
      "ems": null
    },
    {
      "latitude": 52.259262,
      "longitude": 17.7771,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447172,
      "ems": null
    },
    {
      "latitude": 52.260056,
      "longitude": 17.774387,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447176,
      "ems": null
    },
    {
      "latitude": 52.260521,
      "longitude": 17.772739,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447179,
      "ems": null
    },
    {
      "latitude": 52.26173,
      "longitude": 17.768738,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447185,
      "ems": null
    },
    {
      "latitude": 52.262287,
      "longitude": 17.766697,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447188,
      "ems": null
    },
    {
      "latitude": 52.262878,
      "longitude": 17.764511,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447191,
      "ems": null
    },
    {
      "latitude": 52.263966,
      "longitude": 17.760576,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447197,
      "ems": null
    },
    {
      "latitude": 52.264984,
      "longitude": 17.756882,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447203,
      "ems": null
    },
    {
      "latitude": 52.265991,
      "longitude": 17.752914,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447209,
      "ems": null
    },
    {
      "latitude": 52.266571,
      "longitude": 17.75061,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447212,
      "ems": null
    },
    {
      "latitude": 52.267456,
      "longitude": 17.746843,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447218,
      "ems": null
    },
    {
      "latitude": 52.268528,
      "longitude": 17.742605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447224,
      "ems": null
    },
    {
      "latitude": 52.26947,
      "longitude": 17.738876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447230,
      "ems": null
    },
    {
      "latitude": 52.270527,
      "longitude": 17.734602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447236,
      "ems": null
    },
    {
      "latitude": 52.271458,
      "longitude": 17.730913,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447242,
      "ems": null
    },
    {
      "latitude": 52.27211,
      "longitude": 17.728167,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447248,
      "ems": null
    },
    {
      "latitude": 52.273499,
      "longitude": 17.722778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447254,
      "ems": null
    },
    {
      "latitude": 52.274597,
      "longitude": 17.718658,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447260,
      "ems": null
    },
    {
      "latitude": 52.275833,
      "longitude": 17.713928,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447268,
      "ems": null
    },
    {
      "latitude": 52.277279,
      "longitude": 17.709019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447275,
      "ems": null
    },
    {
      "latitude": 52.278534,
      "longitude": 17.704926,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447281,
      "ems": null
    },
    {
      "latitude": 52.279221,
      "longitude": 17.702942,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664447284,
      "ems": null
    },
    {
      "latitude": 52.279861,
      "longitude": 17.701187,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447287,
      "ems": null
    },
    {
      "latitude": 52.28064,
      "longitude": 17.699127,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447290,
      "ems": null
    },
    {
      "latitude": 52.281235,
      "longitude": 17.697449,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447293,
      "ems": null
    },
    {
      "latitude": 52.282074,
      "longitude": 17.695129,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447296,
      "ems": null
    },
    {
      "latitude": 52.2827,
      "longitude": 17.693481,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447299,
      "ems": null
    },
    {
      "latitude": 52.283794,
      "longitude": 17.690186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664447304,
      "ems": null
    },
    {
      "latitude": 52.284897,
      "longitude": 17.687225,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447308,
      "ems": null
    },
    {
      "latitude": 52.286308,
      "longitude": 17.683279,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664447314,
      "ems": null
    },
    {
      "latitude": 52.287598,
      "longitude": 17.678986,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447320,
      "ems": null
    },
    {
      "latitude": 52.288124,
      "longitude": 17.677237,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447323,
      "ems": null
    },
    {
      "latitude": 52.2892,
      "longitude": 17.673645,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447329,
      "ems": null
    },
    {
      "latitude": 52.290344,
      "longitude": 17.669907,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "squawk": "7000",
      "timestamp": 1664447333,
      "ems": null
    },
    {
      "latitude": 52.291058,
      "longitude": 17.667507,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "squawk": "7000",
      "timestamp": 1664447337,
      "ems": null
    },
    {
      "latitude": 52.291443,
      "longitude": 17.666168,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447339,
      "ems": null
    },
    {
      "latitude": 52.292782,
      "longitude": 17.660994,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447346,
      "ems": null
    },
    {
      "latitude": 52.293274,
      "longitude": 17.658691,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664447350,
      "ems": null
    },
    {
      "latitude": 52.293758,
      "longitude": 17.656284,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664447353,
      "ems": null
    },
    {
      "latitude": 52.294052,
      "longitude": 17.654572,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447356,
      "ems": null
    },
    {
      "latitude": 52.294224,
      "longitude": 17.653538,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447358,
      "ems": null
    },
    {
      "latitude": 52.294456,
      "longitude": 17.652048,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447359,
      "ems": null
    },
    {
      "latitude": 52.295059,
      "longitude": 17.648697,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447364,
      "ems": null
    },
    {
      "latitude": 52.295563,
      "longitude": 17.645874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447368,
      "ems": null
    },
    {
      "latitude": 52.295746,
      "longitude": 17.644882,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664447370,
      "ems": null
    },
    {
      "latitude": 52.295944,
      "longitude": 17.643808,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664447371,
      "ems": null
    },
    {
      "latitude": 52.297249,
      "longitude": 17.637686,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447380,
      "ems": null
    },
    {
      "latitude": 52.297806,
      "longitude": 17.635651,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447383,
      "ems": null
    },
    {
      "latitude": 52.298367,
      "longitude": 17.633213,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447387,
      "ems": null
    },
    {
      "latitude": 52.299343,
      "longitude": 17.628819,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664447393,
      "ems": null
    },
    {
      "latitude": 52.300182,
      "longitude": 17.624817,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664447398,
      "ems": null
    },
    {
      "latitude": 52.301193,
      "longitude": 17.620621,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447405,
      "ems": null
    },
    {
      "latitude": 52.302155,
      "longitude": 17.616425,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447410,
      "ems": null
    },
    {
      "latitude": 52.30307,
      "longitude": 17.612654,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447416,
      "ems": null
    },
    {
      "latitude": 52.304417,
      "longitude": 17.606768,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664447425,
      "ems": null
    },
    {
      "latitude": 52.305359,
      "longitude": 17.602539,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447430,
      "ems": null
    },
    {
      "latitude": 52.306374,
      "longitude": 17.598135,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447437,
      "ems": null
    },
    {
      "latitude": 52.307446,
      "longitude": 17.593821,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447443,
      "ems": null
    },
    {
      "latitude": 52.308098,
      "longitude": 17.591309,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447449,
      "ems": null
    },
    {
      "latitude": 52.309353,
      "longitude": 17.586443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447455,
      "ems": null
    },
    {
      "latitude": 52.310349,
      "longitude": 17.582245,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447461,
      "ems": null
    },
    {
      "latitude": 52.311264,
      "longitude": 17.57843,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664447467,
      "ems": null
    },
    {
      "latitude": 52.31218,
      "longitude": 17.574921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447473,
      "ems": null
    },
    {
      "latitude": 52.313309,
      "longitude": 17.570749,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447479,
      "ems": null
    },
    {
      "latitude": 52.314426,
      "longitude": 17.566589,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447486,
      "ems": null
    },
    {
      "latitude": 52.31522,
      "longitude": 17.563608,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447490,
      "ems": null
    },
    {
      "latitude": 52.316429,
      "longitude": 17.558899,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447497,
      "ems": null
    },
    {
      "latitude": 52.317501,
      "longitude": 17.554819,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664447504,
      "ems": null
    },
    {
      "latitude": 52.318634,
      "longitude": 17.550659,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447509,
      "ems": null
    },
    {
      "latitude": 52.319874,
      "longitude": 17.546499,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447516,
      "ems": null
    },
    {
      "latitude": 52.321106,
      "longitude": 17.542114,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447522,
      "ems": null
    },
    {
      "latitude": 52.322247,
      "longitude": 17.536455,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447530,
      "ems": null
    },
    {
      "latitude": 52.322666,
      "longitude": 17.53418,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447533,
      "ems": null
    },
    {
      "latitude": 52.322994,
      "longitude": 17.532139,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447536,
      "ems": null
    },
    {
      "latitude": 52.323364,
      "longitude": 17.53002,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447539,
      "ems": null
    },
    {
      "latitude": 52.323669,
      "longitude": 17.527695,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664447543,
      "ems": null
    },
    {
      "latitude": 52.323879,
      "longitude": 17.526255,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664447545,
      "ems": null
    },
    {
      "latitude": 52.32399,
      "longitude": 17.525482,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664447546,
      "ems": null
    },
    {
      "latitude": 52.324356,
      "longitude": 17.522812,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664447550,
      "ems": null
    },
    {
      "latitude": 52.32481,
      "longitude": 17.519663,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664447554,
      "ems": null
    },
    {
      "latitude": 52.325043,
      "longitude": 17.518093,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664447556,
      "ems": null
    },
    {
      "latitude": 52.325741,
      "longitude": 17.513306,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664447564,
      "ems": null
    },
    {
      "latitude": 52.326324,
      "longitude": 17.509232,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664447569,
      "ems": null
    },
    {
      "latitude": 52.326717,
      "longitude": 17.50491,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664447575,
      "ems": null
    },
    {
      "latitude": 52.326828,
      "longitude": 17.503586,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664447579,
      "ems": null
    },
    {
      "latitude": 52.327377,
      "longitude": 17.498627,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664447585,
      "ems": null
    },
    {
      "latitude": 52.327972,
      "longitude": 17.494659,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664447590,
      "ems": null
    },
    {
      "latitude": 52.328659,
      "longitude": 17.49054,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447596,
      "ems": null
    },
    {
      "latitude": 52.329025,
      "longitude": 17.48848,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447599,
      "ems": null
    },
    {
      "latitude": 52.329391,
      "longitude": 17.48642,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447602,
      "ems": null
    },
    {
      "latitude": 52.329838,
      "longitude": 17.484348,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664447606,
      "ems": null
    },
    {
      "latitude": 52.330162,
      "longitude": 17.482779,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664447608,
      "ems": null
    },
    {
      "latitude": 52.330627,
      "longitude": 17.480347,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664447612,
      "ems": null
    },
    {
      "latitude": 52.33136,
      "longitude": 17.474518,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664447621,
      "ems": null
    },
    {
      "latitude": 52.331371,
      "longitude": 17.474148,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664447622,
      "ems": null
    },
    {
      "latitude": 52.331635,
      "longitude": 17.47139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664447627,
      "ems": null
    },
    {
      "latitude": 52.332722,
      "longitude": 17.463633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447637,
      "ems": null
    },
    {
      "latitude": 52.333885,
      "longitude": 17.458139,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447645,
      "ems": null
    },
    {
      "latitude": 52.333969,
      "longitude": 17.457809,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447647,
      "ems": null
    },
    {
      "latitude": 52.334518,
      "longitude": 17.454605,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447650,
      "ems": null
    },
    {
      "latitude": 52.334866,
      "longitude": 17.452488,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664447653,
      "ems": null
    },
    {
      "latitude": 52.335251,
      "longitude": 17.450333,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664447657,
      "ems": null
    },
    {
      "latitude": 52.335983,
      "longitude": 17.446442,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664447663,
      "ems": null
    },
    {
      "latitude": 52.337128,
      "longitude": 17.441101,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447672,
      "ems": null
    },
    {
      "latitude": 52.338043,
      "longitude": 17.43721,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447676,
      "ems": null
    },
    {
      "latitude": 52.338867,
      "longitude": 17.433624,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447681,
      "ems": null
    },
    {
      "latitude": 52.339008,
      "longitude": 17.432949,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664447682,
      "ems": null
    },
    {
      "latitude": 52.340286,
      "longitude": 17.426987,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664447690,
      "ems": null
    },
    {
      "latitude": 52.341385,
      "longitude": 17.422256,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664447697,
      "ems": null
    },
    {
      "latitude": 52.342636,
      "longitude": 17.417253,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447705,
      "ems": null
    },
    {
      "latitude": 52.344223,
      "longitude": 17.411041,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447714,
      "ems": null
    },
    {
      "latitude": 52.344685,
      "longitude": 17.409328,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447716,
      "ems": null
    },
    {
      "latitude": 52.345478,
      "longitude": 17.40666,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447720,
      "ems": null
    },
    {
      "latitude": 52.346878,
      "longitude": 17.401733,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447728,
      "ems": null
    },
    {
      "latitude": 52.34816,
      "longitude": 17.397232,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447736,
      "ems": null
    },
    {
      "latitude": 52.349075,
      "longitude": 17.393951,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664447741,
      "ems": null
    },
    {
      "latitude": 52.350632,
      "longitude": 17.388458,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447749,
      "ems": null
    },
    {
      "latitude": 52.351391,
      "longitude": 17.385864,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664447753,
      "ems": null
    },
    {
      "latitude": 52.353298,
      "longitude": 17.379587,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447763,
      "ems": null
    },
    {
      "latitude": 52.354889,
      "longitude": 17.374496,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447772,
      "ems": null
    },
    {
      "latitude": 52.356766,
      "longitude": 17.367554,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664447782,
      "ems": null
    },
    {
      "latitude": 52.357952,
      "longitude": 17.363577,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "squawk": "7000",
      "timestamp": 1664447788,
      "ems": null
    },
    {
      "latitude": 52.359146,
      "longitude": 17.359772,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447793,
      "ems": null
    },
    {
      "latitude": 52.360653,
      "longitude": 17.354788,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447801,
      "ems": null
    },
    {
      "latitude": 52.361679,
      "longitude": 17.351728,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664447805,
      "ems": null
    },
    {
      "latitude": 52.363029,
      "longitude": 17.347569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664447810,
      "ems": null
    },
    {
      "latitude": 52.363953,
      "longitude": 17.344513,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664447817,
      "ems": null
    },
    {
      "latitude": 52.365372,
      "longitude": 17.339859,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664447822,
      "ems": null
    },
    {
      "latitude": 52.366974,
      "longitude": 17.335052,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664447829,
      "ems": null
    },
    {
      "latitude": 52.368347,
      "longitude": 17.331238,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664447835,
      "ems": null
    },
    {
      "latitude": 52.369125,
      "longitude": 17.32933,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664447838,
      "ems": null
    },
    {
      "latitude": 52.369904,
      "longitude": 17.327576,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664447841,
      "ems": null
    },
    {
      "latitude": 52.370636,
      "longitude": 17.326126,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447843,
      "ems": null
    },
    {
      "latitude": 52.371872,
      "longitude": 17.323914,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664447847,
      "ems": null
    },
    {
      "latitude": 52.372803,
      "longitude": 17.3223,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664447850,
      "ems": null
    },
    {
      "latitude": 52.373657,
      "longitude": 17.320557,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664447853,
      "ems": null
    },
    {
      "latitude": 52.374664,
      "longitude": 17.318497,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447856,
      "ems": null
    },
    {
      "latitude": 52.37558,
      "longitude": 17.316666,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447859,
      "ems": null
    },
    {
      "latitude": 52.376404,
      "longitude": 17.31514,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447862,
      "ems": null
    },
    {
      "latitude": 52.37746,
      "longitude": 17.31312,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447865,
      "ems": null
    },
    {
      "latitude": 52.378342,
      "longitude": 17.311472,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447868,
      "ems": null
    },
    {
      "latitude": 52.379879,
      "longitude": 17.308489,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447874,
      "ems": null
    },
    {
      "latitude": 52.381668,
      "longitude": 17.305145,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447880,
      "ems": null
    },
    {
      "latitude": 52.383419,
      "longitude": 17.301741,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447886,
      "ems": null
    },
    {
      "latitude": 52.385139,
      "longitude": 17.298445,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447892,
      "ems": null
    },
    {
      "latitude": 52.386814,
      "longitude": 17.295227,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447898,
      "ems": null
    },
    {
      "latitude": 52.388626,
      "longitude": 17.291946,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664447904,
      "ems": null
    },
    {
      "latitude": 52.390308,
      "longitude": 17.288713,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447910,
      "ems": null
    },
    {
      "latitude": 52.392151,
      "longitude": 17.285233,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447916,
      "ems": null
    },
    {
      "latitude": 52.393753,
      "longitude": 17.282104,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447922,
      "ems": null
    },
    {
      "latitude": 52.395523,
      "longitude": 17.278748,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664447928,
      "ems": null
    },
    {
      "latitude": 52.397324,
      "longitude": 17.275391,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664447934,
      "ems": null
    },
    {
      "latitude": 52.399246,
      "longitude": 17.271921,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664447940,
      "ems": null
    },
    {
      "latitude": 52.401016,
      "longitude": 17.268625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664447946,
      "ems": null
    },
    {
      "latitude": 52.402817,
      "longitude": 17.265244,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664447952,
      "ems": null
    },
    {
      "latitude": 52.404739,
      "longitude": 17.262039,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664447958,
      "ems": null
    },
    {
      "latitude": 52.40646,
      "longitude": 17.258972,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664447964,
      "ems": null
    },
    {
      "latitude": 52.408463,
      "longitude": 17.255283,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447971,
      "ems": null
    },
    {
      "latitude": 52.409958,
      "longitude": 17.252121,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664447976,
      "ems": null
    },
    {
      "latitude": 52.410931,
      "longitude": 17.249949,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664447979,
      "ems": null
    },
    {
      "latitude": 52.411743,
      "longitude": 17.248154,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664447982,
      "ems": null
    },
    {
      "latitude": 52.413666,
      "longitude": 17.244339,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664447988,
      "ems": null
    },
    {
      "latitude": 52.414398,
      "longitude": 17.242813,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664447991,
      "ems": null
    },
    {
      "latitude": 52.416191,
      "longitude": 17.239119,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664447998,
      "ems": null
    },
    {
      "latitude": 52.417774,
      "longitude": 17.235666,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664448004,
      "ems": null
    },
    {
      "latitude": 52.419479,
      "longitude": 17.232132,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664448010,
      "ems": null
    },
    {
      "latitude": 52.42099,
      "longitude": 17.228851,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448015,
      "ems": null
    },
    {
      "latitude": 52.422821,
      "longitude": 17.224808,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448022,
      "ems": null
    },
    {
      "latitude": 52.424377,
      "longitude": 17.221298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664448027,
      "ems": null
    },
    {
      "latitude": 52.42606,
      "longitude": 17.217224,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664448034,
      "ems": null
    },
    {
      "latitude": 52.42741,
      "longitude": 17.21385,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664448040,
      "ems": null
    },
    {
      "latitude": 52.429131,
      "longitude": 17.209612,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664448046,
      "ems": null
    },
    {
      "latitude": 52.430649,
      "longitude": 17.205811,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448051,
      "ems": null
    },
    {
      "latitude": 52.43132,
      "longitude": 17.203884,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448055,
      "ems": null
    },
    {
      "latitude": 52.432846,
      "longitude": 17.199783,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448061,
      "ems": null
    },
    {
      "latitude": 52.434448,
      "longitude": 17.195358,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664448067,
      "ems": null
    },
    {
      "latitude": 52.43605,
      "longitude": 17.191391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664448073,
      "ems": null
    },
    {
      "latitude": 52.437744,
      "longitude": 17.187639,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448079,
      "ems": null
    },
    {
      "latitude": 52.438614,
      "longitude": 17.185593,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448082,
      "ems": null
    },
    {
      "latitude": 52.439209,
      "longitude": 17.184296,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448085,
      "ems": null
    },
    {
      "latitude": 52.440304,
      "longitude": 17.181911,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664448088,
      "ems": null
    },
    {
      "latitude": 52.441177,
      "longitude": 17.180023,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448090,
      "ems": null
    },
    {
      "latitude": 52.44223,
      "longitude": 17.177811,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664448094,
      "ems": null
    },
    {
      "latitude": 52.443146,
      "longitude": 17.175869,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664448097,
      "ems": null
    },
    {
      "latitude": 52.445007,
      "longitude": 17.171787,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664448103,
      "ems": null
    },
    {
      "latitude": 52.446625,
      "longitude": 17.167664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664448109,
      "ems": null
    },
    {
      "latitude": 52.447357,
      "longitude": 17.16568,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664448112,
      "ems": null
    },
    {
      "latitude": 52.448124,
      "longitude": 17.163626,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448115,
      "ems": null
    },
    {
      "latitude": 52.448917,
      "longitude": 17.16135,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664448118,
      "ems": null
    },
    {
      "latitude": 52.450035,
      "longitude": 17.158133,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448122,
      "ems": null
    },
    {
      "latitude": 52.450871,
      "longitude": 17.155779,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664448126,
      "ems": null
    },
    {
      "latitude": 52.451897,
      "longitude": 17.153032,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664448130,
      "ems": null
    },
    {
      "latitude": 52.453949,
      "longitude": 17.147675,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664448139,
      "ems": null
    },
    {
      "latitude": 52.456226,
      "longitude": 17.142046,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664448147,
      "ems": null
    },
    {
      "latitude": 52.458389,
      "longitude": 17.136841,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664448155,
      "ems": null
    },
    {
      "latitude": 52.459579,
      "longitude": 17.134323,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664448159,
      "ems": null
    },
    {
      "latitude": 52.460789,
      "longitude": 17.131765,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664448163,
      "ems": null
    },
    {
      "latitude": 52.462185,
      "longitude": 17.127529,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448169,
      "ems": null
    },
    {
      "latitude": 52.462463,
      "longitude": 17.126236,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448171,
      "ems": null
    },
    {
      "latitude": 52.463058,
      "longitude": 17.123032,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664448175,
      "ems": null
    },
    {
      "latitude": 52.463303,
      "longitude": 17.120937,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664448178,
      "ems": null
    },
    {
      "latitude": 52.463627,
      "longitude": 17.118504,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664448181,
      "ems": null
    },
    {
      "latitude": 52.463814,
      "longitude": 17.116856,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664448184,
      "ems": null
    },
    {
      "latitude": 52.464157,
      "longitude": 17.11441,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448187,
      "ems": null
    },
    {
      "latitude": 52.464371,
      "longitude": 17.112932,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448190,
      "ems": null
    },
    {
      "latitude": 52.464661,
      "longitude": 17.110443,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448193,
      "ems": null
    },
    {
      "latitude": 52.465023,
      "longitude": 17.10791,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448196,
      "ems": null
    },
    {
      "latitude": 52.465347,
      "longitude": 17.105713,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664448199,
      "ems": null
    },
    {
      "latitude": 52.46563,
      "longitude": 17.103672,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664448202,
      "ems": null
    },
    {
      "latitude": 52.466187,
      "longitude": 17.09967,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664448208,
      "ems": null
    },
    {
      "latitude": 52.466949,
      "longitude": 17.095032,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664448214,
      "ems": null
    },
    {
      "latitude": 52.467678,
      "longitude": 17.090881,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664448220,
      "ems": null
    },
    {
      "latitude": 52.468414,
      "longitude": 17.086792,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664448226,
      "ems": null
    },
    {
      "latitude": 52.469284,
      "longitude": 17.082138,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664448232,
      "ems": null
    },
    {
      "latitude": 52.469604,
      "longitude": 17.080383,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448235,
      "ems": null
    },
    {
      "latitude": 52.470562,
      "longitude": 17.075972,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448241,
      "ems": null
    },
    {
      "latitude": 52.471527,
      "longitude": 17.071609,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448247,
      "ems": null
    },
    {
      "latitude": 52.472473,
      "longitude": 17.067417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448253,
      "ems": null
    },
    {
      "latitude": 52.47345,
      "longitude": 17.063141,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448259,
      "ems": null
    },
    {
      "latitude": 52.474522,
      "longitude": 17.058865,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448265,
      "ems": null
    },
    {
      "latitude": 52.475418,
      "longitude": 17.05513,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448271,
      "ems": null
    },
    {
      "latitude": 52.476379,
      "longitude": 17.050781,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664448277,
      "ems": null
    },
    {
      "latitude": 52.477249,
      "longitude": 17.046509,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664448283,
      "ems": null
    },
    {
      "latitude": 52.477524,
      "longitude": 17.044144,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664448286,
      "ems": null
    },
    {
      "latitude": 52.477753,
      "longitude": 17.041702,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664448289,
      "ems": null
    },
    {
      "latitude": 52.477921,
      "longitude": 17.039011,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664448292,
      "ems": null
    },
    {
      "latitude": 52.477936,
      "longitude": 17.036514,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664448295,
      "ems": null
    },
    {
      "latitude": 52.477825,
      "longitude": 17.034145,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664448298,
      "ems": null
    },
    {
      "latitude": 52.477547,
      "longitude": 17.032104,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664448301,
      "ems": null
    },
    {
      "latitude": 52.477036,
      "longitude": 17.029436,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664448304,
      "ems": null
    },
    {
      "latitude": 52.476608,
      "longitude": 17.026901,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664448307,
      "ems": null
    },
    {
      "latitude": 52.476105,
      "longitude": 17.024807,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664448310,
      "ems": null
    },
    {
      "latitude": 52.475464,
      "longitude": 17.022552,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664448313,
      "ems": null
    },
    {
      "latitude": 52.474731,
      "longitude": 17.020035,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664448316,
      "ems": null
    },
    {
      "latitude": 52.474007,
      "longitude": 17.017822,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664448319,
      "ems": null
    },
    {
      "latitude": 52.473175,
      "longitude": 17.015381,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664448322,
      "ems": null
    },
    {
      "latitude": 52.472473,
      "longitude": 17.013428,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664448326,
      "ems": null
    },
    {
      "latitude": 52.471634,
      "longitude": 17.011465,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664448328,
      "ems": null
    },
    {
      "latitude": 52.470749,
      "longitude": 17.009506,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664448331,
      "ems": null
    },
    {
      "latitude": 52.469818,
      "longitude": 17.0077,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664448334,
      "ems": null
    },
    {
      "latitude": 52.469009,
      "longitude": 17.006149,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664448338,
      "ems": null
    },
    {
      "latitude": 52.468002,
      "longitude": 17.004168,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664448341,
      "ems": null
    },
    {
      "latitude": 52.467072,
      "longitude": 17.00252,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664448344,
      "ems": null
    },
    {
      "latitude": 52.466171,
      "longitude": 17.000885,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664448346,
      "ems": null
    },
    {
      "latitude": 52.465302,
      "longitude": 16.999224,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664448349,
      "ems": null
    },
    {
      "latitude": 52.464386,
      "longitude": 16.997223,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664448353,
      "ems": null
    },
    {
      "latitude": 52.463486,
      "longitude": 16.995457,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664448355,
      "ems": null
    },
    {
      "latitude": 52.462646,
      "longitude": 16.993866,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664448358,
      "ems": null
    },
    {
      "latitude": 52.461685,
      "longitude": 16.99234,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664448361,
      "ems": null
    },
    {
      "latitude": 52.460648,
      "longitude": 16.990749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664448364,
      "ems": null
    },
    {
      "latitude": 52.459671,
      "longitude": 16.989414,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664448367,
      "ems": null
    },
    {
      "latitude": 52.458755,
      "longitude": 16.988068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664448371,
      "ems": null
    },
    {
      "latitude": 52.457714,
      "longitude": 16.986668,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664448374,
      "ems": null
    },
    {
      "latitude": 52.456741,
      "longitude": 16.985245,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1664448376,
      "ems": null
    },
    {
      "latitude": 52.455853,
      "longitude": 16.984079,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664448380,
      "ems": null
    },
    {
      "latitude": 52.454922,
      "longitude": 16.982744,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664448382,
      "ems": null
    },
    {
      "latitude": 52.453857,
      "longitude": 16.981125,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664448386,
      "ems": null
    },
    {
      "latitude": 52.452301,
      "longitude": 16.978073,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664448391,
      "ems": null
    },
    {
      "latitude": 52.451706,
      "longitude": 16.976166,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664448394,
      "ems": null
    },
    {
      "latitude": 52.45134,
      "longitude": 16.97403,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664448397,
      "ems": null
    },
    {
      "latitude": 52.451157,
      "longitude": 16.971893,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664448400,
      "ems": null
    },
    {
      "latitude": 52.451057,
      "longitude": 16.969639,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664448404,
      "ems": null
    },
    {
      "latitude": 52.451012,
      "longitude": 16.96752,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664448406,
      "ems": null
    },
    {
      "latitude": 52.451019,
      "longitude": 16.965256,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664448409,
      "ems": null
    },
    {
      "latitude": 52.451157,
      "longitude": 16.963348,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664448412,
      "ems": null
    },
    {
      "latitude": 52.45134,
      "longitude": 16.961212,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664448415,
      "ems": null
    },
    {
      "latitude": 52.451569,
      "longitude": 16.959152,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664448419,
      "ems": null
    },
    {
      "latitude": 52.45171,
      "longitude": 16.956926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664448422,
      "ems": null
    },
    {
      "latitude": 52.451843,
      "longitude": 16.954803,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664448424,
      "ems": null
    },
    {
      "latitude": 52.451988,
      "longitude": 16.952768,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664448427,
      "ems": null
    },
    {
      "latitude": 52.452267,
      "longitude": 16.950727,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664448430,
      "ems": null
    },
    {
      "latitude": 52.452732,
      "longitude": 16.948608,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448434,
      "ems": null
    },
    {
      "latitude": 52.453171,
      "longitude": 16.946869,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664448436,
      "ems": null
    },
    {
      "latitude": 52.45372,
      "longitude": 16.944885,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448440,
      "ems": null
    },
    {
      "latitude": 52.454178,
      "longitude": 16.942881,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448443,
      "ems": null
    },
    {
      "latitude": 52.454681,
      "longitude": 16.940994,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664448446,
      "ems": null
    },
    {
      "latitude": 52.455185,
      "longitude": 16.939163,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664448449,
      "ems": null
    },
    {
      "latitude": 52.455761,
      "longitude": 16.937229,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664448452,
      "ems": null
    },
    {
      "latitude": 52.456329,
      "longitude": 16.935501,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664448455,
      "ems": null
    },
    {
      "latitude": 52.45697,
      "longitude": 16.933594,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664448458,
      "ems": null
    },
    {
      "latitude": 52.457565,
      "longitude": 16.931839,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664448461,
      "ems": null
    },
    {
      "latitude": 52.458206,
      "longitude": 16.929779,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664448464,
      "ems": null
    },
    {
      "latitude": 52.459343,
      "longitude": 16.926321,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664448470,
      "ems": null
    },
    {
      "latitude": 52.459946,
      "longitude": 16.924515,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664448472,
      "ems": null
    },
    {
      "latitude": 52.460556,
      "longitude": 16.922791,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664448476,
      "ems": null
    },
    {
      "latitude": 52.461273,
      "longitude": 16.921005,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664448479,
      "ems": null
    },
    {
      "latitude": 52.462044,
      "longitude": 16.91918,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664448482,
      "ems": null
    },
    {
      "latitude": 52.46307,
      "longitude": 16.915571,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448488,
      "ems": null
    },
    {
      "latitude": 52.463581,
      "longitude": 16.913374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448491,
      "ems": null
    },
    {
      "latitude": 52.463955,
      "longitude": 16.911726,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448494,
      "ems": null
    },
    {
      "latitude": 52.464371,
      "longitude": 16.909529,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448497,
      "ems": null
    },
    {
      "latitude": 52.464706,
      "longitude": 16.907806,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664448500,
      "ems": null
    },
    {
      "latitude": 52.465069,
      "longitude": 16.905527,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664448503,
      "ems": null
    },
    {
      "latitude": 52.465397,
      "longitude": 16.903486,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664448506,
      "ems": null
    },
    {
      "latitude": 52.465622,
      "longitude": 16.901703,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448509,
      "ems": null
    },
    {
      "latitude": 52.465908,
      "longitude": 16.899641,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664448512,
      "ems": null
    },
    {
      "latitude": 52.466187,
      "longitude": 16.897287,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664448515,
      "ems": null
    },
    {
      "latitude": 52.466282,
      "longitude": 16.895403,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664448518,
      "ems": null
    },
    {
      "latitude": 52.466232,
      "longitude": 16.893442,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1664448521,
      "ems": null
    },
    {
      "latitude": 52.465816,
      "longitude": 16.891401,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664448524,
      "ems": null
    },
    {
      "latitude": 52.465118,
      "longitude": 16.889675,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664448527,
      "ems": null
    },
    {
      "latitude": 52.464138,
      "longitude": 16.88834,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664448530,
      "ems": null
    },
    {
      "latitude": 52.46302,
      "longitude": 16.887085,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664448533,
      "ems": null
    },
    {
      "latitude": 52.462051,
      "longitude": 16.885986,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664448536,
      "ems": null
    },
    {
      "latitude": 52.460815,
      "longitude": 16.884689,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1664448539,
      "ems": null
    },
    {
      "latitude": 52.459717,
      "longitude": 16.883621,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1664448542,
      "ems": null
    },
    {
      "latitude": 52.458618,
      "longitude": 16.882553,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664448545,
      "ems": null
    },
    {
      "latitude": 52.457623,
      "longitude": 16.881748,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1664448548,
      "ems": null
    },
    {
      "latitude": 52.456505,
      "longitude": 16.880728,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664448551,
      "ems": null
    },
    {
      "latitude": 52.455433,
      "longitude": 16.879629,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664448554,
      "ems": null
    },
    {
      "latitude": 52.454411,
      "longitude": 16.878452,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1664448557,
      "ems": null
    },
    {
      "latitude": 52.452347,
      "longitude": 16.875839,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664448563,
      "ems": null
    },
    {
      "latitude": 52.451477,
      "longitude": 16.874619,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664448566,
      "ems": null
    },
    {
      "latitude": 52.450455,
      "longitude": 16.873352,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664448569,
      "ems": null
    },
    {
      "latitude": 52.449554,
      "longitude": 16.872177,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664448572,
      "ems": null
    },
    {
      "latitude": 52.448639,
      "longitude": 16.87084,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664448575,
      "ems": null
    },
    {
      "latitude": 52.4478,
      "longitude": 16.869585,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664448578,
      "ems": null
    },
    {
      "latitude": 52.446869,
      "longitude": 16.868252,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664448581,
      "ems": null
    },
    {
      "latitude": 52.445843,
      "longitude": 16.866682,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664448584,
      "ems": null
    },
    {
      "latitude": 52.445023,
      "longitude": 16.865463,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664448587,
      "ems": null
    },
    {
      "latitude": 52.444107,
      "longitude": 16.86409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664448590,
      "ems": null
    },
    {
      "latitude": 52.443237,
      "longitude": 16.862717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664448593,
      "ems": null
    },
    {
      "latitude": 52.442352,
      "longitude": 16.861345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664448596,
      "ems": null
    },
    {
      "latitude": 52.44072,
      "longitude": 16.858902,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664448602,
      "ems": null
    },
    {
      "latitude": 52.439758,
      "longitude": 16.857071,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664448605,
      "ems": null
    },
    {
      "latitude": 52.43914,
      "longitude": 16.855381,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664448608,
      "ems": null
    },
    {
      "latitude": 52.438751,
      "longitude": 16.85379,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664448611,
      "ems": null
    },
    {
      "latitude": 52.438568,
      "longitude": 16.851959,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664448614,
      "ems": null
    },
    {
      "latitude": 52.438675,
      "longitude": 16.850124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664448617,
      "ems": null
    },
    {
      "latitude": 52.43898,
      "longitude": 16.848297,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664448620,
      "ems": null
    },
    {
      "latitude": 52.439255,
      "longitude": 16.846619,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664448623,
      "ems": null
    },
    {
      "latitude": 52.439606,
      "longitude": 16.844788,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664448626,
      "ems": null
    },
    {
      "latitude": 52.439934,
      "longitude": 16.842983,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448629,
      "ems": null
    },
    {
      "latitude": 52.440353,
      "longitude": 16.841049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448632,
      "ems": null
    },
    {
      "latitude": 52.440769,
      "longitude": 16.839373,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448635,
      "ems": null
    },
    {
      "latitude": 52.441223,
      "longitude": 16.83754,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448638,
      "ems": null
    },
    {
      "latitude": 52.441589,
      "longitude": 16.83609,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448641,
      "ems": null
    },
    {
      "latitude": 52.442047,
      "longitude": 16.83403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448644,
      "ems": null
    },
    {
      "latitude": 52.442398,
      "longitude": 16.832468,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448647,
      "ems": null
    },
    {
      "latitude": 52.443146,
      "longitude": 16.828766,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664448653,
      "ems": null
    },
    {
      "latitude": 52.443748,
      "longitude": 16.825012,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664448659,
      "ems": null
    },
    {
      "latitude": 52.444447,
      "longitude": 16.821402,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664448665,
      "ems": null
    },
    {
      "latitude": 52.445251,
      "longitude": 16.81778,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448671,
      "ems": null
    },
    {
      "latitude": 52.446121,
      "longitude": 16.814117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664448677,
      "ems": null
    },
    {
      "latitude": 52.446808,
      "longitude": 16.812363,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664448680,
      "ems": null
    },
    {
      "latitude": 52.447659,
      "longitude": 16.811045,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664448683,
      "ems": null
    },
    {
      "latitude": 52.448776,
      "longitude": 16.810102,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664448686,
      "ems": null
    },
    {
      "latitude": 52.449966,
      "longitude": 16.809616,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1664448689,
      "ems": null
    },
    {
      "latitude": 52.451248,
      "longitude": 16.809616,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664448692,
      "ems": null
    },
    {
      "latitude": 52.452484,
      "longitude": 16.81015,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1664448695,
      "ems": null
    },
    {
      "latitude": 52.453712,
      "longitude": 16.811357,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664448699,
      "ems": null
    },
    {
      "latitude": 52.454597,
      "longitude": 16.812771,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1664448702,
      "ems": null
    },
    {
      "latitude": 52.455231,
      "longitude": 16.814499,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664448704,
      "ems": null
    },
    {
      "latitude": 52.455574,
      "longitude": 16.81638,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664448707,
      "ems": null
    },
    {
      "latitude": 52.455715,
      "longitude": 16.818499,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664448711,
      "ems": null
    },
    {
      "latitude": 52.455505,
      "longitude": 16.82045,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664448713,
      "ems": null
    },
    {
      "latitude": 52.455109,
      "longitude": 16.822187,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664448716,
      "ems": null
    },
    {
      "latitude": 52.454597,
      "longitude": 16.823757,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664448719,
      "ems": null
    },
    {
      "latitude": 52.454132,
      "longitude": 16.825718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448722,
      "ems": null
    },
    {
      "latitude": 52.453903,
      "longitude": 16.827621,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664448725,
      "ems": null
    },
    {
      "latitude": 52.453667,
      "longitude": 16.829641,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664448728,
      "ems": null
    },
    {
      "latitude": 52.453384,
      "longitude": 16.831682,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664448732,
      "ems": null
    },
    {
      "latitude": 52.45306,
      "longitude": 16.833487,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664448734,
      "ems": null
    },
    {
      "latitude": 52.452686,
      "longitude": 16.835527,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448738,
      "ems": null
    },
    {
      "latitude": 52.452347,
      "longitude": 16.837158,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448740,
      "ems": null
    },
    {
      "latitude": 52.451942,
      "longitude": 16.839216,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448743,
      "ems": null
    },
    {
      "latitude": 52.451523,
      "longitude": 16.841257,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664448746,
      "ems": null
    },
    {
      "latitude": 52.451153,
      "longitude": 16.843218,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448749,
      "ems": null
    },
    {
      "latitude": 52.450359,
      "longitude": 16.847063,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664448755,
      "ems": null
    },
    {
      "latitude": 52.449966,
      "longitude": 16.848984,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664448758,
      "ems": null
    },
    {
      "latitude": 52.44957,
      "longitude": 16.851065,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664448762,
      "ems": null
    },
    {
      "latitude": 52.448776,
      "longitude": 16.85491,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664448768,
      "ems": null
    },
    {
      "latitude": 52.448219,
      "longitude": 16.856716,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664448771,
      "ems": null
    },
    {
      "latitude": 52.447475,
      "longitude": 16.858286,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664448774,
      "ems": null
    },
    {
      "latitude": 52.446682,
      "longitude": 16.859541,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664448777,
      "ems": null
    },
    {
      "latitude": 52.445705,
      "longitude": 16.860718,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664448779,
      "ems": null
    },
    {
      "latitude": 52.444656,
      "longitude": 16.861496,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664448782,
      "ems": null
    },
    {
      "latitude": 52.44342,
      "longitude": 16.86203,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664448785,
      "ems": null
    },
    {
      "latitude": 52.442215,
      "longitude": 16.862288,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664448789,
      "ems": null
    },
    {
      "latitude": 52.44091,
      "longitude": 16.862131,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664448792,
      "ems": null
    },
    {
      "latitude": 52.439804,
      "longitude": 16.861649,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664448794,
      "ems": null
    },
    {
      "latitude": 52.438816,
      "longitude": 16.860718,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664448797,
      "ems": null
    },
    {
      "latitude": 52.438023,
      "longitude": 16.859463,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664448800,
      "ems": null
    },
    {
      "latitude": 52.437469,
      "longitude": 16.857681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664448804,
      "ems": null
    },
    {
      "latitude": 52.437233,
      "longitude": 16.855852,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664448807,
      "ems": null
    },
    {
      "latitude": 52.437325,
      "longitude": 16.854282,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664448809,
      "ems": null
    },
    {
      "latitude": 52.437698,
      "longitude": 16.852493,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664448812,
      "ems": null
    },
    {
      "latitude": 52.438164,
      "longitude": 16.850752,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448816,
      "ems": null
    },
    {
      "latitude": 52.438534,
      "longitude": 16.849026,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448819,
      "ems": null
    },
    {
      "latitude": 52.43898,
      "longitude": 16.847305,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664448821,
      "ems": null
    },
    {
      "latitude": 52.439392,
      "longitude": 16.845551,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664448825,
      "ems": null
    },
    {
      "latitude": 52.43985,
      "longitude": 16.843796,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664448827,
      "ems": null
    },
    {
      "latitude": 52.440304,
      "longitude": 16.841806,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664448831,
      "ems": null
    },
    {
      "latitude": 52.440674,
      "longitude": 16.839981,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664448834,
      "ems": null
    },
    {
      "latitude": 52.441143,
      "longitude": 16.83843,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664448836,
      "ems": null
    },
    {
      "latitude": 52.442001,
      "longitude": 16.837082,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664448840,
      "ems": null
    },
    {
      "latitude": 52.443146,
      "longitude": 16.836233,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1664448843,
      "ems": null
    },
    {
      "latitude": 52.444168,
      "longitude": 16.836155,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1664448846,
      "ems": null
    },
    {
      "latitude": 52.445377,
      "longitude": 16.836548,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1664448849,
      "ems": null
    },
    {
      "latitude": 52.446442,
      "longitude": 16.837311,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1664448852,
      "ems": null
    },
    {
      "latitude": 52.447403,
      "longitude": 16.838531,
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1664448855,
      "ems": null
    },
    {
      "latitude": 52.448219,
      "longitude": 16.840158,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664448858,
      "ems": null
    },
    {
      "latitude": 52.448822,
      "longitude": 16.841965,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664448861,
      "ems": null
    },
    {
      "latitude": 52.449188,
      "longitude": 16.843796,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664448864,
      "ems": null
    },
    {
      "latitude": 52.449337,
      "longitude": 16.845886,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664448867,
      "ems": null
    },
    {
      "latitude": 52.449196,
      "longitude": 16.847769,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664448870,
      "ems": null
    },
    {
      "latitude": 52.448822,
      "longitude": 16.849747,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664448873,
      "ems": null
    },
    {
      "latitude": 52.448273,
      "longitude": 16.851425,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664448876,
      "ems": null
    },
    {
      "latitude": 52.447613,
      "longitude": 16.853027,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664448879,
      "ems": null
    },
    {
      "latitude": 52.446915,
      "longitude": 16.854519,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664448882,
      "ems": null
    },
    {
      "latitude": 52.446304,
      "longitude": 16.85585,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664448885,
      "ems": null
    },
    {
      "latitude": 52.445663,
      "longitude": 16.857224,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664448888,
      "ems": null
    },
    {
      "latitude": 52.445023,
      "longitude": 16.858597,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664448891,
      "ems": null
    },
    {
      "latitude": 52.444382,
      "longitude": 16.85997,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664448894,
      "ems": null
    },
    {
      "latitude": 52.443794,
      "longitude": 16.861345,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664448897,
      "ems": null
    },
    {
      "latitude": 52.443008,
      "longitude": 16.863022,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664448900,
      "ems": null
    },
    {
      "latitude": 52.442448,
      "longitude": 16.86417,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664448903,
      "ems": null
    },
    {
      "latitude": 52.4417,
      "longitude": 16.86574,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664448906,
      "ems": null
    },
    {
      "latitude": 52.440948,
      "longitude": 16.867142,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664448909,
      "ems": null
    },
    {
      "latitude": 52.440258,
      "longitude": 16.868408,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664448912,
      "ems": null
    },
    {
      "latitude": 52.439529,
      "longitude": 16.869659,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664448915,
      "ems": null
    },
    {
      "latitude": 52.43866,
      "longitude": 16.870804,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664448918,
      "ems": null
    },
    {
      "latitude": 52.437698,
      "longitude": 16.871782,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664448921,
      "ems": null
    },
    {
      "latitude": 52.436737,
      "longitude": 16.872482,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664448924,
      "ems": null
    },
    {
      "latitude": 52.435696,
      "longitude": 16.872959,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664448927,
      "ems": null
    },
    {
      "latitude": 52.434765,
      "longitude": 16.873274,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664448930,
      "ems": null
    },
    {
      "latitude": 52.433578,
      "longitude": 16.873474,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664448933,
      "ems": null
    },
    {
      "latitude": 52.432571,
      "longitude": 16.873398,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664448936,
      "ems": null
    },
    {
      "latitude": 52.431461,
      "longitude": 16.873352,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664448939,
      "ems": null
    },
    {
      "latitude": 52.430389,
      "longitude": 16.873196,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664448942,
      "ems": null
    },
    {
      "latitude": 52.429272,
      "longitude": 16.872959,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664448945,
      "ems": null
    },
    {
      "latitude": 52.428249,
      "longitude": 16.872646,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664448948,
      "ems": null
    },
    {
      "latitude": 52.427223,
      "longitude": 16.87241,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664448951,
      "ems": null
    },
    {
      "latitude": 52.426208,
      "longitude": 16.872101,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664448954,
      "ems": null
    },
    {
      "latitude": 52.425201,
      "longitude": 16.871796,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664448957,
      "ems": null
    },
    {
      "latitude": 52.424057,
      "longitude": 16.871469,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664448960,
      "ems": null
    },
    {
      "latitude": 52.42308,
      "longitude": 16.871155,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664448963,
      "ems": null
    },
    {
      "latitude": 52.422043,
      "longitude": 16.870804,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664448966,
      "ems": null
    },
    {
      "latitude": 52.421036,
      "longitude": 16.870422,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664448969,
      "ems": null
    },
    {
      "latitude": 52.42001,
      "longitude": 16.870056,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664448972,
      "ems": null
    },
    {
      "latitude": 52.418938,
      "longitude": 16.869585,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1664448975,
      "ems": null
    },
    {
      "latitude": 52.417923,
      "longitude": 16.869049,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1664448978,
      "ems": null
    },
    {
      "latitude": 52.417053,
      "longitude": 16.868057,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1664448981,
      "ems": null
    },
    {
      "latitude": 52.416237,
      "longitude": 16.866838,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664448984,
      "ems": null
    },
    {
      "latitude": 52.41563,
      "longitude": 16.865505,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664448987,
      "ems": null
    },
    {
      "latitude": 52.415222,
      "longitude": 16.863861,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664448990,
      "ems": null
    },
    {
      "latitude": 52.414932,
      "longitude": 16.862288,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664448993,
      "ems": null
    },
    {
      "latitude": 52.414886,
      "longitude": 16.860561,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664448996,
      "ems": null
    },
    {
      "latitude": 52.414982,
      "longitude": 16.858835,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664448999,
      "ems": null
    },
    {
      "latitude": 52.415176,
      "longitude": 16.856842,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664449002,
      "ems": null
    },
    {
      "latitude": 52.415398,
      "longitude": 16.855459,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664449005,
      "ems": null
    },
    {
      "latitude": 52.415726,
      "longitude": 16.853655,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664449008,
      "ems": null
    },
    {
      "latitude": 52.415909,
      "longitude": 16.85257,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664449010,
      "ems": null
    },
    {
      "latitude": 52.416367,
      "longitude": 16.85051,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664449014,
      "ems": null
    },
    {
      "latitude": 52.416656,
      "longitude": 16.848948,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664449017,
      "ems": null
    },
    {
      "latitude": 52.416824,
      "longitude": 16.848221,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664449019,
      "ems": null
    },
    {
      "latitude": 52.417122,
      "longitude": 16.846514,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664449022,
      "ems": null
    },
    {
      "latitude": 52.417236,
      "longitude": 16.845856,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664449024,
      "ems": null
    },
    {
      "latitude": 52.417633,
      "longitude": 16.843689,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664449028,
      "ems": null
    },
    {
      "latitude": 52.418377,
      "longitude": 16.84,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664449036,
      "ems": null
    },
    {
      "latitude": 52.418842,
      "longitude": 16.837412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664449042,
      "ems": null
    },
    {
      "latitude": 52.419296,
      "longitude": 16.835251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664449048,
      "ems": null
    },
    {
      "latitude": 52.419617,
      "longitude": 16.833496,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664449053,
      "ems": null
    },
    {
      "latitude": 52.419891,
      "longitude": 16.832123,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664449060,
      "ems": null
    },
    {
      "latitude": 52.420029,
      "longitude": 16.831284,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664449066,
      "ems": null
    },
    {
      "latitude": 52.420132,
      "longitude": 16.830845,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664449070,
      "ems": null
    },
    {
      "latitude": 52.420147,
      "longitude": 16.830584,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 20.4,
        "kts": 11,
        "mph": 12.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664449073,
      "ems": null
    },
    {
      "latitude": 52.420124,
      "longitude": 16.830349,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664449076,
      "ems": null
    },
    {
      "latitude": 52.42004,
      "longitude": 16.830139,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664449079,
      "ems": null
    },
    {
      "latitude": 52.419834,
      "longitude": 16.82991,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 20.4,
        "kts": 11,
        "mph": 12.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664449084,
      "ems": null
    },
    {
      "latitude": 52.419613,
      "longitude": 16.8298,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664449089,
      "ems": null
    },
    {
      "latitude": 52.419392,
      "longitude": 16.829641,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664449094,
      "ems": null
    },
    {
      "latitude": 52.419182,
      "longitude": 16.829548,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 7.4,
        "kts": 4,
        "mph": 4.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664449124,
      "ems": null
    }
  ]
};
