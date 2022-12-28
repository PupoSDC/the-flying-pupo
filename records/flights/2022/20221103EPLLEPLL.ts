import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221103EPLLEPLL",
    callsign: "BNI8T",
    name: "CP1/02 - Nav to EPWA/EPBC/EPMO",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 10, 3, 13, 6).getTime(),
    arrival: new Date(2022, 10, 3, 15, 54).getTime(),
    singleEnginePistonTime: 120 + 48,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 120 + 48,
    nightTime: 23,
    landings: {
      day: 1,
      night: 1,
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
      "latitude": 51.719631,
      "longitude": 19.387741,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667481168,
      "ems": null
    },
    {
      "latitude": 51.718884,
      "longitude": 19.384384,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667481174,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.381332,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667481180,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 19.377878,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667481186,
      "ems": null
    },
    {
      "latitude": 51.716789,
      "longitude": 19.374847,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667481192,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.37105,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667481199,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 19.367371,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667481205,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.364294,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667481211,
      "ems": null
    },
    {
      "latitude": 51.713974,
      "longitude": 19.361103,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667481217,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.359543,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667481220,
      "ems": null
    },
    {
      "latitude": 51.712925,
      "longitude": 19.358215,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667481223,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.356945,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1667481226,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.356054,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667481229,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.355461,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667481231,
      "ems": null
    },
    {
      "latitude": 51.709671,
      "longitude": 19.354866,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667481235,
      "ems": null
    },
    {
      "latitude": 51.708736,
      "longitude": 19.354477,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667481238,
      "ems": null
    },
    {
      "latitude": 51.707806,
      "longitude": 19.354401,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667481241,
      "ems": null
    },
    {
      "latitude": 51.706875,
      "longitude": 19.35463,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667481244,
      "ems": null
    },
    {
      "latitude": 51.705944,
      "longitude": 19.355011,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667481247,
      "ems": null
    },
    {
      "latitude": 51.705093,
      "longitude": 19.355682,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667481250,
      "ems": null
    },
    {
      "latitude": 51.704269,
      "longitude": 19.356501,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667481253,
      "ems": null
    },
    {
      "latitude": 51.703754,
      "longitude": 19.357147,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667481255,
      "ems": null
    },
    {
      "latitude": 51.703056,
      "longitude": 19.358368,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1667481258,
      "ems": null
    },
    {
      "latitude": 51.702404,
      "longitude": 19.35997,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1667481262,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.36142,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1667481265,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 19.363031,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481268,
      "ems": null
    },
    {
      "latitude": 51.701473,
      "longitude": 19.3647,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481271,
      "ems": null
    },
    {
      "latitude": 51.70134,
      "longitude": 19.366299,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667481274,
      "ems": null
    },
    {
      "latitude": 51.701294,
      "longitude": 19.367857,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667481277,
      "ems": null
    },
    {
      "latitude": 51.701248,
      "longitude": 19.369343,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481280,
      "ems": null
    },
    {
      "latitude": 51.701195,
      "longitude": 19.371109,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481283,
      "ems": null
    },
    {
      "latitude": 51.701195,
      "longitude": 19.372482,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667481286,
      "ems": null
    },
    {
      "latitude": 51.701149,
      "longitude": 19.374313,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667481289,
      "ems": null
    },
    {
      "latitude": 51.701103,
      "longitude": 19.375839,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481292,
      "ems": null
    },
    {
      "latitude": 51.701054,
      "longitude": 19.37767,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667481295,
      "ems": null
    },
    {
      "latitude": 51.700729,
      "longitude": 19.38118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481301,
      "ems": null
    },
    {
      "latitude": 51.700451,
      "longitude": 19.383087,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667481304,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.384857,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667481307,
      "ems": null
    },
    {
      "latitude": 51.699921,
      "longitude": 19.38649,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481310,
      "ems": null
    },
    {
      "latitude": 51.699612,
      "longitude": 19.388428,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481313,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.39003,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481316,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.391861,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481319,
      "ems": null
    },
    {
      "latitude": 51.698822,
      "longitude": 19.393311,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481322,
      "ems": null
    },
    {
      "latitude": 51.698681,
      "longitude": 19.394302,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481323,
      "ems": null
    },
    {
      "latitude": 51.698318,
      "longitude": 19.396511,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667481327,
      "ems": null
    },
    {
      "latitude": 51.69775,
      "longitude": 19.400253,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667481332,
      "ems": null
    },
    {
      "latitude": 51.697266,
      "longitude": 19.404305,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481339,
      "ems": null
    },
    {
      "latitude": 51.697037,
      "longitude": 19.406384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667481342,
      "ems": null
    },
    {
      "latitude": 51.696865,
      "longitude": 19.408264,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667481345,
      "ems": null
    },
    {
      "latitude": 51.6964,
      "longitude": 19.412079,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481351,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.414104,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667481354,
      "ems": null
    },
    {
      "latitude": 51.695702,
      "longitude": 19.418259,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481360,
      "ems": null
    },
    {
      "latitude": 51.695206,
      "longitude": 19.422714,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481366,
      "ems": null
    },
    {
      "latitude": 51.694675,
      "longitude": 19.426956,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667481372,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.43088,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667481378,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.433182,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481381,
      "ems": null
    },
    {
      "latitude": 51.694519,
      "longitude": 19.435556,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481384,
      "ems": null
    },
    {
      "latitude": 51.694725,
      "longitude": 19.437637,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667481387,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.439774,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667481390,
      "ems": null
    },
    {
      "latitude": 51.695343,
      "longitude": 19.442015,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667481393,
      "ems": null
    },
    {
      "latitude": 51.695656,
      "longitude": 19.44397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667481396,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.446247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667481399,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.448399,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481402,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.450254,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481405,
      "ems": null
    },
    {
      "latitude": 51.697422,
      "longitude": 19.452744,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481408,
      "ems": null
    },
    {
      "latitude": 51.697815,
      "longitude": 19.454708,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481411,
      "ems": null
    },
    {
      "latitude": 51.698261,
      "longitude": 19.457092,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481414,
      "ems": null
    },
    {
      "latitude": 51.698635,
      "longitude": 19.458923,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481417,
      "ems": null
    },
    {
      "latitude": 51.699142,
      "longitude": 19.461464,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481420,
      "ems": null
    },
    {
      "latitude": 51.699966,
      "longitude": 19.465546,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481426,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 19.46991,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667481432,
      "ems": null
    },
    {
      "latitude": 51.701893,
      "longitude": 19.474182,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667481438,
      "ems": null
    },
    {
      "latitude": 51.702824,
      "longitude": 19.478531,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481444,
      "ems": null
    },
    {
      "latitude": 51.703709,
      "longitude": 19.482956,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481450,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.487381,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667481456,
      "ems": null
    },
    {
      "latitude": 51.705231,
      "longitude": 19.491751,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667481462,
      "ems": null
    },
    {
      "latitude": 51.7061,
      "longitude": 19.496279,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481468,
      "ems": null
    },
    {
      "latitude": 51.706924,
      "longitude": 19.500435,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481474,
      "ems": null
    },
    {
      "latitude": 51.707748,
      "longitude": 19.504667,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481480,
      "ems": null
    },
    {
      "latitude": 51.708801,
      "longitude": 19.509121,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667481486,
      "ems": null
    },
    {
      "latitude": 51.709351,
      "longitude": 19.511126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481489,
      "ems": null
    },
    {
      "latitude": 51.710041,
      "longitude": 19.51355,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667481492,
      "ems": null
    },
    {
      "latitude": 51.710457,
      "longitude": 19.515228,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667481495,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.519512,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667481501,
      "ems": null
    },
    {
      "latitude": 51.712322,
      "longitude": 19.523849,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667481507,
      "ems": null
    },
    {
      "latitude": 51.712971,
      "longitude": 19.527588,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667481513,
      "ems": null
    },
    {
      "latitude": 51.713299,
      "longitude": 19.530029,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481516,
      "ems": null
    },
    {
      "latitude": 51.713516,
      "longitude": 19.53191,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667481519,
      "ems": null
    },
    {
      "latitude": 51.713699,
      "longitude": 19.534138,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481522,
      "ems": null
    },
    {
      "latitude": 51.713902,
      "longitude": 19.536362,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481525,
      "ems": null
    },
    {
      "latitude": 51.714043,
      "longitude": 19.538193,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481528,
      "ems": null
    },
    {
      "latitude": 51.71423,
      "longitude": 19.540558,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667481531,
      "ems": null
    },
    {
      "latitude": 51.714321,
      "longitude": 19.542542,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667481534,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.544601,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667481537,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.546757,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667481540,
      "ems": null
    },
    {
      "latitude": 51.714752,
      "longitude": 19.548834,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667481543,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.550913,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481546,
      "ems": null
    },
    {
      "latitude": 51.714928,
      "longitude": 19.552994,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667481549,
      "ems": null
    },
    {
      "latitude": 51.715118,
      "longitude": 19.55752,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481556,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.561676,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667481561,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.566502,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667481568,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 19.570923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667481574,
      "ems": null
    },
    {
      "latitude": 51.716232,
      "longitude": 19.575195,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481579,
      "ems": null
    },
    {
      "latitude": 51.716583,
      "longitude": 19.578751,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667481584,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.581423,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667481588,
      "ems": null
    },
    {
      "latitude": 51.717178,
      "longitude": 19.584021,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481592,
      "ems": null
    },
    {
      "latitude": 51.717453,
      "longitude": 19.586248,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481595,
      "ems": null
    },
    {
      "latitude": 51.717728,
      "longitude": 19.588251,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667481598,
      "ems": null
    },
    {
      "latitude": 51.718002,
      "longitude": 19.59033,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667481601,
      "ems": null
    },
    {
      "latitude": 51.718277,
      "longitude": 19.592484,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481604,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.594709,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481607,
      "ems": null
    },
    {
      "latitude": 51.719395,
      "longitude": 19.600754,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667481615,
      "ems": null
    },
    {
      "latitude": 51.71991,
      "longitude": 19.604492,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667481621,
      "ems": null
    },
    {
      "latitude": 51.720612,
      "longitude": 19.608963,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667481627,
      "ems": null
    },
    {
      "latitude": 51.721024,
      "longitude": 19.611263,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481630,
      "ems": null
    },
    {
      "latitude": 51.721493,
      "longitude": 19.613419,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481633,
      "ems": null
    },
    {
      "latitude": 51.721893,
      "longitude": 19.615496,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481636,
      "ems": null
    },
    {
      "latitude": 51.722378,
      "longitude": 19.617767,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481639,
      "ems": null
    },
    {
      "latitude": 51.722809,
      "longitude": 19.619875,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667481642,
      "ems": null
    },
    {
      "latitude": 51.723259,
      "longitude": 19.622116,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667481645,
      "ems": null
    },
    {
      "latitude": 51.723774,
      "longitude": 19.625092,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667481650,
      "ems": null
    },
    {
      "latitude": 51.724285,
      "longitude": 19.628601,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667481654,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.630787,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667481657,
      "ems": null
    },
    {
      "latitude": 51.724751,
      "longitude": 19.633026,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481660,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 19.635162,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481663,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.636307,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481665,
      "ems": null
    },
    {
      "latitude": 51.724983,
      "longitude": 19.639511,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667481669,
      "ems": null
    },
    {
      "latitude": 51.725075,
      "longitude": 19.640961,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667481671,
      "ems": null
    },
    {
      "latitude": 51.725403,
      "longitude": 19.643936,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667481676,
      "ems": null
    },
    {
      "latitude": 51.725601,
      "longitude": 19.646004,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667481679,
      "ems": null
    },
    {
      "latitude": 51.726055,
      "longitude": 19.650192,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667481685,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.654083,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667481690,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.658661,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667481696,
      "ems": null
    },
    {
      "latitude": 51.726936,
      "longitude": 19.663086,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481702,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.664934,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481705,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.667606,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481709,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 19.669611,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481711,
      "ems": null
    },
    {
      "latitude": 51.727249,
      "longitude": 19.671986,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481715,
      "ems": null
    },
    {
      "latitude": 51.727295,
      "longitude": 19.67436,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481718,
      "ems": null
    },
    {
      "latitude": 51.727356,
      "longitude": 19.676361,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481720,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.680597,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481726,
      "ems": null
    },
    {
      "latitude": 51.72757,
      "longitude": 19.685125,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481732,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.689865,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667481739,
      "ems": null
    },
    {
      "latitude": 51.727684,
      "longitude": 19.694214,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667481745,
      "ems": null
    },
    {
      "latitude": 51.727707,
      "longitude": 19.698486,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481751,
      "ems": null
    },
    {
      "latitude": 51.727707,
      "longitude": 19.70101,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481754,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.702988,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667481757,
      "ems": null
    },
    {
      "latitude": 51.727497,
      "longitude": 19.706573,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667481762,
      "ems": null
    },
    {
      "latitude": 51.727432,
      "longitude": 19.71207,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481769,
      "ems": null
    },
    {
      "latitude": 51.727432,
      "longitude": 19.71645,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481775,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.720161,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481781,
      "ems": null
    },
    {
      "latitude": 51.727589,
      "longitude": 19.724045,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667481786,
      "ems": null
    },
    {
      "latitude": 51.727707,
      "longitude": 19.726917,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667481790,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.730183,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667481795,
      "ems": null
    },
    {
      "latitude": 51.728027,
      "longitude": 19.735825,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667481803,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.742584,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481812,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.74696,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667481821,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 19.752579,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667481826,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 19.757462,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667481832,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.761955,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667481838,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.766409,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667481844,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 19.770966,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667481851,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 19.775314,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667481856,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.779968,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481862,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.787193,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481872,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.790268,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667481876,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.796696,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667481885,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.80278,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481893,
      "ems": null
    },
    {
      "latitude": 51.728531,
      "longitude": 19.804935,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667481896,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.806494,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667481898,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.808426,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481901,
      "ems": null
    },
    {
      "latitude": 51.730148,
      "longitude": 19.810791,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481904,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.812546,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481907,
      "ems": null
    },
    {
      "latitude": 51.731232,
      "longitude": 19.814585,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481910,
      "ems": null
    },
    {
      "latitude": 51.732056,
      "longitude": 19.817331,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481914,
      "ems": null
    },
    {
      "latitude": 51.732513,
      "longitude": 19.818964,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481917,
      "ems": null
    },
    {
      "latitude": 51.7332,
      "longitude": 19.821489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481920,
      "ems": null
    },
    {
      "latitude": 51.733749,
      "longitude": 19.823492,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667481923,
      "ems": null
    },
    {
      "latitude": 51.734341,
      "longitude": 19.825745,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667481926,
      "ems": null
    },
    {
      "latitude": 51.735306,
      "longitude": 19.829506,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667481931,
      "ems": null
    },
    {
      "latitude": 51.736526,
      "longitude": 19.833755,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481937,
      "ems": null
    },
    {
      "latitude": 51.73769,
      "longitude": 19.837875,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481943,
      "ems": null
    },
    {
      "latitude": 51.739182,
      "longitude": 19.843216,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481952,
      "ems": null
    },
    {
      "latitude": 51.740532,
      "longitude": 19.848099,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481958,
      "ems": null
    },
    {
      "latitude": 51.742302,
      "longitude": 19.854279,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481967,
      "ems": null
    },
    {
      "latitude": 51.743881,
      "longitude": 19.859695,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481975,
      "ems": null
    },
    {
      "latitude": 51.745377,
      "longitude": 19.864765,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667481983,
      "ems": null
    },
    {
      "latitude": 51.746567,
      "longitude": 19.869072,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481989,
      "ems": null
    },
    {
      "latitude": 51.747345,
      "longitude": 19.871819,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667481993,
      "ems": null
    },
    {
      "latitude": 51.74968,
      "longitude": 19.88028,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482005,
      "ems": null
    },
    {
      "latitude": 51.751099,
      "longitude": 19.885406,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482013,
      "ems": null
    },
    {
      "latitude": 51.752655,
      "longitude": 19.891193,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482021,
      "ems": null
    },
    {
      "latitude": 51.754219,
      "longitude": 19.896698,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482029,
      "ems": null
    },
    {
      "latitude": 51.756035,
      "longitude": 19.902802,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482038,
      "ems": null
    },
    {
      "latitude": 51.757523,
      "longitude": 19.907913,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482046,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.914398,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482055,
      "ems": null
    },
    {
      "latitude": 51.760643,
      "longitude": 19.918594,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482062,
      "ems": null
    },
    {
      "latitude": 51.762451,
      "longitude": 19.924597,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482071,
      "ems": null
    },
    {
      "latitude": 51.76432,
      "longitude": 19.931183,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482082,
      "ems": null
    },
    {
      "latitude": 51.766159,
      "longitude": 19.937588,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482092,
      "ems": null
    },
    {
      "latitude": 51.767204,
      "longitude": 19.941559,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482100,
      "ems": null
    },
    {
      "latitude": 51.769161,
      "longitude": 19.948578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482108,
      "ems": null
    },
    {
      "latitude": 51.770554,
      "longitude": 19.953844,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482116,
      "ems": null
    },
    {
      "latitude": 51.771515,
      "longitude": 19.957556,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482121,
      "ems": null
    },
    {
      "latitude": 51.772476,
      "longitude": 19.961491,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482126,
      "ems": null
    },
    {
      "latitude": 51.773861,
      "longitude": 19.967957,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482135,
      "ems": null
    },
    {
      "latitude": 51.77504,
      "longitude": 19.973368,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482143,
      "ems": null
    },
    {
      "latitude": 51.776051,
      "longitude": 19.977951,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482149,
      "ems": null
    },
    {
      "latitude": 51.777008,
      "longitude": 19.982126,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482155,
      "ems": null
    },
    {
      "latitude": 51.777832,
      "longitude": 19.985838,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482161,
      "ems": null
    },
    {
      "latitude": 51.778656,
      "longitude": 19.98955,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482167,
      "ems": null
    },
    {
      "latitude": 51.77948,
      "longitude": 19.992964,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482173,
      "ems": null
    },
    {
      "latitude": 51.780396,
      "longitude": 19.996899,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667482179,
      "ems": null
    },
    {
      "latitude": 51.781311,
      "longitude": 20.000458,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482185,
      "ems": null
    },
    {
      "latitude": 51.781769,
      "longitude": 20.002094,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482188,
      "ems": null
    },
    {
      "latitude": 51.781822,
      "longitude": 20.002365,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482189,
      "ems": null
    },
    {
      "latitude": 51.782661,
      "longitude": 20.005112,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482193,
      "ems": null
    },
    {
      "latitude": 51.783508,
      "longitude": 20.007885,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482198,
      "ems": null
    },
    {
      "latitude": 51.783779,
      "longitude": 20.00885,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482200,
      "ems": null
    },
    {
      "latitude": 51.785385,
      "longitude": 20.013971,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482209,
      "ems": null
    },
    {
      "latitude": 51.785934,
      "longitude": 20.01568,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482212,
      "ems": null
    },
    {
      "latitude": 51.787128,
      "longitude": 20.019302,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482218,
      "ems": null
    },
    {
      "latitude": 51.788361,
      "longitude": 20.022881,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482224,
      "ems": null
    },
    {
      "latitude": 51.789551,
      "longitude": 20.026518,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482230,
      "ems": null
    },
    {
      "latitude": 51.790695,
      "longitude": 20.03023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482236,
      "ems": null
    },
    {
      "latitude": 51.79184,
      "longitude": 20.034016,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482242,
      "ems": null
    },
    {
      "latitude": 51.792938,
      "longitude": 20.037504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482248,
      "ems": null
    },
    {
      "latitude": 51.794346,
      "longitude": 20.041885,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482254,
      "ems": null
    },
    {
      "latitude": 51.795547,
      "longitude": 20.045521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482260,
      "ems": null
    },
    {
      "latitude": 51.79686,
      "longitude": 20.049515,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482266,
      "ems": null
    },
    {
      "latitude": 51.797928,
      "longitude": 20.053093,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482272,
      "ems": null
    },
    {
      "latitude": 51.799622,
      "longitude": 20.058661,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482280,
      "ems": null
    },
    {
      "latitude": 51.801235,
      "longitude": 20.063705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482288,
      "ems": null
    },
    {
      "latitude": 51.802826,
      "longitude": 20.069126,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482296,
      "ems": null
    },
    {
      "latitude": 51.804428,
      "longitude": 20.074396,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482304,
      "ems": null
    },
    {
      "latitude": 51.805984,
      "longitude": 20.079727,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482311,
      "ems": null
    },
    {
      "latitude": 51.80722,
      "longitude": 20.084122,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482318,
      "ems": null
    },
    {
      "latitude": 51.808456,
      "longitude": 20.088501,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482324,
      "ems": null
    },
    {
      "latitude": 51.809647,
      "longitude": 20.092731,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482330,
      "ems": null
    },
    {
      "latitude": 51.810917,
      "longitude": 20.097198,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482336,
      "ems": null
    },
    {
      "latitude": 51.812119,
      "longitude": 20.101492,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482342,
      "ems": null
    },
    {
      "latitude": 51.813713,
      "longitude": 20.107498,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482350,
      "ems": null
    },
    {
      "latitude": 51.815094,
      "longitude": 20.112997,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482358,
      "ems": null
    },
    {
      "latitude": 51.816505,
      "longitude": 20.118637,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667482366,
      "ems": null
    },
    {
      "latitude": 51.818039,
      "longitude": 20.124588,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482374,
      "ems": null
    },
    {
      "latitude": 51.819809,
      "longitude": 20.131683,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667482384,
      "ems": null
    },
    {
      "latitude": 51.820881,
      "longitude": 20.13588,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482390,
      "ems": null
    },
    {
      "latitude": 51.821953,
      "longitude": 20.139999,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482396,
      "ems": null
    },
    {
      "latitude": 51.823021,
      "longitude": 20.14389,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482402,
      "ems": null
    },
    {
      "latitude": 51.824203,
      "longitude": 20.147961,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482408,
      "ems": null
    },
    {
      "latitude": 51.825535,
      "longitude": 20.152283,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482414,
      "ems": null
    },
    {
      "latitude": 51.826233,
      "longitude": 20.154266,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667482417,
      "ems": null
    },
    {
      "latitude": 51.826981,
      "longitude": 20.15625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667482420,
      "ems": null
    },
    {
      "latitude": 51.827728,
      "longitude": 20.158354,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667482423,
      "ems": null
    },
    {
      "latitude": 51.828415,
      "longitude": 20.160358,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482426,
      "ems": null
    },
    {
      "latitude": 51.829056,
      "longitude": 20.162361,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482429,
      "ems": null
    },
    {
      "latitude": 51.830338,
      "longitude": 20.166296,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482435,
      "ems": null
    },
    {
      "latitude": 51.831589,
      "longitude": 20.170441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482441,
      "ems": null
    },
    {
      "latitude": 51.832191,
      "longitude": 20.172577,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482444,
      "ems": null
    },
    {
      "latitude": 51.832718,
      "longitude": 20.174461,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482447,
      "ems": null
    },
    {
      "latitude": 51.833263,
      "longitude": 20.176544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482450,
      "ems": null
    },
    {
      "latitude": 51.833729,
      "longitude": 20.17868,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482453,
      "ems": null
    },
    {
      "latitude": 51.834194,
      "longitude": 20.18074,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482456,
      "ems": null
    },
    {
      "latitude": 51.834686,
      "longitude": 20.182924,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482459,
      "ems": null
    },
    {
      "latitude": 51.835079,
      "longitude": 20.184937,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667482462,
      "ems": null
    },
    {
      "latitude": 51.835453,
      "longitude": 20.187149,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667482465,
      "ems": null
    },
    {
      "latitude": 51.835869,
      "longitude": 20.18959,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667482468,
      "ems": null
    },
    {
      "latitude": 51.836151,
      "longitude": 20.19165,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667482471,
      "ems": null
    },
    {
      "latitude": 51.836472,
      "longitude": 20.193985,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667482474,
      "ems": null
    },
    {
      "latitude": 51.836746,
      "longitude": 20.196285,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667482478,
      "ems": null
    },
    {
      "latitude": 51.836975,
      "longitude": 20.19829,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667482480,
      "ems": null
    },
    {
      "latitude": 51.837265,
      "longitude": 20.200348,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667482483,
      "ems": null
    },
    {
      "latitude": 51.837593,
      "longitude": 20.202484,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667482486,
      "ems": null
    },
    {
      "latitude": 51.837967,
      "longitude": 20.204926,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667482490,
      "ems": null
    },
    {
      "latitude": 51.838623,
      "longitude": 20.209127,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667482495,
      "ems": null
    },
    {
      "latitude": 51.839355,
      "longitude": 20.213507,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667482501,
      "ems": null
    },
    {
      "latitude": 51.839813,
      "longitude": 20.215958,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667482505,
      "ems": null
    },
    {
      "latitude": 51.840271,
      "longitude": 20.218184,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482508,
      "ems": null
    },
    {
      "latitude": 51.840729,
      "longitude": 20.220263,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482511,
      "ems": null
    },
    {
      "latitude": 51.841232,
      "longitude": 20.222637,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482514,
      "ems": null
    },
    {
      "latitude": 51.84169,
      "longitude": 20.224567,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482516,
      "ems": null
    },
    {
      "latitude": 51.842293,
      "longitude": 20.227203,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482520,
      "ems": null
    },
    {
      "latitude": 51.843227,
      "longitude": 20.231628,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482526,
      "ems": null
    },
    {
      "latitude": 51.844158,
      "longitude": 20.23613,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482532,
      "ems": null
    },
    {
      "latitude": 51.845089,
      "longitude": 20.240707,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667482538,
      "ems": null
    },
    {
      "latitude": 51.846039,
      "longitude": 20.245428,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482544,
      "ems": null
    },
    {
      "latitude": 51.846909,
      "longitude": 20.249361,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667482550,
      "ems": null
    },
    {
      "latitude": 51.847881,
      "longitude": 20.25383,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482556,
      "ems": null
    },
    {
      "latitude": 51.848785,
      "longitude": 20.258047,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667482562,
      "ems": null
    },
    {
      "latitude": 51.849651,
      "longitude": 20.261917,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667482568,
      "ems": null
    },
    {
      "latitude": 51.850674,
      "longitude": 20.266113,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482574,
      "ems": null
    },
    {
      "latitude": 51.851715,
      "longitude": 20.270073,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482580,
      "ems": null
    },
    {
      "latitude": 51.852356,
      "longitude": 20.27215,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482583,
      "ems": null
    },
    {
      "latitude": 51.852955,
      "longitude": 20.2742,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482586,
      "ems": null
    },
    {
      "latitude": 51.8535,
      "longitude": 20.276085,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482589,
      "ems": null
    },
    {
      "latitude": 51.854095,
      "longitude": 20.278015,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482592,
      "ems": null
    },
    {
      "latitude": 51.854679,
      "longitude": 20.279922,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482595,
      "ems": null
    },
    {
      "latitude": 51.855835,
      "longitude": 20.284101,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482601,
      "ems": null
    },
    {
      "latitude": 51.856934,
      "longitude": 20.288036,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482607,
      "ems": null
    },
    {
      "latitude": 51.858074,
      "longitude": 20.291824,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482613,
      "ems": null
    },
    {
      "latitude": 51.85947,
      "longitude": 20.295792,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667482619,
      "ems": null
    },
    {
      "latitude": 51.860031,
      "longitude": 20.29747,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667482622,
      "ems": null
    },
    {
      "latitude": 51.860683,
      "longitude": 20.299301,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667482625,
      "ems": null
    },
    {
      "latitude": 51.861336,
      "longitude": 20.301132,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667482628,
      "ems": null
    },
    {
      "latitude": 51.862061,
      "longitude": 20.303032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667482631,
      "ems": null
    },
    {
      "latitude": 51.863289,
      "longitude": 20.306396,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667482637,
      "ems": null
    },
    {
      "latitude": 51.864899,
      "longitude": 20.310602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667482643,
      "ems": null
    },
    {
      "latitude": 51.86557,
      "longitude": 20.312271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667482646,
      "ems": null
    },
    {
      "latitude": 51.86705,
      "longitude": 20.316095,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667482652,
      "ems": null
    },
    {
      "latitude": 51.868515,
      "longitude": 20.319807,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667482658,
      "ems": null
    },
    {
      "latitude": 51.869946,
      "longitude": 20.323639,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667482664,
      "ems": null
    },
    {
      "latitude": 51.871307,
      "longitude": 20.327528,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667482670,
      "ems": null
    },
    {
      "latitude": 51.871994,
      "longitude": 20.329607,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482674,
      "ems": null
    },
    {
      "latitude": 51.872646,
      "longitude": 20.33165,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667482677,
      "ems": null
    },
    {
      "latitude": 51.87323,
      "longitude": 20.33354,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482680,
      "ems": null
    },
    {
      "latitude": 51.873764,
      "longitude": 20.335312,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482682,
      "ems": null
    },
    {
      "latitude": 51.87442,
      "longitude": 20.337326,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482685,
      "ems": null
    },
    {
      "latitude": 51.874973,
      "longitude": 20.339279,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482689,
      "ems": null
    },
    {
      "latitude": 51.875626,
      "longitude": 20.341415,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482692,
      "ems": null
    },
    {
      "latitude": 51.876846,
      "longitude": 20.345566,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482698,
      "ems": null
    },
    {
      "latitude": 51.877945,
      "longitude": 20.349426,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482703,
      "ems": null
    },
    {
      "latitude": 51.879181,
      "longitude": 20.353731,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482710,
      "ems": null
    },
    {
      "latitude": 51.88028,
      "longitude": 20.35759,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482715,
      "ems": null
    },
    {
      "latitude": 51.881516,
      "longitude": 20.361971,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482722,
      "ems": null
    },
    {
      "latitude": 51.882702,
      "longitude": 20.366058,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482728,
      "ems": null
    },
    {
      "latitude": 51.88385,
      "longitude": 20.370062,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482734,
      "ems": null
    },
    {
      "latitude": 51.884995,
      "longitude": 20.374294,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482740,
      "ems": null
    },
    {
      "latitude": 51.885773,
      "longitude": 20.377426,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482744,
      "ems": null
    },
    {
      "latitude": 51.887218,
      "longitude": 20.383072,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667482752,
      "ems": null
    },
    {
      "latitude": 51.888657,
      "longitude": 20.389067,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482760,
      "ems": null
    },
    {
      "latitude": 51.890076,
      "longitude": 20.394485,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482767,
      "ems": null
    },
    {
      "latitude": 51.891266,
      "longitude": 20.398939,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482773,
      "ems": null
    },
    {
      "latitude": 51.892548,
      "longitude": 20.403467,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482779,
      "ems": null
    },
    {
      "latitude": 51.893734,
      "longitude": 20.407969,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667482785,
      "ems": null
    },
    {
      "latitude": 51.894943,
      "longitude": 20.412441,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482791,
      "ems": null
    },
    {
      "latitude": 51.895981,
      "longitude": 20.416412,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667482796,
      "ems": null
    },
    {
      "latitude": 51.8974,
      "longitude": 20.421524,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482803,
      "ems": null
    },
    {
      "latitude": 51.89859,
      "longitude": 20.426102,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482809,
      "ems": null
    },
    {
      "latitude": 51.899834,
      "longitude": 20.43049,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482815,
      "ems": null
    },
    {
      "latitude": 51.901062,
      "longitude": 20.435104,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482821,
      "ems": null
    },
    {
      "latitude": 51.902302,
      "longitude": 20.439671,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482827,
      "ems": null
    },
    {
      "latitude": 51.90358,
      "longitude": 20.444031,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482833,
      "ems": null
    },
    {
      "latitude": 51.904999,
      "longitude": 20.448774,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482839,
      "ems": null
    },
    {
      "latitude": 51.906281,
      "longitude": 20.453262,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482845,
      "ems": null
    },
    {
      "latitude": 51.907562,
      "longitude": 20.458113,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482851,
      "ems": null
    },
    {
      "latitude": 51.90889,
      "longitude": 20.462799,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482857,
      "ems": null
    },
    {
      "latitude": 51.910213,
      "longitude": 20.467686,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667482863,
      "ems": null
    },
    {
      "latitude": 51.911518,
      "longitude": 20.472551,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667482869,
      "ems": null
    },
    {
      "latitude": 51.912827,
      "longitude": 20.477066,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667482876,
      "ems": null
    },
    {
      "latitude": 51.914063,
      "longitude": 20.481186,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482881,
      "ems": null
    },
    {
      "latitude": 51.915337,
      "longitude": 20.485422,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482888,
      "ems": null
    },
    {
      "latitude": 51.916637,
      "longitude": 20.489502,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667482893,
      "ems": null
    },
    {
      "latitude": 51.917908,
      "longitude": 20.493393,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667482899,
      "ems": null
    },
    {
      "latitude": 51.918549,
      "longitude": 20.494995,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667482902,
      "ems": null
    },
    {
      "latitude": 51.919525,
      "longitude": 20.497192,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667482906,
      "ems": null
    },
    {
      "latitude": 51.920177,
      "longitude": 20.498606,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667482908,
      "ems": null
    },
    {
      "latitude": 51.921204,
      "longitude": 20.500641,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667482911,
      "ems": null
    },
    {
      "latitude": 51.922211,
      "longitude": 20.502548,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667482915,
      "ems": null
    },
    {
      "latitude": 51.923126,
      "longitude": 20.504227,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667482918,
      "ems": null
    },
    {
      "latitude": 51.924225,
      "longitude": 20.506138,
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667482921,
      "ems": null
    },
    {
      "latitude": 51.92514,
      "longitude": 20.50766,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667482924,
      "ems": null
    },
    {
      "latitude": 51.925995,
      "longitude": 20.509121,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667482927,
      "ems": null
    },
    {
      "latitude": 51.926926,
      "longitude": 20.510769,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667482929,
      "ems": null
    },
    {
      "latitude": 51.927795,
      "longitude": 20.51239,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667482932,
      "ems": null
    },
    {
      "latitude": 51.929581,
      "longitude": 20.515976,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667482939,
      "ems": null
    },
    {
      "latitude": 51.931366,
      "longitude": 20.519333,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667482945,
      "ems": null
    },
    {
      "latitude": 51.933197,
      "longitude": 20.522385,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667482951,
      "ems": null
    },
    {
      "latitude": 51.935165,
      "longitude": 20.525522,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667482957,
      "ems": null
    },
    {
      "latitude": 51.937088,
      "longitude": 20.528564,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667482963,
      "ems": null
    },
    {
      "latitude": 51.937912,
      "longitude": 20.529938,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667482966,
      "ems": null
    },
    {
      "latitude": 51.938919,
      "longitude": 20.53154,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667482969,
      "ems": null
    },
    {
      "latitude": 51.940063,
      "longitude": 20.533295,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667482972,
      "ems": null
    },
    {
      "latitude": 51.941849,
      "longitude": 20.536118,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667482978,
      "ems": null
    },
    {
      "latitude": 51.943726,
      "longitude": 20.539246,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667482984,
      "ems": null
    },
    {
      "latitude": 51.945511,
      "longitude": 20.542526,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667482990,
      "ems": null
    },
    {
      "latitude": 51.946339,
      "longitude": 20.544277,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667482993,
      "ems": null
    },
    {
      "latitude": 51.947205,
      "longitude": 20.546188,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667482996,
      "ems": null
    },
    {
      "latitude": 51.947922,
      "longitude": 20.547729,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667482999,
      "ems": null
    },
    {
      "latitude": 51.948669,
      "longitude": 20.549545,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483002,
      "ems": null
    },
    {
      "latitude": 51.949448,
      "longitude": 20.5513,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483005,
      "ems": null
    },
    {
      "latitude": 51.950272,
      "longitude": 20.55336,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483008,
      "ems": null
    },
    {
      "latitude": 51.951004,
      "longitude": 20.555267,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483011,
      "ems": null
    },
    {
      "latitude": 51.951691,
      "longitude": 20.557068,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483014,
      "ems": null
    },
    {
      "latitude": 51.952423,
      "longitude": 20.559006,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483017,
      "ems": null
    },
    {
      "latitude": 51.95311,
      "longitude": 20.560837,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483020,
      "ems": null
    },
    {
      "latitude": 51.953796,
      "longitude": 20.562744,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483023,
      "ems": null
    },
    {
      "latitude": 51.955261,
      "longitude": 20.566483,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483029,
      "ems": null
    },
    {
      "latitude": 51.956814,
      "longitude": 20.570251,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483035,
      "ems": null
    },
    {
      "latitude": 51.958282,
      "longitude": 20.574036,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483041,
      "ems": null
    },
    {
      "latitude": 51.959747,
      "longitude": 20.577942,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483047,
      "ems": null
    },
    {
      "latitude": 51.961002,
      "longitude": 20.581631,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483053,
      "ems": null
    },
    {
      "latitude": 51.962494,
      "longitude": 20.585938,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667483059,
      "ems": null
    },
    {
      "latitude": 51.963749,
      "longitude": 20.589556,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483065,
      "ems": null
    },
    {
      "latitude": 51.965836,
      "longitude": 20.594635,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483074,
      "ems": null
    },
    {
      "latitude": 51.96698,
      "longitude": 20.597229,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483078,
      "ems": null
    },
    {
      "latitude": 51.967613,
      "longitude": 20.59866,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483080,
      "ems": null
    },
    {
      "latitude": 51.968491,
      "longitude": 20.600739,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483084,
      "ems": null
    },
    {
      "latitude": 51.968903,
      "longitude": 20.60173,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483086,
      "ems": null
    },
    {
      "latitude": 51.969055,
      "longitude": 20.602034,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483087,
      "ems": null
    },
    {
      "latitude": 51.969955,
      "longitude": 20.604095,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483090,
      "ems": null
    },
    {
      "latitude": 51.971512,
      "longitude": 20.607529,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483096,
      "ems": null
    },
    {
      "latitude": 51.973248,
      "longitude": 20.611607,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667483102,
      "ems": null
    },
    {
      "latitude": 51.974625,
      "longitude": 20.615158,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483108,
      "ems": null
    },
    {
      "latitude": 51.976044,
      "longitude": 20.618896,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483115,
      "ems": null
    },
    {
      "latitude": 51.97673,
      "longitude": 20.620728,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483118,
      "ems": null
    },
    {
      "latitude": 51.977249,
      "longitude": 20.622122,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483120,
      "ems": null
    },
    {
      "latitude": 51.978607,
      "longitude": 20.625916,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483126,
      "ems": null
    },
    {
      "latitude": 51.979343,
      "longitude": 20.628086,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483129,
      "ems": null
    },
    {
      "latitude": 51.980576,
      "longitude": 20.631638,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483135,
      "ems": null
    },
    {
      "latitude": 51.982315,
      "longitude": 20.636215,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483143,
      "ems": null
    },
    {
      "latitude": 51.983349,
      "longitude": 20.638601,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483147,
      "ems": null
    },
    {
      "latitude": 51.984184,
      "longitude": 20.640249,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667483149,
      "ems": null
    },
    {
      "latitude": 51.98521,
      "longitude": 20.641977,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667483153,
      "ems": null
    },
    {
      "latitude": 51.986187,
      "longitude": 20.643545,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667483156,
      "ems": null
    },
    {
      "latitude": 51.987213,
      "longitude": 20.645218,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667483159,
      "ems": null
    },
    {
      "latitude": 51.988235,
      "longitude": 20.646763,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667483162,
      "ems": null
    },
    {
      "latitude": 51.989182,
      "longitude": 20.648041,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7000",
      "timestamp": 1667483165,
      "ems": null
    },
    {
      "latitude": 51.99028,
      "longitude": 20.64949,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667483168,
      "ems": null
    },
    {
      "latitude": 51.991356,
      "longitude": 20.650766,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1667483171,
      "ems": null
    },
    {
      "latitude": 51.992477,
      "longitude": 20.652161,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1667483174,
      "ems": null
    },
    {
      "latitude": 51.993668,
      "longitude": 20.653534,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1667483177,
      "ems": null
    },
    {
      "latitude": 51.994892,
      "longitude": 20.654768,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667483180,
      "ems": null
    },
    {
      "latitude": 51.995964,
      "longitude": 20.655945,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667483183,
      "ems": null
    },
    {
      "latitude": 51.997082,
      "longitude": 20.6572,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667483186,
      "ems": null
    },
    {
      "latitude": 51.998199,
      "longitude": 20.65834,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667483189,
      "ems": null
    },
    {
      "latitude": 51.999454,
      "longitude": 20.659634,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1667483192,
      "ems": null
    },
    {
      "latitude": 52.000534,
      "longitude": 20.660553,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1667483195,
      "ems": null
    },
    {
      "latitude": 52.001877,
      "longitude": 20.661594,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1667483198,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 20.66246,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667483201,
      "ems": null
    },
    {
      "latitude": 52.004562,
      "longitude": 20.663376,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667483204,
      "ems": null
    },
    {
      "latitude": 52.005798,
      "longitude": 20.664139,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1667483207,
      "ems": null
    },
    {
      "latitude": 52.007088,
      "longitude": 20.664968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1667483210,
      "ems": null
    },
    {
      "latitude": 52.008682,
      "longitude": 20.665894,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1667483213,
      "ems": null
    },
    {
      "latitude": 52.009872,
      "longitude": 20.66658,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667483216,
      "ems": null
    },
    {
      "latitude": 52.01128,
      "longitude": 20.667324,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667483219,
      "ems": null
    },
    {
      "latitude": 52.012573,
      "longitude": 20.66803,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667483222,
      "ems": null
    },
    {
      "latitude": 52.013981,
      "longitude": 20.668814,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667483225,
      "ems": null
    },
    {
      "latitude": 52.01532,
      "longitude": 20.669556,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667483228,
      "ems": null
    },
    {
      "latitude": 52.018124,
      "longitude": 20.670933,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1667483234,
      "ems": null
    },
    {
      "latitude": 52.019611,
      "longitude": 20.67156,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1667483237,
      "ems": null
    },
    {
      "latitude": 52.020962,
      "longitude": 20.672031,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1667483240,
      "ems": null
    },
    {
      "latitude": 52.022598,
      "longitude": 20.672684,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1667483243,
      "ems": null
    },
    {
      "latitude": 52.025162,
      "longitude": 20.674057,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667483249,
      "ems": null
    },
    {
      "latitude": 52.026627,
      "longitude": 20.675201,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1667483252,
      "ems": null
    },
    {
      "latitude": 52.027664,
      "longitude": 20.676113,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1667483255,
      "ems": null
    },
    {
      "latitude": 52.028877,
      "longitude": 20.677212,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1667483258,
      "ems": null
    },
    {
      "latitude": 52.030228,
      "longitude": 20.678545,
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667483261,
      "ems": null
    },
    {
      "latitude": 52.03125,
      "longitude": 20.679626,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1667483264,
      "ems": null
    },
    {
      "latitude": 52.032394,
      "longitude": 20.681076,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667483267,
      "ems": null
    },
    {
      "latitude": 52.03344,
      "longitude": 20.682547,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667483270,
      "ems": null
    },
    {
      "latitude": 52.034363,
      "longitude": 20.683975,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667483273,
      "ems": null
    },
    {
      "latitude": 52.035347,
      "longitude": 20.685608,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667483276,
      "ems": null
    },
    {
      "latitude": 52.036148,
      "longitude": 20.687027,
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667483279,
      "ems": null
    },
    {
      "latitude": 52.037117,
      "longitude": 20.688747,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483283,
      "ems": null
    },
    {
      "latitude": 52.037842,
      "longitude": 20.690308,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483285,
      "ems": null
    },
    {
      "latitude": 52.038712,
      "longitude": 20.691986,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483288,
      "ems": null
    },
    {
      "latitude": 52.039581,
      "longitude": 20.693893,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667483291,
      "ems": null
    },
    {
      "latitude": 52.040314,
      "longitude": 20.695572,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667483294,
      "ems": null
    },
    {
      "latitude": 52.041119,
      "longitude": 20.697378,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483297,
      "ems": null
    },
    {
      "latitude": 52.042053,
      "longitude": 20.699539,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483301,
      "ems": null
    },
    {
      "latitude": 52.042793,
      "longitude": 20.701382,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483304,
      "ems": null
    },
    {
      "latitude": 52.043587,
      "longitude": 20.703108,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667483307,
      "ems": null
    },
    {
      "latitude": 52.044331,
      "longitude": 20.704678,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483309,
      "ems": null
    },
    {
      "latitude": 52.045868,
      "longitude": 20.707815,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483315,
      "ems": null
    },
    {
      "latitude": 52.047592,
      "longitude": 20.711288,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483322,
      "ems": null
    },
    {
      "latitude": 52.049149,
      "longitude": 20.714569,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483328,
      "ems": null
    },
    {
      "latitude": 52.050663,
      "longitude": 20.717783,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667483334,
      "ems": null
    },
    {
      "latitude": 52.052124,
      "longitude": 20.72113,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483340,
      "ems": null
    },
    {
      "latitude": 52.052803,
      "longitude": 20.722805,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667483342,
      "ems": null
    },
    {
      "latitude": 52.053452,
      "longitude": 20.724411,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483346,
      "ems": null
    },
    {
      "latitude": 52.054153,
      "longitude": 20.726414,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483349,
      "ems": null
    },
    {
      "latitude": 52.054714,
      "longitude": 20.727905,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483351,
      "ems": null
    },
    {
      "latitude": 52.055412,
      "longitude": 20.729946,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483355,
      "ems": null
    },
    {
      "latitude": 52.055923,
      "longitude": 20.731516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667483358,
      "ems": null
    },
    {
      "latitude": 52.056473,
      "longitude": 20.733109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667483361,
      "ems": null
    },
    {
      "latitude": 52.057251,
      "longitude": 20.735397,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667483364,
      "ems": null
    },
    {
      "latitude": 52.057755,
      "longitude": 20.736923,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667483366,
      "ems": null
    },
    {
      "latitude": 52.058395,
      "longitude": 20.738983,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667483370,
      "ems": null
    },
    {
      "latitude": 52.05986,
      "longitude": 20.743561,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667483377,
      "ems": null
    },
    {
      "latitude": 52.061275,
      "longitude": 20.74823,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667483384,
      "ems": null
    },
    {
      "latitude": 52.062698,
      "longitude": 20.752335,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483391,
      "ems": null
    },
    {
      "latitude": 52.063477,
      "longitude": 20.754395,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483395,
      "ems": null
    },
    {
      "latitude": 52.06472,
      "longitude": 20.757412,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667483399,
      "ems": null
    },
    {
      "latitude": 52.065582,
      "longitude": 20.759125,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483403,
      "ems": null
    },
    {
      "latitude": 52.066589,
      "longitude": 20.761261,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483407,
      "ems": null
    },
    {
      "latitude": 52.067688,
      "longitude": 20.763397,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483411,
      "ems": null
    },
    {
      "latitude": 52.06868,
      "longitude": 20.765415,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483414,
      "ems": null
    },
    {
      "latitude": 52.069382,
      "longitude": 20.766754,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667483417,
      "ems": null
    },
    {
      "latitude": 52.070309,
      "longitude": 20.768633,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483420,
      "ems": null
    },
    {
      "latitude": 52.071167,
      "longitude": 20.770264,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483423,
      "ems": null
    },
    {
      "latitude": 52.071938,
      "longitude": 20.771772,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483426,
      "ems": null
    },
    {
      "latitude": 52.073547,
      "longitude": 20.774994,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483432,
      "ems": null
    },
    {
      "latitude": 52.07515,
      "longitude": 20.778128,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483438,
      "ems": null
    },
    {
      "latitude": 52.076637,
      "longitude": 20.781033,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667483444,
      "ems": null
    },
    {
      "latitude": 52.078594,
      "longitude": 20.784719,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667483450,
      "ems": null
    },
    {
      "latitude": 52.080414,
      "longitude": 20.787964,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667483457,
      "ems": null
    },
    {
      "latitude": 52.096481,
      "longitude": 20.815887,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667483508,
      "ems": null
    },
    {
      "latitude": 52.098564,
      "longitude": 20.819641,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667483514,
      "ems": null
    },
    {
      "latitude": 52.100601,
      "longitude": 20.823746,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483520,
      "ems": null
    },
    {
      "latitude": 52.10257,
      "longitude": 20.827942,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667483527,
      "ems": null
    },
    {
      "latitude": 52.104355,
      "longitude": 20.831833,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483533,
      "ems": null
    },
    {
      "latitude": 52.105919,
      "longitude": 20.835493,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483538,
      "ems": null
    },
    {
      "latitude": 52.10685,
      "longitude": 20.83769,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483541,
      "ems": null
    },
    {
      "latitude": 52.107651,
      "longitude": 20.839615,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483544,
      "ems": null
    },
    {
      "latitude": 52.108154,
      "longitude": 20.840836,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667483547,
      "ems": null
    },
    {
      "latitude": 52.110294,
      "longitude": 20.845852,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667483555,
      "ems": null
    },
    {
      "latitude": 52.112869,
      "longitude": 20.851288,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483563,
      "ems": null
    },
    {
      "latitude": 52.114471,
      "longitude": 20.854416,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483568,
      "ems": null
    },
    {
      "latitude": 52.115662,
      "longitude": 20.856857,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483572,
      "ems": null
    },
    {
      "latitude": 52.116535,
      "longitude": 20.858564,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483576,
      "ems": null
    },
    {
      "latitude": 52.11779,
      "longitude": 20.860996,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483580,
      "ems": null
    },
    {
      "latitude": 52.119698,
      "longitude": 20.864841,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483588,
      "ems": null
    },
    {
      "latitude": 52.121658,
      "longitude": 20.868683,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483594,
      "ems": null
    },
    {
      "latitude": 52.123123,
      "longitude": 20.871658,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667483600,
      "ems": null
    },
    {
      "latitude": 52.124775,
      "longitude": 20.874966,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483606,
      "ems": null
    },
    {
      "latitude": 52.126125,
      "longitude": 20.877554,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667483611,
      "ems": null
    },
    {
      "latitude": 52.127838,
      "longitude": 20.88089,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483617,
      "ems": null
    },
    {
      "latitude": 52.129753,
      "longitude": 20.88446,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667483626,
      "ems": null
    },
    {
      "latitude": 52.131432,
      "longitude": 20.887442,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667483631,
      "ems": null
    },
    {
      "latitude": 52.133572,
      "longitude": 20.89113,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667483639,
      "ems": null
    },
    {
      "latitude": 52.135666,
      "longitude": 20.895054,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667483647,
      "ems": null
    },
    {
      "latitude": 52.137726,
      "longitude": 20.898743,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667483655,
      "ems": null
    },
    {
      "latitude": 52.138687,
      "longitude": 20.900955,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483659,
      "ems": null
    },
    {
      "latitude": 52.139511,
      "longitude": 20.903091,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667483663,
      "ems": null
    },
    {
      "latitude": 52.140198,
      "longitude": 20.904846,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483666,
      "ems": null
    },
    {
      "latitude": 52.140747,
      "longitude": 20.906372,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483669,
      "ems": null
    },
    {
      "latitude": 52.141254,
      "longitude": 20.907766,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483671,
      "ems": null
    },
    {
      "latitude": 52.141953,
      "longitude": 20.909651,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667483675,
      "ems": null
    },
    {
      "latitude": 52.142487,
      "longitude": 20.911102,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667483678,
      "ems": null
    },
    {
      "latitude": 52.143208,
      "longitude": 20.913181,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667483681,
      "ems": null
    },
    {
      "latitude": 52.144371,
      "longitude": 20.916792,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667483687,
      "ems": null
    },
    {
      "latitude": 52.144821,
      "longitude": 20.918427,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667483690,
      "ems": null
    },
    {
      "latitude": 52.14537,
      "longitude": 20.920486,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667483693,
      "ems": null
    },
    {
      "latitude": 52.145691,
      "longitude": 20.922394,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667483696,
      "ems": null
    },
    {
      "latitude": 52.145874,
      "longitude": 20.924149,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667483699,
      "ems": null
    },
    {
      "latitude": 52.145966,
      "longitude": 20.926208,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667483702,
      "ems": null
    },
    {
      "latitude": 52.146011,
      "longitude": 20.927887,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667483705,
      "ems": null
    },
    {
      "latitude": 52.146,
      "longitude": 20.929819,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667483708,
      "ems": null
    },
    {
      "latitude": 52.145863,
      "longitude": 20.932016,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1667483711,
      "ems": null
    },
    {
      "latitude": 52.145721,
      "longitude": 20.933506,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667483714,
      "ems": null
    },
    {
      "latitude": 52.145416,
      "longitude": 20.935745,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1667483717,
      "ems": null
    },
    {
      "latitude": 52.145187,
      "longitude": 20.937576,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667483720,
      "ems": null
    },
    {
      "latitude": 52.145004,
      "longitude": 20.938568,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667483722,
      "ems": null
    },
    {
      "latitude": 52.14473,
      "longitude": 20.940094,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1667483725,
      "ems": null
    },
    {
      "latitude": 52.144466,
      "longitude": 20.941668,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1667483727,
      "ems": null
    },
    {
      "latitude": 52.144001,
      "longitude": 20.944258,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1667483731,
      "ems": null
    },
    {
      "latitude": 52.143539,
      "longitude": 20.946655,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667483735,
      "ems": null
    },
    {
      "latitude": 52.143021,
      "longitude": 20.948965,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1667483739,
      "ems": null
    },
    {
      "latitude": 52.142303,
      "longitude": 20.951614,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1667483743,
      "ems": null
    },
    {
      "latitude": 52.141571,
      "longitude": 20.954056,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1667483747,
      "ems": null
    },
    {
      "latitude": 52.140701,
      "longitude": 20.956421,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1667483751,
      "ems": null
    },
    {
      "latitude": 52.139877,
      "longitude": 20.958481,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "timestamp": 1667483755,
      "ems": null
    },
    {
      "latitude": 52.138741,
      "longitude": 20.961208,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1667483759,
      "ems": null
    },
    {
      "latitude": 52.137993,
      "longitude": 20.963169,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1667483763,
      "ems": null
    },
    {
      "latitude": 52.136765,
      "longitude": 20.968323,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667483771,
      "ems": null
    },
    {
      "latitude": 52.13641,
      "longitude": 20.971096,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667483775,
      "ems": null
    },
    {
      "latitude": 52.136364,
      "longitude": 20.973921,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667483779,
      "ems": null
    },
    {
      "latitude": 52.136719,
      "longitude": 20.977325,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667483783,
      "ems": null
    },
    {
      "latitude": 52.137131,
      "longitude": 20.979233,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667483786,
      "ems": null
    },
    {
      "latitude": 52.137817,
      "longitude": 20.98114,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667483789,
      "ems": null
    },
    {
      "latitude": 52.138645,
      "longitude": 20.982788,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667483793,
      "ems": null
    },
    {
      "latitude": 52.139786,
      "longitude": 20.984268,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667483796,
      "ems": null
    },
    {
      "latitude": 52.141068,
      "longitude": 20.98526,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1667483799,
      "ems": null
    },
    {
      "latitude": 52.142651,
      "longitude": 20.985769,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1667483802,
      "ems": null
    },
    {
      "latitude": 52.144138,
      "longitude": 20.985613,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1667483805,
      "ems": null
    },
    {
      "latitude": 52.145302,
      "longitude": 20.984907,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667483807,
      "ems": null
    },
    {
      "latitude": 52.147163,
      "longitude": 20.983259,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667483812,
      "ems": null
    },
    {
      "latitude": 52.149166,
      "longitude": 20.981533,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1667483816,
      "ems": null
    },
    {
      "latitude": 52.151642,
      "longitude": 20.979385,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1667483821,
      "ems": null
    },
    {
      "latitude": 52.153244,
      "longitude": 20.978012,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483825,
      "ems": null
    },
    {
      "latitude": 52.155266,
      "longitude": 20.976274,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483829,
      "ems": null
    },
    {
      "latitude": 52.156815,
      "longitude": 20.974884,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483835,
      "ems": null
    },
    {
      "latitude": 52.16217,
      "longitude": 20.970154,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483846,
      "ems": null
    },
    {
      "latitude": 52.165146,
      "longitude": 20.967636,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483854,
      "ems": null
    },
    {
      "latitude": 52.167755,
      "longitude": 20.965347,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667483862,
      "ems": null
    },
    {
      "latitude": 52.170914,
      "longitude": 20.962219,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667483870,
      "ems": null
    },
    {
      "latitude": 52.171783,
      "longitude": 20.960541,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667483874,
      "ems": null
    },
    {
      "latitude": 52.172241,
      "longitude": 20.95871,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667483877,
      "ems": null
    },
    {
      "latitude": 52.172424,
      "longitude": 20.95726,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667483880,
      "ems": null
    },
    {
      "latitude": 52.172379,
      "longitude": 20.955276,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667483883,
      "ems": null
    },
    {
      "latitude": 52.172241,
      "longitude": 20.953827,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667483886,
      "ems": null
    },
    {
      "latitude": 52.171921,
      "longitude": 20.952377,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667483889,
      "ems": null
    },
    {
      "latitude": 52.17128,
      "longitude": 20.950771,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667483892,
      "ems": null
    },
    {
      "latitude": 52.170547,
      "longitude": 20.949631,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1667483895,
      "ems": null
    },
    {
      "latitude": 52.169788,
      "longitude": 20.94873,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667483898,
      "ems": null
    },
    {
      "latitude": 52.168903,
      "longitude": 20.947866,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667483901,
      "ems": null
    },
    {
      "latitude": 52.168068,
      "longitude": 20.947004,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1667483904,
      "ems": null
    },
    {
      "latitude": 52.167088,
      "longitude": 20.945827,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1667483907,
      "ems": null
    },
    {
      "latitude": 52.166252,
      "longitude": 20.944729,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667483910,
      "ems": null
    },
    {
      "latitude": 52.165459,
      "longitude": 20.94363,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667483913,
      "ems": null
    },
    {
      "latitude": 52.164688,
      "longitude": 20.94223,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667483916,
      "ems": null
    },
    {
      "latitude": 52.164017,
      "longitude": 20.940805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667483919,
      "ems": null
    },
    {
      "latitude": 52.162575,
      "longitude": 20.937979,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667483925,
      "ems": null
    },
    {
      "latitude": 52.161877,
      "longitude": 20.936489,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667483928,
      "ems": null
    },
    {
      "latitude": 52.161224,
      "longitude": 20.935154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667483931,
      "ems": null
    },
    {
      "latitude": 52.160477,
      "longitude": 20.933533,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667483934,
      "ems": null
    },
    {
      "latitude": 52.159782,
      "longitude": 20.932095,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667483937,
      "ems": null
    },
    {
      "latitude": 52.159012,
      "longitude": 20.930634,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667483940,
      "ems": null
    },
    {
      "latitude": 52.158199,
      "longitude": 20.929033,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667483943,
      "ems": null
    },
    {
      "latitude": 52.156616,
      "longitude": 20.925974,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667483949,
      "ems": null
    },
    {
      "latitude": 52.155121,
      "longitude": 20.923004,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667483955,
      "ems": null
    },
    {
      "latitude": 52.153519,
      "longitude": 20.919952,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667483961,
      "ems": null
    },
    {
      "latitude": 52.151913,
      "longitude": 20.916714,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667483967,
      "ems": null
    },
    {
      "latitude": 52.150314,
      "longitude": 20.91362,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667483973,
      "ems": null
    },
    {
      "latitude": 52.148655,
      "longitude": 20.910593,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667483979,
      "ems": null
    },
    {
      "latitude": 52.147797,
      "longitude": 20.909119,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667483982,
      "ems": null
    },
    {
      "latitude": 52.146,
      "longitude": 20.906118,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667483988,
      "ems": null
    },
    {
      "latitude": 52.145256,
      "longitude": 20.904863,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667483991,
      "ems": null
    },
    {
      "latitude": 52.14418,
      "longitude": 20.903244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667483994,
      "ems": null
    },
    {
      "latitude": 52.143402,
      "longitude": 20.9021,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1667483997,
      "ems": null
    },
    {
      "latitude": 52.142368,
      "longitude": 20.900625,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1667484000,
      "ems": null
    },
    {
      "latitude": 52.141571,
      "longitude": 20.899506,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1667484003,
      "ems": null
    },
    {
      "latitude": 52.140518,
      "longitude": 20.897903,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1667484006,
      "ems": null
    },
    {
      "latitude": 52.139145,
      "longitude": 20.89592,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667484012,
      "ems": null
    },
    {
      "latitude": 52.136948,
      "longitude": 20.892487,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667484018,
      "ems": null
    },
    {
      "latitude": 52.134922,
      "longitude": 20.889011,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667484024,
      "ems": null
    },
    {
      "latitude": 52.133835,
      "longitude": 20.886993,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1667484028,
      "ems": null
    },
    {
      "latitude": 52.133057,
      "longitude": 20.885544,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667484031,
      "ems": null
    },
    {
      "latitude": 52.13205,
      "longitude": 20.88356,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667484034,
      "ems": null
    },
    {
      "latitude": 52.131317,
      "longitude": 20.882111,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667484037,
      "ems": null
    },
    {
      "latitude": 52.13036,
      "longitude": 20.880144,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667484040,
      "ems": null
    },
    {
      "latitude": 52.129616,
      "longitude": 20.878653,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667484043,
      "ems": null
    },
    {
      "latitude": 52.127754,
      "longitude": 20.875278,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667484049,
      "ems": null
    },
    {
      "latitude": 52.125889,
      "longitude": 20.872141,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667484055,
      "ems": null
    },
    {
      "latitude": 52.124222,
      "longitude": 20.869141,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667484061,
      "ems": null
    },
    {
      "latitude": 52.12254,
      "longitude": 20.865784,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667484067,
      "ems": null
    },
    {
      "latitude": 52.12077,
      "longitude": 20.862173,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667484073,
      "ems": null
    },
    {
      "latitude": 52.119965,
      "longitude": 20.860367,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667484076,
      "ems": null
    },
    {
      "latitude": 52.119186,
      "longitude": 20.858721,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667484079,
      "ems": null
    },
    {
      "latitude": 52.118397,
      "longitude": 20.856995,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667484082,
      "ems": null
    },
    {
      "latitude": 52.117977,
      "longitude": 20.855896,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667484084,
      "ems": null
    },
    {
      "latitude": 52.117233,
      "longitude": 20.854248,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667484087,
      "ems": null
    },
    {
      "latitude": 52.116211,
      "longitude": 20.851974,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667484090,
      "ems": null
    },
    {
      "latitude": 52.113834,
      "longitude": 20.846479,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667484100,
      "ems": null
    },
    {
      "latitude": 52.112484,
      "longitude": 20.843105,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667484106,
      "ems": null
    },
    {
      "latitude": 52.110855,
      "longitude": 20.839182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667484112,
      "ems": null
    },
    {
      "latitude": 52.109253,
      "longitude": 20.8358,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667484118,
      "ems": null
    },
    {
      "latitude": 52.107597,
      "longitude": 20.832668,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667484124,
      "ems": null
    },
    {
      "latitude": 52.106617,
      "longitude": 20.831333,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667484127,
      "ems": null
    },
    {
      "latitude": 52.10564,
      "longitude": 20.830235,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667484130,
      "ems": null
    },
    {
      "latitude": 52.104664,
      "longitude": 20.829529,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667484133,
      "ems": null
    },
    {
      "latitude": 52.103451,
      "longitude": 20.828979,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667484136,
      "ems": null
    },
    {
      "latitude": 52.101974,
      "longitude": 20.828705,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484139,
      "ems": null
    },
    {
      "latitude": 52.100891,
      "longitude": 20.828665,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484142,
      "ems": null
    },
    {
      "latitude": 52.099915,
      "longitude": 20.828705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484145,
      "ems": null
    },
    {
      "latitude": 52.098495,
      "longitude": 20.828781,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484148,
      "ems": null
    },
    {
      "latitude": 52.097305,
      "longitude": 20.828857,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484151,
      "ems": null
    },
    {
      "latitude": 52.096237,
      "longitude": 20.828901,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484154,
      "ems": null
    },
    {
      "latitude": 52.094795,
      "longitude": 20.829136,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667484158,
      "ems": null
    },
    {
      "latitude": 52.093643,
      "longitude": 20.829315,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484160,
      "ems": null
    },
    {
      "latitude": 52.092361,
      "longitude": 20.829544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667484164,
      "ems": null
    },
    {
      "latitude": 52.091354,
      "longitude": 20.829773,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667484166,
      "ems": null
    },
    {
      "latitude": 52.090279,
      "longitude": 20.83,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667484169,
      "ems": null
    },
    {
      "latitude": 52.088699,
      "longitude": 20.830307,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484173,
      "ems": null
    },
    {
      "latitude": 52.086319,
      "longitude": 20.83046,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484179,
      "ems": null
    },
    {
      "latitude": 52.083984,
      "longitude": 20.83046,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667484184,
      "ems": null
    },
    {
      "latitude": 52.082878,
      "longitude": 20.830393,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484187,
      "ems": null
    },
    {
      "latitude": 52.081619,
      "longitude": 20.830393,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484191,
      "ems": null
    },
    {
      "latitude": 52.08083,
      "longitude": 20.830393,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667484193,
      "ems": null
    },
    {
      "latitude": 52.079041,
      "longitude": 20.83046,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484197,
      "ems": null
    },
    {
      "latitude": 52.077942,
      "longitude": 20.830549,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484200,
      "ems": null
    },
    {
      "latitude": 52.074078,
      "longitude": 20.830706,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484207,
      "ems": null
    },
    {
      "latitude": 52.070938,
      "longitude": 20.830994,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667484215,
      "ems": null
    },
    {
      "latitude": 52.068584,
      "longitude": 20.831255,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667484219,
      "ems": null
    },
    {
      "latitude": 52.064941,
      "longitude": 20.831604,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484227,
      "ems": null
    },
    {
      "latitude": 52.061089,
      "longitude": 20.831961,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484235,
      "ems": null
    },
    {
      "latitude": 52.058807,
      "longitude": 20.832197,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484241,
      "ems": null
    },
    {
      "latitude": 52.056015,
      "longitude": 20.83252,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484247,
      "ems": null
    },
    {
      "latitude": 52.054012,
      "longitude": 20.832903,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1667484253,
      "ems": null
    },
    {
      "latitude": 52.051594,
      "longitude": 20.833296,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484259,
      "ems": null
    },
    {
      "latitude": 52.049332,
      "longitude": 20.83374,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667484265,
      "ems": null
    },
    {
      "latitude": 52.048286,
      "longitude": 20.834002,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484268,
      "ems": null
    },
    {
      "latitude": 52.047134,
      "longitude": 20.834351,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484271,
      "ems": null
    },
    {
      "latitude": 52.046005,
      "longitude": 20.834707,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484274,
      "ems": null
    },
    {
      "latitude": 52.04393,
      "longitude": 20.835342,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484280,
      "ems": null
    },
    {
      "latitude": 52.042889,
      "longitude": 20.835649,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484283,
      "ems": null
    },
    {
      "latitude": 52.041912,
      "longitude": 20.835964,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484286,
      "ems": null
    },
    {
      "latitude": 52.040981,
      "longitude": 20.836277,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1667484289,
      "ems": null
    },
    {
      "latitude": 52.039719,
      "longitude": 20.836716,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1667484292,
      "ems": null
    },
    {
      "latitude": 52.03775,
      "longitude": 20.837173,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1667484298,
      "ems": null
    },
    {
      "latitude": 52.036652,
      "longitude": 20.837376,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484301,
      "ems": null
    },
    {
      "latitude": 52.035534,
      "longitude": 20.837534,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667484304,
      "ems": null
    },
    {
      "latitude": 52.034462,
      "longitude": 20.83769,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484307,
      "ems": null
    },
    {
      "latitude": 52.033344,
      "longitude": 20.837769,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484310,
      "ems": null
    },
    {
      "latitude": 52.032181,
      "longitude": 20.837925,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484313,
      "ems": null
    },
    {
      "latitude": 52.031113,
      "longitude": 20.838013,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484316,
      "ems": null
    },
    {
      "latitude": 52.030087,
      "longitude": 20.838083,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484319,
      "ems": null
    },
    {
      "latitude": 52.02887,
      "longitude": 20.838089,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667484322,
      "ems": null
    },
    {
      "latitude": 52.027805,
      "longitude": 20.838161,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484325,
      "ems": null
    },
    {
      "latitude": 52.025711,
      "longitude": 20.838318,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484331,
      "ems": null
    },
    {
      "latitude": 52.023617,
      "longitude": 20.838474,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484337,
      "ems": null
    },
    {
      "latitude": 52.021408,
      "longitude": 20.838623,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484343,
      "ems": null
    },
    {
      "latitude": 52.020264,
      "longitude": 20.838547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667484346,
      "ems": null
    },
    {
      "latitude": 52.018539,
      "longitude": 20.838396,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667484352,
      "ems": null
    },
    {
      "latitude": 52.015869,
      "longitude": 20.838318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484358,
      "ems": null
    },
    {
      "latitude": 52.014771,
      "longitude": 20.838242,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667484361,
      "ems": null
    },
    {
      "latitude": 52.013607,
      "longitude": 20.83824,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667484364,
      "ems": null
    },
    {
      "latitude": 52.012619,
      "longitude": 20.838165,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667484367,
      "ems": null
    },
    {
      "latitude": 52.011383,
      "longitude": 20.838013,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484370,
      "ems": null
    },
    {
      "latitude": 52.009186,
      "longitude": 20.837847,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667484376,
      "ems": null
    },
    {
      "latitude": 52.008041,
      "longitude": 20.837936,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667484379,
      "ems": null
    },
    {
      "latitude": 52.006809,
      "longitude": 20.838083,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667484382,
      "ems": null
    },
    {
      "latitude": 52.005936,
      "longitude": 20.838165,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667484385,
      "ems": null
    },
    {
      "latitude": 52.00346,
      "longitude": 20.838318,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667484392,
      "ems": null
    },
    {
      "latitude": 52.001083,
      "longitude": 20.838552,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484398,
      "ems": null
    },
    {
      "latitude": 51.999985,
      "longitude": 20.838623,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484401,
      "ems": null
    },
    {
      "latitude": 51.998802,
      "longitude": 20.838711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484404,
      "ems": null
    },
    {
      "latitude": 51.996475,
      "longitude": 20.838867,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484410,
      "ems": null
    },
    {
      "latitude": 51.994194,
      "longitude": 20.838867,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667484416,
      "ems": null
    },
    {
      "latitude": 51.991791,
      "longitude": 20.838623,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484422,
      "ems": null
    },
    {
      "latitude": 51.990749,
      "longitude": 20.838552,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484425,
      "ems": null
    },
    {
      "latitude": 51.989494,
      "longitude": 20.838396,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484428,
      "ems": null
    },
    {
      "latitude": 51.988266,
      "longitude": 20.838242,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667484431,
      "ems": null
    },
    {
      "latitude": 51.987076,
      "longitude": 20.838013,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667484434,
      "ems": null
    },
    {
      "latitude": 51.985863,
      "longitude": 20.837847,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667484437,
      "ems": null
    },
    {
      "latitude": 51.984699,
      "longitude": 20.837534,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667484440,
      "ems": null
    },
    {
      "latitude": 51.983551,
      "longitude": 20.837326,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667484443,
      "ems": null
    },
    {
      "latitude": 51.981205,
      "longitude": 20.836905,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667484449,
      "ems": null
    },
    {
      "latitude": 51.97879,
      "longitude": 20.836716,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667484455,
      "ems": null
    },
    {
      "latitude": 51.977463,
      "longitude": 20.836945,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667484458,
      "ems": null
    },
    {
      "latitude": 51.976364,
      "longitude": 20.83725,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667484461,
      "ems": null
    },
    {
      "latitude": 51.975174,
      "longitude": 20.837708,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667484464,
      "ems": null
    },
    {
      "latitude": 51.974083,
      "longitude": 20.838318,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667484467,
      "ems": null
    },
    {
      "latitude": 51.972965,
      "longitude": 20.839102,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667484470,
      "ems": null
    },
    {
      "latitude": 51.971832,
      "longitude": 20.840149,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667484473,
      "ems": null
    },
    {
      "latitude": 51.970871,
      "longitude": 20.84137,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667484476,
      "ems": null
    },
    {
      "latitude": 51.969818,
      "longitude": 20.842896,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667484479,
      "ems": null
    },
    {
      "latitude": 51.969177,
      "longitude": 20.844269,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1667484482,
      "ems": null
    },
    {
      "latitude": 51.968445,
      "longitude": 20.846176,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1667484485,
      "ems": null
    },
    {
      "latitude": 51.967896,
      "longitude": 20.847931,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1667484488,
      "ems": null
    },
    {
      "latitude": 51.967426,
      "longitude": 20.849775,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1667484491,
      "ems": null
    },
    {
      "latitude": 51.966915,
      "longitude": 20.851816,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1667484494,
      "ems": null
    },
    {
      "latitude": 51.96645,
      "longitude": 20.853855,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1667484497,
      "ems": null
    },
    {
      "latitude": 51.966076,
      "longitude": 20.855581,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1667484500,
      "ems": null
    },
    {
      "latitude": 51.965611,
      "longitude": 20.857859,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667484503,
      "ems": null
    },
    {
      "latitude": 51.965195,
      "longitude": 20.859756,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667484506,
      "ems": null
    },
    {
      "latitude": 51.964821,
      "longitude": 20.861782,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1667484509,
      "ems": null
    },
    {
      "latitude": 51.964417,
      "longitude": 20.863876,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1667484512,
      "ems": null
    },
    {
      "latitude": 51.964027,
      "longitude": 20.86594,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1667484515,
      "ems": null
    },
    {
      "latitude": 51.963684,
      "longitude": 20.867691,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667484518,
      "ems": null
    },
    {
      "latitude": 51.96286,
      "longitude": 20.871658,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1667484523,
      "ems": null
    },
    {
      "latitude": 51.961979,
      "longitude": 20.876299,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1667484530,
      "ems": null
    },
    {
      "latitude": 51.961376,
      "longitude": 20.879751,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1667484536,
      "ems": null
    },
    {
      "latitude": 51.960434,
      "longitude": 20.885391,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667484542,
      "ems": null
    },
    {
      "latitude": 51.959839,
      "longitude": 20.889587,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1667484548,
      "ems": null
    },
    {
      "latitude": 51.959564,
      "longitude": 20.892181,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667484551,
      "ems": null
    },
    {
      "latitude": 51.959335,
      "longitude": 20.894394,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667484554,
      "ems": null
    },
    {
      "latitude": 51.959152,
      "longitude": 20.896454,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484557,
      "ems": null
    },
    {
      "latitude": 51.958969,
      "longitude": 20.898895,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484560,
      "ems": null
    },
    {
      "latitude": 51.958767,
      "longitude": 20.901175,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484563,
      "ems": null
    },
    {
      "latitude": 51.958603,
      "longitude": 20.903473,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1667484566,
      "ems": null
    },
    {
      "latitude": 51.95842,
      "longitude": 20.905914,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484570,
      "ems": null
    },
    {
      "latitude": 51.958282,
      "longitude": 20.907669,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484573,
      "ems": null
    },
    {
      "latitude": 51.957836,
      "longitude": 20.912632,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1667484579,
      "ems": null
    },
    {
      "latitude": 51.957371,
      "longitude": 20.917419,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667484586,
      "ems": null
    },
    {
      "latitude": 51.957184,
      "longitude": 20.921326,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667484591,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 20.923618,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667484594,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 20.925659,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667484597,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 20.926285,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1667484598,
      "ems": null
    },
    {
      "latitude": 51.957092,
      "longitude": 20.929033,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484603,
      "ems": null
    },
    {
      "latitude": 51.957092,
      "longitude": 20.931168,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484605,
      "ems": null
    },
    {
      "latitude": 51.957092,
      "longitude": 20.933193,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484608,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 20.935287,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667484611,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 20.937351,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667484614,
      "ems": null
    },
    {
      "latitude": 51.957233,
      "longitude": 20.939548,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667484617,
      "ems": null
    },
    {
      "latitude": 51.957279,
      "longitude": 20.941668,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667484620,
      "ems": null
    },
    {
      "latitude": 51.957367,
      "longitude": 20.943756,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667484624,
      "ems": null
    },
    {
      "latitude": 51.957413,
      "longitude": 20.9478,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667484629,
      "ems": null
    },
    {
      "latitude": 51.957413,
      "longitude": 20.953903,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484638,
      "ems": null
    },
    {
      "latitude": 51.957413,
      "longitude": 20.959167,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667484646,
      "ems": null
    },
    {
      "latitude": 51.957458,
      "longitude": 20.965195,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484654,
      "ems": null
    },
    {
      "latitude": 51.957458,
      "longitude": 20.969467,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667484660,
      "ems": null
    },
    {
      "latitude": 51.957466,
      "longitude": 20.973606,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667484666,
      "ems": null
    },
    {
      "latitude": 51.957558,
      "longitude": 20.977844,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667484672,
      "ems": null
    },
    {
      "latitude": 51.957649,
      "longitude": 20.981924,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667484678,
      "ems": null
    },
    {
      "latitude": 51.957779,
      "longitude": 20.986252,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667484684,
      "ems": null
    },
    {
      "latitude": 51.95787,
      "longitude": 20.990372,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667484690,
      "ems": null
    },
    {
      "latitude": 51.958008,
      "longitude": 20.994873,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667484696,
      "ems": null
    },
    {
      "latitude": 51.958115,
      "longitude": 20.999033,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667484702,
      "ems": null
    },
    {
      "latitude": 51.958237,
      "longitude": 21.003189,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667484708,
      "ems": null
    },
    {
      "latitude": 51.958397,
      "longitude": 21.007507,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667484714,
      "ems": null
    },
    {
      "latitude": 51.958649,
      "longitude": 21.012039,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667484720,
      "ems": null
    },
    {
      "latitude": 51.958908,
      "longitude": 21.015825,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667484726,
      "ems": null
    },
    {
      "latitude": 51.959232,
      "longitude": 21.020769,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667484732,
      "ems": null
    },
    {
      "latitude": 51.959564,
      "longitude": 21.025314,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667484738,
      "ems": null
    },
    {
      "latitude": 51.95993,
      "longitude": 21.029739,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667484744,
      "ems": null
    },
    {
      "latitude": 51.960251,
      "longitude": 21.03363,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667484750,
      "ems": null
    },
    {
      "latitude": 51.960724,
      "longitude": 21.038662,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667484756,
      "ems": null
    },
    {
      "latitude": 51.961029,
      "longitude": 21.042786,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667484762,
      "ems": null
    },
    {
      "latitude": 51.961468,
      "longitude": 21.047215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667484768,
      "ems": null
    },
    {
      "latitude": 51.961887,
      "longitude": 21.051374,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667484774,
      "ems": null
    },
    {
      "latitude": 51.962357,
      "longitude": 21.055984,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667484780,
      "ems": null
    },
    {
      "latitude": 51.96286,
      "longitude": 21.060257,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667484786,
      "ems": null
    },
    {
      "latitude": 51.963375,
      "longitude": 21.06448,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667484792,
      "ems": null
    },
    {
      "latitude": 51.963982,
      "longitude": 21.069345,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484798,
      "ems": null
    },
    {
      "latitude": 51.964645,
      "longitude": 21.074142,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667484804,
      "ems": null
    },
    {
      "latitude": 51.965012,
      "longitude": 21.076202,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484807,
      "ems": null
    },
    {
      "latitude": 51.965836,
      "longitude": 21.08139,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484813,
      "ems": null
    },
    {
      "latitude": 51.966496,
      "longitude": 21.085745,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484819,
      "ems": null
    },
    {
      "latitude": 51.967484,
      "longitude": 21.091385,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484826,
      "ems": null
    },
    {
      "latitude": 51.968262,
      "longitude": 21.096344,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484832,
      "ems": null
    },
    {
      "latitude": 51.968994,
      "longitude": 21.100616,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667484838,
      "ems": null
    },
    {
      "latitude": 51.969616,
      "longitude": 21.103323,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667484841,
      "ems": null
    },
    {
      "latitude": 51.969772,
      "longitude": 21.10405,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667484844,
      "ems": null
    },
    {
      "latitude": 51.970779,
      "longitude": 21.107941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667484847,
      "ems": null
    },
    {
      "latitude": 51.971191,
      "longitude": 21.109619,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667484850,
      "ems": null
    },
    {
      "latitude": 51.971786,
      "longitude": 21.112061,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667484853,
      "ems": null
    },
    {
      "latitude": 51.972408,
      "longitude": 21.115017,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667484856,
      "ems": null
    },
    {
      "latitude": 51.972931,
      "longitude": 21.117325,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667484859,
      "ems": null
    },
    {
      "latitude": 51.973892,
      "longitude": 21.12175,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667484865,
      "ems": null
    },
    {
      "latitude": 51.974361,
      "longitude": 21.124355,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667484868,
      "ems": null
    },
    {
      "latitude": 51.974689,
      "longitude": 21.126238,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667484871,
      "ems": null
    },
    {
      "latitude": 51.975037,
      "longitude": 21.128387,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667484874,
      "ems": null
    },
    {
      "latitude": 51.975449,
      "longitude": 21.130676,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667484877,
      "ems": null
    },
    {
      "latitude": 51.975853,
      "longitude": 21.132751,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667484880,
      "ems": null
    },
    {
      "latitude": 51.976227,
      "longitude": 21.135027,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484883,
      "ems": null
    },
    {
      "latitude": 51.976547,
      "longitude": 21.137085,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667484886,
      "ems": null
    },
    {
      "latitude": 51.977158,
      "longitude": 21.140676,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667484892,
      "ems": null
    },
    {
      "latitude": 51.977829,
      "longitude": 21.145325,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484898,
      "ems": null
    },
    {
      "latitude": 51.978516,
      "longitude": 21.149673,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484904,
      "ems": null
    },
    {
      "latitude": 51.978786,
      "longitude": 21.151821,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667484907,
      "ems": null
    },
    {
      "latitude": 51.979019,
      "longitude": 21.15394,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667484910,
      "ems": null
    },
    {
      "latitude": 51.979202,
      "longitude": 21.155777,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667484913,
      "ems": null
    },
    {
      "latitude": 51.979477,
      "longitude": 21.158295,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667484916,
      "ems": null
    },
    {
      "latitude": 51.980026,
      "longitude": 21.162491,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484922,
      "ems": null
    },
    {
      "latitude": 51.980648,
      "longitude": 21.166965,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484928,
      "ems": null
    },
    {
      "latitude": 51.981308,
      "longitude": 21.17157,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484934,
      "ems": null
    },
    {
      "latitude": 51.981903,
      "longitude": 21.175442,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484940,
      "ems": null
    },
    {
      "latitude": 51.982185,
      "longitude": 21.177324,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667484943,
      "ems": null
    },
    {
      "latitude": 51.982975,
      "longitude": 21.182268,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667484949,
      "ems": null
    },
    {
      "latitude": 51.983505,
      "longitude": 21.186066,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484955,
      "ems": null
    },
    {
      "latitude": 51.9841,
      "longitude": 21.190491,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667484961,
      "ems": null
    },
    {
      "latitude": 51.984745,
      "longitude": 21.195217,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667484967,
      "ems": null
    },
    {
      "latitude": 51.985474,
      "longitude": 21.199036,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667484973,
      "ems": null
    },
    {
      "latitude": 51.986023,
      "longitude": 21.201248,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667484976,
      "ems": null
    },
    {
      "latitude": 51.986755,
      "longitude": 21.203537,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667484979,
      "ems": null
    },
    {
      "latitude": 51.987396,
      "longitude": 21.205139,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667484982,
      "ems": null
    },
    {
      "latitude": 51.988266,
      "longitude": 21.20697,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667484985,
      "ems": null
    },
    {
      "latitude": 51.989227,
      "longitude": 21.208572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667484988,
      "ems": null
    },
    {
      "latitude": 51.990376,
      "longitude": 21.210283,
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667484991,
      "ems": null
    },
    {
      "latitude": 51.991447,
      "longitude": 21.211697,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1667484994,
      "ems": null
    },
    {
      "latitude": 51.992611,
      "longitude": 21.21303,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1667484997,
      "ems": null
    },
    {
      "latitude": 51.993668,
      "longitude": 21.214142,
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667485000,
      "ems": null
    },
    {
      "latitude": 51.995041,
      "longitude": 21.215515,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1667485003,
      "ems": null
    },
    {
      "latitude": 51.996334,
      "longitude": 21.216562,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1667485006,
      "ems": null
    },
    {
      "latitude": 51.996735,
      "longitude": 21.216888,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1667485008,
      "ems": null
    },
    {
      "latitude": 51.99884,
      "longitude": 21.218414,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1667485012,
      "ems": null
    },
    {
      "latitude": 52.000168,
      "longitude": 21.219254,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1667485015,
      "ems": null
    },
    {
      "latitude": 52.000854,
      "longitude": 21.219635,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1667485018,
      "ems": null
    },
    {
      "latitude": 52.002731,
      "longitude": 21.220398,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1667485021,
      "ems": null
    },
    {
      "latitude": 52.003971,
      "longitude": 21.22072,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1667485024,
      "ems": null
    },
    {
      "latitude": 52.005112,
      "longitude": 21.220932,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1667485026,
      "ems": null
    },
    {
      "latitude": 52.00695,
      "longitude": 21.221035,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485030,
      "ems": null
    },
    {
      "latitude": 52.008316,
      "longitude": 21.221008,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485033,
      "ems": null
    },
    {
      "latitude": 52.009602,
      "longitude": 21.221035,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485036,
      "ems": null
    },
    {
      "latitude": 52.010742,
      "longitude": 21.221085,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485039,
      "ems": null
    },
    {
      "latitude": 52.012348,
      "longitude": 21.221113,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485042,
      "ems": null
    },
    {
      "latitude": 52.013607,
      "longitude": 21.221191,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1667485045,
      "ems": null
    },
    {
      "latitude": 52.015144,
      "longitude": 21.221348,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1667485049,
      "ems": null
    },
    {
      "latitude": 52.017975,
      "longitude": 21.221619,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485055,
      "ems": null
    },
    {
      "latitude": 52.020401,
      "longitude": 21.221848,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1667485061,
      "ems": null
    },
    {
      "latitude": 52.023285,
      "longitude": 21.222229,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485067,
      "ems": null
    },
    {
      "latitude": 52.026363,
      "longitude": 21.222605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485073,
      "ems": null
    },
    {
      "latitude": 52.029343,
      "longitude": 21.222839,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1667485079,
      "ems": null
    },
    {
      "latitude": 52.032089,
      "longitude": 21.223154,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485085,
      "ems": null
    },
    {
      "latitude": 52.035049,
      "longitude": 21.223373,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485091,
      "ems": null
    },
    {
      "latitude": 52.037659,
      "longitude": 21.22345,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485097,
      "ems": null
    },
    {
      "latitude": 52.040497,
      "longitude": 21.223526,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485103,
      "ems": null
    },
    {
      "latitude": 52.043335,
      "longitude": 21.223755,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485109,
      "ems": null
    },
    {
      "latitude": 52.046005,
      "longitude": 21.224016,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1667485115,
      "ems": null
    },
    {
      "latitude": 52.048569,
      "longitude": 21.224253,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667485121,
      "ems": null
    },
    {
      "latitude": 52.0513,
      "longitude": 21.224442,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1667485127,
      "ems": null
    },
    {
      "latitude": 52.054153,
      "longitude": 21.224566,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485133,
      "ems": null
    },
    {
      "latitude": 52.056713,
      "longitude": 21.224487,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1667485139,
      "ems": null
    },
    {
      "latitude": 52.05954,
      "longitude": 21.224365,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1667485145,
      "ems": null
    },
    {
      "latitude": 52.060684,
      "longitude": 21.224213,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1667485147,
      "ems": null
    },
    {
      "latitude": 52.061554,
      "longitude": 21.224173,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1667485151,
      "ems": null
    },
    {
      "latitude": 52.063156,
      "longitude": 21.223984,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1667485153,
      "ems": null
    },
    {
      "latitude": 52.064301,
      "longitude": 21.223782,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1667485157,
      "ems": null
    },
    {
      "latitude": 52.066071,
      "longitude": 21.223467,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1667485160,
      "ems": null
    },
    {
      "latitude": 52.068832,
      "longitude": 21.223145,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1667485165,
      "ems": null
    },
    {
      "latitude": 52.071671,
      "longitude": 21.222763,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1667485171,
      "ems": null
    },
    {
      "latitude": 52.074543,
      "longitude": 21.222446,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1667485178,
      "ems": null
    },
    {
      "latitude": 52.077621,
      "longitude": 21.222076,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1667485184,
      "ems": null
    },
    {
      "latitude": 52.080414,
      "longitude": 21.221695,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1667485190,
      "ems": null
    },
    {
      "latitude": 52.083061,
      "longitude": 21.221426,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1667485196,
      "ems": null
    },
    {
      "latitude": 52.086273,
      "longitude": 21.22127,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1667485202,
      "ems": null
    },
    {
      "latitude": 52.089161,
      "longitude": 21.221113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1667485208,
      "ems": null
    },
    {
      "latitude": 52.092094,
      "longitude": 21.221113,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1667485214,
      "ems": null
    },
    {
      "latitude": 52.09346,
      "longitude": 21.221085,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667485216,
      "ems": null
    },
    {
      "latitude": 52.096436,
      "longitude": 21.220779,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1667485223,
      "ems": null
    },
    {
      "latitude": 52.097633,
      "longitude": 21.220486,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1667485226,
      "ems": null
    },
    {
      "latitude": 52.099091,
      "longitude": 21.21994,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667485228,
      "ems": null
    },
    {
      "latitude": 52.100281,
      "longitude": 21.219406,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667485231,
      "ems": null
    },
    {
      "latitude": 52.10173,
      "longitude": 21.218523,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667485235,
      "ems": null
    },
    {
      "latitude": 52.10321,
      "longitude": 21.217422,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1667485238,
      "ems": null
    },
    {
      "latitude": 52.104401,
      "longitude": 21.216431,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485241,
      "ems": null
    },
    {
      "latitude": 52.105499,
      "longitude": 21.215363,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485244,
      "ems": null
    },
    {
      "latitude": 52.106598,
      "longitude": 21.214142,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485247,
      "ems": null
    },
    {
      "latitude": 52.107788,
      "longitude": 21.212845,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485250,
      "ems": null
    },
    {
      "latitude": 52.108711,
      "longitude": 21.211775,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485252,
      "ems": null
    },
    {
      "latitude": 52.110062,
      "longitude": 21.210283,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485256,
      "ems": null
    },
    {
      "latitude": 52.110714,
      "longitude": 21.209499,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485259,
      "ems": null
    },
    {
      "latitude": 52.112274,
      "longitude": 21.207809,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485262,
      "ems": null
    },
    {
      "latitude": 52.113235,
      "longitude": 21.206741,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485265,
      "ems": null
    },
    {
      "latitude": 52.114624,
      "longitude": 21.205183,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485268,
      "ems": null
    },
    {
      "latitude": 52.115742,
      "longitude": 21.203928,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485271,
      "ems": null
    },
    {
      "latitude": 52.117905,
      "longitude": 21.201324,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485277,
      "ems": null
    },
    {
      "latitude": 52.118954,
      "longitude": 21.199924,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667485280,
      "ems": null
    },
    {
      "latitude": 52.121017,
      "longitude": 21.197281,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485286,
      "ems": null
    },
    {
      "latitude": 52.123005,
      "longitude": 21.194824,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485292,
      "ems": null
    },
    {
      "latitude": 52.125286,
      "longitude": 21.192312,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485298,
      "ems": null
    },
    {
      "latitude": 52.127426,
      "longitude": 21.18988,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485304,
      "ems": null
    },
    {
      "latitude": 52.12944,
      "longitude": 21.187515,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485309,
      "ems": null
    },
    {
      "latitude": 52.131897,
      "longitude": 21.18478,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485315,
      "ems": null
    },
    {
      "latitude": 52.134224,
      "longitude": 21.18219,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485322,
      "ems": null
    },
    {
      "latitude": 52.136364,
      "longitude": 21.179836,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485328,
      "ems": null
    },
    {
      "latitude": 52.138599,
      "longitude": 21.177324,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485334,
      "ems": null
    },
    {
      "latitude": 52.140926,
      "longitude": 21.174814,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485340,
      "ems": null
    },
    {
      "latitude": 52.14307,
      "longitude": 21.172537,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485345,
      "ems": null
    },
    {
      "latitude": 52.145187,
      "longitude": 21.17012,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485352,
      "ems": null
    },
    {
      "latitude": 52.147446,
      "longitude": 21.167437,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485358,
      "ems": null
    },
    {
      "latitude": 52.149628,
      "longitude": 21.16478,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485364,
      "ems": null
    },
    {
      "latitude": 52.151688,
      "longitude": 21.162415,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485370,
      "ems": null
    },
    {
      "latitude": 52.153728,
      "longitude": 21.160061,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485376,
      "ems": null
    },
    {
      "latitude": 52.156403,
      "longitude": 21.15715,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485382,
      "ems": null
    },
    {
      "latitude": 52.1586,
      "longitude": 21.154709,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485388,
      "ems": null
    },
    {
      "latitude": 52.160851,
      "longitude": 21.152056,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485394,
      "ems": null
    },
    {
      "latitude": 52.163132,
      "longitude": 21.149546,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485400,
      "ems": null
    },
    {
      "latitude": 52.165321,
      "longitude": 21.146955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485406,
      "ems": null
    },
    {
      "latitude": 52.167526,
      "longitude": 21.144333,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485413,
      "ems": null
    },
    {
      "latitude": 52.169697,
      "longitude": 21.141933,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485419,
      "ems": null
    },
    {
      "latitude": 52.172058,
      "longitude": 21.13945,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485425,
      "ems": null
    },
    {
      "latitude": 52.174301,
      "longitude": 21.137161,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485431,
      "ems": null
    },
    {
      "latitude": 52.17572,
      "longitude": 21.135788,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667485434,
      "ems": null
    },
    {
      "latitude": 52.178284,
      "longitude": 21.133118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485440,
      "ems": null
    },
    {
      "latitude": 52.180637,
      "longitude": 21.130554,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485446,
      "ems": null
    },
    {
      "latitude": 52.183056,
      "longitude": 21.128042,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485452,
      "ems": null
    },
    {
      "latitude": 52.184784,
      "longitude": 21.126175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485458,
      "ems": null
    },
    {
      "latitude": 52.187431,
      "longitude": 21.123257,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485463,
      "ems": null
    },
    {
      "latitude": 52.19014,
      "longitude": 21.120071,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485470,
      "ems": null
    },
    {
      "latitude": 52.191948,
      "longitude": 21.117764,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485476,
      "ems": null
    },
    {
      "latitude": 52.194603,
      "longitude": 21.114624,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485481,
      "ems": null
    },
    {
      "latitude": 52.19693,
      "longitude": 21.111877,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485488,
      "ems": null
    },
    {
      "latitude": 52.199211,
      "longitude": 21.109365,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485494,
      "ems": null
    },
    {
      "latitude": 52.201397,
      "longitude": 21.106855,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485500,
      "ems": null
    },
    {
      "latitude": 52.203678,
      "longitude": 21.104031,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485506,
      "ems": null
    },
    {
      "latitude": 52.205841,
      "longitude": 21.101456,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485512,
      "ems": null
    },
    {
      "latitude": 52.208038,
      "longitude": 21.098709,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667485518,
      "ems": null
    },
    {
      "latitude": 52.209171,
      "longitude": 21.097202,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667485521,
      "ems": null
    },
    {
      "latitude": 52.210144,
      "longitude": 21.095734,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667485524,
      "ems": null
    },
    {
      "latitude": 52.211105,
      "longitude": 21.094284,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667485527,
      "ems": null
    },
    {
      "latitude": 52.213394,
      "longitude": 21.091232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485533,
      "ems": null
    },
    {
      "latitude": 52.215729,
      "longitude": 21.088181,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667485539,
      "ems": null
    },
    {
      "latitude": 52.217831,
      "longitude": 21.085196,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667485545,
      "ems": null
    },
    {
      "latitude": 52.220112,
      "longitude": 21.082058,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667485551,
      "ems": null
    },
    {
      "latitude": 52.222458,
      "longitude": 21.078949,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667485557,
      "ems": null
    },
    {
      "latitude": 52.224655,
      "longitude": 21.076126,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485563,
      "ems": null
    },
    {
      "latitude": 52.22699,
      "longitude": 21.073151,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667485569,
      "ems": null
    },
    {
      "latitude": 52.229279,
      "longitude": 21.070328,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667485575,
      "ems": null
    },
    {
      "latitude": 52.230446,
      "longitude": 21.068953,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485578,
      "ems": null
    },
    {
      "latitude": 52.23262,
      "longitude": 21.066437,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485584,
      "ems": null
    },
    {
      "latitude": 52.234909,
      "longitude": 21.063843,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485590,
      "ems": null
    },
    {
      "latitude": 52.237289,
      "longitude": 21.061172,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485596,
      "ems": null
    },
    {
      "latitude": 52.238361,
      "longitude": 21.060085,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485599,
      "ems": null
    },
    {
      "latitude": 52.239487,
      "longitude": 21.058884,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485602,
      "ems": null
    },
    {
      "latitude": 52.24176,
      "longitude": 21.056475,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485608,
      "ems": null
    },
    {
      "latitude": 52.243927,
      "longitude": 21.054153,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667485614,
      "ems": null
    },
    {
      "latitude": 52.245941,
      "longitude": 21.051941,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485620,
      "ems": null
    },
    {
      "latitude": 52.247997,
      "longitude": 21.04949,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485626,
      "ems": null
    },
    {
      "latitude": 52.250015,
      "longitude": 21.047134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485632,
      "ems": null
    },
    {
      "latitude": 52.252048,
      "longitude": 21.044939,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667485638,
      "ems": null
    },
    {
      "latitude": 52.25428,
      "longitude": 21.042742,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667485644,
      "ems": null
    },
    {
      "latitude": 52.256424,
      "longitude": 21.040623,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485650,
      "ems": null
    },
    {
      "latitude": 52.257401,
      "longitude": 21.039761,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485653,
      "ems": null
    },
    {
      "latitude": 52.258518,
      "longitude": 21.038662,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667485656,
      "ems": null
    },
    {
      "latitude": 52.259495,
      "longitude": 21.037798,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667485659,
      "ems": null
    },
    {
      "latitude": 52.26173,
      "longitude": 21.035679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485665,
      "ems": null
    },
    {
      "latitude": 52.263966,
      "longitude": 21.03364,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667485671,
      "ems": null
    },
    {
      "latitude": 52.266129,
      "longitude": 21.031647,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667485677,
      "ems": null
    },
    {
      "latitude": 52.268417,
      "longitude": 21.029663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667485683,
      "ems": null
    },
    {
      "latitude": 52.270622,
      "longitude": 21.027517,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667485689,
      "ems": null
    },
    {
      "latitude": 52.272762,
      "longitude": 21.0254,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667485695,
      "ems": null
    },
    {
      "latitude": 52.274906,
      "longitude": 21.023123,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667485701,
      "ems": null
    },
    {
      "latitude": 52.27602,
      "longitude": 21.021868,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667485704,
      "ems": null
    },
    {
      "latitude": 52.277,
      "longitude": 21.020613,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667485707,
      "ems": null
    },
    {
      "latitude": 52.278214,
      "longitude": 21.018906,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667485710,
      "ems": null
    },
    {
      "latitude": 52.279221,
      "longitude": 21.017456,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667485713,
      "ems": null
    },
    {
      "latitude": 52.280212,
      "longitude": 21.015903,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667485716,
      "ems": null
    },
    {
      "latitude": 52.281281,
      "longitude": 21.014023,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667485719,
      "ems": null
    },
    {
      "latitude": 52.282211,
      "longitude": 21.012295,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667485722,
      "ems": null
    },
    {
      "latitude": 52.28302,
      "longitude": 21.010666,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1667485725,
      "ems": null
    },
    {
      "latitude": 52.28389,
      "longitude": 21.008606,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667485728,
      "ems": null
    },
    {
      "latitude": 52.284576,
      "longitude": 21.006546,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667485731,
      "ems": null
    },
    {
      "latitude": 52.285034,
      "longitude": 21.004333,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667485734,
      "ems": null
    },
    {
      "latitude": 52.285332,
      "longitude": 21.001858,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667485737,
      "ems": null
    },
    {
      "latitude": 52.2854,
      "longitude": 20.999832,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667485740,
      "ems": null
    },
    {
      "latitude": 52.285286,
      "longitude": 20.997305,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667485744,
      "ems": null
    },
    {
      "latitude": 52.285053,
      "longitude": 20.995108,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667485747,
      "ems": null
    },
    {
      "latitude": 52.284725,
      "longitude": 20.99299,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667485750,
      "ems": null
    },
    {
      "latitude": 52.284348,
      "longitude": 20.991135,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667485752,
      "ems": null
    },
    {
      "latitude": 52.28389,
      "longitude": 20.989151,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667485755,
      "ems": null
    },
    {
      "latitude": 52.283386,
      "longitude": 20.987244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667485758,
      "ems": null
    },
    {
      "latitude": 52.282791,
      "longitude": 20.985413,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667485762,
      "ems": null
    },
    {
      "latitude": 52.282211,
      "longitude": 20.983652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667485764,
      "ems": null
    },
    {
      "latitude": 52.281467,
      "longitude": 20.981689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667485768,
      "ems": null
    },
    {
      "latitude": 52.280823,
      "longitude": 20.980072,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667485771,
      "ems": null
    },
    {
      "latitude": 52.280136,
      "longitude": 20.978546,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667485773,
      "ems": null
    },
    {
      "latitude": 52.279358,
      "longitude": 20.977097,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667485776,
      "ems": null
    },
    {
      "latitude": 52.278584,
      "longitude": 20.975647,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667485779,
      "ems": null
    },
    {
      "latitude": 52.277885,
      "longitude": 20.974392,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667485782,
      "ems": null
    },
    {
      "latitude": 52.277046,
      "longitude": 20.973135,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667485786,
      "ems": null
    },
    {
      "latitude": 52.276245,
      "longitude": 20.971985,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1667485789,
      "ems": null
    },
    {
      "latitude": 52.275417,
      "longitude": 20.970781,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1667485792,
      "ems": null
    },
    {
      "latitude": 52.274532,
      "longitude": 20.969604,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1667485795,
      "ems": null
    },
    {
      "latitude": 52.273693,
      "longitude": 20.968506,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1667485798,
      "ems": null
    },
    {
      "latitude": 52.272766,
      "longitude": 20.967407,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1667485801,
      "ems": null
    },
    {
      "latitude": 52.271877,
      "longitude": 20.966387,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1667485804,
      "ems": null
    },
    {
      "latitude": 52.270935,
      "longitude": 20.965347,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667485807,
      "ems": null
    },
    {
      "latitude": 52.269516,
      "longitude": 20.963821,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667485811,
      "ems": null
    },
    {
      "latitude": 52.268806,
      "longitude": 20.963169,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667485814,
      "ems": null
    },
    {
      "latitude": 52.267593,
      "longitude": 20.96199,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667485817,
      "ems": null
    },
    {
      "latitude": 52.266525,
      "longitude": 20.960972,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1667485820,
      "ems": null
    },
    {
      "latitude": 52.264572,
      "longitude": 20.958481,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667485826,
      "ems": null
    },
    {
      "latitude": 52.263733,
      "longitude": 20.957048,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667485829,
      "ems": null
    },
    {
      "latitude": 52.263153,
      "longitude": 20.955658,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667485832,
      "ems": null
    },
    {
      "latitude": 52.262558,
      "longitude": 20.953522,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667485835,
      "ems": null
    },
    {
      "latitude": 52.262287,
      "longitude": 20.951399,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667485838,
      "ems": null
    },
    {
      "latitude": 52.262337,
      "longitude": 20.949436,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667485841,
      "ems": null
    },
    {
      "latitude": 52.26252,
      "longitude": 20.948103,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667485844,
      "ems": null
    },
    {
      "latitude": 52.263081,
      "longitude": 20.945749,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667485847,
      "ems": null
    },
    {
      "latitude": 52.263592,
      "longitude": 20.944021,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667485850,
      "ems": null
    },
    {
      "latitude": 52.264023,
      "longitude": 20.942307,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1667485853,
      "ems": null
    },
    {
      "latitude": 52.264435,
      "longitude": 20.940628,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667485856,
      "ems": null
    },
    {
      "latitude": 52.264801,
      "longitude": 20.938721,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667485859,
      "ems": null
    },
    {
      "latitude": 52.265083,
      "longitude": 20.937038,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485862,
      "ems": null
    },
    {
      "latitude": 52.265305,
      "longitude": 20.935593,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485865,
      "ems": null
    },
    {
      "latitude": 52.265579,
      "longitude": 20.933533,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485868,
      "ems": null
    },
    {
      "latitude": 52.265762,
      "longitude": 20.932083,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485871,
      "ems": null
    },
    {
      "latitude": 52.266014,
      "longitude": 20.930447,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485874,
      "ems": null
    },
    {
      "latitude": 52.266174,
      "longitude": 20.929108,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667485877,
      "ems": null
    },
    {
      "latitude": 52.266357,
      "longitude": 20.927429,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667485880,
      "ems": null
    },
    {
      "latitude": 52.266571,
      "longitude": 20.925816,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1667485883,
      "ems": null
    },
    {
      "latitude": 52.266758,
      "longitude": 20.924168,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485886,
      "ems": null
    },
    {
      "latitude": 52.267136,
      "longitude": 20.921631,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485891,
      "ems": null
    },
    {
      "latitude": 52.26778,
      "longitude": 20.917185,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485900,
      "ems": null
    },
    {
      "latitude": 52.268433,
      "longitude": 20.912476,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485910,
      "ems": null
    },
    {
      "latitude": 52.268993,
      "longitude": 20.908474,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485919,
      "ems": null
    },
    {
      "latitude": 52.269691,
      "longitude": 20.903452,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485930,
      "ems": null
    },
    {
      "latitude": 52.270248,
      "longitude": 20.899763,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667485937,
      "ems": null
    },
    {
      "latitude": 52.270714,
      "longitude": 20.896702,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667485944,
      "ems": null
    },
    {
      "latitude": 52.271088,
      "longitude": 20.893877,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485949,
      "ems": null
    },
    {
      "latitude": 52.27153,
      "longitude": 20.891113,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667485955,
      "ems": null
    },
    {
      "latitude": 52.271988,
      "longitude": 20.88829,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667485961,
      "ems": null
    },
    {
      "latitude": 52.272343,
      "longitude": 20.885559,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1667485967,
      "ems": null
    },
    {
      "latitude": 52.272671,
      "longitude": 20.882263,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667485974,
      "ems": null
    },
    {
      "latitude": 52.272808,
      "longitude": 20.880537,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667485976,
      "ems": null
    },
    {
      "latitude": 52.273228,
      "longitude": 20.877634,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667485983,
      "ems": null
    },
    {
      "latitude": 52.273865,
      "longitude": 20.875702,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1667485986,
      "ems": null
    },
    {
      "latitude": 52.274506,
      "longitude": 20.874557,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667485989,
      "ems": null
    },
    {
      "latitude": 52.275604,
      "longitude": 20.873396,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1667485992,
      "ems": null
    },
    {
      "latitude": 52.276672,
      "longitude": 20.872768,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667485995,
      "ems": null
    },
    {
      "latitude": 52.277847,
      "longitude": 20.872574,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1667485998,
      "ems": null
    },
    {
      "latitude": 52.278908,
      "longitude": 20.87269,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1667486001,
      "ems": null
    },
    {
      "latitude": 52.280071,
      "longitude": 20.87324,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1667486004,
      "ems": null
    },
    {
      "latitude": 52.281097,
      "longitude": 20.873947,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1667486007,
      "ems": null
    },
    {
      "latitude": 52.282196,
      "longitude": 20.874863,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1667486010,
      "ems": null
    },
    {
      "latitude": 52.283051,
      "longitude": 20.87575,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1667486013,
      "ems": null
    },
    {
      "latitude": 52.283981,
      "longitude": 20.876999,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667486016,
      "ems": null
    },
    {
      "latitude": 52.284805,
      "longitude": 20.87822,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667486019,
      "ems": null
    },
    {
      "latitude": 52.28566,
      "longitude": 20.879438,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667486022,
      "ems": null
    },
    {
      "latitude": 52.286449,
      "longitude": 20.880615,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667486025,
      "ems": null
    },
    {
      "latitude": 52.287186,
      "longitude": 20.881805,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667486028,
      "ems": null
    },
    {
      "latitude": 52.287987,
      "longitude": 20.883127,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667486031,
      "ems": null
    },
    {
      "latitude": 52.288731,
      "longitude": 20.884226,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667486034,
      "ems": null
    },
    {
      "latitude": 52.289566,
      "longitude": 20.88562,
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667486037,
      "ems": null
    },
    {
      "latitude": 52.290314,
      "longitude": 20.886972,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667486040,
      "ems": null
    },
    {
      "latitude": 52.290871,
      "longitude": 20.887913,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667486042,
      "ems": null
    },
    {
      "latitude": 52.291626,
      "longitude": 20.88913,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667486045,
      "ems": null
    },
    {
      "latitude": 52.29245,
      "longitude": 20.890579,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667486048,
      "ems": null
    },
    {
      "latitude": 52.292908,
      "longitude": 20.891418,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667486051,
      "ems": null
    },
    {
      "latitude": 52.293945,
      "longitude": 20.89325,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667486054,
      "ems": null
    },
    {
      "latitude": 52.294647,
      "longitude": 20.894699,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667486057,
      "ems": null
    },
    {
      "latitude": 52.295334,
      "longitude": 20.896149,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667486060,
      "ems": null
    },
    {
      "latitude": 52.296021,
      "longitude": 20.897598,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667486063,
      "ems": null
    },
    {
      "latitude": 52.29739,
      "longitude": 20.900312,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667486069,
      "ems": null
    },
    {
      "latitude": 52.29808,
      "longitude": 20.901794,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667486072,
      "ems": null
    },
    {
      "latitude": 52.298492,
      "longitude": 20.90271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667486075,
      "ems": null
    },
    {
      "latitude": 52.299484,
      "longitude": 20.904785,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667486078,
      "ems": null
    },
    {
      "latitude": 52.300972,
      "longitude": 20.908081,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667486084,
      "ems": null
    },
    {
      "latitude": 52.302338,
      "longitude": 20.911102,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667486090,
      "ems": null
    },
    {
      "latitude": 52.302883,
      "longitude": 20.912319,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667486093,
      "ems": null
    },
    {
      "latitude": 52.303391,
      "longitude": 20.913773,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667486096,
      "ems": null
    },
    {
      "latitude": 52.304001,
      "longitude": 20.916006,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667486099,
      "ems": null
    },
    {
      "latitude": 52.30426,
      "longitude": 20.918274,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667486102,
      "ems": null
    },
    {
      "latitude": 52.304398,
      "longitude": 20.920639,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667486105,
      "ems": null
    },
    {
      "latitude": 52.304325,
      "longitude": 20.922991,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667486108,
      "ems": null
    },
    {
      "latitude": 52.304214,
      "longitude": 20.925293,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667486112,
      "ems": null
    },
    {
      "latitude": 52.304123,
      "longitude": 20.927505,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667486115,
      "ems": null
    },
    {
      "latitude": 52.30394,
      "longitude": 20.929489,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1667486118,
      "ems": null
    },
    {
      "latitude": 52.303757,
      "longitude": 20.931396,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667486121,
      "ems": null
    },
    {
      "latitude": 52.303482,
      "longitude": 20.933609,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1667486124,
      "ems": null
    },
    {
      "latitude": 52.303303,
      "longitude": 20.93539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667486127,
      "ems": null
    },
    {
      "latitude": 52.302975,
      "longitude": 20.937979,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667486130,
      "ems": null
    },
    {
      "latitude": 52.302704,
      "longitude": 20.94017,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667486133,
      "ems": null
    },
    {
      "latitude": 52.302429,
      "longitude": 20.942154,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667486136,
      "ems": null
    },
    {
      "latitude": 52.302109,
      "longitude": 20.94429,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667486139,
      "ems": null
    },
    {
      "latitude": 52.301834,
      "longitude": 20.946198,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667486142,
      "ems": null
    },
    {
      "latitude": 52.301533,
      "longitude": 20.948416,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1667486145,
      "ems": null
    },
    {
      "latitude": 52.301205,
      "longitude": 20.950771,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667486148,
      "ems": null
    },
    {
      "latitude": 52.300644,
      "longitude": 20.954971,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1667486154,
      "ems": null
    },
    {
      "latitude": 52.300137,
      "longitude": 20.959246,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1667486160,
      "ems": null
    },
    {
      "latitude": 52.299904,
      "longitude": 20.961758,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667486163,
      "ems": null
    },
    {
      "latitude": 52.299995,
      "longitude": 20.963955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667486166,
      "ems": null
    },
    {
      "latitude": 52.300369,
      "longitude": 20.965958,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667486169,
      "ems": null
    },
    {
      "latitude": 52.301159,
      "longitude": 20.967878,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667486172,
      "ems": null
    },
    {
      "latitude": 52.30172,
      "longitude": 20.96874,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667486175,
      "ems": null
    },
    {
      "latitude": 52.303303,
      "longitude": 20.970154,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667486178,
      "ems": null
    },
    {
      "latitude": 52.304535,
      "longitude": 20.970535,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1667486181,
      "ems": null
    },
    {
      "latitude": 52.305817,
      "longitude": 20.970459,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1667486184,
      "ems": null
    },
    {
      "latitude": 52.307117,
      "longitude": 20.969919,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1667486187,
      "ems": null
    },
    {
      "latitude": 52.308334,
      "longitude": 20.969086,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1667486190,
      "ems": null
    },
    {
      "latitude": 52.309444,
      "longitude": 20.968113,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667486193,
      "ems": null
    },
    {
      "latitude": 52.310577,
      "longitude": 20.967026,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667486196,
      "ems": null
    },
    {
      "latitude": 52.311634,
      "longitude": 20.965916,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667486199,
      "ems": null
    },
    {
      "latitude": 52.312798,
      "longitude": 20.964661,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667486202,
      "ems": null
    },
    {
      "latitude": 52.313824,
      "longitude": 20.963484,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667486205,
      "ems": null
    },
    {
      "latitude": 52.314926,
      "longitude": 20.962219,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667486208,
      "ems": null
    },
    {
      "latitude": 52.315842,
      "longitude": 20.961075,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667486211,
      "ems": null
    },
    {
      "latitude": 52.316849,
      "longitude": 20.959778,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486214,
      "ems": null
    },
    {
      "latitude": 52.317856,
      "longitude": 20.958405,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486217,
      "ems": null
    },
    {
      "latitude": 52.318897,
      "longitude": 20.957048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667486220,
      "ems": null
    },
    {
      "latitude": 52.31992,
      "longitude": 20.955793,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667486223,
      "ems": null
    },
    {
      "latitude": 52.321884,
      "longitude": 20.953598,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667486229,
      "ems": null
    },
    {
      "latitude": 52.324127,
      "longitude": 20.950851,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667486235,
      "ems": null
    },
    {
      "latitude": 52.326096,
      "longitude": 20.948334,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667486241,
      "ems": null
    },
    {
      "latitude": 52.328022,
      "longitude": 20.945827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667486247,
      "ems": null
    },
    {
      "latitude": 52.330261,
      "longitude": 20.942993,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667486253,
      "ems": null
    },
    {
      "latitude": 52.332443,
      "longitude": 20.940413,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667486259,
      "ems": null
    },
    {
      "latitude": 52.334538,
      "longitude": 20.937901,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667486265,
      "ems": null
    },
    {
      "latitude": 52.336533,
      "longitude": 20.935211,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486271,
      "ems": null
    },
    {
      "latitude": 52.338226,
      "longitude": 20.932922,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486277,
      "ems": null
    },
    {
      "latitude": 52.340561,
      "longitude": 20.930023,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667486283,
      "ems": null
    },
    {
      "latitude": 52.342869,
      "longitude": 20.927542,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667486290,
      "ems": null
    },
    {
      "latitude": 52.344086,
      "longitude": 20.926361,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667486292,
      "ems": null
    },
    {
      "latitude": 52.34523,
      "longitude": 20.925217,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667486295,
      "ems": null
    },
    {
      "latitude": 52.3465,
      "longitude": 20.924089,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667486298,
      "ems": null
    },
    {
      "latitude": 52.347427,
      "longitude": 20.923309,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1667486301,
      "ems": null
    },
    {
      "latitude": 52.348984,
      "longitude": 20.922089,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1667486304,
      "ems": null
    },
    {
      "latitude": 52.350357,
      "longitude": 20.921173,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486307,
      "ems": null
    },
    {
      "latitude": 52.351669,
      "longitude": 20.920401,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667486311,
      "ems": null
    },
    {
      "latitude": 52.352875,
      "longitude": 20.919876,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486314,
      "ems": null
    },
    {
      "latitude": 52.354462,
      "longitude": 20.919382,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1667486317,
      "ems": null
    },
    {
      "latitude": 52.355721,
      "longitude": 20.919224,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1667486320,
      "ems": null
    },
    {
      "latitude": 52.357086,
      "longitude": 20.919189,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1667486323,
      "ems": null
    },
    {
      "latitude": 52.358368,
      "longitude": 20.919189,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667486326,
      "ems": null
    },
    {
      "latitude": 52.359604,
      "longitude": 20.919266,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667486329,
      "ems": null
    },
    {
      "latitude": 52.360748,
      "longitude": 20.919302,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667486332,
      "ems": null
    },
    {
      "latitude": 52.362076,
      "longitude": 20.919266,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667486334,
      "ems": null
    },
    {
      "latitude": 52.363262,
      "longitude": 20.919302,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1667486337,
      "ems": null
    },
    {
      "latitude": 52.364471,
      "longitude": 20.919302,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1667486340,
      "ems": null
    },
    {
      "latitude": 52.365646,
      "longitude": 20.919266,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1667486343,
      "ems": null
    },
    {
      "latitude": 52.368195,
      "longitude": 20.918833,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1667486349,
      "ems": null
    },
    {
      "latitude": 52.370544,
      "longitude": 20.91835,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1667486355,
      "ems": null
    },
    {
      "latitude": 52.371735,
      "longitude": 20.918047,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1667486359,
      "ems": null
    },
    {
      "latitude": 52.373131,
      "longitude": 20.917734,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1667486362,
      "ems": null
    },
    {
      "latitude": 52.374344,
      "longitude": 20.917358,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1667486365,
      "ems": null
    },
    {
      "latitude": 52.37558,
      "longitude": 20.916977,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1667486368,
      "ems": null
    },
    {
      "latitude": 52.376816,
      "longitude": 20.916519,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486371,
      "ems": null
    },
    {
      "latitude": 52.378063,
      "longitude": 20.915771,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1667486374,
      "ems": null
    },
    {
      "latitude": 52.379135,
      "longitude": 20.914907,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667486377,
      "ems": null
    },
    {
      "latitude": 52.380157,
      "longitude": 20.913652,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486380,
      "ems": null
    },
    {
      "latitude": 52.381073,
      "longitude": 20.912247,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667486383,
      "ems": null
    },
    {
      "latitude": 52.381882,
      "longitude": 20.910513,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1667486386,
      "ems": null
    },
    {
      "latitude": 52.382584,
      "longitude": 20.908737,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667486389,
      "ems": null
    },
    {
      "latitude": 52.383224,
      "longitude": 20.906906,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667486392,
      "ems": null
    },
    {
      "latitude": 52.383774,
      "longitude": 20.905075,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667486395,
      "ems": null
    },
    {
      "latitude": 52.384232,
      "longitude": 20.903168,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667486398,
      "ems": null
    },
    {
      "latitude": 52.384644,
      "longitude": 20.901184,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486401,
      "ems": null
    },
    {
      "latitude": 52.385002,
      "longitude": 20.898977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486404,
      "ems": null
    },
    {
      "latitude": 52.385422,
      "longitude": 20.896759,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667486407,
      "ems": null
    },
    {
      "latitude": 52.385792,
      "longitude": 20.894897,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667486410,
      "ems": null
    },
    {
      "latitude": 52.386246,
      "longitude": 20.892715,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486413,
      "ems": null
    },
    {
      "latitude": 52.386703,
      "longitude": 20.890656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667486416,
      "ems": null
    },
    {
      "latitude": 52.387234,
      "longitude": 20.888462,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486419,
      "ems": null
    },
    {
      "latitude": 52.387665,
      "longitude": 20.886383,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486422,
      "ems": null
    },
    {
      "latitude": 52.388165,
      "longitude": 20.884146,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486425,
      "ems": null
    },
    {
      "latitude": 52.38913,
      "longitude": 20.879745,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667486431,
      "ems": null
    },
    {
      "latitude": 52.389587,
      "longitude": 20.877762,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667486434,
      "ems": null
    },
    {
      "latitude": 52.390446,
      "longitude": 20.873867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486440,
      "ems": null
    },
    {
      "latitude": 52.391426,
      "longitude": 20.869551,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667486446,
      "ems": null
    },
    {
      "latitude": 52.392307,
      "longitude": 20.865391,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667486452,
      "ems": null
    },
    {
      "latitude": 52.393158,
      "longitude": 20.861053,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486458,
      "ems": null
    },
    {
      "latitude": 52.39357,
      "longitude": 20.858841,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486461,
      "ems": null
    },
    {
      "latitude": 52.39389,
      "longitude": 20.856838,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486464,
      "ems": null
    },
    {
      "latitude": 52.394211,
      "longitude": 20.854874,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486467,
      "ems": null
    },
    {
      "latitude": 52.394577,
      "longitude": 20.852585,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667486470,
      "ems": null
    },
    {
      "latitude": 52.394821,
      "longitude": 20.850874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486473,
      "ems": null
    },
    {
      "latitude": 52.395523,
      "longitude": 20.846636,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486479,
      "ems": null
    },
    {
      "latitude": 52.396317,
      "longitude": 20.84259,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667486485,
      "ems": null
    },
    {
      "latitude": 52.397186,
      "longitude": 20.838547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667486491,
      "ems": null
    },
    {
      "latitude": 52.398148,
      "longitude": 20.834122,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486497,
      "ems": null
    },
    {
      "latitude": 52.39856,
      "longitude": 20.832062,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486500,
      "ems": null
    },
    {
      "latitude": 52.399338,
      "longitude": 20.828018,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486506,
      "ems": null
    },
    {
      "latitude": 52.400036,
      "longitude": 20.823721,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486512,
      "ems": null
    },
    {
      "latitude": 52.400665,
      "longitude": 20.819778,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486518,
      "ems": null
    },
    {
      "latitude": 52.400986,
      "longitude": 20.817642,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667486521,
      "ems": null
    },
    {
      "latitude": 52.401295,
      "longitude": 20.815561,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667486524,
      "ems": null
    },
    {
      "latitude": 52.401535,
      "longitude": 20.813446,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667486527,
      "ems": null
    },
    {
      "latitude": 52.401764,
      "longitude": 20.811157,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667486530,
      "ems": null
    },
    {
      "latitude": 52.401947,
      "longitude": 20.809174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667486533,
      "ems": null
    },
    {
      "latitude": 52.40213,
      "longitude": 20.806885,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667486536,
      "ems": null
    },
    {
      "latitude": 52.402317,
      "longitude": 20.804731,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667486539,
      "ems": null
    },
    {
      "latitude": 52.402496,
      "longitude": 20.802536,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667486542,
      "ems": null
    },
    {
      "latitude": 52.402679,
      "longitude": 20.800705,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667486545,
      "ems": null
    },
    {
      "latitude": 52.403156,
      "longitude": 20.796177,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667486552,
      "ems": null
    },
    {
      "latitude": 52.403667,
      "longitude": 20.791941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667486558,
      "ems": null
    },
    {
      "latitude": 52.404133,
      "longitude": 20.787937,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667486563,
      "ems": null
    },
    {
      "latitude": 52.404419,
      "longitude": 20.785828,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667486566,
      "ems": null
    },
    {
      "latitude": 52.405014,
      "longitude": 20.781555,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667486572,
      "ems": null
    },
    {
      "latitude": 52.405392,
      "longitude": 20.779148,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486576,
      "ems": null
    },
    {
      "latitude": 52.405716,
      "longitude": 20.776951,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486579,
      "ems": null
    },
    {
      "latitude": 52.406479,
      "longitude": 20.772552,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486585,
      "ems": null
    },
    {
      "latitude": 52.406845,
      "longitude": 20.770416,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486588,
      "ems": null
    },
    {
      "latitude": 52.407166,
      "longitude": 20.768585,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486590,
      "ems": null
    },
    {
      "latitude": 52.40799,
      "longitude": 20.763931,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1667486597,
      "ems": null
    },
    {
      "latitude": 52.408787,
      "longitude": 20.759844,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667486603,
      "ems": null
    },
    {
      "latitude": 52.409592,
      "longitude": 20.755234,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667486609,
      "ems": null
    },
    {
      "latitude": 52.410465,
      "longitude": 20.750898,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667486615,
      "ems": null
    },
    {
      "latitude": 52.411022,
      "longitude": 20.749172,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667486618,
      "ems": null
    },
    {
      "latitude": 52.412003,
      "longitude": 20.74721,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667486621,
      "ems": null
    },
    {
      "latitude": 52.413025,
      "longitude": 20.745798,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667486624,
      "ems": null
    },
    {
      "latitude": 52.414143,
      "longitude": 20.744619,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667486627,
      "ems": null
    },
    {
      "latitude": 52.41526,
      "longitude": 20.743679,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1667486630,
      "ems": null
    },
    {
      "latitude": 52.416458,
      "longitude": 20.74295,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486632,
      "ems": null
    },
    {
      "latitude": 52.41774,
      "longitude": 20.742264,
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
      "squawk": "7000",
      "timestamp": 1667486636,
      "ems": null
    },
    {
      "latitude": 52.418976,
      "longitude": 20.741577,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667486639,
      "ems": null
    },
    {
      "latitude": 52.420193,
      "longitude": 20.741011,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486642,
      "ems": null
    },
    {
      "latitude": 52.421265,
      "longitude": 20.740433,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486645,
      "ems": null
    },
    {
      "latitude": 52.422592,
      "longitude": 20.739822,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486648,
      "ems": null
    },
    {
      "latitude": 52.423782,
      "longitude": 20.739212,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486651,
      "ems": null
    },
    {
      "latitude": 52.425156,
      "longitude": 20.738602,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486654,
      "ems": null
    },
    {
      "latitude": 52.426254,
      "longitude": 20.738144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1667486657,
      "ems": null
    },
    {
      "latitude": 52.427536,
      "longitude": 20.73761,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667486660,
      "ems": null
    },
    {
      "latitude": 52.428864,
      "longitude": 20.737152,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667486663,
      "ems": null
    },
    {
      "latitude": 52.429962,
      "longitude": 20.736694,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667486665,
      "ems": null
    },
    {
      "latitude": 52.432529,
      "longitude": 20.735674,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1667486672,
      "ems": null
    },
    {
      "latitude": 52.43486,
      "longitude": 20.734634,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486677,
      "ems": null
    },
    {
      "latitude": 52.437378,
      "longitude": 20.73349,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486684,
      "ems": null
    },
    {
      "latitude": 52.439758,
      "longitude": 20.732269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1667486690,
      "ems": null
    },
    {
      "latitude": 52.440865,
      "longitude": 20.731594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486693,
      "ems": null
    },
    {
      "latitude": 52.441956,
      "longitude": 20.730896,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667486696,
      "ems": null
    },
    {
      "latitude": 52.443096,
      "longitude": 20.730181,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486699,
      "ems": null
    },
    {
      "latitude": 52.44429,
      "longitude": 20.729294,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1667486702,
      "ems": null
    },
    {
      "latitude": 52.445389,
      "longitude": 20.728531,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1667486705,
      "ems": null
    },
    {
      "latitude": 52.44659,
      "longitude": 20.727749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667486708,
      "ems": null
    },
    {
      "latitude": 52.447659,
      "longitude": 20.727041,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667486711,
      "ems": null
    },
    {
      "latitude": 52.448822,
      "longitude": 20.726318,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486714,
      "ems": null
    },
    {
      "latitude": 52.449783,
      "longitude": 20.725555,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1667486717,
      "ems": null
    },
    {
      "latitude": 52.450779,
      "longitude": 20.724688,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667486720,
      "ems": null
    },
    {
      "latitude": 52.451523,
      "longitude": 20.723877,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667486723,
      "ems": null
    },
    {
      "latitude": 52.452393,
      "longitude": 20.722809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486726,
      "ems": null
    },
    {
      "latitude": 52.453217,
      "longitude": 20.721664,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667486729,
      "ems": null
    },
    {
      "latitude": 52.453949,
      "longitude": 20.720291,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667486732,
      "ems": null
    },
    {
      "latitude": 52.454597,
      "longitude": 20.71896,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1667486735,
      "ems": null
    },
    {
      "latitude": 52.4552,
      "longitude": 20.717468,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667486738,
      "ems": null
    },
    {
      "latitude": 52.455688,
      "longitude": 20.71579,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667486741,
      "ems": null
    },
    {
      "latitude": 52.456039,
      "longitude": 20.714329,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667486744,
      "ems": null
    },
    {
      "latitude": 52.456318,
      "longitude": 20.712368,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667486747,
      "ems": null
    },
    {
      "latitude": 52.456421,
      "longitude": 20.710754,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667486750,
      "ems": null
    },
    {
      "latitude": 52.456467,
      "longitude": 20.709,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667486753,
      "ems": null
    },
    {
      "latitude": 52.456459,
      "longitude": 20.707266,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667486756,
      "ems": null
    },
    {
      "latitude": 52.456375,
      "longitude": 20.705795,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667486759,
      "ems": null
    },
    {
      "latitude": 52.456226,
      "longitude": 20.70397,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486762,
      "ems": null
    },
    {
      "latitude": 52.456131,
      "longitude": 20.70248,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486765,
      "ems": null
    },
    {
      "latitude": 52.455917,
      "longitude": 20.700607,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667486768,
      "ems": null
    },
    {
      "latitude": 52.455761,
      "longitude": 20.699026,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486771,
      "ems": null
    },
    {
      "latitude": 52.455597,
      "longitude": 20.697556,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667486774,
      "ems": null
    },
    {
      "latitude": 52.45546,
      "longitude": 20.695953,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667486777,
      "ems": null
    },
    {
      "latitude": 52.455296,
      "longitude": 20.694397,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667486780,
      "ems": null
    },
    {
      "latitude": 52.455093,
      "longitude": 20.692902,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667486783,
      "ems": null
    },
    {
      "latitude": 52.454922,
      "longitude": 20.691494,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667486786,
      "ems": null
    },
    {
      "latitude": 52.454597,
      "longitude": 20.688511,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667486792,
      "ems": null
    },
    {
      "latitude": 52.454365,
      "longitude": 20.685452,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486798,
      "ems": null
    },
    {
      "latitude": 52.454132,
      "longitude": 20.68239,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486804,
      "ems": null
    },
    {
      "latitude": 52.453812,
      "longitude": 20.679092,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667486810,
      "ems": null
    },
    {
      "latitude": 52.453445,
      "longitude": 20.675812,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486816,
      "ems": null
    },
    {
      "latitude": 52.453171,
      "longitude": 20.672684,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486822,
      "ems": null
    },
    {
      "latitude": 52.45285,
      "longitude": 20.669556,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486828,
      "ems": null
    },
    {
      "latitude": 52.452595,
      "longitude": 20.666853,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486834,
      "ems": null
    },
    {
      "latitude": 52.452301,
      "longitude": 20.663757,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486840,
      "ems": null
    },
    {
      "latitude": 52.452072,
      "longitude": 20.661392,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667486846,
      "ems": null
    },
    {
      "latitude": 52.451897,
      "longitude": 20.659397,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667486852,
      "ems": null
    },
    {
      "latitude": 52.451618,
      "longitude": 20.656023,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486859,
      "ems": null
    },
    {
      "latitude": 52.451336,
      "longitude": 20.652884,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486865,
      "ems": null
    },
    {
      "latitude": 52.451065,
      "longitude": 20.649643,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486870,
      "ems": null
    },
    {
      "latitude": 52.450825,
      "longitude": 20.646606,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486876,
      "ems": null
    },
    {
      "latitude": 52.450638,
      "longitude": 20.643389,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667486883,
      "ems": null
    },
    {
      "latitude": 52.450424,
      "longitude": 20.640335,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667486888,
      "ems": null
    },
    {
      "latitude": 52.45015,
      "longitude": 20.637054,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667486894,
      "ems": null
    },
    {
      "latitude": 52.44994,
      "longitude": 20.633579,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667486901,
      "ems": null
    },
    {
      "latitude": 52.449875,
      "longitude": 20.631561,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667486904,
      "ems": null
    },
    {
      "latitude": 52.44994,
      "longitude": 20.629892,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667486906,
      "ems": null
    },
    {
      "latitude": 52.450058,
      "longitude": 20.628128,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667486909,
      "ems": null
    },
    {
      "latitude": 52.450314,
      "longitude": 20.626125,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1667486913,
      "ems": null
    },
    {
      "latitude": 52.450745,
      "longitude": 20.624313,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667486916,
      "ems": null
    },
    {
      "latitude": 52.451248,
      "longitude": 20.622635,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667486919,
      "ems": null
    },
    {
      "latitude": 52.451797,
      "longitude": 20.621262,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1667486921,
      "ems": null
    },
    {
      "latitude": 52.452641,
      "longitude": 20.619534,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667486925,
      "ems": null
    },
    {
      "latitude": 52.45348,
      "longitude": 20.618357,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667486928,
      "ems": null
    },
    {
      "latitude": 52.454453,
      "longitude": 20.617218,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667486931,
      "ems": null
    },
    {
      "latitude": 52.455479,
      "longitude": 20.616316,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667486934,
      "ems": null
    },
    {
      "latitude": 52.456558,
      "longitude": 20.615463,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1667486937,
      "ems": null
    },
    {
      "latitude": 52.457249,
      "longitude": 20.614981,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486939,
      "ems": null
    },
    {
      "latitude": 52.458088,
      "longitude": 20.614431,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486942,
      "ems": null
    },
    {
      "latitude": 52.459343,
      "longitude": 20.613647,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486944,
      "ems": null
    },
    {
      "latitude": 52.460693,
      "longitude": 20.612864,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667486948,
      "ems": null
    },
    {
      "latitude": 52.461777,
      "longitude": 20.612183,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486951,
      "ems": null
    },
    {
      "latitude": 52.462929,
      "longitude": 20.611372,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1667486954,
      "ems": null
    },
    {
      "latitude": 52.463791,
      "longitude": 20.610809,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486956,
      "ems": null
    },
    {
      "latitude": 52.465118,
      "longitude": 20.610037,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667486960,
      "ems": null
    },
    {
      "latitude": 52.466217,
      "longitude": 20.60936,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1667486963,
      "ems": null
    },
    {
      "latitude": 52.468369,
      "longitude": 20.608063,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1667486969,
      "ems": null
    },
    {
      "latitude": 52.470291,
      "longitude": 20.606995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1667486975,
      "ems": null
    },
    {
      "latitude": 52.47266,
      "longitude": 20.605801,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486981,
      "ems": null
    },
    {
      "latitude": 52.473824,
      "longitude": 20.605251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1667486984,
      "ems": null
    },
    {
      "latitude": 52.476196,
      "longitude": 20.604095,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486990,
      "ems": null
    },
    {
      "latitude": 52.477386,
      "longitude": 20.603485,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667486993,
      "ems": null
    },
    {
      "latitude": 52.478523,
      "longitude": 20.602976,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667486996,
      "ems": null
    },
    {
      "latitude": 52.48085,
      "longitude": 20.601877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667487002,
      "ems": null
    },
    {
      "latitude": 52.483337,
      "longitude": 20.60051,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1667487008,
      "ems": null
    },
    {
      "latitude": 52.484528,
      "longitude": 20.599823,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1667487011,
      "ems": null
    },
    {
      "latitude": 52.486954,
      "longitude": 20.598602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667487017,
      "ems": null
    },
    {
      "latitude": 52.489426,
      "longitude": 20.597382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667487023,
      "ems": null
    },
    {
      "latitude": 52.491978,
      "longitude": 20.595991,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1667487029,
      "ems": null
    },
    {
      "latitude": 52.494583,
      "longitude": 20.594656,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667487035,
      "ems": null
    },
    {
      "latitude": 52.497116,
      "longitude": 20.593491,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667487041,
      "ems": null
    },
    {
      "latitude": 52.499798,
      "longitude": 20.592224,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667487047,
      "ems": null
    },
    {
      "latitude": 52.50238,
      "longitude": 20.590897,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667487053,
      "ems": null
    },
    {
      "latitude": 52.504826,
      "longitude": 20.589634,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1667487059,
      "ems": null
    },
    {
      "latitude": 52.507851,
      "longitude": 20.587673,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1667487065,
      "ems": null
    },
    {
      "latitude": 52.508968,
      "longitude": 20.586731,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1667487068,
      "ems": null
    },
    {
      "latitude": 52.510254,
      "longitude": 20.585556,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667487071,
      "ems": null
    },
    {
      "latitude": 52.511353,
      "longitude": 20.584412,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667487074,
      "ems": null
    },
    {
      "latitude": 52.512863,
      "longitude": 20.582809,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667487077,
      "ems": null
    },
    {
      "latitude": 52.513962,
      "longitude": 20.581512,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667487080,
      "ems": null
    },
    {
      "latitude": 52.515068,
      "longitude": 20.580139,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667487083,
      "ems": null
    },
    {
      "latitude": 52.516232,
      "longitude": 20.578413,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667487086,
      "ems": null
    },
    {
      "latitude": 52.517303,
      "longitude": 20.576765,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667487089,
      "ems": null
    },
    {
      "latitude": 52.518082,
      "longitude": 20.575409,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667487091,
      "ems": null
    },
    {
      "latitude": 52.519226,
      "longitude": 20.573425,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667487095,
      "ems": null
    },
    {
      "latitude": 52.520283,
      "longitude": 20.571665,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667487098,
      "ems": null
    },
    {
      "latitude": 52.521214,
      "longitude": 20.570017,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667487101,
      "ems": null
    },
    {
      "latitude": 52.522293,
      "longitude": 20.568237,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667487104,
      "ems": null
    },
    {
      "latitude": 52.523346,
      "longitude": 20.566635,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667487107,
      "ems": null
    },
    {
      "latitude": 52.52438,
      "longitude": 20.565073,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667487110,
      "ems": null
    },
    {
      "latitude": 52.52655,
      "longitude": 20.561752,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667487116,
      "ems": null
    },
    {
      "latitude": 52.528427,
      "longitude": 20.558853,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667487121,
      "ems": null
    },
    {
      "latitude": 52.5298,
      "longitude": 20.55687,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667487125,
      "ems": null
    },
    {
      "latitude": 52.530708,
      "longitude": 20.555498,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667487128,
      "ems": null
    },
    {
      "latitude": 52.53273,
      "longitude": 20.552521,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667487134,
      "ems": null
    },
    {
      "latitude": 52.533829,
      "longitude": 20.550632,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1667487138,
      "ems": null
    },
    {
      "latitude": 52.535385,
      "longitude": 20.547409,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1667487143,
      "ems": null
    },
    {
      "latitude": 52.53611,
      "longitude": 20.545689,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1667487146,
      "ems": null
    },
    {
      "latitude": 52.5369,
      "longitude": 20.54357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667487149,
      "ems": null
    },
    {
      "latitude": 52.53746,
      "longitude": 20.542002,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667487152,
      "ems": null
    },
    {
      "latitude": 52.537994,
      "longitude": 20.540314,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667487154,
      "ems": null
    },
    {
      "latitude": 52.538681,
      "longitude": 20.538101,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667487158,
      "ems": null
    },
    {
      "latitude": 52.539227,
      "longitude": 20.536037,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667487161,
      "ems": null
    },
    {
      "latitude": 52.539787,
      "longitude": 20.534075,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667487164,
      "ems": null
    },
    {
      "latitude": 52.540283,
      "longitude": 20.532455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667487166,
      "ems": null
    },
    {
      "latitude": 52.540741,
      "longitude": 20.53093,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667487169,
      "ems": null
    },
    {
      "latitude": 52.541462,
      "longitude": 20.528425,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667487173,
      "ems": null
    },
    {
      "latitude": 52.542023,
      "longitude": 20.526541,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667487176,
      "ems": null
    },
    {
      "latitude": 52.542892,
      "longitude": 20.523987,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667487180,
      "ems": null
    },
    {
      "latitude": 52.54454,
      "longitude": 20.518875,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667487188,
      "ems": null
    },
    {
      "latitude": 52.545227,
      "longitude": 20.517044,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667487191,
      "ems": null
    },
    {
      "latitude": 52.546024,
      "longitude": 20.514849,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667487194,
      "ems": null
    },
    {
      "latitude": 52.546677,
      "longitude": 20.513123,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667487197,
      "ems": null
    },
    {
      "latitude": 52.547287,
      "longitude": 20.511551,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667487200,
      "ems": null
    },
    {
      "latitude": 52.548214,
      "longitude": 20.509277,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1667487203,
      "ems": null
    },
    {
      "latitude": 52.548843,
      "longitude": 20.507736,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1667487206,
      "ems": null
    },
    {
      "latitude": 52.54961,
      "longitude": 20.505825,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1667487209,
      "ems": null
    },
    {
      "latitude": 52.550308,
      "longitude": 20.504177,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1667487212,
      "ems": null
    },
    {
      "latitude": 52.551315,
      "longitude": 20.501709,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1667487215,
      "ems": null
    },
    {
      "latitude": 52.552776,
      "longitude": 20.497976,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667487221,
      "ems": null
    },
    {
      "latitude": 52.553379,
      "longitude": 20.496094,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667487224,
      "ems": null
    },
    {
      "latitude": 52.553833,
      "longitude": 20.494385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667487227,
      "ems": null
    },
    {
      "latitude": 52.554337,
      "longitude": 20.492172,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667487230,
      "ems": null
    },
    {
      "latitude": 52.554794,
      "longitude": 20.490036,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667487234,
      "ems": null
    },
    {
      "latitude": 52.555252,
      "longitude": 20.487595,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667487236,
      "ems": null
    },
    {
      "latitude": 52.555706,
      "longitude": 20.485579,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1667487239,
      "ems": null
    },
    {
      "latitude": 52.556171,
      "longitude": 20.483459,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667487242,
      "ems": null
    },
    {
      "latitude": 52.55658,
      "longitude": 20.48172,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667487245,
      "ems": null
    },
    {
      "latitude": 52.557129,
      "longitude": 20.479279,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667487248,
      "ems": null
    },
    {
      "latitude": 52.557522,
      "longitude": 20.477102,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667487251,
      "ems": null
    },
    {
      "latitude": 52.557617,
      "longitude": 20.476084,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667487253,
      "ems": null
    },
    {
      "latitude": 52.55785,
      "longitude": 20.472551,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667487258,
      "ems": null
    },
    {
      "latitude": 52.557816,
      "longitude": 20.469818,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667487262,
      "ems": null
    },
    {
      "latitude": 52.557724,
      "longitude": 20.467987,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487264,
      "ems": null
    },
    {
      "latitude": 52.557587,
      "longitude": 20.465927,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487268,
      "ems": null
    },
    {
      "latitude": 52.557404,
      "longitude": 20.463867,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487271,
      "ems": null
    },
    {
      "latitude": 52.557243,
      "longitude": 20.462036,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487274,
      "ems": null
    },
    {
      "latitude": 52.557083,
      "longitude": 20.460205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487277,
      "ems": null
    },
    {
      "latitude": 52.5569,
      "longitude": 20.458374,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487279,
      "ems": null
    },
    {
      "latitude": 52.556717,
      "longitude": 20.456314,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487283,
      "ems": null
    },
    {
      "latitude": 52.556591,
      "longitude": 20.454424,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487286,
      "ems": null
    },
    {
      "latitude": 52.556404,
      "longitude": 20.452305,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487289,
      "ems": null
    },
    {
      "latitude": 52.556221,
      "longitude": 20.4505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487292,
      "ems": null
    },
    {
      "latitude": 52.555893,
      "longitude": 20.446421,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487298,
      "ems": null
    },
    {
      "latitude": 52.555664,
      "longitude": 20.442276,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487304,
      "ems": null
    },
    {
      "latitude": 52.555481,
      "longitude": 20.438538,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487310,
      "ems": null
    },
    {
      "latitude": 52.555389,
      "longitude": 20.436401,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487313,
      "ems": null
    },
    {
      "latitude": 52.555336,
      "longitude": 20.434649,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487315,
      "ems": null
    },
    {
      "latitude": 52.555103,
      "longitude": 20.430098,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487322,
      "ems": null
    },
    {
      "latitude": 52.554871,
      "longitude": 20.426016,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487328,
      "ems": null
    },
    {
      "latitude": 52.554543,
      "longitude": 20.421936,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487334,
      "ems": null
    },
    {
      "latitude": 52.554245,
      "longitude": 20.418167,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487340,
      "ems": null
    },
    {
      "latitude": 52.55397,
      "longitude": 20.414047,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487346,
      "ems": null
    },
    {
      "latitude": 52.553658,
      "longitude": 20.409616,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487352,
      "ems": null
    },
    {
      "latitude": 52.553284,
      "longitude": 20.405807,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667487358,
      "ems": null
    },
    {
      "latitude": 52.552963,
      "longitude": 20.403976,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667487361,
      "ems": null
    },
    {
      "latitude": 52.552681,
      "longitude": 20.402161,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667487364,
      "ems": null
    },
    {
      "latitude": 52.552402,
      "longitude": 20.400434,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667487367,
      "ems": null
    },
    {
      "latitude": 52.55217,
      "longitude": 20.39863,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667487370,
      "ems": null
    },
    {
      "latitude": 52.55175,
      "longitude": 20.394785,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487376,
      "ems": null
    },
    {
      "latitude": 52.551517,
      "longitude": 20.392822,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667487379,
      "ems": null
    },
    {
      "latitude": 52.551285,
      "longitude": 20.391018,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667487382,
      "ems": null
    },
    {
      "latitude": 52.550949,
      "longitude": 20.389328,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667487385,
      "ems": null
    },
    {
      "latitude": 52.550537,
      "longitude": 20.387421,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667487388,
      "ems": null
    },
    {
      "latitude": 52.550125,
      "longitude": 20.385742,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667487391,
      "ems": null
    },
    {
      "latitude": 52.549797,
      "longitude": 20.384268,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667487394,
      "ems": null
    },
    {
      "latitude": 52.549484,
      "longitude": 20.382614,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667487397,
      "ems": null
    },
    {
      "latitude": 52.549049,
      "longitude": 20.379639,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667487403,
      "ems": null
    },
    {
      "latitude": 52.548935,
      "longitude": 20.378036,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487406,
      "ems": null
    },
    {
      "latitude": 52.548817,
      "longitude": 20.376421,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487409,
      "ems": null
    },
    {
      "latitude": 52.548706,
      "longitude": 20.37468,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487412,
      "ems": null
    },
    {
      "latitude": 52.54863,
      "longitude": 20.373047,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487416,
      "ems": null
    },
    {
      "latitude": 52.548584,
      "longitude": 20.371477,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487419,
      "ems": null
    },
    {
      "latitude": 52.548538,
      "longitude": 20.369986,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487421,
      "ems": null
    },
    {
      "latitude": 52.548477,
      "longitude": 20.368347,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487424,
      "ems": null
    },
    {
      "latitude": 52.548431,
      "longitude": 20.366898,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487427,
      "ems": null
    },
    {
      "latitude": 52.548351,
      "longitude": 20.365122,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487430,
      "ems": null
    },
    {
      "latitude": 52.548119,
      "longitude": 20.361277,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487437,
      "ems": null
    },
    {
      "latitude": 52.547932,
      "longitude": 20.358059,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487442,
      "ems": null
    },
    {
      "latitude": 52.547791,
      "longitude": 20.354385,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487448,
      "ems": null
    },
    {
      "latitude": 52.547653,
      "longitude": 20.35076,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487454,
      "ems": null
    },
    {
      "latitude": 52.547466,
      "longitude": 20.347073,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487461,
      "ems": null
    },
    {
      "latitude": 52.547333,
      "longitude": 20.343552,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487467,
      "ems": null
    },
    {
      "latitude": 52.54715,
      "longitude": 20.340118,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487472,
      "ems": null
    },
    {
      "latitude": 52.546921,
      "longitude": 20.335999,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487479,
      "ems": null
    },
    {
      "latitude": 52.546722,
      "longitude": 20.332163,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487485,
      "ems": null
    },
    {
      "latitude": 52.546463,
      "longitude": 20.328064,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487491,
      "ems": null
    },
    {
      "latitude": 52.546143,
      "longitude": 20.32402,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487497,
      "ems": null
    },
    {
      "latitude": 52.545746,
      "longitude": 20.319763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487503,
      "ems": null
    },
    {
      "latitude": 52.545364,
      "longitude": 20.315247,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487509,
      "ems": null
    },
    {
      "latitude": 52.545048,
      "longitude": 20.310818,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487515,
      "ems": null
    },
    {
      "latitude": 52.544769,
      "longitude": 20.306778,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487521,
      "ems": null
    },
    {
      "latitude": 52.544403,
      "longitude": 20.302505,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487527,
      "ems": null
    },
    {
      "latitude": 52.544037,
      "longitude": 20.298157,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487533,
      "ems": null
    },
    {
      "latitude": 52.543606,
      "longitude": 20.293867,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487539,
      "ems": null
    },
    {
      "latitude": 52.543232,
      "longitude": 20.289629,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487545,
      "ems": null
    },
    {
      "latitude": 52.542847,
      "longitude": 20.285721,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487551,
      "ems": null
    },
    {
      "latitude": 52.542435,
      "longitude": 20.281601,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487557,
      "ems": null
    },
    {
      "latitude": 52.542023,
      "longitude": 20.2771,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487563,
      "ems": null
    },
    {
      "latitude": 52.541649,
      "longitude": 20.272993,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487569,
      "ems": null
    },
    {
      "latitude": 52.54129,
      "longitude": 20.26886,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487575,
      "ems": null
    },
    {
      "latitude": 52.540905,
      "longitude": 20.264675,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487581,
      "ems": null
    },
    {
      "latitude": 52.540512,
      "longitude": 20.26062,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487587,
      "ems": null
    },
    {
      "latitude": 52.540207,
      "longitude": 20.25667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487593,
      "ems": null
    },
    {
      "latitude": 52.539963,
      "longitude": 20.252304,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487599,
      "ems": null
    },
    {
      "latitude": 52.539688,
      "longitude": 20.248184,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487605,
      "ems": null
    },
    {
      "latitude": 52.539322,
      "longitude": 20.244064,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487611,
      "ems": null
    },
    {
      "latitude": 52.539001,
      "longitude": 20.239944,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487617,
      "ems": null
    },
    {
      "latitude": 52.53867,
      "longitude": 20.235718,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487623,
      "ems": null
    },
    {
      "latitude": 52.538361,
      "longitude": 20.231552,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487629,
      "ems": null
    },
    {
      "latitude": 52.538086,
      "longitude": 20.227509,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487635,
      "ems": null
    },
    {
      "latitude": 52.537876,
      "longitude": 20.223789,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487641,
      "ems": null
    },
    {
      "latitude": 52.537506,
      "longitude": 20.219316,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487647,
      "ems": null
    },
    {
      "latitude": 52.53717,
      "longitude": 20.215225,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487653,
      "ems": null
    },
    {
      "latitude": 52.5369,
      "longitude": 20.211155,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487659,
      "ems": null
    },
    {
      "latitude": 52.536667,
      "longitude": 20.20731,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487665,
      "ems": null
    },
    {
      "latitude": 52.536301,
      "longitude": 20.202713,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487671,
      "ems": null
    },
    {
      "latitude": 52.53598,
      "longitude": 20.198822,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487677,
      "ems": null
    },
    {
      "latitude": 52.535645,
      "longitude": 20.194754,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487683,
      "ems": null
    },
    {
      "latitude": 52.535412,
      "longitude": 20.19083,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487689,
      "ems": null
    },
    {
      "latitude": 52.535179,
      "longitude": 20.187222,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487695,
      "ems": null
    },
    {
      "latitude": 52.534851,
      "longitude": 20.18259,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487702,
      "ems": null
    },
    {
      "latitude": 52.534653,
      "longitude": 20.178604,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487707,
      "ems": null
    },
    {
      "latitude": 52.534431,
      "longitude": 20.174587,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487714,
      "ems": null
    },
    {
      "latitude": 52.534286,
      "longitude": 20.170822,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487719,
      "ems": null
    },
    {
      "latitude": 52.534061,
      "longitude": 20.166897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487725,
      "ems": null
    },
    {
      "latitude": 52.533829,
      "longitude": 20.162888,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487731,
      "ems": null
    },
    {
      "latitude": 52.533646,
      "longitude": 20.15892,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487737,
      "ems": null
    },
    {
      "latitude": 52.533455,
      "longitude": 20.155283,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487743,
      "ems": null
    },
    {
      "latitude": 52.533268,
      "longitude": 20.150808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487750,
      "ems": null
    },
    {
      "latitude": 52.533096,
      "longitude": 20.146866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487756,
      "ems": null
    },
    {
      "latitude": 52.532944,
      "longitude": 20.142727,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487762,
      "ems": null
    },
    {
      "latitude": 52.53273,
      "longitude": 20.13855,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487767,
      "ems": null
    },
    {
      "latitude": 52.532455,
      "longitude": 20.134583,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487773,
      "ems": null
    },
    {
      "latitude": 52.532227,
      "longitude": 20.129852,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487780,
      "ems": null
    },
    {
      "latitude": 52.531967,
      "longitude": 20.125933,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487785,
      "ems": null
    },
    {
      "latitude": 52.531723,
      "longitude": 20.121078,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487792,
      "ems": null
    },
    {
      "latitude": 52.531586,
      "longitude": 20.11734,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487797,
      "ems": null
    },
    {
      "latitude": 52.531311,
      "longitude": 20.112534,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487804,
      "ems": null
    },
    {
      "latitude": 52.530991,
      "longitude": 20.108109,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487810,
      "ems": null
    },
    {
      "latitude": 52.530716,
      "longitude": 20.103302,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487816,
      "ems": null
    },
    {
      "latitude": 52.53043,
      "longitude": 20.09886,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487822,
      "ems": null
    },
    {
      "latitude": 52.530212,
      "longitude": 20.094986,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487827,
      "ems": null
    },
    {
      "latitude": 52.529755,
      "longitude": 20.090027,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487834,
      "ems": null
    },
    {
      "latitude": 52.529358,
      "longitude": 20.085598,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487840,
      "ems": null
    },
    {
      "latitude": 52.528976,
      "longitude": 20.081482,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487846,
      "ems": null
    },
    {
      "latitude": 52.528614,
      "longitude": 20.077436,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487852,
      "ems": null
    },
    {
      "latitude": 52.52824,
      "longitude": 20.07312,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487858,
      "ems": null
    },
    {
      "latitude": 52.527832,
      "longitude": 20.069351,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667487864,
      "ems": null
    },
    {
      "latitude": 52.527496,
      "longitude": 20.065351,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487870,
      "ems": null
    },
    {
      "latitude": 52.527191,
      "longitude": 20.061111,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667487876,
      "ems": null
    },
    {
      "latitude": 52.526939,
      "longitude": 20.056013,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487884,
      "ems": null
    },
    {
      "latitude": 52.526752,
      "longitude": 20.053345,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487888,
      "ems": null
    },
    {
      "latitude": 52.526459,
      "longitude": 20.047379,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487897,
      "ems": null
    },
    {
      "latitude": 52.52623,
      "longitude": 20.043259,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487903,
      "ems": null
    },
    {
      "latitude": 52.526009,
      "longitude": 20.039455,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487909,
      "ems": null
    },
    {
      "latitude": 52.525772,
      "longitude": 20.035477,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667487915,
      "ems": null
    },
    {
      "latitude": 52.525543,
      "longitude": 20.031294,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487921,
      "ems": null
    },
    {
      "latitude": 52.525314,
      "longitude": 20.027313,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487927,
      "ems": null
    },
    {
      "latitude": 52.525169,
      "longitude": 20.023525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487933,
      "ems": null
    },
    {
      "latitude": 52.525028,
      "longitude": 20.019444,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487939,
      "ems": null
    },
    {
      "latitude": 52.524857,
      "longitude": 20.015717,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487945,
      "ems": null
    },
    {
      "latitude": 52.524704,
      "longitude": 20.011362,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667487951,
      "ems": null
    },
    {
      "latitude": 52.524658,
      "longitude": 20.009714,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667487954,
      "ems": null
    },
    {
      "latitude": 52.524582,
      "longitude": 20.005493,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667487960,
      "ems": null
    },
    {
      "latitude": 52.524536,
      "longitude": 20.001526,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667487966,
      "ems": null
    },
    {
      "latitude": 52.524426,
      "longitude": 19.997471,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667487972,
      "ems": null
    },
    {
      "latitude": 52.524216,
      "longitude": 19.993362,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667487978,
      "ems": null
    },
    {
      "latitude": 52.524052,
      "longitude": 19.991507,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487981,
      "ems": null
    },
    {
      "latitude": 52.523895,
      "longitude": 19.989471,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487984,
      "ems": null
    },
    {
      "latitude": 52.523727,
      "longitude": 19.987583,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487987,
      "ems": null
    },
    {
      "latitude": 52.523529,
      "longitude": 19.985352,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487990,
      "ems": null
    },
    {
      "latitude": 52.523354,
      "longitude": 19.983503,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667487993,
      "ems": null
    },
    {
      "latitude": 52.523212,
      "longitude": 19.981462,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487996,
      "ems": null
    },
    {
      "latitude": 52.523026,
      "longitude": 19.979401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667487999,
      "ems": null
    },
    {
      "latitude": 52.522701,
      "longitude": 19.975185,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667488006,
      "ems": null
    },
    {
      "latitude": 52.522476,
      "longitude": 19.971085,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667488011,
      "ems": null
    },
    {
      "latitude": 52.522247,
      "longitude": 19.966736,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667488018,
      "ems": null
    },
    {
      "latitude": 52.522003,
      "longitude": 19.962708,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667488023,
      "ems": null
    },
    {
      "latitude": 52.52179,
      "longitude": 19.958115,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667488030,
      "ems": null
    },
    {
      "latitude": 52.521744,
      "longitude": 19.955902,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667488032,
      "ems": null
    },
    {
      "latitude": 52.52179,
      "longitude": 19.953613,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488035,
      "ems": null
    },
    {
      "latitude": 52.521816,
      "longitude": 19.951328,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488039,
      "ems": null
    },
    {
      "latitude": 52.521912,
      "longitude": 19.949131,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488042,
      "ems": null
    },
    {
      "latitude": 52.521973,
      "longitude": 19.946976,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667488045,
      "ems": null
    },
    {
      "latitude": 52.521957,
      "longitude": 19.944736,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667488048,
      "ems": null
    },
    {
      "latitude": 52.521881,
      "longitude": 19.940338,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488054,
      "ems": null
    },
    {
      "latitude": 52.52179,
      "longitude": 19.935837,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488059,
      "ems": null
    },
    {
      "latitude": 52.521725,
      "longitude": 19.931318,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488066,
      "ems": null
    },
    {
      "latitude": 52.521679,
      "longitude": 19.926767,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488072,
      "ems": null
    },
    {
      "latitude": 52.521561,
      "longitude": 19.922256,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488078,
      "ems": null
    },
    {
      "latitude": 52.521515,
      "longitude": 19.917831,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667488084,
      "ems": null
    },
    {
      "latitude": 52.521561,
      "longitude": 19.913559,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488090,
      "ems": null
    },
    {
      "latitude": 52.521679,
      "longitude": 19.909031,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667488096,
      "ems": null
    },
    {
      "latitude": 52.521633,
      "longitude": 19.90448,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667488102,
      "ems": null
    },
    {
      "latitude": 52.521469,
      "longitude": 19.90036,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667488108,
      "ems": null
    },
    {
      "latitude": 52.521194,
      "longitude": 19.895859,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667488114,
      "ems": null
    },
    {
      "latitude": 52.521072,
      "longitude": 19.893887,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667488117,
      "ems": null
    },
    {
      "latitude": 52.520966,
      "longitude": 19.891434,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667488120,
      "ems": null
    },
    {
      "latitude": 52.52084,
      "longitude": 19.889334,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667488123,
      "ems": null
    },
    {
      "latitude": 52.520653,
      "longitude": 19.887136,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667488126,
      "ems": null
    },
    {
      "latitude": 52.520554,
      "longitude": 19.885254,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667488129,
      "ems": null
    },
    {
      "latitude": 52.520142,
      "longitude": 19.880625,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667488135,
      "ems": null
    },
    {
      "latitude": 52.519955,
      "longitude": 19.878584,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667488138,
      "ems": null
    },
    {
      "latitude": 52.519684,
      "longitude": 19.87648,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667488141,
      "ems": null
    },
    {
      "latitude": 52.519455,
      "longitude": 19.874573,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667488144,
      "ems": null
    },
    {
      "latitude": 52.519119,
      "longitude": 19.870344,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667488150,
      "ems": null
    },
    {
      "latitude": 52.518932,
      "longitude": 19.865793,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667488156,
      "ems": null
    },
    {
      "latitude": 52.518997,
      "longitude": 19.863358,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667488159,
      "ems": null
    },
    {
      "latitude": 52.519165,
      "longitude": 19.861162,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667488162,
      "ems": null
    },
    {
      "latitude": 52.519398,
      "longitude": 19.858965,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667488165,
      "ems": null
    },
    {
      "latitude": 52.519592,
      "longitude": 19.85672,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667488168,
      "ems": null
    },
    {
      "latitude": 52.519775,
      "longitude": 19.854431,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667488171,
      "ems": null
    },
    {
      "latitude": 52.519867,
      "longitude": 19.852219,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667488174,
      "ems": null
    },
    {
      "latitude": 52.519955,
      "longitude": 19.849941,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488177,
      "ems": null
    },
    {
      "latitude": 52.520004,
      "longitude": 19.84787,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667488180,
      "ems": null
    },
    {
      "latitude": 52.52005,
      "longitude": 19.843445,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667488186,
      "ems": null
    },
    {
      "latitude": 52.52005,
      "longitude": 19.841702,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667488189,
      "ems": null
    },
    {
      "latitude": 52.520096,
      "longitude": 19.839325,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488192,
      "ems": null
    },
    {
      "latitude": 52.520142,
      "longitude": 19.837112,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667488196,
      "ems": null
    },
    {
      "latitude": 52.520233,
      "longitude": 19.832535,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667488201,
      "ems": null
    },
    {
      "latitude": 52.520187,
      "longitude": 19.8304,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667488204,
      "ems": null
    },
    {
      "latitude": 52.520187,
      "longitude": 19.826006,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667488211,
      "ems": null
    },
    {
      "latitude": 52.519955,
      "longitude": 19.821533,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667488217,
      "ems": null
    },
    {
      "latitude": 52.519638,
      "longitude": 19.819336,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667488220,
      "ems": null
    },
    {
      "latitude": 52.519272,
      "longitude": 19.817581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667488222,
      "ems": null
    },
    {
      "latitude": 52.518677,
      "longitude": 19.815369,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667488226,
      "ems": null
    },
    {
      "latitude": 52.518047,
      "longitude": 19.813686,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667488228,
      "ems": null
    },
    {
      "latitude": 52.517303,
      "longitude": 19.811935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667488232,
      "ems": null
    },
    {
      "latitude": 52.516479,
      "longitude": 19.810333,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1667488234,
      "ems": null
    },
    {
      "latitude": 52.515579,
      "longitude": 19.808821,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1667488238,
      "ems": null
    },
    {
      "latitude": 52.514648,
      "longitude": 19.807407,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1667488241,
      "ems": null
    },
    {
      "latitude": 52.513626,
      "longitude": 19.806074,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1667488244,
      "ems": null
    },
    {
      "latitude": 52.51268,
      "longitude": 19.804993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1667488247,
      "ems": null
    },
    {
      "latitude": 52.511669,
      "longitude": 19.803955,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667488250,
      "ems": null
    },
    {
      "latitude": 52.510666,
      "longitude": 19.803009,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667488252,
      "ems": null
    },
    {
      "latitude": 52.509621,
      "longitude": 19.802151,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488256,
      "ems": null
    },
    {
      "latitude": 52.508469,
      "longitude": 19.801331,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667488258,
      "ems": null
    },
    {
      "latitude": 52.507278,
      "longitude": 19.800568,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488262,
      "ems": null
    },
    {
      "latitude": 52.506176,
      "longitude": 19.800032,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488265,
      "ems": null
    },
    {
      "latitude": 52.505058,
      "longitude": 19.799404,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488268,
      "ems": null
    },
    {
      "latitude": 52.503754,
      "longitude": 19.798777,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488271,
      "ems": null
    },
    {
      "latitude": 52.502838,
      "longitude": 19.798203,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667488273,
      "ems": null
    },
    {
      "latitude": 52.501694,
      "longitude": 19.797592,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667488277,
      "ems": null
    },
    {
      "latitude": 52.500359,
      "longitude": 19.796892,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488280,
      "ems": null
    },
    {
      "latitude": 52.499241,
      "longitude": 19.796265,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488283,
      "ems": null
    },
    {
      "latitude": 52.498077,
      "longitude": 19.795715,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667488286,
      "ems": null
    },
    {
      "latitude": 52.497005,
      "longitude": 19.795166,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667488289,
      "ems": null
    },
    {
      "latitude": 52.494736,
      "longitude": 19.794006,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667488295,
      "ems": null
    },
    {
      "latitude": 52.492584,
      "longitude": 19.792734,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667488301,
      "ems": null
    },
    {
      "latitude": 52.490295,
      "longitude": 19.791489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488307,
      "ems": null
    },
    {
      "latitude": 52.487926,
      "longitude": 19.790144,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488313,
      "ems": null
    },
    {
      "latitude": 52.485645,
      "longitude": 19.788967,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667488319,
      "ems": null
    },
    {
      "latitude": 52.483364,
      "longitude": 19.787554,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667488325,
      "ems": null
    },
    {
      "latitude": 52.482433,
      "longitude": 19.786848,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488328,
      "ems": null
    },
    {
      "latitude": 52.481365,
      "longitude": 19.785906,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667488331,
      "ems": null
    },
    {
      "latitude": 52.480133,
      "longitude": 19.784622,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667488334,
      "ems": null
    },
    {
      "latitude": 52.479126,
      "longitude": 19.783478,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1667488337,
      "ems": null
    },
    {
      "latitude": 52.478119,
      "longitude": 19.782257,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1667488340,
      "ems": null
    },
    {
      "latitude": 52.477219,
      "longitude": 19.781199,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667488343,
      "ems": null
    },
    {
      "latitude": 52.476013,
      "longitude": 19.780197,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488346,
      "ems": null
    },
    {
      "latitude": 52.473637,
      "longitude": 19.778921,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488352,
      "ems": null
    },
    {
      "latitude": 52.472427,
      "longitude": 19.77853,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488355,
      "ems": null
    },
    {
      "latitude": 52.471252,
      "longitude": 19.778214,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488358,
      "ems": null
    },
    {
      "latitude": 52.470062,
      "longitude": 19.777908,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667488361,
      "ems": null
    },
    {
      "latitude": 52.468887,
      "longitude": 19.777666,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488364,
      "ems": null
    },
    {
      "latitude": 52.467632,
      "longitude": 19.77751,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667488367,
      "ems": null
    },
    {
      "latitude": 52.466419,
      "longitude": 19.777353,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667488370,
      "ems": null
    },
    {
      "latitude": 52.46521,
      "longitude": 19.777374,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667488373,
      "ems": null
    },
    {
      "latitude": 52.464046,
      "longitude": 19.777431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667488376,
      "ems": null
    },
    {
      "latitude": 52.462837,
      "longitude": 19.777666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667488379,
      "ems": null
    },
    {
      "latitude": 52.461685,
      "longitude": 19.777908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667488382,
      "ems": null
    },
    {
      "latitude": 52.460312,
      "longitude": 19.778214,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667488386,
      "ems": null
    },
    {
      "latitude": 52.459297,
      "longitude": 19.778372,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667488388,
      "ems": null
    },
    {
      "latitude": 52.457947,
      "longitude": 19.778452,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667488391,
      "ems": null
    },
    {
      "latitude": 52.455433,
      "longitude": 19.777822,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488397,
      "ems": null
    },
    {
      "latitude": 52.454178,
      "longitude": 19.777195,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488401,
      "ems": null
    },
    {
      "latitude": 52.45306,
      "longitude": 19.776567,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667488403,
      "ems": null
    },
    {
      "latitude": 52.451851,
      "longitude": 19.775862,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667488407,
      "ems": null
    },
    {
      "latitude": 52.450638,
      "longitude": 19.775076,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667488409,
      "ems": null
    },
    {
      "latitude": 52.44928,
      "longitude": 19.774246,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1667488413,
      "ems": null
    },
    {
      "latitude": 52.448044,
      "longitude": 19.773407,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1667488416,
      "ems": null
    },
    {
      "latitude": 52.446945,
      "longitude": 19.772644,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488418,
      "ems": null
    },
    {
      "latitude": 52.445572,
      "longitude": 19.771652,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488422,
      "ems": null
    },
    {
      "latitude": 52.444336,
      "longitude": 19.770737,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488425,
      "ems": null
    },
    {
      "latitude": 52.443146,
      "longitude": 19.769819,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488428,
      "ems": null
    },
    {
      "latitude": 52.441864,
      "longitude": 19.768829,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488431,
      "ems": null
    },
    {
      "latitude": 52.440628,
      "longitude": 19.767838,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488434,
      "ems": null
    },
    {
      "latitude": 52.439419,
      "longitude": 19.766916,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488437,
      "ems": null
    },
    {
      "latitude": 52.438156,
      "longitude": 19.765854,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488440,
      "ems": null
    },
    {
      "latitude": 52.436905,
      "longitude": 19.764875,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488443,
      "ems": null
    },
    {
      "latitude": 52.435837,
      "longitude": 19.764011,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488446,
      "ems": null
    },
    {
      "latitude": 52.433395,
      "longitude": 19.762115,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488452,
      "ems": null
    },
    {
      "latitude": 52.431274,
      "longitude": 19.760403,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488458,
      "ems": null
    },
    {
      "latitude": 52.429039,
      "longitude": 19.758596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488464,
      "ems": null
    },
    {
      "latitude": 52.426712,
      "longitude": 19.756636,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488470,
      "ems": null
    },
    {
      "latitude": 52.424423,
      "longitude": 19.754715,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488476,
      "ems": null
    },
    {
      "latitude": 52.422195,
      "longitude": 19.75279,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667488482,
      "ems": null
    },
    {
      "latitude": 52.421078,
      "longitude": 19.751692,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667488485,
      "ems": null
    },
    {
      "latitude": 52.418842,
      "longitude": 19.749573,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667488491,
      "ems": null
    },
    {
      "latitude": 52.41647,
      "longitude": 19.747375,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667488497,
      "ems": null
    },
    {
      "latitude": 52.41433,
      "longitude": 19.745571,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488503,
      "ems": null
    },
    {
      "latitude": 52.411972,
      "longitude": 19.743576,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488509,
      "ems": null
    },
    {
      "latitude": 52.410931,
      "longitude": 19.742903,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488512,
      "ems": null
    },
    {
      "latitude": 52.4095,
      "longitude": 19.741898,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667488515,
      "ems": null
    },
    {
      "latitude": 52.408813,
      "longitude": 19.74144,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488517,
      "ems": null
    },
    {
      "latitude": 52.40744,
      "longitude": 19.740448,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488521,
      "ems": null
    },
    {
      "latitude": 52.406509,
      "longitude": 19.739763,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488523,
      "ems": null
    },
    {
      "latitude": 52.403343,
      "longitude": 19.73741,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488532,
      "ems": null
    },
    {
      "latitude": 52.400345,
      "longitude": 19.735031,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488539,
      "ems": null
    },
    {
      "latitude": 52.397755,
      "longitude": 19.732937,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488545,
      "ems": null
    },
    {
      "latitude": 52.39563,
      "longitude": 19.731293,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488551,
      "ems": null
    },
    {
      "latitude": 52.393112,
      "longitude": 19.729385,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488557,
      "ems": null
    },
    {
      "latitude": 52.390728,
      "longitude": 19.727365,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488563,
      "ems": null
    },
    {
      "latitude": 52.388626,
      "longitude": 19.725494,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488569,
      "ems": null
    },
    {
      "latitude": 52.38607,
      "longitude": 19.72344,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667488575,
      "ems": null
    },
    {
      "latitude": 52.383911,
      "longitude": 19.721832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488581,
      "ems": null
    },
    {
      "latitude": 52.381371,
      "longitude": 19.719988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488587,
      "ems": null
    },
    {
      "latitude": 52.378922,
      "longitude": 19.718323,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667488593,
      "ems": null
    },
    {
      "latitude": 52.37653,
      "longitude": 19.716614,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488600,
      "ems": null
    },
    {
      "latitude": 52.374199,
      "longitude": 19.714731,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488606,
      "ems": null
    },
    {
      "latitude": 52.371872,
      "longitude": 19.71283,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488612,
      "ems": null
    },
    {
      "latitude": 52.370224,
      "longitude": 19.711533,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488617,
      "ems": null
    },
    {
      "latitude": 52.367451,
      "longitude": 19.709238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488623,
      "ems": null
    },
    {
      "latitude": 52.365124,
      "longitude": 19.707354,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488629,
      "ems": null
    },
    {
      "latitude": 52.36261,
      "longitude": 19.705,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667488636,
      "ems": null
    },
    {
      "latitude": 52.360283,
      "longitude": 19.702959,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667488642,
      "ems": null
    },
    {
      "latitude": 52.357956,
      "longitude": 19.700928,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667488648,
      "ems": null
    },
    {
      "latitude": 52.355621,
      "longitude": 19.698944,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667488654,
      "ems": null
    },
    {
      "latitude": 52.353157,
      "longitude": 19.697388,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667488660,
      "ems": null
    },
    {
      "latitude": 52.351902,
      "longitude": 19.696917,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488663,
      "ems": null
    },
    {
      "latitude": 52.350677,
      "longitude": 19.696579,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488666,
      "ems": null
    },
    {
      "latitude": 52.349716,
      "longitude": 19.696274,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488668,
      "ems": null
    },
    {
      "latitude": 52.34827,
      "longitude": 19.695974,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667488672,
      "ems": null
    },
    {
      "latitude": 52.347015,
      "longitude": 19.695663,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488675,
      "ems": null
    },
    {
      "latitude": 52.345802,
      "longitude": 19.695505,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667488678,
      "ems": null
    },
    {
      "latitude": 52.344543,
      "longitude": 19.695282,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667488681,
      "ems": null
    },
    {
      "latitude": 52.343216,
      "longitude": 19.695053,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488684,
      "ems": null
    },
    {
      "latitude": 52.341934,
      "longitude": 19.694824,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667488687,
      "ems": null
    },
    {
      "latitude": 52.340637,
      "longitude": 19.694641,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667488690,
      "ems": null
    },
    {
      "latitude": 52.339371,
      "longitude": 19.694443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667488693,
      "ems": null
    },
    {
      "latitude": 52.338226,
      "longitude": 19.694366,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667488696,
      "ems": null
    },
    {
      "latitude": 52.336853,
      "longitude": 19.694138,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667488699,
      "ems": null
    },
    {
      "latitude": 52.334259,
      "longitude": 19.693621,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667488705,
      "ems": null
    },
    {
      "latitude": 52.331745,
      "longitude": 19.693071,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667488711,
      "ems": null
    },
    {
      "latitude": 52.328934,
      "longitude": 19.69223,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488717,
      "ems": null
    },
    {
      "latitude": 52.327694,
      "longitude": 19.691895,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488720,
      "ems": null
    },
    {
      "latitude": 52.326553,
      "longitude": 19.691544,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488723,
      "ems": null
    },
    {
      "latitude": 52.32518,
      "longitude": 19.691162,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488726,
      "ems": null
    },
    {
      "latitude": 52.324203,
      "longitude": 19.690874,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488728,
      "ems": null
    },
    {
      "latitude": 52.322762,
      "longitude": 19.690403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488732,
      "ems": null
    },
    {
      "latitude": 52.321457,
      "longitude": 19.689932,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488735,
      "ems": null
    },
    {
      "latitude": 52.320053,
      "longitude": 19.689331,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488738,
      "ems": null
    },
    {
      "latitude": 52.318756,
      "longitude": 19.688833,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488741,
      "ems": null
    },
    {
      "latitude": 52.318432,
      "longitude": 19.688677,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488742,
      "ems": null
    },
    {
      "latitude": 52.315933,
      "longitude": 19.687729,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488748,
      "ems": null
    },
    {
      "latitude": 52.313919,
      "longitude": 19.68689,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667488753,
      "ems": null
    },
    {
      "latitude": 52.312683,
      "longitude": 19.686356,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488756,
      "ems": null
    },
    {
      "latitude": 52.310146,
      "longitude": 19.685225,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667488762,
      "ems": null
    },
    {
      "latitude": 52.307583,
      "longitude": 19.684048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488768,
      "ems": null
    },
    {
      "latitude": 52.305069,
      "longitude": 19.682713,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488774,
      "ems": null
    },
    {
      "latitude": 52.302383,
      "longitude": 19.681396,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667488780,
      "ems": null
    },
    {
      "latitude": 52.2995,
      "longitude": 19.680176,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488786,
      "ems": null
    },
    {
      "latitude": 52.296692,
      "longitude": 19.679104,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488793,
      "ems": null
    },
    {
      "latitude": 52.295479,
      "longitude": 19.678711,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488796,
      "ems": null
    },
    {
      "latitude": 52.2939,
      "longitude": 19.67824,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488799,
      "ems": null
    },
    {
      "latitude": 52.292549,
      "longitude": 19.677847,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488802,
      "ems": null
    },
    {
      "latitude": 52.291168,
      "longitude": 19.677429,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488805,
      "ems": null
    },
    {
      "latitude": 52.289886,
      "longitude": 19.676971,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488807,
      "ems": null
    },
    {
      "latitude": 52.287239,
      "longitude": 19.675886,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488813,
      "ems": null
    },
    {
      "latitude": 52.284542,
      "longitude": 19.674551,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667488819,
      "ems": null
    },
    {
      "latitude": 52.283066,
      "longitude": 19.673615,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667488823,
      "ems": null
    },
    {
      "latitude": 52.2817,
      "longitude": 19.672668,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488826,
      "ems": null
    },
    {
      "latitude": 52.280457,
      "longitude": 19.671707,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488829,
      "ems": null
    },
    {
      "latitude": 52.279282,
      "longitude": 19.670942,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667488831,
      "ems": null
    },
    {
      "latitude": 52.277931,
      "longitude": 19.67,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1667488834,
      "ems": null
    },
    {
      "latitude": 52.276485,
      "longitude": 19.669058,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667488838,
      "ems": null
    },
    {
      "latitude": 52.27565,
      "longitude": 19.66843,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667488839,
      "ems": null
    },
    {
      "latitude": 52.272263,
      "longitude": 19.666443,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667488847,
      "ems": null
    },
    {
      "latitude": 52.272018,
      "longitude": 19.666311,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667488849,
      "ems": null
    },
    {
      "latitude": 52.269924,
      "longitude": 19.665371,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667488853,
      "ems": null
    },
    {
      "latitude": 52.268143,
      "longitude": 19.664688,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667488856,
      "ems": null
    },
    {
      "latitude": 52.266991,
      "longitude": 19.664272,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488859,
      "ems": null
    },
    {
      "latitude": 52.265781,
      "longitude": 19.663879,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488862,
      "ems": null
    },
    {
      "latitude": 52.264984,
      "longitude": 19.663696,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667488864,
      "ems": null
    },
    {
      "latitude": 52.263359,
      "longitude": 19.663252,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667488868,
      "ems": null
    },
    {
      "latitude": 52.262428,
      "longitude": 19.663095,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488870,
      "ems": null
    },
    {
      "latitude": 52.261032,
      "longitude": 19.662859,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488874,
      "ems": null
    },
    {
      "latitude": 52.259903,
      "longitude": 19.662628,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667488877,
      "ems": null
    },
    {
      "latitude": 52.259171,
      "longitude": 19.662476,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667488879,
      "ems": null
    },
    {
      "latitude": 52.258392,
      "longitude": 19.662323,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667488881,
      "ems": null
    },
    {
      "latitude": 52.257168,
      "longitude": 19.661997,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667488884,
      "ems": null
    },
    {
      "latitude": 52.255165,
      "longitude": 19.661448,
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
      "timestamp": 1667488890,
      "ems": null
    },
    {
      "latitude": 52.252468,
      "longitude": 19.660662,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488897,
      "ems": null
    },
    {
      "latitude": 52.251068,
      "longitude": 19.660187,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488901,
      "ems": null
    },
    {
      "latitude": 52.25061,
      "longitude": 19.660034,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488902,
      "ems": null
    },
    {
      "latitude": 52.249954,
      "longitude": 19.6598,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488905,
      "ems": null
    },
    {
      "latitude": 52.24865,
      "longitude": 19.659328,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488908,
      "ems": null
    },
    {
      "latitude": 52.24646,
      "longitude": 19.658621,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488914,
      "ems": null
    },
    {
      "latitude": 52.244247,
      "longitude": 19.657974,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488920,
      "ems": null
    },
    {
      "latitude": 52.242085,
      "longitude": 19.657209,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488926,
      "ems": null
    },
    {
      "latitude": 52.239899,
      "longitude": 19.656525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488932,
      "ems": null
    },
    {
      "latitude": 52.237473,
      "longitude": 19.655762,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488938,
      "ems": null
    },
    {
      "latitude": 52.235504,
      "longitude": 19.654999,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1667488944,
      "ems": null
    },
    {
      "latitude": 52.233055,
      "longitude": 19.65407,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1667488950,
      "ems": null
    },
    {
      "latitude": 52.231659,
      "longitude": 19.653473,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667488956,
      "ems": null
    },
    {
      "latitude": 52.228088,
      "longitude": 19.652328,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488962,
      "ems": null
    },
    {
      "latitude": 52.225708,
      "longitude": 19.651566,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488968,
      "ems": null
    },
    {
      "latitude": 52.222954,
      "longitude": 19.650774,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488974,
      "ems": null
    },
    {
      "latitude": 52.220352,
      "longitude": 19.649963,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667488980,
      "ems": null
    },
    {
      "latitude": 52.218246,
      "longitude": 19.649277,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667488985,
      "ems": null
    },
    {
      "latitude": 52.214153,
      "longitude": 19.647871,
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
      "heading": 192,
      "squawk": "7372",
      "timestamp": 1667488995,
      "ems": null
    },
    {
      "latitude": 52.211655,
      "longitude": 19.646988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7372",
      "timestamp": 1667489001,
      "ems": null
    },
    {
      "latitude": 52.208847,
      "longitude": 19.645987,
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
      "heading": 192,
      "squawk": "7372",
      "timestamp": 1667489007,
      "ems": null
    },
    {
      "latitude": 52.206482,
      "longitude": 19.645157,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7372",
      "timestamp": 1667489013,
      "ems": null
    },
    {
      "latitude": 52.203865,
      "longitude": 19.64426,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7372",
      "timestamp": 1667489019,
      "ems": null
    },
    {
      "latitude": 52.20219,
      "longitude": 19.644026,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "7372",
      "timestamp": 1667489025,
      "ems": null
    },
    {
      "latitude": 52.200516,
      "longitude": 19.643869,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "7372",
      "timestamp": 1667489027,
      "ems": null
    },
    {
      "latitude": 52.199432,
      "longitude": 19.643784,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489030,
      "ems": null
    },
    {
      "latitude": 52.197952,
      "longitude": 19.643711,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489033,
      "ems": null
    },
    {
      "latitude": 52.196602,
      "longitude": 19.643633,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489037,
      "ems": null
    },
    {
      "latitude": 52.195393,
      "longitude": 19.643555,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489039,
      "ems": null
    },
    {
      "latitude": 52.194351,
      "longitude": 19.643478,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489042,
      "ems": null
    },
    {
      "latitude": 52.192879,
      "longitude": 19.643476,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489045,
      "ems": null
    },
    {
      "latitude": 52.18948,
      "longitude": 19.643476,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667489054,
      "ems": null
    },
    {
      "latitude": 52.185711,
      "longitude": 19.643476,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489062,
      "ems": null
    },
    {
      "latitude": 52.181946,
      "longitude": 19.643555,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667489070,
      "ems": null
    },
    {
      "latitude": 52.178589,
      "longitude": 19.643398,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489079,
      "ems": null
    },
    {
      "latitude": 52.175858,
      "longitude": 19.64325,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489084,
      "ems": null
    },
    {
      "latitude": 52.171417,
      "longitude": 19.642927,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489094,
      "ems": null
    },
    {
      "latitude": 52.169369,
      "longitude": 19.642849,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489099,
      "ems": null
    },
    {
      "latitude": 52.165691,
      "longitude": 19.642456,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489107,
      "ems": null
    },
    {
      "latitude": 52.162216,
      "longitude": 19.642258,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489115,
      "ems": null
    },
    {
      "latitude": 52.158897,
      "longitude": 19.642378,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489123,
      "ems": null
    },
    {
      "latitude": 52.154343,
      "longitude": 19.642715,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489133,
      "ems": null
    },
    {
      "latitude": 52.152939,
      "longitude": 19.642849,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489137,
      "ems": null
    },
    {
      "latitude": 52.148888,
      "longitude": 19.643162,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489146,
      "ems": null
    },
    {
      "latitude": 52.144272,
      "longitude": 19.643478,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489157,
      "ems": null
    },
    {
      "latitude": 52.139717,
      "longitude": 19.64332,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489167,
      "ems": null
    },
    {
      "latitude": 52.138046,
      "longitude": 19.64325,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489172,
      "ems": null
    },
    {
      "latitude": 52.135342,
      "longitude": 19.643005,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489177,
      "ems": null
    },
    {
      "latitude": 52.130951,
      "longitude": 19.642715,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489188,
      "ems": null
    },
    {
      "latitude": 52.126495,
      "longitude": 19.642612,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489198,
      "ems": null
    },
    {
      "latitude": 52.123005,
      "longitude": 19.642534,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489207,
      "ems": null
    },
    {
      "latitude": 52.11882,
      "longitude": 19.642563,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489216,
      "ems": null
    },
    {
      "latitude": 52.114487,
      "longitude": 19.642771,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489226,
      "ems": null
    },
    {
      "latitude": 52.112762,
      "longitude": 19.642771,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489231,
      "ems": null
    },
    {
      "latitude": 52.110809,
      "longitude": 19.642534,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489235,
      "ems": null
    },
    {
      "latitude": 52.108807,
      "longitude": 19.642221,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667489239,
      "ems": null
    },
    {
      "latitude": 52.106525,
      "longitude": 19.641907,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489245,
      "ems": null
    },
    {
      "latitude": 52.104813,
      "longitude": 19.641647,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489249,
      "ems": null
    },
    {
      "latitude": 52.101124,
      "longitude": 19.640965,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667489258,
      "ems": null
    },
    {
      "latitude": 52.097076,
      "longitude": 19.640259,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667489268,
      "ems": null
    },
    {
      "latitude": 52.093506,
      "longitude": 19.639587,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667489278,
      "ems": null
    },
    {
      "latitude": 52.090073,
      "longitude": 19.638977,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667489287,
      "ems": null
    },
    {
      "latitude": 52.088371,
      "longitude": 19.638767,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667489293,
      "ems": null
    },
    {
      "latitude": 52.085575,
      "longitude": 19.638296,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489299,
      "ems": null
    },
    {
      "latitude": 52.082062,
      "longitude": 19.637985,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489307,
      "ems": null
    },
    {
      "latitude": 52.080185,
      "longitude": 19.637909,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489312,
      "ems": null
    },
    {
      "latitude": 52.077103,
      "longitude": 19.637827,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489320,
      "ems": null
    },
    {
      "latitude": 52.075985,
      "longitude": 19.637747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489323,
      "ems": null
    },
    {
      "latitude": 52.075562,
      "longitude": 19.637756,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489324,
      "ems": null
    },
    {
      "latitude": 52.071854,
      "longitude": 19.637604,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489333,
      "ems": null
    },
    {
      "latitude": 52.069469,
      "longitude": 19.63759,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489339,
      "ems": null
    },
    {
      "latitude": 52.067188,
      "longitude": 19.63759,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489344,
      "ems": null
    },
    {
      "latitude": 52.065048,
      "longitude": 19.63759,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489350,
      "ems": null
    },
    {
      "latitude": 52.062302,
      "longitude": 19.637434,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489356,
      "ems": null
    },
    {
      "latitude": 52.060207,
      "longitude": 19.637278,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489361,
      "ems": null
    },
    {
      "latitude": 52.057178,
      "longitude": 19.637119,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489368,
      "ems": null
    },
    {
      "latitude": 52.054276,
      "longitude": 19.63707,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489375,
      "ems": null
    },
    {
      "latitude": 52.051941,
      "longitude": 19.636993,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489380,
      "ems": null
    },
    {
      "latitude": 52.049126,
      "longitude": 19.636885,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489387,
      "ems": null
    },
    {
      "latitude": 52.046566,
      "longitude": 19.636648,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489393,
      "ems": null
    },
    {
      "latitude": 52.044205,
      "longitude": 19.636612,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667489398,
      "ems": null
    },
    {
      "latitude": 52.040543,
      "longitude": 19.636841,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489407,
      "ems": null
    },
    {
      "latitude": 52.037796,
      "longitude": 19.63707,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489414,
      "ems": null
    },
    {
      "latitude": 52.036232,
      "longitude": 19.637197,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489419,
      "ems": null
    },
    {
      "latitude": 52.033951,
      "longitude": 19.637375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489423,
      "ems": null
    },
    {
      "latitude": 52.030746,
      "longitude": 19.637604,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489431,
      "ems": null
    },
    {
      "latitude": 52.025848,
      "longitude": 19.63768,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489442,
      "ems": null
    },
    {
      "latitude": 52.023972,
      "longitude": 19.637604,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489447,
      "ems": null
    },
    {
      "latitude": 52.022499,
      "longitude": 19.637512,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489451,
      "ems": null
    },
    {
      "latitude": 52.019165,
      "longitude": 19.637375,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489459,
      "ems": null
    },
    {
      "latitude": 52.016098,
      "longitude": 19.637375,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489467,
      "ems": null
    },
    {
      "latitude": 52.012348,
      "longitude": 19.637356,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489476,
      "ems": null
    },
    {
      "latitude": 52.010147,
      "longitude": 19.637299,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489484,
      "ems": null
    },
    {
      "latitude": 52.005707,
      "longitude": 19.637375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489492,
      "ems": null
    },
    {
      "latitude": 52.002869,
      "longitude": 19.63768,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489500,
      "ems": null
    },
    {
      "latitude": 51.998943,
      "longitude": 19.638062,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489509,
      "ems": null
    },
    {
      "latitude": 51.994938,
      "longitude": 19.638218,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489519,
      "ems": null
    },
    {
      "latitude": 51.992111,
      "longitude": 19.63829,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667489526,
      "ems": null
    },
    {
      "latitude": 51.988377,
      "longitude": 19.638296,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489535,
      "ems": null
    },
    {
      "latitude": 51.986652,
      "longitude": 19.638218,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489540,
      "ems": null
    },
    {
      "latitude": 51.983597,
      "longitude": 19.638214,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489546,
      "ems": null
    },
    {
      "latitude": 51.980896,
      "longitude": 19.638062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667489553,
      "ems": null
    },
    {
      "latitude": 51.97683,
      "longitude": 19.637983,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489562,
      "ems": null
    },
    {
      "latitude": 51.972919,
      "longitude": 19.638218,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489572,
      "ems": null
    },
    {
      "latitude": 51.970638,
      "longitude": 19.638454,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489577,
      "ems": null
    },
    {
      "latitude": 51.96936,
      "longitude": 19.638596,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667489581,
      "ems": null
    },
    {
      "latitude": 51.967484,
      "longitude": 19.638977,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1667489585,
      "ems": null
    },
    {
      "latitude": 51.966019,
      "longitude": 19.639282,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667489589,
      "ems": null
    },
    {
      "latitude": 51.964027,
      "longitude": 19.639709,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667489593,
      "ems": null
    },
    {
      "latitude": 51.962353,
      "longitude": 19.640102,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667489597,
      "ems": null
    },
    {
      "latitude": 51.961029,
      "longitude": 19.640503,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667489601,
      "ems": null
    },
    {
      "latitude": 51.958534,
      "longitude": 19.641043,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667489609,
      "ems": null
    },
    {
      "latitude": 51.954391,
      "longitude": 19.641647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667489618,
      "ems": null
    },
    {
      "latitude": 51.952343,
      "longitude": 19.64175,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489623,
      "ems": null
    },
    {
      "latitude": 51.950363,
      "longitude": 19.641876,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489627,
      "ems": null
    },
    {
      "latitude": 51.948898,
      "longitude": 19.641907,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667489631,
      "ems": null
    },
    {
      "latitude": 51.947388,
      "longitude": 19.641953,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489635,
      "ems": null
    },
    {
      "latitude": 51.943497,
      "longitude": 19.642105,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489644,
      "ems": null
    },
    {
      "latitude": 51.941685,
      "longitude": 19.641985,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489650,
      "ems": null
    },
    {
      "latitude": 51.939121,
      "longitude": 19.64175,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489655,
      "ems": null
    },
    {
      "latitude": 51.937088,
      "longitude": 19.641495,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489660,
      "ems": null
    },
    {
      "latitude": 51.934845,
      "longitude": 19.64119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489666,
      "ems": null
    },
    {
      "latitude": 51.931816,
      "longitude": 19.640808,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667489674,
      "ems": null
    },
    {
      "latitude": 51.928391,
      "longitude": 19.640121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667489682,
      "ems": null
    },
    {
      "latitude": 51.925297,
      "longitude": 19.639553,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667489690,
      "ems": null
    },
    {
      "latitude": 51.922878,
      "longitude": 19.639238,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489699,
      "ems": null
    },
    {
      "latitude": 51.919292,
      "longitude": 19.639082,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667489705,
      "ems": null
    },
    {
      "latitude": 51.917862,
      "longitude": 19.63913,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667489708,
      "ems": null
    },
    {
      "latitude": 51.916489,
      "longitude": 19.639282,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667489712,
      "ems": null
    },
    {
      "latitude": 51.915482,
      "longitude": 19.639359,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667489715,
      "ems": null
    },
    {
      "latitude": 51.914497,
      "longitude": 19.639395,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489717,
      "ems": null
    },
    {
      "latitude": 51.913147,
      "longitude": 19.639435,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667489721,
      "ems": null
    },
    {
      "latitude": 51.910995,
      "longitude": 19.639359,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667489726,
      "ems": null
    },
    {
      "latitude": 51.908352,
      "longitude": 19.639082,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667489733,
      "ems": null
    },
    {
      "latitude": 51.90715,
      "longitude": 19.638977,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667489735,
      "ems": null
    },
    {
      "latitude": 51.904907,
      "longitude": 19.638443,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667489741,
      "ems": null
    },
    {
      "latitude": 51.903465,
      "longitude": 19.637827,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667489745,
      "ems": null
    },
    {
      "latitude": 51.902481,
      "longitude": 19.637299,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667489747,
      "ems": null
    },
    {
      "latitude": 51.902115,
      "longitude": 19.637041,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667489750,
      "ems": null
    },
    {
      "latitude": 51.900146,
      "longitude": 19.635544,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667489753,
      "ems": null
    },
    {
      "latitude": 51.899834,
      "longitude": 19.635237,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667489754,
      "ems": null
    },
    {
      "latitude": 51.899277,
      "longitude": 19.634705,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667489756,
      "ems": null
    },
    {
      "latitude": 51.898762,
      "longitude": 19.634138,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667489757,
      "ems": null
    },
    {
      "latitude": 51.897675,
      "longitude": 19.632874,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1667489760,
      "ems": null
    },
    {
      "latitude": 51.896759,
      "longitude": 19.631653,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667489763,
      "ems": null
    },
    {
      "latitude": 51.895752,
      "longitude": 19.630051,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667489766,
      "ems": null
    },
    {
      "latitude": 51.894943,
      "longitude": 19.628489,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667489769,
      "ems": null
    },
    {
      "latitude": 51.894199,
      "longitude": 19.626841,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1667489773,
      "ems": null
    },
    {
      "latitude": 51.89341,
      "longitude": 19.624557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667489776,
      "ems": null
    },
    {
      "latitude": 51.892776,
      "longitude": 19.622547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667489779,
      "ems": null
    },
    {
      "latitude": 51.892292,
      "longitude": 19.620819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667489781,
      "ems": null
    },
    {
      "latitude": 51.891953,
      "longitude": 19.619354,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489784,
      "ems": null
    },
    {
      "latitude": 51.891403,
      "longitude": 19.616905,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489787,
      "ems": null
    },
    {
      "latitude": 51.890762,
      "longitude": 19.614307,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489791,
      "ems": null
    },
    {
      "latitude": 51.890244,
      "longitude": 19.612122,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489794,
      "ems": null
    },
    {
      "latitude": 51.889984,
      "longitude": 19.611042,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489796,
      "ems": null
    },
    {
      "latitude": 51.889313,
      "longitude": 19.608383,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489799,
      "ems": null
    },
    {
      "latitude": 51.88908,
      "longitude": 19.607391,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489801,
      "ems": null
    },
    {
      "latitude": 51.888336,
      "longitude": 19.60434,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489805,
      "ems": null
    },
    {
      "latitude": 51.887218,
      "longitude": 19.600067,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489811,
      "ems": null
    },
    {
      "latitude": 51.886185,
      "longitude": 19.595898,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489817,
      "ems": null
    },
    {
      "latitude": 51.885086,
      "longitude": 19.591295,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489823,
      "ems": null
    },
    {
      "latitude": 51.884079,
      "longitude": 19.587139,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489829,
      "ems": null
    },
    {
      "latitude": 51.883026,
      "longitude": 19.582981,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489835,
      "ems": null
    },
    {
      "latitude": 51.881912,
      "longitude": 19.578552,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489841,
      "ems": null
    },
    {
      "latitude": 51.88092,
      "longitude": 19.574444,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489847,
      "ems": null
    },
    {
      "latitude": 51.879822,
      "longitude": 19.569695,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489853,
      "ems": null
    },
    {
      "latitude": 51.87886,
      "longitude": 19.565462,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489859,
      "ems": null
    },
    {
      "latitude": 51.877762,
      "longitude": 19.560564,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489865,
      "ems": null
    },
    {
      "latitude": 51.876663,
      "longitude": 19.555962,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489871,
      "ems": null
    },
    {
      "latitude": 51.875427,
      "longitude": 19.550543,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489878,
      "ems": null
    },
    {
      "latitude": 51.874237,
      "longitude": 19.545494,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489885,
      "ems": null
    },
    {
      "latitude": 51.872787,
      "longitude": 19.538803,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489893,
      "ems": null
    },
    {
      "latitude": 51.871765,
      "longitude": 19.534285,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489899,
      "ems": null
    },
    {
      "latitude": 51.870319,
      "longitude": 19.528275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489907,
      "ems": null
    },
    {
      "latitude": 51.869343,
      "longitude": 19.523849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489913,
      "ems": null
    },
    {
      "latitude": 51.86824,
      "longitude": 19.518993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489919,
      "ems": null
    },
    {
      "latitude": 51.867199,
      "longitude": 19.514389,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489925,
      "ems": null
    },
    {
      "latitude": 51.866131,
      "longitude": 19.509888,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489931,
      "ems": null
    },
    {
      "latitude": 51.864944,
      "longitude": 19.505409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667489937,
      "ems": null
    },
    {
      "latitude": 51.863754,
      "longitude": 19.501179,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667489943,
      "ems": null
    },
    {
      "latitude": 51.862591,
      "longitude": 19.496765,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667489949,
      "ems": null
    },
    {
      "latitude": 51.861519,
      "longitude": 19.492569,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667489956,
      "ems": null
    },
    {
      "latitude": 51.860497,
      "longitude": 19.488297,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489961,
      "ems": null
    },
    {
      "latitude": 51.85947,
      "longitude": 19.483948,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489968,
      "ems": null
    },
    {
      "latitude": 51.85854,
      "longitude": 19.479675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489973,
      "ems": null
    },
    {
      "latitude": 51.857574,
      "longitude": 19.47542,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667489980,
      "ems": null
    },
    {
      "latitude": 51.856632,
      "longitude": 19.471207,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489986,
      "ems": null
    },
    {
      "latitude": 51.855698,
      "longitude": 19.46718,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667489992,
      "ems": null
    },
    {
      "latitude": 51.854736,
      "longitude": 19.463245,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667489998,
      "ems": null
    },
    {
      "latitude": 51.853821,
      "longitude": 19.459087,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490003,
      "ems": null
    },
    {
      "latitude": 51.852955,
      "longitude": 19.454727,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667490010,
      "ems": null
    },
    {
      "latitude": 51.852173,
      "longitude": 19.450626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667490016,
      "ems": null
    },
    {
      "latitude": 51.851395,
      "longitude": 19.446468,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667490022,
      "ems": null
    },
    {
      "latitude": 51.850628,
      "longitude": 19.442215,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667490028,
      "ems": null
    },
    {
      "latitude": 51.850254,
      "longitude": 19.440231,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667490031,
      "ems": null
    },
    {
      "latitude": 51.849564,
      "longitude": 19.436152,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667490037,
      "ems": null
    },
    {
      "latitude": 51.848721,
      "longitude": 19.431763,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667490043,
      "ems": null
    },
    {
      "latitude": 51.847881,
      "longitude": 19.427719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667490049,
      "ems": null
    },
    {
      "latitude": 51.847042,
      "longitude": 19.423752,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490055,
      "ems": null
    },
    {
      "latitude": 51.846542,
      "longitude": 19.421675,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667490058,
      "ems": null
    },
    {
      "latitude": 51.846085,
      "longitude": 19.419672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667490061,
      "ems": null
    },
    {
      "latitude": 51.845627,
      "longitude": 19.417667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667490064,
      "ems": null
    },
    {
      "latitude": 51.844715,
      "longitude": 19.413452,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490070,
      "ems": null
    },
    {
      "latitude": 51.843887,
      "longitude": 19.409649,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490076,
      "ems": null
    },
    {
      "latitude": 51.842899,
      "longitude": 19.405289,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667490082,
      "ems": null
    },
    {
      "latitude": 51.841965,
      "longitude": 19.401039,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667490088,
      "ems": null
    },
    {
      "latitude": 51.841084,
      "longitude": 19.39682,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667490094,
      "ems": null
    },
    {
      "latitude": 51.840244,
      "longitude": 19.392776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667490100,
      "ems": null
    },
    {
      "latitude": 51.83931,
      "longitude": 19.388494,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490106,
      "ems": null
    },
    {
      "latitude": 51.838348,
      "longitude": 19.384262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490112,
      "ems": null
    },
    {
      "latitude": 51.837452,
      "longitude": 19.380493,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667490118,
      "ems": null
    },
    {
      "latitude": 51.83638,
      "longitude": 19.376171,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490124,
      "ems": null
    },
    {
      "latitude": 51.835831,
      "longitude": 19.374018,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667490127,
      "ems": null
    },
    {
      "latitude": 51.835266,
      "longitude": 19.372253,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667490130,
      "ems": null
    },
    {
      "latitude": 51.83466,
      "longitude": 19.370193,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667490133,
      "ems": null
    },
    {
      "latitude": 51.834137,
      "longitude": 19.368303,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667490136,
      "ems": null
    },
    {
      "latitude": 51.833633,
      "longitude": 19.366522,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667490139,
      "ems": null
    },
    {
      "latitude": 51.832581,
      "longitude": 19.362736,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667490145,
      "ems": null
    },
    {
      "latitude": 51.831493,
      "longitude": 19.358978,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667490151,
      "ems": null
    },
    {
      "latitude": 51.830429,
      "longitude": 19.355312,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667490157,
      "ems": null
    },
    {
      "latitude": 51.829468,
      "longitude": 19.351601,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667490163,
      "ems": null
    },
    {
      "latitude": 51.82901,
      "longitude": 19.349596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667490166,
      "ems": null
    },
    {
      "latitude": 51.827637,
      "longitude": 19.343731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490175,
      "ems": null
    },
    {
      "latitude": 51.826584,
      "longitude": 19.339872,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667490181,
      "ems": null
    },
    {
      "latitude": 51.825577,
      "longitude": 19.336012,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490187,
      "ems": null
    },
    {
      "latitude": 51.824478,
      "longitude": 19.331781,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490193,
      "ems": null
    },
    {
      "latitude": 51.823486,
      "longitude": 19.327927,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490199,
      "ems": null
    },
    {
      "latitude": 51.82251,
      "longitude": 19.324036,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667490205,
      "ems": null
    },
    {
      "latitude": 51.821548,
      "longitude": 19.320126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667490211,
      "ems": null
    },
    {
      "latitude": 51.820461,
      "longitude": 19.316177,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667490217,
      "ems": null
    },
    {
      "latitude": 51.819397,
      "longitude": 19.312407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667490223,
      "ems": null
    },
    {
      "latitude": 51.818207,
      "longitude": 19.308546,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667490229,
      "ems": null
    },
    {
      "latitude": 51.817566,
      "longitude": 19.30669,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667490232,
      "ems": null
    },
    {
      "latitude": 51.816784,
      "longitude": 19.304733,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667490236,
      "ems": null
    },
    {
      "latitude": 51.816101,
      "longitude": 19.303202,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667490238,
      "ems": null
    },
    {
      "latitude": 51.815155,
      "longitude": 19.301682,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1667490241,
      "ems": null
    },
    {
      "latitude": 51.814178,
      "longitude": 19.300537,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1667490244,
      "ems": null
    },
    {
      "latitude": 51.813107,
      "longitude": 19.299622,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667490247,
      "ems": null
    },
    {
      "latitude": 51.81189,
      "longitude": 19.298822,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667490251,
      "ems": null
    },
    {
      "latitude": 51.811012,
      "longitude": 19.298477,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667490253,
      "ems": null
    },
    {
      "latitude": 51.81078,
      "longitude": 19.298401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667490254,
      "ems": null
    },
    {
      "latitude": 51.809692,
      "longitude": 19.298302,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667490257,
      "ems": null
    },
    {
      "latitude": 51.808964,
      "longitude": 19.298325,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667490259,
      "ems": null
    },
    {
      "latitude": 51.807587,
      "longitude": 19.298748,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1667490263,
      "ems": null
    },
    {
      "latitude": 51.806717,
      "longitude": 19.299118,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1667490266,
      "ems": null
    },
    {
      "latitude": 51.80571,
      "longitude": 19.299786,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667490269,
      "ems": null
    },
    {
      "latitude": 51.804794,
      "longitude": 19.300455,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667490271,
      "ems": null
    },
    {
      "latitude": 51.803841,
      "longitude": 19.301224,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667490275,
      "ems": null
    },
    {
      "latitude": 51.802963,
      "longitude": 19.301939,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667490277,
      "ems": null
    },
    {
      "latitude": 51.802094,
      "longitude": 19.302607,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667490281,
      "ems": null
    },
    {
      "latitude": 51.801086,
      "longitude": 19.303425,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667490283,
      "ems": null
    },
    {
      "latitude": 51.800171,
      "longitude": 19.304167,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667490286,
      "ems": null
    },
    {
      "latitude": 51.799282,
      "longitude": 19.304962,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490290,
      "ems": null
    },
    {
      "latitude": 51.79834,
      "longitude": 19.305799,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490293,
      "ems": null
    },
    {
      "latitude": 51.797558,
      "longitude": 19.306564,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490295,
      "ems": null
    },
    {
      "latitude": 51.796509,
      "longitude": 19.307507,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490299,
      "ems": null
    },
    {
      "latitude": 51.79472,
      "longitude": 19.309006,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667490305,
      "ems": null
    },
    {
      "latitude": 51.79295,
      "longitude": 19.310532,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667490311,
      "ems": null
    },
    {
      "latitude": 51.79118,
      "longitude": 19.312057,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667490317,
      "ems": null
    },
    {
      "latitude": 51.789368,
      "longitude": 19.313816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667490323,
      "ems": null
    },
    {
      "latitude": 51.78772,
      "longitude": 19.315449,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667490329,
      "ems": null
    },
    {
      "latitude": 51.786015,
      "longitude": 19.317093,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667490335,
      "ems": null
    },
    {
      "latitude": 51.784424,
      "longitude": 19.318642,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667490341,
      "ems": null
    },
    {
      "latitude": 51.782707,
      "longitude": 19.320297,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667490347,
      "ems": null
    },
    {
      "latitude": 51.780987,
      "longitude": 19.321976,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667490353,
      "ems": null
    },
    {
      "latitude": 51.779263,
      "longitude": 19.323578,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490359,
      "ems": null
    },
    {
      "latitude": 51.777512,
      "longitude": 19.325323,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1667490365,
      "ems": null
    },
    {
      "latitude": 51.775818,
      "longitude": 19.327164,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667490371,
      "ems": null
    },
    {
      "latitude": 51.774048,
      "longitude": 19.328842,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490377,
      "ems": null
    },
    {
      "latitude": 51.772186,
      "longitude": 19.330521,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490383,
      "ems": null
    },
    {
      "latitude": 51.770416,
      "longitude": 19.332151,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667490389,
      "ems": null
    },
    {
      "latitude": 51.768555,
      "longitude": 19.333801,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667490395,
      "ems": null
    },
    {
      "latitude": 51.767578,
      "longitude": 19.334641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667490398,
      "ems": null
    },
    {
      "latitude": 51.765762,
      "longitude": 19.336319,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667490404,
      "ems": null
    },
    {
      "latitude": 51.764053,
      "longitude": 19.337942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667490410,
      "ems": null
    },
    {
      "latitude": 51.762177,
      "longitude": 19.339523,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667490416,
      "ems": null
    },
    {
      "latitude": 51.760315,
      "longitude": 19.341202,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667490422,
      "ems": null
    },
    {
      "latitude": 51.758606,
      "longitude": 19.342619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667490428,
      "ems": null
    },
    {
      "latitude": 51.757507,
      "longitude": 19.343287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1667490431,
      "ems": null
    },
    {
      "latitude": 51.7565,
      "longitude": 19.343731,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667490434,
      "ems": null
    },
    {
      "latitude": 51.755447,
      "longitude": 19.344103,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1667490437,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.3444,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667490440,
      "ems": null
    },
    {
      "latitude": 51.753334,
      "longitude": 19.344559,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667490443,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.344635,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667490446,
      "ems": null
    },
    {
      "latitude": 51.751968,
      "longitude": 19.344696,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667490447,
      "ems": null
    },
    {
      "latitude": 51.751465,
      "longitude": 19.344696,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667490450,
      "ems": null
    },
    {
      "latitude": 51.749542,
      "longitude": 19.344696,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667490454,
      "ems": null
    },
    {
      "latitude": 51.748444,
      "longitude": 19.344696,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667490457,
      "ems": null
    },
    {
      "latitude": 51.747299,
      "longitude": 19.34477,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667490460,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 19.344788,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667490463,
      "ems": null
    },
    {
      "latitude": 51.744953,
      "longitude": 19.344864,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667490466,
      "ems": null
    },
    {
      "latitude": 51.743866,
      "longitude": 19.344845,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667490469,
      "ems": null
    },
    {
      "latitude": 51.74263,
      "longitude": 19.344696,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667490472,
      "ems": null
    },
    {
      "latitude": 51.741623,
      "longitude": 19.344475,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667490475,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.344326,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667490478,
      "ems": null
    },
    {
      "latitude": 51.739517,
      "longitude": 19.344103,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667490481,
      "ems": null
    },
    {
      "latitude": 51.738529,
      "longitude": 19.343872,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667490484,
      "ems": null
    },
    {
      "latitude": 51.737457,
      "longitude": 19.343567,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1667490487,
      "ems": null
    },
    {
      "latitude": 51.736481,
      "longitude": 19.343185,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667490490,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.342768,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667490493,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.34227,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667490496,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 19.341812,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667490499,
      "ems": null
    },
    {
      "latitude": 51.732662,
      "longitude": 19.341431,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667490502,
      "ems": null
    },
    {
      "latitude": 51.731689,
      "longitude": 19.340912,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667490505,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.340439,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667490508,
      "ems": null
    },
    {
      "latitude": 51.729721,
      "longitude": 19.339947,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667490511,
      "ems": null
    },
    {
      "latitude": 51.728577,
      "longitude": 19.339352,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667490515,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.338531,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667490520,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 19.337921,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667490526,
      "ems": null
    },
    {
      "latitude": 51.72382,
      "longitude": 19.337845,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667490530,
      "ems": null
    },
    {
      "latitude": 51.722946,
      "longitude": 19.337868,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667490532,
      "ems": null
    },
    {
      "latitude": 51.722122,
      "longitude": 19.338091,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667490535,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.338455,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667490539,
      "ems": null
    },
    {
      "latitude": 51.720375,
      "longitude": 19.338913,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667490542,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.339277,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667490544,
      "ems": null
    },
    {
      "latitude": 51.718964,
      "longitude": 19.339872,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667490547,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.340614,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "7000",
      "timestamp": 1667490551,
      "ems": null
    },
    {
      "latitude": 51.717442,
      "longitude": 19.341202,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667490553,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.342098,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667490557,
      "ems": null
    },
    {
      "latitude": 51.71608,
      "longitude": 19.342768,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667490559,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.343643,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667490562,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.344635,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667490565,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.345736,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1667490569,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.346619,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1667490571,
      "ems": null
    },
    {
      "latitude": 51.713287,
      "longitude": 19.347889,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1667490575,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.348854,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1667490577,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.350117,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1667490581,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.351425,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667490583,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.352789,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667490586,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.354248,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667490590,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.355545,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667490592,
      "ems": null
    },
    {
      "latitude": 51.713104,
      "longitude": 19.356945,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667490595,
      "ems": null
    },
    {
      "latitude": 51.713379,
      "longitude": 19.358356,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667490599,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.359617,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667490602,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.360809,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667490604,
      "ems": null
    },
    {
      "latitude": 51.714043,
      "longitude": 19.36203,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667490607,
      "ems": null
    },
    {
      "latitude": 51.714294,
      "longitude": 19.363255,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667490610,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.364294,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667490613,
      "ems": null
    },
    {
      "latitude": 51.714798,
      "longitude": 19.365631,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667490617,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.367065,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1667490620,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.368229,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667490623,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.371124,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667490629,
      "ems": null
    },
    {
      "latitude": 51.7164,
      "longitude": 19.37298,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667490633,
      "ems": null
    }
  ]
};