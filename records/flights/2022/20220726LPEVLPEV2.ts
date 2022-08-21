import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220726LPEVLPEV2",
    callsign: "CSDHS",
    name: "RVP050 RWY01",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 26, 21, 0).getTime(),
    arrival: new Date(2022, 6, 26, 22, 0).getTime(),
    singleEnginePistonTime: 60,
    picTime: 60,
    dualTime: 0,
    nightTime: 60,
    landings: {
      day: 0,
      night: 5,
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
      name: "Evora Aerodrome",
      code: "LPEV",
      position: {
        latitude: 38.5353648,
        longitude: -7.8925403,
      },
    },
  },
  track: [
    {
      "latitude": 38.52784,
      "longitude": -7.88999,
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
      "heading": 272,
      "squawk": "0",
      "timestamp": 1658870330,
      "ems": null
    },
    {
      "latitude": 38.52792,
      "longitude": -7.890199,
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
      "heading": 326,
      "squawk": "0",
      "timestamp": 1658870336,
      "ems": null
    },
    {
      "latitude": 38.528137,
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
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658870343,
      "ems": null
    },
    {
      "latitude": 38.528378,
      "longitude": -7.890182,
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
      "heading": 2,
      "squawk": "0",
      "timestamp": 1658870362,
      "ems": null
    },
    {
      "latitude": 38.528587,
      "longitude": -7.890167,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658870364,
      "ems": null
    },
    {
      "latitude": 38.528961,
      "longitude": -7.890124,
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
      "heading": 5,
      "squawk": "0",
      "timestamp": 1658870367,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -7.889954,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658870377,
      "ems": null
    },
    {
      "latitude": 38.533035,
      "longitude": -7.889855,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658870382,
      "ems": null
    },
    {
      "latitude": 38.535244,
      "longitude": -7.889526,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870390,
      "ems": null
    },
    {
      "latitude": 38.536594,
      "longitude": -7.889343,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658870395,
      "ems": null
    },
    {
      "latitude": 38.538967,
      "longitude": -7.889282,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658870404,
      "ems": null
    },
    {
      "latitude": 38.541946,
      "longitude": -7.889221,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658870416,
      "ems": null
    },
    {
      "latitude": 38.543438,
      "longitude": -7.888794,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658870422,
      "ems": null
    },
    {
      "latitude": 38.546494,
      "longitude": -7.888243,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658870432,
      "ems": null
    },
    {
      "latitude": 38.54805,
      "longitude": -7.887945,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658870438,
      "ems": null
    },
    {
      "latitude": 38.549629,
      "longitude": -7.887573,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658870443,
      "ems": null
    },
    {
      "latitude": 38.552654,
      "longitude": -7.886658,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1658870454,
      "ems": null
    },
    {
      "latitude": 38.553448,
      "longitude": -7.885864,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1658870457,
      "ems": null
    },
    {
      "latitude": 38.554138,
      "longitude": -7.884601,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1658870461,
      "ems": null
    },
    {
      "latitude": 38.55455,
      "longitude": -7.883168,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1658870464,
      "ems": null
    },
    {
      "latitude": 38.554688,
      "longitude": -7.881616,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1658870467,
      "ems": null
    },
    {
      "latitude": 38.554642,
      "longitude": -7.880302,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1658870469,
      "ems": null
    },
    {
      "latitude": 38.554379,
      "longitude": -7.878235,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658870473,
      "ems": null
    },
    {
      "latitude": 38.554096,
      "longitude": -7.876587,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1658870476,
      "ems": null
    },
    {
      "latitude": 38.553772,
      "longitude": -7.87469,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1658870479,
      "ems": null
    },
    {
      "latitude": 38.55336,
      "longitude": -7.872779,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658870482,
      "ems": null
    },
    {
      "latitude": 38.552994,
      "longitude": -7.870928,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658870485,
      "ems": null
    },
    {
      "latitude": 38.552582,
      "longitude": -7.869137,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1658870488,
      "ems": null
    },
    {
      "latitude": 38.552124,
      "longitude": -7.867226,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1658870491,
      "ems": null
    },
    {
      "latitude": 38.551712,
      "longitude": -7.865614,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1658870494,
      "ems": null
    },
    {
      "latitude": 38.551254,
      "longitude": -7.863883,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1658870497,
      "ems": null
    },
    {
      "latitude": 38.550842,
      "longitude": -7.862151,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1658870500,
      "ems": null
    },
    {
      "latitude": 38.55043,
      "longitude": -7.860538,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1658870502,
      "ems": null
    },
    {
      "latitude": 38.550064,
      "longitude": -7.859106,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1658870505,
      "ems": null
    },
    {
      "latitude": 38.549301,
      "longitude": -7.856934,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658870509,
      "ems": null
    },
    {
      "latitude": 38.548557,
      "longitude": -7.855591,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1658870511,
      "ems": null
    },
    {
      "latitude": 38.547302,
      "longitude": -7.853882,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1658870515,
      "ems": null
    },
    {
      "latitude": 38.546951,
      "longitude": -7.853493,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1658870516,
      "ems": null
    },
    {
      "latitude": 38.5448,
      "longitude": -7.851821,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1658870521,
      "ems": null
    },
    {
      "latitude": 38.542412,
      "longitude": -7.850647,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1658870525,
      "ems": null
    },
    {
      "latitude": 38.540543,
      "longitude": -7.85015,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1658870530,
      "ems": null
    },
    {
      "latitude": 38.537991,
      "longitude": -7.849854,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658870535,
      "ems": null
    },
    {
      "latitude": 38.535755,
      "longitude": -7.849976,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658870540,
      "ems": null
    },
    {
      "latitude": 38.533401,
      "longitude": -7.85009,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658870546,
      "ems": null
    },
    {
      "latitude": 38.531433,
      "longitude": -7.85015,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658870550,
      "ems": null
    },
    {
      "latitude": 38.529877,
      "longitude": -7.850209,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658870554,
      "ems": null
    },
    {
      "latitude": 38.528687,
      "longitude": -7.850328,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658870557,
      "ems": null
    },
    {
      "latitude": 38.527611,
      "longitude": -7.850403,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658870559,
      "ems": null
    },
    {
      "latitude": 38.524723,
      "longitude": -7.850647,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658870566,
      "ems": null
    },
    {
      "latitude": 38.522209,
      "longitude": -7.850891,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658870572,
      "ems": null
    },
    {
      "latitude": 38.519485,
      "longitude": -7.851164,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658870578,
      "ems": null
    },
    {
      "latitude": 38.517879,
      "longitude": -7.851318,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658870582,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -7.852,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658870594,
      "ems": null
    },
    {
      "latitude": 38.509598,
      "longitude": -7.852478,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658870601,
      "ems": null
    },
    {
      "latitude": 38.507401,
      "longitude": -7.852836,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658870606,
      "ems": null
    },
    {
      "latitude": 38.505844,
      "longitude": -7.853075,
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
      "timestamp": 1658870610,
      "ems": null
    },
    {
      "latitude": 38.502686,
      "longitude": -7.853433,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658870619,
      "ems": null
    },
    {
      "latitude": 38.500237,
      "longitude": -7.853699,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658870625,
      "ems": null
    },
    {
      "latitude": 38.497742,
      "longitude": -7.854031,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658870631,
      "ems": null
    },
    {
      "latitude": 38.495537,
      "longitude": -7.854675,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1658870637,
      "ems": null
    },
    {
      "latitude": 38.494812,
      "longitude": -7.855165,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1658870639,
      "ems": null
    },
    {
      "latitude": 38.494278,
      "longitude": -7.855591,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1658870641,
      "ems": null
    },
    {
      "latitude": 38.49321,
      "longitude": -7.857076,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1658870646,
      "ems": null
    },
    {
      "latitude": 38.492752,
      "longitude": -7.85821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1658870649,
      "ems": null
    },
    {
      "latitude": 38.492569,
      "longitude": -7.859225,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1658870652,
      "ems": null
    },
    {
      "latitude": 38.492523,
      "longitude": -7.86018,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658870655,
      "ems": null
    },
    {
      "latitude": 38.492558,
      "longitude": -7.861023,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658870658,
      "ems": null
    },
    {
      "latitude": 38.492603,
      "longitude": -7.862,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658870661,
      "ems": null
    },
    {
      "latitude": 38.492661,
      "longitude": -7.862867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658870664,
      "ems": null
    },
    {
      "latitude": 38.492649,
      "longitude": -7.86377,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658870667,
      "ems": null
    },
    {
      "latitude": 38.492649,
      "longitude": -7.864685,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658870670,
      "ems": null
    },
    {
      "latitude": 38.492661,
      "longitude": -7.865674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658870673,
      "ems": null
    },
    {
      "latitude": 38.492661,
      "longitude": -7.86645,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658870676,
      "ems": null
    },
    {
      "latitude": 38.492741,
      "longitude": -7.867371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658870679,
      "ems": null
    },
    {
      "latitude": 38.492836,
      "longitude": -7.869324,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658870685,
      "ems": null
    },
    {
      "latitude": 38.492981,
      "longitude": -7.871107,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658870691,
      "ems": null
    },
    {
      "latitude": 38.493073,
      "longitude": -7.872958,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658870697,
      "ems": null
    },
    {
      "latitude": 38.49316,
      "longitude": -7.87384,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658870700,
      "ems": null
    },
    {
      "latitude": 38.493256,
      "longitude": -7.874869,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658870703,
      "ems": null
    },
    {
      "latitude": 38.493347,
      "longitude": -7.875671,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658870706,
      "ems": null
    },
    {
      "latitude": 38.49358,
      "longitude": -7.877563,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658870713,
      "ems": null
    },
    {
      "latitude": 38.493721,
      "longitude": -7.878357,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658870715,
      "ems": null
    },
    {
      "latitude": 38.493851,
      "longitude": -7.879287,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658870719,
      "ems": null
    },
    {
      "latitude": 38.49408,
      "longitude": -7.881019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658870724,
      "ems": null
    },
    {
      "latitude": 38.494217,
      "longitude": -7.881855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658870727,
      "ems": null
    },
    {
      "latitude": 38.49437,
      "longitude": -7.882629,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658870730,
      "ems": null
    },
    {
      "latitude": 38.494537,
      "longitude": -7.883586,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658870734,
      "ems": null
    },
    {
      "latitude": 38.494884,
      "longitude": -7.885193,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658870739,
      "ems": null
    },
    {
      "latitude": 38.495178,
      "longitude": -7.88693,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658870745,
      "ems": null
    },
    {
      "latitude": 38.495396,
      "longitude": -7.887756,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1658870749,
      "ems": null
    },
    {
      "latitude": 38.495674,
      "longitude": -7.88855,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1658870752,
      "ems": null
    },
    {
      "latitude": 38.496002,
      "longitude": -7.889221,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1658870755,
      "ems": null
    },
    {
      "latitude": 38.496323,
      "longitude": -7.889796,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1658870758,
      "ems": null
    },
    {
      "latitude": 38.496872,
      "longitude": -7.890512,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1658870760,
      "ems": null
    },
    {
      "latitude": 38.49733,
      "longitude": -7.891049,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1658870764,
      "ems": null
    },
    {
      "latitude": 38.497768,
      "longitude": -7.891541,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1658870767,
      "ems": null
    },
    {
      "latitude": 38.498516,
      "longitude": -7.89209,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1658870770,
      "ems": null
    },
    {
      "latitude": 38.499023,
      "longitude": -7.892303,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1658870772,
      "ems": null
    },
    {
      "latitude": 38.49963,
      "longitude": -7.892395,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1658870776,
      "ems": null
    },
    {
      "latitude": 38.500469,
      "longitude": -7.892395,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658870778,
      "ems": null
    },
    {
      "latitude": 38.501587,
      "longitude": -7.892334,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658870783,
      "ems": null
    },
    {
      "latitude": 38.502892,
      "longitude": -7.892395,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1658870788,
      "ems": null
    },
    {
      "latitude": 38.504059,
      "longitude": -7.892483,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658870793,
      "ems": null
    },
    {
      "latitude": 38.505589,
      "longitude": -7.892395,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658870799,
      "ems": null
    },
    {
      "latitude": 38.507126,
      "longitude": -7.892273,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658870805,
      "ems": null
    },
    {
      "latitude": 38.509968,
      "longitude": -7.89209,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870815,
      "ems": null
    },
    {
      "latitude": 38.512711,
      "longitude": -7.891885,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870826,
      "ems": null
    },
    {
      "latitude": 38.515694,
      "longitude": -7.891541,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658870837,
      "ems": null
    },
    {
      "latitude": 38.517136,
      "longitude": -7.891357,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870842,
      "ems": null
    },
    {
      "latitude": 38.520069,
      "longitude": -7.891052,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658870853,
      "ems": null
    },
    {
      "latitude": 38.523148,
      "longitude": -7.890751,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658870864,
      "ems": null
    },
    {
      "latitude": 38.526028,
      "longitude": -7.890442,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658870875,
      "ems": null
    },
    {
      "latitude": 38.527798,
      "longitude": -7.890259,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870880,
      "ems": null
    },
    {
      "latitude": 38.530636,
      "longitude": -7.890015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658870891,
      "ems": null
    },
    {
      "latitude": 38.533218,
      "longitude": -7.889736,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658870902,
      "ems": null
    },
    {
      "latitude": 38.536377,
      "longitude": -7.889438,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658870913,
      "ems": null
    },
    {
      "latitude": 38.538528,
      "longitude": -7.889139,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658870921,
      "ems": null
    },
    {
      "latitude": 38.542366,
      "longitude": -7.888611,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658870935,
      "ems": null
    },
    {
      "latitude": 38.545113,
      "longitude": -7.888062,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658870946,
      "ems": null
    },
    {
      "latitude": 38.547859,
      "longitude": -7.887756,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658870957,
      "ems": null
    },
    {
      "latitude": 38.549332,
      "longitude": -7.887765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658870963,
      "ems": null
    },
    {
      "latitude": 38.550934,
      "longitude": -7.887587,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658870968,
      "ems": null
    },
    {
      "latitude": 38.55249,
      "longitude": -7.887288,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1658870974,
      "ems": null
    },
    {
      "latitude": 38.554146,
      "longitude": -7.886658,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1658870979,
      "ems": null
    },
    {
      "latitude": 38.555496,
      "longitude": -7.885803,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1658870984,
      "ems": null
    },
    {
      "latitude": 38.556335,
      "longitude": -7.8849,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1658870987,
      "ems": null
    },
    {
      "latitude": 38.556984,
      "longitude": -7.883606,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1658870991,
      "ems": null
    },
    {
      "latitude": 38.557343,
      "longitude": -7.882511,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1658870994,
      "ems": null
    },
    {
      "latitude": 38.557541,
      "longitude": -7.880554,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1658870997,
      "ems": null
    },
    {
      "latitude": 38.55748,
      "longitude": -7.878989,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1658871000,
      "ems": null
    },
    {
      "latitude": 38.557159,
      "longitude": -7.876899,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1658871003,
      "ems": null
    },
    {
      "latitude": 38.556793,
      "longitude": -7.875048,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658871006,
      "ems": null
    },
    {
      "latitude": 38.556427,
      "longitude": -7.873316,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658871009,
      "ems": null
    },
    {
      "latitude": 38.556099,
      "longitude": -7.871765,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658871012,
      "ems": null
    },
    {
      "latitude": 38.555729,
      "longitude": -7.870056,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658871015,
      "ems": null
    },
    {
      "latitude": 38.555401,
      "longitude": -7.868408,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658871018,
      "ems": null
    },
    {
      "latitude": 38.555027,
      "longitude": -7.86676,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658871021,
      "ems": null
    },
    {
      "latitude": 38.554688,
      "longitude": -7.865136,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1658871024,
      "ems": null
    },
    {
      "latitude": 38.554184,
      "longitude": -7.863285,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1658871027,
      "ems": null
    },
    {
      "latitude": 38.553635,
      "longitude": -7.861852,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1658871030,
      "ems": null
    },
    {
      "latitude": 38.552933,
      "longitude": -7.860596,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1658871033,
      "ems": null
    },
    {
      "latitude": 38.551895,
      "longitude": -7.859344,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1658871035,
      "ems": null
    },
    {
      "latitude": 38.551483,
      "longitude": -7.858986,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1658871037,
      "ems": null
    },
    {
      "latitude": 38.548744,
      "longitude": -7.857483,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1658871043,
      "ems": null
    },
    {
      "latitude": 38.546494,
      "longitude": -7.857255,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658871048,
      "ems": null
    },
    {
      "latitude": 38.545074,
      "longitude": -7.857255,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658871051,
      "ems": null
    },
    {
      "latitude": 38.543747,
      "longitude": -7.857255,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658871054,
      "ems": null
    },
    {
      "latitude": 38.542419,
      "longitude": -7.857255,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658871057,
      "ems": null
    },
    {
      "latitude": 38.541061,
      "longitude": -7.857178,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1658871060,
      "ems": null
    },
    {
      "latitude": 38.538483,
      "longitude": -7.857076,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658871066,
      "ems": null
    },
    {
      "latitude": 38.537384,
      "longitude": -7.856956,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658871069,
      "ems": null
    },
    {
      "latitude": 38.535801,
      "longitude": -7.856873,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658871072,
      "ems": null
    },
    {
      "latitude": 38.53331,
      "longitude": -7.856717,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1658871078,
      "ems": null
    },
    {
      "latitude": 38.530884,
      "longitude": -7.856598,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1658871084,
      "ems": null
    },
    {
      "latitude": 38.528122,
      "longitude": -7.856628,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1658871090,
      "ems": null
    },
    {
      "latitude": 38.526863,
      "longitude": -7.856689,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871093,
      "ems": null
    },
    {
      "latitude": 38.525436,
      "longitude": -7.856777,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871096,
      "ems": null
    },
    {
      "latitude": 38.52449,
      "longitude": -7.856873,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658871099,
      "ems": null
    },
    {
      "latitude": 38.522873,
      "longitude": -7.857016,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871102,
      "ems": null
    },
    {
      "latitude": 38.521603,
      "longitude": -7.857178,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658871105,
      "ems": null
    },
    {
      "latitude": 38.52058,
      "longitude": -7.8573,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658871108,
      "ems": null
    },
    {
      "latitude": 38.519974,
      "longitude": -7.857361,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658871109,
      "ems": null
    },
    {
      "latitude": 38.518578,
      "longitude": -7.857605,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658871113,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -7.857849,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658871116,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -7.858093,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658871119,
      "ems": null
    },
    {
      "latitude": 38.514725,
      "longitude": -7.858389,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658871122,
      "ems": null
    },
    {
      "latitude": 38.513901,
      "longitude": -7.858568,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658871125,
      "ems": null
    },
    {
      "latitude": 38.512344,
      "longitude": -7.858926,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658871127,
      "ems": null
    },
    {
      "latitude": 38.509644,
      "longitude": -7.859404,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658871134,
      "ems": null
    },
    {
      "latitude": 38.507267,
      "longitude": -7.859741,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658871140,
      "ems": null
    },
    {
      "latitude": 38.505432,
      "longitude": -7.860061,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658871146,
      "ems": null
    },
    {
      "latitude": 38.50383,
      "longitude": -7.860479,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1658871149,
      "ems": null
    },
    {
      "latitude": 38.502823,
      "longitude": -7.861016,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1658871152,
      "ems": null
    },
    {
      "latitude": 38.50182,
      "longitude": -7.861877,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1658871155,
      "ems": null
    },
    {
      "latitude": 38.501083,
      "longitude": -7.862808,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1658871158,
      "ems": null
    },
    {
      "latitude": 38.500843,
      "longitude": -7.863281,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1658871160,
      "ems": null
    },
    {
      "latitude": 38.500443,
      "longitude": -7.864778,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1658871164,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -7.865733,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658871167,
      "ems": null
    },
    {
      "latitude": 38.500378,
      "longitude": -7.866577,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658871170,
      "ems": null
    },
    {
      "latitude": 38.500332,
      "longitude": -7.867432,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658871173,
      "ems": null
    },
    {
      "latitude": 38.500259,
      "longitude": -7.868241,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658871176,
      "ems": null
    },
    {
      "latitude": 38.500259,
      "longitude": -7.869256,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658871179,
      "ems": null
    },
    {
      "latitude": 38.500214,
      "longitude": -7.870271,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658871182,
      "ems": null
    },
    {
      "latitude": 38.500191,
      "longitude": -7.871033,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658871185,
      "ems": null
    },
    {
      "latitude": 38.500191,
      "longitude": -7.871948,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658871188,
      "ems": null
    },
    {
      "latitude": 38.500214,
      "longitude": -7.872838,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658871191,
      "ems": null
    },
    {
      "latitude": 38.500259,
      "longitude": -7.873674,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658871194,
      "ems": null
    },
    {
      "latitude": 38.500305,
      "longitude": -7.874331,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658871197,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -7.875466,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658871200,
      "ems": null
    },
    {
      "latitude": 38.500397,
      "longitude": -7.876182,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871203,
      "ems": null
    },
    {
      "latitude": 38.500469,
      "longitude": -7.877136,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658871206,
      "ems": null
    },
    {
      "latitude": 38.500515,
      "longitude": -7.87738,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658871209,
      "ems": null
    },
    {
      "latitude": 38.500717,
      "longitude": -7.878571,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658871211,
      "ems": null
    },
    {
      "latitude": 38.500854,
      "longitude": -7.879645,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658871215,
      "ems": null
    },
    {
      "latitude": 38.50098,
      "longitude": -7.88031,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658871218,
      "ems": null
    },
    {
      "latitude": 38.501122,
      "longitude": -7.881226,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658871221,
      "ems": null
    },
    {
      "latitude": 38.501213,
      "longitude": -7.881836,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658871223,
      "ems": null
    },
    {
      "latitude": 38.501495,
      "longitude": -7.883484,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658871229,
      "ems": null
    },
    {
      "latitude": 38.501728,
      "longitude": -7.885132,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658871235,
      "ems": null
    },
    {
      "latitude": 38.502472,
      "longitude": -7.887939,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1658871246,
      "ems": null
    },
    {
      "latitude": 38.503281,
      "longitude": -7.88896,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1658871251,
      "ems": null
    },
    {
      "latitude": 38.504242,
      "longitude": -7.890015,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1658871256,
      "ems": null
    },
    {
      "latitude": 38.505543,
      "longitude": -7.891052,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1658871262,
      "ems": null
    },
    {
      "latitude": 38.506943,
      "longitude": -7.891766,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1658871268,
      "ems": null
    },
    {
      "latitude": 38.508385,
      "longitude": -7.891907,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1658871273,
      "ems": null
    },
    {
      "latitude": 38.509781,
      "longitude": -7.892029,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1658871278,
      "ems": null
    },
    {
      "latitude": 38.511318,
      "longitude": -7.891846,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871284,
      "ems": null
    },
    {
      "latitude": 38.512897,
      "longitude": -7.891724,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871289,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -7.891602,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871295,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -7.891479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658871300,
      "ems": null
    },
    {
      "latitude": 38.517471,
      "longitude": -7.891408,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658871305,
      "ems": null
    },
    {
      "latitude": 38.520676,
      "longitude": -7.891049,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871317,
      "ems": null
    },
    {
      "latitude": 38.522209,
      "longitude": -7.890808,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658871322,
      "ems": null
    },
    {
      "latitude": 38.523788,
      "longitude": -7.890691,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658871327,
      "ems": null
    },
    {
      "latitude": 38.52713,
      "longitude": -7.890333,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871339,
      "ems": null
    },
    {
      "latitude": 38.530125,
      "longitude": -7.890015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871350,
      "ems": null
    },
    {
      "latitude": 38.532452,
      "longitude": -7.889832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871360,
      "ems": null
    },
    {
      "latitude": 38.535568,
      "longitude": -7.889526,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871371,
      "ems": null
    },
    {
      "latitude": 38.538391,
      "longitude": -7.889079,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1658871382,
      "ems": null
    },
    {
      "latitude": 38.539856,
      "longitude": -7.88884,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658871388,
      "ems": null
    },
    {
      "latitude": 38.541111,
      "longitude": -7.888611,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658871393,
      "ems": null
    },
    {
      "latitude": 38.543793,
      "longitude": -7.888303,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658871404,
      "ems": null
    },
    {
      "latitude": 38.545113,
      "longitude": -7.888184,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871409,
      "ems": null
    },
    {
      "latitude": 38.546741,
      "longitude": -7.888184,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871414,
      "ems": null
    },
    {
      "latitude": 38.549927,
      "longitude": -7.887527,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658871425,
      "ems": null
    },
    {
      "latitude": 38.551632,
      "longitude": -7.887024,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658871431,
      "ems": null
    },
    {
      "latitude": 38.55312,
      "longitude": -7.886475,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1658871436,
      "ems": null
    },
    {
      "latitude": 38.554562,
      "longitude": -7.885254,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1658871442,
      "ems": null
    },
    {
      "latitude": 38.554779,
      "longitude": -7.885019,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1658871443,
      "ems": null
    },
    {
      "latitude": 38.555496,
      "longitude": -7.883545,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1658871446,
      "ems": null
    },
    {
      "latitude": 38.55582,
      "longitude": -7.882019,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1658871449,
      "ems": null
    },
    {
      "latitude": 38.55582,
      "longitude": -7.88031,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1658871452,
      "ems": null
    },
    {
      "latitude": 38.555511,
      "longitude": -7.878451,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658871455,
      "ems": null
    },
    {
      "latitude": 38.555077,
      "longitude": -7.876648,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1658871458,
      "ems": null
    },
    {
      "latitude": 38.55455,
      "longitude": -7.874809,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1658871461,
      "ems": null
    },
    {
      "latitude": 38.554005,
      "longitude": -7.873108,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1658871464,
      "ems": null
    },
    {
      "latitude": 38.553589,
      "longitude": -7.871823,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1658871467,
      "ems": null
    },
    {
      "latitude": 38.552841,
      "longitude": -7.869751,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1658871470,
      "ems": null
    },
    {
      "latitude": 38.552353,
      "longitude": -7.868361,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1658871473,
      "ems": null
    },
    {
      "latitude": 38.551575,
      "longitude": -7.86633,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1658871476,
      "ems": null
    },
    {
      "latitude": 38.550934,
      "longitude": -7.864658,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1658871479,
      "ems": null
    },
    {
      "latitude": 38.550236,
      "longitude": -7.862854,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658871482,
      "ems": null
    },
    {
      "latitude": 38.549534,
      "longitude": -7.861328,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1658871485,
      "ems": null
    },
    {
      "latitude": 38.548599,
      "longitude": -7.859763,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1658871488,
      "ems": null
    },
    {
      "latitude": 38.547626,
      "longitude": -7.858398,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1658871491,
      "ems": null
    },
    {
      "latitude": 38.547043,
      "longitude": -7.857732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1658871492,
      "ems": null
    },
    {
      "latitude": 38.546494,
      "longitude": -7.857195,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1658871494,
      "ems": null
    },
    {
      "latitude": 38.545898,
      "longitude": -7.856717,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1658871495,
      "ems": null
    },
    {
      "latitude": 38.543762,
      "longitude": -7.85553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1658871500,
      "ems": null
    },
    {
      "latitude": 38.542179,
      "longitude": -7.855164,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1658871503,
      "ems": null
    },
    {
      "latitude": 38.540413,
      "longitude": -7.855103,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658871507,
      "ems": null
    },
    {
      "latitude": 38.5383,
      "longitude": -7.855165,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1658871512,
      "ems": null
    },
    {
      "latitude": 38.536835,
      "longitude": -7.855284,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871515,
      "ems": null
    },
    {
      "latitude": 38.535244,
      "longitude": -7.855347,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871518,
      "ems": null
    },
    {
      "latitude": 38.533951,
      "longitude": -7.855404,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871521,
      "ems": null
    },
    {
      "latitude": 38.532543,
      "longitude": -7.85553,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1658871524,
      "ems": null
    },
    {
      "latitude": 38.531525,
      "longitude": -7.855583,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658871527,
      "ems": null
    },
    {
      "latitude": 38.530357,
      "longitude": -7.855652,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658871529,
      "ems": null
    },
    {
      "latitude": 38.528732,
      "longitude": -7.855822,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871533,
      "ems": null
    },
    {
      "latitude": 38.52626,
      "longitude": -7.856079,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871539,
      "ems": null
    },
    {
      "latitude": 38.523418,
      "longitude": -7.856384,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871545,
      "ems": null
    },
    {
      "latitude": 38.520954,
      "longitude": -7.856628,
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
      "timestamp": 1658871551,
      "ems": null
    },
    {
      "latitude": 38.518387,
      "longitude": -7.856956,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658871557,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -7.8573,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658871563,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -7.857605,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658871569,
      "ems": null
    },
    {
      "latitude": 38.510788,
      "longitude": -7.857852,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658871575,
      "ems": null
    },
    {
      "latitude": 38.50964,
      "longitude": -7.857971,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871581,
      "ems": null
    },
    {
      "latitude": 38.504517,
      "longitude": -7.858449,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658871591,
      "ems": null
    },
    {
      "latitude": 38.501404,
      "longitude": -7.858926,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658871598,
      "ems": null
    },
    {
      "latitude": 38.500237,
      "longitude": -7.859253,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1658871601,
      "ems": null
    },
    {
      "latitude": 38.499161,
      "longitude": -7.859763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1658871604,
      "ems": null
    },
    {
      "latitude": 38.498383,
      "longitude": -7.86036,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1658871606,
      "ems": null
    },
    {
      "latitude": 38.49765,
      "longitude": -7.861196,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1658871610,
      "ems": null
    },
    {
      "latitude": 38.497211,
      "longitude": -7.862061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1658871613,
      "ems": null
    },
    {
      "latitude": 38.496838,
      "longitude": -7.863403,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1658871616,
      "ems": null
    },
    {
      "latitude": 38.496651,
      "longitude": -7.864441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658871619,
      "ems": null
    },
    {
      "latitude": 38.496552,
      "longitude": -7.865375,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1658871622,
      "ems": null
    },
    {
      "latitude": 38.496513,
      "longitude": -7.866333,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1658871625,
      "ems": null
    },
    {
      "latitude": 38.496513,
      "longitude": -7.867493,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658871628,
      "ems": null
    },
    {
      "latitude": 38.496559,
      "longitude": -7.868408,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871631,
      "ems": null
    },
    {
      "latitude": 38.496643,
      "longitude": -7.869256,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871634,
      "ems": null
    },
    {
      "latitude": 38.4967,
      "longitude": -7.870117,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871637,
      "ems": null
    },
    {
      "latitude": 38.496792,
      "longitude": -7.871033,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871640,
      "ems": null
    },
    {
      "latitude": 38.496838,
      "longitude": -7.871948,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658871643,
      "ems": null
    },
    {
      "latitude": 38.496872,
      "longitude": -7.872838,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658871646,
      "ems": null
    },
    {
      "latitude": 38.496964,
      "longitude": -7.873674,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658871649,
      "ems": null
    },
    {
      "latitude": 38.497025,
      "longitude": -7.874634,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658871652,
      "ems": null
    },
    {
      "latitude": 38.497101,
      "longitude": -7.875466,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658871655,
      "ems": null
    },
    {
      "latitude": 38.497238,
      "longitude": -7.876361,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658871658,
      "ems": null
    },
    {
      "latitude": 38.497421,
      "longitude": -7.877257,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1658871661,
      "ems": null
    },
    {
      "latitude": 38.497585,
      "longitude": -7.878052,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658871664,
      "ems": null
    },
    {
      "latitude": 38.497787,
      "longitude": -7.878989,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658871667,
      "ems": null
    },
    {
      "latitude": 38.498016,
      "longitude": -7.879884,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658871670,
      "ems": null
    },
    {
      "latitude": 38.498245,
      "longitude": -7.88072,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658871673,
      "ems": null
    },
    {
      "latitude": 38.498466,
      "longitude": -7.881531,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658871676,
      "ems": null
    },
    {
      "latitude": 38.498657,
      "longitude": -7.882452,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658871679,
      "ems": null
    },
    {
      "latitude": 38.49884,
      "longitude": -7.88324,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1658871682,
      "ems": null
    },
    {
      "latitude": 38.499027,
      "longitude": -7.884094,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1658871685,
      "ems": null
    },
    {
      "latitude": 38.499397,
      "longitude": -7.885925,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1658871691,
      "ems": null
    },
    {
      "latitude": 38.49963,
      "longitude": -7.88678,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1658871694,
      "ems": null
    },
    {
      "latitude": 38.499725,
      "longitude": -7.887085,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658871695,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -7.888243,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1658871700,
      "ems": null
    },
    {
      "latitude": 38.501312,
      "longitude": -7.889557,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1658871706,
      "ems": null
    },
    {
      "latitude": 38.502377,
      "longitude": -7.890564,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1658871711,
      "ems": null
    },
    {
      "latitude": 38.503727,
      "longitude": -7.891418,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1658871717,
      "ems": null
    },
    {
      "latitude": 38.505077,
      "longitude": -7.891968,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1658871722,
      "ems": null
    },
    {
      "latitude": 38.506485,
      "longitude": -7.892124,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658871728,
      "ems": null
    },
    {
      "latitude": 38.507919,
      "longitude": -7.89209,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871733,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -7.891968,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871738,
      "ems": null
    },
    {
      "latitude": 38.510849,
      "longitude": -7.891846,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871744,
      "ems": null
    },
    {
      "latitude": 38.512299,
      "longitude": -7.891766,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658871749,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -7.891663,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658871755,
      "ems": null
    },
    {
      "latitude": 38.516624,
      "longitude": -7.891418,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658871765,
      "ems": null
    },
    {
      "latitude": 38.519531,
      "longitude": -7.891109,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871776,
      "ems": null
    },
    {
      "latitude": 38.522552,
      "longitude": -7.890751,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871787,
      "ems": null
    },
    {
      "latitude": 38.525574,
      "longitude": -7.890452,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658871798,
      "ems": null
    },
    {
      "latitude": 38.528728,
      "longitude": -7.890198,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658871809,
      "ems": null
    },
    {
      "latitude": 38.530106,
      "longitude": -7.890035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871814,
      "ems": null
    },
    {
      "latitude": 38.531425,
      "longitude": -7.889954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658871820,
      "ems": null
    },
    {
      "latitude": 38.534359,
      "longitude": -7.889648,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658871831,
      "ems": null
    },
    {
      "latitude": 38.536083,
      "longitude": -7.889404,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658871837,
      "ems": null
    },
    {
      "latitude": 38.53883,
      "longitude": -7.888855,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1658871847,
      "ems": null
    },
    {
      "latitude": 38.540131,
      "longitude": -7.888482,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658871853,
      "ems": null
    },
    {
      "latitude": 38.543106,
      "longitude": -7.887706,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1658871863,
      "ems": null
    },
    {
      "latitude": 38.545952,
      "longitude": -7.886719,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1658871874,
      "ems": null
    },
    {
      "latitude": 38.54924,
      "longitude": -7.885676,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1658871884,
      "ems": null
    },
    {
      "latitude": 38.550934,
      "longitude": -7.884583,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1658871890,
      "ems": null
    },
    {
      "latitude": 38.552353,
      "longitude": -7.883407,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1658871895,
      "ems": null
    },
    {
      "latitude": 38.55368,
      "longitude": -7.882332,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1658871900,
      "ems": null
    },
    {
      "latitude": 38.554935,
      "longitude": -7.880371,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1658871906,
      "ems": null
    },
    {
      "latitude": 38.555122,
      "longitude": -7.879944,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1658871907,
      "ems": null
    },
    {
      "latitude": 38.555466,
      "longitude": -7.87863,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1658871910,
      "ems": null
    },
    {
      "latitude": 38.555679,
      "longitude": -7.877014,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1658871913,
      "ems": null
    },
    {
      "latitude": 38.555679,
      "longitude": -7.876526,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658871914,
      "ems": null
    },
    {
      "latitude": 38.555447,
      "longitude": -7.87439,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658871918,
      "ems": null
    },
    {
      "latitude": 38.554703,
      "longitude": -7.871948,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1658871922,
      "ems": null
    },
    {
      "latitude": 38.55405,
      "longitude": -7.870239,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1658871925,
      "ems": null
    },
    {
      "latitude": 38.553493,
      "longitude": -7.868652,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1658871928,
      "ems": null
    },
    {
      "latitude": 38.552811,
      "longitude": -7.866928,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1658871931,
      "ems": null
    },
    {
      "latitude": 38.552216,
      "longitude": -7.865256,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1658871934,
      "ems": null
    },
    {
      "latitude": 38.551632,
      "longitude": -7.863831,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1658871937,
      "ems": null
    },
    {
      "latitude": 38.550842,
      "longitude": -7.861972,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1658871940,
      "ems": null
    },
    {
      "latitude": 38.550201,
      "longitude": -7.860479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1658871943,
      "ems": null
    },
    {
      "latitude": 38.549469,
      "longitude": -7.858807,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1658871946,
      "ems": null
    },
    {
      "latitude": 38.549011,
      "longitude": -7.857732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1658871949,
      "ems": null
    },
    {
      "latitude": 38.548553,
      "longitude": -7.856837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1658871950,
      "ems": null
    },
    {
      "latitude": 38.547161,
      "longitude": -7.854675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1658871954,
      "ems": null
    },
    {
      "latitude": 38.545067,
      "longitude": -7.8526,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1658871959,
      "ems": null
    },
    {
      "latitude": 38.543839,
      "longitude": -7.851821,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1658871962,
      "ems": null
    },
    {
      "latitude": 38.542786,
      "longitude": -7.851344,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1658871965,
      "ems": null
    },
    {
      "latitude": 38.541,
      "longitude": -7.851045,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1658871969,
      "ems": null
    },
    {
      "latitude": 38.538364,
      "longitude": -7.85144,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1658871974,
      "ems": null
    },
    {
      "latitude": 38.537567,
      "longitude": -7.851583,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1658871977,
      "ems": null
    },
    {
      "latitude": 38.535736,
      "longitude": -7.85206,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658871980,
      "ems": null
    },
    {
      "latitude": 38.535278,
      "longitude": -7.852239,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658871983,
      "ems": null
    },
    {
      "latitude": 38.533009,
      "longitude": -7.852844,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658871986,
      "ems": null
    },
    {
      "latitude": 38.531567,
      "longitude": -7.85321,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658871990,
      "ems": null
    },
    {
      "latitude": 38.530518,
      "longitude": -7.853493,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658871992,
      "ems": null
    },
    {
      "latitude": 38.529144,
      "longitude": -7.853821,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658871995,
      "ems": null
    },
    {
      "latitude": 38.527863,
      "longitude": -7.85415,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658871999,
      "ems": null
    },
    {
      "latitude": 38.527004,
      "longitude": -7.854309,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872001,
      "ems": null
    },
    {
      "latitude": 38.525528,
      "longitude": -7.854628,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658872004,
      "ems": null
    },
    {
      "latitude": 38.524384,
      "longitude": -7.854867,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872007,
      "ems": null
    },
    {
      "latitude": 38.523003,
      "longitude": -7.855164,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658872011,
      "ems": null
    },
    {
      "latitude": 38.52182,
      "longitude": -7.855344,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658872013,
      "ems": null
    },
    {
      "latitude": 38.521137,
      "longitude": -7.855469,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658872016,
      "ems": null
    },
    {
      "latitude": 38.519394,
      "longitude": -7.855643,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658872019,
      "ems": null
    },
    {
      "latitude": 38.518524,
      "longitude": -7.855762,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658872022,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -7.855835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658872025,
      "ems": null
    },
    {
      "latitude": 38.516144,
      "longitude": -7.856001,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658872028,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -7.856323,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658872035,
      "ems": null
    },
    {
      "latitude": 38.511456,
      "longitude": -7.856689,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872040,
      "ems": null
    },
    {
      "latitude": 38.510849,
      "longitude": -7.856812,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872043,
      "ems": null
    },
    {
      "latitude": 38.50922,
      "longitude": -7.8573,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1658872046,
      "ems": null
    },
    {
      "latitude": 38.50787,
      "longitude": -7.857666,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1658872050,
      "ems": null
    },
    {
      "latitude": 38.50676,
      "longitude": -7.857971,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872053,
      "ems": null
    },
    {
      "latitude": 38.505615,
      "longitude": -7.858329,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1658872056,
      "ems": null
    },
    {
      "latitude": 38.504658,
      "longitude": -7.858765,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1658872059,
      "ems": null
    },
    {
      "latitude": 38.503876,
      "longitude": -7.859344,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1658872062,
      "ems": null
    },
    {
      "latitude": 38.503216,
      "longitude": -7.860107,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658872064,
      "ems": null
    },
    {
      "latitude": 38.502842,
      "longitude": -7.860718,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1658872068,
      "ems": null
    },
    {
      "latitude": 38.502426,
      "longitude": -7.862366,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1658872071,
      "ems": null
    },
    {
      "latitude": 38.502365,
      "longitude": -7.863405,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658872074,
      "ems": null
    },
    {
      "latitude": 38.502411,
      "longitude": -7.864419,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658872077,
      "ems": null
    },
    {
      "latitude": 38.502426,
      "longitude": -7.865356,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658872080,
      "ems": null
    },
    {
      "latitude": 38.502426,
      "longitude": -7.866272,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658872083,
      "ems": null
    },
    {
      "latitude": 38.502457,
      "longitude": -7.867166,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658872086,
      "ems": null
    },
    {
      "latitude": 38.502472,
      "longitude": -7.868164,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658872089,
      "ems": null
    },
    {
      "latitude": 38.502563,
      "longitude": -7.868958,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658872092,
      "ems": null
    },
    {
      "latitude": 38.502659,
      "longitude": -7.869934,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658872095,
      "ems": null
    },
    {
      "latitude": 38.502796,
      "longitude": -7.870789,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658872098,
      "ems": null
    },
    {
      "latitude": 38.502937,
      "longitude": -7.871826,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658872101,
      "ems": null
    },
    {
      "latitude": 38.503006,
      "longitude": -7.87254,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1658872103,
      "ems": null
    },
    {
      "latitude": 38.503124,
      "longitude": -7.873596,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658872107,
      "ems": null
    },
    {
      "latitude": 38.503235,
      "longitude": -7.87457,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658872110,
      "ems": null
    },
    {
      "latitude": 38.503311,
      "longitude": -7.875305,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658872113,
      "ems": null
    },
    {
      "latitude": 38.503326,
      "longitude": -7.875585,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1658872113,
      "ems": null
    },
    {
      "latitude": 38.503448,
      "longitude": -7.877747,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1658872122,
      "ems": null
    },
    {
      "latitude": 38.503635,
      "longitude": -7.879639,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1658872127,
      "ems": null
    },
    {
      "latitude": 38.50415,
      "longitude": -7.88287,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1658872138,
      "ems": null
    },
    {
      "latitude": 38.504475,
      "longitude": -7.884338,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658872143,
      "ems": null
    },
    {
      "latitude": 38.504791,
      "longitude": -7.885855,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658872149,
      "ems": null
    },
    {
      "latitude": 38.505032,
      "longitude": -7.887451,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1658872155,
      "ems": null
    },
    {
      "latitude": 38.505405,
      "longitude": -7.888916,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1658872160,
      "ems": null
    },
    {
      "latitude": 38.506165,
      "longitude": -7.890393,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1658872165,
      "ems": null
    },
    {
      "latitude": 38.507313,
      "longitude": -7.891296,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1658872171,
      "ems": null
    },
    {
      "latitude": 38.508663,
      "longitude": -7.891663,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1658872176,
      "ems": null
    },
    {
      "latitude": 38.510201,
      "longitude": -7.891724,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1658872182,
      "ems": null
    },
    {
      "latitude": 38.511612,
      "longitude": -7.891647,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872187,
      "ems": null
    },
    {
      "latitude": 38.513031,
      "longitude": -7.891527,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658872193,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -7.891527,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658872198,
      "ems": null
    },
    {
      "latitude": 38.51564,
      "longitude": -7.891408,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872203,
      "ems": null
    },
    {
      "latitude": 38.51844,
      "longitude": -7.891174,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872214,
      "ems": null
    },
    {
      "latitude": 38.519989,
      "longitude": -7.89099,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658872221,
      "ems": null
    },
    {
      "latitude": 38.522781,
      "longitude": -7.890751,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658872231,
      "ems": null
    },
    {
      "latitude": 38.525421,
      "longitude": -7.890503,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872242,
      "ems": null
    },
    {
      "latitude": 38.528412,
      "longitude": -7.890213,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872253,
      "ems": null
    },
    {
      "latitude": 38.529659,
      "longitude": -7.890076,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872258,
      "ems": null
    },
    {
      "latitude": 38.531891,
      "longitude": -7.889893,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872269,
      "ems": null
    },
    {
      "latitude": 38.53492,
      "longitude": -7.889526,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872279,
      "ems": null
    },
    {
      "latitude": 38.537945,
      "longitude": -7.889099,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658872290,
      "ems": null
    },
    {
      "latitude": 38.539482,
      "longitude": -7.888672,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658872297,
      "ems": null
    },
    {
      "latitude": 38.540737,
      "longitude": -7.888367,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1658872302,
      "ems": null
    },
    {
      "latitude": 38.541855,
      "longitude": -7.888062,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1658872308,
      "ems": null
    },
    {
      "latitude": 38.543198,
      "longitude": -7.887765,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658872313,
      "ems": null
    },
    {
      "latitude": 38.546089,
      "longitude": -7.887085,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658872324,
      "ems": null
    },
    {
      "latitude": 38.547546,
      "longitude": -7.88681,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1658872329,
      "ems": null
    },
    {
      "latitude": 38.55014,
      "longitude": -7.88623,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1658872339,
      "ems": null
    },
    {
      "latitude": 38.553165,
      "longitude": -7.885254,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1658872350,
      "ems": null
    },
    {
      "latitude": 38.55447,
      "longitude": -7.883972,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1658872356,
      "ems": null
    },
    {
      "latitude": 38.555214,
      "longitude": -7.882568,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1658872359,
      "ems": null
    },
    {
      "latitude": 38.555603,
      "longitude": -7.881436,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1658872362,
      "ems": null
    },
    {
      "latitude": 38.556015,
      "longitude": -7.879645,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1658872365,
      "ems": null
    },
    {
      "latitude": 38.556107,
      "longitude": -7.879108,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1658872366,
      "ems": null
    },
    {
      "latitude": 38.556198,
      "longitude": -7.877496,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1658872369,
      "ems": null
    },
    {
      "latitude": 38.556194,
      "longitude": -7.876038,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1658872372,
      "ems": null
    },
    {
      "latitude": 38.556145,
      "longitude": -7.874268,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1658872375,
      "ems": null
    },
    {
      "latitude": 38.556107,
      "longitude": -7.872659,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1658872378,
      "ems": null
    },
    {
      "latitude": 38.556007,
      "longitude": -7.870972,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1658872381,
      "ems": null
    },
    {
      "latitude": 38.555969,
      "longitude": -7.870629,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1658872381,
      "ems": null
    },
    {
      "latitude": 38.555786,
      "longitude": -7.868539,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1658872386,
      "ems": null
    },
    {
      "latitude": 38.555557,
      "longitude": -7.866629,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1658872389,
      "ems": null
    },
    {
      "latitude": 38.555374,
      "longitude": -7.865315,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1658872391,
      "ems": null
    },
    {
      "latitude": 38.555099,
      "longitude": -7.863225,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658872395,
      "ems": null
    },
    {
      "latitude": 38.554935,
      "longitude": -7.861877,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658872398,
      "ems": null
    },
    {
      "latitude": 38.554688,
      "longitude": -7.8603,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658872401,
      "ems": null
    },
    {
      "latitude": 38.55447,
      "longitude": -7.858826,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658872404,
      "ems": null
    },
    {
      "latitude": 38.554276,
      "longitude": -7.857374,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1658872407,
      "ems": null
    },
    {
      "latitude": 38.554005,
      "longitude": -7.855896,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1658872410,
      "ems": null
    },
    {
      "latitude": 38.553726,
      "longitude": -7.854747,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1658872412,
      "ems": null
    },
    {
      "latitude": 38.553352,
      "longitude": -7.853699,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1658872414,
      "ems": null
    },
    {
      "latitude": 38.552582,
      "longitude": -7.852359,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1658872417,
      "ems": null
    },
    {
      "latitude": 38.550568,
      "longitude": -7.850448,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1658872423,
      "ems": null
    },
    {
      "latitude": 38.550156,
      "longitude": -7.850209,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1658872424,
      "ems": null
    },
    {
      "latitude": 38.547501,
      "longitude": -7.849433,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1658872430,
      "ems": null
    },
    {
      "latitude": 38.545998,
      "longitude": -7.849487,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1658872434,
      "ems": null
    },
    {
      "latitude": 38.545345,
      "longitude": -7.849548,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1658872436,
      "ems": null
    },
    {
      "latitude": 38.543064,
      "longitude": -7.849976,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872441,
      "ems": null
    },
    {
      "latitude": 38.540909,
      "longitude": -7.850567,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1658872446,
      "ems": null
    },
    {
      "latitude": 38.539528,
      "longitude": -7.850952,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872450,
      "ems": null
    },
    {
      "latitude": 38.537384,
      "longitude": -7.851563,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872455,
      "ems": null
    },
    {
      "latitude": 38.535755,
      "longitude": -7.85199,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658872459,
      "ems": null
    },
    {
      "latitude": 38.534729,
      "longitude": -7.852239,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872462,
      "ems": null
    },
    {
      "latitude": 38.533337,
      "longitude": -7.852539,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1658872465,
      "ems": null
    },
    {
      "latitude": 38.531158,
      "longitude": -7.853135,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872471,
      "ems": null
    },
    {
      "latitude": 38.528778,
      "longitude": -7.853732,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872477,
      "ems": null
    },
    {
      "latitude": 38.526581,
      "longitude": -7.854209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872483,
      "ems": null
    },
    {
      "latitude": 38.524384,
      "longitude": -7.854747,
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
      "squawk": "7000",
      "timestamp": 1658872489,
      "ems": null
    },
    {
      "latitude": 38.522278,
      "longitude": -7.855165,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658872495,
      "ems": null
    },
    {
      "latitude": 38.520126,
      "longitude": -7.855523,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1658872502,
      "ems": null
    },
    {
      "latitude": 38.519073,
      "longitude": -7.855643,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658872505,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -7.855713,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1658872508,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -7.855822,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1658872511,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -7.856201,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872517,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -7.856777,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872523,
      "ems": null
    },
    {
      "latitude": 38.511749,
      "longitude": -7.857076,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872526,
      "ems": null
    },
    {
      "latitude": 38.510651,
      "longitude": -7.857374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872529,
      "ems": null
    },
    {
      "latitude": 38.509548,
      "longitude": -7.857666,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872532,
      "ems": null
    },
    {
      "latitude": 38.508476,
      "longitude": -7.857971,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872535,
      "ems": null
    },
    {
      "latitude": 38.507675,
      "longitude": -7.85815,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1658872538,
      "ems": null
    },
    {
      "latitude": 38.506382,
      "longitude": -7.858521,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1658872541,
      "ems": null
    },
    {
      "latitude": 38.504196,
      "longitude": -7.858986,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1658872547,
      "ems": null
    },
    {
      "latitude": 38.501953,
      "longitude": -7.859464,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1658872553,
      "ems": null
    },
    {
      "latitude": 38.499619,
      "longitude": -7.859882,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1658872559,
      "ems": null
    },
    {
      "latitude": 38.497513,
      "longitude": -7.86018,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1658872565,
      "ems": null
    },
    {
      "latitude": 38.495209,
      "longitude": -7.860779,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1658872571,
      "ems": null
    },
    {
      "latitude": 38.494125,
      "longitude": -7.861315,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1658872574,
      "ems": null
    },
    {
      "latitude": 38.493256,
      "longitude": -7.861972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1658872577,
      "ems": null
    },
    {
      "latitude": 38.492416,
      "longitude": -7.862793,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1658872580,
      "ems": null
    },
    {
      "latitude": 38.49181,
      "longitude": -7.863464,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1658872583,
      "ems": null
    },
    {
      "latitude": 38.491112,
      "longitude": -7.864319,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1658872586,
      "ems": null
    },
    {
      "latitude": 38.490738,
      "longitude": -7.865017,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1658872588,
      "ems": null
    },
    {
      "latitude": 38.490368,
      "longitude": -7.867065,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658872595,
      "ems": null
    },
    {
      "latitude": 38.490372,
      "longitude": -7.868002,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1658872598,
      "ems": null
    },
    {
      "latitude": 38.490372,
      "longitude": -7.868778,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1658872601,
      "ems": null
    },
    {
      "latitude": 38.490368,
      "longitude": -7.869568,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658872604,
      "ems": null
    },
    {
      "latitude": 38.490414,
      "longitude": -7.8703,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658872607,
      "ems": null
    },
    {
      "latitude": 38.490463,
      "longitude": -7.871346,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1658872610,
      "ems": null
    },
    {
      "latitude": 38.490555,
      "longitude": -7.872314,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658872613,
      "ems": null
    },
    {
      "latitude": 38.490601,
      "longitude": -7.873077,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658872616,
      "ems": null
    },
    {
      "latitude": 38.490646,
      "longitude": -7.874032,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658872619,
      "ems": null
    },
    {
      "latitude": 38.490738,
      "longitude": -7.875705,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658872625,
      "ems": null
    },
    {
      "latitude": 38.490742,
      "longitude": -7.877441,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658872631,
      "ems": null
    },
    {
      "latitude": 38.490692,
      "longitude": -7.878212,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1658872634,
      "ems": null
    },
    {
      "latitude": 38.490646,
      "longitude": -7.879395,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1658872637,
      "ems": null
    },
    {
      "latitude": 38.490601,
      "longitude": -7.880302,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1658872640,
      "ems": null
    },
    {
      "latitude": 38.490646,
      "longitude": -7.882153,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658872646,
      "ems": null
    },
    {
      "latitude": 38.490692,
      "longitude": -7.883884,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1658872652,
      "ems": null
    },
    {
      "latitude": 38.490833,
      "longitude": -7.885803,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1658872658,
      "ems": null
    },
    {
      "latitude": 38.490875,
      "longitude": -7.886512,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1658872661,
      "ems": null
    },
    {
      "latitude": 38.490925,
      "longitude": -7.88739,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1658872664,
      "ems": null
    },
    {
      "latitude": 38.491104,
      "longitude": -7.888243,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1658872667,
      "ems": null
    },
    {
      "latitude": 38.491299,
      "longitude": -7.889038,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1658872670,
      "ems": null
    },
    {
      "latitude": 38.491562,
      "longitude": -7.889915,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1658872673,
      "ems": null
    },
    {
      "latitude": 38.491718,
      "longitude": -7.890503,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1658872676,
      "ems": null
    },
    {
      "latitude": 38.492092,
      "longitude": -7.891235,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1658872679,
      "ems": null
    },
    {
      "latitude": 38.492477,
      "longitude": -7.891766,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1658872682,
      "ems": null
    },
    {
      "latitude": 38.492935,
      "longitude": -7.892244,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1658872685,
      "ems": null
    },
    {
      "latitude": 38.49358,
      "longitude": -7.892578,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1658872688,
      "ems": null
    },
    {
      "latitude": 38.494217,
      "longitude": -7.892781,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1658872691,
      "ems": null
    },
    {
      "latitude": 38.494904,
      "longitude": -7.8929,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1658872694,
      "ems": null
    },
    {
      "latitude": 38.495583,
      "longitude": -7.892944,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1658872697,
      "ems": null
    },
    {
      "latitude": 38.496235,
      "longitude": -7.893005,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1658872700,
      "ems": null
    },
    {
      "latitude": 38.496872,
      "longitude": -7.89302,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658872703,
      "ems": null
    },
    {
      "latitude": 38.497467,
      "longitude": -7.89296,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872706,
      "ems": null
    },
    {
      "latitude": 38.498329,
      "longitude": -7.892883,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658872711,
      "ems": null
    },
    {
      "latitude": 38.499161,
      "longitude": -7.892722,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1658872715,
      "ems": null
    },
    {
      "latitude": 38.500168,
      "longitude": -7.892662,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872720,
      "ems": null
    },
    {
      "latitude": 38.501308,
      "longitude": -7.892517,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658872725,
      "ems": null
    },
    {
      "latitude": 38.502472,
      "longitude": -7.892456,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658872731,
      "ems": null
    },
    {
      "latitude": 38.503555,
      "longitude": -7.892423,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1658872736,
      "ems": null
    },
    {
      "latitude": 38.504658,
      "longitude": -7.892456,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658872741,
      "ems": null
    },
    {
      "latitude": 38.506989,
      "longitude": -7.892273,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1658872752,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -7.892029,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872763,
      "ems": null
    },
    {
      "latitude": 38.511829,
      "longitude": -7.891907,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1658872774,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -7.891826,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658872779,
      "ems": null
    },
    {
      "latitude": 38.515598,
      "longitude": -7.891479,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658872790,
      "ems": null
    },
    {
      "latitude": 38.518204,
      "longitude": -7.891229,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872801,
      "ems": null
    },
    {
      "latitude": 38.519558,
      "longitude": -7.891052,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872806,
      "ems": null
    },
    {
      "latitude": 38.522095,
      "longitude": -7.890811,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872817,
      "ems": null
    },
    {
      "latitude": 38.524677,
      "longitude": -7.890564,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1658872828,
      "ems": null
    },
    {
      "latitude": 38.527424,
      "longitude": -7.89032,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872839,
      "ems": null
    },
    {
      "latitude": 38.529922,
      "longitude": -7.890035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1658872850,
      "ems": null
    },
    {
      "latitude": 38.53093,
      "longitude": -7.889975,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1658872855,
      "ems": null
    },
    {
      "latitude": 38.532265,
      "longitude": -7.889832,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 51.9,
        "kts": 28,
        "mph": 32.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1658872864,
      "ems": null
    },
    {
      "latitude": 38.532776,
      "longitude": -7.889771,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1658872869,
      "ems": null
    },
    {
      "latitude": 38.533382,
      "longitude": -7.889587,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1658872879,
      "ems": null
    },
    {
      "latitude": 38.533382,
      "longitude": -7.889343,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1658872884,
      "ems": null
    },
    {
      "latitude": 38.533241,
      "longitude": -7.889099,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 3.7,
        "kts": 2,
        "mph": 2.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1658872895,
      "ems": null
    },
    {
      "latitude": 38.53315,
      "longitude": -7.889709,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1658872905,
      "ems": null
    }
  ]
};
