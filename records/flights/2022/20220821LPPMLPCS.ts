import { Flight } from "../../../src/types/Flight";
export const flight: Flight = {
  identification: {
    id: "20220821LPPMLPCS",
    callsign: "RVP020",
    name: "Cross Country With Adriana",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 21, 9, 40).getTime(),
    arrival: new Date(2022, 7, 21, 11, 35).getTime(),
    singleEnginePistonTime: 115,
    picTime: 115,
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
      registration: "CS-ECD",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Portimao Airport",
      code: "LPPM",
      position: {
        latitude: 37.1493,
        longitude: -8.58396,
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
      "latitude": 37.148243,
      "longitude": -8.579412,
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
      "heading": 106,
      "squawk": "0",
      "timestamp": 1661075495,
      "ems": null
    },
    {
      "latitude": 37.1483,
      "longitude": -8.579694,
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
      "heading": 286,
      "squawk": "0",
      "timestamp": 1661075531,
      "ems": null
    },
    {
      "latitude": 37.148529,
      "longitude": -8.58057,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "3276",
      "timestamp": 1661075537,
      "ems": null
    },
    {
      "latitude": 37.149105,
      "longitude": -8.583009,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661075546,
      "ems": null
    },
    {
      "latitude": 37.149994,
      "longitude": -8.586341,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 289,
      "squawk": "3276",
      "timestamp": 1661075555,
      "ems": null
    },
    {
      "latitude": 37.150547,
      "longitude": -8.588741,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 285,
      "squawk": "3276",
      "timestamp": 1661075561,
      "ems": null
    },
    {
      "latitude": 37.151012,
      "longitude": -8.590831,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 285,
      "squawk": "3276",
      "timestamp": 1661075567,
      "ems": null
    },
    {
      "latitude": 37.151505,
      "longitude": -8.593061,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 285,
      "squawk": "3276",
      "timestamp": 1661075572,
      "ems": null
    },
    {
      "latitude": 37.151993,
      "longitude": -8.59513,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 286,
      "squawk": "3276",
      "timestamp": 1661075578,
      "ems": null
    },
    {
      "latitude": 37.152504,
      "longitude": -8.597816,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 283,
      "squawk": "3276",
      "timestamp": 1661075585,
      "ems": null
    },
    {
      "latitude": 37.152924,
      "longitude": -8.599847,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 282,
      "squawk": "3276",
      "timestamp": 1661075590,
      "ems": null
    },
    {
      "latitude": 37.153336,
      "longitude": -8.602003,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "3276",
      "timestamp": 1661075596,
      "ems": null
    },
    {
      "latitude": 37.153805,
      "longitude": -8.603011,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 302,
      "squawk": "3276",
      "timestamp": 1661075599,
      "ems": null
    },
    {
      "latitude": 37.15427,
      "longitude": -8.603787,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 311,
      "squawk": "3276",
      "timestamp": 1661075602,
      "ems": null
    },
    {
      "latitude": 37.154938,
      "longitude": -8.604457,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "3276",
      "timestamp": 1661075605,
      "ems": null
    },
    {
      "latitude": 37.156036,
      "longitude": -8.6051,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "3276",
      "timestamp": 1661075608,
      "ems": null
    },
    {
      "latitude": 37.156551,
      "longitude": -8.605221,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3276",
      "timestamp": 1661075610,
      "ems": null
    },
    {
      "latitude": 37.158051,
      "longitude": -8.605392,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 2,
      "squawk": "3276",
      "timestamp": 1661075614,
      "ems": null
    },
    {
      "latitude": 37.159058,
      "longitude": -8.605159,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 11,
      "squawk": "3276",
      "timestamp": 1661075617,
      "ems": null
    },
    {
      "latitude": 37.160156,
      "longitude": -8.604691,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 23,
      "squawk": "3276",
      "timestamp": 1661075620,
      "ems": null
    },
    {
      "latitude": 37.161163,
      "longitude": -8.603848,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 36,
      "squawk": "3276",
      "timestamp": 1661075624,
      "ems": null
    },
    {
      "latitude": 37.16185,
      "longitude": -8.602996,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 48,
      "squawk": "3276",
      "timestamp": 1661075626,
      "ems": null
    },
    {
      "latitude": 37.162373,
      "longitude": -8.601817,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661075630,
      "ems": null
    },
    {
      "latitude": 37.162811,
      "longitude": -8.600425,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 71,
      "squawk": "3276",
      "timestamp": 1661075632,
      "ems": null
    },
    {
      "latitude": 37.163086,
      "longitude": -8.598964,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 78,
      "squawk": "3276",
      "timestamp": 1661075635,
      "ems": null
    },
    {
      "latitude": 37.163177,
      "longitude": -8.597503,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661075638,
      "ems": null
    },
    {
      "latitude": 37.16304,
      "longitude": -8.596042,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 97,
      "squawk": "3276",
      "timestamp": 1661075641,
      "ems": null
    },
    {
      "latitude": 37.162792,
      "longitude": -8.594533,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661075645,
      "ems": null
    },
    {
      "latitude": 37.162373,
      "longitude": -8.5931,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661075647,
      "ems": null
    },
    {
      "latitude": 37.161953,
      "longitude": -8.591726,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 112,
      "squawk": "3276",
      "timestamp": 1661075651,
      "ems": null
    },
    {
      "latitude": 37.161488,
      "longitude": -8.590353,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 112,
      "squawk": "3276",
      "timestamp": 1661075653,
      "ems": null
    },
    {
      "latitude": 37.161026,
      "longitude": -8.588913,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 112,
      "squawk": "3276",
      "timestamp": 1661075657,
      "ems": null
    },
    {
      "latitude": 37.160568,
      "longitude": -8.58751,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661075660,
      "ems": null
    },
    {
      "latitude": 37.160183,
      "longitude": -8.585995,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661075663,
      "ems": null
    },
    {
      "latitude": 37.159904,
      "longitude": -8.584681,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661075666,
      "ems": null
    },
    {
      "latitude": 37.15958,
      "longitude": -8.583188,
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
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075669,
      "ems": null
    },
    {
      "latitude": 37.15947,
      "longitude": -8.58266,
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
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661075670,
      "ems": null
    },
    {
      "latitude": 37.158787,
      "longitude": -8.579606,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661075676,
      "ems": null
    },
    {
      "latitude": 37.158463,
      "longitude": -8.578173,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075679,
      "ems": null
    },
    {
      "latitude": 37.158043,
      "longitude": -8.576322,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661075682,
      "ems": null
    },
    {
      "latitude": 37.157669,
      "longitude": -8.574769,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075685,
      "ems": null
    },
    {
      "latitude": 37.15741,
      "longitude": -8.573544,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661075688,
      "ems": null
    },
    {
      "latitude": 37.156693,
      "longitude": -8.570172,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075694,
      "ems": null
    },
    {
      "latitude": 37.15604,
      "longitude": -8.567067,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661075700,
      "ems": null
    },
    {
      "latitude": 37.155296,
      "longitude": -8.563604,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075706,
      "ems": null
    },
    {
      "latitude": 37.154617,
      "longitude": -8.560395,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075712,
      "ems": null
    },
    {
      "latitude": 37.153805,
      "longitude": -8.556021,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 103,
      "squawk": "3276",
      "timestamp": 1661075720,
      "ems": null
    },
    {
      "latitude": 37.153156,
      "longitude": -8.552737,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 103,
      "squawk": "3276",
      "timestamp": 1661075726,
      "ems": null
    },
    {
      "latitude": 37.15255,
      "longitude": -8.549273,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 101,
      "squawk": "3276",
      "timestamp": 1661075732,
      "ems": null
    },
    {
      "latitude": 37.151993,
      "longitude": -8.545512,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "3276",
      "timestamp": 1661075738,
      "ems": null
    },
    {
      "latitude": 37.151413,
      "longitude": -8.542104,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "3276",
      "timestamp": 1661075744,
      "ems": null
    },
    {
      "latitude": 37.150864,
      "longitude": -8.538773,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 102,
      "squawk": "3276",
      "timestamp": 1661075750,
      "ems": null
    },
    {
      "latitude": 37.150082,
      "longitude": -8.534884,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661075756,
      "ems": null
    },
    {
      "latitude": 37.149151,
      "longitude": -8.531182,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "3276",
      "timestamp": 1661075762,
      "ems": null
    },
    {
      "latitude": 37.148712,
      "longitude": -8.52954,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661075765,
      "ems": null
    },
    {
      "latitude": 37.148209,
      "longitude": -8.527904,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661075768,
      "ems": null
    },
    {
      "latitude": 37.147614,
      "longitude": -8.525916,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 111,
      "squawk": "3276",
      "timestamp": 1661075771,
      "ems": null
    },
    {
      "latitude": 37.147064,
      "longitude": -8.524339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661075774,
      "ems": null
    },
    {
      "latitude": 37.146423,
      "longitude": -8.522586,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661075777,
      "ems": null
    },
    {
      "latitude": 37.145828,
      "longitude": -8.520891,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 112,
      "squawk": "3276",
      "timestamp": 1661075780,
      "ems": null
    },
    {
      "latitude": 37.145233,
      "longitude": -8.517268,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 92,
      "squawk": "3276",
      "timestamp": 1661075786,
      "ems": null
    },
    {
      "latitude": 37.145473,
      "longitude": -8.515658,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 77,
      "squawk": "3276",
      "timestamp": 1661075789,
      "ems": null
    },
    {
      "latitude": 37.14608,
      "longitude": -8.513867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 60,
      "squawk": "3276",
      "timestamp": 1661075792,
      "ems": null
    },
    {
      "latitude": 37.146915,
      "longitude": -8.512553,
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
      "heading": 48,
      "squawk": "3276",
      "timestamp": 1661075795,
      "ems": null
    },
    {
      "latitude": 37.147705,
      "longitude": -8.511658,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "3276",
      "timestamp": 1661075798,
      "ems": null
    },
    {
      "latitude": 37.148758,
      "longitude": -8.510548,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "3276",
      "timestamp": 1661075801,
      "ems": null
    },
    {
      "latitude": 37.149811,
      "longitude": -8.509612,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 35,
      "squawk": "3276",
      "timestamp": 1661075804,
      "ems": null
    },
    {
      "latitude": 37.150772,
      "longitude": -8.508736,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "3276",
      "timestamp": 1661075807,
      "ems": null
    },
    {
      "latitude": 37.151779,
      "longitude": -8.507859,
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
      "heading": 34,
      "squawk": "3276",
      "timestamp": 1661075810,
      "ems": null
    },
    {
      "latitude": 37.152737,
      "longitude": -8.50706,
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
      "heading": 34,
      "squawk": "3276",
      "timestamp": 1661075813,
      "ems": null
    },
    {
      "latitude": 37.153854,
      "longitude": -8.506104,
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
      "heading": 32,
      "squawk": "3276",
      "timestamp": 1661075816,
      "ems": null
    },
    {
      "latitude": 37.154831,
      "longitude": -8.505448,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "3276",
      "timestamp": 1661075819,
      "ems": null
    },
    {
      "latitude": 37.155853,
      "longitude": -8.504851,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "3276",
      "timestamp": 1661075822,
      "ems": null
    },
    {
      "latitude": 37.156925,
      "longitude": -8.504374,
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
      "heading": 19,
      "squawk": "3276",
      "timestamp": 1661075825,
      "ems": null
    },
    {
      "latitude": 37.158005,
      "longitude": -8.503885,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 18,
      "squawk": "3276",
      "timestamp": 1661075828,
      "ems": null
    },
    {
      "latitude": 37.159012,
      "longitude": -8.503476,
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
      "heading": 16,
      "squawk": "3276",
      "timestamp": 1661075831,
      "ems": null
    },
    {
      "latitude": 37.160065,
      "longitude": -8.503126,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "3276",
      "timestamp": 1661075834,
      "ems": null
    },
    {
      "latitude": 37.161068,
      "longitude": -8.502821,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "3276",
      "timestamp": 1661075837,
      "ems": null
    },
    {
      "latitude": 37.162186,
      "longitude": -8.502403,
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
      "heading": 16,
      "squawk": "3276",
      "timestamp": 1661075840,
      "ems": null
    },
    {
      "latitude": 37.16251,
      "longitude": -8.502283,
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
      "heading": 16,
      "squawk": "3276",
      "timestamp": 1661075841,
      "ems": null
    },
    {
      "latitude": 37.163628,
      "longitude": -8.501925,
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
      "heading": 15,
      "squawk": "3276",
      "timestamp": 1661075845,
      "ems": null
    },
    {
      "latitude": 37.165009,
      "longitude": -8.501548,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661075849,
      "ems": null
    },
    {
      "latitude": 37.165493,
      "longitude": -8.501448,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661075850,
      "ems": null
    },
    {
      "latitude": 37.165833,
      "longitude": -8.501372,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661075852,
      "ems": null
    },
    {
      "latitude": 37.167912,
      "longitude": -8.50097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "3276",
      "timestamp": 1661075857,
      "ems": null
    },
    {
      "latitude": 37.169174,
      "longitude": -8.500789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "3276",
      "timestamp": 1661075861,
      "ems": null
    },
    {
      "latitude": 37.170937,
      "longitude": -8.500611,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "3276",
      "timestamp": 1661075867,
      "ems": null
    },
    {
      "latitude": 37.17308,
      "longitude": -8.500433,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "3276",
      "timestamp": 1661075873,
      "ems": null
    },
    {
      "latitude": 37.173592,
      "longitude": -8.500373,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 4,
      "squawk": "3276",
      "timestamp": 1661075874,
      "ems": null
    },
    {
      "latitude": 37.174801,
      "longitude": -8.500313,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 2,
      "squawk": "3276",
      "timestamp": 1661075879,
      "ems": null
    },
    {
      "latitude": 37.175873,
      "longitude": -8.500254,
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
      "heading": 1,
      "squawk": "3276",
      "timestamp": 1661075882,
      "ems": null
    },
    {
      "latitude": 37.177547,
      "longitude": -8.500074,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "3276",
      "timestamp": 1661075887,
      "ems": null
    },
    {
      "latitude": 37.179474,
      "longitude": -8.499853,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3276",
      "timestamp": 1661075894,
      "ems": null
    },
    {
      "latitude": 37.181442,
      "longitude": -8.499561,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "3276",
      "timestamp": 1661075900,
      "ems": null
    },
    {
      "latitude": 37.183411,
      "longitude": -8.499502,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "3276",
      "timestamp": 1661075906,
      "ems": null
    },
    {
      "latitude": 37.184952,
      "longitude": -8.499417,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 1,
      "squawk": "3276",
      "timestamp": 1661075910,
      "ems": null
    },
    {
      "latitude": 37.187668,
      "longitude": -8.499386,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "3276",
      "timestamp": 1661075919,
      "ems": null
    },
    {
      "latitude": 37.188675,
      "longitude": -8.499561,
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
      "heading": 350,
      "squawk": "3276",
      "timestamp": 1661075921,
      "ems": null
    },
    {
      "latitude": 37.189278,
      "longitude": -8.499776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "3276",
      "timestamp": 1661075924,
      "ems": null
    },
    {
      "latitude": 37.190781,
      "longitude": -8.500613,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "3276",
      "timestamp": 1661075929,
      "ems": null
    },
    {
      "latitude": 37.192429,
      "longitude": -8.501899,
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
      "heading": 323,
      "squawk": "3276",
      "timestamp": 1661075933,
      "ems": null
    },
    {
      "latitude": 37.193237,
      "longitude": -8.502702,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 323,
      "squawk": "3276",
      "timestamp": 1661075936,
      "ems": null
    },
    {
      "latitude": 37.194073,
      "longitude": -8.503478,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 319,
      "squawk": "3276",
      "timestamp": 1661075939,
      "ems": null
    },
    {
      "latitude": 37.194912,
      "longitude": -8.504493,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 315,
      "squawk": "3276",
      "timestamp": 1661075942,
      "ems": null
    },
    {
      "latitude": 37.195724,
      "longitude": -8.505522,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 312,
      "squawk": "3276",
      "timestamp": 1661075946,
      "ems": null
    },
    {
      "latitude": 37.19632,
      "longitude": -8.506398,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 310,
      "squawk": "3276",
      "timestamp": 1661075949,
      "ems": null
    },
    {
      "latitude": 37.196869,
      "longitude": -8.507334,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075952,
      "ems": null
    },
    {
      "latitude": 37.197464,
      "longitude": -8.50821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661075955,
      "ems": null
    },
    {
      "latitude": 37.198078,
      "longitude": -8.50915,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075958,
      "ems": null
    },
    {
      "latitude": 37.1987,
      "longitude": -8.510021,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "3276",
      "timestamp": 1661075961,
      "ems": null
    },
    {
      "latitude": 37.199341,
      "longitude": -8.511015,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075964,
      "ems": null
    },
    {
      "latitude": 37.19994,
      "longitude": -8.511956,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075967,
      "ems": null
    },
    {
      "latitude": 37.200531,
      "longitude": -8.512885,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "3276",
      "timestamp": 1661075970,
      "ems": null
    },
    {
      "latitude": 37.201813,
      "longitude": -8.514872,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075976,
      "ems": null
    },
    {
      "latitude": 37.203049,
      "longitude": -8.516742,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075982,
      "ems": null
    },
    {
      "latitude": 37.204514,
      "longitude": -8.518963,
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
      "heading": 309,
      "squawk": "3276",
      "timestamp": 1661075988,
      "ems": null
    },
    {
      "latitude": 37.205853,
      "longitude": -8.521091,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661075994,
      "ems": null
    },
    {
      "latitude": 37.207214,
      "longitude": -8.523287,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661076000,
      "ems": null
    },
    {
      "latitude": 37.208736,
      "longitude": -8.525749,
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
      "heading": 307,
      "squawk": "3276",
      "timestamp": 1661076006,
      "ems": null
    },
    {
      "latitude": 37.210041,
      "longitude": -8.527958,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 307,
      "squawk": "3276",
      "timestamp": 1661076012,
      "ems": null
    },
    {
      "latitude": 37.211391,
      "longitude": -8.530168,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "3276",
      "timestamp": 1661076018,
      "ems": null
    },
    {
      "latitude": 37.212753,
      "longitude": -8.532403,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661076024,
      "ems": null
    },
    {
      "latitude": 37.214138,
      "longitude": -8.534526,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661076030,
      "ems": null
    },
    {
      "latitude": 37.215454,
      "longitude": -8.536611,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "3224",
      "timestamp": 1661076036,
      "ems": null
    },
    {
      "latitude": 37.216839,
      "longitude": -8.538885,
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
      "heading": 307,
      "squawk": "3224",
      "timestamp": 1661076042,
      "ems": null
    },
    {
      "latitude": 37.218094,
      "longitude": -8.540975,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 305,
      "squawk": "3224",
      "timestamp": 1661076048,
      "ems": null
    },
    {
      "latitude": 37.21949,
      "longitude": -8.543423,
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
      "heading": 305,
      "squawk": "3224",
      "timestamp": 1661076054,
      "ems": null
    },
    {
      "latitude": 37.220795,
      "longitude": -8.545691,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 306,
      "squawk": "3224",
      "timestamp": 1661076060,
      "ems": null
    },
    {
      "latitude": 37.222229,
      "longitude": -8.548298,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076066,
      "ems": null
    },
    {
      "latitude": 37.223602,
      "longitude": -8.550928,
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
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661076072,
      "ems": null
    },
    {
      "latitude": 37.22493,
      "longitude": -8.553382,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661076078,
      "ems": null
    },
    {
      "latitude": 37.226383,
      "longitude": -8.556081,
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
      "heading": 302,
      "squawk": "3224",
      "timestamp": 1661076084,
      "ems": null
    },
    {
      "latitude": 37.227684,
      "longitude": -8.558648,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076090,
      "ems": null
    },
    {
      "latitude": 37.229267,
      "longitude": -8.561514,
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
      "heading": 305,
      "squawk": "3224",
      "timestamp": 1661076096,
      "ems": null
    },
    {
      "latitude": 37.230698,
      "longitude": -8.564252,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076102,
      "ems": null
    },
    {
      "latitude": 37.232162,
      "longitude": -8.56694,
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
      "heading": 301,
      "squawk": "3224",
      "timestamp": 1661076108,
      "ems": null
    },
    {
      "latitude": 37.233536,
      "longitude": -8.569803,
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
      "heading": 302,
      "squawk": "3224",
      "timestamp": 1661076115,
      "ems": null
    },
    {
      "latitude": 37.234901,
      "longitude": -8.5725,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076121,
      "ems": null
    },
    {
      "latitude": 37.236389,
      "longitude": -8.575068,
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
      "heading": 307,
      "squawk": "3224",
      "timestamp": 1661076126,
      "ems": null
    },
    {
      "latitude": 37.238022,
      "longitude": -8.577809,
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
      "heading": 305,
      "squawk": "3224",
      "timestamp": 1661076133,
      "ems": null
    },
    {
      "latitude": 37.239395,
      "longitude": -8.58044,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076138,
      "ems": null
    },
    {
      "latitude": 37.240814,
      "longitude": -8.583129,
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
      "heading": 303,
      "squawk": "3224",
      "timestamp": 1661076145,
      "ems": null
    },
    {
      "latitude": 37.242188,
      "longitude": -8.58564,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661076150,
      "ems": null
    },
    {
      "latitude": 37.243607,
      "longitude": -8.588328,
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
      "heading": 301,
      "squawk": "3224",
      "timestamp": 1661076157,
      "ems": null
    },
    {
      "latitude": 37.244202,
      "longitude": -8.589556,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 301,
      "squawk": "3224",
      "timestamp": 1661076160,
      "ems": null
    },
    {
      "latitude": 37.245468,
      "longitude": -8.592323,
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
      "heading": 297,
      "squawk": "3224",
      "timestamp": 1661076166,
      "ems": null
    },
    {
      "latitude": 37.246025,
      "longitude": -8.593637,
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
      "heading": 298,
      "squawk": "3224",
      "timestamp": 1661076169,
      "ems": null
    },
    {
      "latitude": 37.247452,
      "longitude": -8.596334,
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
      "heading": 307,
      "squawk": "3224",
      "timestamp": 1661076175,
      "ems": null
    },
    {
      "latitude": 37.248306,
      "longitude": -8.597578,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076178,
      "ems": null
    },
    {
      "latitude": 37.249191,
      "longitude": -8.598772,
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
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661076181,
      "ems": null
    },
    {
      "latitude": 37.250015,
      "longitude": -8.59984,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076184,
      "ems": null
    },
    {
      "latitude": 37.250916,
      "longitude": -8.601101,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 312,
      "squawk": "3224",
      "timestamp": 1661076187,
      "ems": null
    },
    {
      "latitude": 37.251892,
      "longitude": -8.602533,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 309,
      "squawk": "3224",
      "timestamp": 1661076190,
      "ems": null
    },
    {
      "latitude": 37.25259,
      "longitude": -8.603668,
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
      "heading": 306,
      "squawk": "3224",
      "timestamp": 1661076193,
      "ems": null
    },
    {
      "latitude": 37.253384,
      "longitude": -8.604981,
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
      "heading": 307,
      "squawk": "3224",
      "timestamp": 1661076196,
      "ems": null
    },
    {
      "latitude": 37.254272,
      "longitude": -8.606503,
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
      "heading": 306,
      "squawk": "3224",
      "timestamp": 1661076199,
      "ems": null
    },
    {
      "latitude": 37.255875,
      "longitude": -8.609365,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661076205,
      "ems": null
    },
    {
      "latitude": 37.256176,
      "longitude": -8.609878,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661076207,
      "ems": null
    },
    {
      "latitude": 37.256779,
      "longitude": -8.610952,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 306,
      "squawk": "3224",
      "timestamp": 1661076210,
      "ems": null
    },
    {
      "latitude": 37.257751,
      "longitude": -8.612697,
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
      "heading": 302,
      "squawk": "3224",
      "timestamp": 1661076212,
      "ems": null
    },
    {
      "latitude": 37.258503,
      "longitude": -8.614237,
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
      "heading": 300,
      "squawk": "3224",
      "timestamp": 1661076216,
      "ems": null
    },
    {
      "latitude": 37.259171,
      "longitude": -8.615736,
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
      "heading": 297,
      "squawk": "3224",
      "timestamp": 1661076219,
      "ems": null
    },
    {
      "latitude": 37.25972,
      "longitude": -8.617197,
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
      "heading": 296,
      "squawk": "3224",
      "timestamp": 1661076222,
      "ems": null
    },
    {
      "latitude": 37.260315,
      "longitude": -8.618657,
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
      "heading": 297,
      "squawk": "3224",
      "timestamp": 1661076225,
      "ems": null
    },
    {
      "latitude": 37.260876,
      "longitude": -8.619968,
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
      "heading": 296,
      "squawk": "3224",
      "timestamp": 1661076228,
      "ems": null
    },
    {
      "latitude": 37.261414,
      "longitude": -8.621346,
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
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661076231,
      "ems": null
    },
    {
      "latitude": 37.261917,
      "longitude": -8.622807,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 292,
      "squawk": "3224",
      "timestamp": 1661076234,
      "ems": null
    },
    {
      "latitude": 37.262421,
      "longitude": -8.624385,
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
      "heading": 292,
      "squawk": "3224",
      "timestamp": 1661076237,
      "ems": null
    },
    {
      "latitude": 37.262833,
      "longitude": -8.625611,
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
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661076240,
      "ems": null
    },
    {
      "latitude": 37.263428,
      "longitude": -8.627365,
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
      "heading": 293,
      "squawk": "3224",
      "timestamp": 1661076243,
      "ems": null
    },
    {
      "latitude": 37.263977,
      "longitude": -8.628826,
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
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661076246,
      "ems": null
    },
    {
      "latitude": 37.26516,
      "longitude": -8.631552,
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
      "heading": 301,
      "squawk": "3224",
      "timestamp": 1661076252,
      "ems": null
    },
    {
      "latitude": 37.265808,
      "longitude": -8.632799,
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
      "heading": 305,
      "squawk": "3224",
      "timestamp": 1661076255,
      "ems": null
    },
    {
      "latitude": 37.266647,
      "longitude": -8.634119,
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
      "heading": 309,
      "squawk": "3224",
      "timestamp": 1661076258,
      "ems": null
    },
    {
      "latitude": 37.267582,
      "longitude": -8.635373,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 314,
      "squawk": "3224",
      "timestamp": 1661076261,
      "ems": null
    },
    {
      "latitude": 37.268463,
      "longitude": -8.636598,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076264,
      "ems": null
    },
    {
      "latitude": 37.269302,
      "longitude": -8.637881,
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
      "heading": 310,
      "squawk": "3224",
      "timestamp": 1661076267,
      "ems": null
    },
    {
      "latitude": 37.270187,
      "longitude": -8.639075,
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
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661076270,
      "ems": null
    },
    {
      "latitude": 37.271072,
      "longitude": -8.640104,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076273,
      "ems": null
    },
    {
      "latitude": 37.271942,
      "longitude": -8.641214,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076276,
      "ems": null
    },
    {
      "latitude": 37.272858,
      "longitude": -8.642324,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076279,
      "ems": null
    },
    {
      "latitude": 37.273682,
      "longitude": -8.643435,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661076282,
      "ems": null
    },
    {
      "latitude": 37.274376,
      "longitude": -8.64433,
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
      "heading": 312,
      "squawk": "3224",
      "timestamp": 1661076285,
      "ems": null
    },
    {
      "latitude": 37.27652,
      "longitude": -8.647058,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076291,
      "ems": null
    },
    {
      "latitude": 37.277496,
      "longitude": -8.64815,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661076294,
      "ems": null
    },
    {
      "latitude": 37.278519,
      "longitude": -8.649345,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076297,
      "ems": null
    },
    {
      "latitude": 37.279079,
      "longitude": -8.649882,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076298,
      "ems": null
    },
    {
      "latitude": 37.281963,
      "longitude": -8.653286,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661076308,
      "ems": null
    },
    {
      "latitude": 37.283779,
      "longitude": -8.655436,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661076314,
      "ems": null
    },
    {
      "latitude": 37.284668,
      "longitude": -8.656466,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076317,
      "ems": null
    },
    {
      "latitude": 37.286526,
      "longitude": -8.658361,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076323,
      "ems": null
    },
    {
      "latitude": 37.288513,
      "longitude": -8.660616,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076329,
      "ems": null
    },
    {
      "latitude": 37.29039,
      "longitude": -8.662837,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076335,
      "ems": null
    },
    {
      "latitude": 37.29213,
      "longitude": -8.664999,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076340,
      "ems": null
    },
    {
      "latitude": 37.293976,
      "longitude": -8.667198,
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
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661076347,
      "ems": null
    },
    {
      "latitude": 37.295792,
      "longitude": -8.669089,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076352,
      "ems": null
    },
    {
      "latitude": 37.297806,
      "longitude": -8.671018,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076359,
      "ems": null
    },
    {
      "latitude": 37.298859,
      "longitude": -8.672011,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076362,
      "ems": null
    },
    {
      "latitude": 37.299839,
      "longitude": -8.67299,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076365,
      "ems": null
    },
    {
      "latitude": 37.300781,
      "longitude": -8.673823,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661076367,
      "ems": null
    },
    {
      "latitude": 37.301983,
      "longitude": -8.674781,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661076371,
      "ems": null
    },
    {
      "latitude": 37.303101,
      "longitude": -8.675616,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661076374,
      "ems": null
    },
    {
      "latitude": 37.304218,
      "longitude": -8.676513,
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
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661076377,
      "ems": null
    },
    {
      "latitude": 37.305428,
      "longitude": -8.677467,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661076380,
      "ems": null
    },
    {
      "latitude": 37.306458,
      "longitude": -8.678265,
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
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661076383,
      "ems": null
    },
    {
      "latitude": 37.307556,
      "longitude": -8.679199,
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
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661076386,
      "ems": null
    },
    {
      "latitude": 37.308685,
      "longitude": -8.679976,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661076388,
      "ems": null
    },
    {
      "latitude": 37.310028,
      "longitude": -8.680836,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661076392,
      "ems": null
    },
    {
      "latitude": 37.311062,
      "longitude": -8.681409,
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
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661076395,
      "ems": null
    },
    {
      "latitude": 37.312317,
      "longitude": -8.682063,
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
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661076398,
      "ems": null
    },
    {
      "latitude": 37.31348,
      "longitude": -8.682543,
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
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661076401,
      "ems": null
    },
    {
      "latitude": 37.314697,
      "longitude": -8.68294,
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
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661076404,
      "ems": null
    },
    {
      "latitude": 37.315853,
      "longitude": -8.683438,
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
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661076407,
      "ems": null
    },
    {
      "latitude": 37.317253,
      "longitude": -8.684155,
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
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661076410,
      "ems": null
    },
    {
      "latitude": 37.319504,
      "longitude": -8.685744,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661076416,
      "ems": null
    },
    {
      "latitude": 37.320648,
      "longitude": -8.686782,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076419,
      "ems": null
    },
    {
      "latitude": 37.321793,
      "longitude": -8.687848,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076422,
      "ems": null
    },
    {
      "latitude": 37.322746,
      "longitude": -8.688752,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076425,
      "ems": null
    },
    {
      "latitude": 37.323166,
      "longitude": -8.689134,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076426,
      "ems": null
    },
    {
      "latitude": 37.324493,
      "longitude": -8.690419,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076430,
      "ems": null
    },
    {
      "latitude": 37.325729,
      "longitude": -8.691588,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076434,
      "ems": null
    },
    {
      "latitude": 37.326691,
      "longitude": -8.692581,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076436,
      "ems": null
    },
    {
      "latitude": 37.327698,
      "longitude": -8.693575,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076439,
      "ems": null
    },
    {
      "latitude": 37.328705,
      "longitude": -8.694664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076443,
      "ems": null
    },
    {
      "latitude": 37.329681,
      "longitude": -8.695739,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076445,
      "ems": null
    },
    {
      "latitude": 37.331635,
      "longitude": -8.697828,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076451,
      "ems": null
    },
    {
      "latitude": 37.333557,
      "longitude": -8.699828,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076458,
      "ems": null
    },
    {
      "latitude": 37.335545,
      "longitude": -8.701769,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076463,
      "ems": null
    },
    {
      "latitude": 37.33754,
      "longitude": -8.703743,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076469,
      "ems": null
    },
    {
      "latitude": 37.339462,
      "longitude": -8.705847,
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
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076475,
      "ems": null
    },
    {
      "latitude": 37.342392,
      "longitude": -8.709061,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076485,
      "ems": null
    },
    {
      "latitude": 37.34436,
      "longitude": -8.710931,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076491,
      "ems": null
    },
    {
      "latitude": 37.346207,
      "longitude": -8.712874,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076497,
      "ems": null
    },
    {
      "latitude": 37.348164,
      "longitude": -8.714786,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076503,
      "ems": null
    },
    {
      "latitude": 37.349075,
      "longitude": -8.715665,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661076506,
      "ems": null
    },
    {
      "latitude": 37.350163,
      "longitude": -8.716577,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661076509,
      "ems": null
    },
    {
      "latitude": 37.351135,
      "longitude": -8.717242,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661076512,
      "ems": null
    },
    {
      "latitude": 37.352211,
      "longitude": -8.717831,
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
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661076515,
      "ems": null
    },
    {
      "latitude": 37.353329,
      "longitude": -8.718488,
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661076518,
      "ems": null
    },
    {
      "latitude": 37.354568,
      "longitude": -8.719171,
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661076521,
      "ems": null
    },
    {
      "latitude": 37.355713,
      "longitude": -8.719872,
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
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661076524,
      "ems": null
    },
    {
      "latitude": 37.356628,
      "longitude": -8.720456,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661076527,
      "ems": null
    },
    {
      "latitude": 37.357544,
      "longitude": -8.721041,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661076529,
      "ems": null
    },
    {
      "latitude": 37.35878,
      "longitude": -8.721801,
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661076533,
      "ems": null
    },
    {
      "latitude": 37.359604,
      "longitude": -8.722384,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661076535,
      "ems": null
    },
    {
      "latitude": 37.361984,
      "longitude": -8.724314,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661076542,
      "ems": null
    },
    {
      "latitude": 37.362854,
      "longitude": -8.725073,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076545,
      "ems": null
    },
    {
      "latitude": 37.363953,
      "longitude": -8.726067,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076548,
      "ems": null
    },
    {
      "latitude": 37.364914,
      "longitude": -8.727001,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076551,
      "ems": null
    },
    {
      "latitude": 37.365738,
      "longitude": -8.727878,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076554,
      "ems": null
    },
    {
      "latitude": 37.366737,
      "longitude": -8.728936,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076557,
      "ems": null
    },
    {
      "latitude": 37.367622,
      "longitude": -8.729832,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076560,
      "ems": null
    },
    {
      "latitude": 37.368484,
      "longitude": -8.730742,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076563,
      "ems": null
    },
    {
      "latitude": 37.369484,
      "longitude": -8.731862,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076566,
      "ems": null
    },
    {
      "latitude": 37.370461,
      "longitude": -8.732877,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076569,
      "ems": null
    },
    {
      "latitude": 37.372238,
      "longitude": -8.734774,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661076575,
      "ems": null
    },
    {
      "latitude": 37.374115,
      "longitude": -8.736644,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076581,
      "ems": null
    },
    {
      "latitude": 37.375999,
      "longitude": -8.73837,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661076587,
      "ems": null
    },
    {
      "latitude": 37.37693,
      "longitude": -8.739206,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661076590,
      "ems": null
    },
    {
      "latitude": 37.377956,
      "longitude": -8.740102,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661076593,
      "ems": null
    },
    {
      "latitude": 37.378933,
      "longitude": -8.740937,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661076596,
      "ems": null
    },
    {
      "latitude": 37.379864,
      "longitude": -8.741774,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661076599,
      "ems": null
    },
    {
      "latitude": 37.381714,
      "longitude": -8.743481,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076605,
      "ems": null
    },
    {
      "latitude": 37.383636,
      "longitude": -8.745293,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076611,
      "ems": null
    },
    {
      "latitude": 37.385468,
      "longitude": -8.746987,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076617,
      "ems": null
    },
    {
      "latitude": 37.387264,
      "longitude": -8.7487,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076623,
      "ems": null
    },
    {
      "latitude": 37.389038,
      "longitude": -8.750493,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076629,
      "ems": null
    },
    {
      "latitude": 37.390915,
      "longitude": -8.752363,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076635,
      "ems": null
    },
    {
      "latitude": 37.392712,
      "longitude": -8.754193,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661076641,
      "ems": null
    },
    {
      "latitude": 37.393524,
      "longitude": -8.75511,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661076644,
      "ems": null
    },
    {
      "latitude": 37.394394,
      "longitude": -8.756104,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076647,
      "ems": null
    },
    {
      "latitude": 37.395226,
      "longitude": -8.757178,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 314,
      "squawk": "3224",
      "timestamp": 1661076651,
      "ems": null
    },
    {
      "latitude": 37.395924,
      "longitude": -8.758134,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "3224",
      "timestamp": 1661076653,
      "ems": null
    },
    {
      "latitude": 37.39682,
      "longitude": -8.759259,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076656,
      "ems": null
    },
    {
      "latitude": 37.398605,
      "longitude": -8.761129,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661076662,
      "ems": null
    },
    {
      "latitude": 37.400345,
      "longitude": -8.763116,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661076669,
      "ems": null
    },
    {
      "latitude": 37.40221,
      "longitude": -8.765299,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076675,
      "ems": null
    },
    {
      "latitude": 37.404007,
      "longitude": -8.767615,
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
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661076681,
      "ems": null
    },
    {
      "latitude": 37.405701,
      "longitude": -8.769954,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076687,
      "ems": null
    },
    {
      "latitude": 37.40654,
      "longitude": -8.77115,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076689,
      "ems": null
    },
    {
      "latitude": 37.407471,
      "longitude": -8.772464,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 310,
      "squawk": "3224",
      "timestamp": 1661076693,
      "ems": null
    },
    {
      "latitude": 37.408356,
      "longitude": -8.77381,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076696,
      "ems": null
    },
    {
      "latitude": 37.409317,
      "longitude": -8.775096,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076699,
      "ems": null
    },
    {
      "latitude": 37.410263,
      "longitude": -8.776464,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076702,
      "ems": null
    },
    {
      "latitude": 37.411926,
      "longitude": -8.778836,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076708,
      "ems": null
    },
    {
      "latitude": 37.413986,
      "longitude": -8.781837,
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
      "heading": 310,
      "squawk": "3224",
      "timestamp": 1661076714,
      "ems": null
    },
    {
      "latitude": 37.415756,
      "longitude": -8.784406,
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
      "heading": 311,
      "squawk": "3224",
      "timestamp": 1661076720,
      "ems": null
    },
    {
      "latitude": 37.417786,
      "longitude": -8.787076,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661076726,
      "ems": null
    },
    {
      "latitude": 37.418736,
      "longitude": -8.788226,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661076729,
      "ems": null
    },
    {
      "latitude": 37.420784,
      "longitude": -8.790436,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661076735,
      "ems": null
    },
    {
      "latitude": 37.421906,
      "longitude": -8.791517,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661076738,
      "ems": null
    },
    {
      "latitude": 37.42297,
      "longitude": -8.792525,
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
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661076741,
      "ems": null
    },
    {
      "latitude": 37.424274,
      "longitude": -8.79366,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661076744,
      "ems": null
    },
    {
      "latitude": 37.425346,
      "longitude": -8.794496,
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
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661076747,
      "ems": null
    },
    {
      "latitude": 37.426346,
      "longitude": -8.795316,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661076750,
      "ems": null
    },
    {
      "latitude": 37.427395,
      "longitude": -8.795989,
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661076753,
      "ems": null
    },
    {
      "latitude": 37.428513,
      "longitude": -8.796765,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661076756,
      "ems": null
    },
    {
      "latitude": 37.429504,
      "longitude": -8.79742,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661076759,
      "ems": null
    },
    {
      "latitude": 37.430511,
      "longitude": -8.798018,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661076762,
      "ems": null
    },
    {
      "latitude": 37.431442,
      "longitude": -8.798676,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661076765,
      "ems": null
    },
    {
      "latitude": 37.43256,
      "longitude": -8.799333,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661076768,
      "ems": null
    },
    {
      "latitude": 37.43354,
      "longitude": -8.79993,
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
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661076771,
      "ems": null
    },
    {
      "latitude": 37.434608,
      "longitude": -8.800586,
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
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661076774,
      "ems": null
    },
    {
      "latitude": 37.43573,
      "longitude": -8.801159,
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
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661076777,
      "ems": null
    },
    {
      "latitude": 37.436752,
      "longitude": -8.801661,
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
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661076780,
      "ems": null
    },
    {
      "latitude": 37.43898,
      "longitude": -8.80262,
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
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661076786,
      "ems": null
    },
    {
      "latitude": 37.440079,
      "longitude": -8.803087,
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
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661076789,
      "ems": null
    },
    {
      "latitude": 37.441032,
      "longitude": -8.803452,
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
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661076792,
      "ems": null
    },
    {
      "latitude": 37.442093,
      "longitude": -8.803847,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661076795,
      "ems": null
    },
    {
      "latitude": 37.443192,
      "longitude": -8.804198,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661076798,
      "ems": null
    },
    {
      "latitude": 37.444477,
      "longitude": -8.804586,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661076801,
      "ems": null
    },
    {
      "latitude": 37.445618,
      "longitude": -8.804957,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661076804,
      "ems": null
    },
    {
      "latitude": 37.446621,
      "longitude": -8.805243,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661076807,
      "ems": null
    },
    {
      "latitude": 37.448948,
      "longitude": -8.80596,
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661076813,
      "ems": null
    },
    {
      "latitude": 37.450058,
      "longitude": -8.806243,
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
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661076816,
      "ems": null
    },
    {
      "latitude": 37.451385,
      "longitude": -8.806536,
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
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661076819,
      "ems": null
    },
    {
      "latitude": 37.452484,
      "longitude": -8.806711,
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
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661076822,
      "ems": null
    },
    {
      "latitude": 37.453602,
      "longitude": -8.806796,
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
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661076825,
      "ems": null
    },
    {
      "latitude": 37.45472,
      "longitude": -8.806855,
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
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661076828,
      "ems": null
    },
    {
      "latitude": 37.455917,
      "longitude": -8.806828,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661076831,
      "ems": null
    },
    {
      "latitude": 37.457062,
      "longitude": -8.806769,
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
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661076834,
      "ems": null
    },
    {
      "latitude": 37.458073,
      "longitude": -8.806736,
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
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661076837,
      "ems": null
    },
    {
      "latitude": 37.459351,
      "longitude": -8.806652,
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
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661076840,
      "ems": null
    },
    {
      "latitude": 37.460587,
      "longitude": -8.806557,
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
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661076843,
      "ems": null
    },
    {
      "latitude": 37.461731,
      "longitude": -8.806418,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661076846,
      "ems": null
    },
    {
      "latitude": 37.46283,
      "longitude": -8.806302,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661076849,
      "ems": null
    },
    {
      "latitude": 37.463974,
      "longitude": -8.806127,
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661076852,
      "ems": null
    },
    {
      "latitude": 37.465164,
      "longitude": -8.805951,
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661076856,
      "ems": null
    },
    {
      "latitude": 37.466358,
      "longitude": -8.80578,
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
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661076859,
      "ems": null
    },
    {
      "latitude": 37.468639,
      "longitude": -8.805542,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661076865,
      "ems": null
    },
    {
      "latitude": 37.470779,
      "longitude": -8.805363,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661076871,
      "ems": null
    },
    {
      "latitude": 37.472946,
      "longitude": -8.80525,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661076877,
      "ems": null
    },
    {
      "latitude": 37.474823,
      "longitude": -8.80525,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661076882,
      "ems": null
    },
    {
      "latitude": 37.475967,
      "longitude": -8.805308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661076886,
      "ems": null
    },
    {
      "latitude": 37.476974,
      "longitude": -8.805367,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661076889,
      "ems": null
    },
    {
      "latitude": 37.477951,
      "longitude": -8.805482,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661076892,
      "ems": null
    },
    {
      "latitude": 37.478928,
      "longitude": -8.805602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661076895,
      "ems": null
    },
    {
      "latitude": 37.47995,
      "longitude": -8.805776,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661076898,
      "ems": null
    },
    {
      "latitude": 37.48093,
      "longitude": -8.80602,
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
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661076901,
      "ems": null
    },
    {
      "latitude": 37.481907,
      "longitude": -8.806258,
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661076904,
      "ems": null
    },
    {
      "latitude": 37.482979,
      "longitude": -8.806557,
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
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661076907,
      "ems": null
    },
    {
      "latitude": 37.483887,
      "longitude": -8.806828,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661076910,
      "ems": null
    },
    {
      "latitude": 37.484985,
      "longitude": -8.807178,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661076913,
      "ems": null
    },
    {
      "latitude": 37.486084,
      "longitude": -8.80747,
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
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661076916,
      "ems": null
    },
    {
      "latitude": 37.487,
      "longitude": -8.807646,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661076919,
      "ems": null
    },
    {
      "latitude": 37.488052,
      "longitude": -8.80793,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661076922,
      "ems": null
    },
    {
      "latitude": 37.490192,
      "longitude": -8.808408,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661076928,
      "ems": null
    },
    {
      "latitude": 37.492382,
      "longitude": -8.808825,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661076934,
      "ems": null
    },
    {
      "latitude": 37.493454,
      "longitude": -8.80899,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661076937,
      "ems": null
    },
    {
      "latitude": 37.494507,
      "longitude": -8.809049,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661076940,
      "ems": null
    },
    {
      "latitude": 37.495514,
      "longitude": -8.80899,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661076943,
      "ems": null
    },
    {
      "latitude": 37.496525,
      "longitude": -8.808886,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661076946,
      "ems": null
    },
    {
      "latitude": 37.497547,
      "longitude": -8.808766,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661076949,
      "ems": null
    },
    {
      "latitude": 37.498478,
      "longitude": -8.808647,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661076952,
      "ems": null
    },
    {
      "latitude": 37.499496,
      "longitude": -8.808464,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661076955,
      "ems": null
    },
    {
      "latitude": 37.500549,
      "longitude": -8.80823,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661076958,
      "ems": null
    },
    {
      "latitude": 37.501648,
      "longitude": -8.808055,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661076961,
      "ems": null
    },
    {
      "latitude": 37.502792,
      "longitude": -8.807763,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661076964,
      "ems": null
    },
    {
      "latitude": 37.503845,
      "longitude": -8.80747,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661076967,
      "ems": null
    },
    {
      "latitude": 37.504715,
      "longitude": -8.807178,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661076970,
      "ems": null
    },
    {
      "latitude": 37.505768,
      "longitude": -8.806886,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661076973,
      "ems": null
    },
    {
      "latitude": 37.506859,
      "longitude": -8.806498,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661076977,
      "ems": null
    },
    {
      "latitude": 37.507881,
      "longitude": -8.806139,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661076979,
      "ems": null
    },
    {
      "latitude": 37.508881,
      "longitude": -8.805776,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661076983,
      "ems": null
    },
    {
      "latitude": 37.509979,
      "longitude": -8.805367,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661076985,
      "ems": null
    },
    {
      "latitude": 37.510986,
      "longitude": -8.805017,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661076989,
      "ems": null
    },
    {
      "latitude": 37.512131,
      "longitude": -8.804607,
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
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661076992,
      "ems": null
    },
    {
      "latitude": 37.513092,
      "longitude": -8.804256,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661076995,
      "ems": null
    },
    {
      "latitude": 37.515152,
      "longitude": -8.803496,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661077001,
      "ems": null
    },
    {
      "latitude": 37.51712,
      "longitude": -8.802913,
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077007,
      "ems": null
    },
    {
      "latitude": 37.518219,
      "longitude": -8.802676,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077010,
      "ems": null
    },
    {
      "latitude": 37.519333,
      "longitude": -8.802616,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077013,
      "ems": null
    },
    {
      "latitude": 37.520279,
      "longitude": -8.80262,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661077016,
      "ems": null
    },
    {
      "latitude": 37.52124,
      "longitude": -8.80262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077019,
      "ems": null
    },
    {
      "latitude": 37.522202,
      "longitude": -8.802678,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661077021,
      "ems": null
    },
    {
      "latitude": 37.523151,
      "longitude": -8.802676,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077025,
      "ems": null
    },
    {
      "latitude": 37.52417,
      "longitude": -8.802737,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077027,
      "ems": null
    },
    {
      "latitude": 37.5252,
      "longitude": -8.802616,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077031,
      "ems": null
    },
    {
      "latitude": 37.527191,
      "longitude": -8.802153,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077037,
      "ems": null
    },
    {
      "latitude": 37.529205,
      "longitude": -8.801685,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077043,
      "ems": null
    },
    {
      "latitude": 37.530136,
      "longitude": -8.801541,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077046,
      "ems": null
    },
    {
      "latitude": 37.531219,
      "longitude": -8.801334,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077049,
      "ems": null
    },
    {
      "latitude": 37.532089,
      "longitude": -8.801184,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077051,
      "ems": null
    },
    {
      "latitude": 37.533115,
      "longitude": -8.801004,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077055,
      "ems": null
    },
    {
      "latitude": 37.534149,
      "longitude": -8.800809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077058,
      "ems": null
    },
    {
      "latitude": 37.536232,
      "longitude": -8.800407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077064,
      "ems": null
    },
    {
      "latitude": 37.538269,
      "longitude": -8.800049,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077070,
      "ems": null
    },
    {
      "latitude": 37.540512,
      "longitude": -8.799757,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077076,
      "ems": null
    },
    {
      "latitude": 37.542843,
      "longitude": -8.799512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077082,
      "ems": null
    },
    {
      "latitude": 37.544937,
      "longitude": -8.799333,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077088,
      "ems": null
    },
    {
      "latitude": 37.546143,
      "longitude": -8.799348,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077091,
      "ems": null
    },
    {
      "latitude": 37.547287,
      "longitude": -8.799464,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661077094,
      "ems": null
    },
    {
      "latitude": 37.548431,
      "longitude": -8.799631,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077097,
      "ems": null
    },
    {
      "latitude": 37.549484,
      "longitude": -8.799815,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077100,
      "ems": null
    },
    {
      "latitude": 37.550766,
      "longitude": -8.800049,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661077103,
      "ems": null
    },
    {
      "latitude": 37.551727,
      "longitude": -8.800282,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661077106,
      "ems": null
    },
    {
      "latitude": 37.552853,
      "longitude": -8.800527,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661077109,
      "ems": null
    },
    {
      "latitude": 37.554157,
      "longitude": -8.801004,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661077112,
      "ems": null
    },
    {
      "latitude": 37.555134,
      "longitude": -8.801482,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661077115,
      "ems": null
    },
    {
      "latitude": 37.556213,
      "longitude": -8.802094,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661077118,
      "ems": null
    },
    {
      "latitude": 37.557137,
      "longitude": -8.802616,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661077121,
      "ems": null
    },
    {
      "latitude": 37.558113,
      "longitude": -8.803273,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661077124,
      "ems": null
    },
    {
      "latitude": 37.559185,
      "longitude": -8.803989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661077127,
      "ems": null
    },
    {
      "latitude": 37.560116,
      "longitude": -8.804646,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661077130,
      "ems": null
    },
    {
      "latitude": 37.561138,
      "longitude": -8.805423,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661077133,
      "ems": null
    },
    {
      "latitude": 37.562073,
      "longitude": -8.806067,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661077136,
      "ems": null
    },
    {
      "latitude": 37.56308,
      "longitude": -8.806886,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661077139,
      "ems": null
    },
    {
      "latitude": 37.563995,
      "longitude": -8.807528,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661077142,
      "ems": null
    },
    {
      "latitude": 37.564957,
      "longitude": -8.808289,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661077145,
      "ems": null
    },
    {
      "latitude": 37.565964,
      "longitude": -8.809049,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661077148,
      "ems": null
    },
    {
      "latitude": 37.567841,
      "longitude": -8.810378,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661077154,
      "ems": null
    },
    {
      "latitude": 37.569939,
      "longitude": -8.811751,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661077160,
      "ems": null
    },
    {
      "latitude": 37.571053,
      "longitude": -8.812408,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661077163,
      "ems": null
    },
    {
      "latitude": 37.572079,
      "longitude": -8.813066,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661077166,
      "ems": null
    },
    {
      "latitude": 37.573151,
      "longitude": -8.813602,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661077169,
      "ems": null
    },
    {
      "latitude": 37.574112,
      "longitude": -8.814133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077172,
      "ems": null
    },
    {
      "latitude": 37.575256,
      "longitude": -8.814716,
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
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077175,
      "ems": null
    },
    {
      "latitude": 37.576313,
      "longitude": -8.815215,
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
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077178,
      "ems": null
    },
    {
      "latitude": 37.577431,
      "longitude": -8.815752,
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
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077181,
      "ems": null
    },
    {
      "latitude": 37.578503,
      "longitude": -8.81629,
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
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661077185,
      "ems": null
    },
    {
      "latitude": 37.579666,
      "longitude": -8.816887,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661077188,
      "ems": null
    },
    {
      "latitude": 37.580738,
      "longitude": -8.817424,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077191,
      "ems": null
    },
    {
      "latitude": 37.581856,
      "longitude": -8.817962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661077194,
      "ems": null
    },
    {
      "latitude": 37.582924,
      "longitude": -8.818379,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661077197,
      "ems": null
    },
    {
      "latitude": 37.584045,
      "longitude": -8.818749,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661077199,
      "ems": null
    },
    {
      "latitude": 37.585052,
      "longitude": -8.819099,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661077203,
      "ems": null
    },
    {
      "latitude": 37.586334,
      "longitude": -8.819509,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661077206,
      "ems": null
    },
    {
      "latitude": 37.587532,
      "longitude": -8.819872,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661077209,
      "ems": null
    },
    {
      "latitude": 37.58865,
      "longitude": -8.820051,
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077212,
      "ems": null
    },
    {
      "latitude": 37.589813,
      "longitude": -8.820269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077215,
      "ems": null
    },
    {
      "latitude": 37.59082,
      "longitude": -8.820385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077218,
      "ems": null
    },
    {
      "latitude": 37.591911,
      "longitude": -8.82041,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077221,
      "ems": null
    },
    {
      "latitude": 37.592972,
      "longitude": -8.820385,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077224,
      "ems": null
    },
    {
      "latitude": 37.594116,
      "longitude": -8.820327,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077227,
      "ems": null
    },
    {
      "latitude": 37.595169,
      "longitude": -8.820269,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077230,
      "ems": null
    },
    {
      "latitude": 37.596222,
      "longitude": -8.820269,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077233,
      "ems": null
    },
    {
      "latitude": 37.597309,
      "longitude": -8.82023,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077236,
      "ems": null
    },
    {
      "latitude": 37.598465,
      "longitude": -8.82021,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077239,
      "ems": null
    },
    {
      "latitude": 37.59938,
      "longitude": -8.82021,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077242,
      "ems": null
    },
    {
      "latitude": 37.600525,
      "longitude": -8.82021,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077245,
      "ems": null
    },
    {
      "latitude": 37.602757,
      "longitude": -8.82023,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661077251,
      "ems": null
    },
    {
      "latitude": 37.604759,
      "longitude": -8.82023,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077257,
      "ems": null
    },
    {
      "latitude": 37.607086,
      "longitude": -8.82017,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077263,
      "ems": null
    },
    {
      "latitude": 37.609177,
      "longitude": -8.820093,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077269,
      "ems": null
    },
    {
      "latitude": 37.610138,
      "longitude": -8.819976,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077272,
      "ems": null
    },
    {
      "latitude": 37.611088,
      "longitude": -8.819872,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077275,
      "ems": null
    },
    {
      "latitude": 37.612106,
      "longitude": -8.819684,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077278,
      "ems": null
    },
    {
      "latitude": 37.613068,
      "longitude": -8.81945,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077281,
      "ems": null
    },
    {
      "latitude": 37.613937,
      "longitude": -8.819275,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077284,
      "ems": null
    },
    {
      "latitude": 37.614899,
      "longitude": -8.819099,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077287,
      "ems": null
    },
    {
      "latitude": 37.616821,
      "longitude": -8.818866,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077293,
      "ems": null
    },
    {
      "latitude": 37.618652,
      "longitude": -8.818808,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077299,
      "ems": null
    },
    {
      "latitude": 37.620621,
      "longitude": -8.818632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077305,
      "ems": null
    },
    {
      "latitude": 37.622498,
      "longitude": -8.818281,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077311,
      "ems": null
    },
    {
      "latitude": 37.624496,
      "longitude": -8.817842,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077317,
      "ems": null
    },
    {
      "latitude": 37.625519,
      "longitude": -8.817638,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077320,
      "ems": null
    },
    {
      "latitude": 37.626591,
      "longitude": -8.817365,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077323,
      "ems": null
    },
    {
      "latitude": 37.627522,
      "longitude": -8.817125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077326,
      "ems": null
    },
    {
      "latitude": 37.628498,
      "longitude": -8.816887,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077329,
      "ems": null
    },
    {
      "latitude": 37.629547,
      "longitude": -8.816646,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077332,
      "ems": null
    },
    {
      "latitude": 37.631573,
      "longitude": -8.81623,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077338,
      "ems": null
    },
    {
      "latitude": 37.633575,
      "longitude": -8.815886,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077345,
      "ems": null
    },
    {
      "latitude": 37.634766,
      "longitude": -8.815652,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077348,
      "ems": null
    },
    {
      "latitude": 37.63567,
      "longitude": -8.815514,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077350,
      "ems": null
    },
    {
      "latitude": 37.637856,
      "longitude": -8.815155,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077357,
      "ems": null
    },
    {
      "latitude": 37.639938,
      "longitude": -8.814775,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077363,
      "ems": null
    },
    {
      "latitude": 37.642044,
      "longitude": -8.814483,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077369,
      "ems": null
    },
    {
      "latitude": 37.644096,
      "longitude": -8.81414,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077375,
      "ems": null
    },
    {
      "latitude": 37.64621,
      "longitude": -8.813664,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077381,
      "ems": null
    },
    {
      "latitude": 37.647259,
      "longitude": -8.813364,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661077384,
      "ems": null
    },
    {
      "latitude": 37.648376,
      "longitude": -8.812945,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661077387,
      "ems": null
    },
    {
      "latitude": 37.649368,
      "longitude": -8.812554,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "3224",
      "timestamp": 1661077390,
      "ems": null
    },
    {
      "latitude": 37.650375,
      "longitude": -8.81197,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 29,
      "squawk": "3224",
      "timestamp": 1661077393,
      "ems": null
    },
    {
      "latitude": 37.651218,
      "longitude": -8.811214,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 37,
      "squawk": "3224",
      "timestamp": 1661077396,
      "ems": null
    },
    {
      "latitude": 37.651497,
      "longitude": -8.810916,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 38,
      "squawk": "3224",
      "timestamp": 1661077397,
      "ems": null
    },
    {
      "latitude": 37.652664,
      "longitude": -8.809107,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "3224",
      "timestamp": 1661077402,
      "ems": null
    },
    {
      "latitude": 37.653122,
      "longitude": -8.807997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "3224",
      "timestamp": 1661077405,
      "ems": null
    },
    {
      "latitude": 37.65345,
      "longitude": -8.806617,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "3224",
      "timestamp": 1661077408,
      "ems": null
    },
    {
      "latitude": 37.653591,
      "longitude": -8.805423,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "3224",
      "timestamp": 1661077411,
      "ems": null
    },
    {
      "latitude": 37.653545,
      "longitude": -8.80381,
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
      "heading": 99,
      "squawk": "3224",
      "timestamp": 1661077414,
      "ems": null
    },
    {
      "latitude": 37.653214,
      "longitude": -8.802504,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 113,
      "squawk": "3224",
      "timestamp": 1661077417,
      "ems": null
    },
    {
      "latitude": 37.652527,
      "longitude": -8.801218,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 128,
      "squawk": "3224",
      "timestamp": 1661077420,
      "ems": null
    },
    {
      "latitude": 37.651871,
      "longitude": -8.800407,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 141,
      "squawk": "3224",
      "timestamp": 1661077423,
      "ems": null
    },
    {
      "latitude": 37.650925,
      "longitude": -8.799698,
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
      "heading": 153,
      "squawk": "3224",
      "timestamp": 1661077426,
      "ems": null
    },
    {
      "latitude": 37.649773,
      "longitude": -8.799212,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 168,
      "squawk": "3224",
      "timestamp": 1661077429,
      "ems": null
    },
    {
      "latitude": 37.648655,
      "longitude": -8.799093,
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
      "heading": 177,
      "squawk": "3224",
      "timestamp": 1661077432,
      "ems": null
    },
    {
      "latitude": 37.647491,
      "longitude": -8.799273,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "3224",
      "timestamp": 1661077435,
      "ems": null
    },
    {
      "latitude": 37.646378,
      "longitude": -8.79981,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "3224",
      "timestamp": 1661077438,
      "ems": null
    },
    {
      "latitude": 37.64521,
      "longitude": -8.800765,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "3224",
      "timestamp": 1661077441,
      "ems": null
    },
    {
      "latitude": 37.644466,
      "longitude": -8.80184,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "3224",
      "timestamp": 1661077444,
      "ems": null
    },
    {
      "latitude": 37.643864,
      "longitude": -8.803332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "3224",
      "timestamp": 1661077447,
      "ems": null
    },
    {
      "latitude": 37.643631,
      "longitude": -8.804826,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "3224",
      "timestamp": 1661077450,
      "ems": null
    },
    {
      "latitude": 37.643631,
      "longitude": -8.806199,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 277,
      "squawk": "3224",
      "timestamp": 1661077453,
      "ems": null
    },
    {
      "latitude": 37.644001,
      "longitude": -8.807692,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 293,
      "squawk": "3224",
      "timestamp": 1661077456,
      "ems": null
    },
    {
      "latitude": 37.644794,
      "longitude": -8.809005,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661077459,
      "ems": null
    },
    {
      "latitude": 37.645981,
      "longitude": -8.809808,
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
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661077462,
      "ems": null
    },
    {
      "latitude": 37.647125,
      "longitude": -8.809925,
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
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077465,
      "ems": null
    },
    {
      "latitude": 37.648315,
      "longitude": -8.809632,
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
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661077468,
      "ems": null
    },
    {
      "latitude": 37.649323,
      "longitude": -8.809107,
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
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661077471,
      "ems": null
    },
    {
      "latitude": 37.650421,
      "longitude": -8.808522,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661077474,
      "ems": null
    },
    {
      "latitude": 37.651611,
      "longitude": -8.807879,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661077477,
      "ems": null
    },
    {
      "latitude": 37.652573,
      "longitude": -8.807295,
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
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661077480,
      "ems": null
    },
    {
      "latitude": 37.653671,
      "longitude": -8.806711,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661077483,
      "ems": null
    },
    {
      "latitude": 37.654663,
      "longitude": -8.806139,
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
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661077486,
      "ems": null
    },
    {
      "latitude": 37.655869,
      "longitude": -8.805484,
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
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661077489,
      "ems": null
    },
    {
      "latitude": 37.656784,
      "longitude": -8.804957,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661077492,
      "ems": null
    },
    {
      "latitude": 37.65778,
      "longitude": -8.804467,
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
      "heading": 22,
      "squawk": "3224",
      "timestamp": 1661077495,
      "ems": null
    },
    {
      "latitude": 37.659878,
      "longitude": -8.803392,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "3224",
      "timestamp": 1661077501,
      "ems": null
    },
    {
      "latitude": 37.660946,
      "longitude": -8.802915,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661077504,
      "ems": null
    },
    {
      "latitude": 37.661865,
      "longitude": -8.802562,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661077507,
      "ems": null
    },
    {
      "latitude": 37.662918,
      "longitude": -8.802153,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661077510,
      "ems": null
    },
    {
      "latitude": 37.664017,
      "longitude": -8.801802,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077513,
      "ems": null
    },
    {
      "latitude": 37.665043,
      "longitude": -8.801482,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077516,
      "ems": null
    },
    {
      "latitude": 37.665928,
      "longitude": -8.801303,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077519,
      "ems": null
    },
    {
      "latitude": 37.667046,
      "longitude": -8.801064,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077523,
      "ems": null
    },
    {
      "latitude": 37.667976,
      "longitude": -8.800885,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077525,
      "ems": null
    },
    {
      "latitude": 37.668953,
      "longitude": -8.800706,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077528,
      "ems": null
    },
    {
      "latitude": 37.669968,
      "longitude": -8.800516,
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077531,
      "ems": null
    },
    {
      "latitude": 37.670883,
      "longitude": -8.800341,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077534,
      "ems": null
    },
    {
      "latitude": 37.671844,
      "longitude": -8.800166,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077538,
      "ems": null
    },
    {
      "latitude": 37.672726,
      "longitude": -8.800049,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077540,
      "ems": null
    },
    {
      "latitude": 37.673656,
      "longitude": -8.79993,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077543,
      "ems": null
    },
    {
      "latitude": 37.674683,
      "longitude": -8.799815,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077547,
      "ems": null
    },
    {
      "latitude": 37.675461,
      "longitude": -8.799698,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077550,
      "ems": null
    },
    {
      "latitude": 37.67654,
      "longitude": -8.799631,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077553,
      "ems": null
    },
    {
      "latitude": 37.677292,
      "longitude": -8.799523,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077556,
      "ems": null
    },
    {
      "latitude": 37.679352,
      "longitude": -8.799464,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661077562,
      "ems": null
    },
    {
      "latitude": 37.680359,
      "longitude": -8.799571,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077565,
      "ems": null
    },
    {
      "latitude": 37.681335,
      "longitude": -8.79975,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077568,
      "ems": null
    },
    {
      "latitude": 37.682266,
      "longitude": -8.79987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077570,
      "ems": null
    },
    {
      "latitude": 37.683247,
      "longitude": -8.800049,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077574,
      "ems": null
    },
    {
      "latitude": 37.684223,
      "longitude": -8.800228,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077577,
      "ems": null
    },
    {
      "latitude": 37.685257,
      "longitude": -8.800341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077580,
      "ems": null
    },
    {
      "latitude": 37.686218,
      "longitude": -8.800516,
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
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077583,
      "ems": null
    },
    {
      "latitude": 37.687317,
      "longitude": -8.800633,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661077586,
      "ems": null
    },
    {
      "latitude": 37.689529,
      "longitude": -8.800825,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077592,
      "ems": null
    },
    {
      "latitude": 37.690521,
      "longitude": -8.800867,
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
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077595,
      "ems": null
    },
    {
      "latitude": 37.691483,
      "longitude": -8.800867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077598,
      "ems": null
    },
    {
      "latitude": 37.692627,
      "longitude": -8.800867,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077601,
      "ems": null
    },
    {
      "latitude": 37.693581,
      "longitude": -8.800885,
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
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661077604,
      "ems": null
    },
    {
      "latitude": 37.694744,
      "longitude": -8.800885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661077607,
      "ems": null
    },
    {
      "latitude": 37.695786,
      "longitude": -8.800867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077610,
      "ems": null
    },
    {
      "latitude": 37.696655,
      "longitude": -8.800809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077613,
      "ems": null
    },
    {
      "latitude": 37.698048,
      "longitude": -8.800765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077616,
      "ems": null
    },
    {
      "latitude": 37.69912,
      "longitude": -8.800765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077619,
      "ems": null
    },
    {
      "latitude": 37.701077,
      "longitude": -8.800706,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077625,
      "ems": null
    },
    {
      "latitude": 37.703247,
      "longitude": -8.800692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077631,
      "ems": null
    },
    {
      "latitude": 37.705399,
      "longitude": -8.800692,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077637,
      "ems": null
    },
    {
      "latitude": 37.70755,
      "longitude": -8.800458,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077643,
      "ems": null
    },
    {
      "latitude": 37.70871,
      "longitude": -8.800228,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077646,
      "ems": null
    },
    {
      "latitude": 37.709732,
      "longitude": -8.79993,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077649,
      "ems": null
    },
    {
      "latitude": 37.710712,
      "longitude": -8.799631,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077652,
      "ems": null
    },
    {
      "latitude": 37.711761,
      "longitude": -8.799348,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661077655,
      "ems": null
    },
    {
      "latitude": 37.712769,
      "longitude": -8.799055,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077658,
      "ems": null
    },
    {
      "latitude": 37.713692,
      "longitude": -8.798855,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077661,
      "ems": null
    },
    {
      "latitude": 37.715698,
      "longitude": -8.79853,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077667,
      "ems": null
    },
    {
      "latitude": 37.716751,
      "longitude": -8.798412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077670,
      "ems": null
    },
    {
      "latitude": 37.717621,
      "longitude": -8.798296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077673,
      "ems": null
    },
    {
      "latitude": 37.718765,
      "longitude": -8.798258,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077676,
      "ems": null
    },
    {
      "latitude": 37.719696,
      "longitude": -8.798258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077679,
      "ems": null
    },
    {
      "latitude": 37.720825,
      "longitude": -8.798296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077682,
      "ems": null
    },
    {
      "latitude": 37.721695,
      "longitude": -8.798412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661077685,
      "ems": null
    },
    {
      "latitude": 37.722839,
      "longitude": -8.79853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077689,
      "ems": null
    },
    {
      "latitude": 37.723747,
      "longitude": -8.798615,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077691,
      "ems": null
    },
    {
      "latitude": 37.72477,
      "longitude": -8.798795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077694,
      "ems": null
    },
    {
      "latitude": 37.725906,
      "longitude": -8.798939,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077697,
      "ems": null
    },
    {
      "latitude": 37.726864,
      "longitude": -8.799093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077700,
      "ems": null
    },
    {
      "latitude": 37.728073,
      "longitude": -8.799273,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077704,
      "ems": null
    },
    {
      "latitude": 37.729145,
      "longitude": -8.799512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077707,
      "ems": null
    },
    {
      "latitude": 37.730122,
      "longitude": -8.79969,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077709,
      "ems": null
    },
    {
      "latitude": 37.731289,
      "longitude": -8.79987,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077712,
      "ems": null
    },
    {
      "latitude": 37.733459,
      "longitude": -8.800282,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077719,
      "ems": null
    },
    {
      "latitude": 37.735565,
      "longitude": -8.800516,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077725,
      "ems": null
    },
    {
      "latitude": 37.737671,
      "longitude": -8.80075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661077730,
      "ems": null
    },
    {
      "latitude": 37.739822,
      "longitude": -8.800983,
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
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077737,
      "ems": null
    },
    {
      "latitude": 37.742134,
      "longitude": -8.801362,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077743,
      "ems": null
    },
    {
      "latitude": 37.744137,
      "longitude": -8.801721,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077749,
      "ems": null
    },
    {
      "latitude": 37.746368,
      "longitude": -8.802138,
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077755,
      "ems": null
    },
    {
      "latitude": 37.74865,
      "longitude": -8.802497,
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
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077761,
      "ems": null
    },
    {
      "latitude": 37.750763,
      "longitude": -8.802737,
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
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661077767,
      "ems": null
    },
    {
      "latitude": 37.753235,
      "longitude": -8.802913,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077773,
      "ems": null
    },
    {
      "latitude": 37.754333,
      "longitude": -8.802971,
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
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077776,
      "ems": null
    },
    {
      "latitude": 37.75526,
      "longitude": -8.802975,
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
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077779,
      "ems": null
    },
    {
      "latitude": 37.756424,
      "longitude": -8.802975,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661077782,
      "ems": null
    },
    {
      "latitude": 37.757542,
      "longitude": -8.803034,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661077785,
      "ems": null
    },
    {
      "latitude": 37.759731,
      "longitude": -8.803273,
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
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077791,
      "ems": null
    },
    {
      "latitude": 37.76207,
      "longitude": -8.803614,
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
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661077797,
      "ems": null
    },
    {
      "latitude": 37.764294,
      "longitude": -8.80393,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077803,
      "ems": null
    },
    {
      "latitude": 37.766693,
      "longitude": -8.804198,
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
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077809,
      "ems": null
    },
    {
      "latitude": 37.768982,
      "longitude": -8.804315,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077815,
      "ems": null
    },
    {
      "latitude": 37.771454,
      "longitude": -8.80449,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077821,
      "ems": null
    },
    {
      "latitude": 37.77269,
      "longitude": -8.80449,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661077824,
      "ems": null
    },
    {
      "latitude": 37.773926,
      "longitude": -8.80449,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077827,
      "ems": null
    },
    {
      "latitude": 37.775185,
      "longitude": -8.804407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661077830,
      "ems": null
    },
    {
      "latitude": 37.776581,
      "longitude": -8.804348,
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
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077833,
      "ems": null
    },
    {
      "latitude": 37.77784,
      "longitude": -8.804229,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077836,
      "ems": null
    },
    {
      "latitude": 37.778915,
      "longitude": -8.804081,
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
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077839,
      "ems": null
    },
    {
      "latitude": 37.780167,
      "longitude": -8.80393,
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
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077842,
      "ems": null
    },
    {
      "latitude": 37.781471,
      "longitude": -8.803751,
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
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077845,
      "ems": null
    },
    {
      "latitude": 37.782715,
      "longitude": -8.803555,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077848,
      "ems": null
    },
    {
      "latitude": 37.783951,
      "longitude": -8.803321,
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
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077851,
      "ems": null
    },
    {
      "latitude": 37.785004,
      "longitude": -8.803146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077854,
      "ems": null
    },
    {
      "latitude": 37.786312,
      "longitude": -8.802855,
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
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077857,
      "ems": null
    },
    {
      "latitude": 37.787567,
      "longitude": -8.802562,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077860,
      "ems": null
    },
    {
      "latitude": 37.788757,
      "longitude": -8.802211,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077864,
      "ems": null
    },
    {
      "latitude": 37.789856,
      "longitude": -8.801919,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077866,
      "ems": null
    },
    {
      "latitude": 37.790966,
      "longitude": -8.801601,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661077869,
      "ems": null
    },
    {
      "latitude": 37.792271,
      "longitude": -8.801243,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661077872,
      "ems": null
    },
    {
      "latitude": 37.793472,
      "longitude": -8.800925,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077876,
      "ems": null
    },
    {
      "latitude": 37.794598,
      "longitude": -8.800586,
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
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661077878,
      "ems": null
    },
    {
      "latitude": 37.797089,
      "longitude": -8.799873,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077885,
      "ems": null
    },
    {
      "latitude": 37.798233,
      "longitude": -8.799464,
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
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661077888,
      "ems": null
    },
    {
      "latitude": 37.800568,
      "longitude": -8.798763,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661077894,
      "ems": null
    },
    {
      "latitude": 37.802902,
      "longitude": -8.79812,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077900,
      "ems": null
    },
    {
      "latitude": 37.804825,
      "longitude": -8.797711,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077905,
      "ems": null
    },
    {
      "latitude": 37.806747,
      "longitude": -8.797302,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661077910,
      "ems": null
    },
    {
      "latitude": 37.80899,
      "longitude": -8.796835,
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661077916,
      "ems": null
    },
    {
      "latitude": 37.813267,
      "longitude": -8.795869,
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
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077926,
      "ems": null
    },
    {
      "latitude": 37.815639,
      "longitude": -8.795392,
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
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661077932,
      "ems": null
    },
    {
      "latitude": 37.817917,
      "longitude": -8.794965,
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661077938,
      "ems": null
    },
    {
      "latitude": 37.820343,
      "longitude": -8.794616,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661077944,
      "ems": null
    },
    {
      "latitude": 37.821442,
      "longitude": -8.794497,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661077947,
      "ems": null
    },
    {
      "latitude": 37.82254,
      "longitude": -8.79438,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077950,
      "ems": null
    },
    {
      "latitude": 37.823788,
      "longitude": -8.794197,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077953,
      "ems": null
    },
    {
      "latitude": 37.824829,
      "longitude": -8.794088,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077956,
      "ems": null
    },
    {
      "latitude": 37.826111,
      "longitude": -8.793971,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661077959,
      "ems": null
    },
    {
      "latitude": 37.828308,
      "longitude": -8.793796,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661077965,
      "ems": null
    },
    {
      "latitude": 37.829327,
      "longitude": -8.793719,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661077968,
      "ems": null
    },
    {
      "latitude": 37.830631,
      "longitude": -8.793719,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661077971,
      "ems": null
    },
    {
      "latitude": 37.831745,
      "longitude": -8.793839,
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
      "heading": 356,
      "squawk": "3224",
      "timestamp": 1661077974,
      "ems": null
    },
    {
      "latitude": 37.832912,
      "longitude": -8.793959,
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
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661077977,
      "ems": null
    },
    {
      "latitude": 37.834122,
      "longitude": -8.794138,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661077980,
      "ems": null
    },
    {
      "latitude": 37.835285,
      "longitude": -8.794317,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661077983,
      "ems": null
    },
    {
      "latitude": 37.836403,
      "longitude": -8.794556,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661077986,
      "ems": null
    },
    {
      "latitude": 37.837372,
      "longitude": -8.794789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661077989,
      "ems": null
    },
    {
      "latitude": 37.838654,
      "longitude": -8.795081,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661077992,
      "ems": null
    },
    {
      "latitude": 37.839569,
      "longitude": -8.795272,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661077995,
      "ems": null
    },
    {
      "latitude": 37.84108,
      "longitude": -8.795608,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661077998,
      "ems": null
    },
    {
      "latitude": 37.842041,
      "longitude": -8.795841,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661078001,
      "ems": null
    },
    {
      "latitude": 37.843231,
      "longitude": -8.796133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661078004,
      "ems": null
    },
    {
      "latitude": 37.84441,
      "longitude": -8.796347,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661078007,
      "ems": null
    },
    {
      "latitude": 37.846878,
      "longitude": -8.796885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661078013,
      "ems": null
    },
    {
      "latitude": 37.84911,
      "longitude": -8.797421,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661078019,
      "ems": null
    },
    {
      "latitude": 37.851486,
      "longitude": -8.797899,
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078025,
      "ems": null
    },
    {
      "latitude": 37.854,
      "longitude": -8.798317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078031,
      "ems": null
    },
    {
      "latitude": 37.856281,
      "longitude": -8.798736,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078037,
      "ems": null
    },
    {
      "latitude": 37.858337,
      "longitude": -8.799114,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078043,
      "ems": null
    },
    {
      "latitude": 37.860901,
      "longitude": -8.799523,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661078049,
      "ems": null
    },
    {
      "latitude": 37.863373,
      "longitude": -8.799991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078055,
      "ems": null
    },
    {
      "latitude": 37.865707,
      "longitude": -8.8004,
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078061,
      "ems": null
    },
    {
      "latitude": 37.867905,
      "longitude": -8.800809,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661078067,
      "ems": null
    },
    {
      "latitude": 37.870293,
      "longitude": -8.801243,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078073,
      "ems": null
    },
    {
      "latitude": 37.872391,
      "longitude": -8.801685,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661078079,
      "ems": null
    },
    {
      "latitude": 37.87476,
      "longitude": -8.802258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661078085,
      "ems": null
    },
    {
      "latitude": 37.877106,
      "longitude": -8.802795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661078091,
      "ems": null
    },
    {
      "latitude": 37.879303,
      "longitude": -8.803205,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078097,
      "ems": null
    },
    {
      "latitude": 37.881744,
      "longitude": -8.803632,
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661078103,
      "ems": null
    },
    {
      "latitude": 37.884026,
      "longitude": -8.804049,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 352,
      "squawk": "3224",
      "timestamp": 1661078109,
      "ems": null
    },
    {
      "latitude": 37.886307,
      "longitude": -8.80449,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661078115,
      "ems": null
    },
    {
      "latitude": 37.888355,
      "longitude": -8.805005,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661078121,
      "ems": null
    },
    {
      "latitude": 37.889332,
      "longitude": -8.805304,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661078124,
      "ems": null
    },
    {
      "latitude": 37.890354,
      "longitude": -8.805602,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661078128,
      "ems": null
    },
    {
      "latitude": 37.891479,
      "longitude": -8.805951,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661078131,
      "ems": null
    },
    {
      "latitude": 37.892487,
      "longitude": -8.806302,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661078134,
      "ems": null
    },
    {
      "latitude": 37.893429,
      "longitude": -8.806617,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661078137,
      "ems": null
    },
    {
      "latitude": 37.894363,
      "longitude": -8.806886,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661078139,
      "ems": null
    },
    {
      "latitude": 37.895325,
      "longitude": -8.807295,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661078143,
      "ems": null
    },
    {
      "latitude": 37.896221,
      "longitude": -8.807692,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661078146,
      "ems": null
    },
    {
      "latitude": 37.897156,
      "longitude": -8.808113,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661078148,
      "ems": null
    },
    {
      "latitude": 37.898071,
      "longitude": -8.80864,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661078151,
      "ems": null
    },
    {
      "latitude": 37.899078,
      "longitude": -8.80934,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661078154,
      "ems": null
    },
    {
      "latitude": 37.89962,
      "longitude": -8.809841,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078157,
      "ems": null
    },
    {
      "latitude": 37.900681,
      "longitude": -8.810743,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661078160,
      "ems": null
    },
    {
      "latitude": 37.901733,
      "longitude": -8.811853,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661078164,
      "ems": null
    },
    {
      "latitude": 37.902512,
      "longitude": -8.812672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661078166,
      "ems": null
    },
    {
      "latitude": 37.903156,
      "longitude": -8.813304,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661078169,
      "ems": null
    },
    {
      "latitude": 37.904205,
      "longitude": -8.814249,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661078172,
      "ems": null
    },
    {
      "latitude": 37.905075,
      "longitude": -8.815009,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661078175,
      "ems": null
    },
    {
      "latitude": 37.905857,
      "longitude": -8.815692,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078178,
      "ems": null
    },
    {
      "latitude": 37.906975,
      "longitude": -8.816588,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078182,
      "ems": null
    },
    {
      "latitude": 37.908417,
      "longitude": -8.817814,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078188,
      "ems": null
    },
    {
      "latitude": 37.909653,
      "longitude": -8.818808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078192,
      "ems": null
    },
    {
      "latitude": 37.910522,
      "longitude": -8.819509,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078195,
      "ems": null
    },
    {
      "latitude": 37.911911,
      "longitude": -8.820588,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078201,
      "ems": null
    },
    {
      "latitude": 37.913727,
      "longitude": -8.821963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661078207,
      "ems": null
    },
    {
      "latitude": 37.91526,
      "longitude": -8.823215,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661078213,
      "ems": null
    },
    {
      "latitude": 37.916939,
      "longitude": -8.82453,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078220,
      "ems": null
    },
    {
      "latitude": 37.918659,
      "longitude": -8.825962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078226,
      "ems": null
    },
    {
      "latitude": 37.92041,
      "longitude": -8.827397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078232,
      "ems": null
    },
    {
      "latitude": 37.921871,
      "longitude": -8.828589,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078237,
      "ems": null
    },
    {
      "latitude": 37.923965,
      "longitude": -8.830321,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078244,
      "ems": null
    },
    {
      "latitude": 37.925858,
      "longitude": -8.831898,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661078250,
      "ems": null
    },
    {
      "latitude": 37.927734,
      "longitude": -8.8333,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661078256,
      "ems": null
    },
    {
      "latitude": 37.929565,
      "longitude": -8.834585,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661078261,
      "ems": null
    },
    {
      "latitude": 37.931183,
      "longitude": -8.835754,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661078268,
      "ems": null
    },
    {
      "latitude": 37.933464,
      "longitude": -8.837545,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661078274,
      "ems": null
    },
    {
      "latitude": 37.935471,
      "longitude": -8.839086,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661078279,
      "ems": null
    },
    {
      "latitude": 37.937607,
      "longitude": -8.84059,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661078286,
      "ems": null
    },
    {
      "latitude": 37.939865,
      "longitude": -8.842066,
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661078292,
      "ems": null
    },
    {
      "latitude": 37.941891,
      "longitude": -8.843815,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661078298,
      "ems": null
    },
    {
      "latitude": 37.942867,
      "longitude": -8.84477,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661078301,
      "ems": null
    },
    {
      "latitude": 37.943798,
      "longitude": -8.845726,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661078304,
      "ems": null
    },
    {
      "latitude": 37.94487,
      "longitude": -8.846741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661078307,
      "ems": null
    },
    {
      "latitude": 37.945938,
      "longitude": -8.847876,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661078310,
      "ems": null
    },
    {
      "latitude": 37.946915,
      "longitude": -8.848903,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661078313,
      "ems": null
    },
    {
      "latitude": 37.947922,
      "longitude": -8.849896,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661078316,
      "ems": null
    },
    {
      "latitude": 37.948883,
      "longitude": -8.850831,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661078319,
      "ems": null
    },
    {
      "latitude": 37.951015,
      "longitude": -8.852771,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661078325,
      "ems": null
    },
    {
      "latitude": 37.953049,
      "longitude": -8.85463,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661078331,
      "ems": null
    },
    {
      "latitude": 37.954178,
      "longitude": -8.855577,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078334,
      "ems": null
    },
    {
      "latitude": 37.955341,
      "longitude": -8.856533,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661078337,
      "ems": null
    },
    {
      "latitude": 37.956436,
      "longitude": -8.857435,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661078340,
      "ems": null
    },
    {
      "latitude": 37.957439,
      "longitude": -8.858205,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661078343,
      "ems": null
    },
    {
      "latitude": 37.958771,
      "longitude": -8.859188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661078346,
      "ems": null
    },
    {
      "latitude": 37.959824,
      "longitude": -8.859948,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661078349,
      "ems": null
    },
    {
      "latitude": 37.960976,
      "longitude": -8.860772,
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661078352,
      "ems": null
    },
    {
      "latitude": 37.962093,
      "longitude": -8.861488,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661078355,
      "ems": null
    },
    {
      "latitude": 37.963211,
      "longitude": -8.862206,
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661078358,
      "ems": null
    },
    {
      "latitude": 37.964264,
      "longitude": -8.862753,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661078361,
      "ems": null
    },
    {
      "latitude": 37.965492,
      "longitude": -8.8634,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661078364,
      "ems": null
    },
    {
      "latitude": 37.966599,
      "longitude": -8.863921,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661078367,
      "ems": null
    },
    {
      "latitude": 37.967743,
      "longitude": -8.864448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661078370,
      "ems": null
    },
    {
      "latitude": 37.968842,
      "longitude": -8.864952,
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
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661078373,
      "ems": null
    },
    {
      "latitude": 37.970078,
      "longitude": -8.865499,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661078376,
      "ems": null
    },
    {
      "latitude": 37.971176,
      "longitude": -8.865967,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661078379,
      "ems": null
    },
    {
      "latitude": 37.972321,
      "longitude": -8.866434,
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
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661078382,
      "ems": null
    },
    {
      "latitude": 37.973404,
      "longitude": -8.866743,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661078385,
      "ems": null
    },
    {
      "latitude": 37.974518,
      "longitude": -8.866901,
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
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661078388,
      "ems": null
    },
    {
      "latitude": 37.975571,
      "longitude": -8.866961,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661078391,
      "ems": null
    },
    {
      "latitude": 37.976803,
      "longitude": -8.866803,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661078394,
      "ems": null
    },
    {
      "latitude": 37.977829,
      "longitude": -8.866564,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078397,
      "ems": null
    },
    {
      "latitude": 37.978851,
      "longitude": -8.866205,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078400,
      "ems": null
    },
    {
      "latitude": 37.979874,
      "longitude": -8.865791,
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
      "heading": 18,
      "squawk": "3224",
      "timestamp": 1661078403,
      "ems": null
    },
    {
      "latitude": 37.980743,
      "longitude": -8.865382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "3224",
      "timestamp": 1661078406,
      "ems": null
    },
    {
      "latitude": 37.981705,
      "longitude": -8.864915,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 22,
      "squawk": "3224",
      "timestamp": 1661078409,
      "ems": null
    },
    {
      "latitude": 37.982574,
      "longitude": -8.864474,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661078412,
      "ems": null
    },
    {
      "latitude": 37.98349,
      "longitude": -8.863921,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078415,
      "ems": null
    },
    {
      "latitude": 37.98444,
      "longitude": -8.863339,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078418,
      "ems": null
    },
    {
      "latitude": 37.985275,
      "longitude": -8.862803,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078421,
      "ems": null
    },
    {
      "latitude": 37.98616,
      "longitude": -8.862325,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078424,
      "ems": null
    },
    {
      "latitude": 37.987045,
      "longitude": -8.861728,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "3224",
      "timestamp": 1661078427,
      "ems": null
    },
    {
      "latitude": 37.98793,
      "longitude": -8.86119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "3224",
      "timestamp": 1661078430,
      "ems": null
    },
    {
      "latitude": 37.988846,
      "longitude": -8.860649,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078433,
      "ems": null
    },
    {
      "latitude": 37.99054,
      "longitude": -8.859597,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078439,
      "ems": null
    },
    {
      "latitude": 37.992397,
      "longitude": -8.858563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661078445,
      "ems": null
    },
    {
      "latitude": 37.994167,
      "longitude": -8.857489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661078451,
      "ems": null
    },
    {
      "latitude": 37.996078,
      "longitude": -8.856383,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078457,
      "ems": null
    },
    {
      "latitude": 37.99794,
      "longitude": -8.855219,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 27,
      "squawk": "3224",
      "timestamp": 1661078463,
      "ems": null
    },
    {
      "latitude": 37.999603,
      "longitude": -8.854046,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3224",
      "timestamp": 1661078469,
      "ems": null
    },
    {
      "latitude": 38.00148,
      "longitude": -8.852818,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "3224",
      "timestamp": 1661078476,
      "ems": null
    },
    {
      "latitude": 38.003311,
      "longitude": -8.851649,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078481,
      "ems": null
    },
    {
      "latitude": 38.005199,
      "longitude": -8.850562,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661078487,
      "ems": null
    },
    {
      "latitude": 38.007111,
      "longitude": -8.84937,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "3224",
      "timestamp": 1661078493,
      "ems": null
    },
    {
      "latitude": 38.009064,
      "longitude": -8.848054,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 28,
      "squawk": "3224",
      "timestamp": 1661078500,
      "ems": null
    },
    {
      "latitude": 38.010727,
      "longitude": -8.846799,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "3224",
      "timestamp": 1661078505,
      "ems": null
    },
    {
      "latitude": 38.011719,
      "longitude": -8.845964,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3224",
      "timestamp": 1661078508,
      "ems": null
    },
    {
      "latitude": 38.012554,
      "longitude": -8.845307,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "3224",
      "timestamp": 1661078511,
      "ems": null
    },
    {
      "latitude": 38.013611,
      "longitude": -8.844345,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "3224",
      "timestamp": 1661078515,
      "ems": null
    },
    {
      "latitude": 38.014465,
      "longitude": -8.843576,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "3224",
      "timestamp": 1661078518,
      "ems": null
    },
    {
      "latitude": 38.015209,
      "longitude": -8.842859,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "3224",
      "timestamp": 1661078520,
      "ems": null
    },
    {
      "latitude": 38.017117,
      "longitude": -8.841367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 30,
      "squawk": "3224",
      "timestamp": 1661078527,
      "ems": null
    },
    {
      "latitude": 38.018932,
      "longitude": -8.840173,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 27,
      "squawk": "3224",
      "timestamp": 1661078533,
      "ems": null
    },
    {
      "latitude": 38.019772,
      "longitude": -8.839636,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "3224",
      "timestamp": 1661078536,
      "ems": null
    },
    {
      "latitude": 38.020748,
      "longitude": -8.839038,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "3224",
      "timestamp": 1661078539,
      "ems": null
    },
    {
      "latitude": 38.021667,
      "longitude": -8.838559,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661078542,
      "ems": null
    },
    {
      "latitude": 38.022629,
      "longitude": -8.838034,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661078545,
      "ems": null
    },
    {
      "latitude": 38.023544,
      "longitude": -8.837566,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 20,
      "squawk": "3224",
      "timestamp": 1661078548,
      "ems": null
    },
    {
      "latitude": 38.024597,
      "longitude": -8.83704,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661078551,
      "ems": null
    },
    {
      "latitude": 38.025604,
      "longitude": -8.836631,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661078554,
      "ems": null
    },
    {
      "latitude": 38.026707,
      "longitude": -8.836232,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661078557,
      "ems": null
    },
    {
      "latitude": 38.027824,
      "longitude": -8.835814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078560,
      "ems": null
    },
    {
      "latitude": 38.028946,
      "longitude": -8.835463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078563,
      "ems": null
    },
    {
      "latitude": 38.029919,
      "longitude": -8.835217,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078566,
      "ems": null
    },
    {
      "latitude": 38.031006,
      "longitude": -8.834878,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661078569,
      "ems": null
    },
    {
      "latitude": 38.032063,
      "longitude": -8.83462,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078572,
      "ems": null
    },
    {
      "latitude": 38.032993,
      "longitude": -8.834381,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078575,
      "ems": null
    },
    {
      "latitude": 38.034294,
      "longitude": -8.834083,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078578,
      "ems": null
    },
    {
      "latitude": 38.035309,
      "longitude": -8.833826,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078581,
      "ems": null
    },
    {
      "latitude": 38.036407,
      "longitude": -8.833533,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078584,
      "ems": null
    },
    {
      "latitude": 38.03746,
      "longitude": -8.8333,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078587,
      "ems": null
    },
    {
      "latitude": 38.03965,
      "longitude": -8.832769,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078593,
      "ems": null
    },
    {
      "latitude": 38.041653,
      "longitude": -8.832351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078599,
      "ems": null
    },
    {
      "latitude": 38.043884,
      "longitude": -8.831873,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078605,
      "ems": null
    },
    {
      "latitude": 38.045929,
      "longitude": -8.831489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078611,
      "ems": null
    },
    {
      "latitude": 38.048077,
      "longitude": -8.830977,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078617,
      "ems": null
    },
    {
      "latitude": 38.050171,
      "longitude": -8.8305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078623,
      "ems": null
    },
    {
      "latitude": 38.052219,
      "longitude": -8.829844,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078629,
      "ems": null
    },
    {
      "latitude": 38.053116,
      "longitude": -8.82956,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078632,
      "ems": null
    },
    {
      "latitude": 38.054173,
      "longitude": -8.829186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078635,
      "ems": null
    },
    {
      "latitude": 38.055244,
      "longitude": -8.828828,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078638,
      "ems": null
    },
    {
      "latitude": 38.057281,
      "longitude": -8.828157,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078644,
      "ems": null
    },
    {
      "latitude": 38.059341,
      "longitude": -8.827515,
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
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078650,
      "ems": null
    },
    {
      "latitude": 38.061356,
      "longitude": -8.826755,
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
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661078656,
      "ems": null
    },
    {
      "latitude": 38.063251,
      "longitude": -8.826022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661078662,
      "ems": null
    },
    {
      "latitude": 38.0653,
      "longitude": -8.825246,
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
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078668,
      "ems": null
    },
    {
      "latitude": 38.067348,
      "longitude": -8.824589,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078674,
      "ems": null
    },
    {
      "latitude": 38.069397,
      "longitude": -8.823992,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078680,
      "ems": null
    },
    {
      "latitude": 38.070328,
      "longitude": -8.823753,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078683,
      "ems": null
    },
    {
      "latitude": 38.071381,
      "longitude": -8.823541,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078686,
      "ems": null
    },
    {
      "latitude": 38.072422,
      "longitude": -8.823335,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078690,
      "ems": null
    },
    {
      "latitude": 38.073261,
      "longitude": -8.823156,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078692,
      "ems": null
    },
    {
      "latitude": 38.074425,
      "longitude": -8.822917,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078696,
      "ems": null
    },
    {
      "latitude": 38.075363,
      "longitude": -8.822782,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078698,
      "ems": null
    },
    {
      "latitude": 38.076324,
      "longitude": -8.822547,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078702,
      "ems": null
    },
    {
      "latitude": 38.078472,
      "longitude": -8.822082,
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078708,
      "ems": null
    },
    {
      "latitude": 38.080261,
      "longitude": -8.82173,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078713,
      "ems": null
    },
    {
      "latitude": 38.082523,
      "longitude": -8.821245,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078720,
      "ems": null
    },
    {
      "latitude": 38.084431,
      "longitude": -8.820827,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078726,
      "ems": null
    },
    {
      "latitude": 38.086529,
      "longitude": -8.82029,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078732,
      "ems": null
    },
    {
      "latitude": 38.088482,
      "longitude": -8.819812,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078738,
      "ems": null
    },
    {
      "latitude": 38.090389,
      "longitude": -8.819394,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078744,
      "ems": null
    },
    {
      "latitude": 38.092346,
      "longitude": -8.818983,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078750,
      "ems": null
    },
    {
      "latitude": 38.094303,
      "longitude": -8.818738,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661078756,
      "ems": null
    },
    {
      "latitude": 38.095093,
      "longitude": -8.818618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661078759,
      "ems": null
    },
    {
      "latitude": 38.096069,
      "longitude": -8.818499,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661078762,
      "ems": null
    },
    {
      "latitude": 38.097885,
      "longitude": -8.818165,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078767,
      "ems": null
    },
    {
      "latitude": 38.099716,
      "longitude": -8.817814,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078774,
      "ems": null
    },
    {
      "latitude": 38.101192,
      "longitude": -8.817543,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078780,
      "ems": null
    },
    {
      "latitude": 38.10268,
      "longitude": -8.817365,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661078786,
      "ems": null
    },
    {
      "latitude": 38.10434,
      "longitude": -8.817288,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661078792,
      "ems": null
    },
    {
      "latitude": 38.105164,
      "longitude": -8.817288,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661078795,
      "ems": null
    },
    {
      "latitude": 38.105892,
      "longitude": -8.817245,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661078798,
      "ems": null
    },
    {
      "latitude": 38.106583,
      "longitude": -8.817229,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661078801,
      "ems": null
    },
    {
      "latitude": 38.107288,
      "longitude": -8.817245,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661078804,
      "ems": null
    },
    {
      "latitude": 38.107941,
      "longitude": -8.817245,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661078807,
      "ems": null
    },
    {
      "latitude": 38.109524,
      "longitude": -8.817065,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661078813,
      "ems": null
    },
    {
      "latitude": 38.110222,
      "longitude": -8.816887,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078816,
      "ems": null
    },
    {
      "latitude": 38.110931,
      "longitude": -8.816704,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078819,
      "ems": null
    },
    {
      "latitude": 38.111572,
      "longitude": -8.816528,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078822,
      "ems": null
    },
    {
      "latitude": 38.11235,
      "longitude": -8.816353,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078825,
      "ems": null
    },
    {
      "latitude": 38.112991,
      "longitude": -8.816236,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661078828,
      "ems": null
    },
    {
      "latitude": 38.113712,
      "longitude": -8.816051,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078831,
      "ems": null
    },
    {
      "latitude": 38.11441,
      "longitude": -8.815886,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078834,
      "ems": null
    },
    {
      "latitude": 38.115051,
      "longitude": -8.81571,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078837,
      "ems": null
    },
    {
      "latitude": 38.115856,
      "longitude": -8.815454,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078840,
      "ems": null
    },
    {
      "latitude": 38.116608,
      "longitude": -8.815185,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661078843,
      "ems": null
    },
    {
      "latitude": 38.117249,
      "longitude": -8.814951,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661078846,
      "ems": null
    },
    {
      "latitude": 38.118881,
      "longitude": -8.814379,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078852,
      "ems": null
    },
    {
      "latitude": 38.119671,
      "longitude": -8.81408,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078855,
      "ems": null
    },
    {
      "latitude": 38.120464,
      "longitude": -8.813842,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078858,
      "ems": null
    },
    {
      "latitude": 38.121304,
      "longitude": -8.813543,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078861,
      "ems": null
    },
    {
      "latitude": 38.122971,
      "longitude": -8.812905,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078867,
      "ems": null
    },
    {
      "latitude": 38.12484,
      "longitude": -8.812289,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078873,
      "ems": null
    },
    {
      "latitude": 38.126678,
      "longitude": -8.811736,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078879,
      "ems": null
    },
    {
      "latitude": 38.128555,
      "longitude": -8.811152,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661078885,
      "ems": null
    },
    {
      "latitude": 38.130249,
      "longitude": -8.810568,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078891,
      "ems": null
    },
    {
      "latitude": 38.13229,
      "longitude": -8.8099,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078897,
      "ems": null
    },
    {
      "latitude": 38.134369,
      "longitude": -8.809282,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078903,
      "ems": null
    },
    {
      "latitude": 38.136383,
      "longitude": -8.808698,
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
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078909,
      "ems": null
    },
    {
      "latitude": 38.138397,
      "longitude": -8.807997,
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
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078915,
      "ems": null
    },
    {
      "latitude": 38.14048,
      "longitude": -8.807214,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661078921,
      "ems": null
    },
    {
      "latitude": 38.142563,
      "longitude": -8.806652,
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078927,
      "ems": null
    },
    {
      "latitude": 38.14481,
      "longitude": -8.806139,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078933,
      "ems": null
    },
    {
      "latitude": 38.145973,
      "longitude": -8.80578,
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
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078936,
      "ems": null
    },
    {
      "latitude": 38.148056,
      "longitude": -8.805017,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "3224",
      "timestamp": 1661078943,
      "ems": null
    },
    {
      "latitude": 38.150162,
      "longitude": -8.804139,
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
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661078949,
      "ems": null
    },
    {
      "latitude": 38.152084,
      "longitude": -8.803438,
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
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661078955,
      "ems": null
    },
    {
      "latitude": 38.153183,
      "longitude": -8.803029,
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
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661078958,
      "ems": null
    },
    {
      "latitude": 38.155151,
      "longitude": -8.802444,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661078963,
      "ems": null
    },
    {
      "latitude": 38.157288,
      "longitude": -8.80184,
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
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661078970,
      "ems": null
    },
    {
      "latitude": 38.158401,
      "longitude": -8.801568,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078973,
      "ems": null
    },
    {
      "latitude": 38.159363,
      "longitude": -8.801334,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078976,
      "ems": null
    },
    {
      "latitude": 38.160416,
      "longitude": -8.801043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078979,
      "ems": null
    },
    {
      "latitude": 38.161476,
      "longitude": -8.800825,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078982,
      "ems": null
    },
    {
      "latitude": 38.162453,
      "longitude": -8.800586,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661078985,
      "ems": null
    },
    {
      "latitude": 38.163616,
      "longitude": -8.800347,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078988,
      "ems": null
    },
    {
      "latitude": 38.165726,
      "longitude": -8.799932,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661078993,
      "ems": null
    },
    {
      "latitude": 38.167786,
      "longitude": -8.799464,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661078999,
      "ems": null
    },
    {
      "latitude": 38.169983,
      "longitude": -8.798763,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661079006,
      "ems": null
    },
    {
      "latitude": 38.171066,
      "longitude": -8.798317,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "3224",
      "timestamp": 1661079009,
      "ems": null
    },
    {
      "latitude": 38.172089,
      "longitude": -8.797828,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3224",
      "timestamp": 1661079012,
      "ems": null
    },
    {
      "latitude": 38.173069,
      "longitude": -8.797302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661079015,
      "ems": null
    },
    {
      "latitude": 38.174103,
      "longitude": -8.796718,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661079018,
      "ems": null
    },
    {
      "latitude": 38.175068,
      "longitude": -8.796167,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3224",
      "timestamp": 1661079021,
      "ems": null
    },
    {
      "latitude": 38.176186,
      "longitude": -8.79557,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "3224",
      "timestamp": 1661079024,
      "ems": null
    },
    {
      "latitude": 38.177212,
      "longitude": -8.795093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "3224",
      "timestamp": 1661079027,
      "ems": null
    },
    {
      "latitude": 38.178268,
      "longitude": -8.794614,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661079030,
      "ems": null
    },
    {
      "latitude": 38.180145,
      "longitude": -8.793899,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661079035,
      "ems": null
    },
    {
      "latitude": 38.182194,
      "longitude": -8.793182,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661079041,
      "ems": null
    },
    {
      "latitude": 38.183075,
      "longitude": -8.792944,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079044,
      "ems": null
    },
    {
      "latitude": 38.184082,
      "longitude": -8.792686,
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
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079047,
      "ems": null
    },
    {
      "latitude": 38.185318,
      "longitude": -8.792394,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079050,
      "ems": null
    },
    {
      "latitude": 38.186279,
      "longitude": -8.79216,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079053,
      "ems": null
    },
    {
      "latitude": 38.187454,
      "longitude": -8.791869,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079057,
      "ems": null
    },
    {
      "latitude": 38.188477,
      "longitude": -8.791575,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079060,
      "ems": null
    },
    {
      "latitude": 38.189392,
      "longitude": -8.791342,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079062,
      "ems": null
    },
    {
      "latitude": 38.191597,
      "longitude": -8.790794,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079069,
      "ems": null
    },
    {
      "latitude": 38.193645,
      "longitude": -8.790257,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079075,
      "ems": null
    },
    {
      "latitude": 38.195663,
      "longitude": -8.789705,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079081,
      "ems": null
    },
    {
      "latitude": 38.197723,
      "longitude": -8.789238,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079087,
      "ems": null
    },
    {
      "latitude": 38.199696,
      "longitude": -8.788764,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079093,
      "ems": null
    },
    {
      "latitude": 38.201744,
      "longitude": -8.788286,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079099,
      "ems": null
    },
    {
      "latitude": 38.203766,
      "longitude": -8.787893,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079105,
      "ems": null
    },
    {
      "latitude": 38.205795,
      "longitude": -8.787391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079111,
      "ems": null
    },
    {
      "latitude": 38.207748,
      "longitude": -8.786794,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661079116,
      "ems": null
    },
    {
      "latitude": 38.208572,
      "longitude": -8.78655,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661079120,
      "ems": null
    },
    {
      "latitude": 38.209751,
      "longitude": -8.786137,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661079122,
      "ems": null
    },
    {
      "latitude": 38.210728,
      "longitude": -8.785719,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661079126,
      "ems": null
    },
    {
      "latitude": 38.211613,
      "longitude": -8.78536,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661079128,
      "ems": null
    },
    {
      "latitude": 38.212555,
      "longitude": -8.78503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661079132,
      "ems": null
    },
    {
      "latitude": 38.213608,
      "longitude": -8.784621,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661079134,
      "ems": null
    },
    {
      "latitude": 38.215569,
      "longitude": -8.784047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079141,
      "ems": null
    },
    {
      "latitude": 38.217453,
      "longitude": -8.783628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079146,
      "ems": null
    },
    {
      "latitude": 38.218456,
      "longitude": -8.78345,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079150,
      "ems": null
    },
    {
      "latitude": 38.219433,
      "longitude": -8.783271,
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
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079152,
      "ems": null
    },
    {
      "latitude": 38.220318,
      "longitude": -8.783152,
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079155,
      "ems": null
    },
    {
      "latitude": 38.221157,
      "longitude": -8.783032,
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
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661079158,
      "ems": null
    },
    {
      "latitude": 38.221893,
      "longitude": -8.782927,
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
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661079161,
      "ems": null
    },
    {
      "latitude": 38.223267,
      "longitude": -8.782809,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079164,
      "ems": null
    },
    {
      "latitude": 38.224274,
      "longitude": -8.782693,
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
      "heading": 3,
      "squawk": "3224",
      "timestamp": 1661079167,
      "ems": null
    },
    {
      "latitude": 38.224739,
      "longitude": -8.782674,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079170,
      "ems": null
    },
    {
      "latitude": 38.227207,
      "longitude": -8.782375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661079176,
      "ems": null
    },
    {
      "latitude": 38.229034,
      "longitude": -8.782108,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079182,
      "ems": null
    },
    {
      "latitude": 38.23098,
      "longitude": -8.781837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "3224",
      "timestamp": 1661079188,
      "ems": null
    },
    {
      "latitude": 38.232834,
      "longitude": -8.781641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079194,
      "ems": null
    },
    {
      "latitude": 38.235123,
      "longitude": -8.781407,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079200,
      "ems": null
    },
    {
      "latitude": 38.237171,
      "longitude": -8.781301,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661079206,
      "ems": null
    },
    {
      "latitude": 38.238239,
      "longitude": -8.781301,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661079209,
      "ems": null
    },
    {
      "latitude": 38.239311,
      "longitude": -8.78136,
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
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661079212,
      "ems": null
    },
    {
      "latitude": 38.240387,
      "longitude": -8.781407,
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
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661079215,
      "ems": null
    },
    {
      "latitude": 38.242493,
      "longitude": -8.78129,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079221,
      "ems": null
    },
    {
      "latitude": 38.24448,
      "longitude": -8.781002,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079227,
      "ems": null
    },
    {
      "latitude": 38.245598,
      "longitude": -8.780823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079230,
      "ems": null
    },
    {
      "latitude": 38.246429,
      "longitude": -8.780647,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079233,
      "ems": null
    },
    {
      "latitude": 38.248032,
      "longitude": -8.780238,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079237,
      "ems": null
    },
    {
      "latitude": 38.248901,
      "longitude": -8.780005,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079240,
      "ems": null
    },
    {
      "latitude": 38.250046,
      "longitude": -8.779713,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079243,
      "ems": null
    },
    {
      "latitude": 38.250858,
      "longitude": -8.779449,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079246,
      "ems": null
    },
    {
      "latitude": 38.251694,
      "longitude": -8.779245,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079249,
      "ems": null
    },
    {
      "latitude": 38.252838,
      "longitude": -8.778894,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "3224",
      "timestamp": 1661079252,
      "ems": null
    },
    {
      "latitude": 38.254944,
      "longitude": -8.778427,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079258,
      "ems": null
    },
    {
      "latitude": 38.257561,
      "longitude": -8.777897,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079267,
      "ems": null
    },
    {
      "latitude": 38.259521,
      "longitude": -8.777492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079273,
      "ems": null
    },
    {
      "latitude": 38.261562,
      "longitude": -8.777121,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079279,
      "ems": null
    },
    {
      "latitude": 38.264126,
      "longitude": -8.776643,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079286,
      "ems": null
    },
    {
      "latitude": 38.266022,
      "longitude": -8.776264,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079292,
      "ems": null
    },
    {
      "latitude": 38.267986,
      "longitude": -8.775927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079298,
      "ems": null
    },
    {
      "latitude": 38.26973,
      "longitude": -8.775563,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079304,
      "ems": null
    },
    {
      "latitude": 38.270828,
      "longitude": -8.775212,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661079307,
      "ems": null
    },
    {
      "latitude": 38.27179,
      "longitude": -8.77492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "3224",
      "timestamp": 1661079310,
      "ems": null
    },
    {
      "latitude": 38.272781,
      "longitude": -8.774553,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3224",
      "timestamp": 1661079313,
      "ems": null
    },
    {
      "latitude": 38.273712,
      "longitude": -8.774195,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661079316,
      "ems": null
    },
    {
      "latitude": 38.274582,
      "longitude": -8.773869,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661079319,
      "ems": null
    },
    {
      "latitude": 38.275497,
      "longitude": -8.773518,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3224",
      "timestamp": 1661079322,
      "ems": null
    },
    {
      "latitude": 38.276459,
      "longitude": -8.773168,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "3224",
      "timestamp": 1661079325,
      "ems": null
    },
    {
      "latitude": 38.277283,
      "longitude": -8.772817,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661079328,
      "ems": null
    },
    {
      "latitude": 38.27829,
      "longitude": -8.772349,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661079331,
      "ems": null
    },
    {
      "latitude": 38.278557,
      "longitude": -8.772224,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "3224",
      "timestamp": 1661079332,
      "ems": null
    },
    {
      "latitude": 38.280464,
      "longitude": -8.771627,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079338,
      "ems": null
    },
    {
      "latitude": 38.281487,
      "longitude": -8.771448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079341,
      "ems": null
    },
    {
      "latitude": 38.282467,
      "longitude": -8.77127,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661079344,
      "ems": null
    },
    {
      "latitude": 38.283463,
      "longitude": -8.77118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "3224",
      "timestamp": 1661079347,
      "ems": null
    },
    {
      "latitude": 38.284424,
      "longitude": -8.771006,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079351,
      "ems": null
    },
    {
      "latitude": 38.285492,
      "longitude": -8.770792,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079354,
      "ems": null
    },
    {
      "latitude": 38.286423,
      "longitude": -8.770553,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079357,
      "ems": null
    },
    {
      "latitude": 38.287354,
      "longitude": -8.770362,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079360,
      "ems": null
    },
    {
      "latitude": 38.28833,
      "longitude": -8.770135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079363,
      "ems": null
    },
    {
      "latitude": 38.289322,
      "longitude": -8.769895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079366,
      "ems": null
    },
    {
      "latitude": 38.291245,
      "longitude": -8.769485,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079372,
      "ems": null
    },
    {
      "latitude": 38.292984,
      "longitude": -8.769076,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079378,
      "ems": null
    },
    {
      "latitude": 38.294998,
      "longitude": -8.768667,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3224",
      "timestamp": 1661079384,
      "ems": null
    },
    {
      "latitude": 38.296875,
      "longitude": -8.768375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "3224",
      "timestamp": 1661079390,
      "ems": null
    },
    {
      "latitude": 38.299179,
      "longitude": -8.767866,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "3224",
      "timestamp": 1661079397,
      "ems": null
    },
    {
      "latitude": 38.301693,
      "longitude": -8.767388,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "3224",
      "timestamp": 1661079405,
      "ems": null
    },
    {
      "latitude": 38.3036,
      "longitude": -8.766911,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079411,
      "ems": null
    },
    {
      "latitude": 38.304577,
      "longitude": -8.766672,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "3224",
      "timestamp": 1661079414,
      "ems": null
    },
    {
      "latitude": 38.305508,
      "longitude": -8.766374,
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
      "heading": 12,
      "squawk": "3224",
      "timestamp": 1661079417,
      "ems": null
    },
    {
      "latitude": 38.307449,
      "longitude": -8.766038,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079423,
      "ems": null
    },
    {
      "latitude": 38.308273,
      "longitude": -8.76598,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "3224",
      "timestamp": 1661079426,
      "ems": null
    },
    {
      "latitude": 38.309372,
      "longitude": -8.765955,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079429,
      "ems": null
    },
    {
      "latitude": 38.310303,
      "longitude": -8.765955,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079432,
      "ems": null
    },
    {
      "latitude": 38.311283,
      "longitude": -8.765955,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079435,
      "ems": null
    },
    {
      "latitude": 38.311615,
      "longitude": -8.765921,
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
      "heading": 4,
      "squawk": "3224",
      "timestamp": 1661079436,
      "ems": null
    },
    {
      "latitude": 38.31263,
      "longitude": -8.765955,
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
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661079439,
      "ems": null
    },
    {
      "latitude": 38.313377,
      "longitude": -8.765955,
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
      "heading": 358,
      "squawk": "3224",
      "timestamp": 1661079442,
      "ems": null
    },
    {
      "latitude": 38.314224,
      "longitude": -8.76598,
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
      "heading": 357,
      "squawk": "3224",
      "timestamp": 1661079444,
      "ems": null
    },
    {
      "latitude": 38.315369,
      "longitude": -8.766096,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661079448,
      "ems": null
    },
    {
      "latitude": 38.316284,
      "longitude": -8.766155,
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
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661079450,
      "ems": null
    },
    {
      "latitude": 38.317379,
      "longitude": -8.766253,
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
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661079454,
      "ems": null
    },
    {
      "latitude": 38.318031,
      "longitude": -8.766253,
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
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661079456,
      "ems": null
    },
    {
      "latitude": 38.319939,
      "longitude": -8.766253,
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
      "heading": 360,
      "squawk": "3224",
      "timestamp": 1661079462,
      "ems": null
    },
    {
      "latitude": 38.321411,
      "longitude": -8.766272,
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
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661079466,
      "ems": null
    },
    {
      "latitude": 38.324249,
      "longitude": -8.766389,
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
      "heading": 359,
      "squawk": "3224",
      "timestamp": 1661079474,
      "ems": null
    },
    {
      "latitude": 38.326401,
      "longitude": -8.76633,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079480,
      "ems": null
    },
    {
      "latitude": 38.327297,
      "longitude": -8.766314,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079483,
      "ems": null
    },
    {
      "latitude": 38.328323,
      "longitude": -8.766272,
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079486,
      "ems": null
    },
    {
      "latitude": 38.330566,
      "longitude": -8.766272,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079492,
      "ems": null
    },
    {
      "latitude": 38.332535,
      "longitude": -8.766213,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3224",
      "timestamp": 1661079498,
      "ems": null
    },
    {
      "latitude": 38.334595,
      "longitude": -8.766213,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661079504,
      "ems": null
    },
    {
      "latitude": 38.335693,
      "longitude": -8.766447,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661079507,
      "ems": null
    },
    {
      "latitude": 38.336792,
      "longitude": -8.766798,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661079510,
      "ems": null
    },
    {
      "latitude": 38.33757,
      "longitude": -8.767148,
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
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661079513,
      "ems": null
    },
    {
      "latitude": 38.337936,
      "longitude": -8.767323,
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
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661079516,
      "ems": null
    },
    {
      "latitude": 38.338886,
      "longitude": -8.767926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079518,
      "ems": null
    },
    {
      "latitude": 38.340454,
      "longitude": -8.76896,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079522,
      "ems": null
    },
    {
      "latitude": 38.34182,
      "longitude": -8.769776,
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661079526,
      "ems": null
    },
    {
      "latitude": 38.342705,
      "longitude": -8.770254,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661079529,
      "ems": null
    },
    {
      "latitude": 38.343613,
      "longitude": -8.77083,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661079532,
      "ems": null
    },
    {
      "latitude": 38.344658,
      "longitude": -8.771508,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079535,
      "ems": null
    },
    {
      "latitude": 38.345543,
      "longitude": -8.772046,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079538,
      "ems": null
    },
    {
      "latitude": 38.346523,
      "longitude": -8.772702,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079541,
      "ems": null
    },
    {
      "latitude": 38.348785,
      "longitude": -8.774102,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661079548,
      "ems": null
    },
    {
      "latitude": 38.350571,
      "longitude": -8.775271,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079554,
      "ems": null
    },
    {
      "latitude": 38.35141,
      "longitude": -8.775927,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079557,
      "ems": null
    },
    {
      "latitude": 38.352341,
      "longitude": -8.776584,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079560,
      "ems": null
    },
    {
      "latitude": 38.354294,
      "longitude": -8.777957,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079566,
      "ems": null
    },
    {
      "latitude": 38.355972,
      "longitude": -8.779128,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661079572,
      "ems": null
    },
    {
      "latitude": 38.357788,
      "longitude": -8.780464,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079578,
      "ems": null
    },
    {
      "latitude": 38.359604,
      "longitude": -8.781718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079584,
      "ems": null
    },
    {
      "latitude": 38.36142,
      "longitude": -8.782927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079590,
      "ems": null
    },
    {
      "latitude": 38.363022,
      "longitude": -8.784095,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079596,
      "ems": null
    },
    {
      "latitude": 38.364677,
      "longitude": -8.78536,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079602,
      "ems": null
    },
    {
      "latitude": 38.366261,
      "longitude": -8.786495,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079608,
      "ems": null
    },
    {
      "latitude": 38.367844,
      "longitude": -8.787689,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079614,
      "ems": null
    },
    {
      "latitude": 38.369473,
      "longitude": -8.788824,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079620,
      "ems": null
    },
    {
      "latitude": 38.371056,
      "longitude": -8.789958,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079626,
      "ems": null
    },
    {
      "latitude": 38.372681,
      "longitude": -8.791049,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079632,
      "ems": null
    },
    {
      "latitude": 38.374283,
      "longitude": -8.79216,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079638,
      "ems": null
    },
    {
      "latitude": 38.375793,
      "longitude": -8.79327,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079644,
      "ems": null
    },
    {
      "latitude": 38.377434,
      "longitude": -8.794496,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661079650,
      "ems": null
    },
    {
      "latitude": 38.379108,
      "longitude": -8.79581,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079657,
      "ems": null
    },
    {
      "latitude": 38.380646,
      "longitude": -8.796885,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079662,
      "ems": null
    },
    {
      "latitude": 38.382202,
      "longitude": -8.797945,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079669,
      "ems": null
    },
    {
      "latitude": 38.383808,
      "longitude": -8.799034,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079675,
      "ems": null
    },
    {
      "latitude": 38.385441,
      "longitude": -8.800109,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079681,
      "ems": null
    },
    {
      "latitude": 38.38623,
      "longitude": -8.800633,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079683,
      "ems": null
    },
    {
      "latitude": 38.38797,
      "longitude": -8.801802,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079690,
      "ems": null
    },
    {
      "latitude": 38.389584,
      "longitude": -8.802975,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079696,
      "ems": null
    },
    {
      "latitude": 38.391258,
      "longitude": -8.804229,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661079702,
      "ems": null
    },
    {
      "latitude": 38.392189,
      "longitude": -8.805005,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661079705,
      "ems": null
    },
    {
      "latitude": 38.39296,
      "longitude": -8.805717,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661079708,
      "ems": null
    },
    {
      "latitude": 38.393772,
      "longitude": -8.806378,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661079711,
      "ems": null
    },
    {
      "latitude": 38.395447,
      "longitude": -8.807631,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079717,
      "ems": null
    },
    {
      "latitude": 38.397079,
      "longitude": -8.808698,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079723,
      "ems": null
    },
    {
      "latitude": 38.398727,
      "longitude": -8.809808,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079729,
      "ems": null
    },
    {
      "latitude": 38.399498,
      "longitude": -8.810378,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079732,
      "ems": null
    },
    {
      "latitude": 38.400383,
      "longitude": -8.810856,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661079735,
      "ems": null
    },
    {
      "latitude": 38.401108,
      "longitude": -8.811327,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661079738,
      "ems": null
    },
    {
      "latitude": 38.401886,
      "longitude": -8.811795,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661079741,
      "ems": null
    },
    {
      "latitude": 38.403549,
      "longitude": -8.812826,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079747,
      "ems": null
    },
    {
      "latitude": 38.405224,
      "longitude": -8.813961,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079753,
      "ems": null
    },
    {
      "latitude": 38.406898,
      "longitude": -8.815036,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079759,
      "ems": null
    },
    {
      "latitude": 38.408524,
      "longitude": -8.816119,
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
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079765,
      "ems": null
    },
    {
      "latitude": 38.410393,
      "longitude": -8.817424,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079771,
      "ems": null
    },
    {
      "latitude": 38.41214,
      "longitude": -8.81869,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079777,
      "ems": null
    },
    {
      "latitude": 38.414063,
      "longitude": -8.819932,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079783,
      "ems": null
    },
    {
      "latitude": 38.416397,
      "longitude": -8.821533,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079790,
      "ems": null
    },
    {
      "latitude": 38.418724,
      "longitude": -8.823181,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079797,
      "ems": null
    },
    {
      "latitude": 38.419922,
      "longitude": -8.824052,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079800,
      "ems": null
    },
    {
      "latitude": 38.423355,
      "longitude": -8.82638,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661079810,
      "ems": null
    },
    {
      "latitude": 38.425415,
      "longitude": -8.827932,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079816,
      "ems": null
    },
    {
      "latitude": 38.427521,
      "longitude": -8.829485,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079822,
      "ems": null
    },
    {
      "latitude": 38.429569,
      "longitude": -8.830994,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079828,
      "ems": null
    },
    {
      "latitude": 38.431618,
      "longitude": -8.83252,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079835,
      "ems": null
    },
    {
      "latitude": 38.433575,
      "longitude": -8.833862,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079841,
      "ems": null
    },
    {
      "latitude": 38.435349,
      "longitude": -8.835038,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079847,
      "ems": null
    },
    {
      "latitude": 38.43718,
      "longitude": -8.836232,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079853,
      "ems": null
    },
    {
      "latitude": 38.439011,
      "longitude": -8.837426,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079859,
      "ems": null
    },
    {
      "latitude": 38.440475,
      "longitude": -8.838322,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661079864,
      "ems": null
    },
    {
      "latitude": 38.441711,
      "longitude": -8.838979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661079868,
      "ems": null
    },
    {
      "latitude": 38.442535,
      "longitude": -8.839337,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661079871,
      "ems": null
    },
    {
      "latitude": 38.444504,
      "longitude": -8.840471,
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
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079877,
      "ems": null
    },
    {
      "latitude": 38.446514,
      "longitude": -8.84198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661079883,
      "ems": null
    },
    {
      "latitude": 38.447433,
      "longitude": -8.8428,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661079886,
      "ems": null
    },
    {
      "latitude": 38.44833,
      "longitude": -8.843628,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661079889,
      "ems": null
    },
    {
      "latitude": 38.449261,
      "longitude": -8.844482,
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
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661079892,
      "ems": null
    },
    {
      "latitude": 38.4501,
      "longitude": -8.845215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661079895,
      "ems": null
    },
    {
      "latitude": 38.451126,
      "longitude": -8.846069,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661079898,
      "ems": null
    },
    {
      "latitude": 38.452057,
      "longitude": -8.846802,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661079901,
      "ems": null
    },
    {
      "latitude": 38.452744,
      "longitude": -8.847338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661079904,
      "ems": null
    },
    {
      "latitude": 38.454803,
      "longitude": -8.848877,
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079910,
      "ems": null
    },
    {
      "latitude": 38.455765,
      "longitude": -8.849607,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079913,
      "ems": null
    },
    {
      "latitude": 38.456665,
      "longitude": -8.850281,
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
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661079916,
      "ems": null
    },
    {
      "latitude": 38.457596,
      "longitude": -8.850952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079919,
      "ems": null
    },
    {
      "latitude": 38.458481,
      "longitude": -8.851563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079922,
      "ems": null
    },
    {
      "latitude": 38.459518,
      "longitude": -8.852294,
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
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079925,
      "ems": null
    },
    {
      "latitude": 38.460434,
      "longitude": -8.852905,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079928,
      "ems": null
    },
    {
      "latitude": 38.461349,
      "longitude": -8.853488,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661079931,
      "ems": null
    },
    {
      "latitude": 38.463181,
      "longitude": -8.854797,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079937,
      "ems": null
    },
    {
      "latitude": 38.464996,
      "longitude": -8.856079,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079943,
      "ems": null
    },
    {
      "latitude": 38.466019,
      "longitude": -8.856712,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661079946,
      "ems": null
    },
    {
      "latitude": 38.466812,
      "longitude": -8.857178,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661079949,
      "ems": null
    },
    {
      "latitude": 38.467804,
      "longitude": -8.857727,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661079952,
      "ems": null
    },
    {
      "latitude": 38.469604,
      "longitude": -8.858826,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661079958,
      "ems": null
    },
    {
      "latitude": 38.471329,
      "longitude": -8.860115,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661079964,
      "ems": null
    },
    {
      "latitude": 38.47361,
      "longitude": -8.861755,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079972,
      "ems": null
    },
    {
      "latitude": 38.475376,
      "longitude": -8.863037,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079978,
      "ems": null
    },
    {
      "latitude": 38.476181,
      "longitude": -8.863579,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661079981,
      "ems": null
    },
    {
      "latitude": 38.477985,
      "longitude": -8.864746,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661079987,
      "ems": null
    },
    {
      "latitude": 38.479752,
      "longitude": -8.866086,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661079993,
      "ems": null
    },
    {
      "latitude": 38.480267,
      "longitude": -8.866577,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "3224",
      "timestamp": 1661079995,
      "ems": null
    },
    {
      "latitude": 38.48101,
      "longitude": -8.867188,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661079998,
      "ems": null
    },
    {
      "latitude": 38.48172,
      "longitude": -8.867877,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661080001,
      "ems": null
    },
    {
      "latitude": 38.483524,
      "longitude": -8.869263,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "3224",
      "timestamp": 1661080007,
      "ems": null
    },
    {
      "latitude": 38.484966,
      "longitude": -8.870239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661080013,
      "ems": null
    },
    {
      "latitude": 38.487015,
      "longitude": -8.871643,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661080019,
      "ems": null
    },
    {
      "latitude": 38.487442,
      "longitude": -8.871878,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661080020,
      "ems": null
    },
    {
      "latitude": 38.487762,
      "longitude": -8.872057,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661080021,
      "ems": null
    },
    {
      "latitude": 38.488678,
      "longitude": -8.872714,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661080025,
      "ems": null
    },
    {
      "latitude": 38.489578,
      "longitude": -8.873352,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661080028,
      "ems": null
    },
    {
      "latitude": 38.490459,
      "longitude": -8.874023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661080031,
      "ems": null
    },
    {
      "latitude": 38.491333,
      "longitude": -8.874624,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "3224",
      "timestamp": 1661080034,
      "ems": null
    },
    {
      "latitude": 38.493069,
      "longitude": -8.875793,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661080040,
      "ems": null
    },
    {
      "latitude": 38.494884,
      "longitude": -8.876953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661080046,
      "ems": null
    },
    {
      "latitude": 38.496735,
      "longitude": -8.878088,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661080052,
      "ems": null
    },
    {
      "latitude": 38.497559,
      "longitude": -8.878565,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "3224",
      "timestamp": 1661080055,
      "ems": null
    },
    {
      "latitude": 38.498474,
      "longitude": -8.879103,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661080058,
      "ems": null
    },
    {
      "latitude": 38.499306,
      "longitude": -8.879578,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661080061,
      "ems": null
    },
    {
      "latitude": 38.501083,
      "longitude": -8.880714,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "3224",
      "timestamp": 1661080067,
      "ems": null
    },
    {
      "latitude": 38.501911,
      "longitude": -8.881348,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661080070,
      "ems": null
    },
    {
      "latitude": 38.502705,
      "longitude": -8.882019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661080073,
      "ems": null
    },
    {
      "latitude": 38.50359,
      "longitude": -8.882813,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661080076,
      "ems": null
    },
    {
      "latitude": 38.504425,
      "longitude": -8.883667,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661080079,
      "ems": null
    },
    {
      "latitude": 38.505066,
      "longitude": -8.884417,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661080082,
      "ems": null
    },
    {
      "latitude": 38.50589,
      "longitude": -8.885312,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661080085,
      "ems": null
    },
    {
      "latitude": 38.506706,
      "longitude": -8.886047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661080088,
      "ems": null
    },
    {
      "latitude": 38.507404,
      "longitude": -8.886597,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661080091,
      "ems": null
    },
    {
      "latitude": 38.50827,
      "longitude": -8.887342,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "3224",
      "timestamp": 1661080094,
      "ems": null
    },
    {
      "latitude": 38.509872,
      "longitude": -8.888672,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661080100,
      "ems": null
    },
    {
      "latitude": 38.512024,
      "longitude": -8.890805,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080109,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -8.891602,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661080111,
      "ems": null
    },
    {
      "latitude": 38.513214,
      "longitude": -8.892418,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "3224",
      "timestamp": 1661080114,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -8.892944,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 306,
      "squawk": "3224",
      "timestamp": 1661080115,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.894348,
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
      "heading": 288,
      "squawk": "3224",
      "timestamp": 1661080119,
      "ems": null
    },
    {
      "latitude": 38.514175,
      "longitude": -8.895701,
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
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080122,
      "ems": null
    },
    {
      "latitude": 38.514175,
      "longitude": -8.897075,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080125,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.898627,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080128,
      "ems": null
    },
    {
      "latitude": 38.514084,
      "longitude": -8.900299,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080131,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -8.901672,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080133,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.903463,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080137,
      "ems": null
    },
    {
      "latitude": 38.514175,
      "longitude": -8.904778,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080140,
      "ems": null
    },
    {
      "latitude": 38.514248,
      "longitude": -8.906555,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080143,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.907942,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080146,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.909546,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080149,
      "ems": null
    },
    {
      "latitude": 38.514359,
      "longitude": -8.912719,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080155,
      "ems": null
    },
    {
      "latitude": 38.514248,
      "longitude": -8.915833,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080161,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.917315,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080164,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -8.920349,
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
      "heading": 274,
      "squawk": "3224",
      "timestamp": 1661080170,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.923286,
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
      "heading": 274,
      "squawk": "3224",
      "timestamp": 1661080176,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.92627,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080182,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -8.928003,
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
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080185,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.929437,
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
      "heading": 274,
      "squawk": "3224",
      "timestamp": 1661080188,
      "ems": null
    },
    {
      "latitude": 38.514587,
      "longitude": -8.930691,
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
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080190,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -8.932495,
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
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080194,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -8.935791,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080200,
      "ems": null
    },
    {
      "latitude": 38.514587,
      "longitude": -8.937378,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080203,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.940796,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080209,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -8.942261,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080211,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -8.943886,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080215,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -8.945618,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080218,
      "ems": null
    },
    {
      "latitude": 38.514359,
      "longitude": -8.947409,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080221,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.950623,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080227,
      "ems": null
    },
    {
      "latitude": 38.514359,
      "longitude": -8.953857,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080233,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.9552,
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
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080235,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.957022,
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
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080239,
      "ems": null
    },
    {
      "latitude": 38.514587,
      "longitude": -8.960306,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080245,
      "ems": null
    },
    {
      "latitude": 38.514622,
      "longitude": -8.963257,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080251,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -8.966431,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080257,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.969381,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080263,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.972046,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080269,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.973511,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080272,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -8.976685,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080278,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.978338,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080282,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.983398,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080292,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.986023,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080298,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.989075,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080305,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.991699,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080311,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -8.994446,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080316,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.997314,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080323,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -9.000244,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080329,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -9.003177,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080335,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -9.005981,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080340,
      "ems": null
    },
    {
      "latitude": 38.514359,
      "longitude": -9.009148,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080347,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -9.012133,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080353,
      "ems": null
    },
    {
      "latitude": 38.514221,
      "longitude": -9.015119,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080359,
      "ems": null
    },
    {
      "latitude": 38.514221,
      "longitude": -9.017865,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080365,
      "ems": null
    },
    {
      "latitude": 38.514221,
      "longitude": -9.02079,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080371,
      "ems": null
    },
    {
      "latitude": 38.514175,
      "longitude": -9.023657,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080377,
      "ems": null
    },
    {
      "latitude": 38.514111,
      "longitude": -9.026611,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080383,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -9.02948,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080389,
      "ems": null
    },
    {
      "latitude": 38.514297,
      "longitude": -9.03241,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080395,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -9.035461,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080401,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -9.038513,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080407,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -9.040161,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080410,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -9.041629,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080413,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -9.043301,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080416,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -9.044617,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080419,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -9.047974,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080425,
      "ems": null
    },
    {
      "latitude": 38.513397,
      "longitude": -9.051123,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080432,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -9.052615,
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
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080435,
      "ems": null
    },
    {
      "latitude": 38.513489,
      "longitude": -9.054108,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080437,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -9.056914,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080444,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.06012,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080449,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.063354,
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
      "heading": 268,
      "squawk": "3224",
      "timestamp": 1661080456,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.066406,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080462,
      "ems": null
    },
    {
      "latitude": 38.513306,
      "longitude": -9.069452,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080468,
      "ems": null
    },
    {
      "latitude": 38.513317,
      "longitude": -9.072449,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080474,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.075317,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080480,
      "ems": null
    },
    {
      "latitude": 38.513214,
      "longitude": -9.078588,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080486,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -9.081394,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080492,
      "ems": null
    },
    {
      "latitude": 38.513168,
      "longitude": -9.084679,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080498,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.087708,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080504,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.090948,
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
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080510,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.09137,
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
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080511,
      "ems": null
    },
    {
      "latitude": 38.513168,
      "longitude": -9.096381,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080521,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.099606,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080527,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.102722,
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
      "heading": 275,
      "squawk": "3224",
      "timestamp": 1661080533,
      "ems": null
    },
    {
      "latitude": 38.513306,
      "longitude": -9.105934,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080539,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -9.10907,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080545,
      "ems": null
    },
    {
      "latitude": 38.513458,
      "longitude": -9.112244,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080551,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -9.115601,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080557,
      "ems": null
    },
    {
      "latitude": 38.513351,
      "longitude": -9.116861,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080560,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.118835,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080563,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.120483,
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
      "heading": 267,
      "squawk": "3224",
      "timestamp": 1661080566,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.123657,
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
      "heading": 266,
      "squawk": "3224",
      "timestamp": 1661080572,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.125488,
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
      "heading": 265,
      "squawk": "3224",
      "timestamp": 1661080575,
      "ems": null
    },
    {
      "latitude": 38.512848,
      "longitude": -9.127191,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 264,
      "squawk": "3224",
      "timestamp": 1661080578,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.127441,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "3224",
      "timestamp": 1661080579,
      "ems": null
    },
    {
      "latitude": 38.512714,
      "longitude": -9.128174,
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
      "heading": 261,
      "squawk": "3224",
      "timestamp": 1661080582,
      "ems": null
    },
    {
      "latitude": 38.512253,
      "longitude": -9.132385,
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
      "heading": 262,
      "squawk": "3224",
      "timestamp": 1661080588,
      "ems": null
    },
    {
      "latitude": 38.512016,
      "longitude": -9.134827,
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
      "heading": 263,
      "squawk": "3224",
      "timestamp": 1661080593,
      "ems": null
    },
    {
      "latitude": 38.511829,
      "longitude": -9.138916,
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
      "heading": 269,
      "squawk": "3224",
      "timestamp": 1661080600,
      "ems": null
    },
    {
      "latitude": 38.511887,
      "longitude": -9.140744,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080604,
      "ems": null
    },
    {
      "latitude": 38.511875,
      "longitude": -9.142212,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080606,
      "ems": null
    },
    {
      "latitude": 38.511932,
      "longitude": -9.144029,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080610,
      "ems": null
    },
    {
      "latitude": 38.511978,
      "longitude": -9.145402,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080613,
      "ems": null
    },
    {
      "latitude": 38.512016,
      "longitude": -9.146973,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080616,
      "ems": null
    },
    {
      "latitude": 38.512062,
      "longitude": -9.148621,
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
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080619,
      "ems": null
    },
    {
      "latitude": 38.512108,
      "longitude": -9.150146,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080622,
      "ems": null
    },
    {
      "latitude": 38.512108,
      "longitude": -9.151428,
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
      "heading": 270,
      "squawk": "3224",
      "timestamp": 1661080625,
      "ems": null
    },
    {
      "latitude": 38.512199,
      "longitude": -9.154724,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "3224",
      "timestamp": 1661080631,
      "ems": null
    },
    {
      "latitude": 38.512386,
      "longitude": -9.157776,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "3224",
      "timestamp": 1661080637,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -9.160747,
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
      "heading": 271,
      "squawk": "3224",
      "timestamp": 1661080643,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -9.16409,
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
      "heading": 276,
      "squawk": "3224",
      "timestamp": 1661080649,
      "ems": null
    },
    {
      "latitude": 38.512852,
      "longitude": -9.165588,
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
      "heading": 278,
      "squawk": "3224",
      "timestamp": 1661080652,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.167114,
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
      "heading": 278,
      "squawk": "3224",
      "timestamp": 1661080655,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.168823,
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
      "heading": 281,
      "squawk": "3224",
      "timestamp": 1661080658,
      "ems": null
    },
    {
      "latitude": 38.513535,
      "longitude": -9.17036,
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
      "heading": 281,
      "squawk": "3224",
      "timestamp": 1661080661,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -9.172302,
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
      "heading": 281,
      "squawk": "3224",
      "timestamp": 1661080664,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -9.173645,
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
      "heading": 288,
      "squawk": "3224",
      "timestamp": 1661080667,
      "ems": null
    },
    {
      "latitude": 38.514633,
      "longitude": -9.175076,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 300,
      "squawk": "3224",
      "timestamp": 1661080670,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -9.176391,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 310,
      "squawk": "3224",
      "timestamp": 1661080673,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -9.177368,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661080676,
      "ems": null
    },
    {
      "latitude": 38.51738,
      "longitude": -9.178241,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661080679,
      "ems": null
    },
    {
      "latitude": 38.518433,
      "longitude": -9.178958,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "3224",
      "timestamp": 1661080682,
      "ems": null
    },
    {
      "latitude": 38.519604,
      "longitude": -9.179626,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661080685,
      "ems": null
    },
    {
      "latitude": 38.52058,
      "longitude": -9.180054,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661080688,
      "ems": null
    },
    {
      "latitude": 38.521931,
      "longitude": -9.18042,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661080691,
      "ems": null
    },
    {
      "latitude": 38.523003,
      "longitude": -9.180542,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "3224",
      "timestamp": 1661080694,
      "ems": null
    },
    {
      "latitude": 38.524017,
      "longitude": -9.18063,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 353,
      "squawk": "3224",
      "timestamp": 1661080697,
      "ems": null
    },
    {
      "latitude": 38.525208,
      "longitude": -9.180868,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661080700,
      "ems": null
    },
    {
      "latitude": 38.526306,
      "longitude": -9.181108,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661080703,
      "ems": null
    },
    {
      "latitude": 38.527328,
      "longitude": -9.181335,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661080706,
      "ems": null
    },
    {
      "latitude": 38.528214,
      "longitude": -9.181519,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661080709,
      "ems": null
    },
    {
      "latitude": 38.529285,
      "longitude": -9.181763,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661080712,
      "ems": null
    },
    {
      "latitude": 38.530106,
      "longitude": -9.182003,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661080714,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -9.182312,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661080718,
      "ems": null
    },
    {
      "latitude": 38.533009,
      "longitude": -9.182739,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661080722,
      "ems": null
    },
    {
      "latitude": 38.533939,
      "longitude": -9.182983,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661080726,
      "ems": null
    },
    {
      "latitude": 38.535057,
      "longitude": -9.18335,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661080728,
      "ems": null
    },
    {
      "latitude": 38.537155,
      "longitude": -9.184033,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661080734,
      "ems": null
    },
    {
      "latitude": 38.539169,
      "longitude": -9.18469,
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
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661080741,
      "ems": null
    },
    {
      "latitude": 38.541248,
      "longitude": -9.185303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661080747,
      "ems": null
    },
    {
      "latitude": 38.543518,
      "longitude": -9.186063,
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
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661080753,
      "ems": null
    },
    {
      "latitude": 38.545673,
      "longitude": -9.186584,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661080758,
      "ems": null
    },
    {
      "latitude": 38.547821,
      "longitude": -9.187138,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661080764,
      "ems": null
    },
    {
      "latitude": 38.550064,
      "longitude": -9.187735,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661080771,
      "ems": null
    },
    {
      "latitude": 38.55217,
      "longitude": -9.188452,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661080777,
      "ems": null
    },
    {
      "latitude": 38.552811,
      "longitude": -9.18869,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661080779,
      "ems": null
    },
    {
      "latitude": 38.554096,
      "longitude": -9.189392,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 337,
      "squawk": "3224",
      "timestamp": 1661080783,
      "ems": null
    },
    {
      "latitude": 38.555122,
      "longitude": -9.18988,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "3224",
      "timestamp": 1661080786,
      "ems": null
    },
    {
      "latitude": 38.556145,
      "longitude": -9.190369,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661080788,
      "ems": null
    },
    {
      "latitude": 38.557205,
      "longitude": -9.19084,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661080791,
      "ems": null
    },
    {
      "latitude": 38.559311,
      "longitude": -9.191616,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661080797,
      "ems": null
    },
    {
      "latitude": 38.561462,
      "longitude": -9.192213,
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
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661080804,
      "ems": null
    },
    {
      "latitude": 38.562378,
      "longitude": -9.192451,
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661080807,
      "ems": null
    },
    {
      "latitude": 38.564617,
      "longitude": -9.193481,
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
      "heading": 336,
      "squawk": "3224",
      "timestamp": 1661080813,
      "ems": null
    },
    {
      "latitude": 38.566433,
      "longitude": -9.194397,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661080819,
      "ems": null
    },
    {
      "latitude": 38.568787,
      "longitude": -9.195437,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661080825,
      "ems": null
    },
    {
      "latitude": 38.569794,
      "longitude": -9.195915,
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
      "heading": 339,
      "squawk": "3224",
      "timestamp": 1661080828,
      "ems": null
    },
    {
      "latitude": 38.570763,
      "longitude": -9.196472,
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
      "heading": 334,
      "squawk": "3224",
      "timestamp": 1661080831,
      "ems": null
    },
    {
      "latitude": 38.571743,
      "longitude": -9.197144,
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
      "heading": 328,
      "squawk": "3224",
      "timestamp": 1661080834,
      "ems": null
    },
    {
      "latitude": 38.572533,
      "longitude": -9.197815,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661080837,
      "ems": null
    },
    {
      "latitude": 38.573639,
      "longitude": -9.1989,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080840,
      "ems": null
    },
    {
      "latitude": 38.574371,
      "longitude": -9.199796,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661080843,
      "ems": null
    },
    {
      "latitude": 38.575092,
      "longitude": -9.200684,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080845,
      "ems": null
    },
    {
      "latitude": 38.576069,
      "longitude": -9.201782,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080849,
      "ems": null
    },
    {
      "latitude": 38.576935,
      "longitude": -9.202841,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080852,
      "ems": null
    },
    {
      "latitude": 38.577667,
      "longitude": -9.203736,
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
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080855,
      "ems": null
    },
    {
      "latitude": 38.578583,
      "longitude": -9.204692,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661080858,
      "ems": null
    },
    {
      "latitude": 38.57933,
      "longitude": -9.205505,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661080861,
      "ems": null
    },
    {
      "latitude": 38.580074,
      "longitude": -9.206421,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080863,
      "ems": null
    },
    {
      "latitude": 38.580322,
      "longitude": -9.206722,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661080864,
      "ems": null
    },
    {
      "latitude": 38.581467,
      "longitude": -9.208155,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661080869,
      "ems": null
    },
    {
      "latitude": 38.583939,
      "longitude": -9.211243,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080879,
      "ems": null
    },
    {
      "latitude": 38.585476,
      "longitude": -9.213013,
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
      "squawk": "3224",
      "timestamp": 1661080884,
      "ems": null
    },
    {
      "latitude": 38.586868,
      "longitude": -9.214664,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080890,
      "ems": null
    },
    {
      "latitude": 38.588406,
      "longitude": -9.216614,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080897,
      "ems": null
    },
    {
      "latitude": 38.590027,
      "longitude": -9.218425,
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
      "heading": 320,
      "squawk": "3224",
      "timestamp": 1661080902,
      "ems": null
    },
    {
      "latitude": 38.591572,
      "longitude": -9.220154,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080908,
      "ems": null
    },
    {
      "latitude": 38.593155,
      "longitude": -9.222107,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080915,
      "ems": null
    },
    {
      "latitude": 38.594788,
      "longitude": -9.223859,
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
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661080921,
      "ems": null
    },
    {
      "latitude": 38.595715,
      "longitude": -9.224731,
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
      "heading": 322,
      "squawk": "3224",
      "timestamp": 1661080924,
      "ems": null
    },
    {
      "latitude": 38.596481,
      "longitude": -9.225471,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "3224",
      "timestamp": 1661080926,
      "ems": null
    },
    {
      "latitude": 38.597305,
      "longitude": -9.226247,
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
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661080930,
      "ems": null
    },
    {
      "latitude": 38.598183,
      "longitude": -9.22699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661080933,
      "ems": null
    },
    {
      "latitude": 38.599045,
      "longitude": -9.227679,
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
      "heading": 326,
      "squawk": "3224",
      "timestamp": 1661080936,
      "ems": null
    },
    {
      "latitude": 38.599953,
      "longitude": -9.228516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "3224",
      "timestamp": 1661080939,
      "ems": null
    },
    {
      "latitude": 38.600739,
      "longitude": -9.229232,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "3224",
      "timestamp": 1661080942,
      "ems": null
    },
    {
      "latitude": 38.602188,
      "longitude": -9.231018,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "3224",
      "timestamp": 1661080948,
      "ems": null
    },
    {
      "latitude": 38.602932,
      "longitude": -9.232056,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "3224",
      "timestamp": 1661080951,
      "ems": null
    },
    {
      "latitude": 38.603676,
      "longitude": -9.232971,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661080954,
      "ems": null
    },
    {
      "latitude": 38.604374,
      "longitude": -9.233826,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080957,
      "ems": null
    },
    {
      "latitude": 38.605072,
      "longitude": -9.234741,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661080960,
      "ems": null
    },
    {
      "latitude": 38.605728,
      "longitude": -9.235561,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "3224",
      "timestamp": 1661080963,
      "ems": null
    },
    {
      "latitude": 38.606369,
      "longitude": -9.236397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661080966,
      "ems": null
    },
    {
      "latitude": 38.607193,
      "longitude": -9.237352,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661080969,
      "ems": null
    },
    {
      "latitude": 38.608612,
      "longitude": -9.239014,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "3224",
      "timestamp": 1661080975,
      "ems": null
    },
    {
      "latitude": 38.609344,
      "longitude": -9.2398,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080978,
      "ems": null
    },
    {
      "latitude": 38.610031,
      "longitude": -9.240517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080981,
      "ems": null
    },
    {
      "latitude": 38.61145,
      "longitude": -9.242065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661080987,
      "ems": null
    },
    {
      "latitude": 38.613407,
      "longitude": -9.244385,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "3224",
      "timestamp": 1661080995,
      "ems": null
    },
    {
      "latitude": 38.6147,
      "longitude": -9.245891,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661081001,
      "ems": null
    },
    {
      "latitude": 38.616623,
      "longitude": -9.248159,
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
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661081008,
      "ems": null
    },
    {
      "latitude": 38.617596,
      "longitude": -9.249268,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "3224",
      "timestamp": 1661081014,
      "ems": null
    },
    {
      "latitude": 38.619736,
      "longitude": -9.251953,
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
      "heading": 315,
      "squawk": "3224",
      "timestamp": 1661081020,
      "ems": null
    },
    {
      "latitude": 38.621086,
      "longitude": -9.253723,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661081026,
      "ems": null
    },
    {
      "latitude": 38.621925,
      "longitude": -9.254822,
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
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661081029,
      "ems": null
    },
    {
      "latitude": 38.622669,
      "longitude": -9.255798,
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
      "heading": 313,
      "squawk": "3224",
      "timestamp": 1661081032,
      "ems": null
    },
    {
      "latitude": 38.647156,
      "longitude": -9.287231,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 324,
      "squawk": "3276",
      "timestamp": 1661081140,
      "ems": null
    },
    {
      "latitude": 38.651093,
      "longitude": -9.290792,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "3276",
      "timestamp": 1661081155,
      "ems": null
    },
    {
      "latitude": 38.652786,
      "longitude": -9.292224,
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
      "heading": 325,
      "squawk": "3276",
      "timestamp": 1661081161,
      "ems": null
    },
    {
      "latitude": 38.654419,
      "longitude": -9.293579,
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
      "heading": 327,
      "squawk": "3276",
      "timestamp": 1661081167,
      "ems": null
    },
    {
      "latitude": 38.656372,
      "longitude": -9.295532,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 314,
      "squawk": "3276",
      "timestamp": 1661081174,
      "ems": null
    },
    {
      "latitude": 38.656998,
      "longitude": -9.296523,
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
      "heading": 306,
      "squawk": "3276",
      "timestamp": 1661081177,
      "ems": null
    },
    {
      "latitude": 38.657398,
      "longitude": -9.297363,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "3276",
      "timestamp": 1661081180,
      "ems": null
    },
    {
      "latitude": 38.657818,
      "longitude": -9.298401,
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
      "heading": 298,
      "squawk": "3276",
      "timestamp": 1661081183,
      "ems": null
    },
    {
      "latitude": 38.658279,
      "longitude": -9.299449,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 298,
      "squawk": "3276",
      "timestamp": 1661081186,
      "ems": null
    },
    {
      "latitude": 38.658981,
      "longitude": -9.301086,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3276",
      "timestamp": 1661081189,
      "ems": null
    },
    {
      "latitude": 38.659424,
      "longitude": -9.302315,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 296,
      "squawk": "3224",
      "timestamp": 1661081192,
      "ems": null
    },
    {
      "latitude": 38.659927,
      "longitude": -9.303569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "3224",
      "timestamp": 1661081195,
      "ems": null
    },
    {
      "latitude": 38.660248,
      "longitude": -9.304464,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081197,
      "ems": null
    },
    {
      "latitude": 38.660702,
      "longitude": -9.305664,
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
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661081201,
      "ems": null
    },
    {
      "latitude": 38.661346,
      "longitude": -9.30757,
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
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661081204,
      "ems": null
    },
    {
      "latitude": 38.66185,
      "longitude": -9.308883,
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
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081207,
      "ems": null
    },
    {
      "latitude": 38.662239,
      "longitude": -9.309937,
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
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081210,
      "ems": null
    },
    {
      "latitude": 38.663261,
      "longitude": -9.312744,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 294,
      "squawk": "3224",
      "timestamp": 1661081216,
      "ems": null
    },
    {
      "latitude": 38.663914,
      "longitude": -9.314453,
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
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081220,
      "ems": null
    },
    {
      "latitude": 38.665077,
      "longitude": -9.317932,
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
      "heading": 292,
      "squawk": "3224",
      "timestamp": 1661081228,
      "ems": null
    },
    {
      "latitude": 38.666008,
      "longitude": -9.320557,
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
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081234,
      "ems": null
    },
    {
      "latitude": 38.666977,
      "longitude": -9.323153,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 295,
      "squawk": "3224",
      "timestamp": 1661081240,
      "ems": null
    },
    {
      "latitude": 38.667892,
      "longitude": -9.32584,
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
      "heading": 291,
      "squawk": "3224",
      "timestamp": 1661081246,
      "ems": null
    },
    {
      "latitude": 38.668304,
      "longitude": -9.327213,
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
      "heading": 289,
      "squawk": "3224",
      "timestamp": 1661081249,
      "ems": null
    },
    {
      "latitude": 38.669083,
      "longitude": -9.329956,
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
      "heading": 290,
      "squawk": "3224",
      "timestamp": 1661081255,
      "ems": null
    },
    {
      "latitude": 38.669815,
      "longitude": -9.332527,
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
      "heading": 290,
      "squawk": "3224",
      "timestamp": 1661081261,
      "ems": null
    },
    {
      "latitude": 38.670685,
      "longitude": -9.334975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3224",
      "timestamp": 1661081267,
      "ems": null
    },
    {
      "latitude": 38.671223,
      "longitude": -9.336121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 304,
      "squawk": "3224",
      "timestamp": 1661081270,
      "ems": null
    },
    {
      "latitude": 38.671875,
      "longitude": -9.337066,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "3224",
      "timestamp": 1661081273,
      "ems": null
    },
    {
      "latitude": 38.672665,
      "longitude": -9.337646,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "3224",
      "timestamp": 1661081276,
      "ems": null
    },
    {
      "latitude": 38.673504,
      "longitude": -9.338013,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661081279,
      "ems": null
    },
    {
      "latitude": 38.674343,
      "longitude": -9.338196,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661081281,
      "ems": null
    },
    {
      "latitude": 38.675354,
      "longitude": -9.338319,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 351,
      "squawk": "3224",
      "timestamp": 1661081285,
      "ems": null
    },
    {
      "latitude": 38.67627,
      "longitude": -9.338617,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661081288,
      "ems": null
    },
    {
      "latitude": 38.676956,
      "longitude": -9.338797,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661081291,
      "ems": null
    },
    {
      "latitude": 38.677826,
      "longitude": -9.339036,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081294,
      "ems": null
    },
    {
      "latitude": 38.678467,
      "longitude": -9.339334,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081297,
      "ems": null
    },
    {
      "latitude": 38.679138,
      "longitude": -9.339539,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661081300,
      "ems": null
    },
    {
      "latitude": 38.679794,
      "longitude": -9.339692,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661081303,
      "ems": null
    },
    {
      "latitude": 38.680527,
      "longitude": -9.339812,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661081306,
      "ems": null
    },
    {
      "latitude": 38.681789,
      "longitude": -9.340088,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661081312,
      "ems": null
    },
    {
      "latitude": 38.683182,
      "longitude": -9.340409,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 348,
      "squawk": "3224",
      "timestamp": 1661081318,
      "ems": null
    },
    {
      "latitude": 38.684509,
      "longitude": -9.340708,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 350,
      "squawk": "3224",
      "timestamp": 1661081324,
      "ems": null
    },
    {
      "latitude": 38.685928,
      "longitude": -9.341245,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081330,
      "ems": null
    },
    {
      "latitude": 38.686447,
      "longitude": -9.341431,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661081333,
      "ems": null
    },
    {
      "latitude": 38.687145,
      "longitude": -9.341736,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661081336,
      "ems": null
    },
    {
      "latitude": 38.687702,
      "longitude": -9.34198,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081339,
      "ems": null
    },
    {
      "latitude": 38.688309,
      "longitude": -9.3422,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081342,
      "ems": null
    },
    {
      "latitude": 38.68895,
      "longitude": -9.342439,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081345,
      "ems": null
    },
    {
      "latitude": 38.690231,
      "longitude": -9.342857,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081351,
      "ems": null
    },
    {
      "latitude": 38.691696,
      "longitude": -9.343275,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661081357,
      "ems": null
    },
    {
      "latitude": 38.692406,
      "longitude": -9.343445,
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661081360,
      "ems": null
    },
    {
      "latitude": 38.693939,
      "longitude": -9.344055,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081366,
      "ems": null
    },
    {
      "latitude": 38.695431,
      "longitude": -9.344666,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081372,
      "ems": null
    },
    {
      "latitude": 38.69696,
      "longitude": -9.345245,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081378,
      "ems": null
    },
    {
      "latitude": 38.698364,
      "longitude": -9.345703,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "3224",
      "timestamp": 1661081384,
      "ems": null
    },
    {
      "latitude": 38.699947,
      "longitude": -9.34613,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661081390,
      "ems": null
    },
    {
      "latitude": 38.701481,
      "longitude": -9.34668,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081396,
      "ems": null
    },
    {
      "latitude": 38.702927,
      "longitude": -9.347168,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081402,
      "ems": null
    },
    {
      "latitude": 38.703995,
      "longitude": -9.347656,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081407,
      "ems": null
    },
    {
      "latitude": 38.705441,
      "longitude": -9.348145,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661081412,
      "ems": null
    },
    {
      "latitude": 38.706985,
      "longitude": -9.348649,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661081419,
      "ems": null
    },
    {
      "latitude": 38.708466,
      "longitude": -9.349182,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081425,
      "ems": null
    },
    {
      "latitude": 38.709732,
      "longitude": -9.349664,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 340,
      "squawk": "3224",
      "timestamp": 1661081431,
      "ems": null
    },
    {
      "latitude": 38.711025,
      "longitude": -9.350159,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661081437,
      "ems": null
    },
    {
      "latitude": 38.712387,
      "longitude": -9.350619,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081443,
      "ems": null
    },
    {
      "latitude": 38.713074,
      "longitude": -9.350891,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 341,
      "squawk": "3224",
      "timestamp": 1661081446,
      "ems": null
    },
    {
      "latitude": 38.714493,
      "longitude": -9.351396,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 347,
      "squawk": "3224",
      "timestamp": 1661081452,
      "ems": null
    },
    {
      "latitude": 38.716007,
      "longitude": -9.351929,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081458,
      "ems": null
    },
    {
      "latitude": 38.717606,
      "longitude": -9.35247,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 346,
      "squawk": "3224",
      "timestamp": 1661081464,
      "ems": null
    },
    {
      "latitude": 38.719173,
      "longitude": -9.353088,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "3224",
      "timestamp": 1661081470,
      "ems": null
    },
    {
      "latitude": 38.720627,
      "longitude": -9.353604,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 343,
      "squawk": "3224",
      "timestamp": 1661081477,
      "ems": null
    },
    {
      "latitude": 38.721687,
      "longitude": -9.354004,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3224",
      "timestamp": 1661081483,
      "ems": null
    },
    {
      "latitude": 38.722431,
      "longitude": -9.354248,
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
      "heading": 342,
      "squawk": "3224",
      "timestamp": 1661081489,
      "ems": null
    },
    {
      "latitude": 38.722862,
      "longitude": -9.35437,
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
      "heading": 354,
      "squawk": "3224",
      "timestamp": 1661081495,
      "ems": null
    },
    {
      "latitude": 38.723099,
      "longitude": -9.354246,
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
      "heading": 56,
      "squawk": "3224",
      "timestamp": 1661081502,
      "ems": null
    },
    {
      "latitude": 38.723167,
      "longitude": -9.354037,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 11.1,
        "kts": 6,
        "mph": 6.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "3224",
      "timestamp": 1661081507,
      "ems": null
    },
    {
      "latitude": 38.723225,
      "longitude": -9.353784,
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
      "heading": 70,
      "squawk": "3224",
      "timestamp": 1661081513,
      "ems": null
    },
    {
      "latitude": 38.72327,
      "longitude": -9.353575,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 11.1,
        "kts": 6,
        "mph": 6.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "3224",
      "timestamp": 1661081519,
      "ems": null
    },
    {
      "latitude": 38.723328,
      "longitude": -9.353366,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 1.9,
        "kts": 1,
        "mph": 1.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "3224",
      "timestamp": 1661081528,
      "ems": null
    }
  ],
};