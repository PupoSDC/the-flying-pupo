import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220727LPEVLPCS",
    callsign: "CSDHS",
    name: "RWY35 PAX Tiago Almeida",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 27, 8, 20).getTime(),
    arrival: new Date(2022, 6, 27, 9, 50).getTime(),
    singleEnginePistonTime: 90,
    picTime: 90,
    dualTime: 0,
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
      modes: "3D1229",
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Evora Aerodrome",
      code: "LPEV",
      position: {
        latitude: 38.5353648,
        longitude: -7.8925403,
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
      "latitude": 38.527878,
      "longitude": -7.890015,
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1658910608,
      "ems": null
    },
    {
      "latitude": 38.528088,
      "longitude": -7.890213,
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
      "heading": 241,
      "squawk": "0",
      "timestamp": 1658910621,
      "ems": null
    },
    {
      "latitude": 38.528355,
      "longitude": -7.890199,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 27.8,
        "kts": 15,
        "mph": 17.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658910635,
      "ems": null
    },
    {
      "latitude": 38.528641,
      "longitude": -7.890169,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658910637,
      "ems": null
    },
    {
      "latitude": 38.528973,
      "longitude": -7.890139,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 61.1,
        "kts": 33,
        "mph": 38
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658910640,
      "ems": null
    },
    {
      "latitude": 38.529297,
      "longitude": -7.890106,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658910642,
      "ems": null
    },
    {
      "latitude": 38.529602,
      "longitude": -7.890079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658910643,
      "ems": null
    },
    {
      "latitude": 38.529934,
      "longitude": -7.890049,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658910645,
      "ems": null
    },
    {
      "latitude": 38.531193,
      "longitude": -7.889954,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658910650,
      "ems": null
    },
    {
      "latitude": 38.533859,
      "longitude": -7.889676,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658910660,
      "ems": null
    },
    {
      "latitude": 38.535477,
      "longitude": -7.889526,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658910666,
      "ems": null
    },
    {
      "latitude": 38.538269,
      "longitude": -7.889282,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658910676,
      "ems": null
    },
    {
      "latitude": 38.538666,
      "longitude": -7.889318,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1658910677,
      "ems": null
    },
    {
      "latitude": 38.542557,
      "longitude": -7.889139,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1658910692,
      "ems": null
    },
    {
      "latitude": 38.544022,
      "longitude": -7.889199,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1658910697,
      "ems": null
    },
    {
      "latitude": 38.546814,
      "longitude": -7.889199,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1658910708,
      "ems": null
    },
    {
      "latitude": 38.54837,
      "longitude": -7.889221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1658910713,
      "ems": null
    },
    {
      "latitude": 38.550701,
      "longitude": -7.889343,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1658910721,
      "ems": null
    },
    {
      "latitude": 38.553085,
      "longitude": -7.889378,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658910729,
      "ems": null
    },
    {
      "latitude": 38.556335,
      "longitude": -7.889199,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658910740,
      "ems": null
    },
    {
      "latitude": 38.5578,
      "longitude": -7.888602,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1658910745,
      "ems": null
    },
    {
      "latitude": 38.559311,
      "longitude": -7.887109,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1658910751,
      "ems": null
    },
    {
      "latitude": 38.560364,
      "longitude": -7.884959,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1658910756,
      "ems": null
    },
    {
      "latitude": 38.560848,
      "longitude": -7.882935,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1658910761,
      "ems": null
    },
    {
      "latitude": 38.560913,
      "longitude": -7.882511,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1658910762,
      "ems": null
    },
    {
      "latitude": 38.561096,
      "longitude": -7.880959,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1658910765,
      "ems": null
    },
    {
      "latitude": 38.561222,
      "longitude": -7.879456,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1658910768,
      "ems": null
    },
    {
      "latitude": 38.561268,
      "longitude": -7.877808,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658910771,
      "ems": null
    },
    {
      "latitude": 38.561279,
      "longitude": -7.876242,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658910774,
      "ems": null
    },
    {
      "latitude": 38.561314,
      "longitude": -7.874939,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658910776,
      "ems": null
    },
    {
      "latitude": 38.561359,
      "longitude": -7.873047,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658910780,
      "ems": null
    },
    {
      "latitude": 38.561405,
      "longitude": -7.871521,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1658910783,
      "ems": null
    },
    {
      "latitude": 38.561371,
      "longitude": -7.869853,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658910786,
      "ems": null
    },
    {
      "latitude": 38.561371,
      "longitude": -7.868241,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658910789,
      "ems": null
    },
    {
      "latitude": 38.561325,
      "longitude": -7.866689,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658910792,
      "ems": null
    },
    {
      "latitude": 38.560959,
      "longitude": -7.864838,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658910795,
      "ems": null
    },
    {
      "latitude": 38.560616,
      "longitude": -7.863708,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1658910798,
      "ems": null
    },
    {
      "latitude": 38.559631,
      "longitude": -7.861972,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1658910801,
      "ems": null
    },
    {
      "latitude": 38.558762,
      "longitude": -7.860777,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1658910804,
      "ems": null
    },
    {
      "latitude": 38.558121,
      "longitude": -7.860121,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1658910806,
      "ems": null
    },
    {
      "latitude": 38.557125,
      "longitude": -7.859253,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1658910808,
      "ems": null
    },
    {
      "latitude": 38.554871,
      "longitude": -7.857912,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1658910813,
      "ems": null
    },
    {
      "latitude": 38.553268,
      "longitude": -7.857434,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1658910817,
      "ems": null
    },
    {
      "latitude": 38.552032,
      "longitude": -7.857315,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658910819,
      "ems": null
    },
    {
      "latitude": 38.549953,
      "longitude": -7.857361,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658910824,
      "ems": null
    },
    {
      "latitude": 38.548092,
      "longitude": -7.857483,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910828,
      "ems": null
    },
    {
      "latitude": 38.547024,
      "longitude": -7.857544,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910830,
      "ems": null
    },
    {
      "latitude": 38.545952,
      "longitude": -7.857666,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658910833,
      "ems": null
    },
    {
      "latitude": 38.545208,
      "longitude": -7.857788,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658910834,
      "ems": null
    },
    {
      "latitude": 38.543903,
      "longitude": -7.857971,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658910837,
      "ems": null
    },
    {
      "latitude": 38.541824,
      "longitude": -7.85827,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658910842,
      "ems": null
    },
    {
      "latitude": 38.540085,
      "longitude": -7.858521,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658910846,
      "ems": null
    },
    {
      "latitude": 38.539482,
      "longitude": -7.858643,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658910847,
      "ems": null
    },
    {
      "latitude": 38.535942,
      "longitude": -7.85907,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658910855,
      "ems": null
    },
    {
      "latitude": 38.533291,
      "longitude": -7.859436,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658910861,
      "ems": null
    },
    {
      "latitude": 38.529285,
      "longitude": -7.859863,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910870,
      "ems": null
    },
    {
      "latitude": 38.526447,
      "longitude": -7.860168,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910876,
      "ems": null
    },
    {
      "latitude": 38.523651,
      "longitude": -7.860419,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658910882,
      "ems": null
    },
    {
      "latitude": 38.521557,
      "longitude": -7.860596,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910888,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -7.860957,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658910894,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -7.861255,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658910900,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -7.86145,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658910906,
      "ems": null
    },
    {
      "latitude": 38.509872,
      "longitude": -7.861852,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658910913,
      "ems": null
    },
    {
      "latitude": 38.504753,
      "longitude": -7.86261,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658910923,
      "ems": null
    },
    {
      "latitude": 38.50275,
      "longitude": -7.863586,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1658910928,
      "ems": null
    },
    {
      "latitude": 38.501587,
      "longitude": -7.864718,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1658910932,
      "ems": null
    },
    {
      "latitude": 38.500748,
      "longitude": -7.866089,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1658910935,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -7.867226,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1658910937,
      "ems": null
    },
    {
      "latitude": 38.500004,
      "longitude": -7.868652,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1658910941,
      "ems": null
    },
    {
      "latitude": 38.499817,
      "longitude": -7.870422,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1658910944,
      "ems": null
    },
    {
      "latitude": 38.499756,
      "longitude": -7.871465,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1658910947,
      "ems": null
    },
    {
      "latitude": 38.49963,
      "longitude": -7.873413,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1658910950,
      "ems": null
    },
    {
      "latitude": 38.499527,
      "longitude": -7.874928,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1658910953,
      "ems": null
    },
    {
      "latitude": 38.499493,
      "longitude": -7.876343,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658910956,
      "ems": null
    },
    {
      "latitude": 38.499435,
      "longitude": -7.877675,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658910959,
      "ems": null
    },
    {
      "latitude": 38.499397,
      "longitude": -7.879395,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658910962,
      "ems": null
    },
    {
      "latitude": 38.499352,
      "longitude": -7.880676,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658910965,
      "ems": null
    },
    {
      "latitude": 38.499344,
      "longitude": -7.882272,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658910968,
      "ems": null
    },
    {
      "latitude": 38.499352,
      "longitude": -7.883545,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1658910971,
      "ems": null
    },
    {
      "latitude": 38.499306,
      "longitude": -7.885925,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658910977,
      "ems": null
    },
    {
      "latitude": 38.499165,
      "longitude": -7.889526,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658910983,
      "ems": null
    },
    {
      "latitude": 38.499119,
      "longitude": -7.892273,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658910989,
      "ems": null
    },
    {
      "latitude": 38.499119,
      "longitude": -7.894958,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658910995,
      "ems": null
    },
    {
      "latitude": 38.499161,
      "longitude": -7.898394,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658911001,
      "ems": null
    },
    {
      "latitude": 38.499165,
      "longitude": -7.901489,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658911007,
      "ems": null
    },
    {
      "latitude": 38.499298,
      "longitude": -7.904663,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658911013,
      "ems": null
    },
    {
      "latitude": 38.499527,
      "longitude": -7.906156,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658911016,
      "ems": null
    },
    {
      "latitude": 38.499817,
      "longitude": -7.907532,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1658911019,
      "ems": null
    },
    {
      "latitude": 38.500214,
      "longitude": -7.909022,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911022,
      "ems": null
    },
    {
      "latitude": 38.500656,
      "longitude": -7.910461,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658911025,
      "ems": null
    },
    {
      "latitude": 38.501221,
      "longitude": -7.912127,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658911028,
      "ems": null
    },
    {
      "latitude": 38.501633,
      "longitude": -7.913321,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658911031,
      "ems": null
    },
    {
      "latitude": 38.502098,
      "longitude": -7.914795,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658911034,
      "ems": null
    },
    {
      "latitude": 38.50264,
      "longitude": -7.916306,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658911037,
      "ems": null
    },
    {
      "latitude": 38.503143,
      "longitude": -7.917739,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1658911040,
      "ems": null
    },
    {
      "latitude": 38.503693,
      "longitude": -7.919172,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1658911043,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.920715,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1658911046,
      "ems": null
    },
    {
      "latitude": 38.504791,
      "longitude": -7.922217,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1658911049,
      "ems": null
    },
    {
      "latitude": 38.505341,
      "longitude": -7.92371,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1658911052,
      "ems": null
    },
    {
      "latitude": 38.506382,
      "longitude": -7.926636,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658911058,
      "ems": null
    },
    {
      "latitude": 38.507355,
      "longitude": -7.929562,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658911064,
      "ems": null
    },
    {
      "latitude": 38.508041,
      "longitude": -7.931592,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658911069,
      "ems": null
    },
    {
      "latitude": 38.509129,
      "longitude": -7.934998,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658911075,
      "ems": null
    },
    {
      "latitude": 38.510105,
      "longitude": -7.937683,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1658911081,
      "ems": null
    },
    {
      "latitude": 38.511154,
      "longitude": -7.940608,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1658911087,
      "ems": null
    },
    {
      "latitude": 38.512249,
      "longitude": -7.943604,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658911093,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -7.946638,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911099,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -7.949524,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1658911105,
      "ems": null
    },
    {
      "latitude": 38.514622,
      "longitude": -7.951904,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658911111,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -7.95459,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658911115,
      "ems": null
    },
    {
      "latitude": 38.517014,
      "longitude": -7.959535,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911126,
      "ems": null
    },
    {
      "latitude": 38.518066,
      "longitude": -7.962998,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911132,
      "ems": null
    },
    {
      "latitude": 38.51889,
      "longitude": -7.965983,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911138,
      "ems": null
    },
    {
      "latitude": 38.519836,
      "longitude": -7.969177,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1658911144,
      "ems": null
    },
    {
      "latitude": 38.520721,
      "longitude": -7.972229,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911150,
      "ems": null
    },
    {
      "latitude": 38.521603,
      "longitude": -7.975281,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911156,
      "ems": null
    },
    {
      "latitude": 38.522209,
      "longitude": -7.977234,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658911162,
      "ems": null
    },
    {
      "latitude": 38.523468,
      "longitude": -7.981328,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911168,
      "ems": null
    },
    {
      "latitude": 38.524399,
      "longitude": -7.984558,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911174,
      "ems": null
    },
    {
      "latitude": 38.525284,
      "longitude": -7.987793,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658911180,
      "ems": null
    },
    {
      "latitude": 38.525932,
      "longitude": -7.990417,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1658911186,
      "ems": null
    },
    {
      "latitude": 38.526772,
      "longitude": -7.994019,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658911192,
      "ems": null
    },
    {
      "latitude": 38.52747,
      "longitude": -7.997009,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658911198,
      "ems": null
    },
    {
      "latitude": 38.528229,
      "longitude": -8.000316,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658911204,
      "ems": null
    },
    {
      "latitude": 38.528503,
      "longitude": -8.00139,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658911207,
      "ems": null
    },
    {
      "latitude": 38.529331,
      "longitude": -8.005371,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658911213,
      "ems": null
    },
    {
      "latitude": 38.529984,
      "longitude": -8.008118,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1658911219,
      "ems": null
    },
    {
      "latitude": 38.530838,
      "longitude": -8.0116,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658911225,
      "ems": null
    },
    {
      "latitude": 38.531021,
      "longitude": -8.012317,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911228,
      "ems": null
    },
    {
      "latitude": 38.531658,
      "longitude": -8.014526,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658911231,
      "ems": null
    },
    {
      "latitude": 38.53244,
      "longitude": -8.017452,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658911237,
      "ems": null
    },
    {
      "latitude": 38.533081,
      "longitude": -8.021034,
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
      "timestamp": 1658911244,
      "ems": null
    },
    {
      "latitude": 38.533104,
      "longitude": -8.022583,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658911247,
      "ems": null
    },
    {
      "latitude": 38.532963,
      "longitude": -8.024231,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658911250,
      "ems": null
    },
    {
      "latitude": 38.532639,
      "longitude": -8.025635,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1658911253,
      "ems": null
    },
    {
      "latitude": 38.532032,
      "longitude": -8.027405,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1658911256,
      "ems": null
    },
    {
      "latitude": 38.531296,
      "longitude": -8.028916,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1658911259,
      "ems": null
    },
    {
      "latitude": 38.530334,
      "longitude": -8.030349,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658911262,
      "ems": null
    },
    {
      "latitude": 38.529373,
      "longitude": -8.031722,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911265,
      "ems": null
    },
    {
      "latitude": 38.528355,
      "longitude": -8.033142,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911268,
      "ems": null
    },
    {
      "latitude": 38.527359,
      "longitude": -8.03441,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911271,
      "ems": null
    },
    {
      "latitude": 38.527004,
      "longitude": -8.034912,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1658911274,
      "ems": null
    },
    {
      "latitude": 38.52562,
      "longitude": -8.036559,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911278,
      "ems": null
    },
    {
      "latitude": 38.524117,
      "longitude": -8.038513,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911280,
      "ems": null
    },
    {
      "latitude": 38.523422,
      "longitude": -8.039425,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911284,
      "ems": null
    },
    {
      "latitude": 38.522186,
      "longitude": -8.040977,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1658911287,
      "ems": null
    },
    {
      "latitude": 38.519417,
      "longitude": -8.044373,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1658911294,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -8.046936,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1658911300,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.049438,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1658911306,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -8.051941,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911312,
      "ems": null
    },
    {
      "latitude": 38.511749,
      "longitude": -8.053934,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911318,
      "ems": null
    },
    {
      "latitude": 38.509552,
      "longitude": -8.056919,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911324,
      "ems": null
    },
    {
      "latitude": 38.507545,
      "longitude": -8.059509,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911330,
      "ems": null
    },
    {
      "latitude": 38.505775,
      "longitude": -8.061951,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911336,
      "ems": null
    },
    {
      "latitude": 38.504425,
      "longitude": -8.063786,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911343,
      "ems": null
    },
    {
      "latitude": 38.502457,
      "longitude": -8.066413,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911348,
      "ems": null
    },
    {
      "latitude": 38.500763,
      "longitude": -8.068622,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658911354,
      "ems": null
    },
    {
      "latitude": 38.499119,
      "longitude": -8.070984,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911360,
      "ems": null
    },
    {
      "latitude": 38.497421,
      "longitude": -8.073279,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911367,
      "ems": null
    },
    {
      "latitude": 38.495815,
      "longitude": -8.075562,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658911373,
      "ems": null
    },
    {
      "latitude": 38.494263,
      "longitude": -8.077817,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658911379,
      "ems": null
    },
    {
      "latitude": 38.49279,
      "longitude": -8.079956,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658911384,
      "ems": null
    },
    {
      "latitude": 38.49102,
      "longitude": -8.082336,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911391,
      "ems": null
    },
    {
      "latitude": 38.488739,
      "longitude": -8.085388,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1658911399,
      "ems": null
    },
    {
      "latitude": 38.486782,
      "longitude": -8.088074,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911406,
      "ems": null
    },
    {
      "latitude": 38.484966,
      "longitude": -8.090637,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911412,
      "ems": null
    },
    {
      "latitude": 38.483479,
      "longitude": -8.092712,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1658911418,
      "ems": null
    },
    {
      "latitude": 38.482498,
      "longitude": -8.094177,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1658911422,
      "ems": null
    },
    {
      "latitude": 38.48008,
      "longitude": -8.097839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911430,
      "ems": null
    },
    {
      "latitude": 38.478516,
      "longitude": -8.100148,
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
      "squawk": "7000",
      "timestamp": 1658911435,
      "ems": null
    },
    {
      "latitude": 38.476494,
      "longitude": -8.103149,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911441,
      "ems": null
    },
    {
      "latitude": 38.474899,
      "longitude": -8.105581,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911448,
      "ems": null
    },
    {
      "latitude": 38.472565,
      "longitude": -8.109104,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1658911454,
      "ems": null
    },
    {
      "latitude": 38.470722,
      "longitude": -8.112061,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1658911460,
      "ems": null
    },
    {
      "latitude": 38.468811,
      "longitude": -8.115194,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1658911466,
      "ems": null
    },
    {
      "latitude": 38.466843,
      "longitude": -8.118299,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1658911472,
      "ems": null
    },
    {
      "latitude": 38.464966,
      "longitude": -8.121225,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1658911478,
      "ems": null
    },
    {
      "latitude": 38.463089,
      "longitude": -8.124031,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911484,
      "ems": null
    },
    {
      "latitude": 38.461304,
      "longitude": -8.126719,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911490,
      "ems": null
    },
    {
      "latitude": 38.458992,
      "longitude": -8.130066,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1658911496,
      "ems": null
    },
    {
      "latitude": 38.456898,
      "longitude": -8.133118,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658911502,
      "ems": null
    },
    {
      "latitude": 38.455124,
      "longitude": -8.135854,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911508,
      "ems": null
    },
    {
      "latitude": 38.452847,
      "longitude": -8.139282,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911514,
      "ems": null
    },
    {
      "latitude": 38.451031,
      "longitude": -8.141968,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911519,
      "ems": null
    },
    {
      "latitude": 38.448761,
      "longitude": -8.145348,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911526,
      "ems": null
    },
    {
      "latitude": 38.446976,
      "longitude": -8.147915,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911532,
      "ems": null
    },
    {
      "latitude": 38.444885,
      "longitude": -8.15094,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911537,
      "ems": null
    },
    {
      "latitude": 38.44281,
      "longitude": -8.154005,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911544,
      "ems": null
    },
    {
      "latitude": 38.440605,
      "longitude": -8.157349,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911550,
      "ems": null
    },
    {
      "latitude": 38.438461,
      "longitude": -8.1604,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911556,
      "ems": null
    },
    {
      "latitude": 38.436356,
      "longitude": -8.163439,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911562,
      "ems": null
    },
    {
      "latitude": 38.434227,
      "longitude": -8.166626,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911568,
      "ems": null
    },
    {
      "latitude": 38.432098,
      "longitude": -8.169708,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911574,
      "ems": null
    },
    {
      "latitude": 38.429993,
      "longitude": -8.172813,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911580,
      "ems": null
    },
    {
      "latitude": 38.42794,
      "longitude": -8.17572,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911586,
      "ems": null
    },
    {
      "latitude": 38.425873,
      "longitude": -8.178605,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911592,
      "ems": null
    },
    {
      "latitude": 38.423519,
      "longitude": -8.181946,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911598,
      "ems": null
    },
    {
      "latitude": 38.421341,
      "longitude": -8.184994,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911604,
      "ems": null
    },
    {
      "latitude": 38.419281,
      "longitude": -8.188158,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911610,
      "ems": null
    },
    {
      "latitude": 38.417175,
      "longitude": -8.191263,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911616,
      "ems": null
    },
    {
      "latitude": 38.415421,
      "longitude": -8.193848,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911622,
      "ems": null
    },
    {
      "latitude": 38.413147,
      "longitude": -8.197473,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911628,
      "ems": null
    },
    {
      "latitude": 38.412186,
      "longitude": -8.199073,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 232,
      "squawk": "1336",
      "timestamp": 1658911631,
      "ems": null
    },
    {
      "latitude": 38.411091,
      "longitude": -8.200935,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 232,
      "squawk": "1336",
      "timestamp": 1658911637,
      "ems": null
    },
    {
      "latitude": 38.408432,
      "longitude": -8.205268,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658911643,
      "ems": null
    },
    {
      "latitude": 38.406601,
      "longitude": -8.208248,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911649,
      "ems": null
    },
    {
      "latitude": 38.404526,
      "longitude": -8.211205,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911654,
      "ems": null
    },
    {
      "latitude": 38.402199,
      "longitude": -8.214609,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911661,
      "ems": null
    },
    {
      "latitude": 38.401081,
      "longitude": -8.216162,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911664,
      "ems": null
    },
    {
      "latitude": 38.400055,
      "longitude": -8.217598,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911667,
      "ems": null
    },
    {
      "latitude": 38.399124,
      "longitude": -8.218908,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911670,
      "ems": null
    },
    {
      "latitude": 38.397079,
      "longitude": -8.221747,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911676,
      "ems": null
    },
    {
      "latitude": 38.394981,
      "longitude": -8.2247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911682,
      "ems": null
    },
    {
      "latitude": 38.392841,
      "longitude": -8.227864,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911688,
      "ems": null
    },
    {
      "latitude": 38.390884,
      "longitude": -8.230849,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911694,
      "ems": null
    },
    {
      "latitude": 38.388836,
      "longitude": -8.233954,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911700,
      "ems": null
    },
    {
      "latitude": 38.386837,
      "longitude": -8.236761,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911706,
      "ems": null
    },
    {
      "latitude": 38.38472,
      "longitude": -8.239863,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911712,
      "ems": null
    },
    {
      "latitude": 38.38274,
      "longitude": -8.242791,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911718,
      "ems": null
    },
    {
      "latitude": 38.381012,
      "longitude": -8.245531,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "1336",
      "timestamp": 1658911724,
      "ems": null
    },
    {
      "latitude": 38.3792,
      "longitude": -8.248523,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 232,
      "squawk": "1336",
      "timestamp": 1658911730,
      "ems": null
    },
    {
      "latitude": 38.377075,
      "longitude": -8.251784,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911736,
      "ems": null
    },
    {
      "latitude": 38.375061,
      "longitude": -8.254823,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911742,
      "ems": null
    },
    {
      "latitude": 38.373047,
      "longitude": -8.257862,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911748,
      "ems": null
    },
    {
      "latitude": 38.37085,
      "longitude": -8.261076,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911754,
      "ems": null
    },
    {
      "latitude": 38.368679,
      "longitude": -8.264107,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911760,
      "ems": null
    },
    {
      "latitude": 38.367561,
      "longitude": -8.265659,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658911763,
      "ems": null
    },
    {
      "latitude": 38.365265,
      "longitude": -8.268789,
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911769,
      "ems": null
    },
    {
      "latitude": 38.363022,
      "longitude": -8.271887,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911775,
      "ems": null
    },
    {
      "latitude": 38.360916,
      "longitude": -8.274867,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911781,
      "ems": null
    },
    {
      "latitude": 38.358253,
      "longitude": -8.278735,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911789,
      "ems": null
    },
    {
      "latitude": 38.356064,
      "longitude": -8.281781,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911795,
      "ems": null
    },
    {
      "latitude": 38.353596,
      "longitude": -8.285244,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911802,
      "ems": null
    },
    {
      "latitude": 38.351315,
      "longitude": -8.288648,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911808,
      "ems": null
    },
    {
      "latitude": 38.34922,
      "longitude": -8.291693,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911814,
      "ems": null
    },
    {
      "latitude": 38.347275,
      "longitude": -8.294502,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911820,
      "ems": null
    },
    {
      "latitude": 38.344345,
      "longitude": -8.298594,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911828,
      "ems": null
    },
    {
      "latitude": 38.342377,
      "longitude": -8.301306,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911834,
      "ems": null
    },
    {
      "latitude": 38.340271,
      "longitude": -8.304379,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911840,
      "ems": null
    },
    {
      "latitude": 38.338284,
      "longitude": -8.307336,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911846,
      "ems": null
    },
    {
      "latitude": 38.336372,
      "longitude": -8.310022,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911852,
      "ems": null
    },
    {
      "latitude": 38.334366,
      "longitude": -8.312735,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911858,
      "ems": null
    },
    {
      "latitude": 38.332397,
      "longitude": -8.315481,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911864,
      "ems": null
    },
    {
      "latitude": 38.330338,
      "longitude": -8.318521,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911870,
      "ems": null
    },
    {
      "latitude": 38.328552,
      "longitude": -8.321069,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911876,
      "ems": null
    },
    {
      "latitude": 38.326492,
      "longitude": -8.324072,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911882,
      "ems": null
    },
    {
      "latitude": 38.324524,
      "longitude": -8.327052,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911888,
      "ems": null
    },
    {
      "latitude": 38.32251,
      "longitude": -8.33015,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911894,
      "ems": null
    },
    {
      "latitude": 38.320496,
      "longitude": -8.333188,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911900,
      "ems": null
    },
    {
      "latitude": 38.318497,
      "longitude": -8.336175,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911906,
      "ems": null
    },
    {
      "latitude": 38.316467,
      "longitude": -8.339208,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911912,
      "ems": null
    },
    {
      "latitude": 38.314587,
      "longitude": -8.342027,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911918,
      "ems": null
    },
    {
      "latitude": 38.312393,
      "longitude": -8.345226,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911924,
      "ems": null
    },
    {
      "latitude": 38.310303,
      "longitude": -8.348415,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911930,
      "ems": null
    },
    {
      "latitude": 38.308182,
      "longitude": -8.351538,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911936,
      "ems": null
    },
    {
      "latitude": 38.306347,
      "longitude": -8.354326,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911942,
      "ems": null
    },
    {
      "latitude": 38.30439,
      "longitude": -8.357431,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658911948,
      "ems": null
    },
    {
      "latitude": 38.302341,
      "longitude": -8.360656,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658911954,
      "ems": null
    },
    {
      "latitude": 38.300247,
      "longitude": -8.363879,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911960,
      "ems": null
    },
    {
      "latitude": 38.29834,
      "longitude": -8.366686,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911966,
      "ems": null
    },
    {
      "latitude": 38.296097,
      "longitude": -8.370005,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911972,
      "ems": null
    },
    {
      "latitude": 38.294102,
      "longitude": -8.373015,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658911979,
      "ems": null
    },
    {
      "latitude": 38.292068,
      "longitude": -8.376023,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658911984,
      "ems": null
    },
    {
      "latitude": 38.289963,
      "longitude": -8.379062,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658911990,
      "ems": null
    },
    {
      "latitude": 38.28772,
      "longitude": -8.382277,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658911997,
      "ems": null
    },
    {
      "latitude": 38.285751,
      "longitude": -8.385023,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912002,
      "ems": null
    },
    {
      "latitude": 38.283722,
      "longitude": -8.388001,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912008,
      "ems": null
    },
    {
      "latitude": 38.281487,
      "longitude": -8.391226,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912014,
      "ems": null
    },
    {
      "latitude": 38.279572,
      "longitude": -8.393964,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912021,
      "ems": null
    },
    {
      "latitude": 38.277237,
      "longitude": -8.397295,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912027,
      "ems": null
    },
    {
      "latitude": 38.275249,
      "longitude": -8.400242,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912033,
      "ems": null
    },
    {
      "latitude": 38.273155,
      "longitude": -8.403406,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912038,
      "ems": null
    },
    {
      "latitude": 38.271057,
      "longitude": -8.406528,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912045,
      "ems": null
    },
    {
      "latitude": 38.268967,
      "longitude": -8.409497,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912050,
      "ems": null
    },
    {
      "latitude": 38.266823,
      "longitude": -8.412422,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912056,
      "ems": null
    },
    {
      "latitude": 38.264603,
      "longitude": -8.415586,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912063,
      "ems": null
    },
    {
      "latitude": 38.262493,
      "longitude": -8.418633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912068,
      "ems": null
    },
    {
      "latitude": 38.260391,
      "longitude": -8.421781,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912074,
      "ems": null
    },
    {
      "latitude": 38.258163,
      "longitude": -8.424961,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912081,
      "ems": null
    },
    {
      "latitude": 38.25618,
      "longitude": -8.427917,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912087,
      "ems": null
    },
    {
      "latitude": 38.254028,
      "longitude": -8.430897,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912093,
      "ems": null
    },
    {
      "latitude": 38.252014,
      "longitude": -8.433819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912099,
      "ems": null
    },
    {
      "latitude": 38.25,
      "longitude": -8.43674,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912105,
      "ems": null
    },
    {
      "latitude": 38.248077,
      "longitude": -8.439546,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912111,
      "ems": null
    },
    {
      "latitude": 38.246063,
      "longitude": -8.442456,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912116,
      "ems": null
    },
    {
      "latitude": 38.243912,
      "longitude": -8.445506,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912123,
      "ems": null
    },
    {
      "latitude": 38.241871,
      "longitude": -8.448367,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912129,
      "ems": null
    },
    {
      "latitude": 38.239777,
      "longitude": -8.451412,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912135,
      "ems": null
    },
    {
      "latitude": 38.237686,
      "longitude": -8.454389,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912141,
      "ems": null
    },
    {
      "latitude": 38.235672,
      "longitude": -8.457311,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912147,
      "ems": null
    },
    {
      "latitude": 38.233795,
      "longitude": -8.459998,
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912153,
      "ems": null
    },
    {
      "latitude": 38.231724,
      "longitude": -8.463115,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912159,
      "ems": null
    },
    {
      "latitude": 38.229908,
      "longitude": -8.465861,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912165,
      "ems": null
    },
    {
      "latitude": 38.227814,
      "longitude": -8.469026,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912171,
      "ems": null
    },
    {
      "latitude": 38.226059,
      "longitude": -8.471628,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912176,
      "ems": null
    },
    {
      "latitude": 38.224091,
      "longitude": -8.474698,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912183,
      "ems": null
    },
    {
      "latitude": 38.222168,
      "longitude": -8.477589,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912189,
      "ems": null
    },
    {
      "latitude": 38.220337,
      "longitude": -8.480276,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912195,
      "ems": null
    },
    {
      "latitude": 38.218369,
      "longitude": -8.483257,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912201,
      "ems": null
    },
    {
      "latitude": 38.216221,
      "longitude": -8.486222,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912207,
      "ems": null
    },
    {
      "latitude": 38.214127,
      "longitude": -8.489088,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912213,
      "ems": null
    },
    {
      "latitude": 38.212051,
      "longitude": -8.491906,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912219,
      "ems": null
    },
    {
      "latitude": 38.209984,
      "longitude": -8.494581,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 225,
      "squawk": "1336",
      "timestamp": 1658912225,
      "ems": null
    },
    {
      "latitude": 38.207844,
      "longitude": -8.497447,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912231,
      "ems": null
    },
    {
      "latitude": 38.205608,
      "longitude": -8.500611,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912237,
      "ems": null
    },
    {
      "latitude": 38.203537,
      "longitude": -8.503652,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912243,
      "ems": null
    },
    {
      "latitude": 38.201603,
      "longitude": -8.506642,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912249,
      "ems": null
    },
    {
      "latitude": 38.200699,
      "longitude": -8.508093,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912252,
      "ems": null
    },
    {
      "latitude": 38.199787,
      "longitude": -8.509568,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912255,
      "ems": null
    },
    {
      "latitude": 38.198765,
      "longitude": -8.51124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 233,
      "squawk": "1336",
      "timestamp": 1658912258,
      "ems": null
    },
    {
      "latitude": 38.198067,
      "longitude": -8.512434,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 234,
      "squawk": "1336",
      "timestamp": 1658912261,
      "ems": null
    },
    {
      "latitude": 38.197182,
      "longitude": -8.514106,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 234,
      "squawk": "1336",
      "timestamp": 1658912264,
      "ems": null
    },
    {
      "latitude": 38.196297,
      "longitude": -8.515718,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 236,
      "squawk": "1336",
      "timestamp": 1658912267,
      "ems": null
    },
    {
      "latitude": 38.195572,
      "longitude": -8.516975,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912270,
      "ems": null
    },
    {
      "latitude": 38.193604,
      "longitude": -8.520189,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912276,
      "ems": null
    },
    {
      "latitude": 38.191689,
      "longitude": -8.523241,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912282,
      "ems": null
    },
    {
      "latitude": 38.190201,
      "longitude": -8.525391,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912288,
      "ems": null
    },
    {
      "latitude": 38.188755,
      "longitude": -8.527361,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912291,
      "ems": null
    },
    {
      "latitude": 38.187836,
      "longitude": -8.528605,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912294,
      "ems": null
    },
    {
      "latitude": 38.187195,
      "longitude": -8.529481,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912295,
      "ems": null
    },
    {
      "latitude": 38.186462,
      "longitude": -8.530416,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912297,
      "ems": null
    },
    {
      "latitude": 38.185219,
      "longitude": -8.532078,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "1336",
      "timestamp": 1658912301,
      "ems": null
    },
    {
      "latitude": 38.182343,
      "longitude": -8.536143,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912309,
      "ems": null
    },
    {
      "latitude": 38.180374,
      "longitude": -8.539065,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912315,
      "ems": null
    },
    {
      "latitude": 38.178314,
      "longitude": -8.542104,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912321,
      "ems": null
    },
    {
      "latitude": 38.176529,
      "longitude": -8.544792,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912327,
      "ems": null
    },
    {
      "latitude": 38.174419,
      "longitude": -8.547841,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912333,
      "ems": null
    },
    {
      "latitude": 38.172363,
      "longitude": -8.550928,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912339,
      "ems": null
    },
    {
      "latitude": 38.170181,
      "longitude": -8.553931,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912345,
      "ems": null
    },
    {
      "latitude": 38.16806,
      "longitude": -8.556947,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912351,
      "ems": null
    },
    {
      "latitude": 38.165852,
      "longitude": -8.559961,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "1336",
      "timestamp": 1658912358,
      "ems": null
    },
    {
      "latitude": 38.163898,
      "longitude": -8.562708,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912363,
      "ems": null
    },
    {
      "latitude": 38.161926,
      "longitude": -8.565537,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912369,
      "ems": null
    },
    {
      "latitude": 38.159729,
      "longitude": -8.568576,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912375,
      "ems": null
    },
    {
      "latitude": 38.157707,
      "longitude": -8.571366,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912381,
      "ems": null
    },
    {
      "latitude": 38.155704,
      "longitude": -8.574292,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912387,
      "ems": null
    },
    {
      "latitude": 38.153889,
      "longitude": -8.576859,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912393,
      "ems": null
    },
    {
      "latitude": 38.151672,
      "longitude": -8.58003,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912399,
      "ems": null
    },
    {
      "latitude": 38.149887,
      "longitude": -8.582835,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912406,
      "ems": null
    },
    {
      "latitude": 38.147964,
      "longitude": -8.58564,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912412,
      "ems": null
    },
    {
      "latitude": 38.145973,
      "longitude": -8.588383,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 227,
      "squawk": "1336",
      "timestamp": 1658912418,
      "ems": null
    },
    {
      "latitude": 38.144344,
      "longitude": -8.590772,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912423,
      "ems": null
    },
    {
      "latitude": 38.142715,
      "longitude": -8.593219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912430,
      "ems": null
    },
    {
      "latitude": 38.140945,
      "longitude": -8.595846,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 228,
      "squawk": "1336",
      "timestamp": 1658912436,
      "ems": null
    },
    {
      "latitude": 38.139458,
      "longitude": -8.598115,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 230,
      "squawk": "1336",
      "timestamp": 1658912442,
      "ems": null
    },
    {
      "latitude": 38.138618,
      "longitude": -8.599488,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 232,
      "squawk": "1336",
      "timestamp": 1658912445,
      "ems": null
    },
    {
      "latitude": 38.137131,
      "longitude": -8.601877,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912451,
      "ems": null
    },
    {
      "latitude": 38.135422,
      "longitude": -8.604457,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 229,
      "squawk": "1336",
      "timestamp": 1658912457,
      "ems": null
    },
    {
      "latitude": 38.133682,
      "longitude": -8.607145,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 231,
      "squawk": "1336",
      "timestamp": 1658912463,
      "ems": null
    },
    {
      "latitude": 38.132263,
      "longitude": -8.609658,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 236,
      "squawk": "1336",
      "timestamp": 1658912469,
      "ems": null
    },
    {
      "latitude": 38.131683,
      "longitude": -8.610893,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 242,
      "squawk": "1336",
      "timestamp": 1658912472,
      "ems": null
    },
    {
      "latitude": 38.131073,
      "longitude": -8.61258,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 248,
      "squawk": "1336",
      "timestamp": 1658912475,
      "ems": null
    },
    {
      "latitude": 38.130707,
      "longitude": -8.613982,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 253,
      "squawk": "1336",
      "timestamp": 1658912478,
      "ems": null
    },
    {
      "latitude": 38.130386,
      "longitude": -8.615619,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 258,
      "squawk": "1336",
      "timestamp": 1658912481,
      "ems": null
    },
    {
      "latitude": 38.130203,
      "longitude": -8.61708,
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
      "heading": 262,
      "squawk": "1336",
      "timestamp": 1658912484,
      "ems": null
    },
    {
      "latitude": 38.130112,
      "longitude": -8.618657,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912487,
      "ems": null
    },
    {
      "latitude": 38.129959,
      "longitude": -8.620028,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912490,
      "ems": null
    },
    {
      "latitude": 38.129868,
      "longitude": -8.621461,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912493,
      "ems": null
    },
    {
      "latitude": 38.1297,
      "longitude": -8.623274,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "1336",
      "timestamp": 1658912496,
      "ems": null
    },
    {
      "latitude": 38.129562,
      "longitude": -8.62491,
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
      "heading": 262,
      "squawk": "1336",
      "timestamp": 1658912498,
      "ems": null
    },
    {
      "latitude": 38.129356,
      "longitude": -8.626835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "1336",
      "timestamp": 1658912502,
      "ems": null
    },
    {
      "latitude": 38.129215,
      "longitude": -8.628387,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "1336",
      "timestamp": 1658912505,
      "ems": null
    },
    {
      "latitude": 38.129124,
      "longitude": -8.630059,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912508,
      "ems": null
    },
    {
      "latitude": 38.128967,
      "longitude": -8.631689,
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
      "heading": 263,
      "squawk": "1336",
      "timestamp": 1658912511,
      "ems": null
    },
    {
      "latitude": 38.128563,
      "longitude": -8.635194,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "1336",
      "timestamp": 1658912517,
      "ems": null
    },
    {
      "latitude": 38.128143,
      "longitude": -8.638585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "1336",
      "timestamp": 1658912523,
      "ems": null
    },
    {
      "latitude": 38.127586,
      "longitude": -8.64224,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 259,
      "squawk": "1336",
      "timestamp": 1658912529,
      "ems": null
    },
    {
      "latitude": 38.127319,
      "longitude": -8.644078,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 258,
      "squawk": "1336",
      "timestamp": 1658912532,
      "ems": null
    },
    {
      "latitude": 38.127029,
      "longitude": -8.645882,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 257,
      "squawk": "1336",
      "timestamp": 1658912535,
      "ems": null
    },
    {
      "latitude": 38.126678,
      "longitude": -8.647759,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 256,
      "squawk": "1336",
      "timestamp": 1658912538,
      "ems": null
    },
    {
      "latitude": 38.126328,
      "longitude": -8.649584,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 256,
      "squawk": "1336",
      "timestamp": 1658912541,
      "ems": null
    },
    {
      "latitude": 38.125957,
      "longitude": -8.651554,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 257,
      "squawk": "1336",
      "timestamp": 1658912544,
      "ems": null
    },
    {
      "latitude": 38.125305,
      "longitude": -8.655356,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 258,
      "squawk": "1336",
      "timestamp": 1658912550,
      "ems": null
    },
    {
      "latitude": 38.124756,
      "longitude": -8.658979,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 259,
      "squawk": "1336",
      "timestamp": 1658912556,
      "ems": null
    },
    {
      "latitude": 38.124374,
      "longitude": -8.66278,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912562,
      "ems": null
    },
    {
      "latitude": 38.124233,
      "longitude": -8.66469,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658912565,
      "ems": null
    },
    {
      "latitude": 38.124096,
      "longitude": -8.666541,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658912568,
      "ems": null
    },
    {
      "latitude": 38.124001,
      "longitude": -8.668451,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658912571,
      "ems": null
    },
    {
      "latitude": 38.123909,
      "longitude": -8.670183,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658912574,
      "ems": null
    },
    {
      "latitude": 38.123795,
      "longitude": -8.672303,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658912577,
      "ems": null
    },
    {
      "latitude": 38.123703,
      "longitude": -8.674291,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658912580,
      "ems": null
    },
    {
      "latitude": 38.123703,
      "longitude": -8.675927,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658912583,
      "ems": null
    },
    {
      "latitude": 38.123703,
      "longitude": -8.67768,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658912586,
      "ems": null
    },
    {
      "latitude": 38.123657,
      "longitude": -8.679784,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912589,
      "ems": null
    },
    {
      "latitude": 38.123676,
      "longitude": -8.681707,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912592,
      "ems": null
    },
    {
      "latitude": 38.123703,
      "longitude": -8.683407,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912595,
      "ems": null
    },
    {
      "latitude": 38.123676,
      "longitude": -8.685289,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912598,
      "ems": null
    },
    {
      "latitude": 38.123749,
      "longitude": -8.689075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912604,
      "ems": null
    },
    {
      "latitude": 38.123768,
      "longitude": -8.690663,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658912607,
      "ems": null
    },
    {
      "latitude": 38.123795,
      "longitude": -8.692407,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658912610,
      "ems": null
    },
    {
      "latitude": 38.123932,
      "longitude": -8.695796,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658912616,
      "ems": null
    },
    {
      "latitude": 38.123978,
      "longitude": -8.699535,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658912622,
      "ems": null
    },
    {
      "latitude": 38.12405,
      "longitude": -8.703023,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658912628,
      "ems": null
    },
    {
      "latitude": 38.124115,
      "longitude": -8.706373,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658912634,
      "ems": null
    },
    {
      "latitude": 38.124069,
      "longitude": -8.710464,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658912641,
      "ems": null
    },
    {
      "latitude": 38.124001,
      "longitude": -8.714546,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658912648,
      "ems": null
    },
    {
      "latitude": 38.123932,
      "longitude": -8.718119,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658912654,
      "ems": null
    },
    {
      "latitude": 38.123886,
      "longitude": -8.721625,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658912659,
      "ems": null
    },
    {
      "latitude": 38.123932,
      "longitude": -8.724722,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "1336",
      "timestamp": 1658912665,
      "ems": null
    },
    {
      "latitude": 38.12405,
      "longitude": -8.729235,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658912673,
      "ems": null
    },
    {
      "latitude": 38.124161,
      "longitude": -8.731209,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658912676,
      "ems": null
    },
    {
      "latitude": 38.124252,
      "longitude": -8.733021,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "1336",
      "timestamp": 1658912679,
      "ems": null
    },
    {
      "latitude": 38.124374,
      "longitude": -8.734728,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658912682,
      "ems": null
    },
    {
      "latitude": 38.124481,
      "longitude": -8.736526,
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
      "heading": 275,
      "squawk": "1336",
      "timestamp": 1658912685,
      "ems": null
    },
    {
      "latitude": 38.124664,
      "longitude": -8.738397,
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
      "heading": 276,
      "squawk": "1336",
      "timestamp": 1658912688,
      "ems": null
    },
    {
      "latitude": 38.124794,
      "longitude": -8.740221,
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
      "heading": 276,
      "squawk": "1336",
      "timestamp": 1658912691,
      "ems": null
    },
    {
      "latitude": 38.124931,
      "longitude": -8.741834,
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
      "heading": 276,
      "squawk": "1336",
      "timestamp": 1658912694,
      "ems": null
    },
    {
      "latitude": 38.125214,
      "longitude": -8.745293,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 275,
      "squawk": "1336",
      "timestamp": 1658912699,
      "ems": null
    },
    {
      "latitude": 38.12558,
      "longitude": -8.748798,
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
      "heading": 278,
      "squawk": "1336",
      "timestamp": 1658912706,
      "ems": null
    },
    {
      "latitude": 38.125957,
      "longitude": -8.752163,
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
      "heading": 278,
      "squawk": "1336",
      "timestamp": 1658912712,
      "ems": null
    },
    {
      "latitude": 38.126175,
      "longitude": -8.753824,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 280,
      "squawk": "1336",
      "timestamp": 1658912715,
      "ems": null
    },
    {
      "latitude": 38.12645,
      "longitude": -8.755694,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 281,
      "squawk": "1336",
      "timestamp": 1658912718,
      "ems": null
    },
    {
      "latitude": 38.126701,
      "longitude": -8.757238,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 281,
      "squawk": "1336",
      "timestamp": 1658912721,
      "ems": null
    },
    {
      "latitude": 38.126934,
      "longitude": -8.75879,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 282,
      "squawk": "1336",
      "timestamp": 1658912724,
      "ems": null
    },
    {
      "latitude": 38.127228,
      "longitude": -8.760427,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 282,
      "squawk": "1336",
      "timestamp": 1658912727,
      "ems": null
    },
    {
      "latitude": 38.127541,
      "longitude": -8.762014,
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
      "heading": 282,
      "squawk": "1336",
      "timestamp": 1658912730,
      "ems": null
    },
    {
      "latitude": 38.127777,
      "longitude": -8.763525,
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
      "heading": 282,
      "squawk": "1336",
      "timestamp": 1658912733,
      "ems": null
    },
    {
      "latitude": 38.128281,
      "longitude": -8.766681,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "1336",
      "timestamp": 1658912739,
      "ems": null
    },
    {
      "latitude": 38.12875,
      "longitude": -8.769836,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "1336",
      "timestamp": 1658912745,
      "ems": null
    },
    {
      "latitude": 38.129124,
      "longitude": -8.773001,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 278,
      "squawk": "1336",
      "timestamp": 1658912751,
      "ems": null
    },
    {
      "latitude": 38.129494,
      "longitude": -8.776166,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 279,
      "squawk": "1336",
      "timestamp": 1658912757,
      "ems": null
    },
    {
      "latitude": 38.129974,
      "longitude": -8.77942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 281,
      "squawk": "1336",
      "timestamp": 1658912763,
      "ems": null
    },
    {
      "latitude": 38.13052,
      "longitude": -8.782555,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 283,
      "squawk": "1336",
      "timestamp": 1658912769,
      "ems": null
    },
    {
      "latitude": 38.13121,
      "longitude": -8.78579,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 286,
      "squawk": "1336",
      "timestamp": 1658912775,
      "ems": null
    },
    {
      "latitude": 38.131622,
      "longitude": -8.787485,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 286,
      "squawk": "1336",
      "timestamp": 1658912778,
      "ems": null
    },
    {
      "latitude": 38.132008,
      "longitude": -8.789123,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "1336",
      "timestamp": 1658912781,
      "ems": null
    },
    {
      "latitude": 38.132446,
      "longitude": -8.790582,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 291,
      "squawk": "1336",
      "timestamp": 1658912784,
      "ems": null
    },
    {
      "latitude": 38.13295,
      "longitude": -8.791926,
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
      "heading": 296,
      "squawk": "1336",
      "timestamp": 1658912787,
      "ems": null
    },
    {
      "latitude": 38.133591,
      "longitude": -8.793386,
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
      "heading": 301,
      "squawk": "1336",
      "timestamp": 1658912790,
      "ems": null
    },
    {
      "latitude": 38.134232,
      "longitude": -8.794614,
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
      "heading": 305,
      "squawk": "1336",
      "timestamp": 1658912793,
      "ems": null
    },
    {
      "latitude": 38.13501,
      "longitude": -8.795841,
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
      "heading": 311,
      "squawk": "1336",
      "timestamp": 1658912796,
      "ems": null
    },
    {
      "latitude": 38.135834,
      "longitude": -8.796893,
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
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658912799,
      "ems": null
    },
    {
      "latitude": 38.136795,
      "longitude": -8.797887,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "1336",
      "timestamp": 1658912802,
      "ems": null
    },
    {
      "latitude": 38.137344,
      "longitude": -8.798354,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658912805,
      "ems": null
    },
    {
      "latitude": 38.138618,
      "longitude": -8.799212,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658912808,
      "ems": null
    },
    {
      "latitude": 38.139595,
      "longitude": -8.79975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "1336",
      "timestamp": 1658912811,
      "ems": null
    },
    {
      "latitude": 38.140713,
      "longitude": -8.800287,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "1336",
      "timestamp": 1658912814,
      "ems": null
    },
    {
      "latitude": 38.141552,
      "longitude": -8.800646,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658912817,
      "ems": null
    },
    {
      "latitude": 38.142059,
      "longitude": -8.800867,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "1336",
      "timestamp": 1658912819,
      "ems": null
    },
    {
      "latitude": 38.143322,
      "longitude": -8.801303,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658912822,
      "ems": null
    },
    {
      "latitude": 38.144257,
      "longitude": -8.801626,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658912825,
      "ems": null
    },
    {
      "latitude": 38.145218,
      "longitude": -8.801919,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658912828,
      "ems": null
    },
    {
      "latitude": 38.146393,
      "longitude": -8.802258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658912831,
      "ems": null
    },
    {
      "latitude": 38.147465,
      "longitude": -8.802557,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "1336",
      "timestamp": 1658912834,
      "ems": null
    },
    {
      "latitude": 38.148209,
      "longitude": -8.802735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "1336",
      "timestamp": 1658912837,
      "ems": null
    },
    {
      "latitude": 38.149605,
      "longitude": -8.802915,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "1336",
      "timestamp": 1658912840,
      "ems": null
    },
    {
      "latitude": 38.151096,
      "longitude": -8.803094,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "1336",
      "timestamp": 1658912844,
      "ems": null
    },
    {
      "latitude": 38.152119,
      "longitude": -8.803213,
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
      "heading": 354,
      "squawk": "1336",
      "timestamp": 1658912847,
      "ems": null
    },
    {
      "latitude": 38.153366,
      "longitude": -8.80338,
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
      "heading": 355,
      "squawk": "1336",
      "timestamp": 1658912850,
      "ems": null
    },
    {
      "latitude": 38.154446,
      "longitude": -8.803452,
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
      "heading": 355,
      "squawk": "1336",
      "timestamp": 1658912853,
      "ems": null
    },
    {
      "latitude": 38.155518,
      "longitude": -8.803555,
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
      "heading": 355,
      "squawk": "1336",
      "timestamp": 1658912856,
      "ems": null
    },
    {
      "latitude": 38.156773,
      "longitude": -8.803691,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "1336",
      "timestamp": 1658912859,
      "ems": null
    },
    {
      "latitude": 38.157707,
      "longitude": -8.803751,
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
      "heading": 356,
      "squawk": "1336",
      "timestamp": 1658912862,
      "ems": null
    },
    {
      "latitude": 38.158962,
      "longitude": -8.80387,
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
      "heading": 358,
      "squawk": "1336",
      "timestamp": 1658912866,
      "ems": null
    },
    {
      "latitude": 38.159939,
      "longitude": -8.80387,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "1336",
      "timestamp": 1658912869,
      "ems": null
    },
    {
      "latitude": 38.161194,
      "longitude": -8.803847,
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
      "heading": 1,
      "squawk": "1336",
      "timestamp": 1658912871,
      "ems": null
    },
    {
      "latitude": 38.162174,
      "longitude": -8.80381,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 2,
      "squawk": "1336",
      "timestamp": 1658912875,
      "ems": null
    },
    {
      "latitude": 38.163437,
      "longitude": -8.80373,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 2,
      "squawk": "1336",
      "timestamp": 1658912878,
      "ems": null
    },
    {
      "latitude": 38.164627,
      "longitude": -8.803614,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 4,
      "squawk": "1336",
      "timestamp": 1658912881,
      "ems": null
    },
    {
      "latitude": 38.165771,
      "longitude": -8.803496,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 6,
      "squawk": "1336",
      "timestamp": 1658912884,
      "ems": null
    },
    {
      "latitude": 38.167007,
      "longitude": -8.803263,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658912887,
      "ems": null
    },
    {
      "latitude": 38.168152,
      "longitude": -8.803029,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658912890,
      "ems": null
    },
    {
      "latitude": 38.169109,
      "longitude": -8.802795,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658912892,
      "ems": null
    },
    {
      "latitude": 38.17046,
      "longitude": -8.802437,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912896,
      "ems": null
    },
    {
      "latitude": 38.171585,
      "longitude": -8.802153,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912899,
      "ems": null
    },
    {
      "latitude": 38.172684,
      "longitude": -8.801802,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912901,
      "ems": null
    },
    {
      "latitude": 38.174,
      "longitude": -8.801422,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912905,
      "ems": null
    },
    {
      "latitude": 38.175022,
      "longitude": -8.801124,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912908,
      "ems": null
    },
    {
      "latitude": 38.176281,
      "longitude": -8.800765,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658912911,
      "ems": null
    },
    {
      "latitude": 38.177582,
      "longitude": -8.800341,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658912913,
      "ems": null
    },
    {
      "latitude": 38.180283,
      "longitude": -8.79964,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912920,
      "ems": null
    },
    {
      "latitude": 38.182983,
      "longitude": -8.798821,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658912926,
      "ems": null
    },
    {
      "latitude": 38.185638,
      "longitude": -8.798003,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658912932,
      "ems": null
    },
    {
      "latitude": 38.188244,
      "longitude": -8.797302,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658912938,
      "ems": null
    },
    {
      "latitude": 38.191036,
      "longitude": -8.796645,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658912944,
      "ems": null
    },
    {
      "latitude": 38.193645,
      "longitude": -8.796048,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658912950,
      "ems": null
    },
    {
      "latitude": 38.196396,
      "longitude": -8.795374,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658912956,
      "ems": null
    },
    {
      "latitude": 38.198952,
      "longitude": -8.794735,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658912962,
      "ems": null
    },
    {
      "latitude": 38.201569,
      "longitude": -8.79403,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658912968,
      "ems": null
    },
    {
      "latitude": 38.204178,
      "longitude": -8.793386,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658912974,
      "ems": null
    },
    {
      "latitude": 38.206558,
      "longitude": -8.792861,
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
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658912980,
      "ems": null
    },
    {
      "latitude": 38.208984,
      "longitude": -8.792335,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658912986,
      "ems": null
    },
    {
      "latitude": 38.211502,
      "longitude": -8.791809,
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
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658912992,
      "ems": null
    },
    {
      "latitude": 38.213928,
      "longitude": -8.791342,
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
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658912998,
      "ems": null
    },
    {
      "latitude": 38.216354,
      "longitude": -8.790815,
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
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658913004,
      "ems": null
    },
    {
      "latitude": 38.218735,
      "longitude": -8.790257,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913010,
      "ems": null
    },
    {
      "latitude": 38.221161,
      "longitude": -8.789472,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913016,
      "ems": null
    },
    {
      "latitude": 38.222351,
      "longitude": -8.789121,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913019,
      "ems": null
    },
    {
      "latitude": 38.223625,
      "longitude": -8.788704,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913022,
      "ems": null
    },
    {
      "latitude": 38.224739,
      "longitude": -8.788346,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913025,
      "ems": null
    },
    {
      "latitude": 38.225739,
      "longitude": -8.788011,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913027,
      "ems": null
    },
    {
      "latitude": 38.227951,
      "longitude": -8.787331,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913034,
      "ems": null
    },
    {
      "latitude": 38.23093,
      "longitude": -8.786554,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913040,
      "ems": null
    },
    {
      "latitude": 38.232841,
      "longitude": -8.786137,
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
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658913045,
      "ems": null
    },
    {
      "latitude": 38.233978,
      "longitude": -8.785907,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 9,
      "squawk": "1336",
      "timestamp": 1658913048,
      "ems": null
    },
    {
      "latitude": 38.236084,
      "longitude": -8.785381,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913054,
      "ems": null
    },
    {
      "latitude": 38.238556,
      "longitude": -8.784739,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913060,
      "ems": null
    },
    {
      "latitude": 38.241127,
      "longitude": -8.783987,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913066,
      "ems": null
    },
    {
      "latitude": 38.243732,
      "longitude": -8.783271,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913072,
      "ems": null
    },
    {
      "latitude": 38.245651,
      "longitude": -8.782635,
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
      "heading": 15,
      "squawk": "1336",
      "timestamp": 1658913078,
      "ems": null
    },
    {
      "latitude": 38.248901,
      "longitude": -8.781539,
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
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658913086,
      "ems": null
    },
    {
      "latitude": 38.251373,
      "longitude": -8.78094,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913092,
      "ems": null
    },
    {
      "latitude": 38.253788,
      "longitude": -8.780345,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913098,
      "ems": null
    },
    {
      "latitude": 38.256165,
      "longitude": -8.779867,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913104,
      "ems": null
    },
    {
      "latitude": 38.25742,
      "longitude": -8.779629,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "1336",
      "timestamp": 1658913107,
      "ems": null
    },
    {
      "latitude": 38.25856,
      "longitude": -8.77942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "1336",
      "timestamp": 1658913110,
      "ems": null
    },
    {
      "latitude": 38.260849,
      "longitude": -8.779011,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913116,
      "ems": null
    },
    {
      "latitude": 38.263241,
      "longitude": -8.778554,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913122,
      "ems": null
    },
    {
      "latitude": 38.265656,
      "longitude": -8.778134,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "1336",
      "timestamp": 1658913128,
      "ems": null
    },
    {
      "latitude": 38.267986,
      "longitude": -8.777778,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "1336",
      "timestamp": 1658913134,
      "ems": null
    },
    {
      "latitude": 38.270363,
      "longitude": -8.77736,
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
      "heading": 7,
      "squawk": "1336",
      "timestamp": 1658913140,
      "ems": null
    },
    {
      "latitude": 38.272934,
      "longitude": -8.776732,
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
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658913147,
      "ems": null
    },
    {
      "latitude": 38.274132,
      "longitude": -8.776344,
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
      "heading": 15,
      "squawk": "1336",
      "timestamp": 1658913150,
      "ems": null
    },
    {
      "latitude": 38.275497,
      "longitude": -8.775855,
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
      "heading": 14,
      "squawk": "1336",
      "timestamp": 1658913153,
      "ems": null
    },
    {
      "latitude": 38.276138,
      "longitude": -8.775681,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913156,
      "ems": null
    },
    {
      "latitude": 38.278835,
      "longitude": -8.774912,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913162,
      "ems": null
    },
    {
      "latitude": 38.281349,
      "longitude": -8.774315,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913168,
      "ems": null
    },
    {
      "latitude": 38.282467,
      "longitude": -8.774076,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913171,
      "ems": null
    },
    {
      "latitude": 38.284882,
      "longitude": -8.773343,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913177,
      "ems": null
    },
    {
      "latitude": 38.287121,
      "longitude": -8.772762,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913183,
      "ems": null
    },
    {
      "latitude": 38.289505,
      "longitude": -8.772058,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913189,
      "ems": null
    },
    {
      "latitude": 38.291729,
      "longitude": -8.771508,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913195,
      "ems": null
    },
    {
      "latitude": 38.294312,
      "longitude": -8.77083,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913201,
      "ems": null
    },
    {
      "latitude": 38.296337,
      "longitude": -8.770314,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913207,
      "ems": null
    },
    {
      "latitude": 38.299072,
      "longitude": -8.769545,
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
      "heading": 13,
      "squawk": "1336",
      "timestamp": 1658913213,
      "ems": null
    },
    {
      "latitude": 38.301506,
      "longitude": -8.768822,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913219,
      "ems": null
    },
    {
      "latitude": 38.303974,
      "longitude": -8.768225,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913225,
      "ems": null
    },
    {
      "latitude": 38.306442,
      "longitude": -8.767733,
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
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913231,
      "ems": null
    },
    {
      "latitude": 38.308674,
      "longitude": -8.767269,
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
      "heading": 11,
      "squawk": "1336",
      "timestamp": 1658913237,
      "ems": null
    },
    {
      "latitude": 38.310677,
      "longitude": -8.766731,
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
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913241,
      "ems": null
    },
    {
      "latitude": 38.313423,
      "longitude": -8.765955,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913249,
      "ems": null
    },
    {
      "latitude": 38.314682,
      "longitude": -8.765629,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913253,
      "ems": null
    },
    {
      "latitude": 38.316788,
      "longitude": -8.765044,
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
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913258,
      "ems": null
    },
    {
      "latitude": 38.319195,
      "longitude": -8.764462,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913263,
      "ems": null
    },
    {
      "latitude": 38.321663,
      "longitude": -8.763806,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913270,
      "ems": null
    },
    {
      "latitude": 38.323898,
      "longitude": -8.763149,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "1336",
      "timestamp": 1658913276,
      "ems": null
    },
    {
      "latitude": 38.326355,
      "longitude": -8.762531,
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
      "heading": 10,
      "squawk": "1336",
      "timestamp": 1658913282,
      "ems": null
    },
    {
      "latitude": 38.328644,
      "longitude": -8.762074,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "1336",
      "timestamp": 1658913288,
      "ems": null
    },
    {
      "latitude": 38.329807,
      "longitude": -8.761895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "1336",
      "timestamp": 1658913291,
      "ems": null
    },
    {
      "latitude": 38.330933,
      "longitude": -8.761714,
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
      "heading": 3,
      "squawk": "1336",
      "timestamp": 1658913294,
      "ems": null
    },
    {
      "latitude": 38.332031,
      "longitude": -8.761714,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "1336",
      "timestamp": 1658913297,
      "ems": null
    },
    {
      "latitude": 38.333313,
      "longitude": -8.761889,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 349,
      "squawk": "1336",
      "timestamp": 1658913300,
      "ems": null
    },
    {
      "latitude": 38.334557,
      "longitude": -8.762373,
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
      "heading": 341,
      "squawk": "1336",
      "timestamp": 1658913303,
      "ems": null
    },
    {
      "latitude": 38.335442,
      "longitude": -8.76291,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913306,
      "ems": null
    },
    {
      "latitude": 38.336426,
      "longitude": -8.763642,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913309,
      "ems": null
    },
    {
      "latitude": 38.337524,
      "longitude": -8.764519,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913312,
      "ems": null
    },
    {
      "latitude": 38.338467,
      "longitude": -8.765299,
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
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913315,
      "ems": null
    },
    {
      "latitude": 38.339447,
      "longitude": -8.766134,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913318,
      "ems": null
    },
    {
      "latitude": 38.339817,
      "longitude": -8.766433,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913319,
      "ems": null
    },
    {
      "latitude": 38.340889,
      "longitude": -8.767269,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913322,
      "ems": null
    },
    {
      "latitude": 38.34256,
      "longitude": -8.768667,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913327,
      "ems": null
    },
    {
      "latitude": 38.34359,
      "longitude": -8.769538,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913330,
      "ems": null
    },
    {
      "latitude": 38.344574,
      "longitude": -8.770421,
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
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913333,
      "ems": null
    },
    {
      "latitude": 38.345673,
      "longitude": -8.771356,
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
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913336,
      "ems": null
    },
    {
      "latitude": 38.347733,
      "longitude": -8.77318,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913342,
      "ems": null
    },
    {
      "latitude": 38.349564,
      "longitude": -8.774687,
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
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913348,
      "ems": null
    },
    {
      "latitude": 38.351349,
      "longitude": -8.776031,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913353,
      "ems": null
    },
    {
      "latitude": 38.355011,
      "longitude": -8.778953,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913363,
      "ems": null
    },
    {
      "latitude": 38.357136,
      "longitude": -8.780643,
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
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913369,
      "ems": null
    },
    {
      "latitude": 38.359138,
      "longitude": -8.782136,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913375,
      "ems": null
    },
    {
      "latitude": 38.361279,
      "longitude": -8.783629,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913381,
      "ems": null
    },
    {
      "latitude": 38.363327,
      "longitude": -8.785122,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913387,
      "ems": null
    },
    {
      "latitude": 38.365311,
      "longitude": -8.786491,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913393,
      "ems": null
    },
    {
      "latitude": 38.367279,
      "longitude": -8.787835,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913399,
      "ems": null
    },
    {
      "latitude": 38.369892,
      "longitude": -8.78972,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913407,
      "ems": null
    },
    {
      "latitude": 38.372406,
      "longitude": -8.791571,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913414,
      "ems": null
    },
    {
      "latitude": 38.374466,
      "longitude": -8.793095,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913420,
      "ems": null
    },
    {
      "latitude": 38.376316,
      "longitude": -8.794436,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913426,
      "ems": null
    },
    {
      "latitude": 38.37841,
      "longitude": -8.796108,
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
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913432,
      "ems": null
    },
    {
      "latitude": 38.380783,
      "longitude": -8.798018,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913439,
      "ems": null
    },
    {
      "latitude": 38.382706,
      "longitude": -8.799348,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913444,
      "ems": null
    },
    {
      "latitude": 38.385532,
      "longitude": -8.801303,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913451,
      "ems": null
    },
    {
      "latitude": 38.386463,
      "longitude": -8.8019,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913454,
      "ems": null
    },
    {
      "latitude": 38.387878,
      "longitude": -8.802795,
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
      "heading": 334,
      "squawk": "1336",
      "timestamp": 1658913458,
      "ems": null
    },
    {
      "latitude": 38.389023,
      "longitude": -8.803512,
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
      "heading": 334,
      "squawk": "1336",
      "timestamp": 1658913461,
      "ems": null
    },
    {
      "latitude": 38.390213,
      "longitude": -8.804256,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913464,
      "ems": null
    },
    {
      "latitude": 38.392639,
      "longitude": -8.805776,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913470,
      "ems": null
    },
    {
      "latitude": 38.394794,
      "longitude": -8.807214,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913476,
      "ems": null
    },
    {
      "latitude": 38.396805,
      "longitude": -8.808756,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913482,
      "ems": null
    },
    {
      "latitude": 38.398911,
      "longitude": -8.810275,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913488,
      "ems": null
    },
    {
      "latitude": 38.401154,
      "longitude": -8.811678,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913494,
      "ems": null
    },
    {
      "latitude": 38.403305,
      "longitude": -8.813139,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913500,
      "ems": null
    },
    {
      "latitude": 38.405411,
      "longitude": -8.814677,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913506,
      "ems": null
    },
    {
      "latitude": 38.407104,
      "longitude": -8.815886,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913512,
      "ems": null
    },
    {
      "latitude": 38.409302,
      "longitude": -8.817405,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913517,
      "ems": null
    },
    {
      "latitude": 38.411499,
      "longitude": -8.818924,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913523,
      "ems": null
    },
    {
      "latitude": 38.413559,
      "longitude": -8.82041,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913530,
      "ems": null
    },
    {
      "latitude": 38.416397,
      "longitude": -8.822499,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913538,
      "ems": null
    },
    {
      "latitude": 38.418228,
      "longitude": -8.823873,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913544,
      "ems": null
    },
    {
      "latitude": 38.420261,
      "longitude": -8.825378,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913550,
      "ems": null
    },
    {
      "latitude": 38.422493,
      "longitude": -8.827087,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913556,
      "ems": null
    },
    {
      "latitude": 38.424591,
      "longitude": -8.828529,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913562,
      "ems": null
    },
    {
      "latitude": 38.426685,
      "longitude": -8.829956,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913568,
      "ems": null
    },
    {
      "latitude": 38.428482,
      "longitude": -8.831217,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913573,
      "ems": null
    },
    {
      "latitude": 38.430771,
      "longitude": -8.832709,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913580,
      "ems": null
    },
    {
      "latitude": 38.432831,
      "longitude": -8.834023,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913586,
      "ems": null
    },
    {
      "latitude": 38.43483,
      "longitude": -8.835327,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913592,
      "ems": null
    },
    {
      "latitude": 38.437042,
      "longitude": -8.836889,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913598,
      "ems": null
    },
    {
      "latitude": 38.439114,
      "longitude": -8.838318,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913604,
      "ems": null
    },
    {
      "latitude": 38.441162,
      "longitude": -8.839636,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913610,
      "ems": null
    },
    {
      "latitude": 38.443302,
      "longitude": -8.841003,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913616,
      "ems": null
    },
    {
      "latitude": 38.445374,
      "longitude": -8.842382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913622,
      "ems": null
    },
    {
      "latitude": 38.447433,
      "longitude": -8.843875,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913628,
      "ems": null
    },
    {
      "latitude": 38.449493,
      "longitude": -8.845307,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913634,
      "ems": null
    },
    {
      "latitude": 38.450363,
      "longitude": -8.845964,
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
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913637,
      "ems": null
    },
    {
      "latitude": 38.451542,
      "longitude": -8.846924,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913640,
      "ems": null
    },
    {
      "latitude": 38.452335,
      "longitude": -8.847595,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913643,
      "ems": null
    },
    {
      "latitude": 38.455082,
      "longitude": -8.849731,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913651,
      "ems": null
    },
    {
      "latitude": 38.45713,
      "longitude": -8.851196,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913657,
      "ems": null
    },
    {
      "latitude": 38.459225,
      "longitude": -8.852539,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913663,
      "ems": null
    },
    {
      "latitude": 38.460114,
      "longitude": -8.853129,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913666,
      "ems": null
    },
    {
      "latitude": 38.4608,
      "longitude": -8.853547,
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
      "heading": 333,
      "squawk": "1336",
      "timestamp": 1658913669,
      "ems": null
    },
    {
      "latitude": 38.46146,
      "longitude": -8.853943,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913670,
      "ems": null
    },
    {
      "latitude": 38.464764,
      "longitude": -8.856201,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913680,
      "ems": null
    },
    {
      "latitude": 38.46666,
      "longitude": -8.857608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913686,
      "ems": null
    },
    {
      "latitude": 38.468628,
      "longitude": -8.85904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913691,
      "ems": null
    },
    {
      "latitude": 38.470631,
      "longitude": -8.860413,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913697,
      "ems": null
    },
    {
      "latitude": 38.472702,
      "longitude": -8.861728,
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
      "heading": 334,
      "squawk": "1336",
      "timestamp": 1658913704,
      "ems": null
    },
    {
      "latitude": 38.474678,
      "longitude": -8.862854,
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
      "heading": 336,
      "squawk": "1336",
      "timestamp": 1658913710,
      "ems": null
    },
    {
      "latitude": 38.475677,
      "longitude": -8.8634,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "1336",
      "timestamp": 1658913712,
      "ems": null
    },
    {
      "latitude": 38.477707,
      "longitude": -8.864746,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913719,
      "ems": null
    },
    {
      "latitude": 38.478638,
      "longitude": -8.86554,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913722,
      "ems": null
    },
    {
      "latitude": 38.479568,
      "longitude": -8.866445,
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
      "heading": 324,
      "squawk": "1336",
      "timestamp": 1658913725,
      "ems": null
    },
    {
      "latitude": 38.480499,
      "longitude": -8.867188,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913728,
      "ems": null
    },
    {
      "latitude": 38.480824,
      "longitude": -8.867493,
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
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913730,
      "ems": null
    },
    {
      "latitude": 38.482224,
      "longitude": -8.868653,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913733,
      "ems": null
    },
    {
      "latitude": 38.483368,
      "longitude": -8.869669,
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
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658913737,
      "ems": null
    },
    {
      "latitude": 38.484131,
      "longitude": -8.870361,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913740,
      "ems": null
    },
    {
      "latitude": 38.485153,
      "longitude": -8.871155,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913743,
      "ems": null
    },
    {
      "latitude": 38.487167,
      "longitude": -8.872535,
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
      "heading": 331,
      "squawk": "1336",
      "timestamp": 1658913749,
      "ems": null
    },
    {
      "latitude": 38.489044,
      "longitude": -8.874027,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "1336",
      "timestamp": 1658913755,
      "ems": null
    },
    {
      "latitude": 38.490875,
      "longitude": -8.875699,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913761,
      "ems": null
    },
    {
      "latitude": 38.492844,
      "longitude": -8.877312,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913767,
      "ems": null
    },
    {
      "latitude": 38.494743,
      "longitude": -8.878967,
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
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658913773,
      "ems": null
    },
    {
      "latitude": 38.496559,
      "longitude": -8.880432,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913779,
      "ems": null
    },
    {
      "latitude": 38.498516,
      "longitude": -8.881897,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913785,
      "ems": null
    },
    {
      "latitude": 38.499397,
      "longitude": -8.882507,
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
      "heading": 329,
      "squawk": "1336",
      "timestamp": 1658913788,
      "ems": null
    },
    {
      "latitude": 38.501308,
      "longitude": -8.883972,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658913794,
      "ems": null
    },
    {
      "latitude": 38.502239,
      "longitude": -8.884583,
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913797,
      "ems": null
    },
    {
      "latitude": 38.503078,
      "longitude": -8.885132,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913799,
      "ems": null
    },
    {
      "latitude": 38.505112,
      "longitude": -8.886566,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "1336",
      "timestamp": 1658913806,
      "ems": null
    },
    {
      "latitude": 38.507126,
      "longitude": -8.888184,
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
      "heading": 328,
      "squawk": "1336",
      "timestamp": 1658913812,
      "ems": null
    },
    {
      "latitude": 38.508987,
      "longitude": -8.889587,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658913818,
      "ems": null
    },
    {
      "latitude": 38.511036,
      "longitude": -8.891174,
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
      "heading": 321,
      "squawk": "1336",
      "timestamp": 1658913824,
      "ems": null
    },
    {
      "latitude": 38.511841,
      "longitude": -8.892179,
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
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658913827,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -8.89325,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 303,
      "squawk": "1336",
      "timestamp": 1658913830,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -8.894806,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "1336",
      "timestamp": 1658913833,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -8.896179,
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
      "heading": 286,
      "squawk": "1336",
      "timestamp": 1658913836,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -8.897672,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 277,
      "squawk": "1336",
      "timestamp": 1658913839,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.899353,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658913842,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.901062,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658913845,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.902649,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658913848,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.904297,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658913851,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.906091,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913854,
      "ems": null
    },
    {
      "latitude": 38.513901,
      "longitude": -8.907763,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913857,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.909485,
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
      "heading": 275,
      "squawk": "1336",
      "timestamp": 1658913860,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -8.911255,
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
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658913863,
      "ems": null
    },
    {
      "latitude": 38.514202,
      "longitude": -8.912659,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913866,
      "ems": null
    },
    {
      "latitude": 38.514248,
      "longitude": -8.914551,
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
      "squawk": "1336",
      "timestamp": 1658913869,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.917603,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658913875,
      "ems": null
    },
    {
      "latitude": 38.514313,
      "longitude": -8.920898,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913881,
      "ems": null
    },
    {
      "latitude": 38.514313,
      "longitude": -8.924421,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913887,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.927673,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913893,
      "ems": null
    },
    {
      "latitude": 38.514313,
      "longitude": -8.93081,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658913899,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.93396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913905,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.9369,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913912,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -8.939941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658913918,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.941467,
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658913921,
      "ems": null
    },
    {
      "latitude": 38.513901,
      "longitude": -8.944483,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913927,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.947469,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913933,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -8.950317,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913939,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.952087,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913943,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -8.957141,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658913953,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -8.960144,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913959,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -8.962952,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658913965,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -8.966098,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913971,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -8.967529,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658913973,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -8.970516,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658913979,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -8.973561,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913985,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -8.975114,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913988,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.976501,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658913991,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.979712,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658913997,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.981445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914001,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -8.983032,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914004,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.98604,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914010,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.988892,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914016,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.992249,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914022,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.993835,
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658914025,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -8.997192,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658914031,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -9.00037,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914037,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.003723,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914043,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.006958,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914049,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.010254,
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
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658914055,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -9.013745,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914061,
      "ems": null
    },
    {
      "latitude": 38.512993,
      "longitude": -9.01709,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914067,
      "ems": null
    },
    {
      "latitude": 38.512897,
      "longitude": -9.020142,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914073,
      "ems": null
    },
    {
      "latitude": 38.512894,
      "longitude": -9.023417,
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
      "heading": 268,
      "squawk": "1336",
      "timestamp": 1658914079,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.02688,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914085,
      "ems": null
    },
    {
      "latitude": 38.512848,
      "longitude": -9.028254,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914088,
      "ems": null
    },
    {
      "latitude": 38.512939,
      "longitude": -9.030046,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658914091,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -9.031538,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658914094,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -9.033203,
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
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658914097,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.034912,
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
      "heading": 274,
      "squawk": "1336",
      "timestamp": 1658914100,
      "ems": null
    },
    {
      "latitude": 38.513351,
      "longitude": -9.038524,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914106,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -9.040315,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914109,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -9.041748,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914112,
      "ems": null
    },
    {
      "latitude": 38.513458,
      "longitude": -9.04657,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914120,
      "ems": null
    },
    {
      "latitude": 38.513458,
      "longitude": -9.051636,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914128,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -9.055243,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914135,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -9.058838,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914141,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -9.062134,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914146,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -9.065572,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914153,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -9.069275,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914159,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -9.071662,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914163,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -9.075842,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914171,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -9.079224,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914177,
      "ems": null
    },
    {
      "latitude": 38.51358,
      "longitude": -9.08241,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914183,
      "ems": null
    },
    {
      "latitude": 38.513458,
      "longitude": -9.084412,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914186,
      "ems": null
    },
    {
      "latitude": 38.513317,
      "longitude": -9.086182,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914189,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.087484,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914192,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -9.089396,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658914195,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.091309,
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
      "heading": 263,
      "squawk": "1336",
      "timestamp": 1658914198,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.092978,
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
      "heading": 264,
      "squawk": "1336",
      "timestamp": 1658914201,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.094649,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914204,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.098113,
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
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914210,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.099188,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914213,
      "ems": null
    },
    {
      "latitude": 38.512527,
      "longitude": -9.101277,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914216,
      "ems": null
    },
    {
      "latitude": 38.512573,
      "longitude": -9.102905,
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
      "heading": 273,
      "squawk": "1336",
      "timestamp": 1658914219,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -9.104502,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914222,
      "ems": null
    },
    {
      "latitude": 38.512714,
      "longitude": -9.10614,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914225,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.107726,
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
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914228,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.109398,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914231,
      "ems": null
    },
    {
      "latitude": 38.51276,
      "longitude": -9.112732,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914237,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.116204,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914243,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.119548,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914249,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.122891,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914255,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -9.126355,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914261,
      "ems": null
    },
    {
      "latitude": 38.512714,
      "longitude": -9.130005,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914268,
      "ems": null
    },
    {
      "latitude": 38.51276,
      "longitude": -9.133301,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914274,
      "ems": null
    },
    {
      "latitude": 38.512714,
      "longitude": -9.136841,
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
      "heading": 269,
      "squawk": "1336",
      "timestamp": 1658914280,
      "ems": null
    },
    {
      "latitude": 38.512714,
      "longitude": -9.140747,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914286,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.144029,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "1336",
      "timestamp": 1658914291,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.147644,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914298,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.150537,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658914303,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -9.154663,
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
      "heading": 267,
      "squawk": "1336",
      "timestamp": 1658914309,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.15806,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658914315,
      "ems": null
    },
    {
      "latitude": 38.512436,
      "longitude": -9.158895,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "1336",
      "timestamp": 1658914317,
      "ems": null
    },
    {
      "latitude": 38.512249,
      "longitude": -9.161926,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "1336",
      "timestamp": 1658914321,
      "ems": null
    },
    {
      "latitude": 38.512161,
      "longitude": -9.165344,
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
      "heading": 270,
      "squawk": "1336",
      "timestamp": 1658914328,
      "ems": null
    },
    {
      "latitude": 38.512295,
      "longitude": -9.169128,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914334,
      "ems": null
    },
    {
      "latitude": 38.512344,
      "longitude": -9.170718,
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
      "heading": 272,
      "squawk": "1336",
      "timestamp": 1658914337,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.172607,
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
      "heading": 277,
      "squawk": "1336",
      "timestamp": 1658914340,
      "ems": null
    },
    {
      "latitude": 38.512756,
      "longitude": -9.17442,
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
      "heading": 285,
      "squawk": "1336",
      "timestamp": 1658914343,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.176092,
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
      "heading": 294,
      "squawk": "1336",
      "timestamp": 1658914346,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.177612,
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
      "heading": 303,
      "squawk": "1336",
      "timestamp": 1658914349,
      "ems": null
    },
    {
      "latitude": 38.514763,
      "longitude": -9.178894,
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
      "heading": 314,
      "squawk": "1336",
      "timestamp": 1658914352,
      "ems": null
    },
    {
      "latitude": 38.515785,
      "longitude": -9.179993,
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
      "heading": 323,
      "squawk": "1336",
      "timestamp": 1658914355,
      "ems": null
    },
    {
      "latitude": 38.51683,
      "longitude": -9.180868,
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
      "heading": 330,
      "squawk": "1336",
      "timestamp": 1658914358,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -9.181641,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "1336",
      "timestamp": 1658914361,
      "ems": null
    },
    {
      "latitude": 38.519321,
      "longitude": -9.182251,
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
      "heading": 340,
      "squawk": "1336",
      "timestamp": 1658914364,
      "ems": null
    },
    {
      "latitude": 38.520489,
      "longitude": -9.182678,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914367,
      "ems": null
    },
    {
      "latitude": 38.521637,
      "longitude": -9.183137,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914370,
      "ems": null
    },
    {
      "latitude": 38.522736,
      "longitude": -9.183556,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914372,
      "ems": null
    },
    {
      "latitude": 38.524017,
      "longitude": -9.183973,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914376,
      "ems": null
    },
    {
      "latitude": 38.525234,
      "longitude": -9.184387,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914379,
      "ems": null
    },
    {
      "latitude": 38.526447,
      "longitude": -9.184814,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914382,
      "ems": null
    },
    {
      "latitude": 38.527657,
      "longitude": -9.185242,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914385,
      "ems": null
    },
    {
      "latitude": 38.528961,
      "longitude": -9.185669,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914388,
      "ems": null
    },
    {
      "latitude": 38.53017,
      "longitude": -9.186035,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914391,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -9.186401,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 347,
      "squawk": "1336",
      "timestamp": 1658914394,
      "ems": null
    },
    {
      "latitude": 38.532822,
      "longitude": -9.186829,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 347,
      "squawk": "1336",
      "timestamp": 1658914397,
      "ems": null
    },
    {
      "latitude": 38.535244,
      "longitude": -9.1875,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 348,
      "squawk": "1336",
      "timestamp": 1658914403,
      "ems": null
    },
    {
      "latitude": 38.537842,
      "longitude": -9.188093,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 351,
      "squawk": "1336",
      "timestamp": 1658914409,
      "ems": null
    },
    {
      "latitude": 38.539261,
      "longitude": -9.188332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "1336",
      "timestamp": 1658914412,
      "ems": null
    },
    {
      "latitude": 38.540459,
      "longitude": -9.188599,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "1336",
      "timestamp": 1658914415,
      "ems": null
    },
    {
      "latitude": 38.541531,
      "longitude": -9.188843,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "1336",
      "timestamp": 1658914418,
      "ems": null
    },
    {
      "latitude": 38.542786,
      "longitude": -9.189026,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "1336",
      "timestamp": 1658914421,
      "ems": null
    },
    {
      "latitude": 38.544182,
      "longitude": -9.18927,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "1336",
      "timestamp": 1658914424,
      "ems": null
    },
    {
      "latitude": 38.546696,
      "longitude": -9.189819,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "1336",
      "timestamp": 1658914430,
      "ems": null
    },
    {
      "latitude": 38.549149,
      "longitude": -9.190481,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "1336",
      "timestamp": 1658914436,
      "ems": null
    },
    {
      "latitude": 38.551815,
      "longitude": -9.191101,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "1336",
      "timestamp": 1658914442,
      "ems": null
    },
    {
      "latitude": 38.554413,
      "longitude": -9.191616,
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
      "heading": 351,
      "squawk": "1336",
      "timestamp": 1658914448,
      "ems": null
    },
    {
      "latitude": 38.556519,
      "longitude": -9.192094,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "1336",
      "timestamp": 1658914454,
      "ems": null
    },
    {
      "latitude": 38.559406,
      "longitude": -9.19281,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "1336",
      "timestamp": 1658914460,
      "ems": null
    },
    {
      "latitude": 38.561825,
      "longitude": -9.193604,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914466,
      "ems": null
    },
    {
      "latitude": 38.564163,
      "longitude": -9.194363,
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
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914472,
      "ems": null
    },
    {
      "latitude": 38.565315,
      "longitude": -9.194763,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914475,
      "ems": null
    },
    {
      "latitude": 38.566772,
      "longitude": -9.195258,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914478,
      "ems": null
    },
    {
      "latitude": 38.567924,
      "longitude": -9.19574,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914481,
      "ems": null
    },
    {
      "latitude": 38.569229,
      "longitude": -9.196228,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914484,
      "ems": null
    },
    {
      "latitude": 38.570343,
      "longitude": -9.196692,
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
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914487,
      "ems": null
    },
    {
      "latitude": 38.571625,
      "longitude": -9.197168,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "1336",
      "timestamp": 1658914490,
      "ems": null
    },
    {
      "latitude": 38.572674,
      "longitude": -9.197632,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "1336",
      "timestamp": 1658914493,
      "ems": null
    },
    {
      "latitude": 38.57402,
      "longitude": -9.198303,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "1336",
      "timestamp": 1658914496,
      "ems": null
    },
    {
      "latitude": 38.57515,
      "longitude": -9.19884,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "1336",
      "timestamp": 1658914499,
      "ems": null
    },
    {
      "latitude": 38.576248,
      "longitude": -9.199438,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 337,
      "squawk": "1336",
      "timestamp": 1658914502,
      "ems": null
    },
    {
      "latitude": 38.577328,
      "longitude": -9.200073,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 332,
      "squawk": "1336",
      "timestamp": 1658914505,
      "ems": null
    },
    {
      "latitude": 38.578445,
      "longitude": -9.200928,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "1336",
      "timestamp": 1658914508,
      "ems": null
    },
    {
      "latitude": 38.579422,
      "longitude": -9.201904,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "1336",
      "timestamp": 1658914511,
      "ems": null
    },
    {
      "latitude": 38.580185,
      "longitude": -9.202782,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914514,
      "ems": null
    },
    {
      "latitude": 38.581284,
      "longitude": -9.204095,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914517,
      "ems": null
    },
    {
      "latitude": 38.582108,
      "longitude": -9.20517,
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
      "heading": 314,
      "squawk": "1336",
      "timestamp": 1658914520,
      "ems": null
    },
    {
      "latitude": 38.583069,
      "longitude": -9.206483,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914523,
      "ems": null
    },
    {
      "latitude": 38.583939,
      "longitude": -9.207642,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914526,
      "ems": null
    },
    {
      "latitude": 38.584774,
      "longitude": -9.208862,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914529,
      "ems": null
    },
    {
      "latitude": 38.585678,
      "longitude": -9.210126,
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
      "heading": 313,
      "squawk": "1336",
      "timestamp": 1658914532,
      "ems": null
    },
    {
      "latitude": 38.586639,
      "longitude": -9.211365,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914535,
      "ems": null
    },
    {
      "latitude": 38.587555,
      "longitude": -9.212693,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914538,
      "ems": null
    },
    {
      "latitude": 38.58847,
      "longitude": -9.213946,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914542,
      "ems": null
    },
    {
      "latitude": 38.589336,
      "longitude": -9.21521,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 311,
      "squawk": "1336",
      "timestamp": 1658914545,
      "ems": null
    },
    {
      "latitude": 38.591015,
      "longitude": -9.217712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "1336",
      "timestamp": 1658914550,
      "ems": null
    },
    {
      "latitude": 38.59269,
      "longitude": -9.220154,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 312,
      "squawk": "1336",
      "timestamp": 1658914557,
      "ems": null
    },
    {
      "latitude": 38.594597,
      "longitude": -9.222595,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914563,
      "ems": null
    },
    {
      "latitude": 38.596573,
      "longitude": -9.224933,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914569,
      "ems": null
    },
    {
      "latitude": 38.59837,
      "longitude": -9.227112,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914575,
      "ems": null
    },
    {
      "latitude": 38.5993,
      "longitude": -9.228271,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914578,
      "ems": null
    },
    {
      "latitude": 38.600189,
      "longitude": -9.229292,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914581,
      "ems": null
    },
    {
      "latitude": 38.601059,
      "longitude": -9.230307,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914584,
      "ems": null
    },
    {
      "latitude": 38.602837,
      "longitude": -9.2323,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914590,
      "ems": null
    },
    {
      "latitude": 38.604561,
      "longitude": -9.234253,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "1336",
      "timestamp": 1658914596,
      "ems": null
    },
    {
      "latitude": 38.606415,
      "longitude": -9.236397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914602,
      "ems": null
    },
    {
      "latitude": 38.6082,
      "longitude": -9.238487,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914608,
      "ems": null
    },
    {
      "latitude": 38.609894,
      "longitude": -9.240397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914614,
      "ems": null
    },
    {
      "latitude": 38.611908,
      "longitude": -9.242846,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914620,
      "ems": null
    },
    {
      "latitude": 38.613731,
      "longitude": -9.245056,
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
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914626,
      "ems": null
    },
    {
      "latitude": 38.615662,
      "longitude": -9.247443,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914632,
      "ems": null
    },
    {
      "latitude": 38.617493,
      "longitude": -9.249652,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914638,
      "ems": null
    },
    {
      "latitude": 38.61927,
      "longitude": -9.251892,
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
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914644,
      "ems": null
    },
    {
      "latitude": 38.621132,
      "longitude": -9.254211,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914650,
      "ems": null
    },
    {
      "latitude": 38.622894,
      "longitude": -9.256161,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914656,
      "ems": null
    },
    {
      "latitude": 38.624996,
      "longitude": -9.258484,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "1336",
      "timestamp": 1658914662,
      "ems": null
    },
    {
      "latitude": 38.626694,
      "longitude": -9.26034,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914668,
      "ems": null
    },
    {
      "latitude": 38.628628,
      "longitude": -9.262512,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914674,
      "ems": null
    },
    {
      "latitude": 38.630722,
      "longitude": -9.264954,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914680,
      "ems": null
    },
    {
      "latitude": 38.632538,
      "longitude": -9.267151,
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
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914686,
      "ems": null
    },
    {
      "latitude": 38.633331,
      "longitude": -9.268188,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 314,
      "squawk": "1336",
      "timestamp": 1658914689,
      "ems": null
    },
    {
      "latitude": 38.635117,
      "longitude": -9.270491,
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
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914695,
      "ems": null
    },
    {
      "latitude": 38.637009,
      "longitude": -9.272827,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914701,
      "ems": null
    },
    {
      "latitude": 38.638824,
      "longitude": -9.275024,
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
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914707,
      "ems": null
    },
    {
      "latitude": 38.640591,
      "longitude": -9.277222,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "1336",
      "timestamp": 1658914713,
      "ems": null
    },
    {
      "latitude": 38.642395,
      "longitude": -9.279387,
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
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914719,
      "ems": null
    },
    {
      "latitude": 38.644363,
      "longitude": -9.281677,
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
      "heading": 318,
      "squawk": "1336",
      "timestamp": 1658914726,
      "ems": null
    },
    {
      "latitude": 38.646038,
      "longitude": -9.28363,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 316,
      "squawk": "1336",
      "timestamp": 1658914733,
      "ems": null
    },
    {
      "latitude": 38.647945,
      "longitude": -9.286011,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 317,
      "squawk": "1336",
      "timestamp": 1658914739,
      "ems": null
    },
    {
      "latitude": 38.649582,
      "longitude": -9.288164,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 311,
      "squawk": "1336",
      "timestamp": 1658914745,
      "ems": null
    },
    {
      "latitude": 38.650509,
      "longitude": -9.289429,
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
      "heading": 311,
      "squawk": "1336",
      "timestamp": 1658914748,
      "ems": null
    },
    {
      "latitude": 38.651138,
      "longitude": -9.290433,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "1336",
      "timestamp": 1658914751,
      "ems": null
    },
    {
      "latitude": 38.652008,
      "longitude": -9.291747,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "1336",
      "timestamp": 1658914754,
      "ems": null
    },
    {
      "latitude": 38.652695,
      "longitude": -9.292822,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "1336",
      "timestamp": 1658914757,
      "ems": null
    },
    {
      "latitude": 38.653564,
      "longitude": -9.294075,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 311,
      "squawk": "1336",
      "timestamp": 1658914760,
      "ems": null
    },
    {
      "latitude": 38.654373,
      "longitude": -9.295288,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "1336",
      "timestamp": 1658914763,
      "ems": null
    },
    {
      "latitude": 38.655121,
      "longitude": -9.296464,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 309,
      "squawk": "1336",
      "timestamp": 1658914766,
      "ems": null
    },
    {
      "latitude": 38.656723,
      "longitude": -9.299031,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 306,
      "squawk": "1336",
      "timestamp": 1658914772,
      "ems": null
    },
    {
      "latitude": 38.657455,
      "longitude": -9.300285,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 304,
      "squawk": "1336",
      "timestamp": 1658914775,
      "ems": null
    },
    {
      "latitude": 38.658096,
      "longitude": -9.301575,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 303,
      "squawk": "1336",
      "timestamp": 1658914778,
      "ems": null
    },
    {
      "latitude": 38.659492,
      "longitude": -9.304199,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 302,
      "squawk": "1336",
      "timestamp": 1658914784,
      "ems": null
    },
    {
      "latitude": 38.660099,
      "longitude": -9.30542,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "1336",
      "timestamp": 1658914787,
      "ems": null
    },
    {
      "latitude": 38.660751,
      "longitude": -9.306853,
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
      "heading": 299,
      "squawk": "1336",
      "timestamp": 1658914790,
      "ems": null
    },
    {
      "latitude": 38.661346,
      "longitude": -9.308167,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "1336",
      "timestamp": 1658914793,
      "ems": null
    },
    {
      "latitude": 38.661896,
      "longitude": -9.30954,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "1336",
      "timestamp": 1658914796,
      "ems": null
    },
    {
      "latitude": 38.662472,
      "longitude": -9.311035,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "1336",
      "timestamp": 1658914799,
      "ems": null
    },
    {
      "latitude": 38.663029,
      "longitude": -9.312561,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 293,
      "squawk": "1336",
      "timestamp": 1658914802,
      "ems": null
    },
    {
      "latitude": 38.663544,
      "longitude": -9.314026,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 295,
      "squawk": "1336",
      "timestamp": 1658914805,
      "ems": null
    },
    {
      "latitude": 38.664055,
      "longitude": -9.315369,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 295,
      "squawk": "1336",
      "timestamp": 1658914808,
      "ems": null
    },
    {
      "latitude": 38.664658,
      "longitude": -9.316895,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 295,
      "squawk": "1336",
      "timestamp": 1658914811,
      "ems": null
    },
    {
      "latitude": 38.665237,
      "longitude": -9.318496,
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
      "heading": 294,
      "squawk": "1336",
      "timestamp": 1658914815,
      "ems": null
    },
    {
      "latitude": 38.665787,
      "longitude": -9.320048,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "1336",
      "timestamp": 1658914817,
      "ems": null
    },
    {
      "latitude": 38.666241,
      "longitude": -9.321472,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "1336",
      "timestamp": 1658914820,
      "ems": null
    },
    {
      "latitude": 38.666801,
      "longitude": -9.323242,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 290,
      "squawk": "1336",
      "timestamp": 1658914824,
      "ems": null
    },
    {
      "latitude": 38.667267,
      "longitude": -9.324768,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 291,
      "squawk": "1336",
      "timestamp": 1658914827,
      "ems": null
    },
    {
      "latitude": 38.668243,
      "longitude": -9.327881,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 292,
      "squawk": "1336",
      "timestamp": 1658914833,
      "ems": null
    },
    {
      "latitude": 38.66922,
      "longitude": -9.330811,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 292,
      "squawk": "1336",
      "timestamp": 1658914839,
      "ems": null
    },
    {
      "latitude": 38.670338,
      "longitude": -9.33374,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 299,
      "squawk": "1336",
      "timestamp": 1658914844,
      "ems": null
    },
    {
      "latitude": 38.671143,
      "longitude": -9.335095,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 313,
      "squawk": "1336",
      "timestamp": 1658914848,
      "ems": null
    },
    {
      "latitude": 38.672108,
      "longitude": -9.336121,
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
      "heading": 325,
      "squawk": "1336",
      "timestamp": 1658914851,
      "ems": null
    },
    {
      "latitude": 38.673271,
      "longitude": -9.336853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "1336",
      "timestamp": 1658914854,
      "ems": null
    },
    {
      "latitude": 38.674438,
      "longitude": -9.337304,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914857,
      "ems": null
    },
    {
      "latitude": 38.675507,
      "longitude": -9.337585,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914860,
      "ems": null
    },
    {
      "latitude": 38.676407,
      "longitude": -9.337901,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914862,
      "ems": null
    },
    {
      "latitude": 38.677509,
      "longitude": -9.338318,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914866,
      "ems": null
    },
    {
      "latitude": 38.678623,
      "longitude": -9.338745,
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
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914869,
      "ems": null
    },
    {
      "latitude": 38.679794,
      "longitude": -9.339155,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914872,
      "ems": null
    },
    {
      "latitude": 38.680847,
      "longitude": -9.339514,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914875,
      "ems": null
    },
    {
      "latitude": 38.681808,
      "longitude": -9.339812,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914878,
      "ems": null
    },
    {
      "latitude": 38.682632,
      "longitude": -9.340051,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914881,
      "ems": null
    },
    {
      "latitude": 38.683548,
      "longitude": -9.340409,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914884,
      "ems": null
    },
    {
      "latitude": 38.685284,
      "longitude": -9.341064,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914890,
      "ems": null
    },
    {
      "latitude": 38.686863,
      "longitude": -9.341553,
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
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914896,
      "ems": null
    },
    {
      "latitude": 38.688309,
      "longitude": -9.342081,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914902,
      "ems": null
    },
    {
      "latitude": 38.689751,
      "longitude": -9.342651,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914908,
      "ems": null
    },
    {
      "latitude": 38.691101,
      "longitude": -9.343215,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658914914,
      "ems": null
    },
    {
      "latitude": 38.692429,
      "longitude": -9.343693,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914920,
      "ems": null
    },
    {
      "latitude": 38.693573,
      "longitude": -9.34411,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914926,
      "ems": null
    },
    {
      "latitude": 38.694992,
      "longitude": -9.344588,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914932,
      "ems": null
    },
    {
      "latitude": 38.696228,
      "longitude": -9.345066,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914938,
      "ems": null
    },
    {
      "latitude": 38.697433,
      "longitude": -9.345459,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914944,
      "ems": null
    },
    {
      "latitude": 38.698921,
      "longitude": -9.345947,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "1336",
      "timestamp": 1658914950,
      "ems": null
    },
    {
      "latitude": 38.700504,
      "longitude": -9.346436,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914956,
      "ems": null
    },
    {
      "latitude": 38.702042,
      "longitude": -9.346985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914962,
      "ems": null
    },
    {
      "latitude": 38.703438,
      "longitude": -9.347534,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658914968,
      "ems": null
    },
    {
      "latitude": 38.705112,
      "longitude": -9.348083,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914975,
      "ems": null
    },
    {
      "latitude": 38.706665,
      "longitude": -9.348649,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914980,
      "ems": null
    },
    {
      "latitude": 38.708176,
      "longitude": -9.349127,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "1336",
      "timestamp": 1658914986,
      "ems": null
    },
    {
      "latitude": 38.709583,
      "longitude": -9.34967,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658914993,
      "ems": null
    },
    {
      "latitude": 38.710979,
      "longitude": -9.350159,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "1336",
      "timestamp": 1658914998,
      "ems": null
    },
    {
      "latitude": 38.712421,
      "longitude": -9.350647,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915004,
      "ems": null
    },
    {
      "latitude": 38.713863,
      "longitude": -9.351257,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658915010,
      "ems": null
    },
    {
      "latitude": 38.715446,
      "longitude": -9.351807,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915017,
      "ems": null
    },
    {
      "latitude": 38.717216,
      "longitude": -9.352356,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915023,
      "ems": null
    },
    {
      "latitude": 38.718887,
      "longitude": -9.353007,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658915029,
      "ems": null
    },
    {
      "latitude": 38.720856,
      "longitude": -9.353664,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915035,
      "ems": null
    },
    {
      "latitude": 38.722477,
      "longitude": -9.354309,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915041,
      "ems": null
    },
    {
      "latitude": 38.72374,
      "longitude": -9.354739,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1336",
      "timestamp": 1658915046,
      "ems": null
    },
    {
      "latitude": 38.725224,
      "longitude": -9.355286,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915054,
      "ems": null
    },
    {
      "latitude": 38.726074,
      "longitude": -9.355575,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 53.7,
        "kts": 29,
        "mph": 33.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "1336",
      "timestamp": 1658915059,
      "ems": null
    },
    {
      "latitude": 38.726528,
      "longitude": -9.355774,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 27.8,
        "kts": 15,
        "mph": 17.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "1336",
      "timestamp": 1658915065,
      "ems": null
    },
    {
      "latitude": 38.726807,
      "longitude": -9.355695,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 49,
      "squawk": "1336",
      "timestamp": 1658915071,
      "ems": null
    },
    {
      "latitude": 38.726715,
      "longitude": -9.355336,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 22.2,
        "kts": 12,
        "mph": 13.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "1336",
      "timestamp": 1658915077,
      "ems": null
    }
  ]
};
