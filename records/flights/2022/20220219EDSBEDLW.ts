import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220219EDSBEDLW",
    callsign: "DEFCZ",
    name: "300NM second leg - 166NM",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 19, 13, 30).getTime(),
    arrival: new Date(2022, 1, 19, 15, 40).getTime(),
    singleEnginePistonTime: 130,
    picTime: 130,
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
    origin:{
      "name": "Karlsruhe/Baden-Baden Airport",
      "code": "EDSB",
      "position": {
        "latitude": 48.77935,
        "longitude": 8.0805,
      },
    },
    destination: {
      "name": "Dortmund Airport",
      "code": "EDLW",
      "position": {
        "latitude": 51.518311,
        "longitude": 7.612242,
      }
    }
  },
  track: [
    {
      "latitude": 48.778412,
      "longitude": 8.079649,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 208,
      "squawk": "0",
      "timestamp": 1645278287,
      "ems": null
    },
    {
      "latitude": 48.777008,
      "longitude": 8.078472,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 208,
      "squawk": "0",
      "timestamp": 1645278293,
      "ems": null
    },
    {
      "latitude": 48.775806,
      "longitude": 8.077191,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 217,
      "squawk": "0",
      "timestamp": 1645278299,
      "ems": null
    },
    {
      "latitude": 48.775589,
      "longitude": 8.076994,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 217,
      "squawk": "0",
      "timestamp": 1645278300,
      "ems": null
    },
    {
      "latitude": 48.775314,
      "longitude": 8.076641,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 218,
      "squawk": "0",
      "timestamp": 1645278301,
      "ems": null
    },
    {
      "latitude": 48.775108,
      "longitude": 8.076397,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 218,
      "squawk": "0",
      "timestamp": 1645278302,
      "ems": null
    },
    {
      "latitude": 48.774876,
      "longitude": 8.076108,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 219,
      "squawk": "0",
      "timestamp": 1645278303,
      "ems": null
    },
    {
      "latitude": 48.774689,
      "longitude": 8.075891,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 220,
      "squawk": "0",
      "timestamp": 1645278305,
      "ems": null
    },
    {
      "latitude": 48.774315,
      "longitude": 8.075385,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 220,
      "squawk": "0",
      "timestamp": 1645278307,
      "ems": null
    },
    {
      "latitude": 48.774128,
      "longitude": 8.075168,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 219,
      "squawk": "0",
      "timestamp": 1645278308,
      "ems": null
    },
    {
      "latitude": 48.773895,
      "longitude": 8.074879,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 219,
      "squawk": "0",
      "timestamp": 1645278309,
      "ems": null
    },
    {
      "latitude": 48.773575,
      "longitude": 8.074529,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 218,
      "squawk": "0",
      "timestamp": 1645278310,
      "ems": null
    },
    {
      "latitude": 48.773247,
      "longitude": 8.074084,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 217,
      "squawk": "0",
      "timestamp": 1645278312,
      "ems": null
    },
    {
      "latitude": 48.77298,
      "longitude": 8.073824,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 218,
      "squawk": "0",
      "timestamp": 1645278313,
      "ems": null
    },
    {
      "latitude": 48.772781,
      "longitude": 8.073505,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 218,
      "squawk": "0",
      "timestamp": 1645278314,
      "ems": null
    },
    {
      "latitude": 48.772408,
      "longitude": 8.073071,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 219,
      "squawk": "0",
      "timestamp": 1645278315,
      "ems": null
    },
    {
      "latitude": 48.771011,
      "longitude": 8.071554,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 214,
      "squawk": "0",
      "timestamp": 1645278321,
      "ems": null
    },
    {
      "latitude": 48.770187,
      "longitude": 8.070725,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 213,
      "squawk": "0",
      "timestamp": 1645278324,
      "ems": null
    },
    {
      "latitude": 48.76952,
      "longitude": 8.070108,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 211,
      "squawk": "0",
      "timestamp": 1645278327,
      "ems": null
    },
    {
      "latitude": 48.769272,
      "longitude": 8.06981,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 211,
      "squawk": "0",
      "timestamp": 1645278328,
      "ems": null
    },
    {
      "latitude": 48.768906,
      "longitude": 8.069458,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 213,
      "squawk": "0",
      "timestamp": 1645278329,
      "ems": null
    },
    {
      "latitude": 48.768635,
      "longitude": 8.069242,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 213,
      "squawk": "0",
      "timestamp": 1645278330,
      "ems": null
    },
    {
      "latitude": 48.768356,
      "longitude": 8.068965,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 213,
      "squawk": "0",
      "timestamp": 1645278331,
      "ems": null
    },
    {
      "latitude": 48.768127,
      "longitude": 8.068754,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 210,
      "squawk": "7025",
      "timestamp": 1645278332,
      "ems": null
    },
    {
      "latitude": 48.767567,
      "longitude": 8.068301,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 207,
      "squawk": "7025",
      "timestamp": 1645278334,
      "ems": null
    },
    {
      "latitude": 48.767193,
      "longitude": 8.068157,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 198,
      "squawk": "7025",
      "timestamp": 1645278336,
      "ems": null
    },
    {
      "latitude": 48.766869,
      "longitude": 8.068012,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 194,
      "squawk": "7025",
      "timestamp": 1645278337,
      "ems": null
    },
    {
      "latitude": 48.766388,
      "longitude": 8.067979,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 185,
      "squawk": "7025",
      "timestamp": 1645278338,
      "ems": null
    },
    {
      "latitude": 48.765564,
      "longitude": 8.068012,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 175,
      "squawk": "7025",
      "timestamp": 1645278341,
      "ems": null
    },
    {
      "latitude": 48.764603,
      "longitude": 8.068401,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 161,
      "squawk": "7025",
      "timestamp": 1645278344,
      "ems": null
    },
    {
      "latitude": 48.763367,
      "longitude": 8.069317,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 148,
      "squawk": "7025",
      "timestamp": 1645278347,
      "ems": null
    },
    {
      "latitude": 48.762726,
      "longitude": 8.070092,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 135,
      "squawk": "7025",
      "timestamp": 1645278350,
      "ems": null
    },
    {
      "latitude": 48.76181,
      "longitude": 8.071641,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 128,
      "squawk": "7025",
      "timestamp": 1645278353,
      "ems": null
    },
    {
      "latitude": 48.761215,
      "longitude": 8.073191,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 119,
      "squawk": "7025",
      "timestamp": 1645278356,
      "ems": null
    },
    {
      "latitude": 48.76062,
      "longitude": 8.07481,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 119,
      "squawk": "7025",
      "timestamp": 1645278359,
      "ems": null
    },
    {
      "latitude": 48.75993,
      "longitude": 8.076541,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 119,
      "squawk": "7025",
      "timestamp": 1645278363,
      "ems": null
    },
    {
      "latitude": 48.759327,
      "longitude": 8.078204,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 118,
      "squawk": "7025",
      "timestamp": 1645278366,
      "ems": null
    },
    {
      "latitude": 48.758766,
      "longitude": 8.079794,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 118,
      "squawk": "7025",
      "timestamp": 1645278369,
      "ems": null
    },
    {
      "latitude": 48.758286,
      "longitude": 8.081148,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 117,
      "squawk": "7025",
      "timestamp": 1645278371,
      "ems": null
    },
    {
      "latitude": 48.75779,
      "longitude": 8.082613,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 118,
      "squawk": "7025",
      "timestamp": 1645278374,
      "ems": null
    },
    {
      "latitude": 48.757416,
      "longitude": 8.083625,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 117,
      "squawk": "7025",
      "timestamp": 1645278377,
      "ems": null
    },
    {
      "latitude": 48.756729,
      "longitude": 8.085656,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 116,
      "squawk": "7025",
      "timestamp": 1645278380,
      "ems": null
    },
    {
      "latitude": 48.756363,
      "longitude": 8.086853,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 115,
      "squawk": "7025",
      "timestamp": 1645278383,
      "ems": null
    },
    {
      "latitude": 48.755276,
      "longitude": 8.090346,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 113,
      "squawk": "7025",
      "timestamp": 1645278389,
      "ems": null
    },
    {
      "latitude": 48.754852,
      "longitude": 8.091994,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 112,
      "squawk": "7025",
      "timestamp": 1645278393,
      "ems": null
    },
    {
      "latitude": 48.754486,
      "longitude": 8.093382,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 112,
      "squawk": "7025",
      "timestamp": 1645278395,
      "ems": null
    },
    {
      "latitude": 48.754204,
      "longitude": 8.094394,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 112,
      "squawk": "7025",
      "timestamp": 1645278397,
      "ems": null
    },
    {
      "latitude": 48.753693,
      "longitude": 8.096273,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 112,
      "squawk": "7025",
      "timestamp": 1645278401,
      "ems": null
    },
    {
      "latitude": 48.753227,
      "longitude": 8.098152,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 106,
      "squawk": "7025",
      "timestamp": 1645278404,
      "ems": null
    },
    {
      "latitude": 48.753086,
      "longitude": 8.100248,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 93,
      "squawk": "7025",
      "timestamp": 1645278408,
      "ems": null
    },
    {
      "latitude": 48.753086,
      "longitude": 8.102128,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 91,
      "squawk": "7025",
      "timestamp": 1645278411,
      "ems": null
    },
    {
      "latitude": 48.753113,
      "longitude": 8.105798,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 89,
      "squawk": "7025",
      "timestamp": 1645278417,
      "ems": null
    },
    {
      "latitude": 48.753086,
      "longitude": 8.107838,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 89,
      "squawk": "7025",
      "timestamp": 1645278419,
      "ems": null
    },
    {
      "latitude": 48.753136,
      "longitude": 8.109717,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 88,
      "squawk": "7025",
      "timestamp": 1645278422,
      "ems": null
    },
    {
      "latitude": 48.753159,
      "longitude": 8.111995,
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
      "heading": 88,
      "squawk": "7025",
      "timestamp": 1645278425,
      "ems": null
    },
    {
      "latitude": 48.753273,
      "longitude": 8.114849,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 86,
      "squawk": "7025",
      "timestamp": 1645278429,
      "ems": null
    },
    {
      "latitude": 48.753323,
      "longitude": 8.116584,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 86,
      "squawk": "7025",
      "timestamp": 1645278431,
      "ems": null
    },
    {
      "latitude": 48.753387,
      "longitude": 8.117417,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 86,
      "squawk": "7025",
      "timestamp": 1645278432,
      "ems": null
    },
    {
      "latitude": 48.753555,
      "longitude": 8.120559,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7025",
      "timestamp": 1645278436,
      "ems": null
    },
    {
      "latitude": 48.753738,
      "longitude": 8.123233,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "7025",
      "timestamp": 1645278440,
      "ems": null
    },
    {
      "latitude": 48.754074,
      "longitude": 8.127348,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 82,
      "squawk": "7025",
      "timestamp": 1645278445,
      "ems": null
    },
    {
      "latitude": 48.754299,
      "longitude": 8.130244,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 84,
      "squawk": "7025",
      "timestamp": 1645278449,
      "ems": null
    },
    {
      "latitude": 48.754345,
      "longitude": 8.13581,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "7025",
      "timestamp": 1645278456,
      "ems": null
    },
    {
      "latitude": 48.754253,
      "longitude": 8.13805,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 94,
      "squawk": "7025",
      "timestamp": 1645278459,
      "ems": null
    },
    {
      "latitude": 48.75412,
      "longitude": 8.140376,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 94,
      "squawk": "7025",
      "timestamp": 1645278462,
      "ems": null
    },
    {
      "latitude": 48.754028,
      "longitude": 8.142278,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "7025",
      "timestamp": 1645278465,
      "ems": null
    },
    {
      "latitude": 48.753925,
      "longitude": 8.144555,
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
      "heading": 94,
      "squawk": "7025",
      "timestamp": 1645278468,
      "ems": null
    },
    {
      "latitude": 48.753738,
      "longitude": 8.146579,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 97,
      "squawk": "7025",
      "timestamp": 1645278470,
      "ems": null
    },
    {
      "latitude": 48.753479,
      "longitude": 8.149109,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 100,
      "squawk": "7025",
      "timestamp": 1645278474,
      "ems": null
    },
    {
      "latitude": 48.753204,
      "longitude": 8.15094,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 101,
      "squawk": "7025",
      "timestamp": 1645278477,
      "ems": null
    },
    {
      "latitude": 48.752903,
      "longitude": 8.153012,
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
      "heading": 104,
      "squawk": "7025",
      "timestamp": 1645278480,
      "ems": null
    },
    {
      "latitude": 48.752575,
      "longitude": 8.155036,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "7025",
      "timestamp": 1645278482,
      "ems": null
    },
    {
      "latitude": 48.75238,
      "longitude": 8.156081,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "7025",
      "timestamp": 1645278484,
      "ems": null
    },
    {
      "latitude": 48.751831,
      "longitude": 8.159156,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 104,
      "squawk": "7025",
      "timestamp": 1645278488,
      "ems": null
    },
    {
      "latitude": 48.75132,
      "longitude": 8.161757,
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
      "heading": 108,
      "squawk": "7025",
      "timestamp": 1645278492,
      "ems": null
    },
    {
      "latitude": 48.750732,
      "longitude": 8.164461,
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
      "heading": 107,
      "squawk": "7025",
      "timestamp": 1645278496,
      "ems": null
    },
    {
      "latitude": 48.750481,
      "longitude": 8.165661,
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
      "heading": 104,
      "squawk": "7025",
      "timestamp": 1645278500,
      "ems": null
    },
    {
      "latitude": 48.750183,
      "longitude": 8.169532,
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
      "heading": 90,
      "squawk": "7025",
      "timestamp": 1645278504,
      "ems": null
    },
    {
      "latitude": 48.750389,
      "longitude": 8.171588,
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
      "heading": 77,
      "squawk": "7025",
      "timestamp": 1645278507,
      "ems": null
    },
    {
      "latitude": 48.750713,
      "longitude": 8.173105,
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
      "heading": 69,
      "squawk": "7025",
      "timestamp": 1645278510,
      "ems": null
    },
    {
      "latitude": 48.751328,
      "longitude": 8.175166,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 66,
      "squawk": "7025",
      "timestamp": 1645278513,
      "ems": null
    },
    {
      "latitude": 48.752106,
      "longitude": 8.177279,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 56,
      "squawk": "7025",
      "timestamp": 1645278516,
      "ems": null
    },
    {
      "latitude": 48.753067,
      "longitude": 8.179251,
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
      "heading": 53,
      "squawk": "7025",
      "timestamp": 1645278519,
      "ems": null
    },
    {
      "latitude": 48.754021,
      "longitude": 8.180984,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7025",
      "timestamp": 1645278522,
      "ems": null
    },
    {
      "latitude": 48.754997,
      "longitude": 8.182791,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "7025",
      "timestamp": 1645278525,
      "ems": null
    },
    {
      "latitude": 48.756134,
      "longitude": 8.184463,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "7025",
      "timestamp": 1645278528,
      "ems": null
    },
    {
      "latitude": 48.756535,
      "longitude": 8.185031,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "7025",
      "timestamp": 1645278529,
      "ems": null
    },
    {
      "latitude": 48.757965,
      "longitude": 8.186646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "7025",
      "timestamp": 1645278533,
      "ems": null
    },
    {
      "latitude": 48.759888,
      "longitude": 8.188618,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "7025",
      "timestamp": 1645278537,
      "ems": null
    },
    {
      "latitude": 48.761261,
      "longitude": 8.189815,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 30,
      "squawk": "7025",
      "timestamp": 1645278540,
      "ems": null
    },
    {
      "latitude": 48.762676,
      "longitude": 8.191103,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 30,
      "squawk": "7025",
      "timestamp": 1645278543,
      "ems": null
    },
    {
      "latitude": 48.763515,
      "longitude": 8.191826,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 30,
      "squawk": "7025",
      "timestamp": 1645278545,
      "ems": null
    },
    {
      "latitude": 48.765423,
      "longitude": 8.193561,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1645278549,
      "ems": null
    },
    {
      "latitude": 48.766171,
      "longitude": 8.194283,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1645278551,
      "ems": null
    },
    {
      "latitude": 48.768265,
      "longitude": 8.196223,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1645278555,
      "ems": null
    },
    {
      "latitude": 48.769566,
      "longitude": 8.197463,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1645278558,
      "ems": null
    },
    {
      "latitude": 48.770828,
      "longitude": 8.198689,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1645278561,
      "ems": null
    },
    {
      "latitude": 48.773247,
      "longitude": 8.201077,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1645278567,
      "ems": null
    },
    {
      "latitude": 48.776085,
      "longitude": 8.203824,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1645278573,
      "ems": null
    },
    {
      "latitude": 48.778645,
      "longitude": 8.206137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1645278579,
      "ems": null
    },
    {
      "latitude": 48.781158,
      "longitude": 8.208377,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1645278585,
      "ems": null
    },
    {
      "latitude": 48.783627,
      "longitude": 8.210546,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1645278591,
      "ems": null
    },
    {
      "latitude": 48.786118,
      "longitude": 8.212703,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1645278597,
      "ems": null
    },
    {
      "latitude": 48.788422,
      "longitude": 8.21481,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1645278603,
      "ems": null
    },
    {
      "latitude": 48.791061,
      "longitude": 8.216999,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1645278609,
      "ems": null
    },
    {
      "latitude": 48.793488,
      "longitude": 8.219041,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1645278615,
      "ems": null
    },
    {
      "latitude": 48.796097,
      "longitude": 8.221084,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1645278621,
      "ems": null
    },
    {
      "latitude": 48.798477,
      "longitude": 8.222985,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1645278627,
      "ems": null
    },
    {
      "latitude": 48.801224,
      "longitude": 8.225027,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1645278634,
      "ems": null
    },
    {
      "latitude": 48.803783,
      "longitude": 8.226809,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1645278639,
      "ems": null
    },
    {
      "latitude": 48.806717,
      "longitude": 8.228832,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1645278645,
      "ems": null
    },
    {
      "latitude": 48.809555,
      "longitude": 8.230803,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1645278651,
      "ems": null
    },
    {
      "latitude": 48.812668,
      "longitude": 8.232915,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1645278658,
      "ems": null
    },
    {
      "latitude": 48.815514,
      "longitude": 8.234687,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1645278663,
      "ems": null
    },
    {
      "latitude": 48.818726,
      "longitude": 8.236638,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "4452",
      "timestamp": 1645278670,
      "ems": null
    },
    {
      "latitude": 48.821777,
      "longitude": 8.238619,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 22,
      "squawk": "4452",
      "timestamp": 1645278676,
      "ems": null
    },
    {
      "latitude": 48.824799,
      "longitude": 8.240662,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "4452",
      "timestamp": 1645278682,
      "ems": null
    },
    {
      "latitude": 48.82695,
      "longitude": 8.242352,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "4452",
      "timestamp": 1645278686,
      "ems": null
    },
    {
      "latitude": 48.82906,
      "longitude": 8.244011,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "4452",
      "timestamp": 1645278690,
      "ems": null
    },
    {
      "latitude": 48.830841,
      "longitude": 8.24538,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "4452",
      "timestamp": 1645278694,
      "ems": null
    },
    {
      "latitude": 48.834366,
      "longitude": 8.247845,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 24,
      "squawk": "4452",
      "timestamp": 1645278702,
      "ems": null
    },
    {
      "latitude": 48.837936,
      "longitude": 8.250029,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 21,
      "squawk": "4452",
      "timestamp": 1645278709,
      "ems": null
    },
    {
      "latitude": 48.839493,
      "longitude": 8.250874,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 20,
      "squawk": "4452",
      "timestamp": 1645278711,
      "ems": null
    },
    {
      "latitude": 48.841164,
      "longitude": 8.251817,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 19,
      "squawk": "4452",
      "timestamp": 1645278715,
      "ems": null
    },
    {
      "latitude": 48.842701,
      "longitude": 8.252612,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 18,
      "squawk": "4452",
      "timestamp": 1645278718,
      "ems": null
    },
    {
      "latitude": 48.844238,
      "longitude": 8.253407,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 18,
      "squawk": "4452",
      "timestamp": 1645278721,
      "ems": null
    },
    {
      "latitude": 48.845764,
      "longitude": 8.254253,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 19,
      "squawk": "4452",
      "timestamp": 1645278724,
      "ems": null
    },
    {
      "latitude": 48.847229,
      "longitude": 8.255029,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 19,
      "squawk": "4452",
      "timestamp": 1645278727,
      "ems": null
    },
    {
      "latitude": 48.850113,
      "longitude": 8.256507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 17,
      "squawk": "4452",
      "timestamp": 1645278733,
      "ems": null
    },
    {
      "latitude": 48.852997,
      "longitude": 8.257915,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278739,
      "ems": null
    },
    {
      "latitude": 48.855743,
      "longitude": 8.259184,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278745,
      "ems": null
    },
    {
      "latitude": 48.858574,
      "longitude": 8.260345,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "4452",
      "timestamp": 1645278750,
      "ems": null
    },
    {
      "latitude": 48.861603,
      "longitude": 8.261789,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 17,
      "squawk": "4452",
      "timestamp": 1645278757,
      "ems": null
    },
    {
      "latitude": 48.864532,
      "longitude": 8.263057,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278763,
      "ems": null
    },
    {
      "latitude": 48.867512,
      "longitude": 8.26432,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "4452",
      "timestamp": 1645278769,
      "ems": null
    },
    {
      "latitude": 48.870483,
      "longitude": 8.265451,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 13,
      "squawk": "4452",
      "timestamp": 1645278775,
      "ems": null
    },
    {
      "latitude": 48.873322,
      "longitude": 8.266508,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 14,
      "squawk": "4452",
      "timestamp": 1645278781,
      "ems": null
    },
    {
      "latitude": 48.876034,
      "longitude": 8.267428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 11,
      "squawk": "4452",
      "timestamp": 1645278787,
      "ems": null
    },
    {
      "latitude": 48.879044,
      "longitude": 8.268479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "4452",
      "timestamp": 1645278793,
      "ems": null
    },
    {
      "latitude": 48.881882,
      "longitude": 8.269536,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 14,
      "squawk": "4452",
      "timestamp": 1645278799,
      "ems": null
    },
    {
      "latitude": 48.88472,
      "longitude": 8.270733,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "4452",
      "timestamp": 1645278805,
      "ems": null
    },
    {
      "latitude": 48.886227,
      "longitude": 8.271404,
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
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278808,
      "ems": null
    },
    {
      "latitude": 48.888931,
      "longitude": 8.272564,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "4452",
      "timestamp": 1645278814,
      "ems": null
    },
    {
      "latitude": 48.891815,
      "longitude": 8.273789,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278820,
      "ems": null
    },
    {
      "latitude": 48.894791,
      "longitude": 8.27517,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "4452",
      "timestamp": 1645278826,
      "ems": null
    },
    {
      "latitude": 48.897354,
      "longitude": 8.276247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "4452",
      "timestamp": 1645278832,
      "ems": null
    },
    {
      "latitude": 48.900288,
      "longitude": 8.277403,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "4452",
      "timestamp": 1645278838,
      "ems": null
    },
    {
      "latitude": 48.903305,
      "longitude": 8.278339,
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
      "heading": 9,
      "squawk": "4452",
      "timestamp": 1645278844,
      "ems": null
    },
    {
      "latitude": 48.905045,
      "longitude": 8.278621,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "4452",
      "timestamp": 1645278847,
      "ems": null
    },
    {
      "latitude": 48.906647,
      "longitude": 8.278691,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "4452",
      "timestamp": 1645278850,
      "ems": null
    },
    {
      "latitude": 48.908112,
      "longitude": 8.278621,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "4452",
      "timestamp": 1645278853,
      "ems": null
    },
    {
      "latitude": 48.909805,
      "longitude": 8.27848,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 356,
      "squawk": "4452",
      "timestamp": 1645278856,
      "ems": null
    },
    {
      "latitude": 48.911366,
      "longitude": 8.278271,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 355,
      "squawk": "4452",
      "timestamp": 1645278859,
      "ems": null
    },
    {
      "latitude": 48.912903,
      "longitude": 8.278053,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "4452",
      "timestamp": 1645278862,
      "ems": null
    },
    {
      "latitude": 48.914436,
      "longitude": 8.277909,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "4452",
      "timestamp": 1645278865,
      "ems": null
    },
    {
      "latitude": 48.915939,
      "longitude": 8.277776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4452",
      "timestamp": 1645278868,
      "ems": null
    },
    {
      "latitude": 48.91737,
      "longitude": 8.277692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "4452",
      "timestamp": 1645278871,
      "ems": null
    },
    {
      "latitude": 48.918861,
      "longitude": 8.27762,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "4452",
      "timestamp": 1645278874,
      "ems": null
    },
    {
      "latitude": 48.920334,
      "longitude": 8.277564,
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
      "heading": 357,
      "squawk": "4452",
      "timestamp": 1645278877,
      "ems": null
    },
    {
      "latitude": 48.9217,
      "longitude": 8.277475,
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
      "heading": 356,
      "squawk": "4452",
      "timestamp": 1645278880,
      "ems": null
    },
    {
      "latitude": 48.9245,
      "longitude": 8.277283,
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
      "heading": 357,
      "squawk": "4452",
      "timestamp": 1645278886,
      "ems": null
    },
    {
      "latitude": 48.92738,
      "longitude": 8.277041,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "4452",
      "timestamp": 1645278892,
      "ems": null
    },
    {
      "latitude": 48.930267,
      "longitude": 8.276579,
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
      "heading": 353,
      "squawk": "4452",
      "timestamp": 1645278898,
      "ems": null
    },
    {
      "latitude": 48.933197,
      "longitude": 8.276226,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "4452",
      "timestamp": 1645278904,
      "ems": null
    },
    {
      "latitude": 48.935852,
      "longitude": 8.275874,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4452",
      "timestamp": 1645278910,
      "ems": null
    },
    {
      "latitude": 48.938786,
      "longitude": 8.275452,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "4452",
      "timestamp": 1645278916,
      "ems": null
    },
    {
      "latitude": 48.941624,
      "longitude": 8.275018,
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
      "heading": 353,
      "squawk": "4452",
      "timestamp": 1645278922,
      "ems": null
    },
    {
      "latitude": 48.944279,
      "longitude": 8.27444,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4452",
      "timestamp": 1645278928,
      "ems": null
    },
    {
      "latitude": 48.947071,
      "longitude": 8.273862,
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
      "heading": 353,
      "squawk": "4452",
      "timestamp": 1645278934,
      "ems": null
    },
    {
      "latitude": 48.949677,
      "longitude": 8.273355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4452",
      "timestamp": 1645278940,
      "ems": null
    },
    {
      "latitude": 48.952377,
      "longitude": 8.272986,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 355,
      "squawk": "4452",
      "timestamp": 1645278946,
      "ems": null
    },
    {
      "latitude": 48.955265,
      "longitude": 8.272633,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "4452",
      "timestamp": 1645278952,
      "ems": null
    },
    {
      "latitude": 48.958237,
      "longitude": 8.272424,
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
      "heading": 359,
      "squawk": "4452",
      "timestamp": 1645278958,
      "ems": null
    },
    {
      "latitude": 48.959656,
      "longitude": 8.272493,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "4452",
      "timestamp": 1645278961,
      "ems": null
    },
    {
      "latitude": 48.961128,
      "longitude": 8.272633,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 2,
      "squawk": "4452",
      "timestamp": 1645278964,
      "ems": null
    },
    {
      "latitude": 48.96262,
      "longitude": 8.272778,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "4452",
      "timestamp": 1645278967,
      "ems": null
    },
    {
      "latitude": 48.964108,
      "longitude": 8.272994,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 6,
      "squawk": "4452",
      "timestamp": 1645278971,
      "ems": null
    },
    {
      "latitude": 48.965607,
      "longitude": 8.273269,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 6,
      "squawk": "4452",
      "timestamp": 1645278973,
      "ems": null
    },
    {
      "latitude": 48.967041,
      "longitude": 8.273572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "4452",
      "timestamp": 1645278976,
      "ems": null
    },
    {
      "latitude": 48.968536,
      "longitude": 8.273832,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "4452",
      "timestamp": 1645278980,
      "ems": null
    },
    {
      "latitude": 48.970001,
      "longitude": 8.274114,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 7,
      "squawk": "4452",
      "timestamp": 1645278983,
      "ems": null
    },
    {
      "latitude": 48.971325,
      "longitude": 8.274295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "4452",
      "timestamp": 1645278985,
      "ems": null
    },
    {
      "latitude": 48.974396,
      "longitude": 8.274729,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 4,
      "squawk": "4452",
      "timestamp": 1645278992,
      "ems": null
    },
    {
      "latitude": 48.97747,
      "longitude": 8.27509,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "4452",
      "timestamp": 1645278998,
      "ems": null
    },
    {
      "latitude": 48.980347,
      "longitude": 8.275381,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "4452",
      "timestamp": 1645279004,
      "ems": null
    },
    {
      "latitude": 48.983849,
      "longitude": 8.275524,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "4452",
      "timestamp": 1645279011,
      "ems": null
    },
    {
      "latitude": 48.986801,
      "longitude": 8.275663,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "4452",
      "timestamp": 1645279019,
      "ems": null
    },
    {
      "latitude": 48.991714,
      "longitude": 8.276175,
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
      "heading": 3,
      "squawk": "4452",
      "timestamp": 1645279028,
      "ems": null
    },
    {
      "latitude": 48.995998,
      "longitude": 8.276608,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279036,
      "ems": null
    },
    {
      "latitude": 48.998791,
      "longitude": 8.276825,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279042,
      "ems": null
    },
    {
      "latitude": 49.00177,
      "longitude": 8.277071,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279049,
      "ems": null
    },
    {
      "latitude": 49.004471,
      "longitude": 8.277186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279055,
      "ems": null
    },
    {
      "latitude": 49.007309,
      "longitude": 8.277475,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279061,
      "ems": null
    },
    {
      "latitude": 49.008682,
      "longitude": 8.277705,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279064,
      "ems": null
    },
    {
      "latitude": 49.011475,
      "longitude": 8.278198,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279070,
      "ems": null
    },
    {
      "latitude": 49.014385,
      "longitude": 8.278632,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279076,
      "ems": null
    },
    {
      "latitude": 49.017086,
      "longitude": 8.279138,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279082,
      "ems": null
    },
    {
      "latitude": 49.019897,
      "longitude": 8.279466,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279088,
      "ems": null
    },
    {
      "latitude": 49.022533,
      "longitude": 8.279933,
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
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279094,
      "ems": null
    },
    {
      "latitude": 49.025482,
      "longitude": 8.280311,
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279100,
      "ems": null
    },
    {
      "latitude": 49.02681,
      "longitude": 8.280381,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279103,
      "ems": null
    },
    {
      "latitude": 49.028137,
      "longitude": 8.280381,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279106,
      "ems": null
    },
    {
      "latitude": 49.029327,
      "longitude": 8.280367,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279109,
      "ems": null
    },
    {
      "latitude": 49.030819,
      "longitude": 8.280294,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279112,
      "ems": null
    },
    {
      "latitude": 49.032074,
      "longitude": 8.2801,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279115,
      "ems": null
    },
    {
      "latitude": 49.033192,
      "longitude": 8.27986,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279117,
      "ems": null
    },
    {
      "latitude": 49.034546,
      "longitude": 8.279677,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279120,
      "ems": null
    },
    {
      "latitude": 49.035736,
      "longitude": 8.279395,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279123,
      "ems": null
    },
    {
      "latitude": 49.037102,
      "longitude": 8.279138,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645279126,
      "ems": null
    },
    {
      "latitude": 49.038391,
      "longitude": 8.278902,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279129,
      "ems": null
    },
    {
      "latitude": 49.040176,
      "longitude": 8.27855,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279133,
      "ems": null
    },
    {
      "latitude": 49.040771,
      "longitude": 8.27848,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279134,
      "ems": null
    },
    {
      "latitude": 49.04213,
      "longitude": 8.278271,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279137,
      "ems": null
    },
    {
      "latitude": 49.045258,
      "longitude": 8.277846,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279145,
      "ems": null
    },
    {
      "latitude": 49.048416,
      "longitude": 8.277692,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279152,
      "ems": null
    },
    {
      "latitude": 49.050556,
      "longitude": 8.27762,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279156,
      "ems": null
    },
    {
      "latitude": 49.052048,
      "longitude": 8.277548,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279160,
      "ems": null
    },
    {
      "latitude": 49.05542,
      "longitude": 8.277564,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279168,
      "ems": null
    },
    {
      "latitude": 49.057388,
      "longitude": 8.277635,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279172,
      "ems": null
    },
    {
      "latitude": 49.059959,
      "longitude": 8.277403,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279178,
      "ems": null
    },
    {
      "latitude": 49.061123,
      "longitude": 8.277186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279181,
      "ems": null
    },
    {
      "latitude": 49.062515,
      "longitude": 8.277001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279184,
      "ems": null
    },
    {
      "latitude": 49.064011,
      "longitude": 8.27668,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279187,
      "ems": null
    },
    {
      "latitude": 49.066681,
      "longitude": 8.276367,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279193,
      "ems": null
    },
    {
      "latitude": 49.068012,
      "longitude": 8.276175,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279196,
      "ems": null
    },
    {
      "latitude": 49.069107,
      "longitude": 8.276086,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279199,
      "ems": null
    },
    {
      "latitude": 49.070572,
      "longitude": 8.275945,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279202,
      "ems": null
    },
    {
      "latitude": 49.072311,
      "longitude": 8.275804,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279206,
      "ems": null
    },
    {
      "latitude": 49.075974,
      "longitude": 8.275524,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279215,
      "ems": null
    },
    {
      "latitude": 49.07959,
      "longitude": 8.275311,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279223,
      "ems": null
    },
    {
      "latitude": 49.082199,
      "longitude": 8.2751,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279229,
      "ems": null
    },
    {
      "latitude": 49.0844,
      "longitude": 8.274801,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279234,
      "ems": null
    },
    {
      "latitude": 49.086227,
      "longitude": 8.274395,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645279238,
      "ems": null
    },
    {
      "latitude": 49.087891,
      "longitude": 8.273933,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645279242,
      "ems": null
    },
    {
      "latitude": 49.089195,
      "longitude": 8.273644,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279246,
      "ems": null
    },
    {
      "latitude": 49.092964,
      "longitude": 8.272994,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279254,
      "ems": null
    },
    {
      "latitude": 49.094315,
      "longitude": 8.272922,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279258,
      "ems": null
    },
    {
      "latitude": 49.095665,
      "longitude": 8.272778,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279262,
      "ems": null
    },
    {
      "latitude": 49.097855,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279266,
      "ems": null
    },
    {
      "latitude": 49.099297,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279270,
      "ems": null
    },
    {
      "latitude": 49.100052,
      "longitude": 8.272564,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279274,
      "ems": null
    },
    {
      "latitude": 49.102112,
      "longitude": 8.272564,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279277,
      "ems": null
    },
    {
      "latitude": 49.102707,
      "longitude": 8.272564,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279280,
      "ems": null
    },
    {
      "latitude": 49.105907,
      "longitude": 8.272344,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279286,
      "ems": null
    },
    {
      "latitude": 49.108654,
      "longitude": 8.272199,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279293,
      "ems": null
    },
    {
      "latitude": 49.111542,
      "longitude": 8.271982,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279299,
      "ems": null
    },
    {
      "latitude": 49.1147,
      "longitude": 8.27186,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279305,
      "ems": null
    },
    {
      "latitude": 49.117584,
      "longitude": 8.271578,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279311,
      "ems": null
    },
    {
      "latitude": 49.120106,
      "longitude": 8.271259,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279317,
      "ems": null
    },
    {
      "latitude": 49.123215,
      "longitude": 8.270803,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279323,
      "ems": null
    },
    {
      "latitude": 49.125923,
      "longitude": 8.270392,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279329,
      "ems": null
    },
    {
      "latitude": 49.127335,
      "longitude": 8.2701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279332,
      "ems": null
    },
    {
      "latitude": 49.12867,
      "longitude": 8.269814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279335,
      "ems": null
    },
    {
      "latitude": 49.1315,
      "longitude": 8.269324,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279341,
      "ems": null
    },
    {
      "latitude": 49.134109,
      "longitude": 8.268902,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279347,
      "ems": null
    },
    {
      "latitude": 49.136909,
      "longitude": 8.268585,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279353,
      "ems": null
    },
    {
      "latitude": 49.13974,
      "longitude": 8.268339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279359,
      "ems": null
    },
    {
      "latitude": 49.142776,
      "longitude": 8.267935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279365,
      "ems": null
    },
    {
      "latitude": 49.145477,
      "longitude": 8.267284,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645279371,
      "ems": null
    },
    {
      "latitude": 49.146744,
      "longitude": 8.266931,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645279374,
      "ems": null
    },
    {
      "latitude": 49.149078,
      "longitude": 8.266438,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279379,
      "ems": null
    },
    {
      "latitude": 49.152237,
      "longitude": 8.266155,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279386,
      "ems": null
    },
    {
      "latitude": 49.154415,
      "longitude": 8.266128,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279392,
      "ems": null
    },
    {
      "latitude": 49.156357,
      "longitude": 8.266155,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279395,
      "ems": null
    },
    {
      "latitude": 49.15958,
      "longitude": 8.265694,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279401,
      "ems": null
    },
    {
      "latitude": 49.161804,
      "longitude": 8.2651,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645279406,
      "ems": null
    },
    {
      "latitude": 49.16423,
      "longitude": 8.264395,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645279411,
      "ems": null
    },
    {
      "latitude": 49.165588,
      "longitude": 8.264104,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279415,
      "ems": null
    },
    {
      "latitude": 49.167572,
      "longitude": 8.263831,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279419,
      "ems": null
    },
    {
      "latitude": 49.170044,
      "longitude": 8.26355,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279425,
      "ems": null
    },
    {
      "latitude": 49.17247,
      "longitude": 8.263198,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279430,
      "ems": null
    },
    {
      "latitude": 49.175316,
      "longitude": 8.262658,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279437,
      "ems": null
    },
    {
      "latitude": 49.176361,
      "longitude": 8.262564,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279439,
      "ems": null
    },
    {
      "latitude": 49.179062,
      "longitude": 8.262282,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279445,
      "ems": null
    },
    {
      "latitude": 49.18158,
      "longitude": 8.26193,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279451,
      "ems": null
    },
    {
      "latitude": 49.184162,
      "longitude": 8.261719,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279457,
      "ems": null
    },
    {
      "latitude": 49.186676,
      "longitude": 8.26143,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279463,
      "ems": null
    },
    {
      "latitude": 49.189327,
      "longitude": 8.261068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279469,
      "ems": null
    },
    {
      "latitude": 49.192154,
      "longitude": 8.260874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279475,
      "ems": null
    },
    {
      "latitude": 49.19487,
      "longitude": 8.260562,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279481,
      "ems": null
    },
    {
      "latitude": 49.198013,
      "longitude": 8.260381,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279488,
      "ems": null
    },
    {
      "latitude": 49.200779,
      "longitude": 8.260201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279493,
      "ems": null
    },
    {
      "latitude": 49.203621,
      "longitude": 8.259984,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279500,
      "ems": null
    },
    {
      "latitude": 49.206436,
      "longitude": 8.259817,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279506,
      "ems": null
    },
    {
      "latitude": 49.209183,
      "longitude": 8.259536,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279511,
      "ems": null
    },
    {
      "latitude": 49.212093,
      "longitude": 8.259189,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279518,
      "ems": null
    },
    {
      "latitude": 49.215408,
      "longitude": 8.25876,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279524,
      "ems": null
    },
    {
      "latitude": 49.218472,
      "longitude": 8.258322,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279530,
      "ems": null
    },
    {
      "latitude": 49.221313,
      "longitude": 8.257915,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279536,
      "ems": null
    },
    {
      "latitude": 49.223694,
      "longitude": 8.257634,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279541,
      "ems": null
    },
    {
      "latitude": 49.227493,
      "longitude": 8.257071,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279548,
      "ems": null
    },
    {
      "latitude": 49.231888,
      "longitude": 8.256507,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279557,
      "ems": null
    },
    {
      "latitude": 49.234951,
      "longitude": 8.256442,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279563,
      "ems": null
    },
    {
      "latitude": 49.236534,
      "longitude": 8.256371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279566,
      "ems": null
    },
    {
      "latitude": 49.237976,
      "longitude": 8.256437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279569,
      "ems": null
    },
    {
      "latitude": 49.239468,
      "longitude": 8.256587,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279572,
      "ems": null
    },
    {
      "latitude": 49.240955,
      "longitude": 8.256732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279575,
      "ems": null
    },
    {
      "latitude": 49.241467,
      "longitude": 8.256804,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279578,
      "ems": null
    },
    {
      "latitude": 49.24411,
      "longitude": 8.257212,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279581,
      "ems": null
    },
    {
      "latitude": 49.24498,
      "longitude": 8.257353,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279583,
      "ems": null
    },
    {
      "latitude": 49.246681,
      "longitude": 8.257599,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279586,
      "ems": null
    },
    {
      "latitude": 49.248405,
      "longitude": 8.25796,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279590,
      "ems": null
    },
    {
      "latitude": 49.250824,
      "longitude": 8.258249,
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279595,
      "ems": null
    },
    {
      "latitude": 49.25441,
      "longitude": 8.258538,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279602,
      "ems": null
    },
    {
      "latitude": 49.257111,
      "longitude": 8.25876,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279608,
      "ems": null
    },
    {
      "latitude": 49.26004,
      "longitude": 8.258972,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279614,
      "ems": null
    },
    {
      "latitude": 49.261391,
      "longitude": 8.259045,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279617,
      "ems": null
    },
    {
      "latitude": 49.262695,
      "longitude": 8.259117,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279620,
      "ems": null
    },
    {
      "latitude": 49.265488,
      "longitude": 8.259254,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279626,
      "ems": null
    },
    {
      "latitude": 49.268326,
      "longitude": 8.259395,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279632,
      "ems": null
    },
    {
      "latitude": 49.272263,
      "longitude": 8.259395,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279640,
      "ems": null
    },
    {
      "latitude": 49.275101,
      "longitude": 8.259324,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279646,
      "ems": null
    },
    {
      "latitude": 49.278522,
      "longitude": 8.259189,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279653,
      "ems": null
    },
    {
      "latitude": 49.280197,
      "longitude": 8.259045,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279656,
      "ems": null
    },
    {
      "latitude": 49.283039,
      "longitude": 8.258972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645279662,
      "ems": null
    },
    {
      "latitude": 49.285995,
      "longitude": 8.258972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645279668,
      "ems": null
    },
    {
      "latitude": 49.288906,
      "longitude": 8.258827,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279674,
      "ems": null
    },
    {
      "latitude": 49.291946,
      "longitude": 8.25855,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279680,
      "ems": null
    },
    {
      "latitude": 49.294815,
      "longitude": 8.258249,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279686,
      "ems": null
    },
    {
      "latitude": 49.297531,
      "longitude": 8.257986,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279692,
      "ems": null
    },
    {
      "latitude": 49.299007,
      "longitude": 8.257888,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645279695,
      "ems": null
    },
    {
      "latitude": 49.301754,
      "longitude": 8.257454,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279701,
      "ems": null
    },
    {
      "latitude": 49.304398,
      "longitude": 8.257,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279707,
      "ems": null
    },
    {
      "latitude": 49.307007,
      "longitude": 8.256789,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279713,
      "ems": null
    },
    {
      "latitude": 49.308411,
      "longitude": 8.256804,
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645279716,
      "ems": null
    },
    {
      "latitude": 49.309853,
      "longitude": 8.257021,
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
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279719,
      "ems": null
    },
    {
      "latitude": 49.311249,
      "longitude": 8.257382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279722,
      "ems": null
    },
    {
      "latitude": 49.312592,
      "longitude": 8.257634,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279725,
      "ems": null
    },
    {
      "latitude": 49.313965,
      "longitude": 8.257915,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279728,
      "ems": null
    },
    {
      "latitude": 49.315338,
      "longitude": 8.258198,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279731,
      "ems": null
    },
    {
      "latitude": 49.316555,
      "longitude": 8.258466,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645279734,
      "ems": null
    },
    {
      "latitude": 49.318138,
      "longitude": 8.258756,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279737,
      "ems": null
    },
    {
      "latitude": 49.319595,
      "longitude": 8.259043,
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1645279740,
      "ems": null
    },
    {
      "latitude": 49.322376,
      "longitude": 8.259623,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279746,
      "ems": null
    },
    {
      "latitude": 49.325134,
      "longitude": 8.260099,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279752,
      "ems": null
    },
    {
      "latitude": 49.327869,
      "longitude": 8.26049,
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645279758,
      "ems": null
    },
    {
      "latitude": 49.330429,
      "longitude": 8.260852,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645279764,
      "ems": null
    },
    {
      "latitude": 49.333408,
      "longitude": 8.261285,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279770,
      "ems": null
    },
    {
      "latitude": 49.336075,
      "longitude": 8.261648,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645279776,
      "ems": null
    },
    {
      "latitude": 49.338993,
      "longitude": 8.261935,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279782,
      "ems": null
    },
    {
      "latitude": 49.341843,
      "longitude": 8.262071,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279791,
      "ems": null
    },
    {
      "latitude": 49.3461,
      "longitude": 8.262282,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279798,
      "ems": null
    },
    {
      "latitude": 49.347702,
      "longitude": 8.262212,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279801,
      "ems": null
    },
    {
      "latitude": 49.348984,
      "longitude": 8.262,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279804,
      "ems": null
    },
    {
      "latitude": 49.350357,
      "longitude": 8.261648,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645279807,
      "ems": null
    },
    {
      "latitude": 49.351841,
      "longitude": 8.261141,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645279810,
      "ems": null
    },
    {
      "latitude": 49.3531,
      "longitude": 8.260852,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645279813,
      "ems": null
    },
    {
      "latitude": 49.354431,
      "longitude": 8.260451,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645279816,
      "ems": null
    },
    {
      "latitude": 49.355705,
      "longitude": 8.260201,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645279819,
      "ems": null
    },
    {
      "latitude": 49.357086,
      "longitude": 8.259958,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645279822,
      "ems": null
    },
    {
      "latitude": 49.359665,
      "longitude": 8.259479,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645279828,
      "ems": null
    },
    {
      "latitude": 49.361023,
      "longitude": 8.259113,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645279831,
      "ems": null
    },
    {
      "latitude": 49.363529,
      "longitude": 8.258394,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279837,
      "ems": null
    },
    {
      "latitude": 49.365784,
      "longitude": 8.257634,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645279843,
      "ems": null
    },
    {
      "latitude": 49.368484,
      "longitude": 8.256719,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279849,
      "ems": null
    },
    {
      "latitude": 49.36972,
      "longitude": 8.256298,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279852,
      "ems": null
    },
    {
      "latitude": 49.370975,
      "longitude": 8.255937,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279855,
      "ems": null
    },
    {
      "latitude": 49.373535,
      "longitude": 8.255069,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279861,
      "ems": null
    },
    {
      "latitude": 49.375854,
      "longitude": 8.254253,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645279867,
      "ems": null
    },
    {
      "latitude": 49.37851,
      "longitude": 8.253338,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645279873,
      "ems": null
    },
    {
      "latitude": 49.379974,
      "longitude": 8.252915,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645279877,
      "ems": null
    },
    {
      "latitude": 49.382172,
      "longitude": 8.252352,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645279882,
      "ems": null
    },
    {
      "latitude": 49.383499,
      "longitude": 8.252212,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279885,
      "ems": null
    },
    {
      "latitude": 49.384987,
      "longitude": 8.252178,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279888,
      "ems": null
    },
    {
      "latitude": 49.386429,
      "longitude": 8.252141,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279891,
      "ems": null
    },
    {
      "latitude": 49.387802,
      "longitude": 8.252212,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279894,
      "ems": null
    },
    {
      "latitude": 49.389271,
      "longitude": 8.252178,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279897,
      "ems": null
    },
    {
      "latitude": 49.390388,
      "longitude": 8.252106,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645279900,
      "ems": null
    },
    {
      "latitude": 49.391647,
      "longitude": 8.252141,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279903,
      "ems": null
    },
    {
      "latitude": 49.392929,
      "longitude": 8.252141,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279906,
      "ems": null
    },
    {
      "latitude": 49.394714,
      "longitude": 8.252212,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279909,
      "ems": null
    },
    {
      "latitude": 49.396133,
      "longitude": 8.252282,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279912,
      "ems": null
    },
    {
      "latitude": 49.39888,
      "longitude": 8.252493,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279918,
      "ems": null
    },
    {
      "latitude": 49.401794,
      "longitude": 8.252612,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279924,
      "ems": null
    },
    {
      "latitude": 49.404465,
      "longitude": 8.252775,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645279930,
      "ems": null
    },
    {
      "latitude": 49.407028,
      "longitude": 8.252986,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645279936,
      "ems": null
    },
    {
      "latitude": 49.409615,
      "longitude": 8.253118,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279942,
      "ems": null
    },
    {
      "latitude": 49.412128,
      "longitude": 8.253263,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645279948,
      "ems": null
    },
    {
      "latitude": 49.414764,
      "longitude": 8.253479,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279954,
      "ems": null
    },
    {
      "latitude": 49.417435,
      "longitude": 8.253624,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279960,
      "ems": null
    },
    {
      "latitude": 49.420944,
      "longitude": 8.25376,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279968,
      "ems": null
    },
    {
      "latitude": 49.423767,
      "longitude": 8.253913,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645279974,
      "ems": null
    },
    {
      "latitude": 49.426575,
      "longitude": 8.253901,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279980,
      "ems": null
    },
    {
      "latitude": 49.427948,
      "longitude": 8.25384,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279984,
      "ems": null
    },
    {
      "latitude": 49.429398,
      "longitude": 8.253702,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645279986,
      "ems": null
    },
    {
      "latitude": 49.430832,
      "longitude": 8.253551,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645279990,
      "ems": null
    },
    {
      "latitude": 49.433868,
      "longitude": 8.25333,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645279996,
      "ems": null
    },
    {
      "latitude": 49.436615,
      "longitude": 8.253256,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645280002,
      "ems": null
    },
    {
      "latitude": 49.439548,
      "longitude": 8.253034,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280008,
      "ems": null
    },
    {
      "latitude": 49.442505,
      "longitude": 8.252829,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645280014,
      "ems": null
    },
    {
      "latitude": 49.445225,
      "longitude": 8.252663,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645280020,
      "ems": null
    },
    {
      "latitude": 49.448345,
      "longitude": 8.252588,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645280027,
      "ems": null
    },
    {
      "latitude": 49.451138,
      "longitude": 8.252439,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645280033,
      "ems": null
    },
    {
      "latitude": 49.454212,
      "longitude": 8.252514,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645280039,
      "ems": null
    },
    {
      "latitude": 49.457336,
      "longitude": 8.252756,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645280046,
      "ems": null
    },
    {
      "latitude": 49.460358,
      "longitude": 8.252885,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645280052,
      "ems": null
    },
    {
      "latitude": 49.46352,
      "longitude": 8.253034,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645280058,
      "ems": null
    },
    {
      "latitude": 49.466782,
      "longitude": 8.253182,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645280065,
      "ems": null
    },
    {
      "latitude": 49.469879,
      "longitude": 8.253118,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645280071,
      "ems": null
    },
    {
      "latitude": 49.47274,
      "longitude": 8.253108,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645280078,
      "ems": null
    },
    {
      "latitude": 49.47464,
      "longitude": 8.253045,
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645280082,
      "ems": null
    },
    {
      "latitude": 49.47842,
      "longitude": 8.252885,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280089,
      "ems": null
    },
    {
      "latitude": 49.479767,
      "longitude": 8.252737,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280092,
      "ems": null
    },
    {
      "latitude": 49.482422,
      "longitude": 8.252467,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280098,
      "ems": null
    },
    {
      "latitude": 49.485355,
      "longitude": 8.251994,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280104,
      "ems": null
    },
    {
      "latitude": 49.486679,
      "longitude": 8.251672,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280107,
      "ems": null
    },
    {
      "latitude": 49.488102,
      "longitude": 8.251474,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280110,
      "ems": null
    },
    {
      "latitude": 49.489498,
      "longitude": 8.251178,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280113,
      "ems": null
    },
    {
      "latitude": 49.490707,
      "longitude": 8.250949,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280116,
      "ems": null
    },
    {
      "latitude": 49.493595,
      "longitude": 8.250509,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280122,
      "ems": null
    },
    {
      "latitude": 49.496201,
      "longitude": 8.250138,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280128,
      "ems": null
    },
    {
      "latitude": 49.498993,
      "longitude": 8.249767,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280134,
      "ems": null
    },
    {
      "latitude": 49.501831,
      "longitude": 8.249287,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280140,
      "ems": null
    },
    {
      "latitude": 49.504852,
      "longitude": 8.248781,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280146,
      "ems": null
    },
    {
      "latitude": 49.507782,
      "longitude": 8.248347,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280152,
      "ems": null
    },
    {
      "latitude": 49.510757,
      "longitude": 8.247986,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280158,
      "ems": null
    },
    {
      "latitude": 49.513687,
      "longitude": 8.247697,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280164,
      "ems": null
    },
    {
      "latitude": 49.516685,
      "longitude": 8.247392,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280170,
      "ems": null
    },
    {
      "latitude": 49.519547,
      "longitude": 8.247119,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280176,
      "ems": null
    },
    {
      "latitude": 49.522411,
      "longitude": 8.246799,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280182,
      "ems": null
    },
    {
      "latitude": 49.524597,
      "longitude": 8.246575,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280187,
      "ems": null
    },
    {
      "latitude": 49.528061,
      "longitude": 8.24589,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280195,
      "ems": null
    },
    {
      "latitude": 49.530697,
      "longitude": 8.245388,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280200,
      "ems": null
    },
    {
      "latitude": 49.5336,
      "longitude": 8.245094,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645280206,
      "ems": null
    },
    {
      "latitude": 49.536469,
      "longitude": 8.244943,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645280212,
      "ems": null
    },
    {
      "latitude": 49.539368,
      "longitude": 8.244805,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645280218,
      "ems": null
    },
    {
      "latitude": 49.542297,
      "longitude": 8.244444,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280224,
      "ems": null
    },
    {
      "latitude": 49.545219,
      "longitude": 8.243754,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280231,
      "ems": null
    },
    {
      "latitude": 49.548107,
      "longitude": 8.243161,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280236,
      "ems": null
    },
    {
      "latitude": 49.550903,
      "longitude": 8.242638,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280242,
      "ems": null
    },
    {
      "latitude": 49.552341,
      "longitude": 8.242418,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280245,
      "ems": null
    },
    {
      "latitude": 49.554996,
      "longitude": 8.241973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280252,
      "ems": null
    },
    {
      "latitude": 49.558182,
      "longitude": 8.241408,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280258,
      "ems": null
    },
    {
      "latitude": 49.560837,
      "longitude": 8.240903,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280263,
      "ems": null
    },
    {
      "latitude": 49.56398,
      "longitude": 8.240415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280270,
      "ems": null
    },
    {
      "latitude": 49.566696,
      "longitude": 8.239963,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280275,
      "ems": null
    },
    {
      "latitude": 49.569569,
      "longitude": 8.239523,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280281,
      "ems": null
    },
    {
      "latitude": 49.572594,
      "longitude": 8.239004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280289,
      "ems": null
    },
    {
      "latitude": 49.57753,
      "longitude": 8.238261,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280299,
      "ems": null
    },
    {
      "latitude": 49.581207,
      "longitude": 8.237741,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280307,
      "ems": null
    },
    {
      "latitude": 49.584824,
      "longitude": 8.237144,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280315,
      "ems": null
    },
    {
      "latitude": 49.587303,
      "longitude": 8.236554,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280320,
      "ems": null
    },
    {
      "latitude": 49.590042,
      "longitude": 8.235771,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280327,
      "ems": null
    },
    {
      "latitude": 49.591415,
      "longitude": 8.235265,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280330,
      "ems": null
    },
    {
      "latitude": 49.591919,
      "longitude": 8.235048,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280333,
      "ems": null
    },
    {
      "latitude": 49.59396,
      "longitude": 8.234253,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280336,
      "ems": null
    },
    {
      "latitude": 49.59494,
      "longitude": 8.233964,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280338,
      "ems": null
    },
    {
      "latitude": 49.597824,
      "longitude": 8.232917,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280345,
      "ems": null
    },
    {
      "latitude": 49.599976,
      "longitude": 8.232229,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280351,
      "ems": null
    },
    {
      "latitude": 49.602585,
      "longitude": 8.23129,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280357,
      "ems": null
    },
    {
      "latitude": 49.606796,
      "longitude": 8.230133,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280366,
      "ems": null
    },
    {
      "latitude": 49.610348,
      "longitude": 8.229131,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280374,
      "ems": null
    },
    {
      "latitude": 49.613251,
      "longitude": 8.228398,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280382,
      "ems": null
    },
    {
      "latitude": 49.617611,
      "longitude": 8.227275,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280390,
      "ems": null
    },
    {
      "latitude": 49.618744,
      "longitude": 8.227098,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280393,
      "ems": null
    },
    {
      "latitude": 49.621719,
      "longitude": 8.226447,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280399,
      "ems": null
    },
    {
      "latitude": 49.624172,
      "longitude": 8.225939,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280405,
      "ems": null
    },
    {
      "latitude": 49.627441,
      "longitude": 8.22529,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280411,
      "ems": null
    },
    {
      "latitude": 49.629684,
      "longitude": 8.224785,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280417,
      "ems": null
    },
    {
      "latitude": 49.633347,
      "longitude": 8.224133,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280423,
      "ems": null
    },
    {
      "latitude": 49.635765,
      "longitude": 8.223043,
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645280430,
      "ems": null
    },
    {
      "latitude": 49.636509,
      "longitude": 8.222598,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280432,
      "ems": null
    },
    {
      "latitude": 49.638794,
      "longitude": 8.221243,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645280436,
      "ems": null
    },
    {
      "latitude": 49.639389,
      "longitude": 8.220881,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645280438,
      "ems": null
    },
    {
      "latitude": 49.641117,
      "longitude": 8.219851,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645280442,
      "ems": null
    },
    {
      "latitude": 49.643005,
      "longitude": 8.218858,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645280446,
      "ems": null
    },
    {
      "latitude": 49.644703,
      "longitude": 8.217997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645280450,
      "ems": null
    },
    {
      "latitude": 49.645523,
      "longitude": 8.217557,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645280454,
      "ems": null
    },
    {
      "latitude": 49.649406,
      "longitude": 8.215547,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645280462,
      "ems": null
    },
    {
      "latitude": 49.652069,
      "longitude": 8.214231,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645280468,
      "ems": null
    },
    {
      "latitude": 49.65509,
      "longitude": 8.212858,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645280475,
      "ems": null
    },
    {
      "latitude": 49.657745,
      "longitude": 8.211846,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280481,
      "ems": null
    },
    {
      "latitude": 49.658901,
      "longitude": 8.211464,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280484,
      "ems": null
    },
    {
      "latitude": 49.659622,
      "longitude": 8.211196,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280486,
      "ems": null
    },
    {
      "latitude": 49.661507,
      "longitude": 8.210573,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280490,
      "ems": null
    },
    {
      "latitude": 49.662159,
      "longitude": 8.21035,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280493,
      "ems": null
    },
    {
      "latitude": 49.663651,
      "longitude": 8.209968,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280496,
      "ems": null
    },
    {
      "latitude": 49.665279,
      "longitude": 8.209459,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280499,
      "ems": null
    },
    {
      "latitude": 49.666302,
      "longitude": 8.209163,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280502,
      "ems": null
    },
    {
      "latitude": 49.66777,
      "longitude": 8.208811,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280505,
      "ems": null
    },
    {
      "latitude": 49.669048,
      "longitude": 8.208494,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280508,
      "ems": null
    },
    {
      "latitude": 49.670444,
      "longitude": 8.208272,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280511,
      "ems": null
    },
    {
      "latitude": 49.671749,
      "longitude": 8.208049,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280514,
      "ems": null
    },
    {
      "latitude": 49.672211,
      "longitude": 8.207944,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280517,
      "ems": null
    },
    {
      "latitude": 49.67395,
      "longitude": 8.207726,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280520,
      "ems": null
    },
    {
      "latitude": 49.675781,
      "longitude": 8.20751,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280523,
      "ems": null
    },
    {
      "latitude": 49.676544,
      "longitude": 8.207381,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280525,
      "ems": null
    },
    {
      "latitude": 49.677795,
      "longitude": 8.207294,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645280528,
      "ems": null
    },
    {
      "latitude": 49.679535,
      "longitude": 8.207149,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280531,
      "ems": null
    },
    {
      "latitude": 49.681385,
      "longitude": 8.20701,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645280535,
      "ems": null
    },
    {
      "latitude": 49.683701,
      "longitude": 8.206787,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645280541,
      "ems": null
    },
    {
      "latitude": 49.686508,
      "longitude": 8.206267,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280547,
      "ems": null
    },
    {
      "latitude": 49.689331,
      "longitude": 8.205703,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280553,
      "ems": null
    },
    {
      "latitude": 49.693352,
      "longitude": 8.20508,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280561,
      "ems": null
    },
    {
      "latitude": 49.696796,
      "longitude": 8.20456,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645280569,
      "ems": null
    },
    {
      "latitude": 49.7001,
      "longitude": 8.203892,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280577,
      "ems": null
    },
    {
      "latitude": 49.703453,
      "longitude": 8.203001,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280582,
      "ems": null
    },
    {
      "latitude": 49.706898,
      "longitude": 8.202259,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280590,
      "ems": null
    },
    {
      "latitude": 49.710621,
      "longitude": 8.201591,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280598,
      "ems": null
    },
    {
      "latitude": 49.713924,
      "longitude": 8.200849,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280606,
      "ems": null
    },
    {
      "latitude": 49.717392,
      "longitude": 8.20021,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280614,
      "ems": null
    },
    {
      "latitude": 49.718903,
      "longitude": 8.199776,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280618,
      "ems": null
    },
    {
      "latitude": 49.720768,
      "longitude": 8.199067,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645280622,
      "ems": null
    },
    {
      "latitude": 49.722771,
      "longitude": 8.198251,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645280626,
      "ems": null
    },
    {
      "latitude": 49.723888,
      "longitude": 8.197805,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645280630,
      "ems": null
    },
    {
      "latitude": 49.725376,
      "longitude": 8.197211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645280634,
      "ems": null
    },
    {
      "latitude": 49.727146,
      "longitude": 8.196543,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280638,
      "ems": null
    },
    {
      "latitude": 49.730392,
      "longitude": 8.195294,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280646,
      "ems": null
    },
    {
      "latitude": 49.73378,
      "longitude": 8.194211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280654,
      "ems": null
    },
    {
      "latitude": 49.737625,
      "longitude": 8.192909,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280662,
      "ems": null
    },
    {
      "latitude": 49.740414,
      "longitude": 8.192089,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280670,
      "ems": null
    },
    {
      "latitude": 49.744232,
      "longitude": 8.190976,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280678,
      "ems": null
    },
    {
      "latitude": 49.747513,
      "longitude": 8.190163,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280686,
      "ems": null
    },
    {
      "latitude": 49.750214,
      "longitude": 8.189657,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280692,
      "ems": null
    },
    {
      "latitude": 49.750488,
      "longitude": 8.189585,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280693,
      "ems": null
    },
    {
      "latitude": 49.754799,
      "longitude": 8.188748,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280702,
      "ems": null
    },
    {
      "latitude": 49.758385,
      "longitude": 8.18771,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280710,
      "ems": null
    },
    {
      "latitude": 49.761932,
      "longitude": 8.186766,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645280719,
      "ems": null
    },
    {
      "latitude": 49.76564,
      "longitude": 8.185899,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280727,
      "ems": null
    },
    {
      "latitude": 49.768707,
      "longitude": 8.185248,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280735,
      "ems": null
    },
    {
      "latitude": 49.771957,
      "longitude": 8.184381,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280743,
      "ems": null
    },
    {
      "latitude": 49.775932,
      "longitude": 8.18333,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280751,
      "ems": null
    },
    {
      "latitude": 49.777981,
      "longitude": 8.18281,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280755,
      "ems": null
    },
    {
      "latitude": 49.781525,
      "longitude": 8.181995,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280763,
      "ems": null
    },
    {
      "latitude": 49.784775,
      "longitude": 8.181056,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645280771,
      "ems": null
    },
    {
      "latitude": 49.788437,
      "longitude": 8.179899,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280779,
      "ems": null
    },
    {
      "latitude": 49.791763,
      "longitude": 8.178727,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280786,
      "ems": null
    },
    {
      "latitude": 49.794983,
      "longitude": 8.177803,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280794,
      "ems": null
    },
    {
      "latitude": 49.79879,
      "longitude": 8.176723,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280803,
      "ems": null
    },
    {
      "latitude": 49.801117,
      "longitude": 8.176068,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645280808,
      "ems": null
    },
    {
      "latitude": 49.805054,
      "longitude": 8.174912,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645280817,
      "ems": null
    },
    {
      "latitude": 49.806519,
      "longitude": 8.174273,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645280821,
      "ems": null
    },
    {
      "latitude": 49.808212,
      "longitude": 8.173539,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280825,
      "ems": null
    },
    {
      "latitude": 49.810089,
      "longitude": 8.172744,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645280829,
      "ems": null
    },
    {
      "latitude": 49.811501,
      "longitude": 8.172121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645280833,
      "ems": null
    },
    {
      "latitude": 49.814072,
      "longitude": 8.171298,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280839,
      "ems": null
    },
    {
      "latitude": 49.816635,
      "longitude": 8.170575,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645280845,
      "ems": null
    },
    {
      "latitude": 49.817734,
      "longitude": 8.170359,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280848,
      "ems": null
    },
    {
      "latitude": 49.818111,
      "longitude": 8.170265,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645280850,
      "ems": null
    },
    {
      "latitude": 49.82016,
      "longitude": 8.169925,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645280854,
      "ems": null
    },
    {
      "latitude": 49.82135,
      "longitude": 8.169563,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645280857,
      "ems": null
    },
    {
      "latitude": 49.823685,
      "longitude": 8.168551,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645280863,
      "ems": null
    },
    {
      "latitude": 49.824814,
      "longitude": 8.167964,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645280866,
      "ems": null
    },
    {
      "latitude": 49.825928,
      "longitude": 8.167251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280869,
      "ems": null
    },
    {
      "latitude": 49.827515,
      "longitude": 8.166108,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645280874,
      "ems": null
    },
    {
      "latitude": 49.829407,
      "longitude": 8.164865,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280878,
      "ems": null
    },
    {
      "latitude": 49.830688,
      "longitude": 8.16407,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280881,
      "ems": null
    },
    {
      "latitude": 49.83165,
      "longitude": 8.16342,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280884,
      "ems": null
    },
    {
      "latitude": 49.832886,
      "longitude": 8.162553,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645280887,
      "ems": null
    },
    {
      "latitude": 49.833847,
      "longitude": 8.161902,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645280890,
      "ems": null
    },
    {
      "latitude": 49.836777,
      "longitude": 8.160021,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645280898,
      "ems": null
    },
    {
      "latitude": 49.839153,
      "longitude": 8.15861,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645280905,
      "ems": null
    },
    {
      "latitude": 49.8419,
      "longitude": 8.157125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645280911,
      "ems": null
    },
    {
      "latitude": 49.844147,
      "longitude": 8.155686,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280917,
      "ems": null
    },
    {
      "latitude": 49.846298,
      "longitude": 8.154313,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280923,
      "ems": null
    },
    {
      "latitude": 49.84753,
      "longitude": 8.153415,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645280926,
      "ems": null
    },
    {
      "latitude": 49.848495,
      "longitude": 8.152722,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645280929,
      "ems": null
    },
    {
      "latitude": 49.849594,
      "longitude": 8.151855,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645280932,
      "ems": null
    },
    {
      "latitude": 49.851955,
      "longitude": 8.150296,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645280938,
      "ems": null
    },
    {
      "latitude": 49.854263,
      "longitude": 8.149109,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645280944,
      "ems": null
    },
    {
      "latitude": 49.855446,
      "longitude": 8.148589,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280947,
      "ems": null
    },
    {
      "latitude": 49.856689,
      "longitude": 8.148025,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280950,
      "ems": null
    },
    {
      "latitude": 49.857697,
      "longitude": 8.147519,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280953,
      "ems": null
    },
    {
      "latitude": 49.859024,
      "longitude": 8.14694,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645280956,
      "ems": null
    },
    {
      "latitude": 49.859985,
      "longitude": 8.146507,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280959,
      "ems": null
    },
    {
      "latitude": 49.860901,
      "longitude": 8.146146,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280962,
      "ems": null
    },
    {
      "latitude": 49.862522,
      "longitude": 8.145397,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280965,
      "ems": null
    },
    {
      "latitude": 49.865021,
      "longitude": 8.144194,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645280971,
      "ems": null
    },
    {
      "latitude": 49.867401,
      "longitude": 8.143038,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645280977,
      "ems": null
    },
    {
      "latitude": 49.870331,
      "longitude": 8.141303,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645280985,
      "ems": null
    },
    {
      "latitude": 49.871979,
      "longitude": 8.140146,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645280989,
      "ems": null
    },
    {
      "latitude": 49.873398,
      "longitude": 8.139134,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645280993,
      "ems": null
    },
    {
      "latitude": 49.874905,
      "longitude": 8.137974,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645280997,
      "ems": null
    },
    {
      "latitude": 49.876255,
      "longitude": 8.137009,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645281001,
      "ems": null
    },
    {
      "latitude": 49.877792,
      "longitude": 8.135737,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1645281005,
      "ems": null
    },
    {
      "latitude": 49.878815,
      "longitude": 8.134782,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1645281007,
      "ems": null
    },
    {
      "latitude": 49.879791,
      "longitude": 8.133817,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1645281010,
      "ems": null
    },
    {
      "latitude": 49.880676,
      "longitude": 8.132853,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1645281013,
      "ems": null
    },
    {
      "latitude": 49.881794,
      "longitude": 8.13159,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281017,
      "ems": null
    },
    {
      "latitude": 49.882782,
      "longitude": 8.130461,
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
      "timestamp": 1645281020,
      "ems": null
    },
    {
      "latitude": 49.883606,
      "longitude": 8.129521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281023,
      "ems": null
    },
    {
      "latitude": 49.884659,
      "longitude": 8.128293,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281026,
      "ems": null
    },
    {
      "latitude": 49.885712,
      "longitude": 8.127209,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1645281029,
      "ems": null
    },
    {
      "latitude": 49.886448,
      "longitude": 8.12632,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1645281031,
      "ems": null
    },
    {
      "latitude": 49.887611,
      "longitude": 8.124984,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281035,
      "ems": null
    },
    {
      "latitude": 49.888592,
      "longitude": 8.12387,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1645281038,
      "ems": null
    },
    {
      "latitude": 49.890564,
      "longitude": 8.121571,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1645281044,
      "ems": null
    },
    {
      "latitude": 49.892441,
      "longitude": 8.119403,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281049,
      "ems": null
    },
    {
      "latitude": 49.894409,
      "longitude": 8.117189,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1645281055,
      "ems": null
    },
    {
      "latitude": 49.896378,
      "longitude": 8.115066,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1645281061,
      "ems": null
    },
    {
      "latitude": 49.898666,
      "longitude": 8.112464,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281069,
      "ems": null
    },
    {
      "latitude": 49.901184,
      "longitude": 8.109645,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1645281077,
      "ems": null
    },
    {
      "latitude": 49.903671,
      "longitude": 8.106796,
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
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1645281085,
      "ems": null
    },
    {
      "latitude": 49.905029,
      "longitude": 8.105597,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645281089,
      "ems": null
    },
    {
      "latitude": 49.906036,
      "longitude": 8.104875,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645281092,
      "ems": null
    },
    {
      "latitude": 49.906792,
      "longitude": 8.104422,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645281095,
      "ems": null
    },
    {
      "latitude": 49.907684,
      "longitude": 8.103935,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645281098,
      "ems": null
    },
    {
      "latitude": 49.909538,
      "longitude": 8.103159,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281101,
      "ems": null
    },
    {
      "latitude": 49.910515,
      "longitude": 8.102788,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281104,
      "ems": null
    },
    {
      "latitude": 49.911804,
      "longitude": 8.102128,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645281107,
      "ems": null
    },
    {
      "latitude": 49.912857,
      "longitude": 8.101478,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645281110,
      "ems": null
    },
    {
      "latitude": 49.914001,
      "longitude": 8.100755,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645281113,
      "ems": null
    },
    {
      "latitude": 49.916615,
      "longitude": 8.099002,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645281119,
      "ems": null
    },
    {
      "latitude": 49.918945,
      "longitude": 8.097502,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281125,
      "ems": null
    },
    {
      "latitude": 49.920227,
      "longitude": 8.096562,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645281128,
      "ems": null
    },
    {
      "latitude": 49.920776,
      "longitude": 8.096201,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1645281131,
      "ems": null
    },
    {
      "latitude": 49.922527,
      "longitude": 8.094919,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645281134,
      "ems": null
    },
    {
      "latitude": 49.923782,
      "longitude": 8.094028,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281137,
      "ems": null
    },
    {
      "latitude": 49.926064,
      "longitude": 8.092545,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281143,
      "ems": null
    },
    {
      "latitude": 49.928604,
      "longitude": 8.090924,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645281149,
      "ems": null
    },
    {
      "latitude": 49.930893,
      "longitude": 8.089334,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645281155,
      "ems": null
    },
    {
      "latitude": 49.932953,
      "longitude": 8.087942,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281161,
      "ems": null
    },
    {
      "latitude": 49.935379,
      "longitude": 8.086371,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645281167,
      "ems": null
    },
    {
      "latitude": 49.937656,
      "longitude": 8.084824,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281173,
      "ems": null
    },
    {
      "latitude": 49.939751,
      "longitude": 8.083488,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645281179,
      "ems": null
    },
    {
      "latitude": 49.942123,
      "longitude": 8.08178,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645281185,
      "ems": null
    },
    {
      "latitude": 49.944454,
      "longitude": 8.080296,
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645281191,
      "ems": null
    },
    {
      "latitude": 49.946594,
      "longitude": 8.079071,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645281197,
      "ems": null
    },
    {
      "latitude": 49.947693,
      "longitude": 8.078493,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645281199,
      "ems": null
    },
    {
      "latitude": 49.948929,
      "longitude": 8.077987,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645281203,
      "ems": null
    },
    {
      "latitude": 49.950085,
      "longitude": 8.077475,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281205,
      "ems": null
    },
    {
      "latitude": 49.950737,
      "longitude": 8.077178,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281209,
      "ems": null
    },
    {
      "latitude": 49.952785,
      "longitude": 8.076362,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281213,
      "ems": null
    },
    {
      "latitude": 49.955021,
      "longitude": 8.07562,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281217,
      "ems": null
    },
    {
      "latitude": 49.956509,
      "longitude": 8.075248,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281221,
      "ems": null
    },
    {
      "latitude": 49.957443,
      "longitude": 8.075024,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645281225,
      "ems": null
    },
    {
      "latitude": 49.958542,
      "longitude": 8.074735,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281227,
      "ems": null
    },
    {
      "latitude": 49.961025,
      "longitude": 8.07458,
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
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645281232,
      "ems": null
    },
    {
      "latitude": 49.962845,
      "longitude": 8.075024,
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1645281236,
      "ems": null
    },
    {
      "latitude": 49.964657,
      "longitude": 8.07562,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1645281240,
      "ems": null
    },
    {
      "latitude": 49.966194,
      "longitude": 8.076138,
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1645281244,
      "ems": null
    },
    {
      "latitude": 49.968193,
      "longitude": 8.076733,
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1645281248,
      "ems": null
    },
    {
      "latitude": 49.969437,
      "longitude": 8.07712,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1645281251,
      "ems": null
    },
    {
      "latitude": 49.971546,
      "longitude": 8.077994,
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1645281255,
      "ems": null
    },
    {
      "latitude": 49.973053,
      "longitude": 8.078782,
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1645281259,
      "ems": null
    },
    {
      "latitude": 49.975178,
      "longitude": 8.079925,
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1645281263,
      "ems": null
    },
    {
      "latitude": 49.977364,
      "longitude": 8.081113,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1645281267,
      "ems": null
    },
    {
      "latitude": 49.978271,
      "longitude": 8.081673,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1645281271,
      "ems": null
    },
    {
      "latitude": 49.981018,
      "longitude": 8.083263,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1645281275,
      "ems": null
    },
    {
      "latitude": 49.982021,
      "longitude": 8.083859,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1645281279,
      "ems": null
    },
    {
      "latitude": 49.984955,
      "longitude": 8.085721,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1645281283,
      "ems": null
    },
    {
      "latitude": 49.988754,
      "longitude": 8.087889,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1645281291,
      "ems": null
    },
    {
      "latitude": 49.991425,
      "longitude": 8.089426,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1645281297,
      "ems": null
    },
    {
      "latitude": 49.99379,
      "longitude": 8.090635,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1645281302,
      "ems": null
    },
    {
      "latitude": 49.995667,
      "longitude": 8.091431,
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
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1645281306,
      "ems": null
    },
    {
      "latitude": 49.997849,
      "longitude": 8.092396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1645281310,
      "ems": null
    },
    {
      "latitude": 50.001759,
      "longitude": 8.094103,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1645281319,
      "ems": null
    },
    {
      "latitude": 50.005203,
      "longitude": 8.09581,
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1645281327,
      "ems": null
    },
    {
      "latitude": 50.008835,
      "longitude": 8.097666,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1645281335,
      "ems": null
    },
    {
      "latitude": 50.012978,
      "longitude": 8.099819,
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
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1645281343,
      "ems": null
    },
    {
      "latitude": 50.016632,
      "longitude": 8.101767,
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1645281351,
      "ems": null
    },
    {
      "latitude": 50.019836,
      "longitude": 8.103501,
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
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1645281359,
      "ems": null
    },
    {
      "latitude": 50.021622,
      "longitude": 8.104297,
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
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1645281363,
      "ems": null
    },
    {
      "latitude": 50.022381,
      "longitude": 8.104569,
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
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1645281367,
      "ems": null
    },
    {
      "latitude": 50.025238,
      "longitude": 8.105309,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1645281371,
      "ems": null
    },
    {
      "latitude": 50.026756,
      "longitude": 8.105683,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1645281375,
      "ems": null
    },
    {
      "latitude": 50.028442,
      "longitude": 8.10603,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645281379,
      "ems": null
    },
    {
      "latitude": 50.030228,
      "longitude": 8.106464,
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645281383,
      "ems": null
    },
    {
      "latitude": 50.031784,
      "longitude": 8.106723,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645281387,
      "ems": null
    },
    {
      "latitude": 50.033432,
      "longitude": 8.106898,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645281390,
      "ems": null
    },
    {
      "latitude": 50.034576,
      "longitude": 8.106898,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645281393,
      "ems": null
    },
    {
      "latitude": 50.036255,
      "longitude": 8.106796,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645281396,
      "ems": null
    },
    {
      "latitude": 50.037552,
      "longitude": 8.106682,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645281399,
      "ems": null
    },
    {
      "latitude": 50.039001,
      "longitude": 8.106351,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281402,
      "ems": null
    },
    {
      "latitude": 50.040119,
      "longitude": 8.10598,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281405,
      "ems": null
    },
    {
      "latitude": 50.041653,
      "longitude": 8.105535,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281408,
      "ems": null
    },
    {
      "latitude": 50.042862,
      "longitude": 8.105236,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281411,
      "ems": null
    },
    {
      "latitude": 50.044189,
      "longitude": 8.104875,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645281414,
      "ems": null
    },
    {
      "latitude": 50.045563,
      "longitude": 8.104513,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281417,
      "ems": null
    },
    {
      "latitude": 50.047009,
      "longitude": 8.104124,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281420,
      "ems": null
    },
    {
      "latitude": 50.048264,
      "longitude": 8.103863,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281423,
      "ems": null
    },
    {
      "latitude": 50.049271,
      "longitude": 8.103501,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281426,
      "ems": null
    },
    {
      "latitude": 50.050777,
      "longitude": 8.103086,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281429,
      "ems": null
    },
    {
      "latitude": 50.053291,
      "longitude": 8.102194,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281435,
      "ems": null
    },
    {
      "latitude": 50.055634,
      "longitude": 8.101405,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281441,
      "ems": null
    },
    {
      "latitude": 50.057922,
      "longitude": 8.10061,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281447,
      "ems": null
    },
    {
      "latitude": 50.061344,
      "longitude": 8.099299,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281456,
      "ems": null
    },
    {
      "latitude": 50.063553,
      "longitude": 8.098514,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281462,
      "ems": null
    },
    {
      "latitude": 50.065769,
      "longitude": 8.097815,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281468,
      "ems": null
    },
    {
      "latitude": 50.068726,
      "longitude": 8.096635,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281474,
      "ems": null
    },
    {
      "latitude": 50.0714,
      "longitude": 8.095662,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281480,
      "ems": null
    },
    {
      "latitude": 50.0728,
      "longitude": 8.095334,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281483,
      "ems": null
    },
    {
      "latitude": 50.075546,
      "longitude": 8.094755,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281489,
      "ems": null
    },
    {
      "latitude": 50.078201,
      "longitude": 8.094032,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281495,
      "ems": null
    },
    {
      "latitude": 50.07962,
      "longitude": 8.093743,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281498,
      "ems": null
    },
    {
      "latitude": 50.081131,
      "longitude": 8.093382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281501,
      "ems": null
    },
    {
      "latitude": 50.083923,
      "longitude": 8.092659,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281507,
      "ems": null
    },
    {
      "latitude": 50.086716,
      "longitude": 8.091876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281514,
      "ems": null
    },
    {
      "latitude": 50.089649,
      "longitude": 8.091134,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281520,
      "ems": null
    },
    {
      "latitude": 50.092392,
      "longitude": 8.090635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281526,
      "ems": null
    },
    {
      "latitude": 50.095051,
      "longitude": 8.089946,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281531,
      "ems": null
    },
    {
      "latitude": 50.097565,
      "longitude": 8.089129,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281537,
      "ems": null
    },
    {
      "latitude": 50.098911,
      "longitude": 8.08861,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281541,
      "ems": null
    },
    {
      "latitude": 50.099945,
      "longitude": 8.088178,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281544,
      "ems": null
    },
    {
      "latitude": 50.102783,
      "longitude": 8.087456,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645281550,
      "ems": null
    },
    {
      "latitude": 50.105385,
      "longitude": 8.087125,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281555,
      "ems": null
    },
    {
      "latitude": 50.108139,
      "longitude": 8.086444,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281562,
      "ems": null
    },
    {
      "latitude": 50.11055,
      "longitude": 8.085641,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281568,
      "ems": null
    },
    {
      "latitude": 50.111668,
      "longitude": 8.085418,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645281571,
      "ems": null
    },
    {
      "latitude": 50.113205,
      "longitude": 8.085047,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281574,
      "ems": null
    },
    {
      "latitude": 50.115738,
      "longitude": 8.084348,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281580,
      "ems": null
    },
    {
      "latitude": 50.116974,
      "longitude": 8.083933,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281583,
      "ems": null
    },
    {
      "latitude": 50.119488,
      "longitude": 8.083117,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281589,
      "ems": null
    },
    {
      "latitude": 50.122238,
      "longitude": 8.082324,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281595,
      "ems": null
    },
    {
      "latitude": 50.124657,
      "longitude": 8.081484,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281601,
      "ems": null
    },
    {
      "latitude": 50.127171,
      "longitude": 8.080741,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281607,
      "ems": null
    },
    {
      "latitude": 50.130432,
      "longitude": 8.08001,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281613,
      "ems": null
    },
    {
      "latitude": 50.132942,
      "longitude": 8.07933,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281619,
      "ems": null
    },
    {
      "latitude": 50.135788,
      "longitude": 8.078421,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281625,
      "ems": null
    },
    {
      "latitude": 50.138531,
      "longitude": 8.077772,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281631,
      "ems": null
    },
    {
      "latitude": 50.14109,
      "longitude": 8.077029,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281637,
      "ems": null
    },
    {
      "latitude": 50.14389,
      "longitude": 8.076469,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645281643,
      "ems": null
    },
    {
      "latitude": 50.146023,
      "longitude": 8.076138,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281647,
      "ems": null
    },
    {
      "latitude": 50.15007,
      "longitude": 8.075168,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281656,
      "ems": null
    },
    {
      "latitude": 50.153275,
      "longitude": 8.074445,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281663,
      "ems": null
    },
    {
      "latitude": 50.154263,
      "longitude": 8.07406,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281666,
      "ems": null
    },
    {
      "latitude": 50.155708,
      "longitude": 8.073466,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281669,
      "ems": null
    },
    {
      "latitude": 50.156311,
      "longitude": 8.073244,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645281672,
      "ems": null
    },
    {
      "latitude": 50.157761,
      "longitude": 8.072566,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281675,
      "ems": null
    },
    {
      "latitude": 50.159618,
      "longitude": 8.071834,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281678,
      "ems": null
    },
    {
      "latitude": 50.160873,
      "longitude": 8.071314,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281681,
      "ems": null
    },
    {
      "latitude": 50.161972,
      "longitude": 8.070831,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645281684,
      "ems": null
    },
    {
      "latitude": 50.163296,
      "longitude": 8.070274,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281687,
      "ems": null
    },
    {
      "latitude": 50.166138,
      "longitude": 8.069169,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281695,
      "ems": null
    },
    {
      "latitude": 50.169937,
      "longitude": 8.067578,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645281703,
      "ems": null
    },
    {
      "latitude": 50.173119,
      "longitude": 8.066563,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281711,
      "ems": null
    },
    {
      "latitude": 50.174973,
      "longitude": 8.065989,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281715,
      "ems": null
    },
    {
      "latitude": 50.178844,
      "longitude": 8.064707,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281724,
      "ems": null
    },
    {
      "latitude": 50.182617,
      "longitude": 8.063169,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281734,
      "ems": null
    },
    {
      "latitude": 50.187363,
      "longitude": 8.062183,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645281744,
      "ems": null
    },
    {
      "latitude": 50.189209,
      "longitude": 8.061869,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281748,
      "ems": null
    },
    {
      "latitude": 50.191181,
      "longitude": 8.061515,
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645281752,
      "ems": null
    },
    {
      "latitude": 50.192482,
      "longitude": 8.061293,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281756,
      "ems": null
    },
    {
      "latitude": 50.196579,
      "longitude": 8.060279,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645281765,
      "ems": null
    },
    {
      "latitude": 50.196991,
      "longitude": 8.060134,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281769,
      "ems": null
    },
    {
      "latitude": 50.201797,
      "longitude": 8.058617,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281777,
      "ems": null
    },
    {
      "latitude": 50.203796,
      "longitude": 8.057952,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281781,
      "ems": null
    },
    {
      "latitude": 50.207428,
      "longitude": 8.057026,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281789,
      "ems": null
    },
    {
      "latitude": 50.21101,
      "longitude": 8.055948,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281798,
      "ems": null
    },
    {
      "latitude": 50.215153,
      "longitude": 8.054538,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281806,
      "ems": null
    },
    {
      "latitude": 50.219112,
      "longitude": 8.053127,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281815,
      "ems": null
    },
    {
      "latitude": 50.223175,
      "longitude": 8.05175,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281824,
      "ems": null
    },
    {
      "latitude": 50.227165,
      "longitude": 8.050529,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281833,
      "ems": null
    },
    {
      "latitude": 50.232052,
      "longitude": 8.049118,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281844,
      "ems": null
    },
    {
      "latitude": 50.236755,
      "longitude": 8.047931,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281854,
      "ems": null
    },
    {
      "latitude": 50.241257,
      "longitude": 8.046762,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281864,
      "ems": null
    },
    {
      "latitude": 50.244808,
      "longitude": 8.045778,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281872,
      "ems": null
    },
    {
      "latitude": 50.248672,
      "longitude": 8.04459,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281880,
      "ems": null
    },
    {
      "latitude": 50.250824,
      "longitude": 8.043799,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281885,
      "ems": null
    },
    {
      "latitude": 50.252907,
      "longitude": 8.043032,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281891,
      "ems": null
    },
    {
      "latitude": 50.257423,
      "longitude": 8.041992,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645281900,
      "ems": null
    },
    {
      "latitude": 50.260574,
      "longitude": 8.041269,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281908,
      "ems": null
    },
    {
      "latitude": 50.262451,
      "longitude": 8.040878,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281912,
      "ems": null
    },
    {
      "latitude": 50.263779,
      "longitude": 8.040619,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281916,
      "ems": null
    },
    {
      "latitude": 50.265057,
      "longitude": 8.040359,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645281920,
      "ems": null
    },
    {
      "latitude": 50.269016,
      "longitude": 8.03932,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281928,
      "ems": null
    },
    {
      "latitude": 50.273113,
      "longitude": 8.038355,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281937,
      "ems": null
    },
    {
      "latitude": 50.276882,
      "longitude": 8.037464,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645281946,
      "ems": null
    },
    {
      "latitude": 50.279938,
      "longitude": 8.036716,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645281954,
      "ems": null
    },
    {
      "latitude": 50.283726,
      "longitude": 8.03583,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281963,
      "ems": null
    },
    {
      "latitude": 50.287399,
      "longitude": 8.034692,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645281972,
      "ems": null
    },
    {
      "latitude": 50.290649,
      "longitude": 8.033825,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281980,
      "ems": null
    },
    {
      "latitude": 50.292805,
      "longitude": 8.033158,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645281985,
      "ems": null
    },
    {
      "latitude": 50.295959,
      "longitude": 8.032163,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645281993,
      "ems": null
    },
    {
      "latitude": 50.298843,
      "longitude": 8.031222,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282001,
      "ems": null
    },
    {
      "latitude": 50.300392,
      "longitude": 8.03056,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645282005,
      "ems": null
    },
    {
      "latitude": 50.303329,
      "longitude": 8.029271,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645282013,
      "ems": null
    },
    {
      "latitude": 50.305115,
      "longitude": 8.028404,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645282018,
      "ems": null
    },
    {
      "latitude": 50.307953,
      "longitude": 8.027247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645282026,
      "ems": null
    },
    {
      "latitude": 50.311157,
      "longitude": 8.025874,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645282034,
      "ems": null
    },
    {
      "latitude": 50.314823,
      "longitude": 8.024696,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282042,
      "ems": null
    },
    {
      "latitude": 50.316544,
      "longitude": 8.024177,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282046,
      "ems": null
    },
    {
      "latitude": 50.319305,
      "longitude": 8.0232,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282054,
      "ems": null
    },
    {
      "latitude": 50.32164,
      "longitude": 8.02255,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282058,
      "ems": null
    },
    {
      "latitude": 50.325714,
      "longitude": 8.021356,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282067,
      "ems": null
    },
    {
      "latitude": 50.329346,
      "longitude": 8.020243,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282075,
      "ems": null
    },
    {
      "latitude": 50.333359,
      "longitude": 8.018501,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645282085,
      "ems": null
    },
    {
      "latitude": 50.335831,
      "longitude": 8.017273,
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645282090,
      "ems": null
    },
    {
      "latitude": 50.33754,
      "longitude": 8.016382,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645282094,
      "ems": null
    },
    {
      "latitude": 50.339264,
      "longitude": 8.015417,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645282098,
      "ems": null
    },
    {
      "latitude": 50.341324,
      "longitude": 8.014165,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645282103,
      "ems": null
    },
    {
      "latitude": 50.345688,
      "longitude": 8.012671,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282113,
      "ems": null
    },
    {
      "latitude": 50.347641,
      "longitude": 8.012141,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282118,
      "ems": null
    },
    {
      "latitude": 50.349609,
      "longitude": 8.011491,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282123,
      "ems": null
    },
    {
      "latitude": 50.350113,
      "longitude": 8.011273,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645282127,
      "ems": null
    },
    {
      "latitude": 50.353043,
      "longitude": 8.010479,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282131,
      "ems": null
    },
    {
      "latitude": 50.356487,
      "longitude": 8.009627,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282139,
      "ems": null
    },
    {
      "latitude": 50.359093,
      "longitude": 8.008959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282147,
      "ems": null
    },
    {
      "latitude": 50.362633,
      "longitude": 8.007846,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282155,
      "ems": null
    },
    {
      "latitude": 50.365402,
      "longitude": 8.006865,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282163,
      "ems": null
    },
    {
      "latitude": 50.368217,
      "longitude": 8.005767,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "4451",
      "timestamp": 1645282171,
      "ems": null
    },
    {
      "latitude": 50.370174,
      "longitude": 8.004876,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645282175,
      "ems": null
    },
    {
      "latitude": 50.371399,
      "longitude": 8.004335,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645282179,
      "ems": null
    },
    {
      "latitude": 50.374504,
      "longitude": 8.003317,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282187,
      "ems": null
    },
    {
      "latitude": 50.377029,
      "longitude": 8.002528,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282195,
      "ems": null
    },
    {
      "latitude": 50.380508,
      "longitude": 8.001444,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282204,
      "ems": null
    },
    {
      "latitude": 50.382137,
      "longitude": 8.00109,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645282208,
      "ems": null
    },
    {
      "latitude": 50.38623,
      "longitude": 7.99942,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645282217,
      "ems": null
    },
    {
      "latitude": 50.387604,
      "longitude": 7.998553,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645282221,
      "ems": null
    },
    {
      "latitude": 50.389168,
      "longitude": 7.997676,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645282225,
      "ems": null
    },
    {
      "latitude": 50.390213,
      "longitude": 7.997107,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645282229,
      "ems": null
    },
    {
      "latitude": 50.391998,
      "longitude": 7.995951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1645282233,
      "ems": null
    },
    {
      "latitude": 50.393589,
      "longitude": 7.995078,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645282237,
      "ems": null
    },
    {
      "latitude": 50.394974,
      "longitude": 7.99436,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645282241,
      "ems": null
    },
    {
      "latitude": 50.398106,
      "longitude": 7.992331,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645282249,
      "ems": null
    },
    {
      "latitude": 50.401409,
      "longitude": 7.990104,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282258,
      "ems": null
    },
    {
      "latitude": 50.404358,
      "longitude": 7.987855,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282266,
      "ems": null
    },
    {
      "latitude": 50.405972,
      "longitude": 7.986541,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282270,
      "ems": null
    },
    {
      "latitude": 50.407742,
      "longitude": 7.98513,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282274,
      "ems": null
    },
    {
      "latitude": 50.410625,
      "longitude": 7.982978,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282282,
      "ems": null
    },
    {
      "latitude": 50.413834,
      "longitude": 7.980772,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645282290,
      "ems": null
    },
    {
      "latitude": 50.416027,
      "longitude": 7.979266,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645282295,
      "ems": null
    },
    {
      "latitude": 50.418411,
      "longitude": 7.977881,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645282300,
      "ems": null
    },
    {
      "latitude": 50.419968,
      "longitude": 7.977086,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645282304,
      "ems": null
    },
    {
      "latitude": 50.422031,
      "longitude": 7.976074,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645282308,
      "ems": null
    },
    {
      "latitude": 50.424641,
      "longitude": 7.974961,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282313,
      "ems": null
    },
    {
      "latitude": 50.426826,
      "longitude": 7.974293,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282318,
      "ems": null
    },
    {
      "latitude": 50.428455,
      "longitude": 7.973996,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645282322,
      "ems": null
    },
    {
      "latitude": 50.430267,
      "longitude": 7.973545,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282326,
      "ems": null
    },
    {
      "latitude": 50.432281,
      "longitude": 7.972894,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282330,
      "ems": null
    },
    {
      "latitude": 50.434204,
      "longitude": 7.972388,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282334,
      "ems": null
    },
    {
      "latitude": 50.436604,
      "longitude": 7.971843,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645282339,
      "ems": null
    },
    {
      "latitude": 50.441677,
      "longitude": 7.970729,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282349,
      "ems": null
    },
    {
      "latitude": 50.445633,
      "longitude": 7.96969,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282357,
      "ems": null
    },
    {
      "latitude": 50.448895,
      "longitude": 7.968948,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282365,
      "ems": null
    },
    {
      "latitude": 50.453156,
      "longitude": 7.96769,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282373,
      "ems": null
    },
    {
      "latitude": 50.455673,
      "longitude": 7.966823,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282381,
      "ems": null
    },
    {
      "latitude": 50.461258,
      "longitude": 7.965305,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282391,
      "ems": null
    },
    {
      "latitude": 50.466164,
      "longitude": 7.964345,
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645282401,
      "ems": null
    },
    {
      "latitude": 50.46756,
      "longitude": 7.964123,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645282405,
      "ems": null
    },
    {
      "latitude": 50.47147,
      "longitude": 7.96338,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645282413,
      "ems": null
    },
    {
      "latitude": 50.475174,
      "longitude": 7.962992,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645282421,
      "ems": null
    },
    {
      "latitude": 50.477234,
      "longitude": 7.96292,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1645282425,
      "ems": null
    },
    {
      "latitude": 50.479202,
      "longitude": 7.963064,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645282429,
      "ems": null
    },
    {
      "latitude": 50.481106,
      "longitude": 7.963084,
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
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645282433,
      "ems": null
    },
    {
      "latitude": 50.485016,
      "longitude": 7.962935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645282441,
      "ems": null
    },
    {
      "latitude": 50.48888,
      "longitude": 7.96249,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645282449,
      "ems": null
    },
    {
      "latitude": 50.490921,
      "longitude": 7.962124,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645282453,
      "ems": null
    },
    {
      "latitude": 50.492569,
      "longitude": 7.961835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282457,
      "ems": null
    },
    {
      "latitude": 50.494747,
      "longitude": 7.961228,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282462,
      "ems": null
    },
    {
      "latitude": 50.497166,
      "longitude": 7.96056,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282467,
      "ems": null
    },
    {
      "latitude": 50.498936,
      "longitude": 7.959966,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282471,
      "ems": null
    },
    {
      "latitude": 50.500473,
      "longitude": 7.959446,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645282475,
      "ems": null
    },
    {
      "latitude": 50.501961,
      "longitude": 7.958556,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1645282479,
      "ems": null
    },
    {
      "latitude": 50.503593,
      "longitude": 7.957294,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282483,
      "ems": null
    },
    {
      "latitude": 50.505405,
      "longitude": 7.955809,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282488,
      "ems": null
    },
    {
      "latitude": 50.506989,
      "longitude": 7.954535,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282493,
      "ems": null
    },
    {
      "latitude": 50.507767,
      "longitude": 7.953885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282497,
      "ems": null
    },
    {
      "latitude": 50.509457,
      "longitude": 7.952543,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282501,
      "ems": null
    },
    {
      "latitude": 50.512573,
      "longitude": 7.949982,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1645282509,
      "ems": null
    },
    {
      "latitude": 50.515594,
      "longitude": 7.947235,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1645282518,
      "ems": null
    },
    {
      "latitude": 50.517197,
      "longitude": 7.945573,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1645282522,
      "ems": null
    },
    {
      "latitude": 50.518845,
      "longitude": 7.944055,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1645282526,
      "ems": null
    },
    {
      "latitude": 50.520218,
      "longitude": 7.942754,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1645282530,
      "ems": null
    },
    {
      "latitude": 50.523193,
      "longitude": 7.940007,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1645282538,
      "ems": null
    },
    {
      "latitude": 50.526821,
      "longitude": 7.936806,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1645282546,
      "ems": null
    },
    {
      "latitude": 50.529522,
      "longitude": 7.934282,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1645282554,
      "ems": null
    },
    {
      "latitude": 50.532898,
      "longitude": 7.931189,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1645282562,
      "ems": null
    },
    {
      "latitude": 50.536087,
      "longitude": 7.928566,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1645282570,
      "ems": null
    },
    {
      "latitude": 50.539997,
      "longitude": 7.925522,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1645282580,
      "ems": null
    },
    {
      "latitude": 50.543442,
      "longitude": 7.922701,
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
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1645282590,
      "ems": null
    },
    {
      "latitude": 50.547024,
      "longitude": 7.920104,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645282598,
      "ems": null
    },
    {
      "latitude": 50.550236,
      "longitude": 7.917876,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1645282606,
      "ems": null
    },
    {
      "latitude": 50.551727,
      "longitude": 7.916911,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1645282610,
      "ems": null
    },
    {
      "latitude": 50.553268,
      "longitude": 7.916083,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645282614,
      "ems": null
    },
    {
      "latitude": 50.556847,
      "longitude": 7.914016,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1645282623,
      "ems": null
    },
    {
      "latitude": 50.558617,
      "longitude": 7.913051,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645282627,
      "ems": null
    },
    {
      "latitude": 50.560364,
      "longitude": 7.912252,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1645282631,
      "ems": null
    },
    {
      "latitude": 50.561783,
      "longitude": 7.911567,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1645282635,
      "ems": null
    },
    {
      "latitude": 50.563969,
      "longitude": 7.910527,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1645282640,
      "ems": null
    },
    {
      "latitude": 50.567459,
      "longitude": 7.908783,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1645282649,
      "ems": null
    },
    {
      "latitude": 50.570347,
      "longitude": 7.907632,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282657,
      "ems": null
    },
    {
      "latitude": 50.573189,
      "longitude": 7.907187,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645282661,
      "ems": null
    },
    {
      "latitude": 50.575748,
      "longitude": 7.907187,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645282666,
      "ems": null
    },
    {
      "latitude": 50.576523,
      "longitude": 7.907337,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645282669,
      "ems": null
    },
    {
      "latitude": 50.580048,
      "longitude": 7.907916,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645282673,
      "ems": null
    },
    {
      "latitude": 50.581894,
      "longitude": 7.908226,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645282677,
      "ems": null
    },
    {
      "latitude": 50.584312,
      "longitude": 7.908671,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1645282681,
      "ems": null
    },
    {
      "latitude": 50.586269,
      "longitude": 7.909117,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1645282685,
      "ems": null
    },
    {
      "latitude": 50.588505,
      "longitude": 7.909636,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1645282689,
      "ems": null
    },
    {
      "latitude": 50.589615,
      "longitude": 7.909939,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1645282693,
      "ems": null
    },
    {
      "latitude": 50.595016,
      "longitude": 7.911241,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1645282702,
      "ems": null
    },
    {
      "latitude": 50.600189,
      "longitude": 7.912541,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1645282711,
      "ems": null
    },
    {
      "latitude": 50.604309,
      "longitude": 7.91312,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645282720,
      "ems": null
    },
    {
      "latitude": 50.606369,
      "longitude": 7.913409,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645282723,
      "ems": null
    },
    {
      "latitude": 50.608749,
      "longitude": 7.913626,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645282727,
      "ems": null
    },
    {
      "latitude": 50.61026,
      "longitude": 7.91377,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645282731,
      "ems": null
    },
    {
      "latitude": 50.61499,
      "longitude": 7.914388,
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
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1645282740,
      "ems": null
    },
    {
      "latitude": 50.618546,
      "longitude": 7.914638,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1645282748,
      "ems": null
    },
    {
      "latitude": 50.623978,
      "longitude": 7.914907,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645282759,
      "ems": null
    },
    {
      "latitude": 50.628021,
      "longitude": 7.914782,
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645282767,
      "ems": null
    },
    {
      "latitude": 50.631611,
      "longitude": 7.914684,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645282775,
      "ems": null
    },
    {
      "latitude": 50.633472,
      "longitude": 7.914536,
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
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645282779,
      "ems": null
    },
    {
      "latitude": 50.635941,
      "longitude": 7.914349,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1645282784,
      "ems": null
    },
    {
      "latitude": 50.637802,
      "longitude": 7.914165,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645282788,
      "ems": null
    },
    {
      "latitude": 50.639923,
      "longitude": 7.913987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645282793,
      "ems": null
    },
    {
      "latitude": 50.642899,
      "longitude": 7.913915,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645282800,
      "ems": null
    },
    {
      "latitude": 50.648163,
      "longitude": 7.914204,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645282810,
      "ems": null
    },
    {
      "latitude": 50.653015,
      "longitude": 7.914204,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645282820,
      "ems": null
    },
    {
      "latitude": 50.655121,
      "longitude": 7.914239,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1645282824,
      "ems": null
    },
    {
      "latitude": 50.660019,
      "longitude": 7.914999,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1645282832,
      "ems": null
    },
    {
      "latitude": 50.662811,
      "longitude": 7.915432,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1645282837,
      "ems": null
    },
    {
      "latitude": 50.667801,
      "longitude": 7.915722,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645282846,
      "ems": null
    },
    {
      "latitude": 50.669643,
      "longitude": 7.915575,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645282851,
      "ems": null
    },
    {
      "latitude": 50.673183,
      "longitude": 7.91481,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282856,
      "ems": null
    },
    {
      "latitude": 50.675858,
      "longitude": 7.913719,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645282861,
      "ems": null
    },
    {
      "latitude": 50.67844,
      "longitude": 7.91275,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645282866,
      "ems": null
    },
    {
      "latitude": 50.680443,
      "longitude": 7.912064,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282871,
      "ems": null
    },
    {
      "latitude": 50.683468,
      "longitude": 7.911148,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282876,
      "ems": null
    },
    {
      "latitude": 50.685379,
      "longitude": 7.910614,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282880,
      "ems": null
    },
    {
      "latitude": 50.689426,
      "longitude": 7.909546,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282889,
      "ems": null
    },
    {
      "latitude": 50.692108,
      "longitude": 7.908895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282894,
      "ems": null
    },
    {
      "latitude": 50.694969,
      "longitude": 7.908249,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282903,
      "ems": null
    },
    {
      "latitude": 50.702648,
      "longitude": 7.90657,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645282915,
      "ems": null
    },
    {
      "latitude": 50.707169,
      "longitude": 7.905777,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645282923,
      "ems": null
    },
    {
      "latitude": 50.711838,
      "longitude": 7.905108,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645282932,
      "ems": null
    },
    {
      "latitude": 50.716141,
      "longitude": 7.904143,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645282941,
      "ems": null
    },
    {
      "latitude": 50.718521,
      "longitude": 7.903253,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1645282946,
      "ems": null
    },
    {
      "latitude": 50.72081,
      "longitude": 7.902436,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282951,
      "ems": null
    },
    {
      "latitude": 50.725479,
      "longitude": 7.901174,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282961,
      "ems": null
    },
    {
      "latitude": 50.727741,
      "longitude": 7.900543,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645282966,
      "ems": null
    },
    {
      "latitude": 50.729553,
      "longitude": 7.900135,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645282970,
      "ems": null
    },
    {
      "latitude": 50.732491,
      "longitude": 7.899323,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282976,
      "ems": null
    },
    {
      "latitude": 50.736725,
      "longitude": 7.898102,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645282986,
      "ems": null
    },
    {
      "latitude": 50.74118,
      "longitude": 7.896646,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645282996,
      "ems": null
    },
    {
      "latitude": 50.74498,
      "longitude": 7.89531,
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645283004,
      "ems": null
    },
    {
      "latitude": 50.749054,
      "longitude": 7.89427,
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645283013,
      "ems": null
    },
    {
      "latitude": 50.752552,
      "longitude": 7.8936,
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283020,
      "ems": null
    },
    {
      "latitude": 50.756046,
      "longitude": 7.892151,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645283028,
      "ems": null
    },
    {
      "latitude": 50.758373,
      "longitude": 7.890778,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1645283033,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.889742,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283042,
      "ems": null
    },
    {
      "latitude": 50.766174,
      "longitude": 7.888703,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283050,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.88759,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283059,
      "ems": null
    },
    {
      "latitude": 50.772583,
      "longitude": 7.887145,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283064,
      "ems": null
    },
    {
      "latitude": 50.776474,
      "longitude": 7.886253,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283071,
      "ems": null
    },
    {
      "latitude": 50.778252,
      "longitude": 7.885895,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645283076,
      "ems": null
    },
    {
      "latitude": 50.780113,
      "longitude": 7.885742,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645283080,
      "ems": null
    },
    {
      "latitude": 50.783417,
      "longitude": 7.885208,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283086,
      "ems": null
    },
    {
      "latitude": 50.787277,
      "longitude": 7.884324,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283094,
      "ems": null
    },
    {
      "latitude": 50.792175,
      "longitude": 7.882987,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283104,
      "ems": null
    },
    {
      "latitude": 50.796219,
      "longitude": 7.882004,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283112,
      "ems": null
    },
    {
      "latitude": 50.800224,
      "longitude": 7.880936,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283120,
      "ems": null
    },
    {
      "latitude": 50.804901,
      "longitude": 7.879647,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283129,
      "ems": null
    },
    {
      "latitude": 50.809296,
      "longitude": 7.87883,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283137,
      "ems": null
    },
    {
      "latitude": 50.812977,
      "longitude": 7.877731,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283145,
      "ems": null
    },
    {
      "latitude": 50.817078,
      "longitude": 7.876678,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283153,
      "ems": null
    },
    {
      "latitude": 50.821217,
      "longitude": 7.8759,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1645283161,
      "ems": null
    },
    {
      "latitude": 50.825779,
      "longitude": 7.874985,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283171,
      "ems": null
    },
    {
      "latitude": 50.830715,
      "longitude": 7.873764,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283182,
      "ems": null
    },
    {
      "latitude": 50.835602,
      "longitude": 7.872696,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283192,
      "ems": null
    },
    {
      "latitude": 50.839375,
      "longitude": 7.871933,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645283200,
      "ems": null
    },
    {
      "latitude": 50.844086,
      "longitude": 7.871333,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645283209,
      "ems": null
    },
    {
      "latitude": 50.845844,
      "longitude": 7.871094,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645283213,
      "ems": null
    },
    {
      "latitude": 50.850815,
      "longitude": 7.870294,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283222,
      "ems": null
    },
    {
      "latitude": 50.854691,
      "longitude": 7.869415,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283230,
      "ems": null
    },
    {
      "latitude": 50.856457,
      "longitude": 7.869034,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283234,
      "ems": null
    },
    {
      "latitude": 50.860088,
      "longitude": 7.868118,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283242,
      "ems": null
    },
    {
      "latitude": 50.862122,
      "longitude": 7.867547,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283246,
      "ems": null
    },
    {
      "latitude": 50.86702,
      "longitude": 7.86584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645283256,
      "ems": null
    },
    {
      "latitude": 50.871231,
      "longitude": 7.864652,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1645283265,
      "ems": null
    },
    {
      "latitude": 50.874893,
      "longitude": 7.863541,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283273,
      "ems": null
    },
    {
      "latitude": 50.879196,
      "longitude": 7.862054,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283282,
      "ems": null
    },
    {
      "latitude": 50.883179,
      "longitude": 7.860792,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645283291,
      "ems": null
    },
    {
      "latitude": 50.887276,
      "longitude": 7.859421,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283300,
      "ems": null
    },
    {
      "latitude": 50.891277,
      "longitude": 7.8582,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283308,
      "ems": null
    },
    {
      "latitude": 50.895676,
      "longitude": 7.856932,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1645283317,
      "ems": null
    },
    {
      "latitude": 50.899567,
      "longitude": 7.855967,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283325,
      "ems": null
    },
    {
      "latitude": 50.903427,
      "longitude": 7.854691,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1645283333,
      "ems": null
    },
    {
      "latitude": 50.907257,
      "longitude": 7.853369,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283341,
      "ems": null
    },
    {
      "latitude": 50.90892,
      "longitude": 7.852707,
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
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1645283345,
      "ems": null
    },
    {
      "latitude": 50.912552,
      "longitude": 7.85141,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283353,
      "ems": null
    },
    {
      "latitude": 50.917145,
      "longitude": 7.850029,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283363,
      "ems": null
    },
    {
      "latitude": 50.919907,
      "longitude": 7.849274,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1645283371,
      "ems": null
    },
    {
      "latitude": 50.924423,
      "longitude": 7.847748,
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
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1645283380,
      "ems": null
    },
    {
      "latitude": 50.928242,
      "longitude": 7.84668,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1645283389,
      "ems": null
    },
    {
      "latitude": 50.932991,
      "longitude": 7.84584,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1645283400,
      "ems": null
    },
    {
      "latitude": 50.935223,
      "longitude": 7.845535,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1645283404,
      "ems": null
    },
    {
      "latitude": 50.937698,
      "longitude": 7.845277,
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
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1645283410,
      "ems": null
    },
    {
      "latitude": 50.94017,
      "longitude": 7.845129,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1645283415,
      "ems": null
    },
    {
      "latitude": 50.941833,
      "longitude": 7.845078,
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1645283419,
      "ems": null
    },
    {
      "latitude": 50.943695,
      "longitude": 7.845129,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1645283423,
      "ems": null
    },
    {
      "latitude": 50.947449,
      "longitude": 7.845055,
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
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1645283431,
      "ems": null
    },
    {
      "latitude": 50.951378,
      "longitude": 7.844696,
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
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1645283439,
      "ems": null
    },
    {
      "latitude": 50.955551,
      "longitude": 7.844461,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1645283448,
      "ems": null
    },
    {
      "latitude": 50.959671,
      "longitude": 7.844313,
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
      "heading": 357,
      "squawk": "7742",
      "timestamp": 1645283457,
      "ems": null
    },
    {
      "latitude": 50.963993,
      "longitude": 7.843552,
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645283467,
      "ems": null
    },
    {
      "latitude": 50.965851,
      "longitude": 7.84305,
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283471,
      "ems": null
    },
    {
      "latitude": 50.967716,
      "longitude": 7.842484,
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283476,
      "ems": null
    },
    {
      "latitude": 50.969467,
      "longitude": 7.841937,
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283480,
      "ems": null
    },
    {
      "latitude": 50.971436,
      "longitude": 7.841121,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283484,
      "ems": null
    },
    {
      "latitude": 50.973026,
      "longitude": 7.840424,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "7742",
      "timestamp": 1645283488,
      "ems": null
    },
    {
      "latitude": 50.974823,
      "longitude": 7.839561,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "7742",
      "timestamp": 1645283492,
      "ems": null
    },
    {
      "latitude": 50.977112,
      "longitude": 7.838448,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283497,
      "ems": null
    },
    {
      "latitude": 50.980614,
      "longitude": 7.837296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283506,
      "ems": null
    },
    {
      "latitude": 50.984756,
      "longitude": 7.836296,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645283514,
      "ems": null
    },
    {
      "latitude": 50.987137,
      "longitude": 7.835776,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645283519,
      "ems": null
    },
    {
      "latitude": 50.989609,
      "longitude": 7.835182,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283524,
      "ems": null
    },
    {
      "latitude": 50.992035,
      "longitude": 7.834811,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 355,
      "squawk": "7742",
      "timestamp": 1645283529,
      "ems": null
    },
    {
      "latitude": 50.997372,
      "longitude": 7.833939,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283539,
      "ems": null
    },
    {
      "latitude": 51.001141,
      "longitude": 7.833176,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283547,
      "ems": null
    },
    {
      "latitude": 51.004726,
      "longitude": 7.832413,
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645283555,
      "ems": null
    },
    {
      "latitude": 51.008217,
      "longitude": 7.83165,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283563,
      "ems": null
    },
    {
      "latitude": 51.012863,
      "longitude": 7.830505,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283572,
      "ems": null
    },
    {
      "latitude": 51.01506,
      "longitude": 7.829971,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283577,
      "ems": null
    },
    {
      "latitude": 51.018997,
      "longitude": 7.829169,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283586,
      "ems": null
    },
    {
      "latitude": 51.02153,
      "longitude": 7.828369,
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283591,
      "ems": null
    },
    {
      "latitude": 51.025581,
      "longitude": 7.827225,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283600,
      "ems": null
    },
    {
      "latitude": 51.028976,
      "longitude": 7.826126,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645283608,
      "ems": null
    },
    {
      "latitude": 51.031403,
      "longitude": 7.825235,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283612,
      "ems": null
    },
    {
      "latitude": 51.0336,
      "longitude": 7.82427,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 346,
      "squawk": "7742",
      "timestamp": 1645283617,
      "ems": null
    },
    {
      "latitude": 51.037964,
      "longitude": 7.822571,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283627,
      "ems": null
    },
    {
      "latitude": 51.039455,
      "longitude": 7.821884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7742",
      "timestamp": 1645283631,
      "ems": null
    },
    {
      "latitude": 51.043087,
      "longitude": 7.820358,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "7742",
      "timestamp": 1645283639,
      "ems": null
    },
    {
      "latitude": 51.045834,
      "longitude": 7.819366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283646,
      "ems": null
    },
    {
      "latitude": 51.048672,
      "longitude": 7.818604,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283653,
      "ems": null
    },
    {
      "latitude": 51.051186,
      "longitude": 7.817917,
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283658,
      "ems": null
    },
    {
      "latitude": 51.052956,
      "longitude": 7.817459,
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283662,
      "ems": null
    },
    {
      "latitude": 51.057312,
      "longitude": 7.81655,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 354,
      "squawk": "7742",
      "timestamp": 1645283672,
      "ems": null
    },
    {
      "latitude": 51.06189,
      "longitude": 7.815733,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283682,
      "ems": null
    },
    {
      "latitude": 51.065662,
      "longitude": 7.814865,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283691,
      "ems": null
    },
    {
      "latitude": 51.069626,
      "longitude": 7.8141,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "7742",
      "timestamp": 1645283700,
      "ems": null
    },
    {
      "latitude": 51.071995,
      "longitude": 7.814026,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1645283704,
      "ems": null
    },
    {
      "latitude": 51.073837,
      "longitude": 7.814249,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1645283708,
      "ems": null
    },
    {
      "latitude": 51.075718,
      "longitude": 7.814484,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1645283712,
      "ems": null
    },
    {
      "latitude": 51.077675,
      "longitude": 7.814789,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1645283716,
      "ems": null
    },
    {
      "latitude": 51.080246,
      "longitude": 7.815139,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1645283721,
      "ems": null
    },
    {
      "latitude": 51.081722,
      "longitude": 7.815247,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1645283725,
      "ems": null
    },
    {
      "latitude": 51.086517,
      "longitude": 7.815436,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 360,
      "squawk": "7742",
      "timestamp": 1645283733,
      "ems": null
    },
    {
      "latitude": 51.088303,
      "longitude": 7.815436,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1645283737,
      "ems": null
    },
    {
      "latitude": 51.089779,
      "longitude": 7.815399,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 360,
      "squawk": "7742",
      "timestamp": 1645283741,
      "ems": null
    },
    {
      "latitude": 51.092293,
      "longitude": 7.815475,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1645283746,
      "ems": null
    },
    {
      "latitude": 51.096294,
      "longitude": 7.815552,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1645283754,
      "ems": null
    },
    {
      "latitude": 51.100624,
      "longitude": 7.815628,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1645283762,
      "ems": null
    },
    {
      "latitude": 51.104416,
      "longitude": 7.815214,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283770,
      "ems": null
    },
    {
      "latitude": 51.10611,
      "longitude": 7.81462,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645283774,
      "ems": null
    },
    {
      "latitude": 51.108078,
      "longitude": 7.813951,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 346,
      "squawk": "7742",
      "timestamp": 1645283778,
      "ems": null
    },
    {
      "latitude": 51.109726,
      "longitude": 7.813358,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283782,
      "ems": null
    },
    {
      "latitude": 51.111557,
      "longitude": 7.812764,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283786,
      "ems": null
    },
    {
      "latitude": 51.114079,
      "longitude": 7.811966,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283791,
      "ems": null
    },
    {
      "latitude": 51.114761,
      "longitude": 7.811725,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283793,
      "ems": null
    },
    {
      "latitude": 51.115128,
      "longitude": 7.81165,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283794,
      "ems": null
    },
    {
      "latitude": 51.118973,
      "longitude": 7.810389,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283802,
      "ems": null
    },
    {
      "latitude": 51.121292,
      "longitude": 7.809525,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283807,
      "ems": null
    },
    {
      "latitude": 51.124191,
      "longitude": 7.80831,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283813,
      "ems": null
    },
    {
      "latitude": 51.125839,
      "longitude": 7.807494,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 340,
      "squawk": "7742",
      "timestamp": 1645283817,
      "ems": null
    },
    {
      "latitude": 51.1273,
      "longitude": 7.806625,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1645283819,
      "ems": null
    },
    {
      "latitude": 51.128403,
      "longitude": 7.806009,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1645283822,
      "ems": null
    },
    {
      "latitude": 51.129822,
      "longitude": 7.805192,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "7742",
      "timestamp": 1645283825,
      "ems": null
    },
    {
      "latitude": 51.131302,
      "longitude": 7.804413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7742",
      "timestamp": 1645283829,
      "ems": null
    },
    {
      "latitude": 51.132385,
      "longitude": 7.803782,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1645283832,
      "ems": null
    },
    {
      "latitude": 51.133629,
      "longitude": 7.80304,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1645283834,
      "ems": null
    },
    {
      "latitude": 51.134079,
      "longitude": 7.802742,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7742",
      "timestamp": 1645283837,
      "ems": null
    },
    {
      "latitude": 51.13554,
      "longitude": 7.801895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7742",
      "timestamp": 1645283839,
      "ems": null
    },
    {
      "latitude": 51.138474,
      "longitude": 7.800219,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 340,
      "squawk": "7742",
      "timestamp": 1645283847,
      "ems": null
    },
    {
      "latitude": 51.141823,
      "longitude": 7.798538,
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
      "heading": 343,
      "squawk": "7742",
      "timestamp": 1645283853,
      "ems": null
    },
    {
      "latitude": 51.143692,
      "longitude": 7.797769,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 345,
      "squawk": "7742",
      "timestamp": 1645283858,
      "ems": null
    },
    {
      "latitude": 51.145523,
      "longitude": 7.796953,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283861,
      "ems": null
    },
    {
      "latitude": 51.146255,
      "longitude": 7.796656,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1645283863,
      "ems": null
    },
    {
      "latitude": 51.150696,
      "longitude": 7.794652,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 345,
      "squawk": "7742",
      "timestamp": 1645283872,
      "ems": null
    },
    {
      "latitude": 51.15303,
      "longitude": 7.793835,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283876,
      "ems": null
    },
    {
      "latitude": 51.154716,
      "longitude": 7.79335,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283879,
      "ems": null
    },
    {
      "latitude": 51.157333,
      "longitude": 7.792276,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 345,
      "squawk": "7742",
      "timestamp": 1645283886,
      "ems": null
    },
    {
      "latitude": 51.160538,
      "longitude": 7.791138,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283891,
      "ems": null
    },
    {
      "latitude": 51.163471,
      "longitude": 7.790298,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283897,
      "ems": null
    },
    {
      "latitude": 51.166443,
      "longitude": 7.789529,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283903,
      "ems": null
    },
    {
      "latitude": 51.167847,
      "longitude": 7.789307,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645283907,
      "ems": null
    },
    {
      "latitude": 51.170563,
      "longitude": 7.788713,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283912,
      "ems": null
    },
    {
      "latitude": 51.171711,
      "longitude": 7.788467,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645283915,
      "ems": null
    },
    {
      "latitude": 51.17363,
      "longitude": 7.788045,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283919,
      "ems": null
    },
    {
      "latitude": 51.176319,
      "longitude": 7.787476,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283924,
      "ems": null
    },
    {
      "latitude": 51.179111,
      "longitude": 7.786865,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283930,
      "ems": null
    },
    {
      "latitude": 51.181824,
      "longitude": 7.786337,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645283936,
      "ems": null
    },
    {
      "latitude": 51.185024,
      "longitude": 7.785645,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645283943,
      "ems": null
    },
    {
      "latitude": 51.18721,
      "longitude": 7.785263,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 354,
      "squawk": "7742",
      "timestamp": 1645283948,
      "ems": null
    },
    {
      "latitude": 51.190704,
      "longitude": 7.784729,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645283955,
      "ems": null
    },
    {
      "latitude": 51.193359,
      "longitude": 7.784036,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283961,
      "ems": null
    },
    {
      "latitude": 51.196011,
      "longitude": 7.783356,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645283967,
      "ems": null
    },
    {
      "latitude": 51.200153,
      "longitude": 7.782211,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283976,
      "ems": null
    },
    {
      "latitude": 51.202156,
      "longitude": 7.781601,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645283980,
      "ems": null
    },
    {
      "latitude": 51.205856,
      "longitude": 7.780399,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645283990,
      "ems": null
    },
    {
      "latitude": 51.209656,
      "longitude": 7.779063,
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
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645283997,
      "ems": null
    },
    {
      "latitude": 51.21254,
      "longitude": 7.778098,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284003,
      "ems": null
    },
    {
      "latitude": 51.215191,
      "longitude": 7.777405,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645284009,
      "ems": null
    },
    {
      "latitude": 51.218121,
      "longitude": 7.776642,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284015,
      "ems": null
    },
    {
      "latitude": 51.220963,
      "longitude": 7.775803,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284021,
      "ems": null
    },
    {
      "latitude": 51.222565,
      "longitude": 7.775499,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284024,
      "ems": null
    },
    {
      "latitude": 51.224075,
      "longitude": 7.775203,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645284027,
      "ems": null
    },
    {
      "latitude": 51.225586,
      "longitude": 7.774906,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "7742",
      "timestamp": 1645284030,
      "ems": null
    },
    {
      "latitude": 51.228745,
      "longitude": 7.774386,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645284036,
      "ems": null
    },
    {
      "latitude": 51.231674,
      "longitude": 7.773792,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284042,
      "ems": null
    },
    {
      "latitude": 51.234367,
      "longitude": 7.773132,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284048,
      "ems": null
    },
    {
      "latitude": 51.237305,
      "longitude": 7.772456,
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284054,
      "ems": null
    },
    {
      "latitude": 51.240189,
      "longitude": 7.771683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284060,
      "ems": null
    },
    {
      "latitude": 51.242889,
      "longitude": 7.771046,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284066,
      "ems": null
    },
    {
      "latitude": 51.245636,
      "longitude": 7.770378,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284072,
      "ems": null
    },
    {
      "latitude": 51.248474,
      "longitude": 7.76971,
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284078,
      "ems": null
    },
    {
      "latitude": 51.251083,
      "longitude": 7.769115,
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
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284084,
      "ems": null
    },
    {
      "latitude": 51.253922,
      "longitude": 7.768373,
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645284090,
      "ems": null
    },
    {
      "latitude": 51.256485,
      "longitude": 7.767482,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645284095,
      "ems": null
    },
    {
      "latitude": 51.259644,
      "longitude": 7.766369,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645284102,
      "ems": null
    },
    {
      "latitude": 51.260998,
      "longitude": 7.765884,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7742",
      "timestamp": 1645284105,
      "ems": null
    },
    {
      "latitude": 51.263855,
      "longitude": 7.764958,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645284111,
      "ems": null
    },
    {
      "latitude": 51.266724,
      "longitude": 7.764053,
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
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1645284117,
      "ems": null
    },
    {
      "latitude": 51.269623,
      "longitude": 7.763251,
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
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284123,
      "ems": null
    },
    {
      "latitude": 51.272507,
      "longitude": 7.762434,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1645284129,
      "ems": null
    },
    {
      "latitude": 51.275528,
      "longitude": 7.761544,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645284135,
      "ems": null
    },
    {
      "latitude": 51.27832,
      "longitude": 7.760802,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284141,
      "ems": null
    },
    {
      "latitude": 51.281296,
      "longitude": 7.759911,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1645284147,
      "ems": null
    },
    {
      "latitude": 51.284271,
      "longitude": 7.759169,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284153,
      "ems": null
    },
    {
      "latitude": 51.287251,
      "longitude": 7.758484,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284159,
      "ems": null
    },
    {
      "latitude": 51.290371,
      "longitude": 7.757797,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284165,
      "ems": null
    },
    {
      "latitude": 51.291676,
      "longitude": 7.757568,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 354,
      "squawk": "7742",
      "timestamp": 1645284168,
      "ems": null
    },
    {
      "latitude": 51.294937,
      "longitude": 7.757016,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1645284174,
      "ems": null
    },
    {
      "latitude": 51.298004,
      "longitude": 7.756422,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1645284180,
      "ems": null
    },
    {
      "latitude": 51.301079,
      "longitude": 7.755737,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1645284186,
      "ems": null
    },
    {
      "latitude": 51.30415,
      "longitude": 7.755051,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284192,
      "ems": null
    },
    {
      "latitude": 51.307251,
      "longitude": 7.754417,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284198,
      "ems": null
    },
    {
      "latitude": 51.310501,
      "longitude": 7.753675,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284204,
      "ems": null
    },
    {
      "latitude": 51.313694,
      "longitude": 7.752838,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284210,
      "ems": null
    },
    {
      "latitude": 51.316681,
      "longitude": 7.75182,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284216,
      "ems": null
    },
    {
      "latitude": 51.318115,
      "longitude": 7.751312,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645284219,
      "ems": null
    },
    {
      "latitude": 51.31942,
      "longitude": 7.750854,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645284222,
      "ems": null
    },
    {
      "latitude": 51.32254,
      "longitude": 7.749939,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284228,
      "ems": null
    },
    {
      "latitude": 51.325378,
      "longitude": 7.749296,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284234,
      "ems": null
    },
    {
      "latitude": 51.328312,
      "longitude": 7.748871,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1645284240,
      "ems": null
    },
    {
      "latitude": 51.329681,
      "longitude": 7.748628,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284243,
      "ems": null
    },
    {
      "latitude": 51.331192,
      "longitude": 7.748479,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1645284246,
      "ems": null
    },
    {
      "latitude": 51.332748,
      "longitude": 7.748256,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284249,
      "ems": null
    },
    {
      "latitude": 51.334167,
      "longitude": 7.748108,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284252,
      "ems": null
    },
    {
      "latitude": 51.336731,
      "longitude": 7.747588,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284258,
      "ems": null
    },
    {
      "latitude": 51.339718,
      "longitude": 7.746887,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284264,
      "ems": null
    },
    {
      "latitude": 51.342602,
      "longitude": 7.746201,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284270,
      "ems": null
    },
    {
      "latitude": 51.344833,
      "longitude": 7.745658,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284275,
      "ems": null
    },
    {
      "latitude": 51.346985,
      "longitude": 7.745139,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284279,
      "ems": null
    },
    {
      "latitude": 51.349865,
      "longitude": 7.744293,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284285,
      "ems": null
    },
    {
      "latitude": 51.352798,
      "longitude": 7.743301,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284291,
      "ems": null
    },
    {
      "latitude": 51.355865,
      "longitude": 7.742318,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284297,
      "ems": null
    },
    {
      "latitude": 51.359116,
      "longitude": 7.741427,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284303,
      "ems": null
    },
    {
      "latitude": 51.362228,
      "longitude": 7.740462,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284309,
      "ems": null
    },
    {
      "latitude": 51.365067,
      "longitude": 7.739571,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284315,
      "ems": null
    },
    {
      "latitude": 51.368069,
      "longitude": 7.738419,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645284321,
      "ems": null
    },
    {
      "latitude": 51.370907,
      "longitude": 7.737274,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645284327,
      "ems": null
    },
    {
      "latitude": 51.37384,
      "longitude": 7.736511,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1645284333,
      "ems": null
    },
    {
      "latitude": 51.375374,
      "longitude": 7.736435,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284337,
      "ems": null
    },
    {
      "latitude": 51.376831,
      "longitude": 7.736231,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284340,
      "ems": null
    },
    {
      "latitude": 51.378216,
      "longitude": 7.736053,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284343,
      "ems": null
    },
    {
      "latitude": 51.379425,
      "longitude": 7.735825,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284345,
      "ems": null
    },
    {
      "latitude": 51.380814,
      "longitude": 7.735711,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284348,
      "ems": null
    },
    {
      "latitude": 51.38205,
      "longitude": 7.735563,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284351,
      "ems": null
    },
    {
      "latitude": 51.38343,
      "longitude": 7.735367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284354,
      "ems": null
    },
    {
      "latitude": 51.384842,
      "longitude": 7.735117,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284358,
      "ems": null
    },
    {
      "latitude": 51.387432,
      "longitude": 7.73468,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284363,
      "ems": null
    },
    {
      "latitude": 51.390106,
      "longitude": 7.734227,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284370,
      "ems": null
    },
    {
      "latitude": 51.392738,
      "longitude": 7.733688,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284375,
      "ems": null
    },
    {
      "latitude": 51.394089,
      "longitude": 7.733307,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284378,
      "ems": null
    },
    {
      "latitude": 51.395462,
      "longitude": 7.732965,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284381,
      "ems": null
    },
    {
      "latitude": 51.39814,
      "longitude": 7.732086,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645284387,
      "ems": null
    },
    {
      "latitude": 51.39949,
      "longitude": 7.73148,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1645284390,
      "ems": null
    },
    {
      "latitude": 51.400726,
      "longitude": 7.73096,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645284393,
      "ems": null
    },
    {
      "latitude": 51.402096,
      "longitude": 7.730331,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645284396,
      "ems": null
    },
    {
      "latitude": 51.40361,
      "longitude": 7.729847,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645284400,
      "ems": null
    },
    {
      "latitude": 51.404797,
      "longitude": 7.72934,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1645284402,
      "ems": null
    },
    {
      "latitude": 51.407593,
      "longitude": 7.728288,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284408,
      "ems": null
    },
    {
      "latitude": 51.410477,
      "longitude": 7.72762,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284415,
      "ems": null
    },
    {
      "latitude": 51.411499,
      "longitude": 7.727432,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284417,
      "ems": null
    },
    {
      "latitude": 51.413132,
      "longitude": 7.7271,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284420,
      "ems": null
    },
    {
      "latitude": 51.414574,
      "longitude": 7.726746,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284423,
      "ems": null
    },
    {
      "latitude": 51.416107,
      "longitude": 7.726364,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284427,
      "ems": null
    },
    {
      "latitude": 51.418762,
      "longitude": 7.725754,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284433,
      "ems": null
    },
    {
      "latitude": 51.420135,
      "longitude": 7.725542,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284435,
      "ems": null
    },
    {
      "latitude": 51.423,
      "longitude": 7.725143,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1645284442,
      "ems": null
    },
    {
      "latitude": 51.425793,
      "longitude": 7.724762,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1645284447,
      "ems": null
    },
    {
      "latitude": 51.428696,
      "longitude": 7.724428,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284454,
      "ems": null
    },
    {
      "latitude": 51.431351,
      "longitude": 7.723834,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1645284459,
      "ems": null
    },
    {
      "latitude": 51.434124,
      "longitude": 7.723312,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284465,
      "ems": null
    },
    {
      "latitude": 51.437012,
      "longitude": 7.722855,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284472,
      "ems": null
    },
    {
      "latitude": 51.439758,
      "longitude": 7.722244,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284478,
      "ems": null
    },
    {
      "latitude": 51.441101,
      "longitude": 7.72183,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284480,
      "ems": null
    },
    {
      "latitude": 51.444038,
      "longitude": 7.7211,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1645284487,
      "ems": null
    },
    {
      "latitude": 51.446732,
      "longitude": 7.720419,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284493,
      "ems": null
    },
    {
      "latitude": 51.449524,
      "longitude": 7.719603,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645284499,
      "ems": null
    },
    {
      "latitude": 51.450745,
      "longitude": 7.719116,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1645284502,
      "ems": null
    },
    {
      "latitude": 51.453537,
      "longitude": 7.718201,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284507,
      "ems": null
    },
    {
      "latitude": 51.455444,
      "longitude": 7.717667,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284512,
      "ems": null
    },
    {
      "latitude": 51.458797,
      "longitude": 7.716599,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284519,
      "ems": null
    },
    {
      "latitude": 51.461609,
      "longitude": 7.715669,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1645284525,
      "ems": null
    },
    {
      "latitude": 51.464523,
      "longitude": 7.714844,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284531,
      "ems": null
    },
    {
      "latitude": 51.467651,
      "longitude": 7.714258,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284538,
      "ems": null
    },
    {
      "latitude": 51.468712,
      "longitude": 7.714157,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284540,
      "ems": null
    },
    {
      "latitude": 51.470249,
      "longitude": 7.713928,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284543,
      "ems": null
    },
    {
      "latitude": 51.472366,
      "longitude": 7.71359,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1645284547,
      "ems": null
    },
    {
      "latitude": 51.473835,
      "longitude": 7.713318,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284550,
      "ems": null
    },
    {
      "latitude": 51.475323,
      "longitude": 7.713089,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1645284553,
      "ems": null
    },
    {
      "latitude": 51.478317,
      "longitude": 7.712402,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1645284559,
      "ems": null
    },
    {
      "latitude": 51.48111,
      "longitude": 7.71166,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284565,
      "ems": null
    },
    {
      "latitude": 51.482483,
      "longitude": 7.711215,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284567,
      "ems": null
    },
    {
      "latitude": 51.484131,
      "longitude": 7.710769,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284571,
      "ems": null
    },
    {
      "latitude": 51.485657,
      "longitude": 7.710266,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1645284574,
      "ems": null
    },
    {
      "latitude": 51.487106,
      "longitude": 7.709804,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1645284577,
      "ems": null
    },
    {
      "latitude": 51.488449,
      "longitude": 7.709274,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1645284579,
      "ems": null
    },
    {
      "latitude": 51.489761,
      "longitude": 7.708542,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1645284583,
      "ems": null
    },
    {
      "latitude": 51.491245,
      "longitude": 7.707596,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1645284586,
      "ems": null
    },
    {
      "latitude": 51.492371,
      "longitude": 7.706686,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1645284588,
      "ems": null
    },
    {
      "latitude": 51.493759,
      "longitude": 7.705383,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1645284592,
      "ems": null
    },
    {
      "latitude": 51.494888,
      "longitude": 7.704163,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645284595,
      "ems": null
    },
    {
      "latitude": 51.495945,
      "longitude": 7.702866,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1645284598,
      "ems": null
    },
    {
      "latitude": 51.497131,
      "longitude": 7.701416,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645284601,
      "ems": null
    },
    {
      "latitude": 51.498135,
      "longitude": 7.700119,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645284603,
      "ems": null
    },
    {
      "latitude": 51.499374,
      "longitude": 7.698447,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1645284607,
      "ems": null
    },
    {
      "latitude": 51.500088,
      "longitude": 7.697601,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645284609,
      "ems": null
    },
    {
      "latitude": 51.500927,
      "longitude": 7.696533,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1645284611,
      "ems": null
    },
    {
      "latitude": 51.50209,
      "longitude": 7.695007,
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
      "squawk": "7000",
      "timestamp": 1645284615,
      "ems": null
    },
    {
      "latitude": 51.503021,
      "longitude": 7.69371,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1645284617,
      "ems": null
    },
    {
      "latitude": 51.504135,
      "longitude": 7.692211,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1645284621,
      "ems": null
    },
    {
      "latitude": 51.506466,
      "longitude": 7.689362,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645284627,
      "ems": null
    },
    {
      "latitude": 51.508392,
      "longitude": 7.687015,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1645284633,
      "ems": null
    },
    {
      "latitude": 51.510654,
      "longitude": 7.68425,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1645284639,
      "ems": null
    },
    {
      "latitude": 51.513107,
      "longitude": 7.681077,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1645284646,
      "ems": null
    },
    {
      "latitude": 51.514381,
      "longitude": 7.679214,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1645284649,
      "ems": null
    },
    {
      "latitude": 51.515305,
      "longitude": 7.677736,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1645284653,
      "ems": null
    },
    {
      "latitude": 51.516754,
      "longitude": 7.675323,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1645284657,
      "ems": null
    },
    {
      "latitude": 51.517639,
      "longitude": 7.67395,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1645284660,
      "ems": null
    },
    {
      "latitude": 51.518383,
      "longitude": 7.672729,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1645284663,
      "ems": null
    },
    {
      "latitude": 51.519222,
      "longitude": 7.671356,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1645284666,
      "ems": null
    },
    {
      "latitude": 51.52002,
      "longitude": 7.670165,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1645284670,
      "ems": null
    },
    {
      "latitude": 51.52066,
      "longitude": 7.669125,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1645284672,
      "ems": null
    },
    {
      "latitude": 51.522202,
      "longitude": 7.667007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1645284679,
      "ems": null
    },
    {
      "latitude": 51.522903,
      "longitude": 7.66623,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1645284681,
      "ems": null
    },
    {
      "latitude": 51.523499,
      "longitude": 7.665636,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1645284684,
      "ems": null
    },
    {
      "latitude": 51.524368,
      "longitude": 7.664523,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1645284687,
      "ems": null
    },
    {
      "latitude": 51.524994,
      "longitude": 7.663422,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1645284691,
      "ems": null
    },
    {
      "latitude": 51.525284,
      "longitude": 7.662593,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1645284693,
      "ems": null
    },
    {
      "latitude": 51.5256,
      "longitude": 7.661285,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1645284696,
      "ems": null
    },
    {
      "latitude": 51.525879,
      "longitude": 7.660143,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1645284700,
      "ems": null
    },
    {
      "latitude": 51.526112,
      "longitude": 7.658997,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1645284703,
      "ems": null
    },
    {
      "latitude": 51.526344,
      "longitude": 7.657852,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1645284706,
      "ems": null
    },
    {
      "latitude": 51.526566,
      "longitude": 7.656654,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1645284709,
      "ems": null
    },
    {
      "latitude": 51.526764,
      "longitude": 7.655487,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1645284712,
      "ems": null
    },
    {
      "latitude": 51.526932,
      "longitude": 7.654353,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1645284715,
      "ems": null
    },
    {
      "latitude": 51.527184,
      "longitude": 7.653122,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1645284718,
      "ems": null
    },
    {
      "latitude": 51.527481,
      "longitude": 7.651978,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1645284721,
      "ems": null
    },
    {
      "latitude": 51.527847,
      "longitude": 7.650641,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1645284724,
      "ems": null
    },
    {
      "latitude": 51.528214,
      "longitude": 7.649454,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1645284727,
      "ems": null
    },
    {
      "latitude": 51.528717,
      "longitude": 7.647095,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1645284733,
      "ems": null
    },
    {
      "latitude": 51.529129,
      "longitude": 7.645,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1645284739,
      "ems": null
    },
    {
      "latitude": 51.529037,
      "longitude": 7.643663,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1645284742,
      "ems": null
    },
    {
      "latitude": 51.528904,
      "longitude": 7.642746,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1645284744,
      "ems": null
    },
    {
      "latitude": 51.52858,
      "longitude": 7.641511,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1645284748,
      "ems": null
    },
    {
      "latitude": 51.528305,
      "longitude": 7.64062,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1645284751,
      "ems": null
    },
    {
      "latitude": 51.528076,
      "longitude": 7.639803,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284754,
      "ems": null
    },
    {
      "latitude": 51.527786,
      "longitude": 7.638931,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284757,
      "ems": null
    },
    {
      "latitude": 51.527508,
      "longitude": 7.638245,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284759,
      "ems": null
    },
    {
      "latitude": 51.527184,
      "longitude": 7.637405,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284763,
      "ems": null
    },
    {
      "latitude": 51.526951,
      "longitude": 7.636642,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284766,
      "ems": null
    },
    {
      "latitude": 51.526623,
      "longitude": 7.635651,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284769,
      "ems": null
    },
    {
      "latitude": 51.526291,
      "longitude": 7.63483,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1645284772,
      "ems": null
    },
    {
      "latitude": 51.52597,
      "longitude": 7.633972,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284775,
      "ems": null
    },
    {
      "latitude": 51.525375,
      "longitude": 7.632158,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284781,
      "ems": null
    },
    {
      "latitude": 51.524715,
      "longitude": 7.630386,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284787,
      "ems": null
    },
    {
      "latitude": 51.524109,
      "longitude": 7.628555,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284793,
      "ems": null
    },
    {
      "latitude": 51.523273,
      "longitude": 7.626343,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1645284800,
      "ems": null
    },
    {
      "latitude": 51.5224,
      "longitude": 7.623844,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284808,
      "ems": null
    },
    {
      "latitude": 51.521828,
      "longitude": 7.622223,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284814,
      "ems": null
    },
    {
      "latitude": 51.521408,
      "longitude": 7.621002,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 57.4,
        "kts": 31,
        "mph": 35.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284819,
      "ems": null
    },
    {
      "latitude": 51.521038,
      "longitude": 7.619858,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 44.4,
        "kts": 24,
        "mph": 27.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1645284826,
      "ems": null
    },
    {
      "latitude": 51.520706,
      "longitude": 7.619019,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 40.7,
        "kts": 22,
        "mph": 25.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284832,
      "ems": null
    },
    {
      "latitude": 51.520386,
      "longitude": 7.618202,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284837,
      "ems": null
    },
    {
      "latitude": 51.520012,
      "longitude": 7.617111,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284844,
      "ems": null
    },
    {
      "latitude": 51.519733,
      "longitude": 7.616196,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 40.7,
        "kts": 22,
        "mph": 25.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284850,
      "ems": null
    },
    {
      "latitude": 51.519409,
      "longitude": 7.615356,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284856,
      "ems": null
    },
    {
      "latitude": 51.51915,
      "longitude": 7.614491,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284862,
      "ems": null
    },
    {
      "latitude": 51.518848,
      "longitude": 7.613754,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284868,
      "ems": null
    },
    {
      "latitude": 51.518509,
      "longitude": 7.612783,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 44.4,
        "kts": 24,
        "mph": 27.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1645284874,
      "ems": null
    },
    {
      "latitude": 51.518196,
      "longitude": 7.611771,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1645284880,
      "ems": null
    },
    {
      "latitude": 51.517826,
      "longitude": 7.610779,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 40.7,
        "kts": 22,
        "mph": 25.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284886,
      "ems": null
    },
    {
      "latitude": 51.517548,
      "longitude": 7.610016,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 35.2,
        "kts": 19,
        "mph": 21.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284892,
      "ems": null
    },
    {
      "latitude": 51.517319,
      "longitude": 7.609368,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 29.6,
        "kts": 16,
        "mph": 18.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1645284898,
      "ems": null
    },
    {
      "latitude": 51.517128,
      "longitude": 7.608871,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1645284904,
      "ems": null
    },
    {
      "latitude": 51.516907,
      "longitude": 7.608255,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284909,
      "ems": null
    },
    {
      "latitude": 51.516708,
      "longitude": 7.607727,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284916,
      "ems": null
    },
    {
      "latitude": 51.516521,
      "longitude": 7.607117,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1645284922,
      "ems": null
    },
    {
      "latitude": 51.516266,
      "longitude": 7.606473,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1645284929,
      "ems": null
    },
    {
      "latitude": 51.51601,
      "longitude": 7.606125,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1645284937,
      "ems": null
    },
    {
      "latitude": 51.515808,
      "longitude": 7.606028,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1645284944,
      "ems": null
    }
  ],
};
