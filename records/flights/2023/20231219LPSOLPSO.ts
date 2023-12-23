import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231219LPSOLPSO",
    callsign: "RVP103",
    name: "NAV 5",
    description: "After landing tires showed sings of wear.",
  },
  pilotLog: {
    departure: new Date(2023, 11, 19, 10, 10).getTime(),
    arrival: new Date(2023, 11, 19, 13, 20).getTime(),
    singleEnginePistonTime: 190,
    multiEnginePistonTime: 0,
    picTime: 190,
    dualTime: 0,
    ifrTime: 0,
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
      modes: "48B048",
      registration: "CS-ECC",
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
      "latitude": 39.213928,
      "longitude": -8.056335,
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
      "heading": 23,
      "squawk": "0",
      "timestamp": 1702981415,
      "ems": null
    },
    {
      "latitude": 39.216339,
      "longitude": -8.055009,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 22,
      "squawk": "0",
      "timestamp": 1702981424,
      "ems": null
    },
    {
      "latitude": 39.218903,
      "longitude": -8.053755,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1702981433,
      "ems": null
    },
    {
      "latitude": 39.221703,
      "longitude": -8.052368,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 21,
      "squawk": "0",
      "timestamp": 1702981442,
      "ems": null
    },
    {
      "latitude": 39.224358,
      "longitude": -8.051025,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 22,
      "squawk": "0",
      "timestamp": 1702981451,
      "ems": null
    },
    {
      "latitude": 39.226822,
      "longitude": -8.049635,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 25,
      "squawk": "0",
      "timestamp": 1702981460,
      "ems": null
    },
    {
      "latitude": 39.227646,
      "longitude": -8.049038,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 26,
      "squawk": "0",
      "timestamp": 1702981462,
      "ems": null
    },
    {
      "latitude": 39.228825,
      "longitude": -8.048279,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 27,
      "squawk": "0",
      "timestamp": 1702981465,
      "ems": null
    },
    {
      "latitude": 39.229942,
      "longitude": -8.047607,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "0",
      "timestamp": 1702981469,
      "ems": null
    },
    {
      "latitude": 39.230392,
      "longitude": -8.047366,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "0",
      "timestamp": 1702981471,
      "ems": null
    },
    {
      "latitude": 39.23172,
      "longitude": -8.047068,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 3,
      "squawk": "0",
      "timestamp": 1702981475,
      "ems": null
    },
    {
      "latitude": 39.232967,
      "longitude": -8.047302,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "0",
      "timestamp": 1702981478,
      "ems": null
    },
    {
      "latitude": 39.233688,
      "longitude": -8.047605,
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
      "heading": 339,
      "squawk": "0",
      "timestamp": 1702981480,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -8.04856,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 324,
      "squawk": "0",
      "timestamp": 1702981484,
      "ems": null
    },
    {
      "latitude": 39.235519,
      "longitude": -8.049276,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 318,
      "squawk": "0",
      "timestamp": 1702981487,
      "ems": null
    },
    {
      "latitude": 39.236343,
      "longitude": -8.050411,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 311,
      "squawk": "0",
      "timestamp": 1702981490,
      "ems": null
    },
    {
      "latitude": 39.237019,
      "longitude": -8.051514,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 304,
      "squawk": "0",
      "timestamp": 1702981493,
      "ems": null
    },
    {
      "latitude": 39.237625,
      "longitude": -8.05274,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 301,
      "squawk": "3214",
      "timestamp": 1702981496,
      "ems": null
    },
    {
      "latitude": 39.238083,
      "longitude": -8.053755,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702981499,
      "ems": null
    },
    {
      "latitude": 39.23851,
      "longitude": -8.055115,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702981502,
      "ems": null
    },
    {
      "latitude": 39.238556,
      "longitude": -8.056335,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702981505,
      "ems": null
    },
    {
      "latitude": 39.238461,
      "longitude": -8.056946,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 262,
      "squawk": "3214",
      "timestamp": 1702981507,
      "ems": null
    },
    {
      "latitude": 39.237671,
      "longitude": -8.058594,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702981512,
      "ems": null
    },
    {
      "latitude": 39.236847,
      "longitude": -8.059367,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702981515,
      "ems": null
    },
    {
      "latitude": 39.235977,
      "longitude": -8.060083,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981518,
      "ems": null
    },
    {
      "latitude": 39.235065,
      "longitude": -8.06073,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702981521,
      "ems": null
    },
    {
      "latitude": 39.234146,
      "longitude": -8.061337,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981524,
      "ems": null
    },
    {
      "latitude": 39.233715,
      "longitude": -8.061646,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981525,
      "ems": null
    },
    {
      "latitude": 39.232635,
      "longitude": -8.062233,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702981529,
      "ems": null
    },
    {
      "latitude": 39.231857,
      "longitude": -8.062652,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702981532,
      "ems": null
    },
    {
      "latitude": 39.231125,
      "longitude": -8.063069,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702981533,
      "ems": null
    },
    {
      "latitude": 39.229805,
      "longitude": -8.063782,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702981537,
      "ems": null
    },
    {
      "latitude": 39.228607,
      "longitude": -8.064383,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702981540,
      "ems": null
    },
    {
      "latitude": 39.228058,
      "longitude": -8.064681,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702981541,
      "ems": null
    },
    {
      "latitude": 39.226639,
      "longitude": -8.065338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702981545,
      "ems": null
    },
    {
      "latitude": 39.22543,
      "longitude": -8.065918,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702981548,
      "ems": null
    },
    {
      "latitude": 39.224533,
      "longitude": -8.066353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702981550,
      "ems": null
    },
    {
      "latitude": 39.222729,
      "longitude": -8.0672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702981554,
      "ems": null
    },
    {
      "latitude": 39.218769,
      "longitude": -8.069519,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981563,
      "ems": null
    },
    {
      "latitude": 39.214909,
      "longitude": -8.071838,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702981572,
      "ems": null
    },
    {
      "latitude": 39.21199,
      "longitude": -8.073459,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702981578,
      "ems": null
    },
    {
      "latitude": 39.211075,
      "longitude": -8.073996,
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981580,
      "ems": null
    },
    {
      "latitude": 39.20929,
      "longitude": -8.07513,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981584,
      "ems": null
    },
    {
      "latitude": 39.20517,
      "longitude": -8.077698,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981593,
      "ems": null
    },
    {
      "latitude": 39.201187,
      "longitude": -8.080206,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981602,
      "ems": null
    },
    {
      "latitude": 39.197823,
      "longitude": -8.082458,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981611,
      "ems": null
    },
    {
      "latitude": 39.193863,
      "longitude": -8.085101,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981620,
      "ems": null
    },
    {
      "latitude": 39.190018,
      "longitude": -8.087549,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981629,
      "ems": null
    },
    {
      "latitude": 39.187302,
      "longitude": -8.088928,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702981635,
      "ems": null
    },
    {
      "latitude": 39.186275,
      "longitude": -8.089355,
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
      "heading": 197,
      "squawk": "3214",
      "timestamp": 1702981637,
      "ems": null
    },
    {
      "latitude": 39.184525,
      "longitude": -8.089997,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981641,
      "ems": null
    },
    {
      "latitude": 39.183159,
      "longitude": -8.090393,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981645,
      "ems": null
    },
    {
      "latitude": 39.182041,
      "longitude": -8.090698,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981647,
      "ems": null
    },
    {
      "latitude": 39.180832,
      "longitude": -8.091064,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981650,
      "ems": null
    },
    {
      "latitude": 39.179306,
      "longitude": -8.09155,
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
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981653,
      "ems": null
    },
    {
      "latitude": 39.178223,
      "longitude": -8.091919,
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
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981656,
      "ems": null
    },
    {
      "latitude": 39.176781,
      "longitude": -8.092346,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981659,
      "ems": null
    },
    {
      "latitude": 39.17543,
      "longitude": -8.092773,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702981662,
      "ems": null
    },
    {
      "latitude": 39.171986,
      "longitude": -8.093933,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702981670,
      "ems": null
    },
    {
      "latitude": 39.167496,
      "longitude": -8.09549,
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
      "heading": 195,
      "squawk": "3214",
      "timestamp": 1702981680,
      "ems": null
    },
    {
      "latitude": 39.163467,
      "longitude": -8.096802,
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
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702981690,
      "ems": null
    },
    {
      "latitude": 39.159416,
      "longitude": -8.098145,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702981699,
      "ems": null
    },
    {
      "latitude": 39.155457,
      "longitude": -8.099491,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702981708,
      "ems": null
    },
    {
      "latitude": 39.151455,
      "longitude": -8.10083,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702981717,
      "ems": null
    },
    {
      "latitude": 39.147408,
      "longitude": -8.102234,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 197,
      "squawk": "3214",
      "timestamp": 1702981726,
      "ems": null
    },
    {
      "latitude": 39.146194,
      "longitude": -8.102844,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702981729,
      "ems": null
    },
    {
      "latitude": 39.144882,
      "longitude": -8.103611,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702981732,
      "ems": null
    },
    {
      "latitude": 39.144054,
      "longitude": -8.104187,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981734,
      "ems": null
    },
    {
      "latitude": 39.142639,
      "longitude": -8.105283,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981738,
      "ems": null
    },
    {
      "latitude": 39.141357,
      "longitude": -8.106238,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981741,
      "ems": null
    },
    {
      "latitude": 39.140305,
      "longitude": -8.107074,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981744,
      "ems": null
    },
    {
      "latitude": 39.139118,
      "longitude": -8.108032,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981747,
      "ems": null
    },
    {
      "latitude": 39.138428,
      "longitude": -8.108567,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702981750,
      "ems": null
    },
    {
      "latitude": 39.136837,
      "longitude": -8.109863,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702981753,
      "ems": null
    },
    {
      "latitude": 39.135723,
      "longitude": -8.110779,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702981756,
      "ems": null
    },
    {
      "latitude": 39.134491,
      "longitude": -8.111792,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981759,
      "ems": null
    },
    {
      "latitude": 39.133621,
      "longitude": -8.112448,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981761,
      "ems": null
    },
    {
      "latitude": 39.130646,
      "longitude": -8.114837,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702981769,
      "ems": null
    },
    {
      "latitude": 39.12669,
      "longitude": -8.118347,
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
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702981780,
      "ems": null
    },
    {
      "latitude": 39.122967,
      "longitude": -8.121155,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981789,
      "ems": null
    },
    {
      "latitude": 39.119381,
      "longitude": -8.123657,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981798,
      "ems": null
    },
    {
      "latitude": 39.11824,
      "longitude": -8.12445,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981801,
      "ems": null
    },
    {
      "latitude": 39.117096,
      "longitude": -8.125226,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981804,
      "ems": null
    },
    {
      "latitude": 39.115768,
      "longitude": -8.126122,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702981807,
      "ems": null
    },
    {
      "latitude": 39.114624,
      "longitude": -8.126838,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702981810,
      "ems": null
    },
    {
      "latitude": 39.110825,
      "longitude": -8.129286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981820,
      "ems": null
    },
    {
      "latitude": 39.107372,
      "longitude": -8.131592,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981828,
      "ems": null
    },
    {
      "latitude": 39.103695,
      "longitude": -8.13385,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702981837,
      "ems": null
    },
    {
      "latitude": 39.099876,
      "longitude": -8.135986,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702981847,
      "ems": null
    },
    {
      "latitude": 39.096386,
      "longitude": -8.137939,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702981855,
      "ems": null
    },
    {
      "latitude": 39.092606,
      "longitude": -8.140391,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702981864,
      "ems": null
    },
    {
      "latitude": 39.091217,
      "longitude": -8.141418,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702981868,
      "ems": null
    },
    {
      "latitude": 39.090008,
      "longitude": -8.142212,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981871,
      "ems": null
    },
    {
      "latitude": 39.089493,
      "longitude": -8.142601,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981873,
      "ems": null
    },
    {
      "latitude": 39.08577,
      "longitude": -8.145081,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702981881,
      "ems": null
    },
    {
      "latitude": 39.082325,
      "longitude": -8.147461,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702981890,
      "ems": null
    },
    {
      "latitude": 39.078506,
      "longitude": -8.150184,
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
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702981899,
      "ems": null
    },
    {
      "latitude": 39.07618,
      "longitude": -8.152161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "3214",
      "timestamp": 1702981905,
      "ems": null
    },
    {
      "latitude": 39.075027,
      "longitude": -8.153229,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 216,
      "squawk": "3214",
      "timestamp": 1702981908,
      "ems": null
    },
    {
      "latitude": 39.073837,
      "longitude": -8.154304,
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
      "heading": 215,
      "squawk": "3214",
      "timestamp": 1702981911,
      "ems": null
    },
    {
      "latitude": 39.070038,
      "longitude": -8.156812,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702981920,
      "ems": null
    },
    {
      "latitude": 39.066147,
      "longitude": -8.159438,
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
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702981929,
      "ems": null
    },
    {
      "latitude": 39.062634,
      "longitude": -8.162659,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 217,
      "squawk": "3214",
      "timestamp": 1702981938,
      "ems": null
    },
    {
      "latitude": 39.061615,
      "longitude": -8.163678,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 218,
      "squawk": "3214",
      "timestamp": 1702981941,
      "ems": null
    },
    {
      "latitude": 39.060608,
      "longitude": -8.164812,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 221,
      "squawk": "3214",
      "timestamp": 1702981944,
      "ems": null
    },
    {
      "latitude": 39.059647,
      "longitude": -8.165947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702981947,
      "ems": null
    },
    {
      "latitude": 39.058632,
      "longitude": -8.167175,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 224,
      "squawk": "3214",
      "timestamp": 1702981951,
      "ems": null
    },
    {
      "latitude": 39.057701,
      "longitude": -8.168396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702981953,
      "ems": null
    },
    {
      "latitude": 39.056854,
      "longitude": -8.169648,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 230,
      "squawk": "3214",
      "timestamp": 1702981956,
      "ems": null
    },
    {
      "latitude": 39.056118,
      "longitude": -8.171082,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "3214",
      "timestamp": 1702981959,
      "ems": null
    },
    {
      "latitude": 39.055618,
      "longitude": -8.172515,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702981962,
      "ems": null
    },
    {
      "latitude": 39.055344,
      "longitude": -8.174127,
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
      "heading": 261,
      "squawk": "3214",
      "timestamp": 1702981965,
      "ems": null
    },
    {
      "latitude": 39.055298,
      "longitude": -8.175619,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702981968,
      "ems": null
    },
    {
      "latitude": 39.055511,
      "longitude": -8.177612,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702981972,
      "ems": null
    },
    {
      "latitude": 39.05584,
      "longitude": -8.178955,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702981975,
      "ems": null
    },
    {
      "latitude": 39.056351,
      "longitude": -8.180481,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702981978,
      "ems": null
    },
    {
      "latitude": 39.057003,
      "longitude": -8.182129,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702981981,
      "ems": null
    },
    {
      "latitude": 39.057632,
      "longitude": -8.183501,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702981984,
      "ems": null
    },
    {
      "latitude": 39.058258,
      "longitude": -8.184998,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702981987,
      "ems": null
    },
    {
      "latitude": 39.058777,
      "longitude": -8.186486,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702981990,
      "ems": null
    },
    {
      "latitude": 39.05928,
      "longitude": -8.188158,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702981993,
      "ems": null
    },
    {
      "latitude": 39.059692,
      "longitude": -8.189651,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702981996,
      "ems": null
    },
    {
      "latitude": 39.060165,
      "longitude": -8.191223,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702981999,
      "ems": null
    },
    {
      "latitude": 39.06068,
      "longitude": -8.192871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982002,
      "ems": null
    },
    {
      "latitude": 39.062164,
      "longitude": -8.197533,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982011,
      "ems": null
    },
    {
      "latitude": 39.062668,
      "longitude": -8.199025,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982014,
      "ems": null
    },
    {
      "latitude": 39.064262,
      "longitude": -8.203674,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982023,
      "ems": null
    },
    {
      "latitude": 39.065872,
      "longitude": -8.208519,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982032,
      "ems": null
    },
    {
      "latitude": 39.066925,
      "longitude": -8.211683,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982038,
      "ems": null
    },
    {
      "latitude": 39.068527,
      "longitude": -8.21634,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982048,
      "ems": null
    },
    {
      "latitude": 39.069946,
      "longitude": -8.22058,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982056,
      "ems": null
    },
    {
      "latitude": 39.071339,
      "longitude": -8.224731,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982065,
      "ems": null
    },
    {
      "latitude": 39.072784,
      "longitude": -8.229118,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982075,
      "ems": null
    },
    {
      "latitude": 39.074249,
      "longitude": -8.233059,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982083,
      "ems": null
    },
    {
      "latitude": 39.075809,
      "longitude": -8.237366,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982093,
      "ems": null
    },
    {
      "latitude": 39.077499,
      "longitude": -8.241956,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982102,
      "ems": null
    },
    {
      "latitude": 39.079067,
      "longitude": -8.246155,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982110,
      "ems": null
    },
    {
      "latitude": 39.080975,
      "longitude": -8.251343,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982120,
      "ems": null
    },
    {
      "latitude": 39.082233,
      "longitude": -8.254517,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982129,
      "ems": null
    },
    {
      "latitude": 39.084,
      "longitude": -8.259271,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982136,
      "ems": null
    },
    {
      "latitude": 39.085724,
      "longitude": -8.264282,
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
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982145,
      "ems": null
    },
    {
      "latitude": 39.086197,
      "longitude": -8.265719,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982148,
      "ems": null
    },
    {
      "latitude": 39.087845,
      "longitude": -8.270675,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982157,
      "ems": null
    },
    {
      "latitude": 39.089588,
      "longitude": -8.275757,
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
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982166,
      "ems": null
    },
    {
      "latitude": 39.091141,
      "longitude": -8.280646,
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
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982175,
      "ems": null
    },
    {
      "latitude": 39.092422,
      "longitude": -8.284348,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982181,
      "ems": null
    },
    {
      "latitude": 39.093639,
      "longitude": -8.287964,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982188,
      "ems": null
    },
    {
      "latitude": 39.095127,
      "longitude": -8.291931,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982195,
      "ems": null
    },
    {
      "latitude": 39.095535,
      "longitude": -8.293006,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982198,
      "ems": null
    },
    {
      "latitude": 39.097549,
      "longitude": -8.298218,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982207,
      "ems": null
    },
    {
      "latitude": 39.09938,
      "longitude": -8.302857,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982216,
      "ems": null
    },
    {
      "latitude": 39.100983,
      "longitude": -8.307157,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982225,
      "ems": null
    },
    {
      "latitude": 39.102764,
      "longitude": -8.311951,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982233,
      "ems": null
    },
    {
      "latitude": 39.104717,
      "longitude": -8.317322,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982244,
      "ems": null
    },
    {
      "latitude": 39.106255,
      "longitude": -8.322144,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982253,
      "ems": null
    },
    {
      "latitude": 39.107651,
      "longitude": -8.326599,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982261,
      "ems": null
    },
    {
      "latitude": 39.10936,
      "longitude": -8.331757,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982271,
      "ems": null
    },
    {
      "latitude": 39.111095,
      "longitude": -8.336426,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982280,
      "ems": null
    },
    {
      "latitude": 39.112679,
      "longitude": -8.341492,
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
      "squawk": "3214",
      "timestamp": 1702982289,
      "ems": null
    },
    {
      "latitude": 39.114395,
      "longitude": -8.346087,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982298,
      "ems": null
    },
    {
      "latitude": 39.11618,
      "longitude": -8.350803,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982307,
      "ems": null
    },
    {
      "latitude": 39.116776,
      "longitude": -8.352356,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982310,
      "ems": null
    },
    {
      "latitude": 39.117287,
      "longitude": -8.353699,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982313,
      "ems": null
    },
    {
      "latitude": 39.118031,
      "longitude": -8.355469,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982316,
      "ems": null
    },
    {
      "latitude": 39.119339,
      "longitude": -8.358446,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702982322,
      "ems": null
    },
    {
      "latitude": 39.120125,
      "longitude": -8.360107,
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
      "heading": 301,
      "squawk": "3214",
      "timestamp": 1702982325,
      "ems": null
    },
    {
      "latitude": 39.121895,
      "longitude": -8.364746,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982334,
      "ems": null
    },
    {
      "latitude": 39.12236,
      "longitude": -8.366333,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982337,
      "ems": null
    },
    {
      "latitude": 39.122864,
      "longitude": -8.36788,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982340,
      "ems": null
    },
    {
      "latitude": 39.12323,
      "longitude": -8.369194,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982343,
      "ems": null
    },
    {
      "latitude": 39.123779,
      "longitude": -8.371164,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982346,
      "ems": null
    },
    {
      "latitude": 39.12413,
      "longitude": -8.372375,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982349,
      "ems": null
    },
    {
      "latitude": 39.124687,
      "longitude": -8.374329,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982352,
      "ems": null
    },
    {
      "latitude": 39.125198,
      "longitude": -8.376,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702982355,
      "ems": null
    },
    {
      "latitude": 39.125656,
      "longitude": -8.377493,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982358,
      "ems": null
    },
    {
      "latitude": 39.127167,
      "longitude": -8.381852,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982367,
      "ems": null
    },
    {
      "latitude": 39.127853,
      "longitude": -8.383789,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982370,
      "ems": null
    },
    {
      "latitude": 39.128494,
      "longitude": -8.385375,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982373,
      "ems": null
    },
    {
      "latitude": 39.129017,
      "longitude": -8.386597,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982376,
      "ems": null
    },
    {
      "latitude": 39.12973,
      "longitude": -8.3883,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982379,
      "ems": null
    },
    {
      "latitude": 39.130463,
      "longitude": -8.390032,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982382,
      "ems": null
    },
    {
      "latitude": 39.131111,
      "longitude": -8.391663,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982385,
      "ems": null
    },
    {
      "latitude": 39.132835,
      "longitude": -8.396362,
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
      "squawk": "3214",
      "timestamp": 1702982395,
      "ems": null
    },
    {
      "latitude": 39.13451,
      "longitude": -8.401184,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982404,
      "ems": null
    },
    {
      "latitude": 39.136185,
      "longitude": -8.405795,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982412,
      "ems": null
    },
    {
      "latitude": 39.136688,
      "longitude": -8.407407,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982415,
      "ems": null
    },
    {
      "latitude": 39.13847,
      "longitude": -8.412354,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982425,
      "ems": null
    },
    {
      "latitude": 39.139984,
      "longitude": -8.416901,
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
      "heading": 292,
      "squawk": "3214",
      "timestamp": 1702982433,
      "ems": null
    },
    {
      "latitude": 39.141682,
      "longitude": -8.421936,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982443,
      "ems": null
    },
    {
      "latitude": 39.143326,
      "longitude": -8.426454,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982451,
      "ems": null
    },
    {
      "latitude": 39.144882,
      "longitude": -8.431051,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982460,
      "ems": null
    },
    {
      "latitude": 39.146755,
      "longitude": -8.436096,
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
      "squawk": "3214",
      "timestamp": 1702982470,
      "ems": null
    },
    {
      "latitude": 39.148571,
      "longitude": -8.440918,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982479,
      "ems": null
    },
    {
      "latitude": 39.15033,
      "longitude": -8.44556,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982488,
      "ems": null
    },
    {
      "latitude": 39.152107,
      "longitude": -8.450317,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982497,
      "ems": null
    },
    {
      "latitude": 39.15369,
      "longitude": -8.454956,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982506,
      "ems": null
    },
    {
      "latitude": 39.154175,
      "longitude": -8.456607,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702982509,
      "ems": null
    },
    {
      "latitude": 39.154633,
      "longitude": -8.458219,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702982512,
      "ems": null
    },
    {
      "latitude": 39.155552,
      "longitude": -8.461121,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982517,
      "ems": null
    },
    {
      "latitude": 39.156189,
      "longitude": -8.463175,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982521,
      "ems": null
    },
    {
      "latitude": 39.156624,
      "longitude": -8.4646,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702982524,
      "ems": null
    },
    {
      "latitude": 39.157745,
      "longitude": -8.467892,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982530,
      "ems": null
    },
    {
      "latitude": 39.158066,
      "longitude": -8.468847,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982532,
      "ems": null
    },
    {
      "latitude": 39.158752,
      "longitude": -8.470519,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982536,
      "ems": null
    },
    {
      "latitude": 39.159073,
      "longitude": -8.471235,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982537,
      "ems": null
    },
    {
      "latitude": 39.15979,
      "longitude": -8.473145,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982541,
      "ems": null
    },
    {
      "latitude": 39.161499,
      "longitude": -8.477743,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982550,
      "ems": null
    },
    {
      "latitude": 39.163235,
      "longitude": -8.482605,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982559,
      "ems": null
    },
    {
      "latitude": 39.164978,
      "longitude": -8.487297,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982568,
      "ems": null
    },
    {
      "latitude": 39.166901,
      "longitude": -8.492252,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982577,
      "ems": null
    },
    {
      "latitude": 39.168682,
      "longitude": -8.49707,
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
      "squawk": "3214",
      "timestamp": 1702982586,
      "ems": null
    },
    {
      "latitude": 39.170334,
      "longitude": -8.501925,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982595,
      "ems": null
    },
    {
      "latitude": 39.17189,
      "longitude": -8.506463,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982603,
      "ems": null
    },
    {
      "latitude": 39.173756,
      "longitude": -8.511597,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982613,
      "ems": null
    },
    {
      "latitude": 39.17482,
      "longitude": -8.514822,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982619,
      "ems": null
    },
    {
      "latitude": 39.176376,
      "longitude": -8.51942,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702982628,
      "ems": null
    },
    {
      "latitude": 39.178036,
      "longitude": -8.524292,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982638,
      "ems": null
    },
    {
      "latitude": 39.179619,
      "longitude": -8.528503,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982647,
      "ems": null
    },
    {
      "latitude": 39.181412,
      "longitude": -8.533451,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982656,
      "ems": null
    },
    {
      "latitude": 39.183113,
      "longitude": -8.537964,
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
      "squawk": "3214",
      "timestamp": 1702982664,
      "ems": null
    },
    {
      "latitude": 39.184834,
      "longitude": -8.542847,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982674,
      "ems": null
    },
    {
      "latitude": 39.186539,
      "longitude": -8.547482,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982683,
      "ems": null
    },
    {
      "latitude": 39.188232,
      "longitude": -8.551758,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982692,
      "ems": null
    },
    {
      "latitude": 39.190109,
      "longitude": -8.556559,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982701,
      "ems": null
    },
    {
      "latitude": 39.191864,
      "longitude": -8.561157,
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
      "squawk": "3214",
      "timestamp": 1702982710,
      "ems": null
    },
    {
      "latitude": 39.192764,
      "longitude": -8.564201,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982716,
      "ems": null
    },
    {
      "latitude": 39.193169,
      "longitude": -8.565796,
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702982719,
      "ems": null
    },
    {
      "latitude": 39.193539,
      "longitude": -8.567505,
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702982722,
      "ems": null
    },
    {
      "latitude": 39.193958,
      "longitude": -8.569275,
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702982725,
      "ems": null
    },
    {
      "latitude": 39.194366,
      "longitude": -8.570948,
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702982728,
      "ems": null
    },
    {
      "latitude": 39.194733,
      "longitude": -8.572262,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982731,
      "ems": null
    },
    {
      "latitude": 39.195282,
      "longitude": -8.574232,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982735,
      "ems": null
    },
    {
      "latitude": 39.196796,
      "longitude": -8.578674,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982743,
      "ems": null
    },
    {
      "latitude": 39.197403,
      "longitude": -8.5802,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982746,
      "ems": null
    },
    {
      "latitude": 39.198055,
      "longitude": -8.581787,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982750,
      "ems": null
    },
    {
      "latitude": 39.198662,
      "longitude": -8.58313,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982753,
      "ems": null
    },
    {
      "latitude": 39.199265,
      "longitude": -8.584561,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702982755,
      "ems": null
    },
    {
      "latitude": 39.199905,
      "longitude": -8.585995,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702982758,
      "ems": null
    },
    {
      "latitude": 39.200592,
      "longitude": -8.587667,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982762,
      "ems": null
    },
    {
      "latitude": 39.201233,
      "longitude": -8.589099,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702982765,
      "ems": null
    },
    {
      "latitude": 39.201828,
      "longitude": -8.590532,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702982768,
      "ems": null
    },
    {
      "latitude": 39.202332,
      "longitude": -8.591667,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702982770,
      "ems": null
    },
    {
      "latitude": 39.204479,
      "longitude": -8.596558,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982780,
      "ems": null
    },
    {
      "latitude": 39.206223,
      "longitude": -8.601101,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982789,
      "ems": null
    },
    {
      "latitude": 39.207832,
      "longitude": -8.605774,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982798,
      "ems": null
    },
    {
      "latitude": 39.208374,
      "longitude": -8.60731,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982801,
      "ems": null
    },
    {
      "latitude": 39.208969,
      "longitude": -8.609101,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982804,
      "ems": null
    },
    {
      "latitude": 39.210571,
      "longitude": -8.613699,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982813,
      "ems": null
    },
    {
      "latitude": 39.212311,
      "longitude": -8.618536,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982822,
      "ems": null
    },
    {
      "latitude": 39.213821,
      "longitude": -8.622834,
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
      "squawk": "3214",
      "timestamp": 1702982831,
      "ems": null
    },
    {
      "latitude": 39.214443,
      "longitude": -8.624817,
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702982834,
      "ems": null
    },
    {
      "latitude": 39.214859,
      "longitude": -8.626465,
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702982837,
      "ems": null
    },
    {
      "latitude": 39.216209,
      "longitude": -8.631226,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702982846,
      "ems": null
    },
    {
      "latitude": 39.217255,
      "longitude": -8.634418,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982852,
      "ems": null
    },
    {
      "latitude": 39.218353,
      "longitude": -8.637573,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982858,
      "ems": null
    },
    {
      "latitude": 39.219517,
      "longitude": -8.640808,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982864,
      "ems": null
    },
    {
      "latitude": 39.220001,
      "longitude": -8.6423,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982867,
      "ems": null
    },
    {
      "latitude": 39.220596,
      "longitude": -8.643792,
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
      "squawk": "3214",
      "timestamp": 1702982870,
      "ems": null
    },
    {
      "latitude": 39.222336,
      "longitude": -8.64845,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982880,
      "ems": null
    },
    {
      "latitude": 39.224171,
      "longitude": -8.652893,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982889,
      "ems": null
    },
    {
      "latitude": 39.225895,
      "longitude": -8.657532,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982898,
      "ems": null
    },
    {
      "latitude": 39.227615,
      "longitude": -8.662231,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982907,
      "ems": null
    },
    {
      "latitude": 39.229294,
      "longitude": -8.66684,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982916,
      "ems": null
    },
    {
      "latitude": 39.230873,
      "longitude": -8.671448,
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
      "squawk": "3214",
      "timestamp": 1702982924,
      "ems": null
    },
    {
      "latitude": 39.232502,
      "longitude": -8.676147,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982934,
      "ems": null
    },
    {
      "latitude": 39.23418,
      "longitude": -8.680725,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982943,
      "ems": null
    },
    {
      "latitude": 39.235855,
      "longitude": -8.685364,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702982952,
      "ems": null
    },
    {
      "latitude": 39.237534,
      "longitude": -8.689887,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702982961,
      "ems": null
    },
    {
      "latitude": 39.239346,
      "longitude": -8.694641,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702982970,
      "ems": null
    },
    {
      "latitude": 39.241207,
      "longitude": -8.699402,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982979,
      "ems": null
    },
    {
      "latitude": 39.243027,
      "longitude": -8.703799,
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
      "squawk": "3214",
      "timestamp": 1702982988,
      "ems": null
    },
    {
      "latitude": 39.244171,
      "longitude": -8.706665,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702982994,
      "ems": null
    },
    {
      "latitude": 39.246002,
      "longitude": -8.711304,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983003,
      "ems": null
    },
    {
      "latitude": 39.247681,
      "longitude": -8.715759,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983012,
      "ems": null
    },
    {
      "latitude": 39.249481,
      "longitude": -8.720458,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983021,
      "ems": null
    },
    {
      "latitude": 39.251171,
      "longitude": -8.725159,
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
      "squawk": "3214",
      "timestamp": 1702983030,
      "ems": null
    },
    {
      "latitude": 39.252731,
      "longitude": -8.729652,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983039,
      "ems": null
    },
    {
      "latitude": 39.254196,
      "longitude": -8.733826,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983048,
      "ems": null
    },
    {
      "latitude": 39.256012,
      "longitude": -8.738892,
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
      "squawk": "3214",
      "timestamp": 1702983058,
      "ems": null
    },
    {
      "latitude": 39.257629,
      "longitude": -8.743266,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983066,
      "ems": null
    },
    {
      "latitude": 39.25927,
      "longitude": -8.747925,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983076,
      "ems": null
    },
    {
      "latitude": 39.261017,
      "longitude": -8.752282,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983084,
      "ems": null
    },
    {
      "latitude": 39.26281,
      "longitude": -8.756958,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983094,
      "ems": null
    },
    {
      "latitude": 39.26453,
      "longitude": -8.761536,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983103,
      "ems": null
    },
    {
      "latitude": 39.2663,
      "longitude": -8.766052,
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
      "squawk": "3214",
      "timestamp": 1702983112,
      "ems": null
    },
    {
      "latitude": 39.268158,
      "longitude": -8.770373,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983120,
      "ems": null
    },
    {
      "latitude": 39.270035,
      "longitude": -8.77515,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983130,
      "ems": null
    },
    {
      "latitude": 39.271748,
      "longitude": -8.779602,
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
      "squawk": "3214",
      "timestamp": 1702983138,
      "ems": null
    },
    {
      "latitude": 39.273235,
      "longitude": -8.783569,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983147,
      "ems": null
    },
    {
      "latitude": 39.275238,
      "longitude": -8.789001,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983157,
      "ems": null
    },
    {
      "latitude": 39.276901,
      "longitude": -8.793719,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983166,
      "ems": null
    },
    {
      "latitude": 39.278496,
      "longitude": -8.798096,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983175,
      "ems": null
    },
    {
      "latitude": 39.280151,
      "longitude": -8.802616,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983184,
      "ems": null
    },
    {
      "latitude": 39.281799,
      "longitude": -8.807274,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983193,
      "ems": null
    },
    {
      "latitude": 39.283493,
      "longitude": -8.811751,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983202,
      "ems": null
    },
    {
      "latitude": 39.285248,
      "longitude": -8.816162,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983211,
      "ems": null
    },
    {
      "latitude": 39.287201,
      "longitude": -8.820767,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983220,
      "ems": null
    },
    {
      "latitude": 39.289066,
      "longitude": -8.825378,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983229,
      "ems": null
    },
    {
      "latitude": 39.290787,
      "longitude": -8.82959,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983238,
      "ems": null
    },
    {
      "latitude": 39.292648,
      "longitude": -8.834656,
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
      "squawk": "3214",
      "timestamp": 1702983247,
      "ems": null
    },
    {
      "latitude": 39.294327,
      "longitude": -8.839355,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983256,
      "ems": null
    },
    {
      "latitude": 39.295944,
      "longitude": -8.843934,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702983265,
      "ems": null
    },
    {
      "latitude": 39.297043,
      "longitude": -8.847158,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702983271,
      "ems": null
    },
    {
      "latitude": 39.298748,
      "longitude": -8.851746,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983280,
      "ems": null
    },
    {
      "latitude": 39.299446,
      "longitude": -8.853333,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702983283,
      "ems": null
    },
    {
      "latitude": 39.300098,
      "longitude": -8.854858,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702983286,
      "ems": null
    },
    {
      "latitude": 39.300701,
      "longitude": -8.85614,
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
      "heading": 301,
      "squawk": "3214",
      "timestamp": 1702983289,
      "ems": null
    },
    {
      "latitude": 39.3013,
      "longitude": -8.857429,
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
      "heading": 302,
      "squawk": "3214",
      "timestamp": 1702983292,
      "ems": null
    },
    {
      "latitude": 39.30217,
      "longitude": -8.85916,
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
      "heading": 303,
      "squawk": "3214",
      "timestamp": 1702983295,
      "ems": null
    },
    {
      "latitude": 39.302799,
      "longitude": -8.860352,
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
      "heading": 303,
      "squawk": "3214",
      "timestamp": 1702983298,
      "ems": null
    },
    {
      "latitude": 39.30368,
      "longitude": -8.862061,
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
      "heading": 303,
      "squawk": "3214",
      "timestamp": 1702983301,
      "ems": null
    },
    {
      "latitude": 39.304333,
      "longitude": -8.863525,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702983304,
      "ems": null
    },
    {
      "latitude": 39.305496,
      "longitude": -8.866577,
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
      "squawk": "3214",
      "timestamp": 1702983310,
      "ems": null
    },
    {
      "latitude": 39.305962,
      "longitude": -8.868042,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702983313,
      "ems": null
    },
    {
      "latitude": 39.306564,
      "longitude": -8.869788,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702983317,
      "ems": null
    },
    {
      "latitude": 39.307159,
      "longitude": -8.8714,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702983320,
      "ems": null
    },
    {
      "latitude": 39.307686,
      "longitude": -8.873047,
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
      "squawk": "3214",
      "timestamp": 1702983323,
      "ems": null
    },
    {
      "latitude": 39.308167,
      "longitude": -8.874565,
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
      "squawk": "3214",
      "timestamp": 1702983326,
      "ems": null
    },
    {
      "latitude": 39.308624,
      "longitude": -8.876117,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702983329,
      "ems": null
    },
    {
      "latitude": 39.309128,
      "longitude": -8.877747,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702983332,
      "ems": null
    },
    {
      "latitude": 39.309586,
      "longitude": -8.879341,
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
      "heading": 290,
      "squawk": "3214",
      "timestamp": 1702983334,
      "ems": null
    },
    {
      "latitude": 39.310059,
      "longitude": -8.880981,
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702983338,
      "ems": null
    },
    {
      "latitude": 39.311363,
      "longitude": -8.884949,
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
      "squawk": "3214",
      "timestamp": 1702983345,
      "ems": null
    },
    {
      "latitude": 39.312973,
      "longitude": -8.889611,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702983354,
      "ems": null
    },
    {
      "latitude": 39.313248,
      "longitude": -8.890448,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983357,
      "ems": null
    },
    {
      "latitude": 39.314064,
      "longitude": -8.892517,
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
      "heading": 296,
      "squawk": "3214",
      "timestamp": 1702983360,
      "ems": null
    },
    {
      "latitude": 39.314575,
      "longitude": -8.89386,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983363,
      "ems": null
    },
    {
      "latitude": 39.315365,
      "longitude": -8.89563,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983366,
      "ems": null
    },
    {
      "latitude": 39.315926,
      "longitude": -8.897034,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983369,
      "ems": null
    },
    {
      "latitude": 39.316624,
      "longitude": -8.898743,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983372,
      "ems": null
    },
    {
      "latitude": 39.317184,
      "longitude": -8.900061,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983375,
      "ems": null
    },
    {
      "latitude": 39.318878,
      "longitude": -8.904359,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983383,
      "ems": null
    },
    {
      "latitude": 39.320847,
      "longitude": -8.909076,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983393,
      "ems": null
    },
    {
      "latitude": 39.322678,
      "longitude": -8.913435,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702983402,
      "ems": null
    },
    {
      "latitude": 39.324539,
      "longitude": -8.91803,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983411,
      "ems": null
    },
    {
      "latitude": 39.326351,
      "longitude": -8.922791,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702983420,
      "ems": null
    },
    {
      "latitude": 39.328217,
      "longitude": -8.927612,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702983429,
      "ems": null
    },
    {
      "latitude": 39.32991,
      "longitude": -8.932123,
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
      "squawk": "3214",
      "timestamp": 1702983438,
      "ems": null
    },
    {
      "latitude": 39.330311,
      "longitude": -8.933533,
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702983441,
      "ems": null
    },
    {
      "latitude": 39.330734,
      "longitude": -8.935587,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702983444,
      "ems": null
    },
    {
      "latitude": 39.330963,
      "longitude": -8.937012,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702983447,
      "ems": null
    },
    {
      "latitude": 39.331242,
      "longitude": -8.938782,
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
      "heading": 280,
      "squawk": "3214",
      "timestamp": 1702983450,
      "ems": null
    },
    {
      "latitude": 39.331421,
      "longitude": -8.940125,
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
      "heading": 279,
      "squawk": "3214",
      "timestamp": 1702983453,
      "ems": null
    },
    {
      "latitude": 39.331604,
      "longitude": -8.942035,
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
      "heading": 276,
      "squawk": "3214",
      "timestamp": 1702983456,
      "ems": null
    },
    {
      "latitude": 39.331707,
      "longitude": -8.943665,
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
      "squawk": "3214",
      "timestamp": 1702983459,
      "ems": null
    },
    {
      "latitude": 39.331787,
      "longitude": -8.945319,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702983462,
      "ems": null
    },
    {
      "latitude": 39.331833,
      "longitude": -8.94711,
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
      "heading": 271,
      "squawk": "3214",
      "timestamp": 1702983465,
      "ems": null
    },
    {
      "latitude": 39.331844,
      "longitude": -8.948914,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702983468,
      "ems": null
    },
    {
      "latitude": 39.331799,
      "longitude": -8.950256,
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
      "heading": 265,
      "squawk": "3214",
      "timestamp": 1702983472,
      "ems": null
    },
    {
      "latitude": 39.331474,
      "longitude": -8.952209,
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
      "heading": 253,
      "squawk": "3214",
      "timestamp": 1702983474,
      "ems": null
    },
    {
      "latitude": 39.331009,
      "longitude": -8.953738,
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
      "heading": 245,
      "squawk": "3214",
      "timestamp": 1702983477,
      "ems": null
    },
    {
      "latitude": 39.330402,
      "longitude": -8.9552,
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
      "heading": 241,
      "squawk": "3214",
      "timestamp": 1702983480,
      "ems": null
    },
    {
      "latitude": 39.329819,
      "longitude": -8.956664,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702983483,
      "ems": null
    },
    {
      "latitude": 39.329285,
      "longitude": -8.958313,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983486,
      "ems": null
    },
    {
      "latitude": 39.328773,
      "longitude": -8.959961,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983490,
      "ems": null
    },
    {
      "latitude": 39.328495,
      "longitude": -8.960999,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983492,
      "ems": null
    },
    {
      "latitude": 39.327934,
      "longitude": -8.96283,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983495,
      "ems": null
    },
    {
      "latitude": 39.327469,
      "longitude": -8.964417,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983498,
      "ems": null
    },
    {
      "latitude": 39.326935,
      "longitude": -8.965979,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983501,
      "ems": null
    },
    {
      "latitude": 39.326401,
      "longitude": -8.967407,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983504,
      "ems": null
    },
    {
      "latitude": 39.325424,
      "longitude": -8.970397,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983510,
      "ems": null
    },
    {
      "latitude": 39.324398,
      "longitude": -8.973389,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983516,
      "ems": null
    },
    {
      "latitude": 39.322769,
      "longitude": -8.978149,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983526,
      "ems": null
    },
    {
      "latitude": 39.32135,
      "longitude": -8.982816,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983535,
      "ems": null
    },
    {
      "latitude": 39.319977,
      "longitude": -8.987473,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983544,
      "ems": null
    },
    {
      "latitude": 39.318531,
      "longitude": -8.992065,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983552,
      "ems": null
    },
    {
      "latitude": 39.317135,
      "longitude": -8.997009,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983562,
      "ems": null
    },
    {
      "latitude": 39.315647,
      "longitude": -9.00177,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983571,
      "ems": null
    },
    {
      "latitude": 39.314209,
      "longitude": -9.006042,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983579,
      "ems": null
    },
    {
      "latitude": 39.312515,
      "longitude": -9.010819,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702983589,
      "ems": null
    },
    {
      "latitude": 39.311737,
      "longitude": -9.012939,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702983592,
      "ems": null
    },
    {
      "latitude": 39.310806,
      "longitude": -9.015625,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983598,
      "ems": null
    },
    {
      "latitude": 39.310226,
      "longitude": -9.017566,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983601,
      "ems": null
    },
    {
      "latitude": 39.308945,
      "longitude": -9.022522,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702983610,
      "ems": null
    },
    {
      "latitude": 39.308662,
      "longitude": -9.023621,
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
      "heading": 252,
      "squawk": "3214",
      "timestamp": 1702983613,
      "ems": null
    },
    {
      "latitude": 39.308151,
      "longitude": -9.025513,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702983616,
      "ems": null
    },
    {
      "latitude": 39.307827,
      "longitude": -9.026794,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983619,
      "ems": null
    },
    {
      "latitude": 39.30629,
      "longitude": -9.031738,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983629,
      "ems": null
    },
    {
      "latitude": 39.304688,
      "longitude": -9.036493,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983638,
      "ems": null
    },
    {
      "latitude": 39.304184,
      "longitude": -9.037927,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983640,
      "ems": null
    },
    {
      "latitude": 39.30368,
      "longitude": -9.039419,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983644,
      "ems": null
    },
    {
      "latitude": 39.303169,
      "longitude": -9.040894,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983647,
      "ems": null
    },
    {
      "latitude": 39.301575,
      "longitude": -9.045928,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983656,
      "ems": null
    },
    {
      "latitude": 39.30011,
      "longitude": -9.050704,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983665,
      "ems": null
    },
    {
      "latitude": 39.298508,
      "longitude": -9.055122,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702983674,
      "ems": null
    },
    {
      "latitude": 39.296814,
      "longitude": -9.05972,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983682,
      "ems": null
    },
    {
      "latitude": 39.295441,
      "longitude": -9.064616,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983692,
      "ems": null
    },
    {
      "latitude": 39.294094,
      "longitude": -9.069458,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983701,
      "ems": null
    },
    {
      "latitude": 39.293625,
      "longitude": -9.071106,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983704,
      "ems": null
    },
    {
      "latitude": 39.293198,
      "longitude": -9.072737,
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
      "heading": 252,
      "squawk": "3214",
      "timestamp": 1702983707,
      "ems": null
    },
    {
      "latitude": 39.292831,
      "longitude": -9.074229,
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
      "heading": 252,
      "squawk": "3214",
      "timestamp": 1702983710,
      "ems": null
    },
    {
      "latitude": 39.291641,
      "longitude": -9.079125,
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
      "heading": 252,
      "squawk": "3214",
      "timestamp": 1702983719,
      "ems": null
    },
    {
      "latitude": 39.290276,
      "longitude": -9.084045,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983728,
      "ems": null
    },
    {
      "latitude": 39.289215,
      "longitude": -9.087246,
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
      "heading": 245,
      "squawk": "3214",
      "timestamp": 1702983734,
      "ems": null
    },
    {
      "latitude": 39.288692,
      "longitude": -9.088745,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983737,
      "ems": null
    },
    {
      "latitude": 39.288181,
      "longitude": -9.09021,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983740,
      "ems": null
    },
    {
      "latitude": 39.287659,
      "longitude": -9.091963,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983743,
      "ems": null
    },
    {
      "latitude": 39.28624,
      "longitude": -9.09668,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983752,
      "ems": null
    },
    {
      "latitude": 39.284782,
      "longitude": -9.101501,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983761,
      "ems": null
    },
    {
      "latitude": 39.283356,
      "longitude": -9.105994,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983770,
      "ems": null
    },
    {
      "latitude": 39.281845,
      "longitude": -9.11089,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983779,
      "ems": null
    },
    {
      "latitude": 39.280361,
      "longitude": -9.115662,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983788,
      "ems": null
    },
    {
      "latitude": 39.279011,
      "longitude": -9.120361,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702983797,
      "ems": null
    },
    {
      "latitude": 39.278091,
      "longitude": -9.123488,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983803,
      "ems": null
    },
    {
      "latitude": 39.276634,
      "longitude": -9.128296,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702983812,
      "ems": null
    },
    {
      "latitude": 39.275146,
      "longitude": -9.133179,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702983822,
      "ems": null
    },
    {
      "latitude": 39.273651,
      "longitude": -9.137998,
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
      "heading": 247,
      "squawk": "3214",
      "timestamp": 1702983831,
      "ems": null
    },
    {
      "latitude": 39.272095,
      "longitude": -9.142894,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702983840,
      "ems": null
    },
    {
      "latitude": 39.271561,
      "longitude": -9.144409,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702983843,
      "ems": null
    },
    {
      "latitude": 39.270908,
      "longitude": -9.145935,
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
      "heading": 240,
      "squawk": "3214",
      "timestamp": 1702983846,
      "ems": null
    },
    {
      "latitude": 39.270126,
      "longitude": -9.147431,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702983849,
      "ems": null
    },
    {
      "latitude": 39.269279,
      "longitude": -9.148743,
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
      "heading": 227,
      "squawk": "3214",
      "timestamp": 1702983852,
      "ems": null
    },
    {
      "latitude": 39.268204,
      "longitude": -9.15,
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
      "heading": 218,
      "squawk": "3214",
      "timestamp": 1702983855,
      "ems": null
    },
    {
      "latitude": 39.267059,
      "longitude": -9.151014,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702983858,
      "ems": null
    },
    {
      "latitude": 39.265835,
      "longitude": -9.151917,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702983861,
      "ems": null
    },
    {
      "latitude": 39.264587,
      "longitude": -9.152746,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702983864,
      "ems": null
    },
    {
      "latitude": 39.263351,
      "longitude": -9.153522,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702983867,
      "ems": null
    },
    {
      "latitude": 39.262112,
      "longitude": -9.154358,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702983871,
      "ems": null
    },
    {
      "latitude": 39.261135,
      "longitude": -9.154968,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702983873,
      "ems": null
    },
    {
      "latitude": 39.259689,
      "longitude": -9.155945,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702983877,
      "ems": null
    },
    {
      "latitude": 39.258572,
      "longitude": -9.156677,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702983879,
      "ems": null
    },
    {
      "latitude": 39.257217,
      "longitude": -9.157522,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702983883,
      "ems": null
    },
    {
      "latitude": 39.25589,
      "longitude": -9.158298,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702983886,
      "ems": null
    },
    {
      "latitude": 39.254791,
      "longitude": -9.158895,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702983889,
      "ems": null
    },
    {
      "latitude": 39.250992,
      "longitude": -9.161164,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702983898,
      "ems": null
    },
    {
      "latitude": 39.247284,
      "longitude": -9.163553,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702983907,
      "ems": null
    },
    {
      "latitude": 39.244629,
      "longitude": -9.165404,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702983913,
      "ems": null
    },
    {
      "latitude": 39.243347,
      "longitude": -9.166419,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702983916,
      "ems": null
    },
    {
      "latitude": 39.242203,
      "longitude": -9.167315,
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
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702983920,
      "ems": null
    },
    {
      "latitude": 39.238312,
      "longitude": -9.169703,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702983929,
      "ems": null
    },
    {
      "latitude": 39.236179,
      "longitude": -9.170837,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702983934,
      "ems": null
    },
    {
      "latitude": 39.23455,
      "longitude": -9.171692,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702983938,
      "ems": null
    },
    {
      "latitude": 39.233185,
      "longitude": -9.172449,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702983941,
      "ems": null
    },
    {
      "latitude": 39.231995,
      "longitude": -9.173047,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702983944,
      "ems": null
    },
    {
      "latitude": 39.230713,
      "longitude": -9.173703,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702983947,
      "ems": null
    },
    {
      "latitude": 39.229523,
      "longitude": -9.17436,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702983950,
      "ems": null
    },
    {
      "latitude": 39.228149,
      "longitude": -9.175076,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702983953,
      "ems": null
    },
    {
      "latitude": 39.224403,
      "longitude": -9.177307,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702983962,
      "ems": null
    },
    {
      "latitude": 39.220539,
      "longitude": -9.179504,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702983971,
      "ems": null
    },
    {
      "latitude": 39.216843,
      "longitude": -9.181406,
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702983980,
      "ems": null
    },
    {
      "latitude": 39.212906,
      "longitude": -9.183472,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702983990,
      "ems": null
    },
    {
      "latitude": 39.209198,
      "longitude": -9.185824,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702983998,
      "ems": null
    },
    {
      "latitude": 39.205223,
      "longitude": -9.188049,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984008,
      "ems": null
    },
    {
      "latitude": 39.201416,
      "longitude": -9.190003,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984017,
      "ems": null
    },
    {
      "latitude": 39.20015,
      "longitude": -9.190674,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984020,
      "ems": null
    },
    {
      "latitude": 39.196472,
      "longitude": -9.192688,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984030,
      "ems": null
    },
    {
      "latitude": 39.192795,
      "longitude": -9.194885,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984039,
      "ems": null
    },
    {
      "latitude": 39.191711,
      "longitude": -9.195617,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702984041,
      "ems": null
    },
    {
      "latitude": 39.190559,
      "longitude": -9.196533,
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
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702984045,
      "ems": null
    },
    {
      "latitude": 39.189396,
      "longitude": -9.197449,
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
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702984047,
      "ems": null
    },
    {
      "latitude": 39.188324,
      "longitude": -9.198422,
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
      "heading": 214,
      "squawk": "3214",
      "timestamp": 1702984050,
      "ems": null
    },
    {
      "latitude": 39.187256,
      "longitude": -9.199402,
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
      "heading": 214,
      "squawk": "3214",
      "timestamp": 1702984053,
      "ems": null
    },
    {
      "latitude": 39.186092,
      "longitude": -9.200256,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702984056,
      "ems": null
    },
    {
      "latitude": 39.182327,
      "longitude": -9.202244,
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702984065,
      "ems": null
    },
    {
      "latitude": 39.181,
      "longitude": -9.202901,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702984069,
      "ems": null
    },
    {
      "latitude": 39.17981,
      "longitude": -9.203498,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984071,
      "ems": null
    },
    {
      "latitude": 39.178528,
      "longitude": -9.204214,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984075,
      "ems": null
    },
    {
      "latitude": 39.177383,
      "longitude": -9.204871,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984078,
      "ems": null
    },
    {
      "latitude": 39.176285,
      "longitude": -9.205528,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984080,
      "ems": null
    },
    {
      "latitude": 39.174778,
      "longitude": -9.20636,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984084,
      "ems": null
    },
    {
      "latitude": 39.173767,
      "longitude": -9.206961,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984087,
      "ems": null
    },
    {
      "latitude": 39.171112,
      "longitude": -9.208513,
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702984093,
      "ems": null
    },
    {
      "latitude": 39.169846,
      "longitude": -9.20929,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984096,
      "ems": null
    },
    {
      "latitude": 39.166351,
      "longitude": -9.211426,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984105,
      "ems": null
    },
    {
      "latitude": 39.162815,
      "longitude": -9.213623,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984114,
      "ems": null
    },
    {
      "latitude": 39.160309,
      "longitude": -9.2152,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984120,
      "ems": null
    },
    {
      "latitude": 39.156624,
      "longitude": -9.217346,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984130,
      "ems": null
    },
    {
      "latitude": 39.152946,
      "longitude": -9.219299,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984138,
      "ems": null
    },
    {
      "latitude": 39.149269,
      "longitude": -9.221558,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984148,
      "ems": null
    },
    {
      "latitude": 39.145615,
      "longitude": -9.224097,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702984157,
      "ems": null
    },
    {
      "latitude": 39.144424,
      "longitude": -9.224933,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702984160,
      "ems": null
    },
    {
      "latitude": 39.143326,
      "longitude": -9.22565,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984163,
      "ems": null
    },
    {
      "latitude": 39.139618,
      "longitude": -9.227979,
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702984172,
      "ems": null
    },
    {
      "latitude": 39.136002,
      "longitude": -9.22998,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984180,
      "ems": null
    },
    {
      "latitude": 39.134674,
      "longitude": -9.230665,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702984184,
      "ems": null
    },
    {
      "latitude": 39.133533,
      "longitude": -9.231262,
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984187,
      "ems": null
    },
    {
      "latitude": 39.132065,
      "longitude": -9.231919,
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984190,
      "ems": null
    },
    {
      "latitude": 39.13092,
      "longitude": -9.232516,
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984193,
      "ems": null
    },
    {
      "latitude": 39.129623,
      "longitude": -9.233154,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702984196,
      "ems": null
    },
    {
      "latitude": 39.126831,
      "longitude": -9.234619,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984203,
      "ems": null
    },
    {
      "latitude": 39.123058,
      "longitude": -9.236816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984212,
      "ems": null
    },
    {
      "latitude": 39.119431,
      "longitude": -9.238905,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984221,
      "ems": null
    },
    {
      "latitude": 39.117966,
      "longitude": -9.2398,
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984224,
      "ems": null
    },
    {
      "latitude": 39.116776,
      "longitude": -9.240577,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984227,
      "ems": null
    },
    {
      "latitude": 39.114395,
      "longitude": -9.242249,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702984233,
      "ems": null
    },
    {
      "latitude": 39.113159,
      "longitude": -9.243144,
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
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702984236,
      "ems": null
    },
    {
      "latitude": 39.111969,
      "longitude": -9.2441,
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
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702984239,
      "ems": null
    },
    {
      "latitude": 39.110733,
      "longitude": -9.245055,
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
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702984243,
      "ems": null
    },
    {
      "latitude": 39.109653,
      "longitude": -9.245972,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702984246,
      "ems": null
    },
    {
      "latitude": 39.108536,
      "longitude": -9.246887,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702984249,
      "ems": null
    },
    {
      "latitude": 39.107437,
      "longitude": -9.247742,
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702984252,
      "ems": null
    },
    {
      "latitude": 39.103729,
      "longitude": -9.250488,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702984261,
      "ems": null
    },
    {
      "latitude": 39.102493,
      "longitude": -9.251204,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984264,
      "ems": null
    },
    {
      "latitude": 39.101181,
      "longitude": -9.251953,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984267,
      "ems": null
    },
    {
      "latitude": 39.099976,
      "longitude": -9.252638,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984270,
      "ems": null
    },
    {
      "latitude": 39.098713,
      "longitude": -9.253357,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984273,
      "ems": null
    },
    {
      "latitude": 39.097504,
      "longitude": -9.254089,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984276,
      "ems": null
    },
    {
      "latitude": 39.096619,
      "longitude": -9.254639,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984278,
      "ems": null
    },
    {
      "latitude": 39.095123,
      "longitude": -9.255504,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702984282,
      "ems": null
    },
    {
      "latitude": 39.091171,
      "longitude": -9.257996,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984292,
      "ems": null
    },
    {
      "latitude": 39.090008,
      "longitude": -9.258789,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702984295,
      "ems": null
    },
    {
      "latitude": 39.088898,
      "longitude": -9.259684,
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
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702984298,
      "ems": null
    },
    {
      "latitude": 39.087753,
      "longitude": -9.260638,
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
      "heading": 214,
      "squawk": "3214",
      "timestamp": 1702984301,
      "ems": null
    },
    {
      "latitude": 39.086517,
      "longitude": -9.261833,
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
      "heading": 217,
      "squawk": "3214",
      "timestamp": 1702984304,
      "ems": null
    },
    {
      "latitude": 39.085354,
      "longitude": -9.263,
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
      "heading": 218,
      "squawk": "3214",
      "timestamp": 1702984307,
      "ems": null
    },
    {
      "latitude": 39.084419,
      "longitude": -9.263977,
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
      "heading": 219,
      "squawk": "3214",
      "timestamp": 1702984310,
      "ems": null
    },
    {
      "latitude": 39.083405,
      "longitude": -9.265117,
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
      "heading": 221,
      "squawk": "3214",
      "timestamp": 1702984313,
      "ems": null
    },
    {
      "latitude": 39.082466,
      "longitude": -9.266235,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984316,
      "ems": null
    },
    {
      "latitude": 39.08139,
      "longitude": -9.267446,
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
      "heading": 221,
      "squawk": "3214",
      "timestamp": 1702984319,
      "ems": null
    },
    {
      "latitude": 39.080372,
      "longitude": -9.268555,
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
      "heading": 220,
      "squawk": "3214",
      "timestamp": 1702984323,
      "ems": null
    },
    {
      "latitude": 39.079468,
      "longitude": -9.269595,
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
      "heading": 221,
      "squawk": "3214",
      "timestamp": 1702984326,
      "ems": null
    },
    {
      "latitude": 39.078461,
      "longitude": -9.270849,
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
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702984328,
      "ems": null
    },
    {
      "latitude": 39.077499,
      "longitude": -9.272282,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984332,
      "ems": null
    },
    {
      "latitude": 39.077019,
      "longitude": -9.273132,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984334,
      "ems": null
    },
    {
      "latitude": 39.075943,
      "longitude": -9.275088,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984338,
      "ems": null
    },
    {
      "latitude": 39.075348,
      "longitude": -9.275984,
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
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984340,
      "ems": null
    },
    {
      "latitude": 39.072144,
      "longitude": -9.280104,
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
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984350,
      "ems": null
    },
    {
      "latitude": 39.069168,
      "longitude": -9.283627,
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
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984359,
      "ems": null
    },
    {
      "latitude": 39.068222,
      "longitude": -9.284729,
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
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984362,
      "ems": null
    },
    {
      "latitude": 39.0672,
      "longitude": -9.285955,
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
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984365,
      "ems": null
    },
    {
      "latitude": 39.066238,
      "longitude": -9.287089,
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
      "heading": 222,
      "squawk": "3214",
      "timestamp": 1702984368,
      "ems": null
    },
    {
      "latitude": 39.065289,
      "longitude": -9.288147,
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
      "heading": 221,
      "squawk": "3214",
      "timestamp": 1702984371,
      "ems": null
    },
    {
      "latitude": 39.062256,
      "longitude": -9.291747,
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
      "heading": 223,
      "squawk": "3214",
      "timestamp": 1702984380,
      "ems": null
    },
    {
      "latitude": 39.059418,
      "longitude": -9.295329,
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
      "heading": 224,
      "squawk": "3214",
      "timestamp": 1702984389,
      "ems": null
    },
    {
      "latitude": 39.05658,
      "longitude": -9.29909,
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
      "heading": 227,
      "squawk": "3214",
      "timestamp": 1702984398,
      "ems": null
    },
    {
      "latitude": 39.05584,
      "longitude": -9.300171,
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
      "heading": 229,
      "squawk": "3214",
      "timestamp": 1702984401,
      "ems": null
    },
    {
      "latitude": 39.054955,
      "longitude": -9.301575,
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
      "heading": 230,
      "squawk": "3214",
      "timestamp": 1702984404,
      "ems": null
    },
    {
      "latitude": 39.054016,
      "longitude": -9.303032,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984407,
      "ems": null
    },
    {
      "latitude": 39.053371,
      "longitude": -9.304077,
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
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984410,
      "ems": null
    },
    {
      "latitude": 39.052673,
      "longitude": -9.305298,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984412,
      "ems": null
    },
    {
      "latitude": 39.051601,
      "longitude": -9.307129,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984416,
      "ems": null
    },
    {
      "latitude": 39.050949,
      "longitude": -9.30835,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984419,
      "ems": null
    },
    {
      "latitude": 39.050018,
      "longitude": -9.31012,
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
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984422,
      "ems": null
    },
    {
      "latitude": 39.049301,
      "longitude": -9.31151,
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
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984425,
      "ems": null
    },
    {
      "latitude": 39.04866,
      "longitude": -9.312764,
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
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984428,
      "ems": null
    },
    {
      "latitude": 39.047791,
      "longitude": -9.314376,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984431,
      "ems": null
    },
    {
      "latitude": 39.047367,
      "longitude": -9.315186,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984433,
      "ems": null
    },
    {
      "latitude": 39.044666,
      "longitude": -9.319763,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984443,
      "ems": null
    },
    {
      "latitude": 39.042477,
      "longitude": -9.323303,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984452,
      "ems": null
    },
    {
      "latitude": 39.041359,
      "longitude": -9.325073,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984455,
      "ems": null
    },
    {
      "latitude": 39.040428,
      "longitude": -9.326538,
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
      "heading": 230,
      "squawk": "3214",
      "timestamp": 1702984458,
      "ems": null
    },
    {
      "latitude": 39.037868,
      "longitude": -9.330688,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984467,
      "ems": null
    },
    {
      "latitude": 39.035294,
      "longitude": -9.334975,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984476,
      "ems": null
    },
    {
      "latitude": 39.032982,
      "longitude": -9.339111,
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
      "heading": 234,
      "squawk": "3214",
      "timestamp": 1702984485,
      "ems": null
    },
    {
      "latitude": 39.032234,
      "longitude": -9.340515,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984488,
      "ems": null
    },
    {
      "latitude": 39.031586,
      "longitude": -9.341736,
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
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984490,
      "ems": null
    },
    {
      "latitude": 39.030807,
      "longitude": -9.343275,
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
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702984494,
      "ems": null
    },
    {
      "latitude": 39.030048,
      "longitude": -9.344788,
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
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702984497,
      "ems": null
    },
    {
      "latitude": 39.029396,
      "longitude": -9.346191,
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
      "heading": 238,
      "squawk": "3214",
      "timestamp": 1702984500,
      "ems": null
    },
    {
      "latitude": 39.028744,
      "longitude": -9.347534,
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
      "heading": 238,
      "squawk": "3214",
      "timestamp": 1702984503,
      "ems": null
    },
    {
      "latitude": 39.026508,
      "longitude": -9.351685,
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
      "heading": 234,
      "squawk": "3214",
      "timestamp": 1702984512,
      "ems": null
    },
    {
      "latitude": 39.024136,
      "longitude": -9.355896,
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
      "heading": 234,
      "squawk": "3214",
      "timestamp": 1702984521,
      "ems": null
    },
    {
      "latitude": 39.022552,
      "longitude": -9.358765,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984527,
      "ems": null
    },
    {
      "latitude": 39.021606,
      "longitude": -9.360352,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984530,
      "ems": null
    },
    {
      "latitude": 39.019108,
      "longitude": -9.364502,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984540,
      "ems": null
    },
    {
      "latitude": 39.01664,
      "longitude": -9.368713,
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
      "heading": 234,
      "squawk": "3214",
      "timestamp": 1702984549,
      "ems": null
    },
    {
      "latitude": 39.014328,
      "longitude": -9.372711,
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
      "heading": 233,
      "squawk": "3214",
      "timestamp": 1702984558,
      "ems": null
    },
    {
      "latitude": 39.011799,
      "longitude": -9.376953,
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
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984567,
      "ems": null
    },
    {
      "latitude": 39.010254,
      "longitude": -9.379757,
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
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984573,
      "ems": null
    },
    {
      "latitude": 39.009659,
      "longitude": -9.380981,
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
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702984575,
      "ems": null
    },
    {
      "latitude": 39.007236,
      "longitude": -9.385437,
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
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984585,
      "ems": null
    },
    {
      "latitude": 39.004768,
      "longitude": -9.38916,
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
      "heading": 229,
      "squawk": "3214",
      "timestamp": 1702984593,
      "ems": null
    },
    {
      "latitude": 39.003708,
      "longitude": -9.390683,
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
      "heading": 227,
      "squawk": "3214",
      "timestamp": 1702984597,
      "ems": null
    },
    {
      "latitude": 39.002956,
      "longitude": -9.391785,
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
      "heading": 226,
      "squawk": "3214",
      "timestamp": 1702984599,
      "ems": null
    },
    {
      "latitude": 39.00193,
      "longitude": -9.393127,
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
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702984603,
      "ems": null
    },
    {
      "latitude": 39.000858,
      "longitude": -9.394409,
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
      "heading": 224,
      "squawk": "3214",
      "timestamp": 1702984606,
      "ems": null
    },
    {
      "latitude": 38.999908,
      "longitude": -9.395639,
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
      "heading": 224,
      "squawk": "3214",
      "timestamp": 1702984608,
      "ems": null
    },
    {
      "latitude": 38.998901,
      "longitude": -9.396894,
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
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702984611,
      "ems": null
    },
    {
      "latitude": 38.997879,
      "longitude": -9.398193,
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
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702984615,
      "ems": null
    },
    {
      "latitude": 38.997208,
      "longitude": -9.399102,
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
      "heading": 225,
      "squawk": "3214",
      "timestamp": 1702984617,
      "ems": null
    },
    {
      "latitude": 38.994015,
      "longitude": -9.403381,
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
      "heading": 227,
      "squawk": "3214",
      "timestamp": 1702984627,
      "ems": null
    },
    {
      "latitude": 38.992447,
      "longitude": -9.405789,
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
      "heading": 231,
      "squawk": "3214",
      "timestamp": 1702984632,
      "ems": null
    },
    {
      "latitude": 38.99144,
      "longitude": -9.40758,
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
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984636,
      "ems": null
    },
    {
      "latitude": 38.990799,
      "longitude": -9.408834,
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
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702984638,
      "ems": null
    },
    {
      "latitude": 38.990105,
      "longitude": -9.410278,
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
      "heading": 240,
      "squawk": "3214",
      "timestamp": 1702984642,
      "ems": null
    },
    {
      "latitude": 38.989471,
      "longitude": -9.41194,
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
      "heading": 245,
      "squawk": "3214",
      "timestamp": 1702984645,
      "ems": null
    },
    {
      "latitude": 38.988987,
      "longitude": -9.413391,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702984648,
      "ems": null
    },
    {
      "latitude": 38.988556,
      "longitude": -9.415283,
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
      "heading": 256,
      "squawk": "3214",
      "timestamp": 1702984651,
      "ems": null
    },
    {
      "latitude": 38.98843,
      "longitude": -9.416992,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 263,
      "squawk": "3214",
      "timestamp": 1702984654,
      "ems": null
    },
    {
      "latitude": 38.988571,
      "longitude": -9.418518,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 268,
      "squawk": "3214",
      "timestamp": 1702984657,
      "ems": null
    },
    {
      "latitude": 38.989128,
      "longitude": -9.420166,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702984661,
      "ems": null
    },
    {
      "latitude": 38.989746,
      "longitude": -9.421135,
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
      "heading": 304,
      "squawk": "3214",
      "timestamp": 1702984663,
      "ems": null
    },
    {
      "latitude": 38.990852,
      "longitude": -9.422241,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 328,
      "squawk": "3214",
      "timestamp": 1702984667,
      "ems": null
    },
    {
      "latitude": 38.992035,
      "longitude": -9.422807,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 342,
      "squawk": "3214",
      "timestamp": 1702984670,
      "ems": null
    },
    {
      "latitude": 38.993362,
      "longitude": -9.422926,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702984673,
      "ems": null
    },
    {
      "latitude": 38.994667,
      "longitude": -9.422363,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 27,
      "squawk": "3214",
      "timestamp": 1702984676,
      "ems": null
    },
    {
      "latitude": 38.995926,
      "longitude": -9.420299,
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
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702984681,
      "ems": null
    },
    {
      "latitude": 38.996063,
      "longitude": -9.418762,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702984684,
      "ems": null
    },
    {
      "latitude": 38.995506,
      "longitude": -9.416687,
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
      "heading": 113,
      "squawk": "3214",
      "timestamp": 1702984686,
      "ems": null
    },
    {
      "latitude": 38.994553,
      "longitude": -9.415402,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 143,
      "squawk": "3214",
      "timestamp": 1702984690,
      "ems": null
    },
    {
      "latitude": 38.993454,
      "longitude": -9.414686,
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
      "heading": 158,
      "squawk": "3214",
      "timestamp": 1702984692,
      "ems": null
    },
    {
      "latitude": 38.992172,
      "longitude": -9.414567,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 181,
      "squawk": "3214",
      "timestamp": 1702984695,
      "ems": null
    },
    {
      "latitude": 38.990757,
      "longitude": -9.415161,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702984699,
      "ems": null
    },
    {
      "latitude": 38.989872,
      "longitude": -9.415955,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 217,
      "squawk": "3214",
      "timestamp": 1702984701,
      "ems": null
    },
    {
      "latitude": 38.988708,
      "longitude": -9.417236,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 224,
      "squawk": "3214",
      "timestamp": 1702984705,
      "ems": null
    },
    {
      "latitude": 38.987823,
      "longitude": -9.41864,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984708,
      "ems": null
    },
    {
      "latitude": 38.987228,
      "longitude": -9.419821,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 236,
      "squawk": "3214",
      "timestamp": 1702984710,
      "ems": null
    },
    {
      "latitude": 38.986427,
      "longitude": -9.421387,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702984714,
      "ems": null
    },
    {
      "latitude": 38.985672,
      "longitude": -9.422807,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 235,
      "squawk": "3214",
      "timestamp": 1702984716,
      "ems": null
    },
    {
      "latitude": 38.984844,
      "longitude": -9.424316,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 232,
      "squawk": "3214",
      "timestamp": 1702984720,
      "ems": null
    },
    {
      "latitude": 38.983868,
      "longitude": -9.425659,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 226,
      "squawk": "3214",
      "timestamp": 1702984723,
      "ems": null
    },
    {
      "latitude": 38.982834,
      "longitude": -9.426747,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 216,
      "squawk": "3214",
      "timestamp": 1702984725,
      "ems": null
    },
    {
      "latitude": 38.980179,
      "longitude": -9.4283,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702984732,
      "ems": null
    },
    {
      "latitude": 38.978806,
      "longitude": -9.428598,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 187,
      "squawk": "3214",
      "timestamp": 1702984734,
      "ems": null
    },
    {
      "latitude": 38.977257,
      "longitude": -9.428772,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 183,
      "squawk": "3214",
      "timestamp": 1702984738,
      "ems": null
    },
    {
      "latitude": 38.975582,
      "longitude": -9.428833,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 181,
      "squawk": "3214",
      "timestamp": 1702984741,
      "ems": null
    },
    {
      "latitude": 38.974232,
      "longitude": -9.428833,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 181,
      "squawk": "3214",
      "timestamp": 1702984743,
      "ems": null
    },
    {
      "latitude": 38.972672,
      "longitude": -9.428897,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 181,
      "squawk": "3214",
      "timestamp": 1702984746,
      "ems": null
    },
    {
      "latitude": 38.971115,
      "longitude": -9.428956,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702984750,
      "ems": null
    },
    {
      "latitude": 38.969604,
      "longitude": -9.429076,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702984753,
      "ems": null
    },
    {
      "latitude": 38.968185,
      "longitude": -9.429135,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702984755,
      "ems": null
    },
    {
      "latitude": 38.9664,
      "longitude": -9.429255,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 183,
      "squawk": "3214",
      "timestamp": 1702984759,
      "ems": null
    },
    {
      "latitude": 38.964737,
      "longitude": -9.429382,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 183,
      "squawk": "3214",
      "timestamp": 1702984762,
      "ems": null
    },
    {
      "latitude": 38.963154,
      "longitude": -9.429443,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702984765,
      "ems": null
    },
    {
      "latitude": 38.958755,
      "longitude": -9.429613,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 180,
      "squawk": "3214",
      "timestamp": 1702984774,
      "ems": null
    },
    {
      "latitude": 38.954494,
      "longitude": -9.429626,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "3214",
      "timestamp": 1702984783,
      "ems": null
    },
    {
      "latitude": 38.951797,
      "longitude": -9.429553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "3214",
      "timestamp": 1702984789,
      "ems": null
    },
    {
      "latitude": 38.950424,
      "longitude": -9.429434,
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
      "heading": 175,
      "squawk": "3214",
      "timestamp": 1702984792,
      "ems": null
    },
    {
      "latitude": 38.948956,
      "longitude": -9.429321,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "3214",
      "timestamp": 1702984795,
      "ems": null
    },
    {
      "latitude": 38.947495,
      "longitude": -9.429135,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "3214",
      "timestamp": 1702984798,
      "ems": null
    },
    {
      "latitude": 38.946304,
      "longitude": -9.429016,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3214",
      "timestamp": 1702984801,
      "ems": null
    },
    {
      "latitude": 38.944576,
      "longitude": -9.428833,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 174,
      "squawk": "3214",
      "timestamp": 1702984804,
      "ems": null
    },
    {
      "latitude": 38.940342,
      "longitude": -9.429077,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702984813,
      "ems": null
    },
    {
      "latitude": 38.939163,
      "longitude": -9.429553,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984816,
      "ems": null
    },
    {
      "latitude": 38.937737,
      "longitude": -9.430298,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702984819,
      "ems": null
    },
    {
      "latitude": 38.936386,
      "longitude": -9.430969,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984822,
      "ems": null
    },
    {
      "latitude": 38.935036,
      "longitude": -9.43158,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702984825,
      "ems": null
    },
    {
      "latitude": 38.933872,
      "longitude": -9.432068,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 196,
      "squawk": "3214",
      "timestamp": 1702984828,
      "ems": null
    },
    {
      "latitude": 38.932343,
      "longitude": -9.432599,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702984831,
      "ems": null
    },
    {
      "latitude": 38.931076,
      "longitude": -9.432983,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702984834,
      "ems": null
    },
    {
      "latitude": 38.92955,
      "longitude": -9.433374,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "3214",
      "timestamp": 1702984837,
      "ems": null
    },
    {
      "latitude": 38.92804,
      "longitude": -9.433733,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "3214",
      "timestamp": 1702984840,
      "ems": null
    },
    {
      "latitude": 38.926346,
      "longitude": -9.434151,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3214",
      "timestamp": 1702984843,
      "ems": null
    },
    {
      "latitude": 38.924835,
      "longitude": -9.434509,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 191,
      "squawk": "3214",
      "timestamp": 1702984846,
      "ems": null
    },
    {
      "latitude": 38.923397,
      "longitude": -9.434875,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 191,
      "squawk": "3214",
      "timestamp": 1702984849,
      "ems": null
    },
    {
      "latitude": 38.921814,
      "longitude": -9.435286,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 192,
      "squawk": "3214",
      "timestamp": 1702984852,
      "ems": null
    },
    {
      "latitude": 38.920349,
      "longitude": -9.435703,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 192,
      "squawk": "3214",
      "timestamp": 1702984855,
      "ems": null
    },
    {
      "latitude": 38.915909,
      "longitude": -9.437137,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702984864,
      "ems": null
    },
    {
      "latitude": 38.912876,
      "longitude": -9.438049,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702984870,
      "ems": null
    },
    {
      "latitude": 38.908455,
      "longitude": -9.439636,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 197,
      "squawk": "3214",
      "timestamp": 1702984879,
      "ems": null
    },
    {
      "latitude": 38.907009,
      "longitude": -9.440247,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 198,
      "squawk": "3214",
      "timestamp": 1702984882,
      "ems": null
    },
    {
      "latitude": 38.902729,
      "longitude": -9.441895,
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
      "heading": 195,
      "squawk": "3214",
      "timestamp": 1702984891,
      "ems": null
    },
    {
      "latitude": 38.898399,
      "longitude": -9.44342,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 196,
      "squawk": "3214",
      "timestamp": 1702984900,
      "ems": null
    },
    {
      "latitude": 38.893883,
      "longitude": -9.445312,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 197,
      "squawk": "3214",
      "timestamp": 1702984909,
      "ems": null
    },
    {
      "latitude": 38.88945,
      "longitude": -9.447107,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 197,
      "squawk": "3214",
      "timestamp": 1702984918,
      "ems": null
    },
    {
      "latitude": 38.884712,
      "longitude": -9.449036,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "3214",
      "timestamp": 1702984928,
      "ems": null
    },
    {
      "latitude": 38.880291,
      "longitude": -9.450989,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 198,
      "squawk": "3214",
      "timestamp": 1702984937,
      "ems": null
    },
    {
      "latitude": 38.876129,
      "longitude": -9.45284,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702984946,
      "ems": null
    },
    {
      "latitude": 38.873062,
      "longitude": -9.454452,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702984952,
      "ems": null
    },
    {
      "latitude": 38.871723,
      "longitude": -9.455261,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702984955,
      "ems": null
    },
    {
      "latitude": 38.870407,
      "longitude": -9.456123,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984958,
      "ems": null
    },
    {
      "latitude": 38.868977,
      "longitude": -9.457031,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984961,
      "ems": null
    },
    {
      "latitude": 38.867889,
      "longitude": -9.457855,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702984963,
      "ems": null
    },
    {
      "latitude": 38.866371,
      "longitude": -9.459106,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702984967,
      "ems": null
    },
    {
      "latitude": 38.865021,
      "longitude": -9.460144,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702984970,
      "ems": null
    },
    {
      "latitude": 38.863811,
      "longitude": -9.461121,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702984973,
      "ems": null
    },
    {
      "latitude": 38.862228,
      "longitude": -9.46228,
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
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702984976,
      "ems": null
    },
    {
      "latitude": 38.860931,
      "longitude": -9.463169,
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702984978,
      "ems": null
    },
    {
      "latitude": 38.856674,
      "longitude": -9.465857,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984987,
      "ems": null
    },
    {
      "latitude": 38.85236,
      "longitude": -9.468628,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702984996,
      "ems": null
    },
    {
      "latitude": 38.850861,
      "longitude": -9.469618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702985000,
      "ems": null
    },
    {
      "latitude": 38.846695,
      "longitude": -9.472364,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702985009,
      "ems": null
    },
    {
      "latitude": 38.842628,
      "longitude": -9.47522,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702985018,
      "ems": null
    },
    {
      "latitude": 38.838684,
      "longitude": -9.477858,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702985027,
      "ems": null
    },
    {
      "latitude": 38.83453,
      "longitude": -9.48053,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702985036,
      "ems": null
    },
    {
      "latitude": 38.830338,
      "longitude": -9.483154,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702985045,
      "ems": null
    },
    {
      "latitude": 38.826149,
      "longitude": -9.485718,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702985054,
      "ems": null
    },
    {
      "latitude": 38.822159,
      "longitude": -9.488247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702985063,
      "ems": null
    },
    {
      "latitude": 38.81842,
      "longitude": -9.49054,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702985071,
      "ems": null
    },
    {
      "latitude": 38.813965,
      "longitude": -9.492964,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702985081,
      "ems": null
    },
    {
      "latitude": 38.809669,
      "longitude": -9.495911,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702985091,
      "ems": null
    },
    {
      "latitude": 38.805588,
      "longitude": -9.498935,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702985100,
      "ems": null
    },
    {
      "latitude": 38.801941,
      "longitude": -9.500977,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702985108,
      "ems": null
    },
    {
      "latitude": 38.797897,
      "longitude": -9.503055,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702985117,
      "ems": null
    },
    {
      "latitude": 38.796028,
      "longitude": -9.503967,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702985121,
      "ems": null
    },
    {
      "latitude": 38.79483,
      "longitude": -9.504487,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702985123,
      "ems": null
    },
    {
      "latitude": 38.79332,
      "longitude": -9.505144,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702985127,
      "ems": null
    },
    {
      "latitude": 38.791702,
      "longitude": -9.505859,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 198,
      "squawk": "3214",
      "timestamp": 1702985130,
      "ems": null
    },
    {
      "latitude": 38.790298,
      "longitude": -9.506398,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 196,
      "squawk": "3214",
      "timestamp": 1702985133,
      "ems": null
    },
    {
      "latitude": 38.788605,
      "longitude": -9.507055,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "3214",
      "timestamp": 1702985136,
      "ems": null
    },
    {
      "latitude": 38.787323,
      "longitude": -9.507446,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702985139,
      "ems": null
    },
    {
      "latitude": 38.785976,
      "longitude": -9.507874,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 192,
      "squawk": "3214",
      "timestamp": 1702985142,
      "ems": null
    },
    {
      "latitude": 38.784065,
      "longitude": -9.50824,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702985145,
      "ems": null
    },
    {
      "latitude": 38.782562,
      "longitude": -9.508368,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 181,
      "squawk": "3214",
      "timestamp": 1702985148,
      "ems": null
    },
    {
      "latitude": 38.78096,
      "longitude": -9.508368,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 178,
      "squawk": "3214",
      "timestamp": 1702985151,
      "ems": null
    },
    {
      "latitude": 38.779411,
      "longitude": -9.508179,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 175,
      "squawk": "3214",
      "timestamp": 1702985154,
      "ems": null
    },
    {
      "latitude": 38.777847,
      "longitude": -9.50801,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 174,
      "squawk": "3214",
      "timestamp": 1702985157,
      "ems": null
    },
    {
      "latitude": 38.776386,
      "longitude": -9.507751,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 170,
      "squawk": "3214",
      "timestamp": 1702985160,
      "ems": null
    },
    {
      "latitude": 38.774734,
      "longitude": -9.507234,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702985163,
      "ems": null
    },
    {
      "latitude": 38.773315,
      "longitude": -9.506697,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "3214",
      "timestamp": 1702985166,
      "ems": null
    },
    {
      "latitude": 38.772335,
      "longitude": -9.506287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "3214",
      "timestamp": 1702985169,
      "ems": null
    },
    {
      "latitude": 38.77066,
      "longitude": -9.505323,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985172,
      "ems": null
    },
    {
      "latitude": 38.769608,
      "longitude": -9.504547,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "3214",
      "timestamp": 1702985175,
      "ems": null
    },
    {
      "latitude": 38.76796,
      "longitude": -9.503418,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "3214",
      "timestamp": 1702985178,
      "ems": null
    },
    {
      "latitude": 38.766701,
      "longitude": -9.50238,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "3214",
      "timestamp": 1702985181,
      "ems": null
    },
    {
      "latitude": 38.765491,
      "longitude": -9.501404,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 146,
      "squawk": "3214",
      "timestamp": 1702985184,
      "ems": null
    },
    {
      "latitude": 38.764187,
      "longitude": -9.500244,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 145,
      "squawk": "3214",
      "timestamp": 1702985187,
      "ems": null
    },
    {
      "latitude": 38.76321,
      "longitude": -9.49939,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 144,
      "squawk": "3214",
      "timestamp": 1702985190,
      "ems": null
    },
    {
      "latitude": 38.761826,
      "longitude": -9.497979,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "3214",
      "timestamp": 1702985193,
      "ems": null
    },
    {
      "latitude": 38.760635,
      "longitude": -9.496606,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702985196,
      "ems": null
    },
    {
      "latitude": 38.760277,
      "longitude": -9.496094,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 135,
      "squawk": "3214",
      "timestamp": 1702985197,
      "ems": null
    },
    {
      "latitude": 38.75885,
      "longitude": -9.494218,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 131,
      "squawk": "3214",
      "timestamp": 1702985201,
      "ems": null
    },
    {
      "latitude": 38.757889,
      "longitude": -9.492724,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "3214",
      "timestamp": 1702985204,
      "ems": null
    },
    {
      "latitude": 38.756927,
      "longitude": -9.491272,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "3214",
      "timestamp": 1702985207,
      "ems": null
    },
    {
      "latitude": 38.755901,
      "longitude": -9.489746,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 130,
      "squawk": "3214",
      "timestamp": 1702985210,
      "ems": null
    },
    {
      "latitude": 38.754925,
      "longitude": -9.48822,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 129,
      "squawk": "3214",
      "timestamp": 1702985213,
      "ems": null
    },
    {
      "latitude": 38.753899,
      "longitude": -9.486755,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 130,
      "squawk": "3214",
      "timestamp": 1702985216,
      "ems": null
    },
    {
      "latitude": 38.752831,
      "longitude": -9.485291,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "3214",
      "timestamp": 1702985219,
      "ems": null
    },
    {
      "latitude": 38.750519,
      "longitude": -9.482933,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 144,
      "squawk": "3214",
      "timestamp": 1702985225,
      "ems": null
    },
    {
      "latitude": 38.748966,
      "longitude": -9.481689,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 149,
      "squawk": "3214",
      "timestamp": 1702985229,
      "ems": null
    },
    {
      "latitude": 38.74757,
      "longitude": -9.480835,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "3214",
      "timestamp": 1702985232,
      "ems": null
    },
    {
      "latitude": 38.746174,
      "longitude": -9.480103,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 159,
      "squawk": "3214",
      "timestamp": 1702985235,
      "ems": null
    },
    {
      "latitude": 38.744659,
      "longitude": -9.479529,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702985238,
      "ems": null
    },
    {
      "latitude": 38.74324,
      "longitude": -9.479231,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 173,
      "squawk": "3214",
      "timestamp": 1702985240,
      "ems": null
    },
    {
      "latitude": 38.74173,
      "longitude": -9.479171,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 179,
      "squawk": "3214",
      "timestamp": 1702985243,
      "ems": null
    },
    {
      "latitude": 38.740166,
      "longitude": -9.479187,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 180,
      "squawk": "3214",
      "timestamp": 1702985247,
      "ems": null
    },
    {
      "latitude": 38.738571,
      "longitude": -9.479171,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 179,
      "squawk": "3214",
      "timestamp": 1702985250,
      "ems": null
    },
    {
      "latitude": 38.736969,
      "longitude": -9.479171,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 180,
      "squawk": "3214",
      "timestamp": 1702985252,
      "ems": null
    },
    {
      "latitude": 38.735413,
      "longitude": -9.479291,
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
      "heading": 185,
      "squawk": "3214",
      "timestamp": 1702985255,
      "ems": null
    },
    {
      "latitude": 38.733837,
      "longitude": -9.479675,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 190,
      "squawk": "3214",
      "timestamp": 1702985259,
      "ems": null
    },
    {
      "latitude": 38.732391,
      "longitude": -9.480066,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 192,
      "squawk": "3214",
      "timestamp": 1702985261,
      "ems": null
    },
    {
      "latitude": 38.730904,
      "longitude": -9.480713,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702985265,
      "ems": null
    },
    {
      "latitude": 38.729599,
      "longitude": -9.481619,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702985268,
      "ems": null
    },
    {
      "latitude": 38.72839,
      "longitude": -9.482544,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702985271,
      "ems": null
    },
    {
      "latitude": 38.727356,
      "longitude": -9.483351,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702985273,
      "ems": null
    },
    {
      "latitude": 38.72612,
      "longitude": -9.484186,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702985277,
      "ems": null
    },
    {
      "latitude": 38.724899,
      "longitude": -9.485046,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702985280,
      "ems": null
    },
    {
      "latitude": 38.723877,
      "longitude": -9.485739,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702985282,
      "ems": null
    },
    {
      "latitude": 38.722385,
      "longitude": -9.486694,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702985286,
      "ems": null
    },
    {
      "latitude": 38.721035,
      "longitude": -9.487427,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702985289,
      "ems": null
    },
    {
      "latitude": 38.71962,
      "longitude": -9.488187,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702985292,
      "ems": null
    },
    {
      "latitude": 38.716938,
      "longitude": -9.489624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702985298,
      "ems": null
    },
    {
      "latitude": 38.715446,
      "longitude": -9.490173,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "3214",
      "timestamp": 1702985301,
      "ems": null
    },
    {
      "latitude": 38.713943,
      "longitude": -9.490576,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 190,
      "squawk": "3214",
      "timestamp": 1702985304,
      "ems": null
    },
    {
      "latitude": 38.712284,
      "longitude": -9.490845,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "3214",
      "timestamp": 1702985307,
      "ems": null
    },
    {
      "latitude": 38.710922,
      "longitude": -9.490874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "3214",
      "timestamp": 1702985310,
      "ems": null
    },
    {
      "latitude": 38.709366,
      "longitude": -9.490635,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "3214",
      "timestamp": 1702985313,
      "ems": null
    },
    {
      "latitude": 38.707901,
      "longitude": -9.490217,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702985316,
      "ems": null
    },
    {
      "latitude": 38.706345,
      "longitude": -9.48956,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 159,
      "squawk": "3214",
      "timestamp": 1702985320,
      "ems": null
    },
    {
      "latitude": 38.705021,
      "longitude": -9.488831,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985323,
      "ems": null
    },
    {
      "latitude": 38.703827,
      "longitude": -9.487829,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "3214",
      "timestamp": 1702985326,
      "ems": null
    },
    {
      "latitude": 38.702694,
      "longitude": -9.486572,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702985329,
      "ems": null
    },
    {
      "latitude": 38.701721,
      "longitude": -9.485321,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 132,
      "squawk": "3214",
      "timestamp": 1702985332,
      "ems": null
    },
    {
      "latitude": 38.700924,
      "longitude": -9.484131,
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
      "heading": 129,
      "squawk": "3214",
      "timestamp": 1702985335,
      "ems": null
    },
    {
      "latitude": 38.700039,
      "longitude": -9.482727,
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
      "heading": 129,
      "squawk": "3214",
      "timestamp": 1702985338,
      "ems": null
    },
    {
      "latitude": 38.699158,
      "longitude": -9.48132,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 128,
      "squawk": "3214",
      "timestamp": 1702985341,
      "ems": null
    },
    {
      "latitude": 38.698288,
      "longitude": -9.479828,
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
      "heading": 125,
      "squawk": "3214",
      "timestamp": 1702985344,
      "ems": null
    },
    {
      "latitude": 38.697556,
      "longitude": -9.478455,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "3214",
      "timestamp": 1702985347,
      "ems": null
    },
    {
      "latitude": 38.696918,
      "longitude": -9.47699,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 118,
      "squawk": "3214",
      "timestamp": 1702985350,
      "ems": null
    },
    {
      "latitude": 38.69632,
      "longitude": -9.47547,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "3214",
      "timestamp": 1702985353,
      "ems": null
    },
    {
      "latitude": 38.695679,
      "longitude": -9.473738,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "3214",
      "timestamp": 1702985357,
      "ems": null
    },
    {
      "latitude": 38.695038,
      "longitude": -9.472185,
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
      "heading": 119,
      "squawk": "3214",
      "timestamp": 1702985360,
      "ems": null
    },
    {
      "latitude": 38.694305,
      "longitude": -9.470693,
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
      "heading": 121,
      "squawk": "3214",
      "timestamp": 1702985362,
      "ems": null
    },
    {
      "latitude": 38.693569,
      "longitude": -9.469238,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 123,
      "squawk": "3214",
      "timestamp": 1702985365,
      "ems": null
    },
    {
      "latitude": 38.692684,
      "longitude": -9.46759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "3214",
      "timestamp": 1702985369,
      "ems": null
    },
    {
      "latitude": 38.691971,
      "longitude": -9.466095,
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
      "heading": 119,
      "squawk": "3214",
      "timestamp": 1702985372,
      "ems": null
    },
    {
      "latitude": 38.691284,
      "longitude": -9.464423,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 115,
      "squawk": "3214",
      "timestamp": 1702985375,
      "ems": null
    },
    {
      "latitude": 38.690781,
      "longitude": -9.462871,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 112,
      "squawk": "3214",
      "timestamp": 1702985378,
      "ems": null
    },
    {
      "latitude": 38.690277,
      "longitude": -9.46108,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 109,
      "squawk": "3214",
      "timestamp": 1702985381,
      "ems": null
    },
    {
      "latitude": 38.689796,
      "longitude": -9.459167,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 107,
      "squawk": "3214",
      "timestamp": 1702985384,
      "ems": null
    },
    {
      "latitude": 38.689407,
      "longitude": -9.457497,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 105,
      "squawk": "3214",
      "timestamp": 1702985387,
      "ems": null
    },
    {
      "latitude": 38.689098,
      "longitude": -9.455688,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 101,
      "squawk": "3214",
      "timestamp": 1702985390,
      "ems": null
    },
    {
      "latitude": 38.688866,
      "longitude": -9.454163,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 101,
      "squawk": "3214",
      "timestamp": 1702985393,
      "ems": null
    },
    {
      "latitude": 38.688583,
      "longitude": -9.452243,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985396,
      "ems": null
    },
    {
      "latitude": 38.688309,
      "longitude": -9.450452,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985399,
      "ems": null
    },
    {
      "latitude": 38.688076,
      "longitude": -9.448853,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 101,
      "squawk": "3214",
      "timestamp": 1702985402,
      "ems": null
    },
    {
      "latitude": 38.687805,
      "longitude": -9.447227,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 102,
      "squawk": "3214",
      "timestamp": 1702985405,
      "ems": null
    },
    {
      "latitude": 38.687611,
      "longitude": -9.445557,
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702985408,
      "ems": null
    },
    {
      "latitude": 38.687439,
      "longitude": -9.443943,
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702985411,
      "ems": null
    },
    {
      "latitude": 38.687237,
      "longitude": -9.442383,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702985414,
      "ems": null
    },
    {
      "latitude": 38.687027,
      "longitude": -9.440779,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 99,
      "squawk": "3214",
      "timestamp": 1702985417,
      "ems": null
    },
    {
      "latitude": 38.686539,
      "longitude": -9.437439,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "3214",
      "timestamp": 1702985423,
      "ems": null
    },
    {
      "latitude": 38.685654,
      "longitude": -9.432617,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 103,
      "squawk": "3214",
      "timestamp": 1702985432,
      "ems": null
    },
    {
      "latitude": 38.685333,
      "longitude": -9.430986,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 104,
      "squawk": "3214",
      "timestamp": 1702985435,
      "ems": null
    },
    {
      "latitude": 38.684818,
      "longitude": -9.42572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702985444,
      "ems": null
    },
    {
      "latitude": 38.684677,
      "longitude": -9.423889,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702985448,
      "ems": null
    },
    {
      "latitude": 38.684536,
      "longitude": -9.422119,
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702985451,
      "ems": null
    },
    {
      "latitude": 38.684353,
      "longitude": -9.42041,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702985454,
      "ems": null
    },
    {
      "latitude": 38.684189,
      "longitude": -9.418567,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702985457,
      "ems": null
    },
    {
      "latitude": 38.684025,
      "longitude": -9.416626,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702985460,
      "ems": null
    },
    {
      "latitude": 38.68396,
      "longitude": -9.414805,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702985463,
      "ems": null
    },
    {
      "latitude": 38.683838,
      "longitude": -9.413208,
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702985466,
      "ems": null
    },
    {
      "latitude": 38.683411,
      "longitude": -9.409492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985472,
      "ems": null
    },
    {
      "latitude": 38.683136,
      "longitude": -9.40776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985475,
      "ems": null
    },
    {
      "latitude": 38.682632,
      "longitude": -9.404118,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 99,
      "squawk": "3214",
      "timestamp": 1702985481,
      "ems": null
    },
    {
      "latitude": 38.682209,
      "longitude": -9.400635,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "3214",
      "timestamp": 1702985487,
      "ems": null
    },
    {
      "latitude": 38.681946,
      "longitude": -9.398923,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985490,
      "ems": null
    },
    {
      "latitude": 38.681671,
      "longitude": -9.396894,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985493,
      "ems": null
    },
    {
      "latitude": 38.680904,
      "longitude": -9.391418,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985503,
      "ems": null
    },
    {
      "latitude": 38.680023,
      "longitude": -9.386169,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "3214",
      "timestamp": 1702985512,
      "ems": null
    },
    {
      "latitude": 38.679325,
      "longitude": -9.380676,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702985520,
      "ems": null
    },
    {
      "latitude": 38.678673,
      "longitude": -9.375244,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702985530,
      "ems": null
    },
    {
      "latitude": 38.678009,
      "longitude": -9.369845,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985539,
      "ems": null
    },
    {
      "latitude": 38.677277,
      "longitude": -9.364411,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702985547,
      "ems": null
    },
    {
      "latitude": 38.676682,
      "longitude": -9.358978,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702985556,
      "ems": null
    },
    {
      "latitude": 38.676064,
      "longitude": -9.35321,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702985566,
      "ems": null
    },
    {
      "latitude": 38.675766,
      "longitude": -9.349664,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702985572,
      "ems": null
    },
    {
      "latitude": 38.675446,
      "longitude": -9.344529,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702985580,
      "ems": null
    },
    {
      "latitude": 38.675087,
      "longitude": -9.339172,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702985590,
      "ems": null
    },
    {
      "latitude": 38.674484,
      "longitude": -9.333602,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702985599,
      "ems": null
    },
    {
      "latitude": 38.674301,
      "longitude": -9.328348,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702985608,
      "ems": null
    },
    {
      "latitude": 38.674389,
      "longitude": -9.32666,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702985611,
      "ems": null
    },
    {
      "latitude": 38.674576,
      "longitude": -9.324951,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702985614,
      "ems": null
    },
    {
      "latitude": 38.6749,
      "longitude": -9.323059,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "3214",
      "timestamp": 1702985617,
      "ems": null
    },
    {
      "latitude": 38.675274,
      "longitude": -9.321594,
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
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702985620,
      "ems": null
    },
    {
      "latitude": 38.675739,
      "longitude": -9.319946,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "3214",
      "timestamp": 1702985623,
      "ems": null
    },
    {
      "latitude": 38.676205,
      "longitude": -9.31842,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702985626,
      "ems": null
    },
    {
      "latitude": 38.676727,
      "longitude": -9.316884,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702985629,
      "ems": null
    },
    {
      "latitude": 38.677277,
      "longitude": -9.315331,
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702985632,
      "ems": null
    },
    {
      "latitude": 38.677826,
      "longitude": -9.313839,
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702985635,
      "ems": null
    },
    {
      "latitude": 38.678486,
      "longitude": -9.312195,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702985638,
      "ems": null
    },
    {
      "latitude": 38.679092,
      "longitude": -9.31073,
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
      "heading": 60,
      "squawk": "3214",
      "timestamp": 1702985641,
      "ems": null
    },
    {
      "latitude": 38.679794,
      "longitude": -9.309241,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 59,
      "squawk": "3214",
      "timestamp": 1702985644,
      "ems": null
    },
    {
      "latitude": 38.680347,
      "longitude": -9.308044,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702985647,
      "ems": null
    },
    {
      "latitude": 38.680939,
      "longitude": -9.306853,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702985650,
      "ems": null
    },
    {
      "latitude": 38.681808,
      "longitude": -9.305121,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702985653,
      "ems": null
    },
    {
      "latitude": 38.682632,
      "longitude": -9.30351,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702985656,
      "ems": null
    },
    {
      "latitude": 38.683228,
      "longitude": -9.302256,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702985659,
      "ems": null
    },
    {
      "latitude": 38.685333,
      "longitude": -9.29724,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702985668,
      "ems": null
    },
    {
      "latitude": 38.687576,
      "longitude": -9.292702,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702985677,
      "ems": null
    },
    {
      "latitude": 38.689098,
      "longitude": -9.289062,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 69,
      "squawk": "3214",
      "timestamp": 1702985683,
      "ems": null
    },
    {
      "latitude": 38.689426,
      "longitude": -9.287292,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702985686,
      "ems": null
    },
    {
      "latitude": 38.689472,
      "longitude": -9.2854,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702985689,
      "ems": null
    },
    {
      "latitude": 38.689285,
      "longitude": -9.283691,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 100,
      "squawk": "3214",
      "timestamp": 1702985692,
      "ems": null
    },
    {
      "latitude": 38.688774,
      "longitude": -9.281982,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 115,
      "squawk": "3214",
      "timestamp": 1702985695,
      "ems": null
    },
    {
      "latitude": 38.687798,
      "longitude": -9.280579,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 135,
      "squawk": "3214",
      "timestamp": 1702985698,
      "ems": null
    },
    {
      "latitude": 38.686726,
      "longitude": -9.279663,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 148,
      "squawk": "3214",
      "timestamp": 1702985701,
      "ems": null
    },
    {
      "latitude": 38.685745,
      "longitude": -9.278969,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 151,
      "squawk": "3214",
      "timestamp": 1702985704,
      "ems": null
    },
    {
      "latitude": 38.684372,
      "longitude": -9.278014,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "3214",
      "timestamp": 1702985707,
      "ems": null
    },
    {
      "latitude": 38.683228,
      "longitude": -9.277059,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 142,
      "squawk": "3214",
      "timestamp": 1702985710,
      "ems": null
    },
    {
      "latitude": 38.68235,
      "longitude": -9.276123,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702985713,
      "ems": null
    },
    {
      "latitude": 38.681213,
      "longitude": -9.27473,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702985716,
      "ems": null
    },
    {
      "latitude": 38.680252,
      "longitude": -9.273596,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 137,
      "squawk": "3214",
      "timestamp": 1702985719,
      "ems": null
    },
    {
      "latitude": 38.679245,
      "longitude": -9.272342,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 137,
      "squawk": "3214",
      "timestamp": 1702985722,
      "ems": null
    },
    {
      "latitude": 38.678146,
      "longitude": -9.271148,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 139,
      "squawk": "3214",
      "timestamp": 1702985725,
      "ems": null
    },
    {
      "latitude": 38.677181,
      "longitude": -9.270203,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 141,
      "squawk": "3214",
      "timestamp": 1702985728,
      "ems": null
    },
    {
      "latitude": 38.676064,
      "longitude": -9.269104,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 143,
      "squawk": "3214",
      "timestamp": 1702985731,
      "ems": null
    },
    {
      "latitude": 38.674946,
      "longitude": -9.268005,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 141,
      "squawk": "3214",
      "timestamp": 1702985734,
      "ems": null
    },
    {
      "latitude": 38.673065,
      "longitude": -9.265833,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702985740,
      "ems": null
    },
    {
      "latitude": 38.669907,
      "longitude": -9.262191,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 140,
      "squawk": "3214",
      "timestamp": 1702985749,
      "ems": null
    },
    {
      "latitude": 38.668709,
      "longitude": -9.261108,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 145,
      "squawk": "3214",
      "timestamp": 1702985752,
      "ems": null
    },
    {
      "latitude": 38.6675,
      "longitude": -9.260071,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 147,
      "squawk": "3214",
      "timestamp": 1702985755,
      "ems": null
    },
    {
      "latitude": 38.664001,
      "longitude": -9.257116,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 147,
      "squawk": "3214",
      "timestamp": 1702985764,
      "ems": null
    },
    {
      "latitude": 38.662903,
      "longitude": -9.25622,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 149,
      "squawk": "3214",
      "timestamp": 1702985767,
      "ems": null
    },
    {
      "latitude": 38.661633,
      "longitude": -9.25531,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 150,
      "squawk": "3214",
      "timestamp": 1702985770,
      "ems": null
    },
    {
      "latitude": 38.660423,
      "longitude": -9.254456,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "3214",
      "timestamp": 1702985773,
      "ems": null
    },
    {
      "latitude": 38.659058,
      "longitude": -9.253533,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 150,
      "squawk": "3214",
      "timestamp": 1702985776,
      "ems": null
    },
    {
      "latitude": 38.656559,
      "longitude": -9.251648,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 150,
      "squawk": "3214",
      "timestamp": 1702985783,
      "ems": null
    },
    {
      "latitude": 38.655441,
      "longitude": -9.250916,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985785,
      "ems": null
    },
    {
      "latitude": 38.654186,
      "longitude": -9.250122,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 151,
      "squawk": "3214",
      "timestamp": 1702985788,
      "ems": null
    },
    {
      "latitude": 38.652786,
      "longitude": -9.249175,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 151,
      "squawk": "3214",
      "timestamp": 1702985791,
      "ems": null
    },
    {
      "latitude": 38.648972,
      "longitude": -9.246643,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985801,
      "ems": null
    },
    {
      "latitude": 38.645016,
      "longitude": -9.244019,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 150,
      "squawk": "3214",
      "timestamp": 1702985810,
      "ems": null
    },
    {
      "latitude": 38.642593,
      "longitude": -9.242126,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 148,
      "squawk": "3214",
      "timestamp": 1702985816,
      "ems": null
    },
    {
      "latitude": 38.639145,
      "longitude": -9.239383,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 147,
      "squawk": "3214",
      "timestamp": 1702985825,
      "ems": null
    },
    {
      "latitude": 38.638138,
      "longitude": -9.238546,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 146,
      "squawk": "3214",
      "timestamp": 1702985827,
      "ems": null
    },
    {
      "latitude": 38.637054,
      "longitude": -9.23761,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 145,
      "squawk": "3214",
      "timestamp": 1702985830,
      "ems": null
    },
    {
      "latitude": 38.63575,
      "longitude": -9.236511,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 146,
      "squawk": "3214",
      "timestamp": 1702985834,
      "ems": null
    },
    {
      "latitude": 38.634541,
      "longitude": -9.235596,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 148,
      "squawk": "3214",
      "timestamp": 1702985837,
      "ems": null
    },
    {
      "latitude": 38.630951,
      "longitude": -9.232874,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 151,
      "squawk": "3214",
      "timestamp": 1702985846,
      "ems": null
    },
    {
      "latitude": 38.627243,
      "longitude": -9.230367,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 151,
      "squawk": "3214",
      "timestamp": 1702985855,
      "ems": null
    },
    {
      "latitude": 38.623787,
      "longitude": -9.227783,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 149,
      "squawk": "3214",
      "timestamp": 1702985863,
      "ems": null
    },
    {
      "latitude": 38.622208,
      "longitude": -9.226784,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 154,
      "squawk": "3214",
      "timestamp": 1702985867,
      "ems": null
    },
    {
      "latitude": 38.62088,
      "longitude": -9.226007,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "3214",
      "timestamp": 1702985870,
      "ems": null
    },
    {
      "latitude": 38.619549,
      "longitude": -9.22522,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 154,
      "squawk": "3214",
      "timestamp": 1702985873,
      "ems": null
    },
    {
      "latitude": 38.615662,
      "longitude": -9.222784,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985882,
      "ems": null
    },
    {
      "latitude": 38.611774,
      "longitude": -9.220398,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 155,
      "squawk": "3214",
      "timestamp": 1702985891,
      "ems": null
    },
    {
      "latitude": 38.607819,
      "longitude": -9.218079,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 153,
      "squawk": "3214",
      "timestamp": 1702985900,
      "ems": null
    },
    {
      "latitude": 38.603676,
      "longitude": -9.215515,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 156,
      "squawk": "3214",
      "timestamp": 1702985909,
      "ems": null
    },
    {
      "latitude": 38.599766,
      "longitude": -9.213074,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 152,
      "squawk": "3214",
      "timestamp": 1702985918,
      "ems": null
    },
    {
      "latitude": 38.596088,
      "longitude": -9.210693,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 154,
      "squawk": "3214",
      "timestamp": 1702985927,
      "ems": null
    },
    {
      "latitude": 38.591904,
      "longitude": -9.208275,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 157,
      "squawk": "3214",
      "timestamp": 1702985936,
      "ems": null
    },
    {
      "latitude": 38.588058,
      "longitude": -9.206184,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 155,
      "squawk": "3214",
      "timestamp": 1702985945,
      "ems": null
    },
    {
      "latitude": 38.584126,
      "longitude": -9.203979,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 157,
      "squawk": "3214",
      "timestamp": 1702985954,
      "ems": null
    },
    {
      "latitude": 38.580261,
      "longitude": -9.201904,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 155,
      "squawk": "3214",
      "timestamp": 1702985963,
      "ems": null
    },
    {
      "latitude": 38.576534,
      "longitude": -9.19989,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 159,
      "squawk": "3214",
      "timestamp": 1702985972,
      "ems": null
    },
    {
      "latitude": 38.572857,
      "longitude": -9.198181,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 158,
      "squawk": "3214",
      "timestamp": 1702985981,
      "ems": null
    },
    {
      "latitude": 38.569153,
      "longitude": -9.196214,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 156,
      "squawk": "3214",
      "timestamp": 1702985990,
      "ems": null
    },
    {
      "latitude": 38.56604,
      "longitude": -9.19472,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 159,
      "squawk": "3214",
      "timestamp": 1702985998,
      "ems": null
    },
    {
      "latitude": 38.562286,
      "longitude": -9.192691,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 156,
      "squawk": "3214",
      "timestamp": 1702986007,
      "ems": null
    },
    {
      "latitude": 38.558212,
      "longitude": -9.1909,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 163,
      "squawk": "3214",
      "timestamp": 1702986016,
      "ems": null
    },
    {
      "latitude": 38.556938,
      "longitude": -9.19043,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702986019,
      "ems": null
    },
    {
      "latitude": 38.555309,
      "longitude": -9.189941,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 167,
      "squawk": "3214",
      "timestamp": 1702986022,
      "ems": null
    },
    {
      "latitude": 38.553818,
      "longitude": -9.189466,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 166,
      "squawk": "3214",
      "timestamp": 1702986025,
      "ems": null
    },
    {
      "latitude": 38.552353,
      "longitude": -9.189049,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 166,
      "squawk": "3214",
      "timestamp": 1702986028,
      "ems": null
    },
    {
      "latitude": 38.551025,
      "longitude": -9.18866,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 166,
      "squawk": "3214",
      "timestamp": 1702986031,
      "ems": null
    },
    {
      "latitude": 38.549652,
      "longitude": -9.188272,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3214",
      "timestamp": 1702986034,
      "ems": null
    },
    {
      "latitude": 38.548187,
      "longitude": -9.187974,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 170,
      "squawk": "3214",
      "timestamp": 1702986037,
      "ems": null
    },
    {
      "latitude": 38.546768,
      "longitude": -9.187675,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 170,
      "squawk": "3214",
      "timestamp": 1702986040,
      "ems": null
    },
    {
      "latitude": 38.545208,
      "longitude": -9.187378,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 171,
      "squawk": "3214",
      "timestamp": 1702986043,
      "ems": null
    },
    {
      "latitude": 38.543716,
      "longitude": -9.187134,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3214",
      "timestamp": 1702986046,
      "ems": null
    },
    {
      "latitude": 38.54274,
      "longitude": -9.186951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "3214",
      "timestamp": 1702986048,
      "ems": null
    },
    {
      "latitude": 38.540783,
      "longitude": -9.186646,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 172,
      "squawk": "3214",
      "timestamp": 1702986052,
      "ems": null
    },
    {
      "latitude": 38.539341,
      "longitude": -9.186462,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 173,
      "squawk": "3214",
      "timestamp": 1702986055,
      "ems": null
    },
    {
      "latitude": 38.537899,
      "longitude": -9.186279,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3214",
      "timestamp": 1702986058,
      "ems": null
    },
    {
      "latitude": 38.536331,
      "longitude": -9.186242,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 177,
      "squawk": "3214",
      "timestamp": 1702986061,
      "ems": null
    },
    {
      "latitude": 38.535198,
      "longitude": -9.186279,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702986064,
      "ems": null
    },
    {
      "latitude": 38.533707,
      "longitude": -9.186401,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 184,
      "squawk": "3214",
      "timestamp": 1702986067,
      "ems": null
    },
    {
      "latitude": 38.532356,
      "longitude": -9.186523,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 182,
      "squawk": "3214",
      "timestamp": 1702986070,
      "ems": null
    },
    {
      "latitude": 38.531101,
      "longitude": -9.186646,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 184,
      "squawk": "3214",
      "timestamp": 1702986073,
      "ems": null
    },
    {
      "latitude": 38.529427,
      "longitude": -9.186829,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 185,
      "squawk": "3214",
      "timestamp": 1702986076,
      "ems": null
    },
    {
      "latitude": 38.528046,
      "longitude": -9.186958,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 186,
      "squawk": "3214",
      "timestamp": 1702986079,
      "ems": null
    },
    {
      "latitude": 38.526627,
      "longitude": -9.187138,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 184,
      "squawk": "3214",
      "timestamp": 1702986082,
      "ems": null
    },
    {
      "latitude": 38.525208,
      "longitude": -9.187257,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 183,
      "squawk": "3214",
      "timestamp": 1702986085,
      "ems": null
    },
    {
      "latitude": 38.522278,
      "longitude": -9.187018,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 172,
      "squawk": "3214",
      "timestamp": 1702986091,
      "ems": null
    },
    {
      "latitude": 38.521091,
      "longitude": -9.186646,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 162,
      "squawk": "3214",
      "timestamp": 1702986094,
      "ems": null
    },
    {
      "latitude": 38.519394,
      "longitude": -9.185526,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3214",
      "timestamp": 1702986098,
      "ems": null
    },
    {
      "latitude": 38.51844,
      "longitude": -9.184448,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3214",
      "timestamp": 1702986101,
      "ems": null
    },
    {
      "latitude": 38.517563,
      "longitude": -9.183197,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 128,
      "squawk": "3214",
      "timestamp": 1702986104,
      "ems": null
    },
    {
      "latitude": 38.516922,
      "longitude": -9.181884,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 120,
      "squawk": "3214",
      "timestamp": 1702986107,
      "ems": null
    },
    {
      "latitude": 38.516392,
      "longitude": -9.18042,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 112,
      "squawk": "3214",
      "timestamp": 1702986110,
      "ems": null
    },
    {
      "latitude": 38.516052,
      "longitude": -9.178958,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 108,
      "squawk": "3214",
      "timestamp": 1702986113,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -9.177551,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702986116,
      "ems": null
    },
    {
      "latitude": 38.515778,
      "longitude": -9.175972,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986119,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -9.174438,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986122,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -9.172913,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702986125,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -9.171265,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986128,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -9.169942,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986131,
      "ems": null
    },
    {
      "latitude": 38.516159,
      "longitude": -9.168457,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986134,
      "ems": null
    },
    {
      "latitude": 38.516251,
      "longitude": -9.167053,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986137,
      "ems": null
    },
    {
      "latitude": 38.516251,
      "longitude": -9.165405,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986141,
      "ems": null
    },
    {
      "latitude": 38.516281,
      "longitude": -9.164508,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986143,
      "ems": null
    },
    {
      "latitude": 38.516327,
      "longitude": -9.159433,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986153,
      "ems": null
    },
    {
      "latitude": 38.516342,
      "longitude": -9.158264,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986156,
      "ems": null
    },
    {
      "latitude": 38.516327,
      "longitude": -9.156507,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986159,
      "ems": null
    },
    {
      "latitude": 38.516281,
      "longitude": -9.154895,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986162,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -9.15332,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986165,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -9.151794,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986167,
      "ems": null
    },
    {
      "latitude": 38.516052,
      "longitude": -9.146655,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986176,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -9.141541,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702986185,
      "ems": null
    },
    {
      "latitude": 38.516018,
      "longitude": -9.136292,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986195,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -9.131549,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986203,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -9.125817,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986213,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -9.120789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986222,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -9.115417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986231,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -9.110233,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986240,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -9.105103,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986249,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -9.103486,
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986252,
      "ems": null
    },
    {
      "latitude": 38.51619,
      "longitude": -9.101814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986255,
      "ems": null
    },
    {
      "latitude": 38.51619,
      "longitude": -9.096859,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986264,
      "ems": null
    },
    {
      "latitude": 38.516052,
      "longitude": -9.091664,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986273,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -9.08667,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986282,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -9.081394,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986291,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -9.076538,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986300,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -9.073547,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986306,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -9.068481,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986315,
      "ems": null
    },
    {
      "latitude": 38.515915,
      "longitude": -9.064019,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986324,
      "ems": null
    },
    {
      "latitude": 38.515869,
      "longitude": -9.05978,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986333,
      "ems": null
    },
    {
      "latitude": 38.515694,
      "longitude": -9.055298,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986343,
      "ems": null
    },
    {
      "latitude": 38.515644,
      "longitude": -9.053894,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702986346,
      "ems": null
    },
    {
      "latitude": 38.515553,
      "longitude": -9.052429,
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702986349,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -9.048197,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986358,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -9.043898,
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702986367,
      "ems": null
    },
    {
      "latitude": 38.514946,
      "longitude": -9.039551,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986375,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -9.035095,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986385,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -9.031179,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986393,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -9.029419,
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986396,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -9.025208,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986405,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -9.020508,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986415,
      "ems": null
    },
    {
      "latitude": 38.5149,
      "longitude": -9.016357,
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986423,
      "ems": null
    },
    {
      "latitude": 38.514999,
      "longitude": -9.011416,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986433,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -9.006836,
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986442,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -9.002502,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986451,
      "ems": null
    },
    {
      "latitude": 38.514996,
      "longitude": -8.997742,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986460,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.993225,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986469,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -8.988953,
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986478,
      "ems": null
    },
    {
      "latitude": 38.515457,
      "longitude": -8.984727,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986487,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.980103,
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986496,
      "ems": null
    },
    {
      "latitude": 38.515503,
      "longitude": -8.975532,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986505,
      "ems": null
    },
    {
      "latitude": 38.51564,
      "longitude": -8.970934,
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986514,
      "ems": null
    },
    {
      "latitude": 38.515594,
      "longitude": -8.966277,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986523,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.961853,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986532,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -8.960266,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986535,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.958496,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986538,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -8.956903,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986541,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.951904,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986550,
      "ems": null
    },
    {
      "latitude": 38.514809,
      "longitude": -8.946655,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702986559,
      "ems": null
    },
    {
      "latitude": 38.51453,
      "longitude": -8.943542,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702986565,
      "ems": null
    },
    {
      "latitude": 38.514202,
      "longitude": -8.938232,
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702986574,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.933655,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986583,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.928467,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986592,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -8.922974,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702986601,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -8.917734,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702986611,
      "ems": null
    },
    {
      "latitude": 38.512154,
      "longitude": -8.912659,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986620,
      "ems": null
    },
    {
      "latitude": 38.512115,
      "longitude": -8.911106,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986623,
      "ems": null
    },
    {
      "latitude": 38.512161,
      "longitude": -8.909494,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986626,
      "ems": null
    },
    {
      "latitude": 38.512199,
      "longitude": -8.907959,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986628,
      "ems": null
    },
    {
      "latitude": 38.512207,
      "longitude": -8.906389,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986631,
      "ems": null
    },
    {
      "latitude": 38.512253,
      "longitude": -8.904657,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986634,
      "ems": null
    },
    {
      "latitude": 38.512199,
      "longitude": -8.902954,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702986638,
      "ems": null
    },
    {
      "latitude": 38.512161,
      "longitude": -8.901374,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986641,
      "ems": null
    },
    {
      "latitude": 38.512108,
      "longitude": -8.899719,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986644,
      "ems": null
    },
    {
      "latitude": 38.51207,
      "longitude": -8.898149,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986646,
      "ems": null
    },
    {
      "latitude": 38.511784,
      "longitude": -8.892944,
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702986656,
      "ems": null
    },
    {
      "latitude": 38.511688,
      "longitude": -8.891479,
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986658,
      "ems": null
    },
    {
      "latitude": 38.51141,
      "longitude": -8.886353,
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702986668,
      "ems": null
    },
    {
      "latitude": 38.511292,
      "longitude": -8.884656,
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702986671,
      "ems": null
    },
    {
      "latitude": 38.510834,
      "longitude": -8.8797,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702986680,
      "ems": null
    },
    {
      "latitude": 38.510384,
      "longitude": -8.874634,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702986689,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -8.869609,
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702986698,
      "ems": null
    },
    {
      "latitude": 38.509407,
      "longitude": -8.864563,
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702986707,
      "ems": null
    },
    {
      "latitude": 38.508957,
      "longitude": -8.859578,
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702986716,
      "ems": null
    },
    {
      "latitude": 38.508728,
      "longitude": -8.854503,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702986725,
      "ems": null
    },
    {
      "latitude": 38.508663,
      "longitude": -8.852783,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986728,
      "ems": null
    },
    {
      "latitude": 38.508663,
      "longitude": -8.851379,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986731,
      "ems": null
    },
    {
      "latitude": 38.508591,
      "longitude": -8.849427,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986734,
      "ems": null
    },
    {
      "latitude": 38.508545,
      "longitude": -8.847876,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986737,
      "ems": null
    },
    {
      "latitude": 38.508499,
      "longitude": -8.846263,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986740,
      "ems": null
    },
    {
      "latitude": 38.508289,
      "longitude": -8.841309,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702986749,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -8.836304,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702986758,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -8.831543,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702986767,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -8.826843,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986776,
      "ems": null
    },
    {
      "latitude": 38.508179,
      "longitude": -8.825006,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986779,
      "ems": null
    },
    {
      "latitude": 38.508244,
      "longitude": -8.823608,
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702986782,
      "ems": null
    },
    {
      "latitude": 38.508408,
      "longitude": -8.821961,
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
      "heading": 82,
      "squawk": "3214",
      "timestamp": 1702986785,
      "ems": null
    },
    {
      "latitude": 38.508591,
      "longitude": -8.82017,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702986788,
      "ems": null
    },
    {
      "latitude": 38.508755,
      "longitude": -8.819092,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702986791,
      "ems": null
    },
    {
      "latitude": 38.509083,
      "longitude": -8.8172,
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
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702986794,
      "ems": null
    },
    {
      "latitude": 38.509323,
      "longitude": -8.815573,
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
      "heading": 80,
      "squawk": "3214",
      "timestamp": 1702986797,
      "ems": null
    },
    {
      "latitude": 38.509502,
      "longitude": -8.814148,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702986800,
      "ems": null
    },
    {
      "latitude": 38.509644,
      "longitude": -8.812647,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986803,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -8.808105,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986812,
      "ems": null
    },
    {
      "latitude": 38.510338,
      "longitude": -8.803162,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986821,
      "ems": null
    },
    {
      "latitude": 38.510479,
      "longitude": -8.801636,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986824,
      "ems": null
    },
    {
      "latitude": 38.510696,
      "longitude": -8.798139,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986830,
      "ems": null
    },
    {
      "latitude": 38.510712,
      "longitude": -8.796753,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986833,
      "ems": null
    },
    {
      "latitude": 38.510803,
      "longitude": -8.793701,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986839,
      "ems": null
    },
    {
      "latitude": 38.510971,
      "longitude": -8.788645,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986848,
      "ems": null
    },
    {
      "latitude": 38.511017,
      "longitude": -8.786794,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986851,
      "ems": null
    },
    {
      "latitude": 38.5112,
      "longitude": -8.781778,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986860,
      "ems": null
    },
    {
      "latitude": 38.51141,
      "longitude": -8.776917,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986869,
      "ems": null
    },
    {
      "latitude": 38.511551,
      "longitude": -8.772156,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986878,
      "ems": null
    },
    {
      "latitude": 38.511597,
      "longitude": -8.766907,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702986887,
      "ems": null
    },
    {
      "latitude": 38.511688,
      "longitude": -8.761841,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702986896,
      "ems": null
    },
    {
      "latitude": 38.511978,
      "longitude": -8.75688,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986905,
      "ems": null
    },
    {
      "latitude": 38.512341,
      "longitude": -8.752014,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986914,
      "ems": null
    },
    {
      "latitude": 38.512482,
      "longitude": -8.750312,
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986917,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -8.748535,
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986920,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -8.743982,
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702986929,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -8.740221,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986935,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -8.735168,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986944,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.730286,
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702986954,
      "ems": null
    },
    {
      "latitude": 38.514389,
      "longitude": -8.725159,
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702986963,
      "ems": null
    },
    {
      "latitude": 38.514816,
      "longitude": -8.720279,
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702986972,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.715322,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986981,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.710426,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702986990,
      "ems": null
    },
    {
      "latitude": 38.515503,
      "longitude": -8.705232,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702986999,
      "ems": null
    },
    {
      "latitude": 38.515457,
      "longitude": -8.701709,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987006,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.69989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702987009,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.698303,
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987012,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.692993,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702987021,
      "ems": null
    },
    {
      "latitude": 38.515549,
      "longitude": -8.689528,
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702987027,
      "ems": null
    },
    {
      "latitude": 38.515739,
      "longitude": -8.687866,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "3214",
      "timestamp": 1702987031,
      "ems": null
    },
    {
      "latitude": 38.515915,
      "longitude": -8.686185,
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702987034,
      "ems": null
    },
    {
      "latitude": 38.516235,
      "longitude": -8.684334,
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
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702987037,
      "ems": null
    },
    {
      "latitude": 38.516529,
      "longitude": -8.682678,
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
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702987040,
      "ems": null
    },
    {
      "latitude": 38.516785,
      "longitude": -8.680752,
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
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702987044,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.675676,
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702987053,
      "ems": null
    },
    {
      "latitude": 38.516762,
      "longitude": -8.673828,
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702987056,
      "ems": null
    },
    {
      "latitude": 38.516624,
      "longitude": -8.672119,
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702987059,
      "ems": null
    },
    {
      "latitude": 38.516438,
      "longitude": -8.670471,
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702987063,
      "ems": null
    },
    {
      "latitude": 38.516342,
      "longitude": -8.668457,
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702987066,
      "ems": null
    },
    {
      "latitude": 38.516281,
      "longitude": -8.66684,
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702987069,
      "ems": null
    },
    {
      "latitude": 38.516296,
      "longitude": -8.6651,
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702987072,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.660092,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987081,
      "ems": null
    },
    {
      "latitude": 38.516556,
      "longitude": -8.658301,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987084,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.65669,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987087,
      "ems": null
    },
    {
      "latitude": 38.516739,
      "longitude": -8.654778,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987090,
      "ems": null
    },
    {
      "latitude": 38.516811,
      "longitude": -8.653198,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987093,
      "ems": null
    },
    {
      "latitude": 38.516949,
      "longitude": -8.647949,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702987103,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -8.643135,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702987112,
      "ems": null
    },
    {
      "latitude": 38.517014,
      "longitude": -8.639612,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702987118,
      "ems": null
    },
    {
      "latitude": 38.517014,
      "longitude": -8.634657,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702987128,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.629522,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987137,
      "ems": null
    },
    {
      "latitude": 38.51683,
      "longitude": -8.627671,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702987140,
      "ems": null
    },
    {
      "latitude": 38.516716,
      "longitude": -8.625916,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702987143,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.620745,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702987153,
      "ems": null
    },
    {
      "latitude": 38.51619,
      "longitude": -8.61555,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987162,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.611877,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987169,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -8.606506,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702987178,
      "ems": null
    },
    {
      "latitude": 38.515686,
      "longitude": -8.601579,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702987187,
      "ems": null
    },
    {
      "latitude": 38.515694,
      "longitude": -8.596375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702987197,
      "ems": null
    },
    {
      "latitude": 38.515549,
      "longitude": -8.591189,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702987206,
      "ems": null
    },
    {
      "latitude": 38.515594,
      "longitude": -8.587606,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987212,
      "ems": null
    },
    {
      "latitude": 38.515686,
      "longitude": -8.585935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702987215,
      "ems": null
    },
    {
      "latitude": 38.515831,
      "longitude": -8.583984,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702987219,
      "ems": null
    },
    {
      "latitude": 38.515961,
      "longitude": -8.57877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702987228,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -8.575378,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702987235,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -8.569993,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702987244,
      "ems": null
    },
    {
      "latitude": 38.516438,
      "longitude": -8.56488,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702987254,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.559544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702987263,
      "ems": null
    },
    {
      "latitude": 38.516716,
      "longitude": -8.554382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702987272,
      "ems": null
    },
    {
      "latitude": 38.516739,
      "longitude": -8.552796,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702987275,
      "ems": null
    },
    {
      "latitude": 38.516739,
      "longitude": -8.551065,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3214",
      "timestamp": 1702987279,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.545871,
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702987288,
      "ems": null
    },
    {
      "latitude": 38.517105,
      "longitude": -8.542646,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702987294,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -8.541199,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "3214",
      "timestamp": 1702987297,
      "ems": null
    },
    {
      "latitude": 38.517883,
      "longitude": -8.539482,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987300,
      "ems": null
    },
    {
      "latitude": 38.518524,
      "longitude": -8.538168,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 55,
      "squawk": "3214",
      "timestamp": 1702987304,
      "ems": null
    },
    {
      "latitude": 38.519348,
      "longitude": -8.536855,
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
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702987307,
      "ems": null
    },
    {
      "latitude": 38.519714,
      "longitude": -8.536258,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "3214",
      "timestamp": 1702987308,
      "ems": null
    },
    {
      "latitude": 38.520813,
      "longitude": -8.534645,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 49,
      "squawk": "3214",
      "timestamp": 1702987312,
      "ems": null
    },
    {
      "latitude": 38.521591,
      "longitude": -8.533511,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 49,
      "squawk": "3214",
      "timestamp": 1702987315,
      "ems": null
    },
    {
      "latitude": 38.522442,
      "longitude": -8.532227,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702987318,
      "ems": null
    },
    {
      "latitude": 38.523235,
      "longitude": -8.531006,
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
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702987321,
      "ems": null
    },
    {
      "latitude": 38.524017,
      "longitude": -8.529809,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702987324,
      "ems": null
    },
    {
      "latitude": 38.524796,
      "longitude": -8.528734,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 46,
      "squawk": "3214",
      "timestamp": 1702987327,
      "ems": null
    },
    {
      "latitude": 38.525562,
      "longitude": -8.527832,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 43,
      "squawk": "3214",
      "timestamp": 1702987330,
      "ems": null
    },
    {
      "latitude": 38.526398,
      "longitude": -8.526855,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 42,
      "squawk": "3214",
      "timestamp": 1702987333,
      "ems": null
    },
    {
      "latitude": 38.528458,
      "longitude": -8.52354,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987342,
      "ems": null
    },
    {
      "latitude": 38.529007,
      "longitude": -8.522285,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987345,
      "ems": null
    },
    {
      "latitude": 38.529556,
      "longitude": -8.520912,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987348,
      "ems": null
    },
    {
      "latitude": 38.530125,
      "longitude": -8.519409,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987351,
      "ems": null
    },
    {
      "latitude": 38.530655,
      "longitude": -8.517987,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987354,
      "ems": null
    },
    {
      "latitude": 38.531204,
      "longitude": -8.516673,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987357,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -8.51532,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987360,
      "ems": null
    },
    {
      "latitude": 38.532265,
      "longitude": -8.514099,
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
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987363,
      "ems": null
    },
    {
      "latitude": 38.532761,
      "longitude": -8.512912,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 60,
      "squawk": "3214",
      "timestamp": 1702987366,
      "ems": null
    },
    {
      "latitude": 38.53315,
      "longitude": -8.512085,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987369,
      "ems": null
    },
    {
      "latitude": 38.533768,
      "longitude": -8.510881,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "3214",
      "timestamp": 1702987372,
      "ems": null
    },
    {
      "latitude": 38.534317,
      "longitude": -8.509986,
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
      "heading": 52,
      "squawk": "3214",
      "timestamp": 1702987375,
      "ems": null
    },
    {
      "latitude": 38.535011,
      "longitude": -8.50885,
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
      "heading": 51,
      "squawk": "3214",
      "timestamp": 1702987378,
      "ems": null
    },
    {
      "latitude": 38.536011,
      "longitude": -8.506523,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 73,
      "squawk": "3214",
      "timestamp": 1702987384,
      "ems": null
    },
    {
      "latitude": 38.536285,
      "longitude": -8.505209,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702987387,
      "ems": null
    },
    {
      "latitude": 38.536514,
      "longitude": -8.503836,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702987390,
      "ems": null
    },
    {
      "latitude": 38.536743,
      "longitude": -8.502821,
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
      "heading": 74,
      "squawk": "3214",
      "timestamp": 1702987393,
      "ems": null
    },
    {
      "latitude": 38.53706,
      "longitude": -8.501221,
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
      "heading": 74,
      "squawk": "3214",
      "timestamp": 1702987396,
      "ems": null
    },
    {
      "latitude": 38.537384,
      "longitude": -8.499878,
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
      "heading": 72,
      "squawk": "3214",
      "timestamp": 1702987399,
      "ems": null
    },
    {
      "latitude": 38.537804,
      "longitude": -8.498474,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987402,
      "ems": null
    },
    {
      "latitude": 38.5383,
      "longitude": -8.497029,
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987405,
      "ems": null
    },
    {
      "latitude": 38.539341,
      "longitude": -8.494507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987411,
      "ems": null
    },
    {
      "latitude": 38.539852,
      "longitude": -8.493286,
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
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987414,
      "ems": null
    },
    {
      "latitude": 38.540359,
      "longitude": -8.492073,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987417,
      "ems": null
    },
    {
      "latitude": 38.540863,
      "longitude": -8.49082,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987420,
      "ems": null
    },
    {
      "latitude": 38.541389,
      "longitude": -8.48938,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987424,
      "ems": null
    },
    {
      "latitude": 38.541855,
      "longitude": -8.488159,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987426,
      "ems": null
    },
    {
      "latitude": 38.542374,
      "longitude": -8.4867,
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987429,
      "ems": null
    },
    {
      "latitude": 38.543976,
      "longitude": -8.482162,
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987439,
      "ems": null
    },
    {
      "latitude": 38.545074,
      "longitude": -8.479057,
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987444,
      "ems": null
    },
    {
      "latitude": 38.545673,
      "longitude": -8.477295,
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
      "heading": 67,
      "squawk": "3214",
      "timestamp": 1702987448,
      "ems": null
    },
    {
      "latitude": 38.54718,
      "longitude": -8.472669,
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987457,
      "ems": null
    },
    {
      "latitude": 38.548836,
      "longitude": -8.467957,
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987465,
      "ems": null
    },
    {
      "latitude": 38.550606,
      "longitude": -8.463257,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987475,
      "ems": null
    },
    {
      "latitude": 38.551254,
      "longitude": -8.461682,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987478,
      "ems": null
    },
    {
      "latitude": 38.551895,
      "longitude": -8.46007,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987481,
      "ems": null
    },
    {
      "latitude": 38.55249,
      "longitude": -8.458636,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987484,
      "ems": null
    },
    {
      "latitude": 38.554329,
      "longitude": -8.454163,
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987493,
      "ems": null
    },
    {
      "latitude": 38.555962,
      "longitude": -8.450073,
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987501,
      "ems": null
    },
    {
      "latitude": 38.557636,
      "longitude": -8.445435,
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987510,
      "ems": null
    },
    {
      "latitude": 38.559402,
      "longitude": -8.440426,
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987519,
      "ems": null
    },
    {
      "latitude": 38.561035,
      "longitude": -8.435791,
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987528,
      "ems": null
    },
    {
      "latitude": 38.562698,
      "longitude": -8.430992,
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987537,
      "ems": null
    },
    {
      "latitude": 38.564434,
      "longitude": -8.426392,
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987546,
      "ems": null
    },
    {
      "latitude": 38.566296,
      "longitude": -8.421509,
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
      "squawk": "3214",
      "timestamp": 1702987555,
      "ems": null
    },
    {
      "latitude": 38.567459,
      "longitude": -8.418518,
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987561,
      "ems": null
    },
    {
      "latitude": 38.569336,
      "longitude": -8.413916,
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
      "heading": 60,
      "squawk": "3214",
      "timestamp": 1702987570,
      "ems": null
    },
    {
      "latitude": 38.571415,
      "longitude": -8.409424,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987580,
      "ems": null
    },
    {
      "latitude": 38.571991,
      "longitude": -8.408302,
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
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987582,
      "ems": null
    },
    {
      "latitude": 38.572578,
      "longitude": -8.407043,
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
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702987586,
      "ems": null
    },
    {
      "latitude": 38.573139,
      "longitude": -8.405884,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702987588,
      "ems": null
    },
    {
      "latitude": 38.573685,
      "longitude": -8.4049,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 54,
      "squawk": "3214",
      "timestamp": 1702987591,
      "ems": null
    },
    {
      "latitude": 38.57428,
      "longitude": -8.403884,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 52,
      "squawk": "3214",
      "timestamp": 1702987594,
      "ems": null
    },
    {
      "latitude": 38.575287,
      "longitude": -8.401734,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987600,
      "ems": null
    },
    {
      "latitude": 38.575699,
      "longitude": -8.400481,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987604,
      "ems": null
    },
    {
      "latitude": 38.576023,
      "longitude": -8.399292,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987606,
      "ems": null
    },
    {
      "latitude": 38.576431,
      "longitude": -8.398092,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987609,
      "ems": null
    },
    {
      "latitude": 38.576797,
      "longitude": -8.396898,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987612,
      "ems": null
    },
    {
      "latitude": 38.577236,
      "longitude": -8.395752,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987615,
      "ems": null
    },
    {
      "latitude": 38.577667,
      "longitude": -8.394629,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987618,
      "ems": null
    },
    {
      "latitude": 38.578217,
      "longitude": -8.393375,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 60,
      "squawk": "3214",
      "timestamp": 1702987622,
      "ems": null
    },
    {
      "latitude": 38.578674,
      "longitude": -8.39242,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 59,
      "squawk": "3214",
      "timestamp": 1702987624,
      "ems": null
    },
    {
      "latitude": 38.580139,
      "longitude": -8.388957,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987634,
      "ems": null
    },
    {
      "latitude": 38.581379,
      "longitude": -8.385498,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987642,
      "ems": null
    },
    {
      "latitude": 38.581696,
      "longitude": -8.384419,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702987645,
      "ems": null
    },
    {
      "latitude": 38.581982,
      "longitude": -8.383118,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 73,
      "squawk": "3214",
      "timestamp": 1702987648,
      "ems": null
    },
    {
      "latitude": 38.58231,
      "longitude": -8.381775,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 73,
      "squawk": "3214",
      "timestamp": 1702987651,
      "ems": null
    },
    {
      "latitude": 38.582634,
      "longitude": -8.380554,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702987654,
      "ems": null
    },
    {
      "latitude": 38.582912,
      "longitude": -8.379456,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 70,
      "squawk": "3214",
      "timestamp": 1702987658,
      "ems": null
    },
    {
      "latitude": 38.583332,
      "longitude": -8.37793,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 69,
      "squawk": "3214",
      "timestamp": 1702987661,
      "ems": null
    },
    {
      "latitude": 38.584442,
      "longitude": -8.374448,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987669,
      "ems": null
    },
    {
      "latitude": 38.585522,
      "longitude": -8.371094,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987679,
      "ems": null
    },
    {
      "latitude": 38.585941,
      "longitude": -8.369934,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987681,
      "ems": null
    },
    {
      "latitude": 38.586365,
      "longitude": -8.368896,
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987684,
      "ems": null
    },
    {
      "latitude": 38.586823,
      "longitude": -8.367676,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987688,
      "ems": null
    },
    {
      "latitude": 38.58728,
      "longitude": -8.366507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987691,
      "ems": null
    },
    {
      "latitude": 38.587662,
      "longitude": -8.365601,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987693,
      "ems": null
    },
    {
      "latitude": 38.588966,
      "longitude": -8.361938,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987703,
      "ems": null
    },
    {
      "latitude": 38.589432,
      "longitude": -8.360901,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 59,
      "squawk": "3214",
      "timestamp": 1702987706,
      "ems": null
    },
    {
      "latitude": 38.590851,
      "longitude": -8.357192,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987715,
      "ems": null
    },
    {
      "latitude": 38.591309,
      "longitude": -8.3557,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987718,
      "ems": null
    },
    {
      "latitude": 38.591713,
      "longitude": -8.354492,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987721,
      "ems": null
    },
    {
      "latitude": 38.593246,
      "longitude": -8.35022,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987730,
      "ems": null
    },
    {
      "latitude": 38.594788,
      "longitude": -8.346684,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702987738,
      "ems": null
    },
    {
      "latitude": 38.59552,
      "longitude": -8.345251,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702987741,
      "ems": null
    },
    {
      "latitude": 38.59618,
      "longitude": -8.343872,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987745,
      "ems": null
    },
    {
      "latitude": 38.597626,
      "longitude": -8.339111,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 69,
      "squawk": "3214",
      "timestamp": 1702987754,
      "ems": null
    },
    {
      "latitude": 38.599182,
      "longitude": -8.334742,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987763,
      "ems": null
    },
    {
      "latitude": 38.599777,
      "longitude": -8.333249,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987766,
      "ems": null
    },
    {
      "latitude": 38.600323,
      "longitude": -8.331726,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987769,
      "ems": null
    },
    {
      "latitude": 38.600929,
      "longitude": -8.330139,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702987772,
      "ems": null
    },
    {
      "latitude": 38.601471,
      "longitude": -8.328651,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987775,
      "ems": null
    },
    {
      "latitude": 38.602524,
      "longitude": -8.325666,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702987781,
      "ems": null
    },
    {
      "latitude": 38.60408,
      "longitude": -8.321188,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702987790,
      "ems": null
    },
    {
      "latitude": 38.604584,
      "longitude": -8.319695,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "3214",
      "timestamp": 1702987793,
      "ems": null
    },
    {
      "latitude": 38.604996,
      "longitude": -8.318143,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702987796,
      "ems": null
    },
    {
      "latitude": 38.605453,
      "longitude": -8.316471,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 69,
      "squawk": "3214",
      "timestamp": 1702987800,
      "ems": null
    },
    {
      "latitude": 38.606888,
      "longitude": -8.31189,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 67,
      "squawk": "3214",
      "timestamp": 1702987809,
      "ems": null
    },
    {
      "latitude": 38.608147,
      "longitude": -8.3078,
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987817,
      "ems": null
    },
    {
      "latitude": 38.60968,
      "longitude": -8.302917,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702987826,
      "ems": null
    },
    {
      "latitude": 38.610764,
      "longitude": -8.299872,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987833,
      "ems": null
    },
    {
      "latitude": 38.61187,
      "longitude": -8.296936,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987839,
      "ems": null
    },
    {
      "latitude": 38.612411,
      "longitude": -8.295514,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987841,
      "ems": null
    },
    {
      "latitude": 38.612942,
      "longitude": -8.29425,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987845,
      "ems": null
    },
    {
      "latitude": 38.613544,
      "longitude": -8.292725,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987847,
      "ems": null
    },
    {
      "latitude": 38.614105,
      "longitude": -8.291504,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987850,
      "ems": null
    },
    {
      "latitude": 38.614792,
      "longitude": -8.289842,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987854,
      "ems": null
    },
    {
      "latitude": 38.615387,
      "longitude": -8.288408,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987857,
      "ems": null
    },
    {
      "latitude": 38.616013,
      "longitude": -8.286926,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987860,
      "ems": null
    },
    {
      "latitude": 38.617828,
      "longitude": -8.282776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "3214",
      "timestamp": 1702987869,
      "ems": null
    },
    {
      "latitude": 38.619644,
      "longitude": -8.278381,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987877,
      "ems": null
    },
    {
      "latitude": 38.621521,
      "longitude": -8.273899,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987887,
      "ems": null
    },
    {
      "latitude": 38.623276,
      "longitude": -8.269409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987896,
      "ems": null
    },
    {
      "latitude": 38.625,
      "longitude": -8.265122,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702987905,
      "ems": null
    },
    {
      "latitude": 38.626785,
      "longitude": -8.260704,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987914,
      "ems": null
    },
    {
      "latitude": 38.628582,
      "longitude": -8.256226,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987923,
      "ems": null
    },
    {
      "latitude": 38.630356,
      "longitude": -8.251867,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702987932,
      "ems": null
    },
    {
      "latitude": 38.632233,
      "longitude": -8.247627,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 58,
      "squawk": "3214",
      "timestamp": 1702987941,
      "ems": null
    },
    {
      "latitude": 38.633003,
      "longitude": -8.246155,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 54,
      "squawk": "3214",
      "timestamp": 1702987944,
      "ems": null
    },
    {
      "latitude": 38.633743,
      "longitude": -8.244881,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 52,
      "squawk": "3214",
      "timestamp": 1702987947,
      "ems": null
    },
    {
      "latitude": 38.634521,
      "longitude": -8.243507,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 53,
      "squawk": "3214",
      "timestamp": 1702987950,
      "ems": null
    },
    {
      "latitude": 38.635208,
      "longitude": -8.242254,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702987953,
      "ems": null
    },
    {
      "latitude": 38.635895,
      "longitude": -8.241059,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702987956,
      "ems": null
    },
    {
      "latitude": 38.636627,
      "longitude": -8.239627,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 55,
      "squawk": "3214",
      "timestamp": 1702987959,
      "ems": null
    },
    {
      "latitude": 38.63736,
      "longitude": -8.238313,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 54,
      "squawk": "3214",
      "timestamp": 1702987962,
      "ems": null
    },
    {
      "latitude": 38.638126,
      "longitude": -8.236938,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 54,
      "squawk": "3214",
      "timestamp": 1702987965,
      "ems": null
    },
    {
      "latitude": 38.640289,
      "longitude": -8.23276,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702987974,
      "ems": null
    },
    {
      "latitude": 38.640839,
      "longitude": -8.231686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "3214",
      "timestamp": 1702987977,
      "ems": null
    },
    {
      "latitude": 38.643082,
      "longitude": -8.227386,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "3214",
      "timestamp": 1702987986,
      "ems": null
    },
    {
      "latitude": 38.645294,
      "longitude": -8.223145,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702987995,
      "ems": null
    },
    {
      "latitude": 38.647339,
      "longitude": -8.219207,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702988004,
      "ems": null
    },
    {
      "latitude": 38.649673,
      "longitude": -8.215027,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702988014,
      "ems": null
    },
    {
      "latitude": 38.650635,
      "longitude": -8.214012,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 33,
      "squawk": "3214",
      "timestamp": 1702988017,
      "ems": null
    },
    {
      "latitude": 38.651718,
      "longitude": -8.213379,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988019,
      "ems": null
    },
    {
      "latitude": 38.652969,
      "longitude": -8.213117,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988023,
      "ems": null
    },
    {
      "latitude": 38.654232,
      "longitude": -8.213013,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702988026,
      "ems": null
    },
    {
      "latitude": 38.655487,
      "longitude": -8.212891,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988029,
      "ems": null
    },
    {
      "latitude": 38.656746,
      "longitude": -8.212585,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702988032,
      "ems": null
    },
    {
      "latitude": 38.658001,
      "longitude": -8.21228,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702988035,
      "ems": null
    },
    {
      "latitude": 38.659214,
      "longitude": -8.212036,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702988038,
      "ems": null
    },
    {
      "latitude": 38.660202,
      "longitude": -8.211802,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702988041,
      "ems": null
    },
    {
      "latitude": 38.661484,
      "longitude": -8.211564,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702988043,
      "ems": null
    },
    {
      "latitude": 38.662796,
      "longitude": -8.211304,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702988047,
      "ems": null
    },
    {
      "latitude": 38.66396,
      "longitude": -8.210999,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988050,
      "ems": null
    },
    {
      "latitude": 38.665127,
      "longitude": -8.210754,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702988053,
      "ems": null
    },
    {
      "latitude": 38.6689,
      "longitude": -8.210191,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988062,
      "ems": null
    },
    {
      "latitude": 38.672562,
      "longitude": -8.209772,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702988071,
      "ems": null
    },
    {
      "latitude": 38.673645,
      "longitude": -8.209717,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702988074,
      "ems": null
    },
    {
      "latitude": 38.674896,
      "longitude": -8.209594,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702988077,
      "ems": null
    },
    {
      "latitude": 38.676159,
      "longitude": -8.209473,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988080,
      "ems": null
    },
    {
      "latitude": 38.679703,
      "longitude": -8.208997,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988090,
      "ems": null
    },
    {
      "latitude": 38.683559,
      "longitude": -8.208557,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988099,
      "ems": null
    },
    {
      "latitude": 38.686119,
      "longitude": -8.208252,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702988105,
      "ems": null
    },
    {
      "latitude": 38.689682,
      "longitude": -8.207981,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702988114,
      "ems": null
    },
    {
      "latitude": 38.693241,
      "longitude": -8.207764,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702988123,
      "ems": null
    },
    {
      "latitude": 38.696915,
      "longitude": -8.207563,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702988132,
      "ems": null
    },
    {
      "latitude": 38.700645,
      "longitude": -8.207642,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702988142,
      "ems": null
    },
    {
      "latitude": 38.704323,
      "longitude": -8.207397,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988151,
      "ems": null
    },
    {
      "latitude": 38.705673,
      "longitude": -8.207214,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702988154,
      "ems": null
    },
    {
      "latitude": 38.706802,
      "longitude": -8.206966,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702988157,
      "ems": null
    },
    {
      "latitude": 38.707813,
      "longitude": -8.206726,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702988159,
      "ems": null
    },
    {
      "latitude": 38.709305,
      "longitude": -8.206482,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702988163,
      "ems": null
    },
    {
      "latitude": 38.711929,
      "longitude": -8.20613,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988169,
      "ems": null
    },
    {
      "latitude": 38.712933,
      "longitude": -8.205994,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988171,
      "ems": null
    },
    {
      "latitude": 38.714329,
      "longitude": -8.20575,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988175,
      "ems": null
    },
    {
      "latitude": 38.718018,
      "longitude": -8.205235,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988184,
      "ems": null
    },
    {
      "latitude": 38.721863,
      "longitude": -8.204698,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988193,
      "ems": null
    },
    {
      "latitude": 38.725735,
      "longitude": -8.204163,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988202,
      "ems": null
    },
    {
      "latitude": 38.729366,
      "longitude": -8.203674,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988211,
      "ems": null
    },
    {
      "latitude": 38.733124,
      "longitude": -8.203204,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702988220,
      "ems": null
    },
    {
      "latitude": 38.736908,
      "longitude": -8.202576,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702988229,
      "ems": null
    },
    {
      "latitude": 38.740631,
      "longitude": -8.202454,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 357,
      "squawk": "3214",
      "timestamp": 1702988238,
      "ems": null
    },
    {
      "latitude": 38.741936,
      "longitude": -8.202576,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 354,
      "squawk": "3214",
      "timestamp": 1702988242,
      "ems": null
    },
    {
      "latitude": 38.74324,
      "longitude": -8.20282,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 351,
      "squawk": "3214",
      "timestamp": 1702988245,
      "ems": null
    },
    {
      "latitude": 38.744522,
      "longitude": -8.203085,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 349,
      "squawk": "3214",
      "timestamp": 1702988248,
      "ems": null
    },
    {
      "latitude": 38.745758,
      "longitude": -8.203383,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 349,
      "squawk": "3214",
      "timestamp": 1702988251,
      "ems": null
    },
    {
      "latitude": 38.746811,
      "longitude": -8.203682,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 347,
      "squawk": "3214",
      "timestamp": 1702988254,
      "ems": null
    },
    {
      "latitude": 38.748047,
      "longitude": -8.204041,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 348,
      "squawk": "3214",
      "timestamp": 1702988256,
      "ems": null
    },
    {
      "latitude": 38.749374,
      "longitude": -8.204399,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 348,
      "squawk": "3214",
      "timestamp": 1702988260,
      "ems": null
    },
    {
      "latitude": 38.750595,
      "longitude": -8.204773,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 346,
      "squawk": "3214",
      "timestamp": 1702988263,
      "ems": null
    },
    {
      "latitude": 38.751114,
      "longitude": -8.204936,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 344,
      "squawk": "3214",
      "timestamp": 1702988265,
      "ems": null
    },
    {
      "latitude": 38.752762,
      "longitude": -8.205533,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 343,
      "squawk": "3214",
      "timestamp": 1702988268,
      "ems": null
    },
    {
      "latitude": 38.753998,
      "longitude": -8.205951,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 343,
      "squawk": "3214",
      "timestamp": 1702988272,
      "ems": null
    },
    {
      "latitude": 38.755203,
      "longitude": -8.206421,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 342,
      "squawk": "3214",
      "timestamp": 1702988275,
      "ems": null
    },
    {
      "latitude": 38.756332,
      "longitude": -8.206906,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 342,
      "squawk": "3214",
      "timestamp": 1702988278,
      "ems": null
    },
    {
      "latitude": 38.757626,
      "longitude": -8.207458,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988281,
      "ems": null
    },
    {
      "latitude": 38.758804,
      "longitude": -8.207922,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 340,
      "squawk": "3214",
      "timestamp": 1702988284,
      "ems": null
    },
    {
      "latitude": 38.759583,
      "longitude": -8.20828,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988287,
      "ems": null
    },
    {
      "latitude": 38.761162,
      "longitude": -8.209106,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 338,
      "squawk": "3214",
      "timestamp": 1702988290,
      "ems": null
    },
    {
      "latitude": 38.762238,
      "longitude": -8.209653,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 338,
      "squawk": "3214",
      "timestamp": 1702988293,
      "ems": null
    },
    {
      "latitude": 38.763474,
      "longitude": -8.21025,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 339,
      "squawk": "3214",
      "timestamp": 1702988296,
      "ems": null
    },
    {
      "latitude": 38.765671,
      "longitude": -8.211325,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 338,
      "squawk": "3214",
      "timestamp": 1702988302,
      "ems": null
    },
    {
      "latitude": 38.767914,
      "longitude": -8.212524,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 336,
      "squawk": "3214",
      "timestamp": 1702988308,
      "ems": null
    },
    {
      "latitude": 38.769028,
      "longitude": -8.213135,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 335,
      "squawk": "3214",
      "timestamp": 1702988311,
      "ems": null
    },
    {
      "latitude": 38.770195,
      "longitude": -8.213806,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 335,
      "squawk": "3214",
      "timestamp": 1702988314,
      "ems": null
    },
    {
      "latitude": 38.773636,
      "longitude": -8.215743,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 339,
      "squawk": "3214",
      "timestamp": 1702988323,
      "ems": null
    },
    {
      "latitude": 38.774849,
      "longitude": -8.216064,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 352,
      "squawk": "3214",
      "timestamp": 1702988326,
      "ems": null
    },
    {
      "latitude": 38.776058,
      "longitude": -8.215942,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702988329,
      "ems": null
    },
    {
      "latitude": 38.777161,
      "longitude": -8.215505,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 18,
      "squawk": "3214",
      "timestamp": 1702988332,
      "ems": null
    },
    {
      "latitude": 38.778351,
      "longitude": -8.214908,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988335,
      "ems": null
    },
    {
      "latitude": 38.779495,
      "longitude": -8.21437,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 20,
      "squawk": "3214",
      "timestamp": 1702988338,
      "ems": null
    },
    {
      "latitude": 38.780594,
      "longitude": -8.213833,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 20,
      "squawk": "3214",
      "timestamp": 1702988341,
      "ems": null
    },
    {
      "latitude": 38.781876,
      "longitude": -8.213236,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988344,
      "ems": null
    },
    {
      "latitude": 38.783043,
      "longitude": -8.212769,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988347,
      "ems": null
    },
    {
      "latitude": 38.784393,
      "longitude": -8.212097,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988351,
      "ems": null
    },
    {
      "latitude": 38.785583,
      "longitude": -8.211623,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988354,
      "ems": null
    },
    {
      "latitude": 38.786591,
      "longitude": -8.211145,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988356,
      "ems": null
    },
    {
      "latitude": 38.790161,
      "longitude": -8.209414,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 20,
      "squawk": "3214",
      "timestamp": 1702988365,
      "ems": null
    },
    {
      "latitude": 38.793564,
      "longitude": -8.207825,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988374,
      "ems": null
    },
    {
      "latitude": 38.796799,
      "longitude": -8.20619,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 22,
      "squawk": "3214",
      "timestamp": 1702988383,
      "ems": null
    },
    {
      "latitude": 38.800266,
      "longitude": -8.204468,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988393,
      "ems": null
    },
    {
      "latitude": 38.803432,
      "longitude": -8.202698,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 24,
      "squawk": "3214",
      "timestamp": 1702988402,
      "ems": null
    },
    {
      "latitude": 38.806316,
      "longitude": -8.20105,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 22,
      "squawk": "3214",
      "timestamp": 1702988411,
      "ems": null
    },
    {
      "latitude": 38.809296,
      "longitude": -8.199503,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 22,
      "squawk": "3214",
      "timestamp": 1702988420,
      "ems": null
    },
    {
      "latitude": 38.812408,
      "longitude": -8.197831,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988429,
      "ems": null
    },
    {
      "latitude": 38.815395,
      "longitude": -8.196167,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 25,
      "squawk": "3214",
      "timestamp": 1702988438,
      "ems": null
    },
    {
      "latitude": 38.817398,
      "longitude": -8.194885,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 27,
      "squawk": "3214",
      "timestamp": 1702988444,
      "ems": null
    },
    {
      "latitude": 38.819214,
      "longitude": -8.193726,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 25,
      "squawk": "3214",
      "timestamp": 1702988450,
      "ems": null
    },
    {
      "latitude": 38.822285,
      "longitude": -8.191895,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 24,
      "squawk": "3214",
      "timestamp": 1702988459,
      "ems": null
    },
    {
      "latitude": 38.825226,
      "longitude": -8.190069,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 24,
      "squawk": "3214",
      "timestamp": 1702988469,
      "ems": null
    },
    {
      "latitude": 38.82811,
      "longitude": -8.188337,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 25,
      "squawk": "3214",
      "timestamp": 1702988478,
      "ems": null
    },
    {
      "latitude": 38.831085,
      "longitude": -8.186584,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702988487,
      "ems": null
    },
    {
      "latitude": 38.832047,
      "longitude": -8.186069,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988489,
      "ems": null
    },
    {
      "latitude": 38.833099,
      "longitude": -8.185591,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 20,
      "squawk": "3214",
      "timestamp": 1702988493,
      "ems": null
    },
    {
      "latitude": 38.834156,
      "longitude": -8.185059,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988496,
      "ems": null
    },
    {
      "latitude": 38.834839,
      "longitude": -8.184814,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988498,
      "ems": null
    },
    {
      "latitude": 38.836212,
      "longitude": -8.184217,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 18,
      "squawk": "3214",
      "timestamp": 1702988502,
      "ems": null
    },
    {
      "latitude": 38.837368,
      "longitude": -8.183716,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 18,
      "squawk": "3214",
      "timestamp": 1702988505,
      "ems": null
    },
    {
      "latitude": 38.838066,
      "longitude": -8.18335,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988507,
      "ems": null
    },
    {
      "latitude": 38.839184,
      "longitude": -8.182861,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988510,
      "ems": null
    },
    {
      "latitude": 38.840488,
      "longitude": -8.182251,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988514,
      "ems": null
    },
    {
      "latitude": 38.843582,
      "longitude": -8.180933,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 17,
      "squawk": "3214",
      "timestamp": 1702988522,
      "ems": null
    },
    {
      "latitude": 38.846558,
      "longitude": -8.179799,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702988531,
      "ems": null
    },
    {
      "latitude": 38.848663,
      "longitude": -8.179023,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988537,
      "ems": null
    },
    {
      "latitude": 38.84967,
      "longitude": -8.178724,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988540,
      "ems": null
    },
    {
      "latitude": 38.850777,
      "longitude": -8.178345,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988543,
      "ems": null
    },
    {
      "latitude": 38.853989,
      "longitude": -8.177307,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988552,
      "ems": null
    },
    {
      "latitude": 38.857315,
      "longitude": -8.176276,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 13,
      "squawk": "3214",
      "timestamp": 1702988561,
      "ems": null
    },
    {
      "latitude": 38.860832,
      "longitude": -8.175232,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 13,
      "squawk": "3214",
      "timestamp": 1702988570,
      "ems": null
    },
    {
      "latitude": 38.864136,
      "longitude": -8.174133,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702988579,
      "ems": null
    },
    {
      "latitude": 38.866425,
      "longitude": -8.173171,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988585,
      "ems": null
    },
    {
      "latitude": 38.867523,
      "longitude": -8.172693,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988588,
      "ems": null
    },
    {
      "latitude": 38.870838,
      "longitude": -8.171387,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702988597,
      "ems": null
    },
    {
      "latitude": 38.874237,
      "longitude": -8.170227,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702988606,
      "ems": null
    },
    {
      "latitude": 38.877636,
      "longitude": -8.169006,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702988615,
      "ems": null
    },
    {
      "latitude": 38.881172,
      "longitude": -8.167847,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988624,
      "ems": null
    },
    {
      "latitude": 38.884525,
      "longitude": -8.166748,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702988633,
      "ems": null
    },
    {
      "latitude": 38.88797,
      "longitude": -8.165588,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 13,
      "squawk": "3214",
      "timestamp": 1702988642,
      "ems": null
    },
    {
      "latitude": 38.891556,
      "longitude": -8.164574,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 11,
      "squawk": "3214",
      "timestamp": 1702988651,
      "ems": null
    },
    {
      "latitude": 38.894989,
      "longitude": -8.163678,
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
      "heading": 11,
      "squawk": "3214",
      "timestamp": 1702988661,
      "ems": null
    },
    {
      "latitude": 38.898514,
      "longitude": -8.162723,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702988669,
      "ems": null
    },
    {
      "latitude": 38.901901,
      "longitude": -8.161827,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702988679,
      "ems": null
    },
    {
      "latitude": 38.905193,
      "longitude": -8.161072,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702988688,
      "ems": null
    },
    {
      "latitude": 38.90836,
      "longitude": -8.160339,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702988696,
      "ems": null
    },
    {
      "latitude": 38.91156,
      "longitude": -8.159438,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702988705,
      "ems": null
    },
    {
      "latitude": 38.914829,
      "longitude": -8.158508,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702988715,
      "ems": null
    },
    {
      "latitude": 38.918324,
      "longitude": -8.157471,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702988724,
      "ems": null
    },
    {
      "latitude": 38.921627,
      "longitude": -8.156433,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702988733,
      "ems": null
    },
    {
      "latitude": 38.923691,
      "longitude": -8.155617,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702988739,
      "ems": null
    },
    {
      "latitude": 38.924835,
      "longitude": -8.15502,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 23,
      "squawk": "3214",
      "timestamp": 1702988742,
      "ems": null
    },
    {
      "latitude": 38.925816,
      "longitude": -8.154358,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 27,
      "squawk": "3214",
      "timestamp": 1702988745,
      "ems": null
    },
    {
      "latitude": 38.926888,
      "longitude": -8.153564,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 31,
      "squawk": "3214",
      "timestamp": 1702988748,
      "ems": null
    },
    {
      "latitude": 38.927719,
      "longitude": -8.15287,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 34,
      "squawk": "3214",
      "timestamp": 1702988751,
      "ems": null
    },
    {
      "latitude": 38.928844,
      "longitude": -8.151855,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 35,
      "squawk": "3214",
      "timestamp": 1702988754,
      "ems": null
    },
    {
      "latitude": 38.929634,
      "longitude": -8.151062,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 38,
      "squawk": "3214",
      "timestamp": 1702988757,
      "ems": null
    },
    {
      "latitude": 38.930473,
      "longitude": -8.150024,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 43,
      "squawk": "3214",
      "timestamp": 1702988760,
      "ems": null
    },
    {
      "latitude": 38.931244,
      "longitude": -8.14875,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 55,
      "squawk": "3214",
      "timestamp": 1702988763,
      "ems": null
    },
    {
      "latitude": 38.931793,
      "longitude": -8.147616,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 60,
      "squawk": "3214",
      "timestamp": 1702988766,
      "ems": null
    },
    {
      "latitude": 38.932381,
      "longitude": -8.146057,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702988769,
      "ems": null
    },
    {
      "latitude": 38.932892,
      "longitude": -8.144571,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702988772,
      "ems": null
    },
    {
      "latitude": 38.933395,
      "longitude": -8.143019,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 66,
      "squawk": "3214",
      "timestamp": 1702988775,
      "ems": null
    },
    {
      "latitude": 38.933807,
      "longitude": -8.141765,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702988778,
      "ems": null
    },
    {
      "latitude": 38.934429,
      "longitude": -8.14032,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "3214",
      "timestamp": 1702988781,
      "ems": null
    },
    {
      "latitude": 38.93494,
      "longitude": -8.138977,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "3214",
      "timestamp": 1702988784,
      "ems": null
    },
    {
      "latitude": 38.935364,
      "longitude": -8.137645,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "3214",
      "timestamp": 1702988787,
      "ems": null
    },
    {
      "latitude": 38.93573,
      "longitude": -8.136332,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702988790,
      "ems": null
    },
    {
      "latitude": 38.936142,
      "longitude": -8.134779,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 72,
      "squawk": "3214",
      "timestamp": 1702988793,
      "ems": null
    },
    {
      "latitude": 38.936432,
      "longitude": -8.133179,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "3214",
      "timestamp": 1702988796,
      "ems": null
    },
    {
      "latitude": 38.936665,
      "longitude": -8.131897,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702988799,
      "ems": null
    },
    {
      "latitude": 38.936874,
      "longitude": -8.130361,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 80,
      "squawk": "3214",
      "timestamp": 1702988802,
      "ems": null
    },
    {
      "latitude": 38.937012,
      "longitude": -8.128629,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988805,
      "ems": null
    },
    {
      "latitude": 38.937038,
      "longitude": -8.127075,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702988808,
      "ems": null
    },
    {
      "latitude": 38.937038,
      "longitude": -8.125488,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702988811,
      "ems": null
    },
    {
      "latitude": 38.937012,
      "longitude": -8.123853,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702988814,
      "ems": null
    },
    {
      "latitude": 38.936897,
      "longitude": -8.122192,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702988817,
      "ems": null
    },
    {
      "latitude": 38.936783,
      "longitude": -8.120687,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702988820,
      "ems": null
    },
    {
      "latitude": 38.936665,
      "longitude": -8.119019,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702988823,
      "ems": null
    },
    {
      "latitude": 38.936508,
      "longitude": -8.117463,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702988826,
      "ems": null
    },
    {
      "latitude": 38.936325,
      "longitude": -8.115732,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702988829,
      "ems": null
    },
    {
      "latitude": 38.936153,
      "longitude": -8.114197,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702988832,
      "ems": null
    },
    {
      "latitude": 38.935966,
      "longitude": -8.112488,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 97,
      "squawk": "3214",
      "timestamp": 1702988836,
      "ems": null
    },
    {
      "latitude": 38.935825,
      "longitude": -8.110962,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702988838,
      "ems": null
    },
    {
      "latitude": 38.935638,
      "longitude": -8.109375,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702988841,
      "ems": null
    },
    {
      "latitude": 38.935455,
      "longitude": -8.107788,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 98,
      "squawk": "3214",
      "timestamp": 1702988844,
      "ems": null
    },
    {
      "latitude": 38.935223,
      "longitude": -8.102905,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702988853,
      "ems": null
    },
    {
      "latitude": 38.935314,
      "longitude": -8.101257,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702988857,
      "ems": null
    },
    {
      "latitude": 38.93541,
      "longitude": -8.09973,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702988859,
      "ems": null
    },
    {
      "latitude": 38.935501,
      "longitude": -8.097961,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702988863,
      "ems": null
    },
    {
      "latitude": 38.935593,
      "longitude": -8.096327,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988866,
      "ems": null
    },
    {
      "latitude": 38.935734,
      "longitude": -8.094666,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702988869,
      "ems": null
    },
    {
      "latitude": 38.935871,
      "longitude": -8.09314,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988872,
      "ems": null
    },
    {
      "latitude": 38.935959,
      "longitude": -8.091669,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988875,
      "ems": null
    },
    {
      "latitude": 38.936096,
      "longitude": -8.089997,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988878,
      "ems": null
    },
    {
      "latitude": 38.936199,
      "longitude": -8.08844,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702988881,
      "ems": null
    },
    {
      "latitude": 38.936691,
      "longitude": -8.083429,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702988890,
      "ems": null
    },
    {
      "latitude": 38.936874,
      "longitude": -8.081937,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 80,
      "squawk": "3214",
      "timestamp": 1702988893,
      "ems": null
    },
    {
      "latitude": 38.937084,
      "longitude": -8.080505,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702988896,
      "ems": null
    },
    {
      "latitude": 38.937363,
      "longitude": -8.078979,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 76,
      "squawk": "3214",
      "timestamp": 1702988899,
      "ems": null
    },
    {
      "latitude": 38.937687,
      "longitude": -8.077271,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 74,
      "squawk": "3214",
      "timestamp": 1702988902,
      "ems": null
    },
    {
      "latitude": 38.938015,
      "longitude": -8.075806,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 73,
      "squawk": "3214",
      "timestamp": 1702988905,
      "ems": null
    },
    {
      "latitude": 38.938339,
      "longitude": -8.074402,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 74,
      "squawk": "3214",
      "timestamp": 1702988908,
      "ems": null
    },
    {
      "latitude": 38.938618,
      "longitude": -8.072693,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702988911,
      "ems": null
    },
    {
      "latitude": 38.938889,
      "longitude": -8.07119,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702988914,
      "ems": null
    },
    {
      "latitude": 38.939133,
      "longitude": -8.069763,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702988917,
      "ems": null
    },
    {
      "latitude": 38.939804,
      "longitude": -8.06504,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702988926,
      "ems": null
    },
    {
      "latitude": 38.939877,
      "longitude": -8.063416,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702988929,
      "ems": null
    },
    {
      "latitude": 38.939968,
      "longitude": -8.061768,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702988932,
      "ems": null
    },
    {
      "latitude": 38.939987,
      "longitude": -8.059964,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702988935,
      "ems": null
    },
    {
      "latitude": 38.939987,
      "longitude": -8.058352,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702988938,
      "ems": null
    },
    {
      "latitude": 38.939922,
      "longitude": -8.056641,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702988941,
      "ems": null
    },
    {
      "latitude": 38.939831,
      "longitude": -8.054688,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702988944,
      "ems": null
    },
    {
      "latitude": 38.939785,
      "longitude": -8.05304,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702988947,
      "ems": null
    },
    {
      "latitude": 38.93969,
      "longitude": -8.051208,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702988950,
      "ems": null
    },
    {
      "latitude": 38.939644,
      "longitude": -8.049561,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702988953,
      "ems": null
    },
    {
      "latitude": 38.939529,
      "longitude": -8.047724,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702988956,
      "ems": null
    },
    {
      "latitude": 38.939438,
      "longitude": -8.045874,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702988960,
      "ems": null
    },
    {
      "latitude": 38.939316,
      "longitude": -8.044189,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702988962,
      "ems": null
    },
    {
      "latitude": 38.939178,
      "longitude": -8.042297,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 96,
      "squawk": "3214",
      "timestamp": 1702988966,
      "ems": null
    },
    {
      "latitude": 38.938705,
      "longitude": -8.037215,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702988974,
      "ems": null
    },
    {
      "latitude": 38.938385,
      "longitude": -8.031982,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702988983,
      "ems": null
    },
    {
      "latitude": 38.937969,
      "longitude": -8.026794,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702988993,
      "ems": null
    },
    {
      "latitude": 38.937515,
      "longitude": -8.021333,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702989002,
      "ems": null
    },
    {
      "latitude": 38.937222,
      "longitude": -8.016235,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702989011,
      "ems": null
    },
    {
      "latitude": 38.937195,
      "longitude": -8.014526,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989014,
      "ems": null
    },
    {
      "latitude": 38.937195,
      "longitude": -8.012855,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989017,
      "ems": null
    },
    {
      "latitude": 38.937241,
      "longitude": -8.011421,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989020,
      "ems": null
    },
    {
      "latitude": 38.937241,
      "longitude": -8.00957,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989023,
      "ems": null
    },
    {
      "latitude": 38.937286,
      "longitude": -8.007958,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989026,
      "ems": null
    },
    {
      "latitude": 38.937332,
      "longitude": -8.006347,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989029,
      "ems": null
    },
    {
      "latitude": 38.937363,
      "longitude": -8.004883,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989032,
      "ems": null
    },
    {
      "latitude": 38.937378,
      "longitude": -8.003181,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989035,
      "ems": null
    },
    {
      "latitude": 38.937469,
      "longitude": -8.001451,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989038,
      "ems": null
    },
    {
      "latitude": 38.937607,
      "longitude": -7.996494,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989047,
      "ems": null
    },
    {
      "latitude": 38.937737,
      "longitude": -7.991638,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989056,
      "ems": null
    },
    {
      "latitude": 38.937973,
      "longitude": -7.986762,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702989065,
      "ems": null
    },
    {
      "latitude": 38.938202,
      "longitude": -7.981747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702989074,
      "ems": null
    },
    {
      "latitude": 38.938385,
      "longitude": -7.976791,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702989083,
      "ems": null
    },
    {
      "latitude": 38.938568,
      "longitude": -7.973387,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989089,
      "ems": null
    },
    {
      "latitude": 38.9389,
      "longitude": -7.968384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702989098,
      "ems": null
    },
    {
      "latitude": 38.939072,
      "longitude": -7.963416,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989107,
      "ems": null
    },
    {
      "latitude": 38.93927,
      "longitude": -7.958313,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702989117,
      "ems": null
    },
    {
      "latitude": 38.939529,
      "longitude": -7.953624,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702989125,
      "ems": null
    },
    {
      "latitude": 38.939877,
      "longitude": -7.948547,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702989135,
      "ems": null
    },
    {
      "latitude": 38.940353,
      "longitude": -7.943414,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 82,
      "squawk": "3214",
      "timestamp": 1702989144,
      "ems": null
    },
    {
      "latitude": 38.940536,
      "longitude": -7.941623,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702989147,
      "ems": null
    },
    {
      "latitude": 38.94104,
      "longitude": -7.936786,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 83,
      "squawk": "3214",
      "timestamp": 1702989156,
      "ems": null
    },
    {
      "latitude": 38.941319,
      "longitude": -7.931946,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989164,
      "ems": null
    },
    {
      "latitude": 38.941647,
      "longitude": -7.926758,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702989174,
      "ems": null
    },
    {
      "latitude": 38.94191,
      "longitude": -7.921859,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989182,
      "ems": null
    },
    {
      "latitude": 38.942047,
      "longitude": -7.917202,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989190,
      "ems": null
    },
    {
      "latitude": 38.942062,
      "longitude": -7.912109,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989200,
      "ems": null
    },
    {
      "latitude": 38.942047,
      "longitude": -7.910455,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989202,
      "ems": null
    },
    {
      "latitude": 38.942047,
      "longitude": -7.908544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989206,
      "ems": null
    },
    {
      "latitude": 38.942249,
      "longitude": -7.903503,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 86,
      "squawk": "3214",
      "timestamp": 1702989215,
      "ems": null
    },
    {
      "latitude": 38.942249,
      "longitude": -7.898499,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702989224,
      "ems": null
    },
    {
      "latitude": 38.942062,
      "longitude": -7.893555,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989233,
      "ems": null
    },
    {
      "latitude": 38.941925,
      "longitude": -7.890076,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989239,
      "ems": null
    },
    {
      "latitude": 38.941864,
      "longitude": -7.888363,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989242,
      "ems": null
    },
    {
      "latitude": 38.94183,
      "longitude": -7.887207,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989245,
      "ems": null
    },
    {
      "latitude": 38.941681,
      "longitude": -7.885019,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989248,
      "ems": null
    },
    {
      "latitude": 38.941364,
      "longitude": -7.88031,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702989257,
      "ems": null
    },
    {
      "latitude": 38.940948,
      "longitude": -7.874573,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702989266,
      "ems": null
    },
    {
      "latitude": 38.940716,
      "longitude": -7.86969,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989275,
      "ems": null
    },
    {
      "latitude": 38.940388,
      "longitude": -7.864563,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "3214",
      "timestamp": 1702989285,
      "ems": null
    },
    {
      "latitude": 38.940018,
      "longitude": -7.85907,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 93,
      "squawk": "3214",
      "timestamp": 1702989293,
      "ems": null
    },
    {
      "latitude": 38.939896,
      "longitude": -7.854986,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702989301,
      "ems": null
    },
    {
      "latitude": 38.939877,
      "longitude": -7.849854,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989310,
      "ems": null
    },
    {
      "latitude": 38.93985,
      "longitude": -7.848776,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989312,
      "ems": null
    },
    {
      "latitude": 38.939831,
      "longitude": -7.847351,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989314,
      "ems": null
    },
    {
      "latitude": 38.939735,
      "longitude": -7.841919,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702989324,
      "ems": null
    },
    {
      "latitude": 38.939667,
      "longitude": -7.836775,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702989333,
      "ems": null
    },
    {
      "latitude": 38.939598,
      "longitude": -7.83197,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989341,
      "ems": null
    },
    {
      "latitude": 38.939529,
      "longitude": -7.826385,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "3214",
      "timestamp": 1702989351,
      "ems": null
    },
    {
      "latitude": 38.939575,
      "longitude": -7.821311,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702989360,
      "ems": null
    },
    {
      "latitude": 38.939831,
      "longitude": -7.819458,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702989363,
      "ems": null
    },
    {
      "latitude": 38.940033,
      "longitude": -7.817966,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702989366,
      "ems": null
    },
    {
      "latitude": 38.940216,
      "longitude": -7.816235,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "3214",
      "timestamp": 1702989369,
      "ems": null
    },
    {
      "latitude": 38.940353,
      "longitude": -7.814324,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702989372,
      "ems": null
    },
    {
      "latitude": 38.940491,
      "longitude": -7.812712,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702989375,
      "ems": null
    },
    {
      "latitude": 38.940582,
      "longitude": -7.810981,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702989378,
      "ems": null
    },
    {
      "latitude": 38.94072,
      "longitude": -7.809011,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702989381,
      "ems": null
    },
    {
      "latitude": 38.940811,
      "longitude": -7.807398,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989384,
      "ems": null
    },
    {
      "latitude": 38.940899,
      "longitude": -7.805847,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989387,
      "ems": null
    },
    {
      "latitude": 38.94104,
      "longitude": -7.803935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "3214",
      "timestamp": 1702989390,
      "ems": null
    },
    {
      "latitude": 38.941589,
      "longitude": -7.798562,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702989400,
      "ems": null
    },
    {
      "latitude": 38.94223,
      "longitude": -7.793486,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702989409,
      "ems": null
    },
    {
      "latitude": 38.942436,
      "longitude": -7.792297,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702989411,
      "ems": null
    },
    {
      "latitude": 38.94278,
      "longitude": -7.790143,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702989415,
      "ems": null
    },
    {
      "latitude": 38.943043,
      "longitude": -7.785156,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989423,
      "ems": null
    },
    {
      "latitude": 38.9431,
      "longitude": -7.783216,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989427,
      "ems": null
    },
    {
      "latitude": 38.9431,
      "longitude": -7.781723,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989429,
      "ems": null
    },
    {
      "latitude": 38.943134,
      "longitude": -7.779846,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989433,
      "ems": null
    },
    {
      "latitude": 38.94318,
      "longitude": -7.778137,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989436,
      "ems": null
    },
    {
      "latitude": 38.94323,
      "longitude": -7.776428,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989439,
      "ems": null
    },
    {
      "latitude": 38.943283,
      "longitude": -7.774619,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989442,
      "ems": null
    },
    {
      "latitude": 38.943375,
      "longitude": -7.772946,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989445,
      "ems": null
    },
    {
      "latitude": 38.943375,
      "longitude": -7.771215,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989448,
      "ems": null
    },
    {
      "latitude": 38.943462,
      "longitude": -7.765991,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989457,
      "ems": null
    },
    {
      "latitude": 38.943508,
      "longitude": -7.761108,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989465,
      "ems": null
    },
    {
      "latitude": 38.943554,
      "longitude": -7.755981,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989474,
      "ems": null
    },
    {
      "latitude": 38.943604,
      "longitude": -7.750735,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989484,
      "ems": null
    },
    {
      "latitude": 38.943787,
      "longitude": -7.745605,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989493,
      "ems": null
    },
    {
      "latitude": 38.943928,
      "longitude": -7.740723,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989502,
      "ems": null
    },
    {
      "latitude": 38.944016,
      "longitude": -7.73539,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989511,
      "ems": null
    },
    {
      "latitude": 38.944199,
      "longitude": -7.730076,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 87,
      "squawk": "3214",
      "timestamp": 1702989520,
      "ems": null
    },
    {
      "latitude": 38.944344,
      "longitude": -7.724915,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "3214",
      "timestamp": 1702989529,
      "ems": null
    },
    {
      "latitude": 38.944336,
      "longitude": -7.719567,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 90,
      "squawk": "3214",
      "timestamp": 1702989538,
      "ems": null
    },
    {
      "latitude": 38.944382,
      "longitude": -7.714552,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702989547,
      "ems": null
    },
    {
      "latitude": 38.94453,
      "longitude": -7.708923,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 85,
      "squawk": "3214",
      "timestamp": 1702989556,
      "ems": null
    },
    {
      "latitude": 38.944702,
      "longitude": -7.707208,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702989559,
      "ems": null
    },
    {
      "latitude": 38.944977,
      "longitude": -7.705476,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "3214",
      "timestamp": 1702989562,
      "ems": null
    },
    {
      "latitude": 38.94537,
      "longitude": -7.703857,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "3214",
      "timestamp": 1702989565,
      "ems": null
    },
    {
      "latitude": 38.945984,
      "longitude": -7.702133,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989568,
      "ems": null
    },
    {
      "latitude": 38.946625,
      "longitude": -7.70058,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 59,
      "squawk": "3214",
      "timestamp": 1702989571,
      "ems": null
    },
    {
      "latitude": 38.947403,
      "longitude": -7.699147,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 54,
      "squawk": "3214",
      "timestamp": 1702989574,
      "ems": null
    },
    {
      "latitude": 38.948162,
      "longitude": -7.697876,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 51,
      "squawk": "3214",
      "timestamp": 1702989577,
      "ems": null
    },
    {
      "latitude": 38.949005,
      "longitude": -7.69664,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 48,
      "squawk": "3214",
      "timestamp": 1702989580,
      "ems": null
    },
    {
      "latitude": 38.949886,
      "longitude": -7.695374,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 46,
      "squawk": "3214",
      "timestamp": 1702989583,
      "ems": null
    },
    {
      "latitude": 38.950954,
      "longitude": -7.694031,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 45,
      "squawk": "3214",
      "timestamp": 1702989586,
      "ems": null
    },
    {
      "latitude": 38.951706,
      "longitude": -7.692997,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702989589,
      "ems": null
    },
    {
      "latitude": 38.952816,
      "longitude": -7.691528,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 45,
      "squawk": "3214",
      "timestamp": 1702989592,
      "ems": null
    },
    {
      "latitude": 38.953609,
      "longitude": -7.69043,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 46,
      "squawk": "3214",
      "timestamp": 1702989595,
      "ems": null
    },
    {
      "latitude": 38.954636,
      "longitude": -7.689056,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 47,
      "squawk": "3214",
      "timestamp": 1702989598,
      "ems": null
    },
    {
      "latitude": 38.955551,
      "longitude": -7.687743,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 48,
      "squawk": "3214",
      "timestamp": 1702989601,
      "ems": null
    },
    {
      "latitude": 38.956402,
      "longitude": -7.686523,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989604,
      "ems": null
    },
    {
      "latitude": 38.959148,
      "longitude": -7.682556,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 48,
      "squawk": "3214",
      "timestamp": 1702989613,
      "ems": null
    },
    {
      "latitude": 38.961849,
      "longitude": -7.678711,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 47,
      "squawk": "3214",
      "timestamp": 1702989622,
      "ems": null
    },
    {
      "latitude": 38.964737,
      "longitude": -7.675232,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 31,
      "squawk": "3214",
      "timestamp": 1702989631,
      "ems": null
    },
    {
      "latitude": 38.965946,
      "longitude": -7.674622,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 19,
      "squawk": "3214",
      "timestamp": 1702989634,
      "ems": null
    },
    {
      "latitude": 38.967155,
      "longitude": -7.674194,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702989637,
      "ems": null
    },
    {
      "latitude": 38.968414,
      "longitude": -7.673711,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702989640,
      "ems": null
    },
    {
      "latitude": 38.969624,
      "longitude": -7.673279,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702989644,
      "ems": null
    },
    {
      "latitude": 38.970932,
      "longitude": -7.672756,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702989646,
      "ems": null
    },
    {
      "latitude": 38.971939,
      "longitude": -7.672398,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702989649,
      "ems": null
    },
    {
      "latitude": 38.973312,
      "longitude": -7.67186,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 17,
      "squawk": "3214",
      "timestamp": 1702989652,
      "ems": null
    },
    {
      "latitude": 38.974457,
      "longitude": -7.671383,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 17,
      "squawk": "3214",
      "timestamp": 1702989655,
      "ems": null
    },
    {
      "latitude": 38.977524,
      "longitude": -7.670249,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 16,
      "squawk": "3214",
      "timestamp": 1702989663,
      "ems": null
    },
    {
      "latitude": 38.981369,
      "longitude": -7.669114,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989672,
      "ems": null
    },
    {
      "latitude": 38.982422,
      "longitude": -7.668994,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702989675,
      "ems": null
    },
    {
      "latitude": 38.983795,
      "longitude": -7.668815,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989678,
      "ems": null
    },
    {
      "latitude": 38.985031,
      "longitude": -7.668636,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989681,
      "ems": null
    },
    {
      "latitude": 38.986336,
      "longitude": -7.668518,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989684,
      "ems": null
    },
    {
      "latitude": 38.987499,
      "longitude": -7.668396,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989687,
      "ems": null
    },
    {
      "latitude": 38.988804,
      "longitude": -7.668213,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989690,
      "ems": null
    },
    {
      "latitude": 38.989929,
      "longitude": -7.668099,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989693,
      "ems": null
    },
    {
      "latitude": 38.991257,
      "longitude": -7.667979,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989696,
      "ems": null
    },
    {
      "latitude": 38.992493,
      "longitude": -7.66786,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989699,
      "ems": null
    },
    {
      "latitude": 38.996017,
      "longitude": -7.667419,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702989708,
      "ems": null
    },
    {
      "latitude": 39.00021,
      "longitude": -7.666992,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989717,
      "ems": null
    },
    {
      "latitude": 39.00272,
      "longitude": -7.66687,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702989723,
      "ems": null
    },
    {
      "latitude": 39.006454,
      "longitude": -7.666367,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702989732,
      "ems": null
    },
    {
      "latitude": 39.010262,
      "longitude": -7.665833,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702989742,
      "ems": null
    },
    {
      "latitude": 39.011475,
      "longitude": -7.665649,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702989745,
      "ems": null
    },
    {
      "latitude": 39.012772,
      "longitude": -7.665412,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989748,
      "ems": null
    },
    {
      "latitude": 39.013847,
      "longitude": -7.665222,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702989750,
      "ems": null
    },
    {
      "latitude": 39.017712,
      "longitude": -7.664612,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702989759,
      "ems": null
    },
    {
      "latitude": 39.021713,
      "longitude": -7.66394,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989769,
      "ems": null
    },
    {
      "latitude": 39.025269,
      "longitude": -7.663143,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702989777,
      "ems": null
    },
    {
      "latitude": 39.029163,
      "longitude": -7.662476,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702989787,
      "ems": null
    },
    {
      "latitude": 39.031448,
      "longitude": -7.662247,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989793,
      "ems": null
    },
    {
      "latitude": 39.033119,
      "longitude": -7.662292,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702989796,
      "ems": null
    },
    {
      "latitude": 39.034378,
      "longitude": -7.662292,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 360,
      "squawk": "3214",
      "timestamp": 1702989799,
      "ems": null
    },
    {
      "latitude": 39.035614,
      "longitude": -7.662247,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989802,
      "ems": null
    },
    {
      "latitude": 39.036892,
      "longitude": -7.662292,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702989805,
      "ems": null
    },
    {
      "latitude": 39.038147,
      "longitude": -7.662292,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 358,
      "squawk": "3214",
      "timestamp": 1702989808,
      "ems": null
    },
    {
      "latitude": 39.039406,
      "longitude": -7.662354,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702989811,
      "ems": null
    },
    {
      "latitude": 39.040524,
      "longitude": -7.662354,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702989814,
      "ems": null
    },
    {
      "latitude": 39.044712,
      "longitude": -7.662231,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989823,
      "ems": null
    },
    {
      "latitude": 39.045776,
      "longitude": -7.662068,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989826,
      "ems": null
    },
    {
      "latitude": 39.047012,
      "longitude": -7.661889,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702989829,
      "ems": null
    },
    {
      "latitude": 39.048569,
      "longitude": -7.661591,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989832,
      "ems": null
    },
    {
      "latitude": 39.049896,
      "longitude": -7.661352,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989835,
      "ems": null
    },
    {
      "latitude": 39.051228,
      "longitude": -7.661133,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989838,
      "ems": null
    },
    {
      "latitude": 39.05246,
      "longitude": -7.660934,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702989841,
      "ems": null
    },
    {
      "latitude": 39.053787,
      "longitude": -7.660635,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702989844,
      "ems": null
    },
    {
      "latitude": 39.055092,
      "longitude": -7.660339,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702989847,
      "ems": null
    },
    {
      "latitude": 39.059097,
      "longitude": -7.659441,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702989857,
      "ems": null
    },
    {
      "latitude": 39.062962,
      "longitude": -7.658691,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702989865,
      "ems": null
    },
    {
      "latitude": 39.067059,
      "longitude": -7.658264,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989875,
      "ems": null
    },
    {
      "latitude": 39.068344,
      "longitude": -7.658127,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989878,
      "ems": null
    },
    {
      "latitude": 39.06958,
      "longitude": -7.658008,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989881,
      "ems": null
    },
    {
      "latitude": 39.07106,
      "longitude": -7.657837,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989884,
      "ems": null
    },
    {
      "latitude": 39.072281,
      "longitude": -7.65771,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989887,
      "ems": null
    },
    {
      "latitude": 39.073574,
      "longitude": -7.657654,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702989889,
      "ems": null
    },
    {
      "latitude": 39.074833,
      "longitude": -7.657532,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702989892,
      "ems": null
    },
    {
      "latitude": 39.078735,
      "longitude": -7.657291,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702989902,
      "ems": null
    },
    {
      "latitude": 39.082699,
      "longitude": -7.657043,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702989911,
      "ems": null
    },
    {
      "latitude": 39.08519,
      "longitude": -7.656694,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702989917,
      "ems": null
    },
    {
      "latitude": 39.086426,
      "longitude": -7.656396,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 10,
      "squawk": "3214",
      "timestamp": 1702989920,
      "ems": null
    },
    {
      "latitude": 39.087708,
      "longitude": -7.656038,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 11,
      "squawk": "3214",
      "timestamp": 1702989923,
      "ems": null
    },
    {
      "latitude": 39.088852,
      "longitude": -7.655739,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 11,
      "squawk": "3214",
      "timestamp": 1702989926,
      "ems": null
    },
    {
      "latitude": 39.090179,
      "longitude": -7.655321,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702989929,
      "ems": null
    },
    {
      "latitude": 39.090984,
      "longitude": -7.65509,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 13,
      "squawk": "3214",
      "timestamp": 1702989931,
      "ems": null
    },
    {
      "latitude": 39.092659,
      "longitude": -7.654541,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 14,
      "squawk": "3214",
      "timestamp": 1702989935,
      "ems": null
    },
    {
      "latitude": 39.09407,
      "longitude": -7.654068,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702989938,
      "ems": null
    },
    {
      "latitude": 39.095123,
      "longitude": -7.653649,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 15,
      "squawk": "3214",
      "timestamp": 1702989941,
      "ems": null
    },
    {
      "latitude": 39.09634,
      "longitude": -7.65332,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 12,
      "squawk": "3214",
      "timestamp": 1702989944,
      "ems": null
    },
    {
      "latitude": 39.09885,
      "longitude": -7.652893,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702989949,
      "ems": null
    },
    {
      "latitude": 39.100021,
      "longitude": -7.652813,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702989952,
      "ems": null
    },
    {
      "latitude": 39.101715,
      "longitude": -7.652694,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989956,
      "ems": null
    },
    {
      "latitude": 39.103088,
      "longitude": -7.652649,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989959,
      "ems": null
    },
    {
      "latitude": 39.104187,
      "longitude": -7.652634,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989962,
      "ems": null
    },
    {
      "latitude": 39.10556,
      "longitude": -7.652575,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989965,
      "ems": null
    },
    {
      "latitude": 39.106888,
      "longitude": -7.652575,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989968,
      "ems": null
    },
    {
      "latitude": 39.10751,
      "longitude": -7.652588,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989971,
      "ems": null
    },
    {
      "latitude": 39.109001,
      "longitude": -7.652527,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989974,
      "ems": null
    },
    {
      "latitude": 39.112244,
      "longitude": -7.652455,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702989980,
      "ems": null
    },
    {
      "latitude": 39.116402,
      "longitude": -7.652222,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702989989,
      "ems": null
    },
    {
      "latitude": 39.118729,
      "longitude": -7.652344,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 356,
      "squawk": "3214",
      "timestamp": 1702989995,
      "ems": null
    },
    {
      "latitude": 39.121525,
      "longitude": -7.652466,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 358,
      "squawk": "3214",
      "timestamp": 1702990001,
      "ems": null
    },
    {
      "latitude": 39.125385,
      "longitude": -7.652405,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702990010,
      "ems": null
    },
    {
      "latitude": 39.129089,
      "longitude": -7.652097,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990019,
      "ems": null
    },
    {
      "latitude": 39.130463,
      "longitude": -7.651917,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702990023,
      "ems": null
    },
    {
      "latitude": 39.131699,
      "longitude": -7.651739,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990026,
      "ems": null
    },
    {
      "latitude": 39.132706,
      "longitude": -7.6515,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702990028,
      "ems": null
    },
    {
      "latitude": 39.133896,
      "longitude": -7.651261,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702990032,
      "ems": null
    },
    {
      "latitude": 39.137676,
      "longitude": -7.650879,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990040,
      "ems": null
    },
    {
      "latitude": 39.141541,
      "longitude": -7.650635,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990050,
      "ems": null
    },
    {
      "latitude": 39.142796,
      "longitude": -7.650574,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990053,
      "ems": null
    },
    {
      "latitude": 39.143867,
      "longitude": -7.650574,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990055,
      "ems": null
    },
    {
      "latitude": 39.14534,
      "longitude": -7.650604,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 358,
      "squawk": "3214",
      "timestamp": 1702990059,
      "ems": null
    },
    {
      "latitude": 39.146523,
      "longitude": -7.650635,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 358,
      "squawk": "3214",
      "timestamp": 1702990062,
      "ems": null
    },
    {
      "latitude": 39.14772,
      "longitude": -7.650723,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 356,
      "squawk": "3214",
      "timestamp": 1702990065,
      "ems": null
    },
    {
      "latitude": 39.148991,
      "longitude": -7.650879,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 354,
      "squawk": "3214",
      "timestamp": 1702990068,
      "ems": null
    },
    {
      "latitude": 39.150246,
      "longitude": -7.651062,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 352,
      "squawk": "3214",
      "timestamp": 1702990071,
      "ems": null
    },
    {
      "latitude": 39.151382,
      "longitude": -7.651261,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3214",
      "timestamp": 1702990074,
      "ems": null
    },
    {
      "latitude": 39.152668,
      "longitude": -7.651489,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 351,
      "squawk": "3214",
      "timestamp": 1702990077,
      "ems": null
    },
    {
      "latitude": 39.153946,
      "longitude": -7.651679,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 354,
      "squawk": "3214",
      "timestamp": 1702990080,
      "ems": null
    },
    {
      "latitude": 39.157646,
      "longitude": -7.651733,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 358,
      "squawk": "3214",
      "timestamp": 1702990089,
      "ems": null
    },
    {
      "latitude": 39.161179,
      "longitude": -7.652097,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 353,
      "squawk": "3214",
      "timestamp": 1702990098,
      "ems": null
    },
    {
      "latitude": 39.164703,
      "longitude": -7.652515,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702990107,
      "ems": null
    },
    {
      "latitude": 39.167049,
      "longitude": -7.652832,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 353,
      "squawk": "3214",
      "timestamp": 1702990113,
      "ems": null
    },
    {
      "latitude": 39.168228,
      "longitude": -7.652993,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 353,
      "squawk": "3214",
      "timestamp": 1702990116,
      "ems": null
    },
    {
      "latitude": 39.171707,
      "longitude": -7.65332,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 356,
      "squawk": "3214",
      "timestamp": 1702990125,
      "ems": null
    },
    {
      "latitude": 39.172806,
      "longitude": -7.65341,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 359,
      "squawk": "3214",
      "timestamp": 1702990128,
      "ems": null
    },
    {
      "latitude": 39.174133,
      "longitude": -7.653351,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990131,
      "ems": null
    },
    {
      "latitude": 39.175278,
      "longitude": -7.653291,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702990134,
      "ems": null
    },
    {
      "latitude": 39.176548,
      "longitude": -7.653198,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990137,
      "ems": null
    },
    {
      "latitude": 39.177757,
      "longitude": -7.653076,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702990140,
      "ems": null
    },
    {
      "latitude": 39.179062,
      "longitude": -7.652893,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 6,
      "squawk": "3214",
      "timestamp": 1702990143,
      "ems": null
    },
    {
      "latitude": 39.180267,
      "longitude": -7.652694,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990146,
      "ems": null
    },
    {
      "latitude": 39.181412,
      "longitude": -7.652515,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990149,
      "ems": null
    },
    {
      "latitude": 39.182648,
      "longitude": -7.652283,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990152,
      "ems": null
    },
    {
      "latitude": 39.184021,
      "longitude": -7.652097,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990156,
      "ems": null
    },
    {
      "latitude": 39.185112,
      "longitude": -7.651917,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990158,
      "ems": null
    },
    {
      "latitude": 39.186325,
      "longitude": -7.651672,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702990161,
      "ems": null
    },
    {
      "latitude": 39.187626,
      "longitude": -7.651367,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702990164,
      "ems": null
    },
    {
      "latitude": 39.188789,
      "longitude": -7.651123,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702990167,
      "ems": null
    },
    {
      "latitude": 39.192516,
      "longitude": -7.650452,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990177,
      "ems": null
    },
    {
      "latitude": 39.196243,
      "longitude": -7.649828,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 7,
      "squawk": "3214",
      "timestamp": 1702990186,
      "ems": null
    },
    {
      "latitude": 39.199905,
      "longitude": -7.649171,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 8,
      "squawk": "3214",
      "timestamp": 1702990194,
      "ems": null
    },
    {
      "latitude": 39.203705,
      "longitude": -7.648395,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702990203,
      "ems": null
    },
    {
      "latitude": 39.207458,
      "longitude": -7.647559,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 9,
      "squawk": "3214",
      "timestamp": 1702990212,
      "ems": null
    },
    {
      "latitude": 39.211323,
      "longitude": -7.647034,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702990222,
      "ems": null
    },
    {
      "latitude": 39.213696,
      "longitude": -7.646729,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702990227,
      "ems": null
    },
    {
      "latitude": 39.214909,
      "longitude": -7.646667,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990230,
      "ems": null
    },
    {
      "latitude": 39.216164,
      "longitude": -7.646545,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702990234,
      "ems": null
    },
    {
      "latitude": 39.217484,
      "longitude": -7.646484,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990237,
      "ems": null
    },
    {
      "latitude": 39.218678,
      "longitude": -7.646423,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990239,
      "ems": null
    },
    {
      "latitude": 39.220001,
      "longitude": -7.646365,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990243,
      "ems": null
    },
    {
      "latitude": 39.221378,
      "longitude": -7.646362,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990246,
      "ems": null
    },
    {
      "latitude": 39.224991,
      "longitude": -7.646245,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990254,
      "ems": null
    },
    {
      "latitude": 39.228653,
      "longitude": -7.646186,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990263,
      "ems": null
    },
    {
      "latitude": 39.232498,
      "longitude": -7.646126,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990273,
      "ems": null
    },
    {
      "latitude": 39.236507,
      "longitude": -7.645996,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 1,
      "squawk": "3214",
      "timestamp": 1702990282,
      "ems": null
    },
    {
      "latitude": 39.240276,
      "longitude": -7.645813,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990291,
      "ems": null
    },
    {
      "latitude": 39.243862,
      "longitude": -7.645569,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "squawk": "3214",
      "timestamp": 1702990299,
      "ems": null
    },
    {
      "latitude": 39.248062,
      "longitude": -7.64523,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990309,
      "ems": null
    },
    {
      "latitude": 39.251907,
      "longitude": -7.644813,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 4,
      "squawk": "3214",
      "timestamp": 1702990318,
      "ems": null
    },
    {
      "latitude": 39.255661,
      "longitude": -7.644454,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "3214",
      "timestamp": 1702990327,
      "ems": null
    },
    {
      "latitude": 39.259411,
      "longitude": -7.644165,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "3214",
      "timestamp": 1702990336,
      "ems": null
    },
    {
      "latitude": 39.262665,
      "longitude": -7.644574,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 333,
      "squawk": "3214",
      "timestamp": 1702990344,
      "ems": null
    },
    {
      "latitude": 39.263275,
      "longitude": -7.645508,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 301,
      "squawk": "3214",
      "timestamp": 1702990347,
      "ems": null
    },
    {
      "latitude": 39.263786,
      "longitude": -7.646851,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702990350,
      "ems": null
    },
    {
      "latitude": 39.264252,
      "longitude": -7.648132,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702990353,
      "ems": null
    },
    {
      "latitude": 39.264725,
      "longitude": -7.649529,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702990356,
      "ems": null
    },
    {
      "latitude": 39.265228,
      "longitude": -7.651001,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702990359,
      "ems": null
    },
    {
      "latitude": 39.265743,
      "longitude": -7.652466,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702990362,
      "ems": null
    },
    {
      "latitude": 39.266209,
      "longitude": -7.653748,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702990365,
      "ems": null
    },
    {
      "latitude": 39.266674,
      "longitude": -7.65509,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 291,
      "squawk": "3214",
      "timestamp": 1702990368,
      "ems": null
    },
    {
      "latitude": 39.267059,
      "longitude": -7.656456,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 289,
      "squawk": "3214",
      "timestamp": 1702990371,
      "ems": null
    },
    {
      "latitude": 39.267426,
      "longitude": -7.657948,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990374,
      "ems": null
    },
    {
      "latitude": 39.267838,
      "longitude": -7.659441,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990377,
      "ems": null
    },
    {
      "latitude": 39.268162,
      "longitude": -7.660767,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990380,
      "ems": null
    },
    {
      "latitude": 39.268536,
      "longitude": -7.662292,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702990383,
      "ems": null
    },
    {
      "latitude": 39.26889,
      "longitude": -7.663681,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990386,
      "ems": null
    },
    {
      "latitude": 39.269302,
      "longitude": -7.665352,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990389,
      "ems": null
    },
    {
      "latitude": 39.269623,
      "longitude": -7.666845,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990392,
      "ems": null
    },
    {
      "latitude": 39.269943,
      "longitude": -7.668338,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990395,
      "ems": null
    },
    {
      "latitude": 39.27021,
      "longitude": -7.669861,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990398,
      "ems": null
    },
    {
      "latitude": 39.270489,
      "longitude": -7.671326,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990401,
      "ems": null
    },
    {
      "latitude": 39.270771,
      "longitude": -7.672852,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990404,
      "ems": null
    },
    {
      "latitude": 39.271042,
      "longitude": -7.674428,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990408,
      "ems": null
    },
    {
      "latitude": 39.271866,
      "longitude": -7.678906,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990416,
      "ems": null
    },
    {
      "latitude": 39.272781,
      "longitude": -7.683324,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990425,
      "ems": null
    },
    {
      "latitude": 39.27375,
      "longitude": -7.687866,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990435,
      "ems": null
    },
    {
      "latitude": 39.274658,
      "longitude": -7.69252,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990444,
      "ems": null
    },
    {
      "latitude": 39.275425,
      "longitude": -7.696899,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990452,
      "ems": null
    },
    {
      "latitude": 39.27626,
      "longitude": -7.701655,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990462,
      "ems": null
    },
    {
      "latitude": 39.2771,
      "longitude": -7.70636,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990471,
      "ems": null
    },
    {
      "latitude": 39.277985,
      "longitude": -7.711243,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990480,
      "ems": null
    },
    {
      "latitude": 39.279011,
      "longitude": -7.71582,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990489,
      "ems": null
    },
    {
      "latitude": 39.279987,
      "longitude": -7.720398,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990498,
      "ems": null
    },
    {
      "latitude": 39.28064,
      "longitude": -7.724365,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990506,
      "ems": null
    },
    {
      "latitude": 39.280872,
      "longitude": -7.725952,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 280,
      "squawk": "3214",
      "timestamp": 1702990509,
      "ems": null
    },
    {
      "latitude": 39.28157,
      "longitude": -7.730255,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990518,
      "ems": null
    },
    {
      "latitude": 39.28244,
      "longitude": -7.735092,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990527,
      "ems": null
    },
    {
      "latitude": 39.28331,
      "longitude": -7.739928,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990536,
      "ems": null
    },
    {
      "latitude": 39.284134,
      "longitude": -7.744466,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990545,
      "ems": null
    },
    {
      "latitude": 39.285061,
      "longitude": -7.749146,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990554,
      "ems": null
    },
    {
      "latitude": 39.286102,
      "longitude": -7.75378,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990563,
      "ems": null
    },
    {
      "latitude": 39.286968,
      "longitude": -7.758484,
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
      "heading": 280,
      "squawk": "3214",
      "timestamp": 1702990572,
      "ems": null
    },
    {
      "latitude": 39.287201,
      "longitude": -7.760193,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 278,
      "squawk": "3214",
      "timestamp": 1702990575,
      "ems": null
    },
    {
      "latitude": 39.287292,
      "longitude": -7.761423,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 275,
      "squawk": "3214",
      "timestamp": 1702990578,
      "ems": null
    },
    {
      "latitude": 39.28743,
      "longitude": -7.763393,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 273,
      "squawk": "3214",
      "timestamp": 1702990581,
      "ems": null
    },
    {
      "latitude": 39.287483,
      "longitude": -7.764893,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990584,
      "ems": null
    },
    {
      "latitude": 39.287521,
      "longitude": -7.766259,
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
      "heading": 271,
      "squawk": "3214",
      "timestamp": 1702990587,
      "ems": null
    },
    {
      "latitude": 39.287529,
      "longitude": -7.767578,
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
      "heading": 271,
      "squawk": "3214",
      "timestamp": 1702990590,
      "ems": null
    },
    {
      "latitude": 39.287613,
      "longitude": -7.769782,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990593,
      "ems": null
    },
    {
      "latitude": 39.287666,
      "longitude": -7.771179,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990596,
      "ems": null
    },
    {
      "latitude": 39.287716,
      "longitude": -7.772766,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990599,
      "ems": null
    },
    {
      "latitude": 39.288071,
      "longitude": -7.777544,
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
      "heading": 275,
      "squawk": "3214",
      "timestamp": 1702990609,
      "ems": null
    },
    {
      "latitude": 39.288319,
      "longitude": -7.781494,
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
      "heading": 276,
      "squawk": "3214",
      "timestamp": 1702990616,
      "ems": null
    },
    {
      "latitude": 39.288483,
      "longitude": -7.783037,
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
      "heading": 276,
      "squawk": "3214",
      "timestamp": 1702990619,
      "ems": null
    },
    {
      "latitude": 39.288757,
      "longitude": -7.785963,
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
      "heading": 277,
      "squawk": "3214",
      "timestamp": 1702990625,
      "ems": null
    },
    {
      "latitude": 39.288925,
      "longitude": -7.787476,
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
      "heading": 279,
      "squawk": "3214",
      "timestamp": 1702990628,
      "ems": null
    },
    {
      "latitude": 39.289112,
      "longitude": -7.78894,
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
      "heading": 279,
      "squawk": "3214",
      "timestamp": 1702990631,
      "ems": null
    },
    {
      "latitude": 39.289345,
      "longitude": -7.790588,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990635,
      "ems": null
    },
    {
      "latitude": 39.289623,
      "longitude": -7.792053,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990638,
      "ems": null
    },
    {
      "latitude": 39.289948,
      "longitude": -7.793457,
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
      "heading": 285,
      "squawk": "3214",
      "timestamp": 1702990641,
      "ems": null
    },
    {
      "latitude": 39.29023,
      "longitude": -7.7948,
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990643,
      "ems": null
    },
    {
      "latitude": 39.290588,
      "longitude": -7.796173,
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702990646,
      "ems": null
    },
    {
      "latitude": 39.290955,
      "longitude": -7.797666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990650,
      "ems": null
    },
    {
      "latitude": 39.291321,
      "longitude": -7.799099,
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
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990653,
      "ems": null
    },
    {
      "latitude": 39.291672,
      "longitude": -7.800476,
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702990655,
      "ems": null
    },
    {
      "latitude": 39.291996,
      "longitude": -7.801819,
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
      "heading": 287,
      "squawk": "3214",
      "timestamp": 1702990658,
      "ems": null
    },
    {
      "latitude": 39.292374,
      "longitude": -7.803278,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 288,
      "squawk": "3214",
      "timestamp": 1702990661,
      "ems": null
    },
    {
      "latitude": 39.292877,
      "longitude": -7.805905,
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
      "heading": 277,
      "squawk": "3214",
      "timestamp": 1702990667,
      "ems": null
    },
    {
      "latitude": 39.292923,
      "longitude": -7.807578,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "3214",
      "timestamp": 1702990670,
      "ems": null
    },
    {
      "latitude": 39.292923,
      "longitude": -7.80913,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702990674,
      "ems": null
    },
    {
      "latitude": 39.292969,
      "longitude": -7.810264,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702990676,
      "ems": null
    },
    {
      "latitude": 39.292969,
      "longitude": -7.811936,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702990679,
      "ems": null
    },
    {
      "latitude": 39.293022,
      "longitude": -7.813538,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990683,
      "ems": null
    },
    {
      "latitude": 39.293068,
      "longitude": -7.814819,
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
      "heading": 272,
      "squawk": "3214",
      "timestamp": 1702990685,
      "ems": null
    },
    {
      "latitude": 39.293106,
      "longitude": -7.816295,
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
      "heading": 273,
      "squawk": "3214",
      "timestamp": 1702990688,
      "ems": null
    },
    {
      "latitude": 39.293198,
      "longitude": -7.817728,
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
      "heading": 274,
      "squawk": "3214",
      "timestamp": 1702990691,
      "ems": null
    },
    {
      "latitude": 39.293346,
      "longitude": -7.819275,
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
      "heading": 276,
      "squawk": "3214",
      "timestamp": 1702990694,
      "ems": null
    },
    {
      "latitude": 39.293701,
      "longitude": -7.822325,
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
      "heading": 280,
      "squawk": "3214",
      "timestamp": 1702990701,
      "ems": null
    },
    {
      "latitude": 39.293812,
      "longitude": -7.823303,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990703,
      "ems": null
    },
    {
      "latitude": 39.294067,
      "longitude": -7.824714,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990706,
      "ems": null
    },
    {
      "latitude": 39.294388,
      "longitude": -7.826624,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990710,
      "ems": null
    },
    {
      "latitude": 39.294525,
      "longitude": -7.82764,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990712,
      "ems": null
    },
    {
      "latitude": 39.294792,
      "longitude": -7.829407,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990715,
      "ems": null
    },
    {
      "latitude": 39.294975,
      "longitude": -7.830505,
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
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990717,
      "ems": null
    },
    {
      "latitude": 39.295349,
      "longitude": -7.832642,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990722,
      "ems": null
    },
    {
      "latitude": 39.295628,
      "longitude": -7.834106,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990725,
      "ems": null
    },
    {
      "latitude": 39.295898,
      "longitude": -7.83564,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990727,
      "ems": null
    },
    {
      "latitude": 39.296677,
      "longitude": -7.840238,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990737,
      "ems": null
    },
    {
      "latitude": 39.297363,
      "longitude": -7.844895,
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
      "heading": 281,
      "squawk": "3214",
      "timestamp": 1702990746,
      "ems": null
    },
    {
      "latitude": 39.298187,
      "longitude": -7.849731,
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
      "heading": 282,
      "squawk": "3214",
      "timestamp": 1702990755,
      "ems": null
    },
    {
      "latitude": 39.299011,
      "longitude": -7.854448,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990764,
      "ems": null
    },
    {
      "latitude": 39.299835,
      "longitude": -7.858986,
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
      "heading": 283,
      "squawk": "3214",
      "timestamp": 1702990773,
      "ems": null
    },
    {
      "latitude": 39.300842,
      "longitude": -7.863584,
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
      "heading": 285,
      "squawk": "3214",
      "timestamp": 1702990782,
      "ems": null
    },
    {
      "latitude": 39.301895,
      "longitude": -7.868361,
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702990791,
      "ems": null
    },
    {
      "latitude": 39.302948,
      "longitude": -7.873077,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990800,
      "ems": null
    },
    {
      "latitude": 39.30373,
      "longitude": -7.877319,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990808,
      "ems": null
    },
    {
      "latitude": 39.304844,
      "longitude": -7.882568,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990818,
      "ems": null
    },
    {
      "latitude": 39.305824,
      "longitude": -7.887329,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990827,
      "ems": null
    },
    {
      "latitude": 39.306702,
      "longitude": -7.892065,
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
      "heading": 284,
      "squawk": "3214",
      "timestamp": 1702990836,
      "ems": null
    },
    {
      "latitude": 39.307159,
      "longitude": -7.89511,
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
      "heading": 277,
      "squawk": "3214",
      "timestamp": 1702990842,
      "ems": null
    },
    {
      "latitude": 39.307251,
      "longitude": -7.896722,
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
      "heading": 270,
      "squawk": "3214",
      "timestamp": 1702990845,
      "ems": null
    },
    {
      "latitude": 39.307159,
      "longitude": -7.898453,
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
      "heading": 264,
      "squawk": "3214",
      "timestamp": 1702990848,
      "ems": null
    },
    {
      "latitude": 39.306892,
      "longitude": -7.899902,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "3214",
      "timestamp": 1702990851,
      "ems": null
    },
    {
      "latitude": 39.306564,
      "longitude": -7.90114,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702990854,
      "ems": null
    },
    {
      "latitude": 39.305786,
      "longitude": -7.902812,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "3214",
      "timestamp": 1702990857,
      "ems": null
    },
    {
      "latitude": 39.305008,
      "longitude": -7.903946,
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
      "heading": 227,
      "squawk": "3214",
      "timestamp": 1702990860,
      "ems": null
    },
    {
      "latitude": 39.304321,
      "longitude": -7.904902,
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
      "heading": 226,
      "squawk": "3214",
      "timestamp": 1702990863,
      "ems": null
    },
    {
      "latitude": 39.30331,
      "longitude": -7.906128,
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
      "heading": 223,
      "squawk": "3214",
      "timestamp": 1702990866,
      "ems": null
    },
    {
      "latitude": 39.302334,
      "longitude": -7.907104,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 216,
      "squawk": "3214",
      "timestamp": 1702990869,
      "ems": null
    },
    {
      "latitude": 39.301449,
      "longitude": -7.907776,
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
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702990872,
      "ems": null
    },
    {
      "latitude": 39.300293,
      "longitude": -7.908484,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702990875,
      "ems": null
    },
    {
      "latitude": 39.299259,
      "longitude": -7.908997,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702990878,
      "ems": null
    },
    {
      "latitude": 39.298096,
      "longitude": -7.909619,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702990881,
      "ems": null
    },
    {
      "latitude": 39.297272,
      "longitude": -7.909977,
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702990883,
      "ems": null
    },
    {
      "latitude": 39.296631,
      "longitude": -7.910156,
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
      "heading": 193,
      "squawk": "3214",
      "timestamp": 1702990885,
      "ems": null
    },
    {
      "latitude": 39.295212,
      "longitude": -7.910514,
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
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702990889,
      "ems": null
    },
    {
      "latitude": 39.294044,
      "longitude": -7.910706,
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
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702990891,
      "ems": null
    },
    {
      "latitude": 39.292835,
      "longitude": -7.911011,
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
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702990895,
      "ems": null
    },
    {
      "latitude": 39.291439,
      "longitude": -7.911255,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990898,
      "ems": null
    },
    {
      "latitude": 39.290134,
      "longitude": -7.911499,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990901,
      "ems": null
    },
    {
      "latitude": 39.288879,
      "longitude": -7.911682,
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
      "heading": 187,
      "squawk": "3214",
      "timestamp": 1702990904,
      "ems": null
    },
    {
      "latitude": 39.287567,
      "longitude": -7.911888,
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
      "heading": 186,
      "squawk": "3214",
      "timestamp": 1702990907,
      "ems": null
    },
    {
      "latitude": 39.285713,
      "longitude": -7.91217,
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
      "heading": 187,
      "squawk": "3214",
      "timestamp": 1702990911,
      "ems": null
    },
    {
      "latitude": 39.285095,
      "longitude": -7.912306,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990913,
      "ems": null
    },
    {
      "latitude": 39.283905,
      "longitude": -7.912545,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990916,
      "ems": null
    },
    {
      "latitude": 39.280033,
      "longitude": -7.913269,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990925,
      "ems": null
    },
    {
      "latitude": 39.27589,
      "longitude": -7.91394,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 186,
      "squawk": "3214",
      "timestamp": 1702990934,
      "ems": null
    },
    {
      "latitude": 39.27182,
      "longitude": -7.914575,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 187,
      "squawk": "3214",
      "timestamp": 1702990943,
      "ems": null
    },
    {
      "latitude": 39.267929,
      "longitude": -7.915291,
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
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702990952,
      "ems": null
    },
    {
      "latitude": 39.263927,
      "longitude": -7.916199,
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
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702990961,
      "ems": null
    },
    {
      "latitude": 39.262573,
      "longitude": -7.916485,
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
      "heading": 191,
      "squawk": "3214",
      "timestamp": 1702990964,
      "ems": null
    },
    {
      "latitude": 39.261318,
      "longitude": -7.916931,
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
      "heading": 196,
      "squawk": "3214",
      "timestamp": 1702990967,
      "ems": null
    },
    {
      "latitude": 39.259964,
      "longitude": -7.91756,
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
      "heading": 200,
      "squawk": "3214",
      "timestamp": 1702990970,
      "ems": null
    },
    {
      "latitude": 39.258865,
      "longitude": -7.918157,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702990973,
      "ems": null
    },
    {
      "latitude": 39.257584,
      "longitude": -7.918814,
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
      "heading": 201,
      "squawk": "3214",
      "timestamp": 1702990976,
      "ems": null
    },
    {
      "latitude": 39.256393,
      "longitude": -7.919411,
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
      "heading": 202,
      "squawk": "3214",
      "timestamp": 1702990980,
      "ems": null
    },
    {
      "latitude": 39.255203,
      "longitude": -7.920008,
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
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702990983,
      "ems": null
    },
    {
      "latitude": 39.253963,
      "longitude": -7.920776,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702990986,
      "ems": null
    },
    {
      "latitude": 39.2528,
      "longitude": -7.921387,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702990989,
      "ems": null
    },
    {
      "latitude": 39.251678,
      "longitude": -7.922038,
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
      "heading": 204,
      "squawk": "3214",
      "timestamp": 1702990992,
      "ems": null
    },
    {
      "latitude": 39.250519,
      "longitude": -7.922791,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702990995,
      "ems": null
    },
    {
      "latitude": 39.249481,
      "longitude": -7.92377,
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
      "heading": 218,
      "squawk": "3214",
      "timestamp": 1702990998,
      "ems": null
    },
    {
      "latitude": 39.248657,
      "longitude": -7.924844,
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
      "heading": 226,
      "squawk": "3214",
      "timestamp": 1702991001,
      "ems": null
    },
    {
      "latitude": 39.247726,
      "longitude": -7.926453,
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
      "heading": 237,
      "squawk": "3214",
      "timestamp": 1702991005,
      "ems": null
    },
    {
      "latitude": 39.24733,
      "longitude": -7.927412,
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
      "heading": 241,
      "squawk": "3214",
      "timestamp": 1702991007,
      "ems": null
    },
    {
      "latitude": 39.246841,
      "longitude": -7.928833,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991010,
      "ems": null
    },
    {
      "latitude": 39.246468,
      "longitude": -7.930176,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702991013,
      "ems": null
    },
    {
      "latitude": 39.246048,
      "longitude": -7.931711,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702991016,
      "ems": null
    },
    {
      "latitude": 39.245636,
      "longitude": -7.933263,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702991019,
      "ems": null
    },
    {
      "latitude": 39.245224,
      "longitude": -7.934756,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702991022,
      "ems": null
    },
    {
      "latitude": 39.244812,
      "longitude": -7.936189,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702991025,
      "ems": null
    },
    {
      "latitude": 39.2444,
      "longitude": -7.937741,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702991028,
      "ems": null
    },
    {
      "latitude": 39.243988,
      "longitude": -7.939055,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702991031,
      "ems": null
    },
    {
      "latitude": 39.243576,
      "longitude": -7.940488,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991034,
      "ems": null
    },
    {
      "latitude": 39.243118,
      "longitude": -7.941921,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991037,
      "ems": null
    },
    {
      "latitude": 39.241722,
      "longitude": -7.946533,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991046,
      "ems": null
    },
    {
      "latitude": 39.240372,
      "longitude": -7.950818,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991055,
      "ems": null
    },
    {
      "latitude": 39.239044,
      "longitude": -7.955176,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991064,
      "ems": null
    },
    {
      "latitude": 39.238182,
      "longitude": -7.957947,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991070,
      "ems": null
    },
    {
      "latitude": 39.236881,
      "longitude": -7.962585,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702991079,
      "ems": null
    },
    {
      "latitude": 39.235748,
      "longitude": -7.966939,
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
      "heading": 250,
      "squawk": "3214",
      "timestamp": 1702991088,
      "ems": null
    },
    {
      "latitude": 39.2346,
      "longitude": -7.970947,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702991097,
      "ems": null
    },
    {
      "latitude": 39.233295,
      "longitude": -7.975769,
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
      "heading": 249,
      "squawk": "3214",
      "timestamp": 1702991106,
      "ems": null
    },
    {
      "latitude": 39.231945,
      "longitude": -7.980347,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991116,
      "ems": null
    },
    {
      "latitude": 39.23053,
      "longitude": -7.984672,
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
      "heading": 246,
      "squawk": "3214",
      "timestamp": 1702991125,
      "ems": null
    },
    {
      "latitude": 39.229988,
      "longitude": -7.986145,
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
      "heading": 245,
      "squawk": "3214",
      "timestamp": 1702991128,
      "ems": null
    },
    {
      "latitude": 39.229614,
      "longitude": -7.98718,
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
      "heading": 245,
      "squawk": "3214",
      "timestamp": 1702991130,
      "ems": null
    },
    {
      "latitude": 39.229012,
      "longitude": -7.988892,
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
      "heading": 244,
      "squawk": "3214",
      "timestamp": 1702991133,
      "ems": null
    },
    {
      "latitude": 39.228424,
      "longitude": -7.990524,
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
      "heading": 244,
      "squawk": "3214",
      "timestamp": 1702991137,
      "ems": null
    },
    {
      "latitude": 39.227921,
      "longitude": -7.991897,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702991140,
      "ems": null
    },
    {
      "latitude": 39.227242,
      "longitude": -7.99353,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702991143,
      "ems": null
    },
    {
      "latitude": 39.225662,
      "longitude": -7.997559,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702991152,
      "ems": null
    },
    {
      "latitude": 39.223938,
      "longitude": -8.001987,
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
      "heading": 243,
      "squawk": "3214",
      "timestamp": 1702991161,
      "ems": null
    },
    {
      "latitude": 39.222309,
      "longitude": -8.006104,
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
      "heading": 242,
      "squawk": "3214",
      "timestamp": 1702991170,
      "ems": null
    },
    {
      "latitude": 39.22068,
      "longitude": -8.010193,
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
      "heading": 241,
      "squawk": "3214",
      "timestamp": 1702991179,
      "ems": null
    },
    {
      "latitude": 39.218857,
      "longitude": -8.014407,
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
      "heading": 241,
      "squawk": "3214",
      "timestamp": 1702991188,
      "ems": null
    },
    {
      "latitude": 39.21714,
      "longitude": -8.018616,
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
      "heading": 242,
      "squawk": "3214",
      "timestamp": 1702991197,
      "ems": null
    },
    {
      "latitude": 39.215374,
      "longitude": -8.022888,
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
      "heading": 242,
      "squawk": "3214",
      "timestamp": 1702991206,
      "ems": null
    },
    {
      "latitude": 39.214581,
      "longitude": -8.025085,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991212,
      "ems": null
    },
    {
      "latitude": 39.214371,
      "longitude": -8.025811,
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
      "heading": 248,
      "squawk": "3214",
      "timestamp": 1702991213,
      "ems": null
    },
    {
      "latitude": 39.214005,
      "longitude": -8.027245,
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
      "heading": 251,
      "squawk": "3214",
      "timestamp": 1702991215,
      "ems": null
    },
    {
      "latitude": 39.213638,
      "longitude": -8.028737,
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
      "heading": 253,
      "squawk": "3214",
      "timestamp": 1702991219,
      "ems": null
    },
    {
      "latitude": 39.213318,
      "longitude": -8.03023,
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
      "heading": 255,
      "squawk": "3214",
      "timestamp": 1702991221,
      "ems": null
    },
    {
      "latitude": 39.213043,
      "longitude": -8.031799,
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
      "heading": 256,
      "squawk": "3214",
      "timestamp": 1702991224,
      "ems": null
    },
    {
      "latitude": 39.212811,
      "longitude": -8.033325,
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
      "heading": 259,
      "squawk": "3214",
      "timestamp": 1702991228,
      "ems": null
    },
    {
      "latitude": 39.212585,
      "longitude": -8.034827,
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
      "heading": 260,
      "squawk": "3214",
      "timestamp": 1702991230,
      "ems": null
    },
    {
      "latitude": 39.212402,
      "longitude": -8.03632,
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
      "heading": 261,
      "squawk": "3214",
      "timestamp": 1702991234,
      "ems": null
    },
    {
      "latitude": 39.212219,
      "longitude": -8.038052,
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
      "heading": 262,
      "squawk": "3214",
      "timestamp": 1702991237,
      "ems": null
    },
    {
      "latitude": 39.212112,
      "longitude": -8.03949,
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
      "heading": 263,
      "squawk": "3214",
      "timestamp": 1702991239,
      "ems": null
    },
    {
      "latitude": 39.211929,
      "longitude": -8.041138,
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
      "heading": 262,
      "squawk": "3214",
      "timestamp": 1702991243,
      "ems": null
    },
    {
      "latitude": 39.211761,
      "longitude": -8.042708,
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
      "heading": 261,
      "squawk": "3214",
      "timestamp": 1702991246,
      "ems": null
    },
    {
      "latitude": 39.211578,
      "longitude": -8.044261,
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
      "heading": 261,
      "squawk": "3214",
      "timestamp": 1702991249,
      "ems": null
    },
    {
      "latitude": 39.211349,
      "longitude": -8.045933,
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
      "heading": 260,
      "squawk": "3214",
      "timestamp": 1702991252,
      "ems": null
    },
    {
      "latitude": 39.210812,
      "longitude": -8.050476,
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
      "heading": 261,
      "squawk": "3214",
      "timestamp": 1702991261,
      "ems": null
    },
    {
      "latitude": 39.21048,
      "longitude": -8.055606,
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
      "heading": 268,
      "squawk": "3214",
      "timestamp": 1702991270,
      "ems": null
    },
    {
      "latitude": 39.210579,
      "longitude": -8.057129,
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
      "heading": 277,
      "squawk": "3214",
      "timestamp": 1702991273,
      "ems": null
    },
    {
      "latitude": 39.210857,
      "longitude": -8.058655,
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
      "heading": 286,
      "squawk": "3214",
      "timestamp": 1702991276,
      "ems": null
    },
    {
      "latitude": 39.211304,
      "longitude": -8.060024,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702991279,
      "ems": null
    },
    {
      "latitude": 39.211899,
      "longitude": -8.061398,
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
      "heading": 299,
      "squawk": "3214",
      "timestamp": 1702991282,
      "ems": null
    },
    {
      "latitude": 39.212532,
      "longitude": -8.062866,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702991285,
      "ems": null
    },
    {
      "latitude": 39.213139,
      "longitude": -8.064087,
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
      "heading": 300,
      "squawk": "3214",
      "timestamp": 1702991288,
      "ems": null
    },
    {
      "latitude": 39.213696,
      "longitude": -8.06543,
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
      "heading": 298,
      "squawk": "3214",
      "timestamp": 1702991291,
      "ems": null
    },
    {
      "latitude": 39.214233,
      "longitude": -8.066772,
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
      "heading": 297,
      "squawk": "3214",
      "timestamp": 1702991294,
      "ems": null
    },
    {
      "latitude": 39.214813,
      "longitude": -8.068176,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702991297,
      "ems": null
    },
    {
      "latitude": 39.215286,
      "longitude": -8.069577,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702991300,
      "ems": null
    },
    {
      "latitude": 39.215839,
      "longitude": -8.071045,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702991303,
      "ems": null
    },
    {
      "latitude": 39.216293,
      "longitude": -8.072443,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702991306,
      "ems": null
    },
    {
      "latitude": 39.217327,
      "longitude": -8.075439,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702991312,
      "ems": null
    },
    {
      "latitude": 39.217793,
      "longitude": -8.076782,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702991315,
      "ems": null
    },
    {
      "latitude": 39.21817,
      "longitude": -8.077817,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702991317,
      "ems": null
    },
    {
      "latitude": 39.218811,
      "longitude": -8.079728,
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
      "heading": 293,
      "squawk": "3214",
      "timestamp": 1702991321,
      "ems": null
    },
    {
      "latitude": 39.22023,
      "longitude": -8.083907,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702991330,
      "ems": null
    },
    {
      "latitude": 39.221786,
      "longitude": -8.088266,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702991339,
      "ems": null
    },
    {
      "latitude": 39.22324,
      "longitude": -8.092346,
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
      "heading": 294,
      "squawk": "3214",
      "timestamp": 1702991348,
      "ems": null
    },
    {
      "latitude": 39.224823,
      "longitude": -8.096741,
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
      "heading": 295,
      "squawk": "3214",
      "timestamp": 1702991357,
      "ems": null
    },
    {
      "latitude": 39.225941,
      "longitude": -8.099121,
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
      "heading": 304,
      "squawk": "3214",
      "timestamp": 1702991363,
      "ems": null
    },
    {
      "latitude": 39.226227,
      "longitude": -8.09961,
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
      "heading": 309,
      "squawk": "3214",
      "timestamp": 1702991365,
      "ems": null
    },
    {
      "latitude": 39.227692,
      "longitude": -8.101521,
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
      "heading": 316,
      "squawk": "3214",
      "timestamp": 1702991369,
      "ems": null
    },
    {
      "latitude": 39.228874,
      "longitude": -8.102478,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "3214",
      "timestamp": 1702991372,
      "ems": null
    },
    {
      "latitude": 39.229988,
      "longitude": -8.103149,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 338,
      "squawk": "3214",
      "timestamp": 1702991375,
      "ems": null
    },
    {
      "latitude": 39.231014,
      "longitude": -8.103516,
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
      "heading": 345,
      "squawk": "3214",
      "timestamp": 1702991378,
      "ems": null
    },
    {
      "latitude": 39.232407,
      "longitude": -8.10373,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 356,
      "squawk": "3214",
      "timestamp": 1702991381,
      "ems": null
    },
    {
      "latitude": 39.23362,
      "longitude": -8.103638,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 5,
      "squawk": "3214",
      "timestamp": 1702991384,
      "ems": null
    },
    {
      "latitude": 39.234879,
      "longitude": -8.103271,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 17,
      "squawk": "3214",
      "timestamp": 1702991387,
      "ems": null
    },
    {
      "latitude": 39.236134,
      "longitude": -8.1026,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 25,
      "squawk": "3214",
      "timestamp": 1702991390,
      "ems": null
    },
    {
      "latitude": 39.237167,
      "longitude": -8.10182,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 34,
      "squawk": "3214",
      "timestamp": 1702991394,
      "ems": null
    },
    {
      "latitude": 39.238182,
      "longitude": -8.100769,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 40,
      "squawk": "3214",
      "timestamp": 1702991396,
      "ems": null
    },
    {
      "latitude": 39.239067,
      "longitude": -8.099609,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 47,
      "squawk": "3214",
      "timestamp": 1702991399,
      "ems": null
    },
    {
      "latitude": 39.239777,
      "longitude": -8.098357,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 56,
      "squawk": "3214",
      "timestamp": 1702991403,
      "ems": null
    },
    {
      "latitude": 39.240372,
      "longitude": -8.096924,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 63,
      "squawk": "3214",
      "timestamp": 1702991405,
      "ems": null
    },
    {
      "latitude": 39.240875,
      "longitude": -8.095312,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 70,
      "squawk": "3214",
      "timestamp": 1702991409,
      "ems": null
    },
    {
      "latitude": 39.241207,
      "longitude": -8.093689,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 78,
      "squawk": "3214",
      "timestamp": 1702991412,
      "ems": null
    },
    {
      "latitude": 39.241425,
      "longitude": -8.092207,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 81,
      "squawk": "3214",
      "timestamp": 1702991414,
      "ems": null
    },
    {
      "latitude": 39.241489,
      "longitude": -8.090454,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 89,
      "squawk": "3214",
      "timestamp": 1702991418,
      "ems": null
    },
    {
      "latitude": 39.241394,
      "longitude": -8.088806,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 94,
      "squawk": "3214",
      "timestamp": 1702991421,
      "ems": null
    },
    {
      "latitude": 39.241207,
      "longitude": -8.087402,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 101,
      "squawk": "3214",
      "timestamp": 1702991423,
      "ems": null
    },
    {
      "latitude": 39.240738,
      "longitude": -8.085699,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 114,
      "squawk": "3214",
      "timestamp": 1702991427,
      "ems": null
    },
    {
      "latitude": 39.240326,
      "longitude": -8.084656,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 120,
      "squawk": "3214",
      "timestamp": 1702991429,
      "ems": null
    },
    {
      "latitude": 39.2393,
      "longitude": -8.082947,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 127,
      "squawk": "3214",
      "timestamp": 1702991432,
      "ems": null
    },
    {
      "latitude": 39.238312,
      "longitude": -8.081758,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 138,
      "squawk": "3214",
      "timestamp": 1702991436,
      "ems": null
    },
    {
      "latitude": 39.237251,
      "longitude": -8.080933,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 149,
      "squawk": "3214",
      "timestamp": 1702991439,
      "ems": null
    },
    {
      "latitude": 39.236088,
      "longitude": -8.080261,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 159,
      "squawk": "3214",
      "timestamp": 1702991442,
      "ems": null
    },
    {
      "latitude": 39.235065,
      "longitude": -8.079956,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702991444,
      "ems": null
    },
    {
      "latitude": 39.233917,
      "longitude": -8.079668,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 170,
      "squawk": "3214",
      "timestamp": 1702991447,
      "ems": null
    },
    {
      "latitude": 39.232735,
      "longitude": -8.07959,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "3214",
      "timestamp": 1702991451,
      "ems": null
    },
    {
      "latitude": 39.23148,
      "longitude": -8.079651,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 183,
      "squawk": "3214",
      "timestamp": 1702991454,
      "ems": null
    },
    {
      "latitude": 39.230316,
      "longitude": -8.079834,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 189,
      "squawk": "3214",
      "timestamp": 1702991457,
      "ems": null
    },
    {
      "latitude": 39.229198,
      "longitude": -8.080139,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "3214",
      "timestamp": 1702991460,
      "ems": null
    },
    {
      "latitude": 39.228127,
      "longitude": -8.080627,
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
      "heading": 199,
      "squawk": "3214",
      "timestamp": 1702991463,
      "ems": null
    },
    {
      "latitude": 39.227058,
      "longitude": -8.081177,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 203,
      "squawk": "3214",
      "timestamp": 1702991466,
      "ems": null
    },
    {
      "latitude": 39.226078,
      "longitude": -8.081787,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702991469,
      "ems": null
    },
    {
      "latitude": 39.225056,
      "longitude": -8.082458,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702991472,
      "ems": null
    },
    {
      "latitude": 39.224403,
      "longitude": -8.082947,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 209,
      "squawk": "3214",
      "timestamp": 1702991474,
      "ems": null
    },
    {
      "latitude": 39.22316,
      "longitude": -8.083967,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702991478,
      "ems": null
    },
    {
      "latitude": 39.222214,
      "longitude": -8.084778,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "3214",
      "timestamp": 1702991481,
      "ems": null
    },
    {
      "latitude": 39.221283,
      "longitude": -8.085571,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702991484,
      "ems": null
    },
    {
      "latitude": 39.220322,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "3214",
      "timestamp": 1702991487,
      "ems": null
    },
    {
      "latitude": 39.219498,
      "longitude": -8.087072,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702991490,
      "ems": null
    },
    {
      "latitude": 39.218536,
      "longitude": -8.087891,
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
      "heading": 213,
      "squawk": "3214",
      "timestamp": 1702991493,
      "ems": null
    },
    {
      "latitude": 39.217838,
      "longitude": -8.08844,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "3214",
      "timestamp": 1702991496,
      "ems": null
    },
    {
      "latitude": 39.215286,
      "longitude": -8.090356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "3214",
      "timestamp": 1702991505,
      "ems": null
    },
    {
      "latitude": 39.213776,
      "longitude": -8.091491,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 207,
      "squawk": "3214",
      "timestamp": 1702991510,
      "ems": null
    },
    {
      "latitude": 39.212769,
      "longitude": -8.092088,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3214",
      "timestamp": 1702991514,
      "ems": null
    },
    {
      "latitude": 39.211945,
      "longitude": -8.092625,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "3214",
      "timestamp": 1702991517,
      "ems": null
    },
    {
      "latitude": 39.209507,
      "longitude": -8.094299,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "3214",
      "timestamp": 1702991526,
      "ems": null
    },
    {
      "latitude": 39.207783,
      "longitude": -8.095215,
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
      "heading": 194,
      "squawk": "3214",
      "timestamp": 1702991532,
      "ems": null
    },
    {
      "latitude": 39.206715,
      "longitude": -8.095337,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 188,
      "squawk": "3214",
      "timestamp": 1702991535,
      "ems": null
    },
    {
      "latitude": 39.205597,
      "longitude": -8.095154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 169,
      "squawk": "3214",
      "timestamp": 1702991538,
      "ems": null
    },
    {
      "latitude": 39.20462,
      "longitude": -8.094834,
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
      "heading": 167,
      "squawk": "3214",
      "timestamp": 1702991541,
      "ems": null
    },
    {
      "latitude": 39.203659,
      "longitude": -8.094536,
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
      "heading": 165,
      "squawk": "3214",
      "timestamp": 1702991544,
      "ems": null
    },
    {
      "latitude": 39.202663,
      "longitude": -8.094055,
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
      "heading": 158,
      "squawk": "3214",
      "timestamp": 1702991547,
      "ems": null
    },
    {
      "latitude": 39.201874,
      "longitude": -8.09352,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 149,
      "squawk": "3214",
      "timestamp": 1702991550,
      "ems": null
    },
    {
      "latitude": 39.201004,
      "longitude": -8.092625,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 139,
      "squawk": "3214",
      "timestamp": 1702991553,
      "ems": null
    },
    {
      "latitude": 39.200291,
      "longitude": -8.091736,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 134,
      "squawk": "3214",
      "timestamp": 1702991556,
      "ems": null
    },
    {
      "latitude": 39.199593,
      "longitude": -8.090759,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 131,
      "squawk": "3214",
      "timestamp": 1702991559,
      "ems": null
    },
    {
      "latitude": 39.198898,
      "longitude": -8.089759,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 131,
      "squawk": "3214",
      "timestamp": 1702991562,
      "ems": null
    },
    {
      "latitude": 39.198288,
      "longitude": -8.088867,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 132,
      "squawk": "3214",
      "timestamp": 1702991565,
      "ems": null
    },
    {
      "latitude": 39.197525,
      "longitude": -8.087848,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 134,
      "squawk": "3214",
      "timestamp": 1702991568,
      "ems": null
    },
    {
      "latitude": 39.19693,
      "longitude": -8.087072,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "3214",
      "timestamp": 1702991571,
      "ems": null
    },
    {
      "latitude": 39.196053,
      "longitude": -8.085999,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 136,
      "squawk": "3214",
      "timestamp": 1702991574,
      "ems": null
    },
    {
      "latitude": 39.195328,
      "longitude": -8.085161,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 137,
      "squawk": "3214",
      "timestamp": 1702991577,
      "ems": null
    },
    {
      "latitude": 39.193268,
      "longitude": -8.082475,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 131,
      "squawk": "3214",
      "timestamp": 1702991586,
      "ems": null
    },
    {
      "latitude": 39.192001,
      "longitude": -8.080505,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 127,
      "squawk": "3214",
      "timestamp": 1702991592,
      "ems": null
    },
    {
      "latitude": 39.19149,
      "longitude": -8.07959,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "3214",
      "timestamp": 1702991595,
      "ems": null
    },
    {
      "latitude": 39.191025,
      "longitude": -8.078414,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "3214",
      "timestamp": 1702991598,
      "ems": null
    },
    {
      "latitude": 39.19075,
      "longitude": -8.077161,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 106,
      "squawk": "3214",
      "timestamp": 1702991602,
      "ems": null
    },
    {
      "latitude": 39.190521,
      "longitude": -8.076026,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 101,
      "squawk": "3214",
      "timestamp": 1702991604,
      "ems": null
    },
    {
      "latitude": 39.190422,
      "longitude": -8.074219,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 92,
      "squawk": "3214",
      "timestamp": 1702991609,
      "ems": null
    },
    {
      "latitude": 39.190567,
      "longitude": -8.072921,
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
      "heading": 79,
      "squawk": "3214",
      "timestamp": 1702991612,
      "ems": null
    },
    {
      "latitude": 39.190796,
      "longitude": -8.071727,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 72,
      "squawk": "3214",
      "timestamp": 1702991615,
      "ems": null
    },
    {
      "latitude": 39.191166,
      "longitude": -8.070618,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 65,
      "squawk": "3214",
      "timestamp": 1702991618,
      "ems": null
    },
    {
      "latitude": 39.191536,
      "longitude": -8.070007,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 50,
      "squawk": "3214",
      "timestamp": 1702991621,
      "ems": null
    },
    {
      "latitude": 39.19194,
      "longitude": -8.069398,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 48,
      "squawk": "3214",
      "timestamp": 1702991622,
      "ems": null
    },
    {
      "latitude": 39.192719,
      "longitude": -8.068563,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 42,
      "squawk": "3214",
      "timestamp": 1702991626,
      "ems": null
    },
    {
      "latitude": 39.193913,
      "longitude": -8.06781,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 23,
      "squawk": "3214",
      "timestamp": 1702991630,
      "ems": null
    },
    {
      "latitude": 39.194687,
      "longitude": -8.067369,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702991633,
      "ems": null
    },
    {
      "latitude": 39.195145,
      "longitude": -8.067129,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 21,
      "squawk": "3214",
      "timestamp": 1702991635,
      "ems": null
    },
    {
      "latitude": 39.195923,
      "longitude": -8.066772,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 20,
      "squawk": "3214",
      "timestamp": 1702991638,
      "ems": null
    }
  ]
};